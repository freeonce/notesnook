(this.webpackJsonptiptap=this.webpackJsonptiptap||[]).push([[1],{123:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n.n(r),i=n(25),a=n.n(i),c=(n(83),n(84),n(59)),l=n(0);var s=function(){return Object(l.jsx)(c.a,{})},u=function(e){e&&e instanceof Function&&n.e(5).then(n.bind(null,129)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))};n(118),n(119),n(120),n(121),n(122);a.a.render(Object(l.jsx)(o.a.StrictMode,{children:Object(l.jsx)(s,{})}),document.getElementById("root")),u()},16:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i}));var r={selection:"editor-event:selection",content:"editor-event:content",title:"editor-event:title",scroll:"editor-event:scroll",history:"editor-event:history",newtag:"editor-event:newtag",tag:"editor-event:tag",filepicker:"editor-event:picker",download:"editor-event:download-attachment",logger:"native:logger",back:"editor-event:back",pro:"editor-event:pro",monograph:"editor-event:monograph",properties:"editor-event:properties",fullscreen:"editor-event:fullscreen"};function o(){return!!window.ReactNativeWebView}function i(t,n){o()?window.ReactNativeWebView.postMessage(JSON.stringify({type:r[t]||t,value:n,sessionId:e.sessionId})):console.log(t,n)}globalThis.logger=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var a=n.map((function(e){return"string"!==typeof e?JSON.stringify(e):e})).join(" ");i(r.logger,"[".concat(e,"]: ")+a)},globalThis.post=i}).call(this,n(33))},34:function(e,t,n){e.exports={btn:"styles_btn__19MaA",btn_header:"styles_btn_header__2xGXR",titleBar:"styles_titleBar__2hePW"}},40:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(47),o=n.n(r),i=n(15);function a(e){var t=document.getElementById("variables-nn"),n=document.getElementsByTagName("head")[0];t&&n.removeChild(t);var r=document.createElement("style");r.type="text/css",r.id="variables-nn",r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e)),n.insertBefore(r,function(){var e,t=Object(i.a)(document.getElementsByTagName("style"));try{for(t.s();!(e=t.n()).done;){var n=e.value;if(n.innerHTML.includes("#root"))return n}}catch(r){t.e(r)}finally{t.f()}}())}function c(e){var t=":root {";for(var n in e)t+="--nn_".concat(n,": ").concat(e[n],";");return t+"}"}var l={accent:"#008837",shade:"#00883712",fg:"#008837",normal:"black",icon:"gray",transGray:"#00000010",errorBg:"#FFB6C1",errorText:"#ff6961",successBg:"#DFF2BF",successText:"#4F8A10",warningBg:"#FF990020",warningText:"#FF9900",red:"#f44336",orange:"#FF9800",yellow:"#FFD600",green:"#4CAF50",blue:"#2196F3",purple:"#673AB7",gray:"#9E9E9E",discord:"#5865F2",night:!1,bg:"#ffffff",navbg:"#f7f7f7",nav:"#f7f7f7",pri:"#424242",sec:"white",light:"#ffffff",input:"transparent",heading:"#212121",border:"#E8E8E8",placeholder:"#a9a9a9"};a(c(l));var s=o()((function(e,t){return{colors:l,setColors:function(t){a(c(t)),e({colors:t})}}}))},59:function(e,t,n){"use strict";(function(e){var r=n(7),o=n(9),i=n(6),a=n(35),c=n(52),l=n(1),s=n(63),u=n(64),d=n(40),f=n(16),b=n(65),v=n(75),g=n(76),h=n(77),p=n(0),j=function(t){var n,r,c=t.editorTheme,u=t.toolbarTheme,d=t.settings,j=Object(l.useState)(0),O=Object(i.a)(j,2),y=O[0],x=O[1],C=Object(l.useRef)(null),w=Object(l.useRef)(null),S=Object(l.useState)(!1),T=Object(i.a)(S,2),R=T[0],k=T[1];Object(a.d)({claims:{premium:d.premium},onPermissionDenied:function(){post(f.a.pro)}});var _=Object(a.e)({onUpdate:function(t){var n=t.editor;e.editorController.contentChange(n)},onSelectionUpdate:function(e){e.transaction.scrollIntoView()},onOpenAttachmentPicker:function(t,n){return e.editorController.openFilePicker(n),!0},onDownloadAttachment:function(t,n){return e.editorController.downloadAttachment(n),!0},theme:c,element:R&&C.current||void 0,editable:!d.readonly,editorProps:{editable:function(){return!d.readonly}},content:null===(n=e.editorController)||void 0===n||null===(r=n.content)||void 0===r?void 0:r.current,isMobile:!0,isKeyboardOpen:d.keyboardShown},[R,d.readonly,y]),I=Object(l.useCallback)((function(){x((function(e){return e+1})),globalThis.editorController.setTitlePlaceholder("Note title")}),[]),D=Object(s.a)(I),F=Object(l.useRef)(D);return globalThis.editorController=D,globalThis.editor=_,Object(l.useLayoutEffect)((function(){k(!0)}),[]),Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)("div",{style:{display:"flex",flex:1,flexDirection:"column",maxWidth:"100vw",marginBottom:"5px"},children:[Object(p.jsx)(b.a,{hasRedo:(null===_||void 0===_?void 0:_.can().redo())||!1,hasUndo:(null===_||void 0===_?void 0:_.can().undo())||!1,settings:d,noHeader:d.noHeader||!1}),Object(p.jsxs)("div",{onScroll:D.scroll,ref:w,style:{overflowY:"scroll",flexDirection:"column",height:"100%",flexGrow:1,flexShrink:1,display:"flex"},children:[d.noHeader?null:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(g.a,{}),Object(p.jsx)(h.a,{titlePlaceholder:D.titlePlaceholder,readonly:d.readonly,controller:F,title:D.title}),Object(p.jsx)(v.a,{container:w})]}),Object(p.jsx)(m,{ref:C}),Object(p.jsx)("div",{onDoubleClick:function(){var e,t,n=null===(e=globalThis.editor)||void 0===e?void 0:e.state.doc.content.size;n&&(null===(t=globalThis.editor)||void 0===t||t.chain().focus().insertContentAt(n-1,"<p></p>",{updateSelection:!0}).run())},style:{flexShrink:0,height:150,width:"100%"}})]}),d.noToolbar||!R?null:Object(p.jsx)(a.b,{sx:{pl:"10px",pt:"5px",minHeight:45},theme:u,editor:_,location:"bottom",tools:Object(o.a)(d.tools)})]})})},m=Object(l.memo)(Object(l.forwardRef)((function(e,t){var n=Object(d.a)((function(e){return e.colors}));return Object(p.jsx)("div",{ref:t,style:{padding:12,paddingTop:0,flex:1,color:n.pri,marginTop:-12}})})),(function(){return!0}));t.a=function(){var e=Object(u.a)(),t=Object(d.a)((function(e){return e.colors})),n=Object(c.useTheme)({accent:null===t||void 0===t?void 0:t.accent,scale:1,theme:null!==t&&void 0!==t&&t.night?"dark":"light"});!function(e){e.space=[0,10,12,18],e.space.small="10px",e.buttons.menuitem=Object(r.a)(Object(r.a)({},e.buttons.menuitem),{},{height:"50px",paddingX:"20px",borderBottomWidth:0}),e.iconSizes={big:20,medium:18,small:18},e.fontSizes=Object(r.a)(Object(r.a)({},e.fontSizes),{},{subBody:"0.8rem",body:"0.9rem"}),e.radii=Object(r.a)(Object(r.a)({},e.radii),{},{small:5}),e.buttons.menuitem=Object(r.a)(Object(r.a)({},e.buttons.menuitem),{},{px:5,height:"45px"})}(n);var o=Object(c.useTheme)({accent:null===t||void 0===t?void 0:t.accent,scale:1,theme:null!==t&&void 0!==t&&t.night?"dark":"light"});return o.colors.background=(null===t||void 0===t?void 0:t.bg)||"#f0f0f0",o.space=[0,10,12,20],Object(p.jsx)(a.a,{children:Object(p.jsx)(j,{editorTheme:o,toolbarTheme:n,settings:e})})}}).call(this,n(33))},63:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var r=n(6),o=n(1),i=n(40),a=n(16);function c(t){var n=Object(o.useState)(""),c=Object(r.a)(n,2),l=c[0],s=c[1],u=Object(o.useState)("Note title"),d=Object(r.a)(u,2),f=d[0],b=d[1],v=Object(o.useRef)(null),g=Object(o.useRef)({selectionChange:null,change:null}),h=Object(o.useCallback)((function(e){}),[]),p=Object(o.useCallback)((function(e){Object(a.c)(a.a.title,e)}),[]),j=Object(o.useCallback)((function(e){if(e){var t;if("number"===typeof g.current.change)clearTimeout(null===(t=g.current)||void 0===t?void 0:t.change);g.current.change=setTimeout((function(){v.current=e.getHTML(),Object(a.c)(a.a.content,v.current)}),300)}}),[]),m=Object(o.useCallback)((function(e){}),[]),O=Object(o.useCallback)((function(){t()}),[t]),y=Object(o.useCallback)((function(n){if("{"===(null===n||void 0===n?void 0:n.data[0])){var r=JSON.parse(n.data),o=r.type,c=r.value;switch(e.sessionId=r.sessionId,o){case"native:html":v.current=c,t();break;case"native:theme":i.a.getState().setColors(r.value);break;case"native:title":s(c);break;case"native:titleplaceholder":b(c)}Object(a.c)(o)}}),[t]);Object(o.useEffect)((function(){if(Object(a.b)()){var e=navigator.vendor.match(/apple/i),t=document;return e&&(t=window),console.log("recreating messaging"),t.addEventListener("message",y),function(){t.removeEventListener("message",y)}}}),[y]);var x=Object(o.useCallback)((function(e){Object(a.c)(a.a.filepicker,e)}),[]),C=Object(o.useCallback)((function(e){Object(a.c)(a.a.download,e)}),[]);return{contentChange:j,selectionChange:h,titleChange:p,scroll:m,title:l,setTitle:s,titlePlaceholder:f,setTitlePlaceholder:b,openFilePicker:x,downloadAttachment:C,content:v,onUpdate:O}}}).call(this,n(33))},64:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var r=n(6),o=n(7),i=n(35),a=n(1),c=localStorage.getItem("editorSettings"),l={fullscreen:!1,deviceMode:"mobile",premium:!1,tools:JSON.parse(JSON.stringify(Object(i.c)().default)),noToolbar:e.noToolbar,noHeader:e.noHeader,readonly:e.readonly};e.settingsController={update:function(t){var n=Object(o.a)(Object(o.a)({},t),{},{noToolbar:e.noToolbar||t.noToolbar,noHeader:e.noHeader||t.noHeader,readonly:e.readonly||t.readonly});JSON.stringify(n)!==JSON.stringify(e.settingsController.previous)&&(e.settingsController.set&&e.settingsController.set(n),t?localStorage.setItem("editorSettings",JSON.stringify(n)):localStorage.removeItem("editorSettings"),settingsController.previous=Object(o.a)({},n))},previous:c?JSON.parse(c):Object(o.a)({},l)};var s=function(){var t=Object(a.useState)(Object(o.a)({},e.settingsController.previous)),n=Object(r.a)(t,2),i=n[0],c=n[1];return e.settingsController.set=c,i}}).call(this,n(33))},65:function(e,t,n){"use strict";n.d(t,"a",(function(){return S}));var r=n(66),o=n.n(r),i=n(67),a=n.n(i),c=n(68),l=n.n(c),s=n(69),u=n.n(s),d=n(70),f=n.n(d),b=n(71),v=n.n(b),g=n(72),h=n.n(g),p=n(73),j=n.n(p),m=(n(1),n(74)),O=n(16),y=n(34),x=n.n(y),C=n(0),w=function(e){var t=e.onPress,n=e.children,r=e.style,o=e.preventDefault,i=void 0===o||o;return Object(C.jsx)("button",{className:x.a.btn_header,style:r,onMouseDown:function(e){i&&e.preventDefault(),t()},children:n})};function S(e){var t=e.noHeader,n=e.settings,r=e.hasUndo,i=e.hasRedo,c=Object(m.a)();return Object(C.jsx)("div",{style:{display:"flex",alignItems:"center",height:"".concat(t?c.top:50+c.top,"px"),backgroundColor:"var(--nn_bg)",position:"sticky",width:"100vw"},children:t?null:Object(C.jsxs)("div",{style:{display:"flex",width:"100%",justifyContent:"space-between",flexDirection:"row",paddingTop:c.top,height:50,alignItems:"center"},children:["mobile"===n.deviceMode||n.fullscreen?Object(C.jsx)(w,{onPress:function(){post(O.a.back)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginLeft:6,width:40,height:40,display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",position:"relative"},children:Object(C.jsx)(o.a,{size:27,style:{position:"absolute"},color:"var(--nn_pri)"})}):Object(C.jsx)("div",{}),Object(C.jsxs)("div",{style:{display:"flex",alignItems:"center",flexDirection:"row"},children:[Object(C.jsx)(w,{onPress:function(){var e;null===(e=editor)||void 0===e||e.commands.undo()},style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(f.a,{color:r?"var(--nn_pri)":"var(--nn_nav)",size:25,style:{position:"absolute"}})}),Object(C.jsx)(w,{onPress:function(){var e;null===(e=editor)||void 0===e||e.commands.redo()},style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(v.a,{color:i?"var(--nn_pri)":"var(--nn_nav)",size:25,style:{position:"absolute"}})}),!n.premium&&Object(C.jsx)(w,{onPress:function(){post(O.a.pro)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(l.a,{size:25,style:{position:"absolute"},color:"orange"})}),Object(C.jsx)(w,{onPress:function(){var e;null===(e=editor)||void 0===e||e.commands.startSearch()},style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(j.a,{size:25,style:{position:"absolute"},color:"var(--nn_pri)"})}),Object(C.jsx)(w,{onPress:function(){post(O.a.monograph)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(a.a,{size:25,style:{position:"absolute"},color:"var(--nn_pri)"})}),"mobile"===n.deviceMode||n.fullscreen?null:Object(C.jsx)(w,{onPress:function(){post(O.a.fullscreen)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:10,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(h.a,{size:25,style:{position:"absolute"},color:"var(--nn_pri)"})}),Object(C.jsx)(w,{onPress:function(){post(O.a.properties)},preventDefault:!1,style:{borderWidth:0,borderRadius:100,color:"var(--nn_icon)",marginRight:12,width:39,height:39,display:"flex",justifyContent:"center",alignItems:"center",position:"relative"},children:Object(C.jsx)(u.a,{size:25,style:{position:"absolute"},color:"var(--nn_pri)"})})]})]})})}},74:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return c}));var r=n(6),o=n(1),i=localStorage.getItem("safeAreaInsets"),a=i?JSON.parse(i):{top:0,bottom:0,left:0,right:0};e.safeAreaController={update:function(e){safeAreaController.set&&safeAreaController.set(e),safeAreaController.previous=e,localStorage.setItem("safeAreaInsets",JSON.stringify(e))},reset:function(){safeAreaController.set&&safeAreaController.set(a)},previous:a};var c=function(){var t=Object(o.useState)(e.safeAreaController.previous),n=Object(r.a)(t,2),i=n[0],a=n[1];return e.safeAreaController.set=a,i}}).call(this,n(33))},75:function(e,t,n){"use strict";var r=n(6),o=n(1),i=n.n(o),a=n(0);function c(e){var t=e.container,n=Object(o.useState)({date:"",saved:""}),c=Object(r.a)(n,2),l=c[0],s=c[1],u=Object(o.useState)(!1),d=Object(r.a)(u,2),f=d[0],b=d[1],v=Object(o.useRef)(!1),g=Object(o.useRef)(0),h=Object(o.useRef)(0),p=Object(o.useState)("0 words"),j=Object(r.a)(p,2),m=j[0],O=j[1],y=Object(o.useRef)(m),x=Object(o.useRef)(0),C=Object(o.useRef)({set:s});globalThis.statusBar=C;var w=i.a.useCallback((function(e){var t=e.target.scrollTop;t<200?v.current&&(v.current=!1,b(!1),h.current=Date.now(),g.current=t):Date.now()-h.current<300||(t>g.current?(b(!1),v.current=!1):(b(!0),v.current=!0),h.current=Date.now(),g.current=t)}),[]);Object(o.useEffect)((function(){y.current=m}),[m]),Object(o.useEffect)((function(){return clearInterval(x.current),x.current=setInterval((function(){var e,t,n,r=(null===(e=editor)||void 0===e||null===(t=e.storage)||void 0===t||null===(n=t.characterCount)||void 0===n?void 0:n.words())+" words";y.current!==r&&O(r)}),3e3),function(){clearInterval(x.current)}}),[]),Object(o.useEffect)((function(){var e=t.current;return null===e||void 0===e||e.addEventListener("scroll",w),function(){null===e||void 0===e||e.removeEventListener("scroll",w)}}),[w,t]);var S={marginTop:0,marginBottom:0,fontSize:"12px",color:"var(--nn_icon)",marginRight:8,paddingBottom:0};return Object(a.jsxs)("div",{style:{flexDirection:"row",display:"flex",paddingRight:12,paddingLeft:12,position:f?"sticky":"relative",top:-3,backgroundColor:"var(--nn_bg)",zIndex:1,justifyContent:f?"center":"flex-start",paddingTop:2,paddingBottom:2},children:[Object(a.jsx)("p",{style:S,children:m}),Object(a.jsx)("p",{style:S,children:l.date}),Object(a.jsx)("p",{style:S,children:l.saved})]})}t.a=i.a.memo(c,(function(){return!0}))},76:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return s}));var r=n(6),o=n(1),i=n(16),a=n(34),c=n.n(a),l=n(0);function s(){var t=Object(o.useState)([]),n=Object(r.a)(t,2),a=n[0],s=n[1],u=Object(o.useRef)({setTags:s});e.editorTags=u;var d=function(){var e,t;null!==(e=editor)&&void 0!==e&&e.isFocused&&(editor.commands.blur(),null===(t=editorTitle.current)||void 0===t||t.blur());post(i.a.newtag)};return Object(l.jsxs)("div",{style:{padding:"0px 12px",display:"flex",alignItems:"center",marginTop:10},children:[Object(l.jsxs)("button",{className:c.a.btn,onMouseUp:function(e){e.preventDefault(),d()},onMouseDown:function(e){return e.preventDefault()},onTouchEnd:function(e){e.preventDefault(),d()},style:{borderWidth:0,backgroundColor:"var(--nn_nav)",marginRight:5,borderRadius:100,padding:"0px 10px",fontFamily:"Open Sans",display:"flex",alignItems:"center",height:"30px"},children:[0===a.length?Object(l.jsx)("p",{style:{marginRight:4,fontSize:13,color:"var(--nn_icon)",userSelect:"none"},children:"Add a tag"}):null,Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"20",height:"20",viewBox:"0 0 24 24",children:Object(l.jsx)("path",{fill:"var(--nn_accent)",d:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"})})]}),a.map((function(e){return Object(l.jsxs)("button",{className:c.a.btn,style:{borderWidth:0,backgroundColor:"var(--nn_nav)",marginRight:5,borderRadius:100,padding:"0px 10px",height:"30px",fontFamily:"Open Sans",fontSize:13,color:"var(--nn_icon)"},onMouseUp:function(t){t.preventDefault(),post(i.a.tag,e.title)},onMouseDown:function(e){return e.preventDefault()},onTouchEnd:function(t){t.preventDefault(),post(i.a.tag,e.title)},children:["#",e.alias]})}))]})}}).call(this,n(33))},77:function(e,t,n){"use strict";(function(e){var r=n(1),o=n.n(r),i=n(34),a=n.n(i),c=n(0);function l(t){var n=t.controller,o=t.title,i=t.titlePlaceholder,l=t.readonly,s=Object(r.useRef)(null),u=Object(r.useRef)(!0);return e.editorTitle=s,Object(r.useEffect)((function(){s.current&&(u.current=!1,s.current.value=o,u.current=!0)}),[o]),Object(c.jsx)("input",{ref:s,className:a.a.titleBar,contentEditable:!l,disabled:l,style:{height:50,fontSize:25,width:"100%",boxSizing:"border-box",borderWidth:0,paddingRight:12,paddingLeft:12,fontWeight:600,fontFamily:"Open Sans",backgroundColor:"transparent",color:"var(--nn_heading)"},onChange:function(e){var t;u.current&&(null===(t=n.current)||void 0===t||t.titleChange(e.target.value))},placeholder:i})}t.a=o.a.memo(l,(function(e,t){return e.title===t.title&&(e.titlePlaceholder===t.titlePlaceholder&&e.readonly===t.readonly)}))}).call(this,n(33))},83:function(e,t,n){},84:function(e,t,n){}},[[123,2,3]]]);