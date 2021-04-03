(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{446:function(t,e,a){"use strict";a.r(e);var r=a(27),s=Object(r.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"bar-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#bar-chart"}},[t._v("#")]),t._v(" Bar Chart")]),t._v(" "),a("p",[t._v("A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [{\n    label: 'My First Dataset',\n    data: [65, 59, 80, 81, 56, 55, 40],\n    backgroundColor: [\n      'rgba(255, 99, 132, 0.2)',\n      'rgba(255, 159, 64, 0.2)',\n      'rgba(255, 205, 86, 0.2)',\n      'rgba(75, 192, 192, 0.2)',\n      'rgba(54, 162, 235, 0.2)',\n      'rgba(153, 102, 255, 0.2)',\n      'rgba(201, 203, 207, 0.2)'\n    ],\n    borderColor: [\n      'rgb(255, 99, 132)',\n      'rgb(255, 159, 64)',\n      'rgb(255, 205, 86)',\n      'rgb(75, 192, 192)',\n      'rgb(54, 162, 235)',\n      'rgb(153, 102, 255)',\n      'rgb(201, 203, 207)'\n    ],\n    borderWidth: 1\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    scales: {\n      y: {\n        beginAtZero: true\n      }\n    }\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),a("h2",{attrs:{id:"dataset-properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dataset-properties"}},[t._v("#")]),t._v(" Dataset Properties")]),t._v(" "),a("p",[t._v("Namespaces:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("data.datasets[index]")]),t._v(" - options for this dataset only")]),t._v(" "),a("li",[a("code",[t._v("options.datasets.bar")]),t._v(" - options for all bar datasets")]),t._v(" "),a("li",[a("code",[t._v("options.elements.bar")]),t._v(" - options for all "),a("RouterLink",{attrs:{to:"/configuration/elements.html#bar-configuration"}},[t._v("bar elements")])],1),t._v(" "),a("li",[a("code",[t._v("options")]),t._v(" - options for the whole chart")])]),t._v(" "),a("p",[t._v("The bar chart allows a number of properties to be specified for each dataset.\nThese are used to set display properties for a specific dataset. For example,\nthe color of the bars is generally set this way.\nOnly the "),a("code",[t._v("data")]),t._v(" option needs to be specified in the dataset namespace.")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("RouterLink",{attrs:{to:"/general/options.html#scriptable-options"}},[t._v("Scriptable")])],1),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("RouterLink",{attrs:{to:"/general/options.html#indexable-options"}},[t._v("Indexable")])],1),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("a",{attrs:{href:"#styling"}},[a("code",[t._v("backgroundColor")])])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("base")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#barpercentage"}},[a("code",[t._v("barPercentage")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("0.9")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#barthickness"}},[a("code",[t._v("barThickness")])])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#styling"}},[a("code",[t._v("borderColor")])])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'rgba(0, 0, 0, 0.1)'")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#borderskipped"}},[a("code",[t._v("borderSkipped")])])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'start'")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#borderwidth"}},[a("code",[t._v("borderWidth")])])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#borderradius"}},[a("code",[t._v("borderRadius")])])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#categorypercentage"}},[a("code",[t._v("categoryPercentage")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("0.8")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("clip")])])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#data-structure"}},[a("code",[t._v("data")])])]),t._v(" "),a("td",[a("code",[t._v("object")]),t._v("|"),a("code",[t._v("object[]")]),t._v("| "),a("code",[t._v("number[]")]),t._v("|"),a("code",[t._v("string[]")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("strong",[t._v("required")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("grouped")])])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("true")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#interactions"}},[a("code",[t._v("hoverBackgroundColor")])])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#interactions"}},[a("code",[t._v("hoverBorderColor")])])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#interactions"}},[a("code",[t._v("hoverBorderWidth")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("1")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#interactions"}},[a("code",[t._v("hoverBorderRadius")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("indexAxis")])])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'x'")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#maxbarthickness"}},[a("code",[t._v("maxBarThickness")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#styling"}},[a("code",[t._v("minBarLength")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("label")])])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("''")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("order")])])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("0")])])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/configuration/elements.html#point-styles"}},[a("code",[t._v("pointStyle")])])],1),t._v(" "),a("td",[a("code",[t._v("string")]),t._v("|"),a("code",[t._v("Image")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'circle'")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("skipNull")])])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td")]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("stack")])])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[a("code",[t._v("'bar'")])])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("xAxisID")])])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[t._v("first x axis")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#general"}},[a("code",[t._v("yAxisID")])])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),a("td",[t._v("first y axis")])])])]),t._v(" "),a("p",[t._v("All these values, if "),a("code",[t._v("undefined")]),t._v(", fallback to the scopes described in "),a("a",{attrs:{href:"../general/options"}},[t._v("option resolution")])]),t._v(" "),a("h3",{attrs:{id:"example-dataset-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-dataset-configuration"}},[t._v("#")]),t._v(" Example dataset configuration")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    datasets"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        barPercentage"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        barThickness"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("6")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        maxBarThickness"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        minBarLength"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("60")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("70")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"general"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("base")])]),t._v(" "),a("td",[t._v("Base value for the bar in data units along the value axis. If not set, defaults to the value axis base value.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("clip")])]),t._v(" "),a("td",[t._v("How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. "),a("code",[t._v("0")]),t._v(" = clip at chartArea. Clipping can also be configured per side: "),a("code",[t._v("clip: {left: 5, top: false, right: -2, bottom: 0}")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grouped")])]),t._v(" "),a("td",[t._v("Should the bars be grouped on index axis. When "),a("code",[t._v("true")]),t._v(", all the datasets at same index value will be placed next to each other centering on that index value. When "),a("code",[t._v("false")]),t._v(", each bar is placed on its actual index-axis value.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("indexAxis")])]),t._v(" "),a("td",[t._v("The base axis of the dataset. "),a("code",[t._v("'x'")]),t._v(" for vertical bars and "),a("code",[t._v("'y'")]),t._v(" for horizontal bars.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("label")])]),t._v(" "),a("td",[t._v("The label for the dataset which appears in the legend and tooltips.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("order")])]),t._v(" "),a("td",[t._v("The drawing order of dataset. Also affects order for stacking, tooltip, and legend.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("skipNull")])]),t._v(" "),a("td",[t._v("If "),a("code",[t._v("true")]),t._v(", null or undefined values will not be used for spacing calculations when determining bar size.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stack")])]),t._v(" "),a("td",[t._v("The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack). "),a("a",{attrs:{href:"#stacked-bar-charts"}},[t._v("more")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("xAxisID")])]),t._v(" "),a("td",[t._v("The ID of the x-axis to plot this dataset on.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("yAxisID")])]),t._v(" "),a("td",[t._v("The ID of the y-axis to plot this dataset on.")])])])]),t._v(" "),a("h3",{attrs:{id:"styling"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),a("p",[t._v("The style of each bar can be controlled with the following properties:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("backgroundColor")])]),t._v(" "),a("td",[t._v("The bar background color.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("borderColor")])]),t._v(" "),a("td",[t._v("The bar border color.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#borderskipped"}},[a("code",[t._v("borderSkipped")])])]),t._v(" "),a("td",[t._v("The edge to skip when drawing bar.")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#borderwidth"}},[a("code",[t._v("borderWidth")])])]),t._v(" "),a("td",[t._v("The bar border width (in pixels).")])]),t._v(" "),a("tr",[a("td",[a("a",{attrs:{href:"#borderradius"}},[a("code",[t._v("borderRadius")])])]),t._v(" "),a("td",[t._v("The bar border radius (in pixels).")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("minBarLength")])]),t._v(" "),a("td",[t._v("Set this to ensure that bars have a minimum length in pixels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("pointStyle")])]),t._v(" "),a("td",[t._v("Style of the point for legend. "),a("RouterLink",{attrs:{to:"/configuration/elements.html#point-styles"}},[t._v("more...")])],1)])])]),t._v(" "),a("p",[t._v("All these values, if "),a("code",[t._v("undefined")]),t._v(", fallback to the associated "),a("RouterLink",{attrs:{to:"/configuration/elements.html#bar-configuration"}},[a("code",[t._v("elements.bar.*")])]),t._v(" options.")],1),t._v(" "),a("h4",{attrs:{id:"borderskipped"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#borderskipped"}},[t._v("#")]),t._v(" borderSkipped")]),t._v(" "),a("p",[t._v("This setting is used to avoid drawing the bar stroke at the base of the fill, or disable the border radius.\nIn general, this does not need to be changed except when creating chart types\nthat derive from a bar chart.")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("Note")]),t._v(" "),a("p",[t._v("For negative bars in a vertical chart, "),a("code",[t._v("top")]),t._v(" and "),a("code",[t._v("bottom")]),t._v(" are flipped. Same goes for "),a("code",[t._v("left")]),t._v(" and "),a("code",[t._v("right")]),t._v(" in a horizontal chart.")])]),t._v(" "),a("p",[t._v("Options are:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("'start'")])]),t._v(" "),a("li",[a("code",[t._v("'end'")])]),t._v(" "),a("li",[a("code",[t._v("'bottom'")])]),t._v(" "),a("li",[a("code",[t._v("'left'")])]),t._v(" "),a("li",[a("code",[t._v("'top'")])]),t._v(" "),a("li",[a("code",[t._v("'right'")])]),t._v(" "),a("li",[a("code",[t._v("false")])])]),t._v(" "),a("h4",{attrs:{id:"borderwidth"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#borderwidth"}},[t._v("#")]),t._v(" borderWidth")]),t._v(" "),a("p",[t._v("If this value is a number, it is applied to all sides of the rectangle (left, top, right, bottom), except "),a("a",{attrs:{href:"#borderskipped"}},[a("code",[t._v("borderSkipped")])]),t._v(". If this value is an object, the "),a("code",[t._v("left")]),t._v(" property defines the left border width. Similarly, the "),a("code",[t._v("right")]),t._v(", "),a("code",[t._v("top")]),t._v(", and "),a("code",[t._v("bottom")]),t._v(" properties can also be specified. Omitted borders and "),a("a",{attrs:{href:"#borderskipped"}},[a("code",[t._v("borderSkipped")])]),t._v(" are skipped.")]),t._v(" "),a("h4",{attrs:{id:"borderradius"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#borderradius"}},[t._v("#")]),t._v(" borderRadius")]),t._v(" "),a("p",[t._v("If this value is a number, it is applied to all corners of the rectangle (topLeft, topRight, bottomLeft, bottomRight), except corners touching the "),a("a",{attrs:{href:"#borderskipped"}},[a("code",[t._v("borderSkipped")])]),t._v(". If this value is an object, the "),a("code",[t._v("topLeft")]),t._v(" property defines the top-left corners border radius. Similarly, the "),a("code",[t._v("topRight")]),t._v(", "),a("code",[t._v("bottomLeft")]),t._v(", and "),a("code",[t._v("bottomRight")]),t._v(" properties can also be specified. Omitted corners and those touching the "),a("a",{attrs:{href:"#borderskipped"}},[a("code",[t._v("borderSkipped")])]),t._v(" are skipped. For example if the "),a("code",[t._v("top")]),t._v(" border is skipped, the border radius for the corners "),a("code",[t._v("topLeft")]),t._v(" and "),a("code",[t._v("topRight")]),t._v(" will be skipped as well.")]),t._v(" "),a("h3",{attrs:{id:"interactions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interactions"}},[t._v("#")]),t._v(" Interactions")]),t._v(" "),a("p",[t._v("The interaction with each bar can be controlled with the following properties:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("hoverBackgroundColor")])]),t._v(" "),a("td",[t._v("The bar background color when hovered.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("hoverBorderColor")])]),t._v(" "),a("td",[t._v("The bar border color when hovered.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("hoverBorderWidth")])]),t._v(" "),a("td",[t._v("The bar border width when hovered (in pixels).")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("hoverBorderRadius")])]),t._v(" "),a("td",[t._v("The bar border radius when hovered (in pixels).")])])])]),t._v(" "),a("p",[t._v("All these values, if "),a("code",[t._v("undefined")]),t._v(", fallback to the associated "),a("RouterLink",{attrs:{to:"/configuration/elements.html#bar-configuration"}},[a("code",[t._v("elements.bar.*")])]),t._v(" options.")],1),t._v(" "),a("h3",{attrs:{id:"barpercentage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#barpercentage"}},[t._v("#")]),t._v(" barPercentage")]),t._v(" "),a("p",[t._v("Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other. "),a("a",{attrs:{href:"#barpercentage-vs-categorypercentage"}},[t._v("more...")])]),t._v(" "),a("h3",{attrs:{id:"categorypercentage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#categorypercentage"}},[t._v("#")]),t._v(" categoryPercentage")]),t._v(" "),a("p",[t._v("Percent (0-1) of the available width each category should be within the sample width. "),a("a",{attrs:{href:"#barpercentage-vs-categorypercentage"}},[t._v("more...")])]),t._v(" "),a("h3",{attrs:{id:"barthickness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#barthickness"}},[t._v("#")]),t._v(" barThickness")]),t._v(" "),a("p",[t._v("If this value is a number, it is applied to the width of each bar, in pixels. When this is enforced, "),a("code",[t._v("barPercentage")]),t._v(" and "),a("code",[t._v("categoryPercentage")]),t._v(" are ignored.")]),t._v(" "),a("p",[t._v("If set to "),a("code",[t._v("'flex'")]),t._v(", the base sample widths are calculated automatically based on the previous and following samples so that they take the full available widths without overlap. Then, bars are sized using "),a("code",[t._v("barPercentage")]),t._v(" and "),a("code",[t._v("categoryPercentage")]),t._v(". There is no gap when the percentage options are 1. This mode generates bars with different widths when data are not evenly spaced.")]),t._v(" "),a("p",[t._v("If not set (default), the base sample widths are calculated using the smallest interval that prevents bar overlapping, and bars are sized using "),a("code",[t._v("barPercentage")]),t._v(" and "),a("code",[t._v("categoryPercentage")]),t._v(". This mode always generates bars equally sized.")]),t._v(" "),a("h3",{attrs:{id:"maxbarthickness"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#maxbarthickness"}},[t._v("#")]),t._v(" maxBarThickness")]),t._v(" "),a("p",[t._v("Set this to ensure that bars are not sized thicker than this.")]),t._v(" "),a("h2",{attrs:{id:"scale-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scale-configuration"}},[t._v("#")]),t._v(" Scale Configuration")]),t._v(" "),a("p",[t._v("The bar chart sets unique default values for the following configuration from the associated "),a("code",[t._v("scale")]),t._v(" options:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("offset")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, extra space is added to both edges and the axis is scaled to fit into the chart area.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grid.offset")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval. If false, the grid line will go right down the middle of the bars. "),a("a",{attrs:{href:"#offsetgridlines"}},[t._v("more...")])])])])]),t._v(" "),a("h3",{attrs:{id:"example-scale-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#example-scale-configuration"}},[t._v("#")]),t._v(" Example scale configuration")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    scales"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            grid"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n              offset"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"offset-grid-lines"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#offset-grid-lines"}},[t._v("#")]),t._v(" Offset Grid Lines")]),t._v(" "),a("p",[t._v("If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval, which is the space between the grid lines. If false, the grid line will go right down the middle of the bars. This is set to true for a category scale in a bar chart while false for other scales or chart types by default.")]),t._v(" "),a("h2",{attrs:{id:"default-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#default-options"}},[t._v("#")]),t._v(" Default Options")]),t._v(" "),a("p",[t._v("It is common to want to apply a configuration setting to all created bar charts. The global bar chart settings are stored in "),a("code",[t._v("Chart.overrides.bar")]),t._v(". Changing the global options only affects charts created after the change. Existing charts are not changed.")]),t._v(" "),a("h2",{attrs:{id:"barpercentage-vs-categorypercentage"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#barpercentage-vs-categorypercentage"}},[t._v("#")]),t._v(" barPercentage vs categoryPercentage")]),t._v(" "),a("p",[t._v("The following shows the relationship between the bar percentage option and the category percentage option.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("// categoryPercentage: 1.0\n// barPercentage: 1.0\nBar:        | 1.0 | 1.0 |\nCategory:   |    1.0    |\nSample:     |===========|\n\n// categoryPercentage: 1.0\n// barPercentage: 0.5\nBar:          |.5|  |.5|\nCategory:  |      1.0     |\nSample:    |==============|\n\n// categoryPercentage: 0.5\n// barPercentage: 1.0\nBar:             |1.0||1.0|\nCategory:        |   .5   |\nSample:     |==================|\n")])])]),a("h2",{attrs:{id:"data-structure"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data-structure"}},[t._v("#")]),t._v(" Data Structure")]),t._v(" "),a("p",[t._v("All of the supported "),a("RouterLink",{attrs:{to:"/general/data-structures.html"}},[t._v("data structures")]),t._v(" can be used with bar charts.")],1),t._v(" "),a("h2",{attrs:{id:"stacked-bar-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stacked-bar-chart"}},[t._v("#")]),t._v(" Stacked Bar Chart")]),t._v(" "),a("p",[t._v("Bar charts can be configured into stacked bar charts by changing the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" stackedBar "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    type"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        scales"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            x"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                stacked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                stacked"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"horizontal-bar-chart"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-bar-chart"}},[t._v("#")]),t._v(" Horizontal Bar Chart")]),t._v(" "),a("p",[t._v("A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.\nTo achieve this you will have to set the "),a("code",[t._v("indexAxis")]),t._v(" property in the options object to "),a("code",[t._v("'y'")]),t._v(".\nThe default for this property is "),a("code",[t._v("'x'")]),t._v(" and thus will show vertical bars.")]),t._v(" "),a("chart-editor",{attrs:{code:"// <block:setup:1>\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [{\n    axis: 'y',\n    label: 'My First Dataset',\n    data: [65, 59, 80, 81, 56, 55, 40],\n    fill: false,\n    backgroundColor: [\n      'rgba(255, 99, 132, 0.2)',\n      'rgba(255, 159, 64, 0.2)',\n      'rgba(255, 205, 86, 0.2)',\n      'rgba(75, 192, 192, 0.2)',\n      'rgba(54, 162, 235, 0.2)',\n      'rgba(153, 102, 255, 0.2)',\n      'rgba(201, 203, 207, 0.2)'\n    ],\n    borderColor: [\n      'rgb(255, 99, 132)',\n      'rgb(255, 159, 64)',\n      'rgb(255, 205, 86)',\n      'rgb(75, 192, 192)',\n      'rgb(54, 162, 235)',\n      'rgb(153, 102, 255)',\n      'rgb(201, 203, 207)'\n    ],\n    borderWidth: 1\n  }]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data,\n  options: {\n    indexAxis: 'y',\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: [],\n  config: config,\n};\n"}}),a("h3",{attrs:{id:"horizontal-bar-chart-config-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#horizontal-bar-chart-config-options"}},[t._v("#")]),t._v(" Horizontal Bar Chart config Options")]),t._v(" "),a("p",[t._v("The configuration options for the horizontal bar chart are the same as for the "),a("a",{attrs:{href:"#scale-configuration"}},[t._v("bar chart")]),t._v(". However, any options specified on the x-axis in a bar chart, are applied to the y-axis in a horizontal bar chart.")]),t._v(" "),a("h2",{attrs:{id:"internal-data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-data-format"}},[t._v("#")]),t._v(" Internal data format")]),t._v(" "),a("p",[a("code",[t._v("{x, y, _custom}")]),t._v(" where "),a("code",[t._v("_custom")]),t._v(" is an optional object defining stacked bar properties: "),a("code",[t._v("{start, end, barStart, barEnd, min, max}")]),t._v(". "),a("code",[t._v("start")]),t._v(" and "),a("code",[t._v("end")]),t._v(" are the input values. Those two are repeated in "),a("code",[t._v("barStart")]),t._v(" (closer to origin), "),a("code",[t._v("barEnd")]),t._v(" (further from origin), "),a("code",[t._v("min")]),t._v(" and "),a("code",[t._v("max")]),t._v(".")])],1)}),[],!1,null,null,null);e.default=s.exports}}]);