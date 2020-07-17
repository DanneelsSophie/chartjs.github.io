(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{186:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return o})),a.d(t,"ExampleChart0",(function(){return d})),a.d(t,"ExampleChart1",(function(){return p})),a.d(t,"default",(function(){return O}));var n=a(2),r=a(9),b=a(0),l=a(201),c={title:"Bar Chart"},i={id:"charts/bar",title:"Bar Chart",description:"A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side.",source:"@site/docs/charts/bar.mdx",permalink:"/docs/next/charts/bar",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/charts/bar.mdx",sidebar:"someSidebar",previous:{title:"Line Chart",permalink:"/docs/next/charts/line"},next:{title:"Radar Chart",permalink:"/docs/next/charts/radar"}},o=[{value:"Example Usage",id:"example-usage",children:[]},{value:"Dataset Properties",id:"dataset-properties",children:[{value:"General",id:"general",children:[]},{value:"Styling",id:"styling",children:[]},{value:"Interactions",id:"interactions",children:[]}]},{value:"Dataset Configuration",id:"dataset-configuration",children:[{value:"Example Usage",id:"example-usage-1",children:[]},{value:"barThickness",id:"barthickness",children:[]}]},{value:"Scale Configuration",id:"scale-configuration",children:[{value:"Example Usage",id:"example-usage-2",children:[]},{value:"offsetGridLines",id:"offsetgridlines",children:[]}]},{value:"Default Options",id:"default-options",children:[]},{value:"barPercentage vs categoryPercentage",id:"barpercentage-vs-categorypercentage",children:[]},{value:"Data Structure",id:"data-structure",children:[]},{value:"Stacked Bar Chart",id:"stacked-bar-chart",children:[]},{value:"Horizontal Bar Chart",id:"horizontal-bar-chart",children:[]},{value:"Example",id:"example",children:[{value:"Config Options",id:"config-options",children:[]}]},{value:"Internal data format",id:"internal-data-format",children:[]}],d=function(){return Object(b.useEffect)((function(){new Chart(document.getElementById("chartjs-0").getContext("2d"),{type:"bar",data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1}]},options:{scales:{y:{beginAtZero:!0}}}})})),Object(l.b)("div",{className:"chartjs-wrapper"},Object(l.b)("canvas",{id:"chartjs-0",className:"chartjs"}))},p=function(){return Object(b.useEffect)((function(){new Chart(document.getElementById("chartjs-1").getContext("2d"),{type:"bar",data:{labels:["January","February","March","April","May","June","July"],datasets:[{axis:"y",label:"My First Dataset",data:[65,59,80,81,56,55,40],fill:!1,backgroundColor:["rgba(255, 99, 132, 0.2)","rgba(255, 159, 64, 0.2)","rgba(255, 205, 86, 0.2)","rgba(75, 192, 192, 0.2)","rgba(54, 162, 235, 0.2)","rgba(153, 102, 255, 0.2)","rgba(201, 203, 207, 0.2)"],borderColor:["rgb(255, 99, 132)","rgb(255, 159, 64)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(54, 162, 235)","rgb(153, 102, 255)","rgb(201, 203, 207)"],borderWidth:1}]},options:{scales:{x:{beginAtZero:!0}}}})})),Object(l.b)("div",{className:"chartjs-wrapper"},Object(l.b)("canvas",{id:"chartjs-1",className:"chartjs"}))},j={rightToc:o,ExampleChart0:d,ExampleChart1:p};function O(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"A bar chart provides a way of showing data values represented as vertical bars. It is sometimes used to show trend data, and the comparison of multiple data sets side by side."),Object(l.b)(d,{mdxType:"ExampleChart0"}),Object(l.b)("h2",{id:"example-usage"},"Example Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var myBarChart = new Chart(ctx, {\n    type: 'bar',\n    data: data,\n    options: options\n});\n")),Object(l.b)("h2",{id:"dataset-properties"},"Dataset Properties"),Object(l.b)("p",null,"The bar chart allows a number of properties to be specified for each dataset.\nThese are used to set display properties for a specific dataset. For example,\nthe color of the bars is generally set this way."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/next/general/options#scriptable-options"}),"Scriptable")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("a",Object(n.a)({parentName:"th"},{href:"/docs/next/general/options#indexable-options"}),"Indexable")),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(l.b)("inlineCode",{parentName:"a"},"backgroundColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#styling"}),Object(l.b)("inlineCode",{parentName:"a"},"borderColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'rgba(0, 0, 0, 0.1)'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#borderskipped"}),Object(l.b)("inlineCode",{parentName:"a"},"borderSkipped"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'start'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#borderwidth"}),Object(l.b)("inlineCode",{parentName:"a"},"borderWidth"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"number","|","object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"clip"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"number","|","object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#data-structure"}),Object(l.b)("inlineCode",{parentName:"a"},"data"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"object[]")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"required"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBackgroundColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderColor"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/general/colors"}),Object(l.b)("inlineCode",{parentName:"a"},"Color"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#interactions"}),Object(l.b)("inlineCode",{parentName:"a"},"hoverBorderWidth"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"Yes"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"indexAxis"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(l.b)("inlineCode",{parentName:"td"},"'x'")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"The base axis for the dataset. Use ",Object(l.b)("inlineCode",{parentName:"td"},"'y'")," for horizontal bar."),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"label"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"''"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"order"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"xAxisID"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"first x axis")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#general"}),Object(l.b)("inlineCode",{parentName:"a"},"yAxisID"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"-"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"first y axis")))),Object(l.b)("h3",{id:"general"},"General"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"clip")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. ",Object(l.b)("inlineCode",{parentName:"td"},"0")," = clip at chartArea. Clipping can also be configured per side: ",Object(l.b)("inlineCode",{parentName:"td"},"clip: {left: 5, top: false, right: -2, bottom: 0}"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"indexAxis")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The base axis of the dataset. ",Object(l.b)("inlineCode",{parentName:"td"},"'x'")," for vertical bars and ",Object(l.b)("inlineCode",{parentName:"td"},"'y'")," for horizontal bars.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"label")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The label for the dataset which appears in the legend and tooltips.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"order")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The drawing order of dataset. Also affects order for stacking, tooltip and legend.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"xAxisID")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ID of the x axis to plot this dataset on.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"yAxisID")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ID of the y axis to plot this dataset on.")))),Object(l.b)("h3",{id:"styling"},"Styling"),Object(l.b)("p",null,"The style of each bar can be controlled with the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"backgroundColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bar background color.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"borderColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bar border color.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#borderskipped"}),Object(l.b)("inlineCode",{parentName:"a"},"borderSkipped"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The edge to skip when drawing bar.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#borderwidth"}),Object(l.b)("inlineCode",{parentName:"a"},"borderWidth"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bar border width (in pixels).")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"clip")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"How to clip relative to chartArea. Positive value allows overflow, negative value clips that many pixels inside chartArea. ",Object(l.b)("inlineCode",{parentName:"td"},"0")," = clip at chartArea. Clipping can also be configured per side: ",Object(l.b)("inlineCode",{parentName:"td"},"clip: {left: 5, top: false, right: -2, bottom: 0}"))))),Object(l.b)("p",null,"All these values, if ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),", fallback to the associated ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/configuration/elements#rectangle-configuration"}),Object(l.b)("inlineCode",{parentName:"a"},"elements.rectangle.*"))," options."),Object(l.b)("h4",{id:"borderskipped"},"borderSkipped"),Object(l.b)("p",null,"This setting is used to avoid drawing the bar stroke at the base of the fill.\nIn general, this does not need to be changed except when creating chart types\nthat derive from a bar chart."),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Note:")," for negative bars in vertical chart, ",Object(l.b)("inlineCode",{parentName:"p"},"top")," and ",Object(l.b)("inlineCode",{parentName:"p"},"bottom")," are flipped. Same goes for ",Object(l.b)("inlineCode",{parentName:"p"},"left")," and ",Object(l.b)("inlineCode",{parentName:"p"},"right")," in horizontal chart."),Object(l.b)("p",null,"Options are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'start'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'end'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'bottom'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'left'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'top'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'right'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"false"))),Object(l.b)("h4",{id:"borderwidth"},"borderWidth"),Object(l.b)("p",null,"If this value is a number, it is applied to all sides of the rectangle (left, top, right, bottom), except ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#borderskipped"}),Object(l.b)("inlineCode",{parentName:"a"},"borderSkipped")),". If this value is an object, the ",Object(l.b)("inlineCode",{parentName:"p"},"left")," property defines the left border width. Similarly the ",Object(l.b)("inlineCode",{parentName:"p"},"right"),", ",Object(l.b)("inlineCode",{parentName:"p"},"top")," and ",Object(l.b)("inlineCode",{parentName:"p"},"bottom")," properties can also be specified. Omitted borders and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#borderskipped"}),Object(l.b)("inlineCode",{parentName:"a"},"borderSkipped"))," are skipped."),Object(l.b)("h3",{id:"interactions"},"Interactions"),Object(l.b)("p",null,"The interaction with each bar can be controlled with the following properties:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"hoverBackgroundColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bar background color when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"hoverBorderColor")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bar border color when hovered.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"hoverBorderWidth")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The bar border width when hovered (in pixels).")))),Object(l.b)("p",null,"All these values, if ",Object(l.b)("inlineCode",{parentName:"p"},"undefined"),", fallback to the associated ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/configuration/elements#rectangle-configuration"}),Object(l.b)("inlineCode",{parentName:"a"},"elements.rectangle.*"))," options."),Object(l.b)("h2",{id:"dataset-configuration"},"Dataset Configuration"),Object(l.b)("p",null,"The bar chart accepts the following configuration from the associated dataset options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"barPercentage")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0.9")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Percent (0-1) of the available width each bar should be within the category width. 1.0 will take the whole category width and put the bars right next to each other. ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#barpercentage-vs-categorypercentage"}),"more..."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"categoryPercentage")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"0.8")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Percent (0-1) of the available width each category should be within the sample width. ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#barpercentage-vs-categorypercentage"}),"more..."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"barThickness")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,"number","|","string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Manually set width of each bar in pixels. If set to ",Object(l.b)("inlineCode",{parentName:"td"},"'flex'"),', it computes "optimal" sample widths that globally arrange bars side by side. If not set (default), bars are equally sized based on the smallest interval. ',Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#barthickness"}),"more..."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"maxBarThickness")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set this to ensure that bars are not sized thicker than this.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"minBarLength")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set this to ensure that bars have a minimum length in pixels.")))),Object(l.b)("h3",{id:"example-usage-1"},"Example Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"data: {\n    datasets: [{\n        barPercentage: 0.5,\n        barThickness: 6,\n        maxBarThickness: 8,\n        minBarLength: 2,\n        data: [10, 20, 30, 40, 50, 60, 70]\n    }]\n};\n")),Object(l.b)("h3",{id:"barthickness"},"barThickness"),Object(l.b)("p",null,"If this value is a number, it is applied to the width of each bar, in pixels. When this is enforced, ",Object(l.b)("inlineCode",{parentName:"p"},"barPercentage")," and ",Object(l.b)("inlineCode",{parentName:"p"},"categoryPercentage")," are ignored."),Object(l.b)("p",null,"If set to ",Object(l.b)("inlineCode",{parentName:"p"},"'flex'"),", the base sample widths are calculated automatically based on the previous and following samples so that they take the full available widths without overlap. Then, bars are sized using ",Object(l.b)("inlineCode",{parentName:"p"},"barPercentage")," and ",Object(l.b)("inlineCode",{parentName:"p"},"categoryPercentage"),". There is no gap when the percentage options are 1. This mode generates bars with different widths when data are not evenly spaced."),Object(l.b)("p",null,"If not set (default), the base sample widths are calculated using the smallest interval that prevents bar overlapping, and bars are sized using ",Object(l.b)("inlineCode",{parentName:"p"},"barPercentage")," and ",Object(l.b)("inlineCode",{parentName:"p"},"categoryPercentage"),". This mode always generates bars equally sized."),Object(l.b)("h2",{id:"scale-configuration"},"Scale Configuration"),Object(l.b)("p",null,"The bar chart sets unique default values for the following configuration from the associated ",Object(l.b)("inlineCode",{parentName:"p"},"scale")," options:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"offset")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, extra space is added to the both edges and the axis is scaled to fit into the chart area.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"gridLines.offsetGridLines")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"true")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval. If false, the grid line will go right down the middle of the bars. ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#offsetgridlines"}),"more..."))))),Object(l.b)("h3",{id:"example-usage-2"},"Example Usage"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"options = {\n    scales: {\n        x: {\n            gridLines: {\n                offsetGridLines: true\n            }\n        }\n    }\n};\n")),Object(l.b)("h3",{id:"offsetgridlines"},"offsetGridLines"),Object(l.b)("p",null,"If true, the bars for a particular data point fall between the grid lines. The grid line will move to the left by one half of the tick interval, which is the space between the grid lines. If false, the grid line will go right down the middle of the bars. This is set to true for a category scale in a bar chart while false for other scales or chart types by default."),Object(l.b)("h2",{id:"default-options"},"Default Options"),Object(l.b)("p",null,"It is common to want to apply a configuration setting to all created bar charts. The global bar chart settings are stored in ",Object(l.b)("inlineCode",{parentName:"p"},"Chart.defaults.bar"),". Changing the global options only affects charts created after the change. Existing charts are not changed."),Object(l.b)("h2",{id:"barpercentage-vs-categorypercentage"},"barPercentage vs categoryPercentage"),Object(l.b)("p",null,"The following shows the relationship between the bar percentage option and the category percentage option."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"// categoryPercentage: 1.0\n// barPercentage: 1.0\nBar:        | 1.0 | 1.0 |\nCategory:   |    1.0    |\nSample:     |===========|\n\n// categoryPercentage: 1.0\n// barPercentage: 0.5\nBar:          |.5|  |.5|\nCategory:  |      1.0     |\nSample:    |==============|\n\n// categoryPercentage: 0.5\n// barPercentage: 1.0\nBar:            |1.||1.|\nCategory:       |  .5  |\nSample:     |==============|\n")),Object(l.b)("h2",{id:"data-structure"},"Data Structure"),Object(l.b)("p",null,"All of the supported ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/general/data-structures"}),"data structures")," can be used with bar charts."),Object(l.b)("h2",{id:"stacked-bar-chart"},"Stacked Bar Chart"),Object(l.b)("p",null,"Bar charts can be configured into stacked bar charts by changing the settings on the X and Y axes to enable stacking. Stacked bar charts can be used to show how one data series is made up of a number of smaller pieces."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var stackedBar = new Chart(ctx, {\n    type: 'bar',\n    data: data,\n    options: {\n        scales: {\n            x: {\n                stacked: true\n            },\n            y: {\n                stacked: true\n            }\n        }\n    }\n});\n")),Object(l.b)("p",null,"The following dataset properties are specific to stacked bar charts."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"stack")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The ID of the group to which this dataset belongs to (when stacked, each group will be a separate stack).")))),Object(l.b)("h2",{id:"horizontal-bar-chart"},"Horizontal Bar Chart"),Object(l.b)("p",null,"A horizontal bar chart is a variation on a vertical bar chart. It is sometimes used to show trend data, and the comparison of multiple data sets side by side."),Object(l.b)(p,{mdxType:"ExampleChart1"}),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var myBarChart = new Chart(ctx, {\n    type: 'bar',\n    data: data,\n    options: options\n});\n")),Object(l.b)("h3",{id:"config-options"},"Config Options"),Object(l.b)("p",null,"The configuration options for the horizontal bar chart are the same as for the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#scale-configuration"}),"bar chart"),". However, any options specified on the x axis in a bar chart, are applied to the y axis in a horizontal bar chart."),Object(l.b)("h2",{id:"internal-data-format"},"Internal data format"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"{x, y, _custom}")," where ",Object(l.b)("inlineCode",{parentName:"p"},"_custom")," is optional object defining stacked bar properties: ",Object(l.b)("inlineCode",{parentName:"p"},"{start, end, barStart, barEnd, min, max}"),". ",Object(l.b)("inlineCode",{parentName:"p"},"start")," and ",Object(l.b)("inlineCode",{parentName:"p"},"end")," are the input values. Those two are repeated in ",Object(l.b)("inlineCode",{parentName:"p"},"barStart")," (closer to origin), ",Object(l.b)("inlineCode",{parentName:"p"},"barEnd")," (further from origin), ",Object(l.b)("inlineCode",{parentName:"p"},"min")," and ",Object(l.b)("inlineCode",{parentName:"p"},"max"),"."))}O.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return s}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,s=p["".concat(l,".").concat(O)]||p[O]||j[O]||b;return a?r.a.createElement(s,c(c({ref:t},o),{},{components:a})):r.a.createElement(s,c({ref:t},o))}));function s(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=O;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);