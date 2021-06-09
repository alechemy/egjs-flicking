(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{131:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(8),o=(n(0),n(197)),i={custom_edit_url:null},c={unversionedId:"api/TogglePoint",id:"api/TogglePoint",isDocsHomePage:!1,title:"TogglePoint",description:"`ts",source:"@site/docs/api/TogglePoint.mdx",sourceDirName:"api",slug:"/api/TogglePoint",permalink:"/docs/next/api/TogglePoint",editUrl:null,version:"current",frontMatter:{custom_edit_url:null},sidebar:"api",previous:{title:"FlickingOptions",permalink:"/docs/next/api/FlickingOptions"},next:{title:"FreeControlOptions",permalink:"/docs/next/api/FreeControlOptions"}},l=[{value:"TogglePoint",id:"TogglePoint",children:[]}],p={toc:l};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-ts"},"interface TogglePoint\n")),Object(o.b)("h3",{id:"TogglePoint"},"TogglePoint"),Object(o.b)("div",{className:"bulma-tags"}),Object(o.b)("p",null,"A data of the position that changes order of the panel elements"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(o.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(o.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"panel"),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("a",{parentName:"td",href:"Panel"},"Panel")),Object(o.b)("td",{parentName:"tr",align:"center"},"Toggling panel")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"direction"),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("a",{parentName:"td",href:"DIRECTION"},"DIRECTION")),Object(o.b)("td",{parentName:"tr",align:"center"},"Toggling position")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"toggled"),Object(o.b)("td",{parentName:"tr",align:"center"},"boolean"),Object(o.b)("td",{parentName:"tr",align:"center"},"Whether the panel has toggled its position to ",Object(o.b)("inlineCode",{parentName:"td"},"direction"))))))}b.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),b=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,s=u["".concat(i,".").concat(d)]||u[d]||g[d]||o;return n?a.a.createElement(s,c(c({ref:t},p),{},{components:n})):a.a.createElement(s,c({ref:t},p))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);