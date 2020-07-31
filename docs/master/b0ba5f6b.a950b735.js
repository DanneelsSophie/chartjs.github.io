/*! For license information please see b0ba5f6b.a950b735.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{200:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return g})),a.d(t,"metadata",(function(){return f})),a.d(t,"rightToc",(function(){return h})),a.d(t,"default",(function(){return y}));var n=a(2),i=a(9),r=a(0),b=a.n(r),l=a(201),o=(a(24),a(20),a(19),a(224));var c=function(){return Object(r.useContext)(o.a)},p=a(203),d=a.n(p),m=a(179),O=a.n(m),j=37,u=39;var s=function(e){var t=e.block,a=e.children,n=e.defaultValue,i=e.values,l=e.groupId,o=c(),p=o.tabGroupChoices,m=o.setTabGroupChoices,s=Object(r.useState)(n),N=s[0],g=s[1];if(null!=l){var f=p[l];null!=f&&f!==N&&g(f)}var h=function(e){g(e),null!=l&&m(l,e)},C=[];return b.a.createElement("div",null,b.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:d()("tabs",{"tabs--block":t})},i.map((function(e){var t=e.value,a=e.label;return b.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":N===t,className:d()("tabs__item",O.a.tabItem,{"tabs__item--active":N===t}),key:t,ref:function(e){return C.push(e)},onKeyDown:function(e){return function(e,t,a){switch(a.keyCode){case u:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case j:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(C,e.target,e)},onFocus:function(){return h(t)},onClick:function(){return h(t)}},a)}))),b.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(a).filter((function(e){return e.props.value===N}))[0]))};var N=function(e){return b.a.createElement("div",null,e.children)},g={title:"Animations"},f={id:"configuration/animations",title:"Animations",description:"Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes.",source:"@site/docs/configuration/animations.mdx",permalink:"/docs/master/configuration/animations",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/configuration/animations.mdx",sidebar:"someSidebar",previous:{title:"Configuration",permalink:"/docs/master/configuration/index"},next:{title:"Layout",permalink:"/docs/master/configuration/layout"}},h=[{value:"Animation Configuration",id:"animation-configuration",children:[]},{value:"Animation mode configuration",id:"animation-mode-configuration",children:[{value:"Default modes",id:"default-modes",children:[]}]},{value:"Animation property configuration",id:"animation-property-configuration",children:[]},{value:"Animation properties collection configuration",id:"animation-properties-collection-configuration",children:[{value:"Default collections",id:"default-collections",children:[]}]},{value:"Disabling animation",id:"disabling-animation",children:[]},{value:"Easing",id:"easing",children:[]},{value:"Animation Callbacks",id:"animation-callbacks",children:[]}],C={rightToc:h};function y(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},C,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Chart.js animates charts out of the box. A number of options are provided to configure how the animation looks and how long it takes."),Object(l.b)(s,{defaultValue:"tension",values:[{label:"Looping tension [property]",value:"tension"},{label:"Hide and show [mode]",value:"hideshow"}],mdxType:"Tabs"},Object(l.b)(N,{value:"tension",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function example() {\n  useEffect(() => {\n    const ctx = document.getElementById('chartjs-a0').getContext('2d');\n    const cfg = {\n      type: 'line',\n      data: {\n        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n        datasets: [{\n          label: 'Looping tension',\n          data: [65, 59, 80, 81, 26, 55, 40],\n          fill: false,\n          borderColor: 'rgb(75, 192, 192)',\n        }]\n      },\n      options: {\n          animation: {\n              tension: {\n                  duration: 1000,\n                  easing: 'linear',\n                  from: 1,\n                  to: 0,\n                  loop: true\n              }\n          },\n          scales: {\n            y: { // defining min and max so hiding the dataset does not change scale range\n              min: 0,\n              max: 100\n            }\n          }\n      }\n    };\n    new Chart(ctx, cfg);\n  });\n  return <div className=\"chartjs-wrapper\"><canvas id=\"chartjs-a0\" className=\"chartjs\"></canvas></div>;\n}\n"))),Object(l.b)(N,{value:"hideshow",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx",metastring:"live",live:!0}),"function example() {\n  useEffect(() => {\n    const ctx = document.getElementById('chartjs-a1').getContext('2d');\n    const cfg = {\n      type: 'line',\n      data: {\n        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n        datasets: [{\n          label: 'Try hiding me',\n          data: [65, 59, 80, 81, 26, 55, 40],\n          fill: false,\n          borderColor: 'rgb(75, 192, 192)',\n        }]\n      },\n      options: {\n          animation: {\n            show: {\n                x: {\n                    from: 0\n                },\n                y: {\n                    from: 0\n                }\n            },\n            hide: {\n                x: {\n                    to: 0\n                },\n                y: {\n                    to: 0\n                }\n            }\n          }\n      }\n    };\n    new Chart(ctx, cfg);\n  });\n  return <div className=\"chartjs-wrapper\"><canvas id=\"chartjs-a1\" className=\"chartjs\"></canvas></div>;\n}\n")))),Object(l.b)("h2",{id:"animation-configuration"},"Animation Configuration"),Object(l.b)("p",null,"The following animation options are available. The global options are defined in ",Object(l.b)("inlineCode",{parentName:"p"},"Chart.defaults.animation"),".\nThe default configuration is defined here: ",Object(l.b)("a",{href:"https://github.com/chartjs/Chart.js/blob/master/src/core/core.animations.js#L6-L55",target:"_blank"},"core.animations.js")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"duration")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"1000")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The number of milliseconds an animation takes.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"easing")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'easeOutQuart'")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Easing function to use. ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#easing"}),"more..."))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"debug")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Running animation count + FPS display in upper left corner of the chart.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"delay")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"number")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Delay before starting the animations.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"loop")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"boolean")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If set to ",Object(l.b)("inlineCode",{parentName:"td"},"true"),", the animations loop endlessly.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#animation-mode-configuration"}),"[mode]")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#default-modes"}),"defaults...")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Option overrides for update mode. Core modes: ",Object(l.b)("inlineCode",{parentName:"td"},"'active'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'hide'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'reset'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'resize'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'show'"),". See ",Object(l.b)("strong",{parentName:"td"},"Hide and show ","[mode]")," example above.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#animation-property-configuration"}),"[property]")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Option overrides for a single element ",Object(l.b)("inlineCode",{parentName:"td"},"[property]"),". These have precedence over ",Object(l.b)("inlineCode",{parentName:"td"},"[collection]"),". See ",Object(l.b)("strong",{parentName:"td"},"Looping tension ","[property]")," example above.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#animation-properties-collection-configuration"}),"[collection]")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"object")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"#default-collections"}),"defaults...")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Option overrides for multiple properties, identified by ",Object(l.b)("inlineCode",{parentName:"td"},"properties")," array.")))),Object(l.b)("p",null,"These defaults can be overridden in ",Object(l.b)("inlineCode",{parentName:"p"},"options.animation")," or ",Object(l.b)("inlineCode",{parentName:"p"},"dataset.animation")," and ",Object(l.b)("inlineCode",{parentName:"p"},"tooltip.animation"),". These keys are also ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/general/options#scriptable-options"}),"Scriptable")),Object(l.b)("h2",{id:"animation-mode-configuration"},"Animation mode configuration"),Object(l.b)("p",null,"Mode option configures how an update mode animates the chart.\nThe cores modes are ",Object(l.b)("inlineCode",{parentName:"p"},"'active'"),", ",Object(l.b)("inlineCode",{parentName:"p"},"'hide'"),", ",Object(l.b)("inlineCode",{parentName:"p"},"'reset'"),", ",Object(l.b)("inlineCode",{parentName:"p"},"'resize'"),", ",Object(l.b)("inlineCode",{parentName:"p"},"'show'"),".\nA custom mode can be used by passing a custom ",Object(l.b)("inlineCode",{parentName:"p"},"mode")," to ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/master/developers/api#updatemode"}),"update"),".\nA mode option is defined by the same options of the main ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#animation-configuration"}),"animation configuration"),"."),Object(l.b)("h3",{id:"default-modes"},"Default modes"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Mode"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'active'")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duration"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"400"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override default duration to 400ms for hover animations")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'resize'")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"duration"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Override default duration to 0ms (= no animation) for resize")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'show'")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colors"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"{ type: 'color', properties: ['borderColor', 'backgroundColor'], from: 'transparent' }")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Colors are faded in from transparent when dataset is shown using legend / ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/developers/api#showdatasetIndex"}),"api"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"{ type: 'boolean', duration: 0 }")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Dataset visiblity is immediately changed to true so the color transition from transparent is visible.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'hide'")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"colors"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"{ type: 'color', properties: ['borderColor', 'backgroundColor'], to: 'transparent' }")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Colors are faded to transparent when dataset id hidden using legend / ",Object(l.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/master/developers/api#hidedatasetIndex"}),"api"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"visible"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"{ type: 'boolean', easing: 'easeInExpo' }")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Visibility is changed to false at a very late phase of animation")))),Object(l.b)("h2",{id:"animation-property-configuration"},"Animation property configuration"),Object(l.b)("p",null,"Property option configures which element property to use to animate the chart and its starting and ending values.\nA property option is defined by the same options of the main ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#animation-configuration"}),"animation configuration"),", adding the following ones:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"type")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"typeof property")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Type of property, determines the interpolator used. Possible values: ",Object(l.b)("inlineCode",{parentName:"td"},"'number'"),", ",Object(l.b)("inlineCode",{parentName:"td"},"'color'")," and ",Object(l.b)("inlineCode",{parentName:"td"},"'boolean'"),". Only really needed for ",Object(l.b)("inlineCode",{parentName:"td"},"'color'"),", because ",Object(l.b)("inlineCode",{parentName:"td"},"typeof")," does not get that right.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"from")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,Object(l.b)("inlineCode",{parentName:"td"},"number"),"|",Object(l.b)("inlineCode",{parentName:"td"},"Color"),"|",Object(l.b)("inlineCode",{parentName:"td"},"boolean"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Start value for the animation. Current value is used when ",Object(l.b)("inlineCode",{parentName:"td"},"undefined"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"to")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("code",null,Object(l.b)("inlineCode",{parentName:"td"},"number"),"|",Object(l.b)("inlineCode",{parentName:"td"},"Color"),"|",Object(l.b)("inlineCode",{parentName:"td"},"boolean"))),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"End value for the animation. Updated value is used when ",Object(l.b)("inlineCode",{parentName:"td"},"undefined"))))),Object(l.b)("h2",{id:"animation-properties-collection-configuration"},"Animation properties collection configuration"),Object(l.b)("p",null,"Properties collection option configures which set of element properties to use to animate the chart.\nCollection can be named whatever you like, but should not collide with a ",Object(l.b)("inlineCode",{parentName:"p"},"[property]")," or ",Object(l.b)("inlineCode",{parentName:"p"},"[mode]"),".\nA properties collection option is defined by the same options of the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#animation-property-configuration"}),"animation property configuration"),", adding the following one:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"properties")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"string[]")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"undefined")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Set of properties to use to animate the chart.")))),Object(l.b)("h3",{id:"default-collections"},"Default collections"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"numbers")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"type")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'number'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"properties")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"['x', 'y', 'borderWidth', 'radius', 'tension']"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"colors")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"type")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"'color'"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"properties")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"['borderColor', 'backgroundColor']"))))),Object(l.b)("p",null,"Direct property configuration overrides configuration of same property in a collection."),Object(l.b)("p",null,"From collections, a property gets its configuration from first one that has its name in properties."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"These default collections are overridden by most dataset controllers."))),Object(l.b)("h2",{id:"disabling-animation"},"Disabling animation"),Object(l.b)("p",null,"To disable an animation configuration, the animation node must be set to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),", with the exception for animation modes which can be disable setting the ",Object(l.b)("inlineCode",{parentName:"p"},"duration")," to ",Object(l.b)("inlineCode",{parentName:"p"},"0"),". "),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"chart.options.animation = false; // disables the whole animation\nchart.options.animation.active.duration = 0; // disables the animation for 'active' mode\nchart.options.animation.colors = false; // disables animation defined by the collection of 'colors' properties\nchart.options.animation.x = false; // disables animation defined by the 'x' property \n")),Object(l.b)("h2",{id:"easing"},"Easing"),Object(l.b)("p",null,"Available options are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'linear'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInQuad'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutQuad'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutQuad'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInCubic'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutCubic'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutCubic'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInQuart'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutQuart'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutQuart'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInQuint'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutQuint'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutQuint'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInSine'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutSine'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutSine'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInExpo'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutExpo'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutExpo'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInCirc'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutCirc'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutCirc'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInElastic'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutElastic'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutElastic'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInBack'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutBack'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutBack'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInBounce'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeOutBounce'")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"'easeInOutBounce'"))),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"http://robertpenner.com/easing/"}),"Robert Penner's easing equations"),"."),Object(l.b)("h2",{id:"animation-callbacks"},"Animation Callbacks"),Object(l.b)("p",null,"The animation configuration enables the callbacks which  are useful for synchronizing an external draw to the chart animation.\nThe callbacks can be set only at main ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#animation-configuration"}),"animation configuration"),"."),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Default"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"onProgress")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"function")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"null")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback called on each step of an animation.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"onComplete")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"function")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"null")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Callback called when all animations are completed.")))),Object(l.b)("p",null,"The callback is passed following object:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"{\n    // Chart object\n    chart: Chart,\n\n    // Number of animations still in progress\n    currentStep: number,\n\n    // Total number of animations at the start of current animation\n    numSteps: number,\n}\n")),Object(l.b)("p",null,"The following example fills a progress bar during the chart animation."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"var chart = new Chart(ctx, {\n    type: 'line',\n    data: data,\n    options: {\n        animation: {\n            onProgress: function(animation) {\n                progress.value = animation.animationObject.currentStep / animation.animationObject.numSteps;\n            }\n        }\n    }\n});\n")),Object(l.b)("p",null,"Another example usage of these callbacks can be found on ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/blob/master/samples/advanced/progress-bar.html"}),"Github"),": this sample displays a progress bar showing how far along the animation is."))}y.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return j}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},O=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,b=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),O=n,j=d["".concat(b,".").concat(O)]||d[O]||m[O]||r;return a?i.a.createElement(j,l(l({ref:t},c),{},{components:a})):i.a.createElement(j,l({ref:t},c))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,b=new Array(r);b[0]=O;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var c=2;c<r;c++)b[c]=a[c];return i.a.createElement.apply(null,b)}return i.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"},203:function(e,t,a){var n;!function(){"use strict";var a={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var r=typeof n;if("string"===r||"number"===r)e.push(n);else if(Array.isArray(n)&&n.length){var b=i.apply(null,n);b&&e.push(b)}else if("object"===r)for(var l in n)a.call(n,l)&&n[l]&&e.push(l)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},224:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=i}}]);