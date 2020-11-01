(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{156:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(9),b=(a(0),a(202)),l={title:"Area Chart"},i={id:"charts/area",title:"Area Chart",description:"Both line and radar charts support a fill option on the dataset object which can be used to create space between two datasets or a dataset and a boundary, i.e. the scale origin, start, or end (see filling modes).",source:"@site/docs/charts/area.md",permalink:"/docs/next/charts/area",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/charts/area.md",sidebar:"someSidebar",previous:{title:"Scatter Chart",permalink:"/docs/next/charts/scatter"},next:{title:"Mixed Chart Types",permalink:"/docs/next/charts/mixed"}},c=[{value:"Filling modes",id:"filling-modes",children:[]},{value:"Configuration",id:"configuration",children:[{value:"propagate",id:"propagate",children:[]}]}],o={rightToc:c};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Both ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/charts/line"}),"line")," and ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/charts/radar"}),"radar")," charts support a ",Object(b.b)("inlineCode",{parentName:"p"},"fill")," option on the dataset object which can be used to create space between two datasets or a dataset and a boundary, i.e. the scale ",Object(b.b)("inlineCode",{parentName:"p"},"origin"),", ",Object(b.b)("inlineCode",{parentName:"p"},"start,")," or ",Object(b.b)("inlineCode",{parentName:"p"},"end")," (see ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#filling-modes"}),"filling modes"),")."),Object(b.b)("blockquote",null,Object(b.b)("p",{parentName:"blockquote"},Object(b.b)("strong",{parentName:"p"},"Note:")," this feature is implemented by the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/blob/master/src/plugins/plugin.filler.js"}),Object(b.b)("inlineCode",{parentName:"a"},"filler")," plugin"),".")),Object(b.b)("h2",{id:"filling-modes"},"Filling modes"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Mode"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Values"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Absolute dataset index ",Object(b.b)("sup",null,"1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"1"),", ",Object(b.b)("inlineCode",{parentName:"td"},"2"),", ",Object(b.b)("inlineCode",{parentName:"td"},"3"),", ...")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Relative dataset index ",Object(b.b)("sup",null,"1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"'-1'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'-2'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'+1'"),", ...")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Boundary ",Object(b.b)("sup",null,"2")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"'start'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'end'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'origin'"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Disabled ",Object(b.b)("sup",null,"3")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Stacked value below ",Object(b.b)("sup",null,"4")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"'stack'"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Axis value ",Object(b.b)("sup",null,"5")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"{ value: number; }"))))),Object(b.b)("blockquote",null,Object(b.b)("sup",null,"1")," dataset filling modes have been introduced in version 2.6.0",Object(b.b)("br",null),Object(b.b)("sup",null,"2")," prior version 2.6.0, boundary values was `'zero'`, `'top'`, `'bottom'` (not supported anymore)",Object(b.b)("br",null),Object(b.b)("sup",null,"3")," for backward compatibility, `fill: true` (default) is equivalent to `fill: 'origin'`",Object(b.b)("br",null),Object(b.b)("sup",null,"4")," stack mode has been introduced in version 3.0.0",Object(b.b)("br",null),Object(b.b)("sup",null,"5")," axis value mode has been introduced in version 3.0.0",Object(b.b)("br",null)),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    data: {\n        datasets: [\n            {fill: 'origin'},      // 0: fill to 'origin'\n            {fill: '+2'},          // 1: fill to dataset 3\n            {fill: 1},             // 2: fill to dataset 1\n            {fill: false},         // 3: no fill\n            {fill: '-2'},          // 4: fill to dataset 2\n            {fill: {value: 25}}    // 5: fill to axis value 25\n        ]\n    }\n});\n")),Object(b.b)("p",null,"If you need to support multiple colors when filling from one dataset to another, you may specify an object with the following option :"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Param"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"target")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"number"),", ",Object(b.b)("inlineCode",{parentName:"td"},"string"),", ",Object(b.b)("inlineCode",{parentName:"td"},"boolean"),", ",Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The accepted values are the same as the filling mode values, so you may use absolute and relative dataset indexes and/or boundaries.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"above")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"If no color is set, the default color will be the background color of the chart.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"below")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Same as the above.")))),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    data: {\n        datasets: [\n            {\n              fill: {\n                target: 'origin',\n                above: 'rgb(255, 0, 0)',   // Area will be red above the origin\n                below: 'rgb(0, 0, 255)'    // And blue below the origin\n              }\n            }\n        ]\n    }\n});\n")),Object(b.b)("h2",{id:"configuration"},"Configuration"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Option"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#propagate"}),Object(b.b)("inlineCode",{parentName:"a"},"plugins.filler.propagate"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Fill propagation when target is hidden.")))),Object(b.b)("h3",{id:"propagate"},"propagate"),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"propagate")," takes a ",Object(b.b)("inlineCode",{parentName:"p"},"boolean")," value (default: ",Object(b.b)("inlineCode",{parentName:"p"},"true"),")."),Object(b.b)("p",null,"If ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", the fill area will be recursively extended to the visible target defined by the ",Object(b.b)("inlineCode",{parentName:"p"},"fill")," value of hidden dataset targets:"),Object(b.b)("p",null,Object(b.b)("strong",{parentName:"p"},"Example")),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"new Chart(ctx, {\n    data: {\n        datasets: [\n            {fill: 'origin'},   // 0: fill to 'origin'\n            {fill: '-1'},       // 1: fill to dataset 0\n            {fill: 1},          // 2: fill to dataset 1\n            {fill: false},      // 3: no fill\n            {fill: '-2'}        // 4: fill to dataset 2\n        ]\n    },\n    options: {\n        plugins: {\n            filler: {\n                propagate: true\n            }\n        }\n    }\n});\n")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"propagate: true"),":\n-if dataset 2 is hidden, dataset 4 will fill to dataset 1\n-if dataset 2 and 1 are hidden, dataset 4 will fill to ",Object(b.b)("inlineCode",{parentName:"p"},"'origin'")),Object(b.b)("p",null,Object(b.b)("inlineCode",{parentName:"p"},"propagate: false"),":\n-if dataset 2 and/or 4 are hidden, dataset 4 will not be filled"))}p.isMDXComponent=!0},202:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),d=p(a),O=n,s=d["".concat(l,".").concat(O)]||d[O]||j[O]||b;return a?r.a.createElement(s,i(i({ref:t},o),{},{components:a})):r.a.createElement(s,i({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);