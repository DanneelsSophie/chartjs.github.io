(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{469:function(t,e,a){"use strict";a.r(e);var s=a(6),r=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"linear-radial-axis"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear-radial-axis"}},[t._v("#")]),t._v(" Linear Radial Axis")]),t._v(" "),a("p",[t._v("The linear radial scale is used to chart numerical data. As the name suggests, linear interpolation is used to determine where a value lies in relation to the center of the axis.")]),t._v(" "),a("p",[t._v("The following additional configuration options are provided by the radial linear scale.")]),t._v(" "),a("h2",{attrs:{id:"configuration-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#configuration-options"}},[t._v("#")]),t._v(" Configuration Options")]),t._v(" "),a("h3",{attrs:{id:"linear-radial-axis-specific-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear-radial-axis-specific-options"}},[t._v("#")]),t._v(" Linear Radial Axis specific options")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("animate")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Whether to animate scaling the chart from the centre")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("angleLines")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Angle line configuration. "),a("a",{attrs:{href:"#angle-line-options"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("beginAtZero")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, scale will include 0 if it is not already included.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("pointLabels")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Point label configuration. "),a("a",{attrs:{href:"#point-label-options"}},[t._v("more...")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("startAngle")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Starting angle of the scale. In degrees, 0 is at top.")])])])]),t._v(" "),a("h3",{attrs:{id:"common-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-options-to-all-axes"}},[t._v("#")]),t._v(" Common options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId]")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("type")])]),t._v(" "),a("td",[a("code",[t._v("string")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Type of scale being employed. Custom scales can be created and registered with a string key. This allows changing the type of an axis for a chart.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("alignToPixels")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Align pixel values to device pixels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backgroundColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Background color of the scale area.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("Controls the axis global visibility (visible when "),a("code",[t._v("true")]),t._v(", hidden when "),a("code",[t._v("false")]),t._v("). When "),a("code",[t._v("display: 'auto'")]),t._v(", the axis is visible only if at least one associated dataset is visible.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("grid")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Grid line configuration. "),a("RouterLink",{attrs:{to:"/axes/styling.html#grid-line-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("min")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined minimum number for the scale, overrides minimum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("max")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined maximum number for the scale, overrides maximum value from data. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("reverse")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Reverse the scale.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stacked")])]),t._v(" "),a("td",[a("code",[t._v("boolean")]),t._v("|"),a("code",[t._v("string")])]),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("Should the data be stacked. "),a("RouterLink",{attrs:{to:"/axes/#stacking"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMax")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the maximum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("suggestedMin")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Adjustment used when calculating the minimum data value. "),a("RouterLink",{attrs:{to:"/axes/#axis-range-settings"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("ticks")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Tick configuration. "),a("RouterLink",{attrs:{to:"/axes/#tick-configuration"}},[t._v("more...")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("weight")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("The weight used to sort the axis. Higher weights are further away from the chart area.")])])])]),t._v(" "),a("h2",{attrs:{id:"tick-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#tick-configuration"}},[t._v("#")]),t._v(" Tick Configuration")]),t._v(" "),a("h3",{attrs:{id:"linear-radial-axis-specific-tick-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#linear-radial-axis-specific-tick-options"}},[t._v("#")]),t._v(" Linear Radial Axis specific tick options")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Scriptable")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("count")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("undefined")])]),t._v(" "),a("td",[t._v("The number of ticks to generate. If specified, this overrides the automatic generation.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("format")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("The "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("Intl.NumberFormat")]),a("OutboundLink")],1),t._v(" options used by the default label formatter")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("maxTicksLimit")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("11")])]),t._v(" "),a("td",[t._v("Maximum number of ticks and gridlines to show.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("precision")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("If defined and "),a("code",[t._v("stepSize")]),t._v(" is not specified, the step size will be rounded to this many decimal places.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("stepSize")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td"),t._v(" "),a("td",[t._v("User defined fixed step size for the scale. "),a("a",{attrs:{href:"#step-size"}},[t._v("more...")])])])])]),t._v(" "),a("h3",{attrs:{id:"common-tick-options-to-all-axes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#common-tick-options-to-all-axes"}},[t._v("#")]),t._v(" Common tick options to all axes")]),t._v(" "),a("p",[t._v("Namespace: "),a("code",[t._v("options.scales[scaleId].ticks")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Scriptable")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("backdropColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("'rgba(255, 255, 255, 0.75)'")])]),t._v(" "),a("td",[t._v("Color of label backdrops.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backdropPadding")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/padding.html"}},[a("code",[t._v("Padding")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("2")])]),t._v(" "),a("td",[t._v("Padding of label backdrop.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("callback")])]),t._v(" "),a("td",[a("code",[t._v("function")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Returns the string representation of the tick value as it should be displayed on the chart. See "),a("RouterLink",{attrs:{to:"/axes/labelling.html#creating-custom-tick-formats"}},[t._v("callback")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, show tick labels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("color")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.color")])]),t._v(" "),a("td",[t._v("Color of ticks.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("font")])]),t._v(" "),a("td",[a("code",[t._v("Font")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.font")])]),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("major")])]),t._v(" "),a("td",[a("code",[t._v("object")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("{}")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/axes/styling.html#major-tick-configuration"}},[t._v("Major ticks configuration")]),t._v(".")],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("3")])]),t._v(" "),a("td",[t._v("Sets the offset of the tick labels from the axis")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("showLabelBackdrop")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("true")]),t._v(" for radial scale, "),a("code",[t._v("false")]),t._v(" otherwise")]),t._v(" "),a("td",[t._v("If true, draw a background behind the tick labels.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[t._v("``")]),t._v(" "),a("td",[t._v("The color of the stroke around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("textStrokeWidth")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Stroke width around the text.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("z")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}}),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("z-index of tick layer. Useful when ticks are drawn on chart area. Values <= 0 are drawn under datasets, > 0 on top.")])])])]),t._v(" "),a("p",[t._v("The scriptable context is described in "),a("RouterLink",{attrs:{to:"/general/options.html#tick"}},[t._v("Options")]),t._v(" section.")],1),t._v(" "),a("h2",{attrs:{id:"axis-range-settings"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#axis-range-settings"}},[t._v("#")]),t._v(" Axis Range Settings")]),t._v(" "),a("p",[t._v("Given the number of axis range settings, it is important to understand how they all interact with each other.")]),t._v(" "),a("p",[t._v("The "),a("code",[t._v("suggestedMax")]),t._v(" and "),a("code",[t._v("suggestedMin")]),t._v(" settings only change the data values that are used to scale the axis. These are useful for extending the range of the axis while maintaining the auto fit behaviour.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" minDataValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mostNegativeValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ticks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("suggestedMin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" maxDataValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mostPositiveValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ticks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("suggestedMax"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("In this example, the largest positive value is 50, but the data maximum is expanded out to 100. However, because the lowest data value is below the "),a("code",[t._v("suggestedMin")]),t._v(" setting, it is ignored.")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" chart "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Chart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'radar'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("datasets")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'First dataset'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("labels")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'January'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'February'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'March'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'April'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("options")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("suggestedMin")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("suggestedMax")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("100")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("In contrast to the "),a("code",[t._v("suggested*")]),t._v(" settings, the "),a("code",[t._v("min")]),t._v(" and "),a("code",[t._v("max")]),t._v(" settings set explicit ends to the axes. When these are set, some data points may not be visible.")]),t._v(" "),a("h2",{attrs:{id:"step-size"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-size"}},[t._v("#")]),t._v(" Step Size")]),t._v(" "),a("p",[t._v("If set, the scale ticks will be enumerated by multiple of "),a("code",[t._v("stepSize")]),t._v(", having one tick per increment. If not set, the ticks are labeled automatically using the nice numbers algorithm.")]),t._v(" "),a("p",[t._v("This example sets up a chart with a y axis that creates ticks at "),a("code",[t._v("0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" options "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("scales")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("r")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("max")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("min")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("ticks")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("stepSize")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.5")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"angle-line-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#angle-line-options"}},[t._v("#")]),t._v(" Angle Line Options")]),t._v(" "),a("p",[t._v("The following options are used to configure angled lines that radiate from the center of the chart to the point labels.\nNamespace: "),a("code",[t._v("options.scales[scaleId].angleLines")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Scriptable")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, angle lines are shown.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("color")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.borderColor")])]),t._v(" "),a("td",[t._v("Color of angled lines.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("lineWidth")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("1")])]),t._v(" "),a("td",[t._v("Width of angled lines.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("borderDash")])]),t._v(" "),a("td",[a("code",[t._v("number[]")])]),t._v(" "),a("td",[t._v("Yes"),a("sup",[t._v("1")])]),t._v(" "),a("td",[a("code",[t._v("[]")])]),t._v(" "),a("td",[t._v("Length and spacing of dashes on angled lines. See "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),t._v(".")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("borderDashOffset")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("0.0")])]),t._v(" "),a("td",[t._v("Offset for line dashes. See "),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),a("OutboundLink")],1),t._v(".")])])])]),t._v(" "),a("ol",[a("li",[t._v("the "),a("code",[t._v("borderDash")]),t._v(" setting only accepts a static value or a function. Passing an array of arrays is not supported.")])]),t._v(" "),a("p",[t._v("The scriptable context is described in "),a("RouterLink",{attrs:{to:"/general/options.html#scale"}},[t._v("Options")]),t._v(" section.")],1),t._v(" "),a("h2",{attrs:{id:"point-label-options"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#point-label-options"}},[t._v("#")]),t._v(" Point Label Options")]),t._v(" "),a("p",[t._v("The following options are used to configure the point labels that are shown on the perimeter of the scale.\nNamespace: "),a("code",[t._v("options.scales[scaleId].pointLabels")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Name")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Scriptable")]),t._v(" "),a("th",[t._v("Default")]),t._v(" "),a("th",[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("backdropColor")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[a("code",[t._v("undefined")])]),t._v(" "),a("td",[t._v("Background color of the point label.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("backdropPadding")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/padding.html"}},[a("code",[t._v("Padding")])])],1),t._v(" "),a("td"),t._v(" "),a("td",[a("code",[t._v("2")])]),t._v(" "),a("td",[t._v("Padding of label backdrop.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("borderRadius")])]),t._v(" "),a("td",[a("code",[t._v("number")]),t._v("|"),a("code",[t._v("object")])]),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[a("code",[t._v("0")])]),t._v(" "),a("td",[t._v("Border radius of the point label")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("display")])]),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",[t._v("true")])]),t._v(" "),a("td",[t._v("If true, point labels are shown.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("callback")])]),t._v(" "),a("td",[a("code",[t._v("function")])]),t._v(" "),a("td"),t._v(" "),a("td"),t._v(" "),a("td",[t._v("Callback function to transform data labels to point labels. The default implementation simply returns the current string.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("color")])]),t._v(" "),a("td",[a("RouterLink",{attrs:{to:"/general/colors.html"}},[a("code",[t._v("Color")])])],1),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.color")])]),t._v(" "),a("td",[t._v("Color of label.")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("font")])]),t._v(" "),a("td",[a("code",[t._v("Font")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[a("code",[t._v("Chart.defaults.font")])]),t._v(" "),a("td",[t._v("See "),a("RouterLink",{attrs:{to:"/general/fonts.html"}},[t._v("Fonts")])],1)]),t._v(" "),a("tr",[a("td",[a("code",[t._v("padding")])]),t._v(" "),a("td",[a("code",[t._v("number")])]),t._v(" "),a("td",[t._v("Yes")]),t._v(" "),a("td",[t._v("5")]),t._v(" "),a("td",[t._v("Padding between chart and point labels.")])]),t._v(" "),a("tr",[a("td",[a("RouterLink",{attrs:{to:"/samples/other-charts/polar-area-center-labels.html"}},[a("code",[t._v("centerPointLabels")])])],1),t._v(" "),a("td",[a("code",[t._v("boolean")])]),t._v(" "),a("td"),t._v(" "),a("td",[a("code",[t._v("false")])]),t._v(" "),a("td",[t._v("If true, point labels are centered.")])])])]),t._v(" "),a("p",[t._v("The scriptable context is described in "),a("RouterLink",{attrs:{to:"/general/options.html#scale"}},[t._v("Options")]),t._v(" section.")],1),t._v(" "),a("h2",{attrs:{id:"internal-data-format"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#internal-data-format"}},[t._v("#")]),t._v(" Internal data format")]),t._v(" "),a("p",[t._v("Internally, the linear radial scale uses numeric data")])])}),[],!1,null,null,null);e.default=r.exports}}]);