(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{153:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(9),o=(n(0),n(202)),i={title:"New Charts"},l={id:"developers/charts",title:"New Charts",description:"Chart.js 2.0 introduced the concept of controllers for each dataset. Like scales, new controllers can be written as needed.",source:"@site/docs/developers/charts.md",permalink:"/docs/next/developers/charts",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/developers/charts.md",sidebar:"someSidebar",previous:{title:"Plugins",permalink:"/docs/next/developers/plugins"},next:{title:"New Axes",permalink:"/docs/next/developers/axes"}},c=[{value:"Dataset Controller Interface",id:"dataset-controller-interface",children:[]},{value:"Extending Existing Chart Types",id:"extending-existing-chart-types",children:[]},{value:"TypeScript Typings",id:"typescript-typings",children:[]}],s={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Chart.js 2.0 introduced the concept of controllers for each dataset. Like scales, new controllers can be written as needed."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"class MyType extends Chart.DatasetController {\n\n}\n\nChart.register(MyType);\n\n// Now we can create a new instance of our chart, using the Chart.js API\nnew Chart(ctx, {\n    // this is the string the constructor was registered at, ie Chart.controllers.MyType\n    type: 'MyType',\n    data: data,\n    options: options\n});\n")),Object(o.b)("h2",{id:"dataset-controller-interface"},"Dataset Controller Interface"),Object(o.b)("p",null,"Dataset controllers must implement the following interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    // Create elements for each piece of data in the dataset. Store elements in an array on the dataset as dataset.metaData\n    addElements: function() {},\n\n    // Draw the representation of the dataset\n    draw: function() {},\n\n    // Remove hover styling from the given element\n    removeHoverStyle: function(element, datasetIndex, index) {},\n\n    // Add hover styling to the given element\n    setHoverStyle: function(element, datasetIndex, index) {},\n\n    // Update the elements in response to new data\n    // @param mode : update mode, core calls this method using any of `'active'`, `'hide'`, `'reset'`, `'resize'`, `'show'` or `undefined`\n    update: function(mode) {}\n}\n")),Object(o.b)("p",null,"The following methods may optionally be overridden by derived dataset controllers."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    // Initializes the controller\n    initialize: function() {},\n\n    // Ensures that the dataset represented by this controller is linked to a scale. Overridden to helpers.noop in the polar area and doughnut controllers as these\n    // chart types using a single scale\n    linkScales: function() {},\n\n    // Called by the main chart controller when an update is triggered. The default implementation handles the number of data points changing and creating elements appropriately.\n    buildOrUpdateElements: function() {}\n}\n")),Object(o.b)("h2",{id:"extending-existing-chart-types"},"Extending Existing Chart Types"),Object(o.b)("p",null,"Extending or replacing an existing controller type is easy. Simply replace the constructor for one of the built in types with your own."),Object(o.b)("p",null,"The built in controller types are:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BarController")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"BubbleController")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"DoughnutController")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"LineController")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PieController")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"PolarAreaController")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"RadarController")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ScatterController"))),Object(o.b)("p",null,"These controllers are also available in the UMD package, directly under ",Object(o.b)("inlineCode",{parentName:"p"},"Chart"),". Eg: ",Object(o.b)("inlineCode",{parentName:"p"},"Chart.BarController"),"."),Object(o.b)("p",null,"For example, to derive a new chart type that extends from a bubble chart, you would do the following."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import {BubbleController} from 'chart.js';\nclass Custom extends BubbleController {\n    draw() {\n        // Call super method first\n        super.draw(arguments);\n\n        // Now we can do some custom drawing for this dataset. Here we'll draw a red box around the first point in each dataset\n        var meta = this.getMeta();\n        var pt0 = meta.data[0];\n        var radius = pt0.radius;\n\n        var ctx = this.chart.chart.ctx;\n        ctx.save();\n        ctx.strokeStyle = 'red';\n        ctx.lineWidth = 1;\n        ctx.strokeRect(pt0.x - radius, pt0.y - radius, 2 * radius, 2 * radius);\n        ctx.restore();\n    }\n});\nCustom.id = 'derivedBubble';\nCustom.defaults = BubbleController.defaults;\n\n// Stores the controller so that the chart initialization routine can look it up\nChart.register(Custom);\n\n// Now we can create and use our new chart type\nnew Chart(ctx, {\n    type: 'derivedBubble',\n    data: data,\n    options: options\n});\n")),Object(o.b)("p",null,"Same example in classic style"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"function Custom() {\n  Chart.BubbleController.apply(this, arguments);\n  // constructor stuff\n}\nCustom.prototype = Object.create(Chart.BubbleController.prototype);\nCustom.prototype.constructor = Custom;\n\nCustom.prototype.draw = function(ctx) {\n    Chart.BubbleController.prototype.draw.apply(this, arguments);\n\n    var meta = this.getMeta();\n    var pt0 = meta.data[0];\n    var radius = pt0.radius;\n\n    var ctx = this.chart.chart.ctx;\n    ctx.save();\n    ctx.strokeStyle = 'red';\n    ctx.lineWidth = 1;\n    ctx.strokeRect(pt0.x - radius, pt0.y - radius, 2 * radius, 2 * radius);\n    ctx.restore();}\n}\n\nCustom.id = 'derivedBubble';\nCustom.defaults = Chart.defaults.bubble;\n\nChart.register(Custom);\n\n// Now we can create and use our new chart type\nnew Chart(ctx, {\n    type: 'derivedBubble',\n    data: data,\n    options: options\n});\n")),Object(o.b)("h2",{id:"typescript-typings"},"TypeScript Typings"),Object(o.b)("p",null,"If you want your new chart type to be statically typed, you must provide a ",Object(o.b)("inlineCode",{parentName:"p"},".d.ts"),' TypeScript declaration file. Chart.js provides a way to augment built-in types with user-defined ones, by using the concept of "declaration merging".'),Object(o.b)("p",null,"There are three main declarations that can be augmented when adding a new chart type:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"ChartTypeEnum")," enumeration must contain an entry for the new type."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"IChartTypeRegistry")," must contains the declarations for the new type, either by extending an existing entry in ",Object(o.b)("inlineCode",{parentName:"li"},"IChartTypeRegistry")," or by creating a new one.")),Object(o.b)("p",null,"For example, to provide typings for a new chart type that extends from a bubble chart, you would add a ",Object(o.b)("inlineCode",{parentName:"p"},".d.ts")," containing:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"import { IChartTypeRegistry } from 'chart.js'\n\ndeclare module 'chart.js' {\n    enum ChartTypeEnum {\n        derivedBubble = 'derivedBubble'\n    }\n\n    interface IChartTypeRegistry {\n        derivedBubble: IChartTypeRegistry['bubble']\n    }\n}\n")))}p.isMDXComponent=!0},202:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(h,l(l({ref:t},s),{},{components:n})):a.a.createElement(h,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);