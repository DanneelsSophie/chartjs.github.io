/*! For license information please see b0ba5f6b.d7585b64.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(9),i=(n(0),n(207)),b=n(239),l=n(233),o={title:"Animations"},c={id:"configuration/animations",title:"Animations",description:"Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes.",source:"@site/docs/configuration/animations.mdx",permalink:"/docs/master/configuration/animations",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/configuration/animations.mdx",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/docs/master/configuration/index"},next:{title:"Layout",permalink:"/docs/master/configuration/layout"}},d=[{value:"Animation Configuration",id:"animation-configuration",children:[]},{value:"Animation mode configuration",id:"animation-mode-configuration",children:[{value:"Default modes",id:"default-modes",children:[]}]},{value:"Animation property configuration",id:"animation-property-configuration",children:[]},{value:"Animation properties collection configuration",id:"animation-properties-collection-configuration",children:[{value:"Default collections",id:"default-collections",children:[]}]},{value:"Disabling animation",id:"disabling-animation",children:[]},{value:"Easing",id:"easing",children:[]},{value:"Animation Callbacks",id:"animation-callbacks",children:[]}],p={rightToc:d};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes."),Object(i.b)(b.a,{defaultValue:"tension",values:[{label:"Looping tension [property]",value:"tension"},{label:"Hide and show [mode]",value:"hideshow"}],mdxType:"Tabs"},Object(i.b)(l.a,{value:"tension",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function example() {\n  useEffect(() => {\n    const ctx = document.getElementById('chartjs-a0').getContext('2d');\n    const cfg = {\n      type: 'line',\n      data: {\n        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n        datasets: [{\n          label: 'Looping tension',\n          data: [65, 59, 80, 81, 26, 55, 40],\n          fill: false,\n          borderColor: 'rgb(75, 192, 192)',\n        }]\n      },\n      options: {\n          animation: {\n              tension: {\n                  duration: 1000,\n                  easing: 'linear',\n                  from: 1,\n                  to: 0,\n                  loop: true\n              }\n          },\n          scales: {\n            y: { // defining min and max so hiding the dataset does not change scale range\n              min: 0,\n              max: 100\n            }\n          }\n      }\n    };\n    const chart = new Chart(ctx, cfg);\n    return () => chart.destroy();\n  });\n  return <div className=\"chartjs-wrapper\"><canvas id=\"chartjs-a0\" className=\"chartjs\"></canvas></div>;\n}\n"))),Object(i.b)(l.a,{value:"hideshow",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function example() {\n  useEffect(() => {\n    const ctx = document.getElementById('chartjs-a1').getContext('2d');\n    const cfg = {\n      type: 'line',\n      data: {\n        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n        datasets: [{\n          label: 'Try hiding me',\n          data: [65, 59, 80, 81, 26, 55, 40],\n          fill: false,\n          borderColor: 'rgb(75, 192, 192)',\n        }]\n      },\n      options: {\n          animation: {\n            show: {\n                x: {\n                    from: 0\n                },\n                y: {\n                    from: 0\n                }\n            },\n            hide: {\n                x: {\n                    to: 0\n                },\n                y: {\n                    to: 0\n                }\n            }\n          }\n      }\n    };\n    const chart = new Chart(ctx, cfg);\n    return () => chart.destroy();\n  });\n  return <div className=\"chartjs-wrapper\"><canvas id=\"chartjs-a1\" className=\"chartjs\"></canvas></div>;\n}\n")))),Object(i.b)("h2",{id:"animation-configuration"},"Animation Configuration"),Object(i.b)("p",null,"The following animation options are available. The global options are defined in ",Object(i.b)("inlineCode",{parentName:"p"},"Chart.defaults.animation"),".\nThe default configuration is defined here: ",Object(i.b)("a",{href:"https://github.com/chartjs/Chart.js/blob/master/src/core/core.animations.js#L6-L55",target:"_blank"},"core.animations.js")),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"duration")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"1000")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"The number of milliseconds an animation takes.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"easing")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'easeOutQuart'")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Easing function to use. ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#easing"}),"more..."))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"debug")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Running animation count + FPS display in upper left corner of the chart.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"delay")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Delay before starting the animations.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"loop")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"If set to ",Object(i.b)("inlineCode",{parentName:"td"},"true"),", the animations loop endlessly.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#animation-mode-configuration"}),"[mode]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#default-modes"}),"defaults...")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Option overrides for update mode. Core modes: ",Object(i.b)("inlineCode",{parentName:"td"},"'active'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'hide'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'reset'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'resize'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'show'"),". See ",Object(i.b)("strong",{parentName:"td"},"Hide and show ","[mode]")," example above.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#animation-property-configuration"}),"[property]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Option overrides for a single element ",Object(i.b)("inlineCode",{parentName:"td"},"[property]"),". These have precedence over ",Object(i.b)("inlineCode",{parentName:"td"},"[collection]"),". See ",Object(i.b)("strong",{parentName:"td"},"Looping tension ","[property]")," example above.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#animation-properties-collection-configuration"}),"[collection]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"object")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"#default-collections"}),"defaults...")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Option overrides for multiple properties, identified by ",Object(i.b)("inlineCode",{parentName:"td"},"properties")," array.")))),Object(i.b)("p",null,"These defaults can be overridden in ",Object(i.b)("inlineCode",{parentName:"p"},"options.animation")," or ",Object(i.b)("inlineCode",{parentName:"p"},"dataset.animation")," and ",Object(i.b)("inlineCode",{parentName:"p"},"tooltip.animation"),". These keys are also ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/master/general/options#scriptable-options"}),"Scriptable"),"."),Object(i.b)("h2",{id:"animation-mode-configuration"},"Animation mode configuration"),Object(i.b)("p",null,"Mode option configures how an update mode animates the chart.\nThe cores modes are ",Object(i.b)("inlineCode",{parentName:"p"},"'active'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'hide'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'reset'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'resize'"),", ",Object(i.b)("inlineCode",{parentName:"p"},"'show'"),".\nA custom mode can be used by passing a custom ",Object(i.b)("inlineCode",{parentName:"p"},"mode")," to ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/master/developers/api#updatemode"}),"update"),".\nA mode option is defined by the same options of the main ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#animation-configuration"}),"animation configuration"),"."),Object(i.b)("h3",{id:"default-modes"},"Default modes"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mode"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'active'")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"400"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Override default duration to 400ms for hover animations")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'resize'")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"duration"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Override default duration to 0ms (= no animation) for resize")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'show'")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"colors"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"{ type: 'color', properties: ['borderColor', 'backgroundColor'], from: 'transparent' }")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Colors are faded in from transparent when dataset is shown using legend / ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/master/developers/api#showdatasetIndex"}),"api"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'show'")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"visible"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"{ type: 'boolean', duration: 0 }")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Dataset visiblity is immediately changed to true so the color transition from transparent is visible.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'hide'")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"colors"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"{ type: 'color', properties: ['borderColor', 'backgroundColor'], to: 'transparent' }")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Colors are faded to transparent when dataset id hidden using legend / ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"/docs/master/developers/api#hidedatasetIndex"}),"api"),".")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'hide'")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"visible"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"{ type: 'boolean', easing: 'easeInExpo' }")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Visibility is changed to false at a very late phase of animation")))),Object(i.b)("h2",{id:"animation-property-configuration"},"Animation property configuration"),Object(i.b)("p",null,"Property option configures which element property to use to animate the chart and its starting and ending values.\nA property option is defined by the same options of the main ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#animation-configuration"}),"animation configuration"),", adding the following ones:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"type")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"typeof property")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Type of property, determines the interpolator used. Possible values: ",Object(i.b)("inlineCode",{parentName:"td"},"'number'"),", ",Object(i.b)("inlineCode",{parentName:"td"},"'color'")," and ",Object(i.b)("inlineCode",{parentName:"td"},"'boolean'"),". Only really needed for ",Object(i.b)("inlineCode",{parentName:"td"},"'color'"),", because ",Object(i.b)("inlineCode",{parentName:"td"},"typeof")," does not get that right.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"from")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number"),"|",Object(i.b)("inlineCode",{parentName:"td"},"Color"),"|",Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Start value for the animation. Current value is used when ",Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"to")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"number"),"|",Object(i.b)("inlineCode",{parentName:"td"},"Color"),"|",Object(i.b)("inlineCode",{parentName:"td"},"boolean")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"End value for the animation. Updated value is used when ",Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"fn")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("code",null,"<","T",">","(from: T, to: T, factor: number) => T;")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Optional custom interpolator, instead of using a predefined interpolator from ",Object(i.b)("inlineCode",{parentName:"td"},"type"))))),Object(i.b)("h2",{id:"animation-properties-collection-configuration"},"Animation properties collection configuration"),Object(i.b)("p",null,"Properties collection option configures which set of element properties to use to animate the chart.\nCollection can be named whatever you like, but should not collide with a ",Object(i.b)("inlineCode",{parentName:"p"},"[property]")," or ",Object(i.b)("inlineCode",{parentName:"p"},"[mode]"),".\nA properties collection option is defined by the same options of the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#animation-property-configuration"}),"animation property configuration"),", adding the following one:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"properties")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"string[]")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Set of properties to use to animate the chart.")))),Object(i.b)("h3",{id:"default-collections"},"Default collections"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Option"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"numbers")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"type")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'number'"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"numbers")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"properties")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"['x', 'y', 'borderWidth', 'radius', 'tension']"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"colors")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"type")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"'color'"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"colors")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"properties")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"['borderColor', 'backgroundColor']"))))),Object(i.b)("p",null,"Direct property configuration overrides configuration of same property in a collection."),Object(i.b)("p",null,"From collections, a property gets its configuration from first one that has its name in properties."),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"These default collections are overridden by most dataset controllers."))),Object(i.b)("h2",{id:"disabling-animation"},"Disabling animation"),Object(i.b)("p",null,"To disable an animation configuration, the animation node must be set to ",Object(i.b)("inlineCode",{parentName:"p"},"false"),", with the exception for animation modes which can be disabled by setting the ",Object(i.b)("inlineCode",{parentName:"p"},"duration")," to ",Object(i.b)("inlineCode",{parentName:"p"},"0"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"chart.options.animation = false; // disables the whole animation\nchart.options.animation.active.duration = 0; // disables the animation for 'active' mode\nchart.options.animation.colors = false; // disables animation defined by the collection of 'colors' properties\nchart.options.animation.x = false; // disables animation defined by the 'x' property\n")),Object(i.b)("h2",{id:"easing"},"Easing"),Object(i.b)("p",null,"Available options are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'linear'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInQuad'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutQuad'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutQuad'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInCubic'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutCubic'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutCubic'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInQuart'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutQuart'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutQuart'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInQuint'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutQuint'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutQuint'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInSine'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutSine'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutSine'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInExpo'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutExpo'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutExpo'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInCirc'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutCirc'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutCirc'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInElastic'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutElastic'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutElastic'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInBack'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutBack'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutBack'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInBounce'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeOutBounce'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"'easeInOutBounce'"))),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"http://robertpenner.com/easing/"}),"Robert Penner's easing equations"),"."),Object(i.b)("h2",{id:"animation-callbacks"},"Animation Callbacks"),Object(i.b)("p",null,"The animation configuration provides callbacks which are useful for synchronizing an external draw to the chart animation.\nThe callbacks can be set only at main ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#animation-configuration"}),"animation configuration"),"."),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"onProgress")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"null")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Callback called on each step of an animation.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"onComplete")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"null")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Callback called when all animations are completed.")))),Object(i.b)("p",null,"The callback is passed the following object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    // Chart object\n    chart: Chart,\n\n    // Number of animations still in progress\n    currentStep: number,\n\n    // Total number of animations at the start of current animation\n    numSteps: number,\n}\n")),Object(i.b)("p",null,"The following example fills a progress bar during the chart animation."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        animation: {\n            onProgress: function(animation) {\n                progress.value = animation.currentStep / animation.numSteps;\n            }\n        }\n    }\n});\n")),Object(i.b)("p",null,"Another example usage of these callbacks can be found on ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/blob/master/samples/advanced/progress-bar.html"}),"Github"),": this sample displays a progress bar showing how far along the animation is."))}m.isMDXComponent=!0},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(n),O=a,j=p["".concat(b,".").concat(O)]||p[O]||m[O]||i;return n?r.a.createElement(j,l(l({ref:t},c),{},{components:n})):r.a.createElement(j,l({ref:t},c))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,b=new Array(i);b[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var c=2;c<i;c++)b[c]=n[c];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},209:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var i=typeof a;if("string"===i||"number"===i)e.push(a);else if(Array.isArray(a)&&a.length){var b=r.apply(null,a);b&&e.push(b)}else if("object"===i)for(var l in a)n.call(a,l)&&a[l]&&e.push(l)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},218:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=r},233:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},239:function(e,t,n){"use strict";n(24),n(20),n(18);var a=n(0),r=n.n(a),i=n(218);var b=function(){return Object(a.useContext)(i.a)},l=n(209),o=n.n(l),c=n(133),d=n.n(c),p=37,m=39;t.a=function(e){var t=e.block,n=e.children,i=e.defaultValue,l=e.values,c=e.groupId,O=b(),j=O.tabGroupChoices,u=O.setTabGroupChoices,s=Object(a.useState)(i),N=s[0],g=s[1];if(null!=c){var f=j[c];null!=f&&f!==N&&g(f)}var h=function(e){g(e),null!=c&&u(c,e)},C=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:o()("tabs",{"tabs--block":t})},l.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":N===t,className:o()("tabs__item",d.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){return function(e,t,n){switch(n.keyCode){case m:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case p:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return h(t)},onClick:function(){return h(t)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===N}))[0]))}}}]);