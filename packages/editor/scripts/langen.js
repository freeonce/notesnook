/*
This file is part of the Notesnook project (https://notesnook.com/)

Copyright (C) 2022 Streetwriters (Private) Limited

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/**
 * Quick & dirty script to download & transform all language details from
 * the PrismJS repo.
 */
require("isomorphic-fetch");

async function main() {
  const response = await fetch(
    "https://github.com/PrismJS/prism/raw/master/components.json"
  );
  if (!response.ok) return;
  const json = await response.json();
  let output = [];
  for (const key in json.languages) {
    if (key === "meta") continue;
    const language = json.languages[key];
    output.push({
      filename: key,
      title: language.title,
      alias: language.alias
        ? Array.isArray(language.alias)
          ? language.alias
          : [language.alias]
        : undefined
    });
  }
  console.log(JSON.stringify(output));
}
main();
