!function(e){var t={};function n(o){if(t[o])return t[o].exports;var a=t[o]={i:o,l:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(o,a,function(t){return e[t]}.bind(null,a));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t){var n,o,a;function l(){void 0!==window.innerWidth?(o=window.innerHeight,n=window.innerWidth):void 0!==document.documentElement&&void 0!==document.documentElement.clientWidth&&0!=document.documentElement.clientWidth?(n=document.documentElement.clientWidth,o=document.documentElement.clientHeight):(n=document.getElementsByTagName("body")[0].clientWidth,o=document.getElementsByTagName("body")[0].clientHeight)}window.onresize=function(){l();var e=document.getElementsByClassName("parallel-span active")[0];e.style.height=o,e.style.width=n},window.onload=function(){var e=0;l(),a=document.getElementsByClassName("parallel-span");document.getElementsByTagName("body")[0];!function(){for(var e=0;e<a.length;e++){var t=a[e];t.style.height=o,t.style.width=n,0==e&&(t.className="parallel-span active")}}(),window.onscroll=function(){var t=window.pageYOffset||document.documentElement.scrollTop,n=e-t;t-e>300&&(!function(){for(var e=0;e<a.length;e++){var t=a[e];if(-1!==t.className.indexOf("active")&&e!=a.length-1){t.className="parallel-span";var n=a[e+1];if(void 0!==n){n.className="parallel-span active";break}}}}(),e=t),n>300&&(!function(){for(var e=0;e<a.length;e++){var t=a[e];if(-1!==t.className.indexOf("active")&&0!=e){t.className="parallel-span";var n=a[e-1];if(void 0!==n){n.className="parallel-span active";break}}}}(),e=t)}}}]);
//# sourceMappingURL=index.js.map