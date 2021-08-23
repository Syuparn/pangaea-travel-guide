var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function u(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let c,i;function l(t,e){t.appendChild(e)}function a(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createTextNode(t)}function $(){return p(" ")}function m(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function g(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function h(t,e){t.value=null==e?"":e}function x(t){i=t}function v(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const b=[],w=[],y=[],_=[],j=Promise.resolve();let k=!1;function E(t){y.push(t)}function q(t){_.push(t)}let C=!1;const A=new Set;function z(){if(!C){C=!0;do{for(let t=0;t<b.length;t+=1){const e=b[t];x(e),O(e.$$)}for(x(null),b.length=0;w.length;)w.pop()();for(let t=0;t<y.length;t+=1){const e=y[t];A.has(e)||(A.add(e),e())}y.length=0}while(b.length);for(;_.length;)_.pop()();k=!1,C=!1,A.clear()}}function O(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(E)}}const L=new Set;function N(t,e){t&&t.i&&(L.delete(t),t.i(e))}function T(t,e,n,o){if(t&&t.o){if(L.has(t))return;L.add(t),undefined.c.push((()=>{L.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function B(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function G(t){t&&t.c()}function P(t,e,o,u){const{fragment:c,on_mount:i,on_destroy:l,after_update:a}=t.$$;c&&c.m(e,o),u||E((()=>{const e=i.map(n).filter(s);l?l.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(E)}function S(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function D(t,e){-1===t.$$.dirty[0]&&(b.push(t),k||(k=!0,j.then(z)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function H(e,n,s,u,c,l,a,d=[-1]){const p=i;x(e);const $=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:n.context||[]),callbacks:o(),dirty:d,skip_bound:!1,root:n.target||p.$$.root};a&&a($.root);let m=!1;if($.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&c($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),m&&D(e,t)),n})):[],$.update(),m=!0,r($.before_update),$.fragment=!!u&&u($.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);$.fragment&&$.fragment.l(t),t.forEach(f)}else $.fragment&&$.fragment.c();n.intro&&N(e.$$.fragment),P(e,n.target,n.anchor,n.customElement),z()}x(p)}class M{$destroy(){S(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){let n,o,r;return{c(){n=d("textarea"),g(n,"rows",e[1]),g(n,"cols","80"),g(n,"class","svelte-tjqde2")},m(t,s){a(t,n,s),h(n,e[0]),o||(r=m(n,"input",e[2]),o=!0)},p(t,[e]){2&e&&g(n,"rows",t[1]),1&e&&h(n,t[0])},i:t,o:t,d(t){t&&f(n),o=!1,r()}}}function U(t,e,n){let{rows:o}=e,{text:r}=e;return t.$$set=t=>{"rows"in t&&n(1,o=t.rows),"text"in t&&n(0,r=t.text)},[r,o,function(){r=this.value,n(0,r)}]}class W extends M{constructor(t){super(),H(this,t,U,R,u,{rows:1,text:0})}}function F(e){let n,o,r;return{c(){n=d("div"),o=d("pre"),r=p(e[0]),g(o,"class","codearea svelte-3sn115")},m(t,e){a(t,n,e),l(n,o),l(o,r)},p(t,[e]){1&e&&function(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}(r,t[0])},i:t,o:t,d(t){t&&f(n)}}}function I(t,e,n){let{text:o}=e;return t.$$set=t=>{"text"in t&&n(0,o=t.text)},[o]}class J extends M{constructor(t){super(),H(this,t,I,F,u,{text:0})}}function K(e){let n,o,r;return{c(){n=d("button"),n.textContent="Run",g(n,"class","svelte-1dmast5")},m(t,s){a(t,n,s),o||(r=m(n,"click",e[0]),o=!0)},p:t,i:t,o:t,d(t){t&&f(n),o=!1,r()}}}function Q(t){return[function(e){v.call(this,t,e)}]}class V extends M{constructor(t){super(),H(this,t,Q,K,u,{})}}function X(t){let e,n,o,r,s,u,c,i,p,m,h,x,v,b,y,_;function j(e){t[4](e)}let k={rows:5};function E(e){t[5](e)}void 0!==t[0]&&(k.text=t[0]),r=new W({props:k}),w.push((()=>B(r,"text",j)));let C={rows:2};return void 0!==t[1]&&(C.text=t[1]),p=new W({props:C}),w.push((()=>B(p,"text",E))),v=new V({}),v.$on("click",t[3]),y=new J({props:{text:t[2]}}),{c(){e=d("div"),n=d("p"),n.textContent="source code",o=$(),G(r.$$.fragment),u=$(),c=d("p"),c.textContent="input",i=$(),G(p.$$.fragment),h=$(),x=d("p"),G(v.$$.fragment),b=$(),G(y.$$.fragment),g(n,"class","title svelte-ajwyjz"),g(c,"class","title svelte-ajwyjz"),g(x,"class","button-row svelte-ajwyjz"),g(e,"id","container"),g(e,"class","svelte-ajwyjz")},m(t,s){a(t,e,s),l(e,n),l(e,o),P(r,e,null),l(e,u),l(e,c),l(e,i),P(p,e,null),l(e,h),l(e,x),P(v,x,null),l(e,b),P(y,e,null),_=!0},p(t,[e]){const n={};!s&&1&e&&(s=!0,n.text=t[0],q((()=>s=!1))),r.$set(n);const o={};!m&&2&e&&(m=!0,o.text=t[1],q((()=>m=!1))),p.$set(o);const u={};4&e&&(u.text=t[2]),y.$set(u)},i(t){_||(N(r.$$.fragment,t),N(p.$$.fragment,t),N(v.$$.fragment,t),N(y.$$.fragment,t),_=!0)},o(t){T(r.$$.fragment,t),T(p.$$.fragment,t),T(v.$$.fragment,t),T(y.$$.fragment,t),_=!1},d(t){t&&f(e),S(r),S(p),S(v),S(y)}}}function Y(t,e,n){let{source:o}=e,{input:r}=e,{output:s}=e;return t.$$set=t=>{"source"in t&&n(0,o=t.source),"input"in t&&n(1,r=t.input),"output"in t&&n(2,s=t.output)},[o,r,s,function(){const t=function(t,e){const n=pangaea.execute(t,e);return{res:n.res,stdout:n.stdout,errmsg:n.errmsg}}(o,r);""!==t.errmsg?n(2,s=t.errmsg):n(2,s=t.stdout)},function(t){o=t,n(0,o)},function(t){r=t,n(1,r)}]}class Z extends M{constructor(t){super(),H(this,t,Y,X,u,{source:0,input:1,output:2})}}function tt(e){let n;return{c(){n=d("div"),n.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",g(n,"class","svelte-sbi3gf")},m(t,e){a(t,n,e)},p:t,i:t,o:t,d(t){t&&f(n)}}}class et extends M{constructor(t){super(),H(this,t,null,tt,u,{})}}function nt(e){let n,o,r;return{c(){var t,e;n=d("header"),o=d("img"),g(o,"id","logo"),t=o.src,e=r=ot,c||(c=document.createElement("a")),c.href=e,t!==c.href&&g(o,"src",r),g(o,"alt","Pangaea Travel Guide"),g(o,"class","svelte-1x6p6kv"),g(n,"class","svelte-1x6p6kv")},m(t,e){a(t,n,e),l(n,o)},p:t,i:t,o:t,d(t){t&&f(n)}}}let ot="./logo.svg";class rt extends M{constructor(t){super(),H(this,t,null,nt,u,{})}}function st(t){let n,o,r,s,u,c,i,p;o=new rt({}),u=new et({});const m=[t[0]];let h={};for(let t=0;t<m.length;t+=1)h=e(h,m[t]);return i=new Z({props:h}),{c(){n=d("main"),G(o.$$.fragment),r=$(),s=d("div"),G(u.$$.fragment),c=$(),G(i.$$.fragment),g(s,"class","flex svelte-1sdw5ul"),g(n,"class","svelte-1sdw5ul")},m(t,e){a(t,n,e),P(o,n,null),l(n,r),l(n,s),P(u,s,null),l(s,c),P(i,s,null),p=!0},p(t,[e]){const n=1&e?function(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const u=t[s],c=e[s];if(c){for(const t in u)t in c||(o[t]=1);for(const t in c)r[t]||(n[t]=c[t],r[t]=1);t[s]=c}else for(const t in u)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(m,[(o=t[0],"object"==typeof o&&null!==o?o:{})]):{};var o;i.$set(n)},i(t){p||(N(o.$$.fragment,t),N(u.$$.fragment,t),N(i.$$.fragment,t),p=!0)},o(t){T(o.$$.fragment,t),T(u.$$.fragment,t),T(i.$$.fragment,t),p=!1},d(t){t&&f(n),S(o),S(u),S(i)}}}function ut(t){return[{source:'"Hello, world!".p',input:"abc",output:""}]}const ct=new Go;fetch("./main.wasm").then((t=>t.arrayBuffer())).then((t=>WebAssembly.instantiate(t,ct.importObject))).then((t=>{ct.run(t.instance)}));return new class extends M{constructor(t){super(),H(this,t,ut,st,u,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
