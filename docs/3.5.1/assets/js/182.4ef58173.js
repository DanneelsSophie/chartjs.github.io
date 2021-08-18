(window.webpackJsonp=window.webpackJsonp||[]).push([[182],{471:function(n,t,a){"use strict";a.r(t);var e=a(3),s=Object(e.a)({},(function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[a("h1",{attrs:{id:"animation-progress-bar"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#animation-progress-bar"}},[n._v("#")]),n._v(" Animation Progress Bar")]),n._v(" "),a("h2",{attrs:{id:"initial-animation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#initial-animation"}},[n._v("#")]),n._v(" Initial animation")]),n._v(" "),a("p",[a("progress",{staticStyle:{width:"100%"},attrs:{id:"initialProgress",max:"1",value:"0"}})]),n._v(" "),a("h2",{attrs:{id:"other-animations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-animations"}},[n._v("#")]),n._v(" Other animations")]),n._v(" "),a("p",[a("progress",{staticStyle:{width:"100%"},attrs:{id:"animationProgress",max:"1",value:"0"}})]),n._v(" "),a("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});\n      });\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Dataset',\n    handler(chart) {\n      const data = chart.data;\n      const dsColor = Utils.namedColor(chart.data.datasets.length);\n      const newDataset = {\n        label: 'Dataset ' + (data.datasets.length + 1),\n        backgroundColor: Utils.transparentize(dsColor, 0.5),\n        borderColor: dsColor,\n        data: Utils.numbers({count: data.labels.length, min: -100, max: 100}),\n      };\n      chart.data.datasets.push(newDataset);\n      chart.update();\n    }\n  },\n  {\n    name: 'Add Data',\n    handler(chart) {\n      const data = chart.data;\n      if (data.datasets.length > 0) {\n        data.labels = Utils.months({count: data.labels.length + 1});\n\n        for (var index = 0; index < data.datasets.length; ++index) {\n          data.datasets[index].data.push(Utils.rand(-100, 100));\n        }\n\n        chart.update();\n      }\n    }\n  },\n  {\n    name: 'Remove Dataset',\n    handler(chart) {\n      chart.data.datasets.pop();\n      chart.update();\n    }\n  },\n  {\n    name: 'Remove Data',\n    handler(chart) {\n      chart.data.labels.splice(-1, 1); // remove the label first\n\n      chart.data.datasets.forEach(dataset => {\n        dataset.data.pop();\n      });\n\n      chart.update();\n    }\n  }\n];\n// </block:actions>\n\n// <block:setup:1>\nconst initProgress = document.getElementById('initialProgress');\nconst progress = document.getElementById('animationProgress');\n\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.red,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),\n    },\n    {\n      label: 'Dataset 2',\n      data: Utils.numbers(NUMBER_CFG),\n      borderColor: Utils.CHART_COLORS.blue,\n      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),\n    }\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'line',\n  data: data,\n  options: {\n    animation: {\n      duration: 2000,\n      onProgress: function(context) {\n        if (context.initial) {\n          initProgress.value = context.currentStep / context.numSteps;\n        } else {\n          progress.value = context.currentStep / context.numSteps;\n        }\n      },\n      onComplete: function(context) {\n        if (context.initial) {\n          console.log('Initial animation finished');\n        } else {\n          console.log('animation finished');\n        }\n      }\n    },\n    interaction: {\n      mode: 'nearest',\n      axis: 'x',\n      intersect: false\n    },\n    plugins: {\n      title: {\n        display: true,\n        text: 'Chart.js Line Chart - Animation Progress Bar'\n      }\n    },\n  },\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n  output: 'console.log output is displayed here'\n};\n"}})],1)}),[],!1,null,null,null);t.default=s.exports}}]);