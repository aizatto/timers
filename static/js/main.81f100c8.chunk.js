(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a(37)},25:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(9),l=a.n(c),o=a(8),m=a(46),i=(a(25),a(38)),u=a(39),s=a(40),d=a(47),E=a(41),h=a(42),f=a(43);function w(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(i.a,{color:"dark",dark:!0,expand:"md"},r.a.createElement(u.a,{href:"https://www.aizatto.com"},"aizatto.com"),r.a.createElement(s.a,{onClick:function(){return c(!a)}}),r.a.createElement(d.a,{isOpen:a,navbar:!0},r.a.createElement(E.a,{className:"ml-auto",navbar:!0},r.a.createElement(h.a,null,r.a.createElement(f.a,{href:"https://www.aizatto.com/"},"aizatto.com")),r.a.createElement(h.a,null,r.a.createElement(f.a,{href:"https://www.deepthoughtapp.com/"},"Deep Thought")),r.a.createElement(h.a,null,r.a.createElement(f.a,{href:"https://www.logbook.my/"},"Logbook")),r.a.createElement(h.a,null,r.a.createElement(f.a,{href:"https://github.com/aizatto/timestamp-js"},"GitHub")),r.a.createElement(h.a,null,r.a.createElement(f.a,{href:"https://www.linkedin.com/in/aizatto"},"LinkedIn")))))}var p=a(11),b=a.n(p),v=a(44),g=a(45),k=function(e){var t=e.ms,a=e.ms%1e3,n=Math.floor(t/1e3%60),c=Math.floor(n/60),l=Math.floor(c/60),o="";return l&&(o+="".concat(l,"h")),c&&(o+="".concat(c,"m")),o+="".concat(n,"s").concat(a.toString().padEnd(3,"0")),r.a.createElement("span",{style:{fontFamily:"monospace"}},o)},j=function(e){var t=Object(n.useState)(function(){return[{id:b()(),label:"Start time",date:e.time}]}),a=Object(o.a)(t,2),c=a[0],l=a[1],m=c.map(function(t,a){var n=e.time-t.date;return r.a.createElement("tr",{key:t.id},r.a.createElement("td",{className:"text-right"},r.a.createElement(k,{ms:n})),r.a.createElement("td",null,r.a.createElement(v.a,{onChange:function(e){return t=e.target.value,void(c[a].label=t);var t},defaultValue:t.label})))});return r.a.createElement(r.a.Fragment,null,r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,m)),r.a.createElement(g.a,{onClick:function(){var e=c.slice();e.push({id:b()(),label:"",date:new Date}),l(e)}},"Add and Start"))},O=function(){var e=Object(n.useState)(function(){return new Date}),t=Object(o.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)(function(){var e=setInterval(function(){c(new Date)},100);return function(){clearInterval(e)}},[a]),r.a.createElement("div",{className:"App"},r.a.createElement(w,null),r.a.createElement(m.a,{className:"pt-3"},r.a.createElement(j,{time:a})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[20,1,2]]]);
//# sourceMappingURL=main.81f100c8.chunk.js.map