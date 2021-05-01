(window.webpackJsonp=window.webpackJsonp||[]).push([[139],{463:function(t,e,a){"use strict";a.r(e);var r=a(7),o=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"polar-area-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#polar-area-chart"}},[t._v("#")]),t._v(" Polar Area Chart")]),t._v(" "),a("p",[t._v("Polar area charts are similar to pie charts, but each segment has the same angle - the radius of the segment differs depending on the value.")]),t._v(" "),a("p",[t._v("This type of chart is often useful when we want to show a comparison data similar to a pie chart, but also show a scale of values for context.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst data = {\n  labels: [\n    'Red',\n    'Green',\n    'Yellow',\n    'Grey',\n    'Blue'\n  ],\n  datasets: [{\n    label: 'My First Dataset',\n    data: [11, 16, 7, 3, 14],\n    backgroundColor: [\n      'rgb(255, 99, 132)',\n      'rgb(75, 192, 192)',\n      'rgb(255, 205, 86)',\n      'rgb(201, 203, 207)',\n      'rgb(54, 162, 235)'\n    ]\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'polarArea',\n  data: data,\n  options: {}\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),a("h2",{attrs:{id:"dataset-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset-properties"}},[t._v("#")]),t._v(" Dataset Properties")]),t._v(" "),a("p",[t._v("Namespaces:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data.datasets[index]")]),t._v(" - options for this dataset only")]),t._v(" "),a("li",[a("code",[t._v("options.datasets.polarArea")]),t._v(" - options for all polarArea datasets")]),t._v(" "),a("li",[a("code",[t._v("options.elements.arc")]),t._v(" - options for all "),a("RouterLink",{attrs:{to:"/configuration/elements.html#arc-configuration"}},[t._v("arc elements")])],1),t._v(" "),a("li",[a("code",[t._v("options")]),t._v(" - options for the whole chart")])]),t._v(" "),a("p",[t._v("The following options can be included in a polar area chart dataset to configure options for that specific dataset.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("RouterLink",{attrs:{to:"/general/options.html#indexable-options"}},[t._v("Indexable")])],1),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#styling"}},[a("code",[t._v("backgroundColor")])])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#border-alignment"}},[a("code",[t._v("borderAlign")])])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'center'")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#styling"}},[a("code",[t._v("borderColor")])])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'#fff'")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#styling"}},[a("code",[t._v("borderWidth")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("2")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("clip")])])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("undefined")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#data-structure"}},[a("code",[t._v("data")])])]),t._v(" "),a("td",[a("code",[t._v("number[]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("strong",[t._v("required")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#interations"}},[a("code",[t._v("hoverBackgroundColor")])])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("undefined")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#interactions"}},[a("code",[t._v("hoverBorderColor")])])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("undefined")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#interactions"}},[a("code",[t._v("hoverBorderWidth")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("undefined")])])])])]),t._v(" "),a("p",[t._v("All these values, if "),a("code",[t._v("undefined")]),t._v(", fallback to the scopes described in "),a("a",{attrs:{href:"../general/options"}},[t._v("option resolution")])]),t._v(" "),a("h3",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("clip")])]),t._v(" "),a("td",[t._v("How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. "),a("code",[t._v("0")]),t._v(" = clip at chartArea. Clipping can also be configured per side: "),a("code",[t._v("clip: {left: 5, top: false, right: -2, bottom: 0}")])])])])]),t._v(" "),a("h3",{attrs:{id:"styling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),a("p",[t._v("The style of each arc can be controlled with the following properties:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("backgroundColor")])]),t._v(" "),a("td",[t._v("arc background color.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("borderColor")])]),t._v(" "),a("td",[t._v("arc border color.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("borderWidth")])]),t._v(" "),a("td",[t._v("arc border width (in pixels).")])])])]),t._v(" "),a("p",[t._v("All these values, if "),a("code",[t._v("undefined")]),t._v(", fallback to the associated "),a("RouterLink",{attrs:{to:"/configuration/elements.html#arc-configuration"}},[a("code",[t._v("elements.arc.*")])]),t._v(" options.")],1),t._v(" "),a("h3",{attrs:{id:"border-alignment"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#border-alignment"}},[t._v("#")]),t._v(" Border Alignment")]),t._v(" "),a("p",[t._v("The following values are supported for "),a("code",[t._v("borderAlign")]),t._v(".")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("'center'")]),t._v(" (default)")]),t._v(" "),a("li",[a("code",[t._v("'inner'")])])]),t._v(" "),a("p",[t._v("When "),a("code",[t._v("'center'")]),t._v(" is set, the borders of arcs next to each other will overlap. When "),a("code",[t._v("'inner'")]),t._v(" is set, it is guaranteed that all the borders do not overlap.")]),t._v(" "),a("h3",{attrs:{id:"interactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactions"}},[t._v("#")]),t._v(" Interactions")]),t._v(" "),a("p",[t._v("The interaction with each arc can be controlled with the following properties:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("hoverBackgroundColor")])]),t._v(" "),a("td",[t._v("arc background color when hovered.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("hoverBorderColor")])]),t._v(" "),a("td",[t._v("arc border color when hovered.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("hoverBorderWidth")])]),t._v(" "),a("td",[t._v("arc border width when hovered (in pixels).")])])])]),t._v(" "),a("p",[t._v("All these values, if "),a("code",[t._v("undefined")]),t._v(", fallback to the associated "),a("RouterLink",{attrs:{to:"/configuration/elements.html#arc-configuration"}},[a("code",[t._v("elements.arc.*")])]),t._v(" options.")],1),t._v(" "),a("h2",{attrs:{id:"config-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-options"}},[t._v("#")]),t._v(" Config Options")]),t._v(" "),a("p",[t._v("These are the customisation options specific to Polar Area charts. These options are looked up on access, and form together with the "),a("a",{attrs:{href:"#default-options"}},[t._v("global chart default options")]),t._v(" the options of the chart.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("animation.animateRotate")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, the chart will animate in with a rotation animation. This property is in the "),a("code",[t._v("options.animation")]),t._v(" object.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("animation.animateScale")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, will animate scaling the chart from the center outwards.")])])])]),t._v(" "),a("p",[t._v("The polar area chart uses the "),a("RouterLink",{attrs:{to:"/axes/radial/linear.html"}},[t._v("radialLinear")]),t._v(" scale. Additional configuration is provided via the scale.")],1),t._v(" "),a("h2",{attrs:{id:"default-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-options"}},[t._v("#")]),t._v(" Default Options")]),t._v(" "),a("p",[t._v("We can also change these default values for each PolarArea type that is created, this object is available at "),a("code",[t._v("Chart.overrides.polarArea")]),t._v(". Changing the global options only affects charts created after the change. Existing charts are not changed.")]),t._v(" "),a("p",[t._v("For example, to configure all new polar area charts with "),a("code",[t._v("animateScale = false")]),t._v(" you would do:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("overrides"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("polarArea"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("animateScale "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),a("p",[t._v("For a polar area chart, datasets need to contain an array of data points. The data points should be a number, Chart.js will total all of the numbers and calculate the relative proportion of each.")]),t._v(" "),a("p",[t._v("You also need to specify an array of labels so that tooltips appear correctly for each slice.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("data "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    datasets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// These labels appear in the legend and in the tooltips when hovering different arcs")]),t._v("\n    labels"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Red'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Yellow'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Blue'")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])])],1)}),[],!1,null,null,null);e.default=o.exports}}]);