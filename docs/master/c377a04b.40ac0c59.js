(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{179:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var r=n(2),a=n(9),o=(n(0),n(198)),c={title:"Chart.js"},i={id:"index",title:"Chart.js",description:"Installation",source:"@site/docs/index.md",permalink:"/docs/master/index",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/index.md",sidebar:"someSidebar",next:{title:"Getting Started",permalink:"/docs/master/getting-started/index"}},s=[{value:"Installation",id:"installation",children:[]},{value:"Creating a Chart",id:"creating-a-chart",children:[]},{value:"Contributing",id:"contributing",children:[]},{value:"License",id:"license",children:[]}],l={rightToc:s};function b(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://chartjs-slack.herokuapp.com/"}),Object(o.b)("img",Object(r.a)({parentName:"a"},{src:"https://img.shields.io/badge/slack-chartjs-blue.svg?style=flat-square&maxAge=3600",alt:"slack"})))),Object(o.b)("h2",{id:"installation"},"Installation"),Object(o.b)("p",null,"You can download the latest version of Chart.js from the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/releases/latest"}),"GitHub releases")," or use a ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.jsdelivr.com/package/npm/chart.js"}),"Chart.js CDN"),". Detailed installation instructions can be found on the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/master/getting-started/installation"}),"installation")," page."),Object(o.b)("h2",{id:"creating-a-chart"},"Creating a Chart"),Object(o.b)("p",null,"It's easy to get started with Chart.js. All that's required is the script included in your page along with a single ",Object(o.b)("inlineCode",{parentName:"p"},"<canvas>")," node to render the chart."),Object(o.b)("p",null,"In this example, we create a bar chart for a single dataset and render that in our page. You can see all the ways to use Chart.js in the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/master/getting-started/usage"}),"usage documentation"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),"<canvas id=\"myChart\" width=\"400\" height=\"400\"></canvas>\n<script>\nvar ctx = document.getElementById('myChart').getContext('2d');\nvar myChart = new Chart(ctx, {\n    type: 'bar',\n    data: {\n        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],\n        datasets: [{\n            label: '# of Votes',\n            data: [12, 19, 3, 5, 2, 3],\n            backgroundColor: [\n                'rgba(255, 99, 132, 0.2)',\n                'rgba(54, 162, 235, 0.2)',\n                'rgba(255, 206, 86, 0.2)',\n                'rgba(75, 192, 192, 0.2)',\n                'rgba(153, 102, 255, 0.2)',\n                'rgba(255, 159, 64, 0.2)'\n            ],\n            borderColor: [\n                'rgba(255, 99, 132, 1)',\n                'rgba(54, 162, 235, 1)',\n                'rgba(255, 206, 86, 1)',\n                'rgba(75, 192, 192, 1)',\n                'rgba(153, 102, 255, 1)',\n                'rgba(255, 159, 64, 1)'\n            ],\n            borderWidth: 1\n        }]\n    },\n    options: {\n        scales: {\n            y: {\n                beginAtZero: true\n            }\n        }\n    }\n});\n<\/script>\n")),Object(o.b)("h2",{id:"contributing"},"Contributing"),Object(o.b)("p",null,"Before submitting an issue or a pull request to the project, please take a moment to look over the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/master/developers/contributing"}),"contributing guidelines")," first."),Object(o.b)("p",null,"For support using Chart.js, please post questions with the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/chartjs"}),Object(o.b)("inlineCode",{parentName:"a"},"chartjs")," tag on Stack Overflow"),"."),Object(o.b)("h2",{id:"license"},"License"),Object(o.b)("p",null,"Chart.js is available under the ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://opensource.org/licenses/MIT"}),"MIT license"),"."))}b.isMDXComponent=!0},198:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),b=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},p=function(e){var t=b(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=b(n),d=r,h=p["".concat(c,".").concat(d)]||p[d]||u[d]||o;return n?a.a.createElement(h,i({ref:t},l,{components:n})):a.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);