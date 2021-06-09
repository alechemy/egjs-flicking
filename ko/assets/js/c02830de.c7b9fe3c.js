(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{162:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return u})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(8),i=(t(0),t(197)),o=t(204),l=t(205),c={title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},s={unversionedId:"listening-to-events",id:"version-4.0.0/listening-to-events",isDocsHomePage:!1,title:"Listening to Events",description:"<Tabs",source:"@site/versioned_docs/version-4.0.0/listening-to-events.mdx",sourceDirName:".",slug:"/listening-to-events",permalink:"/ko/docs/listening-to-events",editUrl:null,version:"4.0.0",frontMatter:{title:"Listening to Events",id:"listening-to-events",slug:"/listening-to-events",custom_edit_url:null},sidebar:"version-4.0.0/docs",previous:{title:"Using the Methods",permalink:"/ko/docs/using-the-methods"},next:{title:"Handling errors",permalink:"/ko/docs/error-handling"}},u=[],b={toc:u};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)(o.a,{groupId:"cfc",defaultValue:"js",lazy:!0,values:[{label:"JavaScript",value:"js"},{label:"React",value:"react"},{label:"Vue",value:"vue"},{label:"Angular",value:"angular"},{label:"Preact",value:"preact"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"js",mdxType:"TabItem"},Object(i.b)("p",null,"You can listen to Flicking's events with ",Object(i.b)("a",{parentName:"p",href:"api/Flicking#on"},"Flicking#on")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"// If you're using a package manager\nimport { EVENTS } from \"@egjs/flicking\";\n// Or, if you're using a CDN\nconst EVENTS = Flicking.EVENTS;\n\nflicking.on(EVENTS.MOVE, evt => {\n  console.log(evt);\n})\n"))),Object(i.b)(l.a,{value:"react",mdxType:"TabItem"},Object(i.b)("p",null,"All events are prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"on-"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"camelCase"),"d."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/react-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n'))),Object(i.b)(l.a,{value:"vue",mdxType:"TabItem"},Object(i.b)("p",null,"All event names are renamed to ",Object(i.b)("inlineCode",{parentName:"p"},"kebab-case"),", following the ",Object(i.b)("a",{parentName:"p",href:"https://vuejs.org/v2/guide/components-custom-events.html#Event-Names"},"Vue event naming convention"),"."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<Flicking\n  @ready="e => { ... }"\n  @move-end="e => { ... }"\n  v-on:need-panel="e => { ... }"\n>\n   {{ ... }}\n</Flicking>\n'))),Object(i.b)(l.a,{value:"angular",mdxType:"TabItem"},Object(i.b)("p",null,"You can listen events of the ",Object(i.b)("inlineCode",{parentName:"p"},"ngx-flicking")," using Angular's ",Object(i.b)("a",{parentName:"p",href:"https://angular.io/guide/event-binding"},"event binding"),".",Object(i.b)("br",{parentName:"p"}),"\n","In addition, we're providing one additional event to Angular.",Object(i.b)("br",{parentName:"p"}),"\n",Object(i.b)("inlineCode",{parentName:"p"},"renderPanelChange")," event is an Angular-exclusive event that can be used for ",Object(i.b)("a",{parentName:"p",href:"api/Flicking#renderOnlyVisible"},"renderOnlyVisible")," event."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-html"},'<ngx-flicking\n  [options]="{ needPanelThreshold: 50, renderOnlyVisible: true }"\n  (needPanel)="onNeedPanel($event)"\n  (renderPanelChange)="onRenderPanelChange($event)">\n  {{ ... }}\n</ngx-flicking>\n'))),Object(i.b)(l.a,{value:"preact",mdxType:"TabItem"},Object(i.b)("p",null,"All events are prefixed with ",Object(i.b)("inlineCode",{parentName:"p"},"on-"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"camelCase"),"d."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-tsx"},'import Flicking, { MoveEvent, NeedPanelEvent } from "@egjs/preact-flicking";\n\n<Flicking\n  onMove={(e: MoveEvent) => {\n    console.log(e);\n  }}\n  onNeedPanel={(e: NeedPanelEvent) => {\n    console.log(e);\n  }}\n>\n  {...}\n</Flicking>\n')))),Object(i.b)("p",null,"See all available events at ",Object(i.b)("a",{parentName:"p",href:"api/Flicking#events"},"Flicking#events"),"."))}p.isMDXComponent=!0},197:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return v}));var a=t(0),r=t.n(a);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=r.a.createContext({}),u=function(e){var n=r.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},b=function(e){var n=u(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},d=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=u(t),d=a,v=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return t?r.a.createElement(v,l(l({ref:n},s),{},{components:t})):r.a.createElement(v,l({ref:n},s))}));function v(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},198:function(e,n,t){"use strict";function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}n.a=function(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}},200:function(e,n,t){"use strict";var a=t(0),r=Object(a.createContext)(void 0);n.a=r},201:function(e,n,t){"use strict";var a=t(0),r=t(200);n.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},204:function(e,n,t){"use strict";var a=t(0),r=t.n(a),i=t(201),o=t(198),l=t(59),c=t.n(l);var s=37,u=39;n.a=function(e){var n=e.lazy,t=e.block,l=e.defaultValue,b=e.values,p=e.groupId,d=e.className,v=Object(i.a)(),m=v.tabGroupChoices,g=v.setTabGroupChoices,f=Object(a.useState)(l),O=f[0],j=f[1],y=a.Children.toArray(e.children),h=[];if(null!=p){var N=m[p];null!=N&&N!==O&&b.some((function(e){return e.value===N}))&&j(N)}var k=function(e){var n=e.currentTarget,t=h.indexOf(n),a=b[t].value;j(a),null!=p&&(g(p,a),setTimeout((function(){var e,t,a,r,i,o,l,s;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,t>=0&&i<=s&&r<=l&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(c.a.tabItemActive),setTimeout((function(){return n.classList.remove(c.a.tabItemActive)}),2e3))}),150))},E=function(e){var n,t;switch(e.keyCode){case u:var a=h.indexOf(e.target)+1;t=h[a]||h[0];break;case s:var r=h.indexOf(e.target)-1;t=h[r]||h[h.length-1]}null===(n=t)||void 0===n||n.focus()};return r.a.createElement("div",{className:"tabs-container"},r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t},d)},b.map((function(e){var n=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===n}),key:n,ref:function(e){return h.push(e)},onKeyDown:E,onFocus:k,onClick:k},t)}))),n?Object(a.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return Object(a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}},205:function(e,n,t){"use strict";var a=t(0),r=t.n(a);n.a=function(e){var n=e.children,t=e.hidden,a=e.className;return r.a.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}}}]);