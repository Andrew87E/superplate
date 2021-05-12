(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{154:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),a=n.n(o);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=d(n),b=o,u=p["".concat(s,".").concat(b)]||p[b]||m[b]||r;return n?a.a.createElement(u,c(c({ref:t},l),{},{components:n})):a.a.createElement(u,c({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=n[l];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return d}));var o=n(3),a=n(7),r=(n(0),n(154)),s={id:"styled-components",title:"styled-components",sidebar_label:"styled-components",description:"How to use styled-components with React?"},c={unversionedId:"react/styled-components",id:"react/styled-components",isDocsHomePage:!1,title:"styled-components",description:"How to use styled-components with React?",source:"@site/docs/react/styled-components.md",slug:"/react/styled-components",permalink:"/superplate/docs/react/styled-components",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/styled-components.md",version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,sidebar_label:"styled-components",sidebar:"someSidebar",previous:{title:"Sass/SCSS",permalink:"/superplate/docs/react/scss"},next:{title:"Fetch",permalink:"/superplate/docs/react/fetch"}},i=[{value:"Adapting based on props",id:"adapting-based-on-props",children:[]},{value:"Extending Styles",id:"extending-styles",children:[]},{value:"Theming",id:"theming",children:[]},{value:"Dark Mode",id:"dark-mode",children:[]},{value:"Styled System",id:"styled-system",children:[]},{value:"How do I use styled-components with Create React App?",id:"how-do-i-use-styled-components-with-create-react-app",children:[]}],l={toc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"styled-components allows you to add styles to your application that are written with a mixture of JavaScript and CSS using a technique called CSS-in-JS."),Object(r.b)("p",null,"Helps keep the concerns of styling and element architecture separated and make components more readable without worrying about class name collisions."),Object(r.b)("p",null," Example implementation shown below."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-ts",metastring:'title="components/header/styled.ts"',title:'"components/header/styled.ts"'}),'import styled from \'styled-components\'\n\nconst Container = styled.div<{isLarge: boolean}>`\n  padding: "50px";\n  font-size: ${({ isLarge }) => (isLarge ? "36px" : "18px")};\n`;\n\nconst Title = styled.div`\n  margin-right: 50px;\n  color: ${({ theme }) => theme.colors.cancelRed};\n`;\n\nconst Subtitle = styled(Title)`\n  margin-right: 30px;\n`;\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="components/header/index.tsx"',title:'"components/header/index.tsx"'}),'import React from "react";\n\nimport { Container, Title, Information } from "./styled";\n\nexport const Header: React.FC = () => {\n  return (\n    <Container isLarge>\n      <Title />\n      <Subtitle />\n    </Container>\n  );\n};\n')),Object(r.b)("h3",{id:"adapting-based-on-props"},"Adapting based on props"),Object(r.b)("p",null,"Props can be passed to styled components to customize a component dynamically.\nWhen setting the isLarge prop to true, we are swapping out its font-size."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),'const Container = styled.div<{isLarge: boolean}>`\n  padding: "50px";\n  font-size: ${({ isLarge }) => (isLarge ? "36px" : "18px")};\n`;\n')),Object(r.b)("h3",{id:"extending-styles"},"Extending Styles"),Object(r.b)("p",null,"You can extend components with style if you want to create a similar one, styled slightly differently.\nTo easily make a new component that inherits the styling of another, just wrap it in the styled() constructor."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const Subtitle = styled(Title)`\n  margin-right: 30px;\n`;\n")),Object(r.b)("h3",{id:"theming"},"Theming"),Object(r.b)("p",null,"styled-components has full theming support by exporting a ",Object(r.b)("inlineCode",{parentName:"p"},"<ThemeProvider>")," wrapper component.\nThis component provides a theme to all components underneath itself via the context API. In the render tree all styled-components will have access to the provided theme."),Object(r.b)("p",null,"A theme can also be passed down to a component using the ",Object(r.b)("inlineCode",{parentName:"p"},"theme")," prop."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx"}),"const Title = styled.div`\n  margin-right: 50px;\n  color: ${({ theme }) => theme.colors.darkGrey};\n`; \n")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"theme")," prop gets values from ",Object(r.b)("inlineCode",{parentName:"p"},"definitions/styled-components")," folder. You can add any css properties theme files in order to use from all styled-components."),Object(r.b)("h3",{id:"dark-mode"},"Dark Mode"),Object(r.b)("p",null,"Dark mode feature serving as a ready to use in created project with styled-component plugin."),Object(r.b)("p",null,"You customize colors at  ",Object(r.b)("inlineCode",{parentName:"p"},"definitions/styled-components")," folder:"),Object(r.b)("p",null,"The first is ",Object(r.b)("inlineCode",{parentName:"p"},"common.ts"),", which will contain our base styling, and the others are dark.ts and light.ts, which will include variables for our dark and light themes."),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="definitions/styled-components/dark.ts"',title:'"definitions/styled-components/dark.ts"'}),'const dark: DefaultTheme = {\n  colors: {\n    ...common.colors,\n    body: "#363537",\n    toggleBorder: "#556678",\n    gradient: "linear-gradient(#091236, #1E215D)",\n    background: "#808080",\n    textColor: "#FFFFFF",\n  },\n};\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="definitions/styled-components/light.ts"',title:'"definitions/styled-components/light.ts"'}),'const light: DefaultTheme = {\n  colors: {\n    ...common.colors,\n    body: "#E2E2E2",\n    toggleBorder: "#ABB7C4",\n    gradient: "linear-gradient(#39598A, #79D7ED)",\n    background: "#FFFFFF",\n    textColor: "#000000",\n  },\n};\n')),Object(r.b)("p",null,"Set the colors with same key value at both file and then use with theme props in styled components. Defined colors changes when invoke toggle function from ",Object(r.b)("inlineCode",{parentName:"p"},"definitions/styled-components/index.ts"),". "),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="components/Header/styled.ts"',title:'"components/Header/styled.ts"'}),'import styled from "styled-components";\n\nexport const Container = styled.div`\n  background-color: ${({ theme }) => theme.colors.body};\n`;\n')),Object(r.b)("br",null),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"All needed dark mode configurations and files adds by CLI if styled-component plugin selected as CSS Preprocessor during project creation phase."))),Object(r.b)("h2",{id:"styled-system"},"Styled System"),Object(r.b)("p",null,"Styled System is a collection of utility functions that add style props to your components and allows you to control styles based on a global theme object with typographic scales, colors, and layout properties."),Object(r.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(r.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(r.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},"We are serving ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://styled-system.com/"}),"styled-system")," as a optional plugin with styled-components. "))),Object(r.b)("p",null,"Example usage:"),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="styledSystemExample/styled.ts"',title:'"styledSystemExample/styled.ts"'}),'import styled from "styled-components";\nimport { border, color, layout, space, typography } from "styled-system";\n\nexport const Card = styled.div`\n  ${border}\n  ${color}\n  ${layout}\n  ${space}\n`;\n')),Object(r.b)("pre",null,Object(r.b)("code",Object(o.a)({parentName:"pre"},{className:"language-jsx",metastring:'title="styledSystemExample/index.ts"',title:'"styledSystemExample/index.ts"'}),'import React from "react";\nimport { Card } from "./styled";\n\nexport const StyledSystemExample: React.FC = () => {\n  return (\n    <Card bg="wheat" maxWidth="20rem" borderRadius={10} mx="auto" mt="32px">\n  );\n};\n')),Object(r.b)("br",null),Object(r.b)("h2",{id:"how-do-i-use-styled-components-with-create-react-app"},"How do I use styled-components with Create React App?"),Object(r.b)("p",null,"We recommend to check official ",Object(r.b)("a",Object(o.a)({parentName:"p"},{href:"https://styled-components.com/docs/faqs#how-do-i-use-styledcomponents-with-createreactapp"}),"document")," to use styled-component to your existing project."))}d.isMDXComponent=!0}}]);