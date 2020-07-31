(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{171:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(9),b=(a(0),a(201)),l={title:"Axes"},i={id:"axes/index",title:"Axes",description:"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X axis and 1 or more Y axis to map points onto the 2 dimensional canvas. These axes are known as 'cartesian axes'.",source:"@site/docs/axes/index.md",permalink:"/docs/next/axes/index",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/axes/index.md",sidebar:"someSidebar",previous:{title:"Mixed Chart Types",permalink:"/docs/next/charts/mixed"},next:{title:"Cartesian Axes",permalink:"/docs/next/axes/cartesian/index"}},c=[{value:"Common Configuration",id:"common-configuration",children:[{value:"Callbacks",id:"callbacks",children:[]},{value:"Updating Axis Defaults",id:"updating-axis-defaults",children:[]}]},{value:"Creating New Axes",id:"creating-new-axes",children:[]}],o={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"Axes are an integral part of a chart. They are used to determine how data maps to a pixel value on the chart. In a cartesian chart, there is 1 or more X axis and 1 or more Y axis to map points onto the 2 dimensional canvas. These axes are known as ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/axes/cartesian/index#cartesian-axes"}),"'cartesian axes'"),"."),Object(b.b)("p",null,"In a radial chart, such as a radar chart or a polar area chart, there is a single axis that maps points in the angular and radial directions. These are known as ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/axes/radial/index#radial-axes"}),"'radial axes'"),"."),Object(b.b)("p",null,"Scales in Chart.js >v2.0 are significantly more powerful, but also different than those of v1.0."),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},"Multiple X & Y axes are supported."),Object(b.b)("li",{parentName:"ul"},"A built-in label auto-skip feature detects would-be overlapping ticks and labels and removes every nth label to keep things displaying normally."),Object(b.b)("li",{parentName:"ul"},"Scale titles are supported."),Object(b.b)("li",{parentName:"ul"},"New scale types can be extended without writing an entirely new chart type.")),Object(b.b)("h2",{id:"common-configuration"},"Common Configuration"),Object(b.b)("p",null,"The following options are common to all axes provided by Chart.js."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"display")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Controls the axis global visibility (visible when ",Object(b.b)("inlineCode",{parentName:"td"},"true"),", hidden when ",Object(b.b)("inlineCode",{parentName:"td"},"false"),"). When ",Object(b.b)("inlineCode",{parentName:"td"},"display: 'auto'"),", the axis is visible only if at least one associated dataset is visible.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"reverse")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Reverse the scale.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"weight")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The weight used to sort the axis. Higher weights are further away from the chart area.")))),Object(b.b)("h3",{id:"callbacks"},"Callbacks"),Object(b.b)("p",null,"There are a number of config callbacks that can be used to change parameters in the scale at different points in the update process. The options are supplied at the top level of the axis options."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Arguments"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeUpdate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback called before the update process starts.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeSetDimensions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before dimensions are set.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterSetDimensions")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after dimensions are set.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeDataLimits")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before data limits are determined.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterDataLimits")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after data limits are determined.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeBuildTicks")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before ticks are created.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterBuildTicks")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after ticks are created. Useful for filtering ticks.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeTickToLabelConversion")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before ticks are converted into strings.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterTickToLabelConversion")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after ticks are converted into strings.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeCalculateTickRotation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before tick rotation is determined.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterCalculateTickRotation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after tick rotation is determined.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"beforeFit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs before the scale fits to the canvas.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterFit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs after the scale fits to the canvas.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"afterUpdate")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"axis")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback that runs at the end of the update process.")))),Object(b.b)("h3",{id:"updating-axis-defaults"},"Updating Axis Defaults"),Object(b.b)("p",null,"The default configuration for a scale can be easily changed. All you need to do is set the new options to ",Object(b.b)("inlineCode",{parentName:"p"},"Chart.defaults.scales[type]"),"."),Object(b.b)("p",null,"For example, to set the minimum value of 0 for all linear scales, you would do the following. Any linear scales created after this time would now have a minimum of 0."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Chart.defaults.scales.linear.min = 0;\n")),Object(b.b)("h2",{id:"creating-new-axes"},"Creating New Axes"),Object(b.b)("p",null,"To create a new axis, see the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/developers/axes"}),"developer docs"),"."))}d.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),s=d(a),O=n,j=s["".concat(l,".").concat(O)]||s[O]||p[O]||b;return a?r.a.createElement(j,i(i({ref:t},o),{},{components:a})):r.a.createElement(j,i({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);