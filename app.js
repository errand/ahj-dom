(()=>{"use strict";var e={91:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},606:(e,t,n)=>{e.exports=n.p+"img/3a24d1c2d9b22774331d.ico"}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,(()=>{var e=n(91),t=n.n(e),r=new URL(n(606),n.b);function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t,n){return t&&o(e.prototype,t),n&&o(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}t()(r);var c=function(){function e(){i(this,e),this.boardSize=4,this.container=null,this.boardEl=null,this.cells=[]}return a(e,[{key:"bindToDOM",value:function(e){if(!(e instanceof HTMLElement))throw new Error("container is not HTMLElement");this.container=e}},{key:"checkBinding",value:function(){if(null===this.container)throw new Error("GamePlay not bind to DOM")}},{key:"drawBoard",value:function(){this.checkBinding(),this.container.innerHTML='\n      <div class="board-container">\n        <div data-id="board" class="board"></div>\n      </div>\n    ',this.boardEl=this.container.querySelector("[data-id=board]");for(var e=0;e<Math.pow(this.boardSize,2);e+=1){var t=document.createElement("div");t.classList.add("cell","map-tile"),this.boardEl.appendChild(t)}this.cells=Array.from(this.boardEl.children)}},{key:"showGoblin",value:function(e){var t=null,n=this.cells.length,r=this.cells;setTimeout((function i(){var o=Math.floor(Math.random()*(n-1))+0,a=r[o];t&&t.classList.remove("active"),a.classList.add("active"),t=a,setTimeout(i,e)}),e)}}]),e}(),l=function(){function e(t){i(this,e),this.gamePlay=t}return a(e,[{key:"init",value:function(){this.gamePlay.drawBoard(),this.gamePlay.showGoblin(500)}}]),e}(),s=new c;s.bindToDOM(document.querySelector("#game-container")),new l(s).init()})()})();
//# sourceMappingURL=app.js.map