import * as Icon from "../components/icons";
import { store as selectionStore } from "../stores/selection-store";
import { store as notesStore } from "../stores/note-store";
import { store as nbStore } from "../stores/notebook-store";
import { store as editorStore } from "../stores/editor-store";
import { store as trashStore } from "../stores/trash-store";
import { db } from "./index";
import { showMoveNoteDialog } from "../components/dialogs/movenotedialog";
import { confirm } from "../components/dialogs/confirm";

function createOption(icon, onClick) {
  return {
    icon,
    onClick: async () => {
      await onClick.call(this, selectionStore);
      selectionStore.toggleSelectionMode(false);
    },
  };
}

function createOptions(options = []) {
  return [...options, DeleteOption];
}

const DeleteOption = createOption(Icon.Trash, async function (state) {
  if (
    !(await confirm(Icon.Trash, "Delete", "Are you sure you want to proceed?"))
  )
    return;
  const item = state.selectedItems[0];
  var isAnyNoteOpened = false;
  const items = state.selectedItems.map((item) => {
    if (item.id === editorStore.get().session.id) isAnyNoteOpened = true;
    if (item.locked) return 0;
    return item.id;
  });

  if (isAnyNoteOpened) {
    editorStore.newSession();
  }

  if (item.type === "note") {
    await db.notes.delete(...items);
    notesStore.refresh();
  } else if (item.type === "notebook") {
    await db.notebooks.delete(...items);
    nbStore.refresh();
  } else if (item.notebookId) {
    // its a topic
    await db.notebooks.notebook(item.notebookId).topics.delete(...items);
    // TODO refresh topics
  }
});

const FavoriteOption = createOption(Icon.Star, function (state) {
  // we know only notes can be favorited
  state.selectedItems.forEach(async (item) => {
    if (item.favorite) return;
    await db.notes.note(item.id).favorite();
  });
  notesStore.refresh();
});

const UnfavoriteOption = createOption(Icon.Star, function (state) {
  // we know only notes can be favorited
  state.selectedItems.forEach(async (item) => {
    if (!item.favorite) return;
    await db.notes.note(item.id).favorite();
  });
  notesStore.setContext({ type: "favorites" });
});

const AddToNotebookOption = createOption(Icon.Plus, async function (state) {
  const items = state.selectedItems.map((item) => item.id);
  if (await showMoveNoteDialog(items)) {
    //TODO show proper snack
    console.log("Notes moved successfully!");
  }
});

const RestoreOption = createOption(Icon.Restore, async function (state) {
  const items = state.selectedItems.map((item) => item.id);
  await db.trash.restore(...items);
  trashStore.refresh();
});

const NotesOptions = createOptions([AddToNotebookOption, FavoriteOption]);
const NotebooksOptions = createOptions();
const TopicOptions = createOptions();
const TrashOptions = createOptions([RestoreOption]);
const FavoritesOptions = createOptions([UnfavoriteOption]);

export default {
  NotebooksOptions,
  NotesOptions,
  TopicOptions,
  TrashOptions,
  FavoritesOptions,
};
