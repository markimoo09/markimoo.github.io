import{v as l,c as s,g as a}from"./vm.cb5e1fd2.js";import{v as r,o as c,m as f,j as u}from"./index.fc258cf1.js";function g(){let t;const e=u();function o(){t=void 0}return r(o),c(o),{removeTick:o,registerTick(n){t=n,f(()=>{t===n&&(l(e)===!1&&t(),t=void 0)})}}}function v(){let t=null;const e=u();function o(){t!==null&&(clearTimeout(t),t=null)}return r(o),c(o),{removeTimeout:o,registerTimeout(n,d){o(),l(e)===!1&&(t=setTimeout(()=>{t=null,n()},d))}}}const h=[Element,String],m=[null,document,document.body,document.scrollingElement,document.documentElement];function T(t,e){let o=a(e);if(o===void 0){if(t==null)return window;o=t.closest(".scroll,.scroll-y,.overflow-auto")}return m.includes(o)?window:o}function y(t){return t===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:t.scrollTop}function E(t){return t===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:t.scrollLeft}let i;function b(){if(i!==void 0)return i;const t=document.createElement("p"),e=document.createElement("div");s(t,{width:"100%",height:"200px"}),s(e,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),e.appendChild(t),document.body.appendChild(e);const o=t.offsetWidth;e.style.overflow="scroll";let n=t.offsetWidth;return o===n&&(n=e.clientWidth),e.remove(),i=o-n,i}function x(t,e=!0){return!t||t.nodeType!==Node.ELEMENT_NODE?!1:e?t.scrollHeight>t.clientHeight&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-y"])):t.scrollWidth>t.clientWidth&&(t.classList.contains("scroll")||t.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(t)["overflow-x"]))}export{v as a,y as b,E as c,b as d,T as g,x as h,h as s,g as u};
