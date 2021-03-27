(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),O=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=O(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=O(a),m=n,p=d["".concat(b,".").concat(m)]||d[m]||j[m]||c;return a?r.a.createElement(p,l(l({ref:t},i),{},{components:a})):r.a.createElement(p,l({ref:t},i))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var i=2;i<c;i++)b[i]=a[i];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},57:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return O}));var n=a(3),r=a(7),c=(a(0),a(143)),b={},l={unversionedId:"axes/_common_ticks",id:"axes/_common_ticks",isDocsHomePage:!1,title:"_common_ticks",description:"Common tick options to all axes",source:"@site/docs/axes/_common_ticks.md",slug:"/axes/_common_ticks",permalink:"/docs/master/axes/_common_ticks",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/_common_ticks.md",version:"current"},o=[{value:"Common tick options to all axes",id:"common-tick-options-to-all-axes",children:[]}],i={toc:o};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"common-tick-options-to-all-axes"},"Common tick options to all axes"),Object(c.b)("p",null,"Namespace: ",Object(c.b)("inlineCode",{parentName:"p"},"options.scales[scaleId].ticks")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Scriptable"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"callback")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"function")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Returns the string representation of the tick value as it should be displayed on the chart. See ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/labelling#creating-custom-tick-formats"}),"callback"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"display")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"boolean")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"true")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, show tick labels.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"color")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(c.b)("inlineCode",{parentName:"a"},"Color"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Color of ticks.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"font")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"Font")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"Chart.defaults.font")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"See ",Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/fonts"}),"Fonts"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"major")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"object")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"{}")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/axes/styling#major-tick-configuration"}),"Major ticks configuration"),".")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"padding")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"3")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sets the offset of the tick labels from the axis")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"textStrokeColor")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/general/colors"}),Object(c.b)("inlineCode",{parentName:"a"},"Color"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"``"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The color of the stroke around the text.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"textStrokeWidth")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"0")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stroke width around the text.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"z")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"number")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"0")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"z-index of tick layer. Useful when ticks are drawn on chart area. Values ","<","= 0 are drawn under datasets, ",">"," 0 on top.")))))}O.isMDXComponent=!0}}]);