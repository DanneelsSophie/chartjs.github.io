(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{191:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a(2),i=a(9),r=(a(0),a(201)),s={title:"Contributing"},o={id:"developers/contributing",title:"Contributing",description:"New contributions to the library are welcome, but we ask that you please follow these guidelines:",source:"@site/docs/developers/contributing.md",permalink:"/docs/next/developers/contributing",editUrl:"https://github.com/chartjs/Chart.js/edit/master/docs/docs/developers/contributing.md",sidebar:"someSidebar",previous:{title:"New Axes",permalink:"/docs/next/developers/axes"},next:{title:"Comparison with Other Libraries",permalink:"/docs/next/notes/comparison"}},l=[{value:"Joining the project",id:"joining-the-project",children:[]},{value:"Building and Testing",id:"building-and-testing",children:[{value:"Documentation",id:"documentation",children:[]},{value:"Image-Based Tests",id:"image-based-tests",children:[]}]},{value:"Bugs and Issues",id:"bugs-and-issues",children:[]}],c={rightToc:l};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"New contributions to the library are welcome, but we ask that you please follow these guidelines:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Before opening a PR for major additions or changes, please discuss the expected API and/or implementation by ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/chartjs/Chart.js/issues"}),"filing an issue")," or asking about it in the ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://chartjs-slack.herokuapp.com/"}),"Chart.js Slack")," #dev channel. This will save you development time by getting feedback upfront and make review faster by giving the maintainers more context and details."),Object(r.b)("li",{parentName:"ul"},"Consider whether your changes are useful for all users, or if creating a Chart.js ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/developers/plugins"}),"plugin")," would be more appropriate."),Object(r.b)("li",{parentName:"ul"},"Check that your code will pass tests and ",Object(r.b)("inlineCode",{parentName:"li"},"eslint")," code standards. ",Object(r.b)("inlineCode",{parentName:"li"},"npm test")," will run both the linter and tests for you."),Object(r.b)("li",{parentName:"ul"},"Add unit tests and document new functionality (in the ",Object(r.b)("inlineCode",{parentName:"li"},"test/")," and ",Object(r.b)("inlineCode",{parentName:"li"},"docs/")," directories respectively)."),Object(r.b)("li",{parentName:"ul"},"Avoid breaking changes unless there is an upcoming major release, which are infrequent. We encourage people to write plugins for most new advanced features, and care a lot about backwards compatibility."),Object(r.b)("li",{parentName:"ul"},"We strongly prefer new methods to be added as private whenever possible. A method can be made private either by making a top-level ",Object(r.b)("inlineCode",{parentName:"li"},"function")," outside of a class or by prefixing it with ",Object(r.b)("inlineCode",{parentName:"li"},"_")," and adding ",Object(r.b)("inlineCode",{parentName:"li"},"@private")," JSDoc if inside a class. Public APIs take considerable time to review and become locked once implemented as we have limited ability to change them without breaking backwards compatibility. Private APIs allow the flexibility to address unforeseen cases.")),Object(r.b)("h2",{id:"joining-the-project"},"Joining the project"),Object(r.b)("p",null,"Active committers and contributors are invited to introduce yourself and request commit access to this project. We have a very active Slack community that you can join ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://chartjs-slack.herokuapp.com/"}),"here"),". If you think you can help, we'd love to have you!"),Object(r.b)("h2",{id:"building-and-testing"},"Building and Testing"),Object(r.b)("p",null,"Firstly, we need to ensure development dependencies are installed. With node and npm installed, after cloning the Chart.js repo to a local directory, and navigating to that directory in the command line, we can run the following:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> npm install\n")),Object(r.b)("p",null,"This will install the local development dependencies for Chart.js."),Object(r.b)("p",null,"The following commands are now available from the repository root:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> npm run build             // build dist files in ./dist\n> npm run autobuild         // build and watch for source changes\n> npm run dev               // run tests and watch for source and test changes\n> npm run lint              // perform code linting (ESLint, tsc)\n> npm test                  // perform code linting and run unit tests with coverage\n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"npm run dev")," and ",Object(r.b)("inlineCode",{parentName:"p"},"npm test")," can be appended with a string that is used to match the spec filenames. For example: ",Object(r.b)("inlineCode",{parentName:"p"},"npm run dev plugins")," will start karma in watch mode for ",Object(r.b)("inlineCode",{parentName:"p"},"test/specs/**/*plugin*.js"),"."),Object(r.b)("h3",{id:"documentation"},"Documentation"),Object(r.b)("p",null,"We use ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://v2.docusaurus.io/docs/introduction"}),"Docusaurus v2")," to manage the docs which are contained as Markdown files in the docs directory. You can run the doc server locally using the commands provided by Docusaurus:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"> cd docs\n> npm install\n> npm run start\n")),Object(r.b)("h3",{id:"image-based-tests"},"Image-Based Tests"),Object(r.b)("p",null,"Some display-related functionality is difficult to test via typical Jasmine units. For this reason, we introduced image-based tests (",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/pull/3988"}),"#3988")," and ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/pull/5777"}),"#5777"),") to assert that a chart is drawn pixel-for-pixel matching an expected image."),Object(r.b)("p",null,"Generated charts in image-based tests should be ",Object(r.b)("strong",{parentName:"p"},"as minimal as possible")," and focus only on the tested feature to prevent failure if another feature breaks (e.g. disable the title and legend when testing scales)."),Object(r.b)("p",null,"You can create a new image-based test by following the steps below:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a JS file (",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/chartjs/Chart.js/blob/f7b671006a86201808402c3b6fe2054fe834fd4a/test/fixtures/controller.bubble/radius-scriptable.js"}),"example"),") or JSON file (",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/chartjs/Chart.js/blob/4b421a50bfa17f73ac7aa8db7d077e674dbc148d/test/fixtures/plugin.filler/fill-line-dataset.json"}),"example"),") that defines chart config and generation options."),Object(r.b)("li",{parentName:"ul"},"Add this file in ",Object(r.b)("inlineCode",{parentName:"li"},"test/fixtures/{spec.name}/{feature-name}.json"),"."),Object(r.b)("li",{parentName:"ul"},"Add a ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://github.com/chartjs/Chart.js/blob/4b421a50bfa17f73ac7aa8db7d077e674dbc148d/test/specs/plugin.filler.tests.js#L10"}),"describe line")," to the beginning of ",Object(r.b)("inlineCode",{parentName:"li"},"test/specs/{spec.name}.tests.js")," if it doesn't exist yet."),Object(r.b)("li",{parentName:"ul"},"Run ",Object(r.b)("inlineCode",{parentName:"li"},"npm run dev"),"."),Object(r.b)("li",{parentName:"ul"},"Click the ",Object(r.b)("em",{parentName:"li"},'"Debug"')," button (top/right): a test should fail with the associated canvas visible."),Object(r.b)("li",{parentName:"ul"},"Right click on the chart and ",Object(r.b)("em",{parentName:"li"},'"Save image as..."')," ",Object(r.b)("inlineCode",{parentName:"li"},"test/fixtures/{spec.name}/{feature-name}.png")," making sure not to activate the tooltip or any hover functionality"),Object(r.b)("li",{parentName:"ul"},"Refresh the browser page (",Object(r.b)("inlineCode",{parentName:"li"},"CTRL+R"),"): test should now pass"),Object(r.b)("li",{parentName:"ul"},"Verify test relevancy by changing the feature values ",Object(r.b)("em",{parentName:"li"},"slightly")," in the JSON file.")),Object(r.b)("p",null,"Tests should pass in both browsers. In general, we've hidden all text in image tests since it's quite difficult to get them passing between different browsers. As a result, it is recommended to hide all scales in image-based tests. It is also recommended to disable animations. If tests still do not pass, adjust ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/chartjs/Chart.js/blob/1ca0ffb5d5b6c2072176fd36fa85a58c483aa434/test/jasmine.matchers.js"}),Object(r.b)("inlineCode",{parentName:"a"},"tolerance")," and/or ",Object(r.b)("inlineCode",{parentName:"a"},"threshold"))," at the beginning of the JSON file keeping them ",Object(r.b)("strong",{parentName:"p"},"as low as possible"),"."),Object(r.b)("p",null,"When a test fails, the expected and actual images are shown. If you'd like to see the images even when the tests pass, set ",Object(r.b)("inlineCode",{parentName:"p"},'"debug": true')," in the JSON file."),Object(r.b)("h2",{id:"bugs-and-issues"},"Bugs and Issues"),Object(r.b)("p",null,"Please report these on the GitHub page - at ",Object(r.b)("a",{href:"https://github.com/chartjs/Chart.js",target:"_blank"},"github.com/chartjs/Chart.js"),". Please do not use issues for support requests. For help using Chart.js, please take a look at the ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://stackoverflow.com/questions/tagged/chartjs"}),Object(r.b)("inlineCode",{parentName:"a"},"chartjs"))," tag on Stack Overflow."),Object(r.b)("p",null,"Well structured, detailed bug reports are hugely valuable for the project."),Object(r.b)("p",null,"Guidelines for reporting bugs:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Check the issue search to see if it has already been reported"),Object(r.b)("li",{parentName:"ul"},"Isolate the problem to a simple test case"),Object(r.b)("li",{parentName:"ul"},"Please include a demonstration of the bug on a website such as ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://jsbin.com/"}),"JS Bin"),", ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://jsfiddle.net/"}),"JS Fiddle"),", or ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://codepen.io/pen/"}),"Codepen"),". (",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://codepen.io/pen?template=JXVYzq"}),"Template"),"). If filing a bug against ",Object(r.b)("inlineCode",{parentName:"li"},"master"),", you may reference the latest code via ",Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"https://www.chartjs.org/dist/master/Chart.min.js"}),"https://www.chartjs.org/dist/master/Chart.min.js")," (changing the filename to point at the file you need as appropriate). Do not rely on these files for production purposes as they may be removed at any time.")),Object(r.b)("p",null,"Please provide any additional details associated with the bug, if it's browser or screen density specific, or only happens with a certain configuration or data."))}b.isMDXComponent=!0},201:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),b=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=b(a),u=n,h=p["".concat(s,".").concat(u)]||p[u]||d[u]||r;return a?i.a.createElement(h,o(o({ref:t},c),{},{components:a})):i.a.createElement(h,o({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return i.a.createElement.apply(null,s)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);