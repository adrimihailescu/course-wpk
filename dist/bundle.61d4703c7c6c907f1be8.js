(()=>{"use strict";function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}const n=function(){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),r="hello-world-button",(t="buttonCssClass")in(e=this)?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}var t,r,o;return t=n,(r=[{key:"render",value:function(){var e=document.createElement("button");e.innerHTML="Hello world",e.classList.add(this.buttonCssClass),e.onclick=function(){var e=document.createElement("p");e.innerHTML=" Hello world",e.classList.add("hello-world-text"),n.appendChild(e)};var n=document.querySelector("body");n.appendChild(e)}}])&&e(t.prototype,r),o&&e(t,o),Object.defineProperty(t,"prototype",{writable:!1}),n}();function t(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e)}var n,r,o;return n=e,(r=[{key:"render",value:function(){var e=document.createElement("h1"),n=document.querySelector("body");e.innerHTML="Webpack is awesome",n.appendChild(e)}}])&&t(n.prototype,r),o&&t(n,o),Object.defineProperty(n,"prototype",{writable:!1}),e}())).render();var r=new n;r.render(),"production"===process.env.NODE_env&&console.log("production mode"),r.methodThatDoesNotExist()})();