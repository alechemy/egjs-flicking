(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{197:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=o(a),j=n,m=p["".concat(c,".").concat(j)]||p[j]||O[j]||b;return a?r.a.createElement(m,l(l({ref:t},s),{},{components:a})):r.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=j;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<b;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},76:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return i})),a.d(t,"default",(function(){return o}));var n=a(3),r=a(8),b=(a(0),a(197)),c={custom_edit_url:null},l={unversionedId:"api/AxesController",id:"version-4.0.0/api/AxesController",isDocsHomePage:!1,title:"AxesController",description:"\u26a0\ufe0f This class is for internal use only.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/version-4.0.0/api/AxesController.mdx",sourceDirName:"api",slug:"/api/AxesController",permalink:"/egjs-flicking/ko/docs/api/AxesController",editUrl:null,version:"4.0.0",frontMatter:{custom_edit_url:null},sidebar:"version-4.0.0/api",previous:{title:"LinearCamera",permalink:"/egjs-flicking/ko/docs/api/LinearCamera"},next:{title:"Control",permalink:"/egjs-flicking/ko/docs/api/Control"}},i=[{value:"Properties",id:"properties",children:[{value:"axes",id:"axes",children:[]},{value:"state",id:"state",children:[]},{value:"animatingContext",id:"animatingContext",children:[]},{value:"enabled",id:"enabled",children:[]},{value:"position",id:"position",children:[]},{value:"bounce",id:"bounce",children:[]}]},{value:"Methods",id:"methods",children:[{value:"init",id:"init",children:[]},{value:"destroy",id:"destroy",children:[]},{value:"enable",id:"enable",children:[]},{value:"disable",id:"disable",children:[]},{value:"update",id:"update",children:[]},{value:"animateTo",id:"animateTo",children:[]}]}],s={toc:i};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("div",{className:"notification is-warning my-2"},"\u26a0\ufe0f This class is for ",Object(b.b)("strong",null,"internal")," use only."),Object(b.b)("pre",null,Object(b.b)("code",{parentName:"pre",className:"language-ts"},"class AxesController\n")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"\uc758 \uc774\ubca4\ud2b8\ub97c \ucc98\ub9ac\ud558\ub294 \ucee8\ud2b8\ub864\ub7ec \ucef4\ud3ec\ub10c\ud2b8"),Object(b.b)("div",{className:"container"},Object(b.b)("div",{className:"row mb-2"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Properties")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("strong",null,"Methods"))),Object(b.b)("div",{className:"row"},Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#axes"},"axes"),Object(b.b)("br",null),Object(b.b)("a",{href:"#state"},"state"),Object(b.b)("br",null),Object(b.b)("a",{href:"#animatingContext"},"animatingContext"),Object(b.b)("br",null),Object(b.b)("a",{href:"#enabled"},"enabled"),Object(b.b)("br",null),Object(b.b)("a",{href:"#position"},"position"),Object(b.b)("br",null),Object(b.b)("a",{href:"#bounce"},"bounce")),Object(b.b)("div",{className:"col col--6"},Object(b.b)("a",{href:"#init"},"init"),Object(b.b)("br",null),Object(b.b)("a",{href:"#destroy"},"destroy"),Object(b.b)("br",null),Object(b.b)("a",{href:"#enable"},"enable"),Object(b.b)("br",null),Object(b.b)("a",{href:"#disable"},"disable"),Object(b.b)("br",null),Object(b.b)("a",{href:"#update"},"update"),Object(b.b)("br",null),Object(b.b)("a",{href:"#animateTo"},"animateTo")))),Object(b.b)("h2",{id:"properties"},"Properties"),Object(b.b)("h3",{id:"axes"},"axes"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes"),"\uc758 \uc778\uc2a4\ud134\uc2a4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Axes"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"See"),":"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",{parentName:"li",href:"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"},"https://naver.github.io/egjs-axes/release/latest/doc/eg.Axes.html"))),Object(b.b)("h3",{id:"state"},"state"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"\ud604\uc7ac \ud65c\uc131\ud654\ub41c ",Object(b.b)("a",{parentName:"p",href:"State"},"State")," \uc778\uc2a4\ud134\uc2a4\ub85c \uc0ac\uc6a9\uc790 \uc785\ub825 \ub610\ub294 \uc560\ub2c8\uba54\uc774\uc158 \uc0c1\ud0dc\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": ",Object(b.b)("a",{parentName:"p",href:"State"},"State")),Object(b.b)("h3",{id:"animatingContext"},"animatingContext"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"\ud604\uc7ac \uc7ac\uc0dd\uc911\uc778 \uc560\ub2c8\uba54\uc774\uc158 \uc815\ubcf4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PROPERTY"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"start"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc2dc\uc791 \uc9c0\uc810")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"end"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \ub05d \uc9c0\uc810")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"offset"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"\uce74\uba54\ub77c \uc624\ud504\uc14b")))),Object(b.b)("h3",{id:"enabled"},"enabled"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"\ud604\uc7ac \uc0ac\uc6a9\uc790 \uc785\ub825\uc774 \ud65c\uc131\ud654\ub418\uc5c8\ub294\uc9c0\ub97c \ub098\ud0c0\ub0b4\ub294 \uac12"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": boolean"),Object(b.b)("h3",{id:"position"},"position"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html"},"Axes")," \uc778\uc2a4\ud134\uc2a4 \ub0b4\ubd80\uc758 \ud604\uc7ac \uc88c\ud45c \uac12"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": number"),Object(b.b)("h3",{id:"bounce"},"bounce"),Object(b.b)("div",{className:"bulma-tags"},Object(b.b)("span",{className:"bulma-tag is-warning"},"readonly")),Object(b.b)("p",null,"\uc801\uc6a9\ub41c bounce \ud06c\uae30(px \ub2e8\uc704)"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Type"),": Array","<","number",">"),Object(b.b)("h2",{id:"methods"},"Methods"),Object(b.b)("h3",{id:"init"},"init"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"AxesController\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"flicking"),Object(b.b)("td",{parentName:"tr",align:"center"},Object(b.b)("a",{parentName:"td",href:"Flicking"},"Flicking")),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"An instance of Flicking")))),Object(b.b)("h3",{id:"destroy"},"destroy"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"AxesController\ub97c \ucd08\uae30 \uc0c1\ud0dc\ub85c \ub418\ub3cc\ub9bd\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": void"),Object(b.b)("h3",{id:"enable"},"enable"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ud65c\uc131\ud654\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"disable"},"disable"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"\uc0ac\uc6a9\uc790\uc758 \uc785\ub825(\ub9c8\uc6b0\uc2a4/\ud130\uce58)\ub97c \ub9c9\uc2b5\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("h3",{id:"update"},"update"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/"},"@egjs/axes"),"\uc758 \uc0c1\ud0dc\ub97c \uac31\uc2e0\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": this"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("p",null,Object(b.b)("a",{parentName:"p",href:"AxesController#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0"),Object(b.b)("h3",{id:"animateTo"},"animateTo"),Object(b.b)("div",{className:"bulma-tags"}),Object(b.b)("p",null,"Axes\uc758 ",Object(b.b)("a",{parentName:"p",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," \uba54\uc18c\ub4dc\ub97c \uc8fc\uc5b4\uc9c4 \uc88c\ud45c\ub97c \uc774\uc6a9\ud558\uc5ec \uc218\ud589\ud569\ub2c8\ub2e4"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Returns"),": Promise","<","void",">"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"\ud574\ub2f9 \uc88c\ud45c \ub3c4\ub2ec\uc2dc\uc5d0 resolve\ub418\ub294 Promise")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:"center"},"PARAMETER"),Object(b.b)("th",{parentName:"tr",align:"center"},"TYPE"),Object(b.b)("th",{parentName:"tr",align:"center"},"OPTIONAL"),Object(b.b)("th",{parentName:"tr",align:"center"},"DEFAULT"),Object(b.b)("th",{parentName:"tr",align:"center"},"DESCRIPTION"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"position"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc774\ub3d9\ud560 \uc88c\ud45c")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"duration"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"no"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc560\ub2c8\uba54\uc774\uc158 \uc9c4\ud589 \uc2dc\uac04 (\ub2e8\uc704: ms)")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:"center"},"axesEvent"),Object(b.b)("td",{parentName:"tr",align:"center"},"number"),Object(b.b)("td",{parentName:"tr",align:"center"},"yes"),Object(b.b)("td",{parentName:"tr",align:"center"}),Object(b.b)("td",{parentName:"tr",align:"center"},"\uc774 \uac12\uc774 \uc8fc\uc5b4\uc84c\uc744 \uacbd\uc6b0, \ud574\ub2f9 \uc774\ubca4\ud2b8\uc758 ",Object(b.b)("a",{parentName:"td",href:"https://naver#github#io/egjs-axes/release/latest/doc/eg#Axes#html#setTo"},"setTo")," \uba54\uc18c\ub4dc\ub97c \ub300\uc2e0\ud574\uc11c \uc0ac\uc6a9\ud569\ub2c8\ub2e4.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Throws"),": ",Object(b.b)("a",{parentName:"p",href:"FlickingError"},"FlickingError")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"code"),Object(b.b)("th",{parentName:"tr",align:null},"condition"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"NOT_ATTACHED_TO_FLICKING")),Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"Control#init"},"init"),"\uc774 \uc774\uc804\uc5d0 \ud638\ucd9c\ub418\uc9c0 \uc54a\uc740 \uacbd\uc6b0")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},Object(b.b)("a",{parentName:"td",href:"ERROR_CODE"},"ANIMATION_INTERRUPTED")),Object(b.b)("td",{parentName:"tr",align:null},"\uc0ac\uc6a9\uc790 \uc785\ub825\uc5d0 \uc758\ud574 \uc560\ub2c8\uba54\uc774\uc158\uc774 \uc911\ub2e8\ub41c \uacbd\uc6b0")))))}o.isMDXComponent=!0}}]);