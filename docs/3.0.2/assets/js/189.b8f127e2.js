(window.webpackJsonp=window.webpackJsonp||[]).push([[189],{503:function(n,t,a){"use strict";a.r(t);var s=a(27),o=Object(s.a)({},(function(){var n=this.$createElement,t=this._self._c||n;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("h1",{attrs:{id:"floating-bars"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#floating-bars"}},[this._v("#")]),this._v(" Floating Bars")]),this._v(" "),t("chart-editor",{attrs:{code:"// <block:actions:2>\nconst actions = [\n  {\n    name: 'Randomize',\n    handler(chart) {\n      chart.data.datasets.forEach(dataset => {\n        dataset.data = chart.data.labels.map(() => {\n          return [Utils.rand(-100, 100), Utils.rand(-100, 100)];\n        });\n      });\n      chart.update();\n    }\n  },\n];\n// </block:actions>\n\n// <block:setup:1>\nconst DATA_COUNT = 7;\nconst NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};\n\nconst labels = Utils.months({count: 7});\nconst data = {\n  labels: labels,\n  datasets: [\n    {\n      label: 'Dataset 1',\n      data: labels.map(() => {\n        return [Utils.rand(-100, 100), Utils.rand(-100, 100)];\n      }),\n      backgroundColor: Utils.CHART_COLORS.red,\n    },\n    {\n      label: 'Dataset 2',\n      data: labels.map(() => {\n        return [Utils.rand(-100, 100), Utils.rand(-100, 100)];\n      }),\n      backgroundColor: Utils.CHART_COLORS.blue,\n    },\n  ]\n};\n// </block:setup>\n\n// <block:config:0>\nconst config = {\n  type: 'bar',\n  data: data,\n  options: {\n    responsive: true,\n    plugins: {\n      legend: {\n        position: 'top',\n      },\n      title: {\n        display: true,\n        text: 'Chart.js Floating Bar Chart'\n      }\n    }\n  }\n};\n// </block:config>\n\nmodule.exports = {\n  actions: actions,\n  config: config,\n};\n"}})],1)}),[],!1,null,null,null);t.default=o.exports}}]);