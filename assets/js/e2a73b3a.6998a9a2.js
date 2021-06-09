(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{176:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(8),c=(n(0),n(197)),i={custom_edit_url:null},o={unversionedId:"api/DIRECTION",id:"version-4.0.0/api/DIRECTION",isDocsHomePage:!1,title:"DIRECTION",description:"`ts",source:"@site/versioned_docs/version-4.0.0/api/DIRECTION.mdx",sourceDirName:"api",slug:"/api/DIRECTION",permalink:"/egjs-flicking/docs/api/DIRECTION",editUrl:null,version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"ALIGN",permalink:"/egjs-flicking/docs/api/ALIGN"},next:{title:"MOVE_TYPE",permalink:"/egjs-flicking/docs/api/MOVE_TYPE"}},l=[{value:"DIRECTION",id:"DIRECTION",children:[]}],b={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-ts"},"const DIRECTION\n")),Object(c.b)("h3",{id:"DIRECTION"},"DIRECTION"),Object(c.b)("div",{className:"bulma-tags"}),Object(c.b)("p",null,"An object of directions"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Type"),": object"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(c.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(c.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"PREV"),Object(c.b)("td",{parentName:"tr",align:"center"},'"PREV"'),Object(c.b)("td",{parentName:"tr",align:"center"},'"left" when ',Object(c.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),' is true, and "top" when ',Object(c.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is false")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NEXT"),Object(c.b)("td",{parentName:"tr",align:"center"},'"NEXT"'),Object(c.b)("td",{parentName:"tr",align:"center"},'"right" when ',Object(c.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal"),' is true, and "bottom" when ',Object(c.b)("a",{parentName:"td",href:"Flicking#horizontal"},"horizontal")," is false")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"NONE"),Object(c.b)("td",{parentName:"tr",align:"center"},"null"),Object(c.b)("td",{parentName:"tr",align:"center"},"This value usually means it's the same position")))))}p.isMDXComponent=!0},197:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),u=p(n),O=r,m=u["".concat(i,".").concat(O)]||u[O]||s[O]||c;return n?a.a.createElement(m,o(o({ref:t},b),{},{components:n})):a.a.createElement(m,o({ref:t},b))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=O;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var b=2;b<c;b++)i[b]=n[b];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);