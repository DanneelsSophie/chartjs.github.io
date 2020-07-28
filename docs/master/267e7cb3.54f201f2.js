(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(9),b=(a(0),a(201)),l={title:"Elements"},i={id:"configuration/elements",title:"Elements",description:"While chart types provide settings to configure the styling of each dataset, you sometimes want to style all datasets the same way. A common example would be to stroke all of the bars in a bar chart with the same colour but change the fill per dataset. Options can be configured for four different types of elements: arc, lines, points, and rectangles. When set, these options apply to all objects of that type unless specifically overridden by the configuration attached to a dataset.",source:"@site/docs/configuration/elements.md",permalink:"/docs/master/configuration/elements",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/configuration/elements.md",sidebar:"someSidebar",previous:{title:"Tooltip",permalink:"/docs/master/configuration/tooltip"},next:{title:"Line Chart",permalink:"/docs/master/charts/line"}},c=[{value:"Global Configuration",id:"global-configuration",children:[]},{value:"Point Configuration",id:"point-configuration",children:[{value:"Point Styles",id:"point-styles",children:[]}]},{value:"Line Configuration",id:"line-configuration",children:[]},{value:"Rectangle Configuration",id:"rectangle-configuration",children:[]},{value:"Arc Configuration",id:"arc-configuration",children:[]}],o={rightToc:c};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"While chart types provide settings to configure the styling of each dataset, you sometimes want to style ",Object(b.b)("strong",{parentName:"p"},"all datasets the same way"),". A common example would be to stroke all of the bars in a bar chart with the same colour but change the fill per dataset. Options can be configured for four different types of elements: ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"#arc-configuration"}),"arc")),", ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"#line-configuration"}),"lines")),", ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"#point-configuration"}),"points")),", and ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("a",Object(n.a)({parentName:"strong"},{href:"#rectangle-configuration"}),"rectangles")),". When set, these options apply to all objects of that type unless specifically overridden by the configuration attached to a dataset."),Object(b.b)("h2",{id:"global-configuration"},"Global Configuration"),Object(b.b)("p",null,"The element options can be specified per chart or globally. The global options for elements are defined in ",Object(b.b)("inlineCode",{parentName:"p"},"Chart.defaults.elements"),". For example, to set the border width of all bar charts globally you would do:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"Chart.defaults.elements.rectangle.borderWidth = 2;\n")),Object(b.b)("h2",{id:"point-configuration"},"Point Configuration"),Object(b.b)("p",null,"Point elements are used to represent the points in a line, radar or bubble chart."),Object(b.b)("p",null,"Global point options: ",Object(b.b)("inlineCode",{parentName:"p"},"Chart.defaults.elements.point"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"radius")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"3")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point radius.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#point-styles"}),Object(b.b)("inlineCode",{parentName:"a"},"pointStyle"))),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string"),"|",Object(b.b)("inlineCode",{parentName:"td"},"Image")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'circle'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point style.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"rotation")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point rotation (in degrees).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point fill color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderWidth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point stroke width.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point stroke color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hitRadius")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Extra radius added to point radius for hit detection.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hoverRadius")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"4")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Point radius when hovered.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"hoverBorderWidth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"1")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Stroke width when hovered.")))),Object(b.b)("h3",{id:"point-styles"},"Point Styles"),Object(b.b)("p",null,"The following values are supported:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'circle'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'cross'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'crossRot'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'dash'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'line'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'rect'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'rectRounded'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'rectRot'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'star'")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"'triangle'"))),Object(b.b)("p",null,"If the value is an image, that image is drawn on the canvas using ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/drawImage"}),"drawImage"),"."),Object(b.b)("h2",{id:"line-configuration"},"Line Configuration"),Object(b.b)("p",null,"Line elements are used to represent the line in a line chart."),Object(b.b)("p",null,"Global line options: ",Object(b.b)("inlineCode",{parentName:"p"},"Chart.defaults.elements.line"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"tension")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"B\xe9zier curve tension (",Object(b.b)("inlineCode",{parentName:"td"},"0")," for no B\xe9zier curves).")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Line fill color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderWidth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"3")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Line stroke width.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Line stroke color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderCapStyle")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'butt'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Line cap style. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en/docs/Web/API/CanvasRenderingContext2D/lineCap"}),"MDN"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderDash")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number[]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"[]")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Line dash. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash"}),"MDN"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderDashOffset")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0.0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Line dash offset. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset"}),"MDN"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderJoinStyle")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'miter'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Line join style. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin"}),"MDN"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"capBezierPoints")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")," to keep B\xe9zier control inside the chart, ",Object(b.b)("inlineCode",{parentName:"td"},"false")," for no restriction.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"cubicInterpolationMode")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'default'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Interpolation mode to apply. ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"../charts/line.md#cubicinterpolationmode"}),"See more..."))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"fill")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean"),"|",Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How to fill the area under the line. See ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/charts/area#filling-modes"}),"area charts"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"stepped")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"true")," to show the line as a stepped line (",Object(b.b)("inlineCode",{parentName:"td"},"tension")," will be ignored).")))),Object(b.b)("h2",{id:"rectangle-configuration"},"Rectangle Configuration"),Object(b.b)("p",null,"Rectangle elements are used to represent the bars in a bar chart."),Object(b.b)("p",null,"Global rectangle options: ",Object(b.b)("inlineCode",{parentName:"p"},"Chart.defaults.elements.rectangle"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bar fill color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderWidth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"0")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bar stroke width.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bar stroke color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderSkipped")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'start'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Skipped (excluded) border: ",Object(b.b)("inlineCode",{parentName:"td"},"'start'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'end'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'bottom'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'left'"),", ",Object(b.b)("inlineCode",{parentName:"td"},"'top'")," or ",Object(b.b)("inlineCode",{parentName:"td"},"'right'"),".")))),Object(b.b)("h2",{id:"arc-configuration"},"Arc Configuration"),Object(b.b)("p",null,"Arcs are used in the polar area, doughnut and pie charts."),Object(b.b)("p",null,"Global arc options: ",Object(b.b)("inlineCode",{parentName:"p"},"Chart.defaults.elements.arc"),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"angle")," - for polar only"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"circumference / (arc count)")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arc angle to cover.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Chart.defaults.color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arc fill color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderAlign")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'center'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arc stroke alignment.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderColor")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"Color")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"'#fff'")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arc stroke color.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"borderWidth")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"number")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("inlineCode",{parentName:"td"},"2")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Arc stroke width.")))))}d.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},O=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),O=d(a),p=n,m=O["".concat(l,".").concat(p)]||O[p]||j[p]||b;return a?r.a.createElement(m,i(i({ref:t},o),{},{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"}}]);