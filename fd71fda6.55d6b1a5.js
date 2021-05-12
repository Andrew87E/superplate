(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{149:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),s=(n(0),n(154)),i=n(158),c=n(159),o={id:"cypress",title:"Cypress",sidebar_label:"Cypress",description:"Using Cypress with React for End to End testing"},l={unversionedId:"react/e2e-testing/cypress",id:"react/e2e-testing/cypress",isDocsHomePage:!1,title:"Cypress",description:"Using Cypress with React for End to End testing",source:"@site/docs/react/e2e-testing/cypress.md",slug:"/react/e2e-testing/cypress",permalink:"/superplate/docs/react/e2e-testing/cypress",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/e2e-testing/cypress.md",version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,sidebar_label:"Cypress",sidebar:"someSidebar",previous:{title:"Testing Library",permalink:"/superplate/docs/react/testing/testing-library"},next:{title:"WebdriverIO",permalink:"/superplate/docs/react/e2e-testing/wdio"}},p=[{value:"Writing Tests",id:"writing-tests",children:[]},{value:"Running Tests",id:"running-tests",children:[]},{value:"File structure",id:"file-structure",children:[]},{value:"Adding Cypress to your project later",id:"adding-cypress-to-your-project-later",children:[]}],b={toc:p};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("em",{parentName:"p"},"Fast, easy and reliable testing for anything that runs in a browser.")),Object(s.b)("p",null,"Cypress is a next generation front end testing tool built for the modern web. It addresses the key pain points developers and QA engineers face when testing modern applications.",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cypress.io/guides/overview/why-cypress.html#In-a-nutshell"}),"Refer to official documentation for detailed usage. ","\u2192")),Object(s.b)("h3",{id:"writing-tests"},"Writing Tests"),Object(s.b)("p",null,"Testing your application will require interacting with UI elements. Best practice for selecting elements in your tests is with special attributes for testing.",Object(s.b)("br",{parentName:"p"}),"\n",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cypress.io/guides/getting-started/writing-your-first-test.html"}),"Refer to official documentation on writing tests for detailed usage. ","\u2192")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Add test attributes to elements of your UI.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-tsx",metastring:'title="components/main/index.tsx"',title:'"components/main/index.tsx"'}),'import React from "react";\nimport { Button } from "components";\n\nexport const Main: React.FC = () => {\n  return (\n    <div>\n    // highlight-start\n      <h1 data-test="main-heading">superplate</h1>\n    // highlight-end\n      <p>The frontend boilerplate with superpowers!</p>\n    // highlight-start\n      <Button data-test="docs-btn-anchor">Docs</Button>\n    // highlight-end\n    </div>\n  );\n};\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Now these elements can be selected in tests with ",Object(s.b)("inlineCode",{parentName:"li"},"cy.get"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"cy.get(`[data-test=main-heading]`);\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Add two custom commands from ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/cypress-io/cypress-realworld-app/blob/develop/cypress/support/commands.ts#L28"}),"Real World App (RWA)")," for easier selection of elements.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="cypress/support/commands.ts"',title:'"cypress/support/commands.ts"'}),'Cypress.Commands.add("getBySel", (selector, ...args) => {\n  return cy.get(`[data-test=${selector}]`, ...args);\n});\n\nCypress.Commands.add("getBySelLike", (selector, ...args) => {\n  return cy.get(`[data-test*=${selector}]`, ...args);\n});\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Don't forget to visit the page before each test.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts",metastring:'title="cypress/integration/home.spec.ts"',title:'"cypress/integration/home.spec.ts"'}),'describe("Homepage", () => {\n  beforeEach(() => {\n    cy.visit("/");\n  });\n\n  it("Brings header", () => {\n    cy.getBySel("main-heading").should("contain.text", "superplate");\n  });\n\n  it("Should have true href", () => {\n    // https://github.com/cypress-io/cypress-example-recipes/blob/master/examples/testing-dom__tab-handling-links/cypress/integration/tab_handling_anchor_links_spec.js\n    cy.getBySel("docs-btn-anchor")\n      .should("have.prop", "href")\n      .and("equal", "https://pankod.github.io/superplate/");\n  });\n});\n')),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cypress.io/guides/references/best-practices.html#Selecting-Elements"}),"Refer to official documentation on selecting elemets for detailed usage. ","\u2192")),Object(s.b)("h3",{id:"running-tests"},"Running Tests"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Add ",Object(s.b)("inlineCode",{parentName:"li"},"baseUrl")," option to cypress configuration.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="cypress.json"',title:'"cypress.json"'}),'{\n  "baseUrl": "http://localhost:3000"\n}\n')),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"}," This will automatically prefix ",Object(s.b)("inlineCode",{parentName:"p"},"cy.visit()")," and ",Object(s.b)("inlineCode",{parentName:"p"},"cy.request()")," commands with this ",Object(s.b)("inlineCode",{parentName:"p"},"baseUrl"),"."))),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cypress.io/guides/references/configuration.html"}),"Refer to official documentation on configuration for detailed usage. ","\u2192")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Add commands for opening Cypress Test Runner and running tests.")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="package.json"',title:'"package.json"'}),'{\n    scripts: {\n        "cypress:open": "cypress open",\n        "cypress:run": "cypress run --config video=false",\n        "cypress:test": "start-server-and-test start http://localhost:3000 cypress:run"\n    }\n}\n')),Object(s.b)("h4",{id:"testing-in-development"},"Testing in development"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Start your project in dev mode")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run dev\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Run tests headlessly with ",Object(s.b)("inlineCode",{parentName:"li"},"cypress run"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run cypress:run\n")),Object(s.b)("h4",{id:"testing-with-production-bundle"},"Testing with production bundle"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Build your project")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run build\n")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"run tests")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm run cypress:test\n")),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},Object(s.b)("inlineCode",{parentName:"p"},"cypress run")," runs tests to completion. By default, ",Object(s.b)("inlineCode",{parentName:"p"},"cypress run")," will run all tests headlessly in the Electron browser."),Object(s.b)("p",{parentName:"div"},Object(s.b)("inlineCode",{parentName:"p"},"cypress open")," opens the test runner and lets you run your tests invidually."))),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cypress.io/guides/guides/command-line.html"}),"Refer to official documentation on command line for detailed usage. ","\u2192")),Object(s.b)("h3",{id:"file-structure"},"File structure"),Object(s.b)("p",null,"Cypress directory is placed in the root of the project."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Add ",Object(s.b)("inlineCode",{parentName:"li"},"tsconfig.json")," for Cypress")),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="cypress/tsconfig.json"',title:'"cypress/tsconfig.json"'}),'{\n  "compilerOptions": {\n    "target": "es5",\n    "lib": ["es5", "dom"],\n    "types": ["cypress"]\n  },\n  "include": ["**/*.ts"]\n}\n')),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Don't forget to exclude Cypress from main ",Object(s.b)("inlineCode",{parentName:"li"},"tsconfig.json"))),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="tsconfig.json"',title:'"tsconfig.json"'}),'{\n  "exclude": ["cypress/*"]\n}\n')),Object(s.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(s.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(s.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"All this work will be handled automatically by CLI, so you don\u2019t need to do anything extra as long as you choose ",Object(s.b)("strong",{parentName:"p"},"Cypress")," plugin during the project creation phase."))),Object(s.b)("h3",{id:"adding-cypress-to-your-project-later"},"Adding Cypress to your project later"),Object(s.b)("p",null,"If you didn't choose the plugin during project creation phase, you can follow the instructions below to add it."),Object(s.b)(i.a,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},Object(s.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"npm install -D cypress \n"))),Object(s.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn add -D cypress\n")))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Follow instructions starting in ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"#writing-tests"}),"Writing Tests"))),Object(s.b)("p",null,Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://docs.cypress.io/guides/getting-started/installing-cypress.html"}),"Refer to official documentation on installation for detailed usage. ","\u2192")))}u.isMDXComponent=!0},154:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||s;return n?r.a.createElement(m,c(c({ref:t},l),{},{components:n})):r.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<s;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},155:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},156:function(e,t,n){"use strict";var a=n(0),r=n(157);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},157:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},158:function(e,t,n){"use strict";var a=n(0),r=n.n(a),s=n(156),i=n(155),c=n(55),o=n.n(c),l=37,p=39;t.a=function(e){var t=e.lazy,n=e.block,c=e.defaultValue,b=e.values,u=e.groupId,d=e.className,m=Object(s.a)(),j=m.tabGroupChoices,g=m.setTabGroupChoices,O=Object(a.useState)(c),f=O[0],h=O[1],y=a.Children.toArray(e.children);if(null!=u){var v=j[u];null!=v&&v!==f&&b.some((function(e){return e.value===v}))&&h(v)}var N=function(e){h(e),null!=u&&g(u,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(i.a)("tabs",{"tabs--block":n},d)},b.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===t,className:Object(i.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case p:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case l:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(w,e.target,e)},onFocus:function(){return N(t)},onClick:function(){N(t)}},n)}))),t?Object(a.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},159:function(e,t,n){"use strict";var a=n(3),r=n(0),s=n.n(r);t.a=function(e){var t=e.children,n=e.hidden,r=e.className;return s.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:n,className:r}),t)}}}]);