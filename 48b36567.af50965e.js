(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{154:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return y}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),l=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=l(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(t),f=n,y=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?o.a.createElement(y,c(c({ref:r},p),{},{components:t})):o.a.createElement(y,c({ref:r},p))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},94:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return s})),t.d(r,"default",(function(){return l}));var n=t(3),o=t(7),a=(t(0),t(154)),i={id:"reverse-proxy",title:"Reverse Proxy",sidebar_label:"Reverse Proxy",description:"How to use Reverse Proxy in React apps?"},c={unversionedId:"react/reverse-proxy",id:"react/reverse-proxy",isDocsHomePage:!1,title:"Reverse Proxy",description:"How to use Reverse Proxy in React apps?",source:"@site/docs/react/reverse-proxy.md",slug:"/react/reverse-proxy",permalink:"/superplate/docs/react/reverse-proxy",editUrl:"https://github.com/pankod/superplate/tree/master/documentation/docs/react/reverse-proxy.md",version:"current",lastUpdatedBy:"\xd6mer Faruk APLAK",lastUpdatedAt:1620740656,sidebar_label:"Reverse Proxy",sidebar:"someSidebar",previous:{title:"Environment Variables(.env)",permalink:"/superplate/docs/react/env"},next:{title:"Bundle Analyzer",permalink:"/superplate/docs/react/bundle-analyzer"}},s=[],p={toc:s};function l(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A proxy server sits between or intermediary server that forwards requests for content from multiple clients to different servers across the Internet. A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client requests to the appropriate backend server."),Object(a.b)("p",null,"A reverse proxy provides an additional level of abstraction and control to ensure the smooth flow of network traffic between clients and servers."),Object(a.b)("p",null,"You can define the paths you want to implement reverse proxy in ",Object(a.b)("inlineCode",{parentName:"p"},"next.config.js")),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts",metastring:'title="next.config.js"',title:'"next.config.js"'}),'const withPlugins = require("next-compose-plugins");\n\nconst config = {\n  devServer: {\n    proxy: {\n      "/api": "http://localhost:3000",\n    },\n  },\n};\n\nmodule.exports = withPlugins([], config);\n')))}l.isMDXComponent=!0}}]);