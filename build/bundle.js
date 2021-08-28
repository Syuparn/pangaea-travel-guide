var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let u,i;function a(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function l(t,e,n){t.$$.on_destroy.push(a(e,n))}function f(t,e,n,o){if(t){const r=p(t,e,n,o);return t[0](r)}}function p(t,n,o,r){return t[1]&&r?e(o.ctx.slice(),t[1](r(n))):o.ctx}function $(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function d(t,e,n,o,r,s){if(r){const c=p(e,n,o,s);t.p(c,r)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function h(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function g(t,e){const n={};e=new Set(e);for(const o in t)e.has(o)||"$"===o[0]||(n[o]=t[o]);return n}function x(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function _(){return w(" ")}function k(){return w("")}function E(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const o in e)null==e[o]?t.removeAttribute(o):"style"===o?t.style.cssText=e[o]:"__value"===o?t.value=t[o]=e[o]:n[o]&&n[o].set?t[o]=e[o]:j(t,o,e[o])}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function O(t,e){t.value=null==e?"":e}function q(t){i=t}function R(){if(!i)throw new Error("Function called outside component initialization");return i}function S(){const t=R();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}function A(t,e){R().$$.context.set(t,e)}function L(t){return R().$$.context.get(t)}function N(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t.call(this,e)))}const z=[],B=[],D=[],H=[],K=Promise.resolve();let T=!1;function U(t){D.push(t)}function I(t){H.push(t)}let M=!1;const W=new Set;function G(){if(!M){M=!0;do{for(let t=0;t<z.length;t+=1){const e=z[t];q(e),F(e.$$)}for(q(null),z.length=0;B.length;)B.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];W.has(e)||(W.add(e),e())}D.length=0}while(z.length);for(;H.length;)H.pop()();T=!1,M=!1,W.clear()}}function F(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const J=new Set;let Q;function V(){Q={r:0,c:[],p:Q}}function X(){Q.r||r(Q.c),Q=Q.p}function Y(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Z(t,e,n,o){if(t&&t.o){if(J.has(t))return;J.add(t),Q.c.push((()=>{J.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}function tt(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const c=t[s],u=e[s];if(u){for(const t in c)t in u||(o[t]=1);for(const t in u)r[t]||(n[t]=u[t],r[t]=1);t[s]=u}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function et(t){return"object"==typeof t&&null!==t?t:{}}function nt(t,e,n){const o=t.$$.props[e];void 0!==o&&(t.$$.bound[o]=n,n(t.$$.ctx[o]))}function ot(t){t&&t.c()}function rt(t,e,o,c){const{fragment:u,on_mount:i,on_destroy:a,after_update:l}=t.$$;u&&u.m(e,o),c||U((()=>{const e=i.map(n).filter(s);a?a.push(...e):r(e),t.$$.on_mount=[]})),l.forEach(U)}function st(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ct(t,e){-1===t.$$.dirty[0]&&(z.push(t),T||(T=!0,K.then(G)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ut(e,n,s,c,u,a,l,f=[-1]){const p=i;q(e);const $=e.$$={fragment:null,ctx:null,props:a,update:t,not_equal:u,bound:o(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(p?p.$$.context:n.context||[]),callbacks:o(),dirty:f,skip_bound:!1,root:n.target||p.$$.root};l&&l($.root);let d=!1;if($.ctx=s?s(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return $.ctx&&u($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),d&&ct(e,t)),n})):[],$.update(),d=!0,r($.before_update),$.fragment=!!c&&c($.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);$.fragment&&$.fragment.l(t),t.forEach(y)}else $.fragment&&$.fragment.c();n.intro&&Y(e.$$.fragment),rt(e,n.target,n.anchor,n.customElement),G()}q(p)}class it{$destroy(){st(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const at=[];function lt(e,n=t){let o;const r=new Set;function s(t){if(c(e,t)&&(e=t,o)){const t=!at.length;for(const t of r)t[1](),at.push(t,e);if(t){for(let t=0;t<at.length;t+=2)at[t][0](at[t+1]);at.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,u=t){const i=[c,u];return r.add(i),1===r.size&&(o=n(s)||t),c(e),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}function ft(e,n,o){const c=!Array.isArray(e),u=c?[e]:e,i=n.length<2;return{subscribe:lt(o,(e=>{let o=!1;const l=[];let f=0,p=t;const $=()=>{if(f)return;p();const o=n(c?l[0]:l,e);i?e(o):p=s(o)?o:t},d=u.map(((t,e)=>a(t,(t=>{l[e]=t,f&=~(1<<e),o&&$()}),(()=>{f|=1<<e}))));return o=!0,$(),function(){r(d),p()}})).subscribe}}const pt={},$t={};function dt(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const mt=function(t,e){const n=[];let o=dt(t);return{get location(){return o},listen(e){n.push(e);const r=()=>{o=dt(t),e({location:o,action:"POP"})};return t.addEventListener("popstate",r),()=>{t.removeEventListener("popstate",r);const o=n.indexOf(e);n.splice(o,1)}},navigate(e,{state:r,replace:s=!1}={}){r={...r,key:Date.now()+""};try{s?t.history.replaceState(r,null,e):t.history.pushState(r,null,e)}catch(n){t.location[s?"replace":"assign"](e)}o=dt(t),n.forEach((t=>t({location:o,action:"PUSH"})))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],o=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return o[e]},pushState(t,r,s){const[c,u=""]=s.split("?");e++,n.push({pathname:c,search:u}),o.push(t)},replaceState(t,r,s){const[c,u=""]=s.split("?");n[e]={pathname:c,search:u},o[e]=t}}}}()),{navigate:ht}=mt,gt=/^:(.+)/;function xt(t,e){return t.substr(0,e.length)===e}function bt(t){return"*"===t[0]}function yt(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function vt(t){return t.replace(/(^\/+|\/+$)/g,"")}function wt(t,e){return{route:t,score:t.default?0:yt(t.path).reduce(((t,e)=>(t+=4,!function(t){return""===t}(e)?!function(t){return gt.test(t)}(e)?bt(e)?t-=5:t+=3:t+=2:t+=1,t)),0),index:e}}function _t(t,e){let n,o;const[r]=e.split("?"),s=yt(r),c=""===s[0],u=function(t){return t.map(wt).sort(((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index))}(t);for(let t=0,r=u.length;t<r;t++){const r=u[t].route;let i=!1;if(r.default){o={route:r,params:{},uri:e};continue}const a=yt(r.path),l={},f=Math.max(s.length,a.length);let p=0;for(;p<f;p++){const t=a[p],e=s[p];if(void 0!==t&&bt(t)){l["*"===t?"*":t.slice(1)]=s.slice(p).map(decodeURIComponent).join("/");break}if(void 0===e){i=!0;break}let n=gt.exec(t);if(n&&!c){const t=decodeURIComponent(e);l[n[1]]=t}else if(t!==e){i=!0;break}}if(!i){n={route:r,params:l,uri:"/"+s.slice(0,p).join("/")};break}}return n||o||null}function kt(t,e){return t+(e?`?${e}`:"")}function Et(t,e){return`${vt("/"===e?t:`${vt(t)}/${vt(e)}`)}/`}function jt(t){let e;const n=t[9].default,o=f(n,t,t[8],null);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,[r]){o&&o.p&&(!e||256&r)&&d(o,n,t,t[8],e?$(n,t[8],r,null):m(t[8]),null)},i(t){e||(Y(o,t),e=!0)},o(t){Z(o,t),e=!1},d(t){o&&o.d(t)}}}function Ct(t,e,n){let o,r,s,{$$slots:c={},$$scope:u}=e,{basepath:i="/"}=e,{url:a=null}=e;const f=L(pt),p=L($t),$=lt([]);l(t,$,(t=>n(6,r=t)));const d=lt(null);let m=!1;const h=f||lt(a?{pathname:a}:mt.location);l(t,h,(t=>n(5,o=t)));const g=p?p.routerBase:lt({path:i,uri:i});l(t,g,(t=>n(7,s=t)));const x=ft([g,d],(([t,e])=>{if(null===e)return t;const{path:n}=t,{route:o,uri:r}=e;return{path:o.default?n:o.path.replace(/\*.*$/,""),uri:r}}));var b;return f||(b=()=>mt.listen((t=>{h.set(t.location)})),R().$$.on_mount.push(b),A(pt,h)),A($t,{activeRoute:d,base:g,routerBase:x,registerRoute:function(t){const{path:e}=s;let{path:n}=t;if(t._path=n,t.path=Et(e,n),"undefined"==typeof window){if(m)return;const e=function(t,e){return _t([t],e)}(t,o.pathname);e&&(d.set(e),m=!0)}else $.update((e=>(e.push(t),e)))},unregisterRoute:function(t){$.update((e=>{const n=e.indexOf(t);return e.splice(n,1),e}))}}),t.$$set=t=>{"basepath"in t&&n(3,i=t.basepath),"url"in t&&n(4,a=t.url),"$$scope"in t&&n(8,u=t.$$scope)},t.$$.update=()=>{if(128&t.$$.dirty){const{path:t}=s;$.update((e=>(e.forEach((e=>e.path=Et(t,e._path))),e)))}if(96&t.$$.dirty){const t=_t(r,o.pathname);d.set(t)}},[$,h,g,i,a,o,r,s,u,c]}class Pt extends it{constructor(t){super(),ut(this,t,Ct,jt,c,{basepath:3,url:4})}}const Ot=t=>({params:4&t,location:16&t}),qt=t=>({params:t[2],location:t[4]});function Rt(t){let e,n,o,r;const s=[At,St],c=[];function u(t,e){return null!==t[0]?0:1}return e=u(t),n=c[e]=s[e](t),{c(){n.c(),o=k()},m(t,n){c[e].m(t,n),b(t,o,n),r=!0},p(t,r){let i=e;e=u(t),e===i?c[e].p(t,r):(V(),Z(c[i],1,1,(()=>{c[i]=null})),X(),n=c[e],n?n.p(t,r):(n=c[e]=s[e](t),n.c()),Y(n,1),n.m(o.parentNode,o))},i(t){r||(Y(n),r=!0)},o(t){Z(n),r=!1},d(t){c[e].d(t),t&&y(o)}}}function St(t){let e;const n=t[10].default,o=f(n,t,t[9],qt);return{c(){o&&o.c()},m(t,n){o&&o.m(t,n),e=!0},p(t,r){o&&o.p&&(!e||532&r)&&d(o,n,t,t[9],e?$(n,t[9],r,Ot):m(t[9]),qt)},i(t){e||(Y(o,t),e=!0)},o(t){Z(o,t),e=!1},d(t){o&&o.d(t)}}}function At(t){let n,o,r;const s=[{location:t[4]},t[2],t[3]];var c=t[0];function u(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(u())),{c(){n&&ot(n.$$.fragment),o=k()},m(t,e){n&&rt(n,t,e),b(t,o,e),r=!0},p(t,e){const r=28&e?tt(s,[16&e&&{location:t[4]},4&e&&et(t[2]),8&e&&et(t[3])]):{};if(c!==(c=t[0])){if(n){V();const t=n;Z(t.$$.fragment,1,0,(()=>{st(t,1)})),X()}c?(n=new c(u()),ot(n.$$.fragment),Y(n.$$.fragment,1),rt(n,o.parentNode,o)):n=null}else c&&n.$set(r)},i(t){r||(n&&Y(n.$$.fragment,t),r=!0)},o(t){n&&Z(n.$$.fragment,t),r=!1},d(t){t&&y(o),n&&st(n,t)}}}function Lt(t){let e,n,o=null!==t[1]&&t[1].route===t[7]&&Rt(t);return{c(){o&&o.c(),e=k()},m(t,r){o&&o.m(t,r),b(t,e,r),n=!0},p(t,[n]){null!==t[1]&&t[1].route===t[7]?o?(o.p(t,n),2&n&&Y(o,1)):(o=Rt(t),o.c(),Y(o,1),o.m(e.parentNode,e)):o&&(V(),Z(o,1,1,(()=>{o=null})),X())},i(t){n||(Y(o),n=!0)},o(t){Z(o),n=!1},d(t){o&&o.d(t),t&&y(e)}}}function Nt(t,n,o){let r,s,{$$slots:c={},$$scope:u}=n,{path:i=""}=n,{component:a=null}=n;const{registerRoute:f,unregisterRoute:p,activeRoute:$}=L($t);l(t,$,(t=>o(1,r=t)));const d=L(pt);l(t,d,(t=>o(4,s=t)));const m={path:i,default:""===i};let g={},x={};var b;return f(m),"undefined"!=typeof window&&(b=()=>{p(m)},R().$$.on_destroy.push(b)),t.$$set=t=>{o(13,n=e(e({},n),h(t))),"path"in t&&o(8,i=t.path),"component"in t&&o(0,a=t.component),"$$scope"in t&&o(9,u=t.$$scope)},t.$$.update=()=>{2&t.$$.dirty&&r&&r.route===m&&o(2,g=r.params);{const{path:t,component:e,...r}=n;o(3,x=r)}},n=h(n),[a,r,g,x,s,$,d,m,i,u,c]}class zt extends it{constructor(t){super(),ut(this,t,Nt,Lt,c,{path:8,component:0})}}function Bt(t){let n,o,r,s;const c=t[16].default,u=f(c,t,t[15],null);let i=[{href:t[0]},{"aria-current":t[2]},t[1],t[6]],a={};for(let t=0;t<i.length;t+=1)a=e(a,i[t]);return{c(){n=v("a"),u&&u.c(),C(n,a)},m(e,c){b(e,n,c),u&&u.m(n,null),o=!0,r||(s=E(n,"click",t[5]),r=!0)},p(t,[e]){u&&u.p&&(!o||32768&e)&&d(u,c,t,t[15],o?$(c,t[15],e,null):m(t[15]),null),C(n,a=tt(i,[(!o||1&e)&&{href:t[0]},(!o||4&e)&&{"aria-current":t[2]},2&e&&t[1],64&e&&t[6]]))},i(t){o||(Y(u,t),o=!0)},o(t){Z(u,t),o=!1},d(t){t&&y(n),u&&u.d(t),r=!1,s()}}}function Dt(t,n,o){let r;const s=["to","replace","state","getProps"];let c,u,i=g(n,s),{$$slots:a={},$$scope:f}=n,{to:p="#"}=n,{replace:$=!1}=n,{state:d={}}=n,{getProps:m=(()=>({}))}=n;const{base:x}=L($t);l(t,x,(t=>o(14,u=t)));const b=L(pt);l(t,b,(t=>o(13,c=t)));const y=S();let v,w,_,k;return t.$$set=t=>{n=e(e({},n),h(t)),o(6,i=g(n,s)),"to"in t&&o(7,p=t.to),"replace"in t&&o(8,$=t.replace),"state"in t&&o(9,d=t.state),"getProps"in t&&o(10,m=t.getProps),"$$scope"in t&&o(15,f=t.$$scope)},t.$$.update=()=>{16512&t.$$.dirty&&o(0,v="/"===p?u.uri:function(t,e){if(xt(t,"/"))return t;const[n,o]=t.split("?"),[r]=e.split("?"),s=yt(n),c=yt(r);if(""===s[0])return kt(r,o);if(!xt(s[0],"."))return kt(("/"===r?"":"/")+c.concat(s).join("/"),o);const u=c.concat(s),i=[];return u.forEach((t=>{".."===t?i.pop():"."!==t&&i.push(t)})),kt("/"+i.join("/"),o)}(p,u.uri)),8193&t.$$.dirty&&o(11,w=xt(c.pathname,v)),8193&t.$$.dirty&&o(12,_=v===c.pathname),4096&t.$$.dirty&&o(2,r=_?"page":void 0),15361&t.$$.dirty&&o(1,k=m({location:c,href:v,isPartiallyCurrent:w,isCurrent:_}))},[v,k,r,x,b,function(t){if(y("click",t),function(t){return!t.defaultPrevented&&0===t.button&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}(t)){t.preventDefault();const e=c.pathname===v||$;ht(v,{state:d,replace:e})}},i,p,$,d,m,w,_,c,u,f,a]}class Ht extends it{constructor(t){super(),ut(this,t,Dt,Bt,c,{to:7,replace:8,state:9,getProps:10})}}function Kt(e){let n,o,r;return{c(){n=v("textarea"),j(n,"rows",e[1]),j(n,"cols","80"),j(n,"class","svelte-tjqde2")},m(t,s){b(t,n,s),O(n,e[0]),o||(r=E(n,"input",e[2]),o=!0)},p(t,[e]){2&e&&j(n,"rows",t[1]),1&e&&O(n,t[0])},i:t,o:t,d(t){t&&y(n),o=!1,r()}}}function Tt(t,e,n){let{rows:o}=e,{text:r}=e;return t.$$set=t=>{"rows"in t&&n(1,o=t.rows),"text"in t&&n(0,r=t.text)},[r,o,function(){r=this.value,n(0,r)}]}class Ut extends it{constructor(t){super(),ut(this,t,Tt,Kt,c,{rows:1,text:0})}}function It(e){let n,o,r;return{c(){n=v("div"),o=v("pre"),r=w(e[0]),j(o,"class","codearea svelte-3sn115")},m(t,e){b(t,n,e),x(n,o),x(o,r)},p(t,[e]){1&e&&P(r,t[0])},i:t,o:t,d(t){t&&y(n)}}}function Mt(t,e,n){let{text:o}=e;return t.$$set=t=>{"text"in t&&n(0,o=t.text)},[o]}class Wt extends it{constructor(t){super(),ut(this,t,Mt,It,c,{text:0})}}function Gt(e){let n,o,r;return{c(){n=v("button"),n.textContent="Run",j(n,"class","svelte-1dmast5")},m(t,s){b(t,n,s),o||(r=E(n,"click",e[0]),o=!0)},p:t,i:t,o:t,d(t){t&&y(n),o=!1,r()}}}function Ft(t){return[function(e){N.call(this,t,e)}]}class Jt extends it{constructor(t){super(),ut(this,t,Ft,Gt,c,{})}}function Qt(t,e){const n=pangaea.execute(t,e);return""!==n.errmsg?n.errmsg:n.stdout}const Vt=function(){const{subscribe:t,set:e,update:n}=lt({source:"",input:"",output:""});return{subscribe:t,insert:(t,n)=>e({source:t,input:n,output:""}),run:()=>n((({source:t,input:e})=>({source:t,input:e,output:Qt(t,e)})))}}();function Xt(t){let e,n,o,r,s,c,u,i,a,l,f,p,$,d,m,h;function g(e){t[1](e)}let w={rows:5};function k(e){t[2](e)}void 0!==t[0].source&&(w.text=t[0].source),r=new Ut({props:w}),B.push((()=>nt(r,"text",g)));let E={rows:2};return void 0!==t[0].input&&(E.text=t[0].input),a=new Ut({props:E}),B.push((()=>nt(a,"text",k))),$=new Jt({}),$.$on("click",Vt.run),m=new Wt({props:{text:t[0].output}}),{c(){e=v("div"),n=v("p"),n.textContent="source code",o=_(),ot(r.$$.fragment),c=_(),u=v("p"),u.textContent="input",i=_(),ot(a.$$.fragment),f=_(),p=v("p"),ot($.$$.fragment),d=_(),ot(m.$$.fragment),j(n,"class","title svelte-3ldcyp"),j(u,"class","title svelte-3ldcyp"),j(p,"class","button-row svelte-3ldcyp"),j(e,"id","container"),j(e,"class","svelte-3ldcyp")},m(t,s){b(t,e,s),x(e,n),x(e,o),rt(r,e,null),x(e,c),x(e,u),x(e,i),rt(a,e,null),x(e,f),x(e,p),rt($,p,null),x(e,d),rt(m,e,null),h=!0},p(t,[e]){const n={};!s&&1&e&&(s=!0,n.text=t[0].source,I((()=>s=!1))),r.$set(n);const o={};!l&&1&e&&(l=!0,o.text=t[0].input,I((()=>l=!1))),a.$set(o);const c={};1&e&&(c.text=t[0].output),m.$set(c)},i(t){h||(Y(r.$$.fragment,t),Y(a.$$.fragment,t),Y($.$$.fragment,t),Y(m.$$.fragment,t),h=!0)},o(t){Z(r.$$.fragment,t),Z(a.$$.fragment,t),Z($.$$.fragment,t),Z(m.$$.fragment,t),h=!1},d(t){t&&y(e),st(r),st(a),st($),st(m)}}}function Yt(t,e,n){let o;return l(t,Vt,(t=>n(0,o=t))),[o,function(e){t.$$.not_equal(o.source,e)&&(o.source=e,Vt.set(o))},function(e){t.$$.not_equal(o.input,e)&&(o.input=e,Vt.set(o))}]}class Zt extends it{constructor(t){super(),ut(this,t,Yt,Xt,c,{})}}function te(t){let e,n;const o=t[1].default,r=f(o,t,t[0],null);return{c(){e=v("div"),r&&r.c(),j(e,"class","svelte-t8bee5")},m(t,o){b(t,e,o),r&&r.m(e,null),n=!0},p(t,[e]){r&&r.p&&(!n||1&e)&&d(r,o,t,t[0],n?$(o,t[0],e,null):m(t[0]),null)},i(t){n||(Y(r,t),n=!0)},o(t){Z(r,t),n=!1},d(t){t&&y(e),r&&r.d(t)}}}function ee(t,e,n){let{$$slots:o={},$$scope:r}=e;return t.$$set=t=>{"$$scope"in t&&n(0,r=t.$$scope)},[r,o]}class ne extends it{constructor(t){super(),ut(this,t,ee,te,c,{})}}function oe(t){let e,n;return{c(){e=v("p"),n=w(t[0]),j(e,"class","svelte-1hdeajh")},m(t,o){b(t,e,o),x(e,n)},p(t,e){1&e&&P(n,t[0])},d(t){t&&y(e)}}}function re(t){let e,n;return e=new Ht({props:{to:t[1],$$slots:{default:[oe]},$$scope:{ctx:t}}}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},p(t,[n]){const o={};2&n&&(o.to=t[1]),5&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){Z(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}function se(t,e,n){let{text:o}=e,{link:r}=e;return t.$$set=t=>{"text"in t&&n(0,o=t.text),"link"in t&&n(1,r=t.link)},[o,r]}class ce extends it{constructor(t){super(),ut(this,t,se,re,c,{text:0,link:1})}}const ue="/pangaea-travel-guide",ie=["","helloworld"];class ae{constructor(t){this._page=t}next(){const t=ie.indexOf(this._page);return-1===t||t===ie.length-1?new ae(""):new ae(ie[t+1])}back(){const t=ie.indexOf(this._page);return new ae(-1===t||0===t?"":ie[t-1])}page(){return this._page}}function le(){const t=function(t,e){if(t.startsWith(e))return t.substr(e.length);return t}(location.pathname,ue);return new ae(t)}const fe=function(){const{subscribe:t,set:e}=lt(le());return{subscribe:t,reload:()=>e(le())}}();function pe(e){let n,o;return{c(){var t,e;n=v("img"),j(n,"id","logo"),t=n.src,e=o=de,u||(u=document.createElement("a")),u.href=e,t!==u.href&&j(n,"src",o),j(n,"alt","Pangaea Travel Guide"),j(n,"class","svelte-1x6p6kv")},m(t,e){b(t,n,e)},p:t,d(t){t&&y(n)}}}function $e(t){let e,n,o,r,s,c,u;return n=new Ht({props:{to:"",$$slots:{default:[pe]},$$scope:{ctx:t}}}),r=new ce({props:{link:t[0].back().page(),text:"back"}}),c=new ce({props:{link:t[0].next().page(),text:"next"}}),{c(){e=v("header"),ot(n.$$.fragment),o=_(),ot(r.$$.fragment),s=_(),ot(c.$$.fragment),j(e,"class","svelte-1x6p6kv")},m(t,i){b(t,e,i),rt(n,e,null),x(e,o),rt(r,e,null),x(e,s),rt(c,e,null),u=!0},p(t,[e]){const o={};2&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o);const s={};1&e&&(s.link=t[0].back().page()),r.$set(s);const u={};1&e&&(u.link=t[0].next().page()),c.$set(u)},i(t){u||(Y(n.$$.fragment,t),Y(r.$$.fragment,t),Y(c.$$.fragment,t),u=!0)},o(t){Z(n.$$.fragment,t),Z(r.$$.fragment,t),Z(c.$$.fragment,t),u=!1},d(t){t&&y(e),st(n),st(r),st(c)}}}let de="./logo.svg";function me(t,e,n){let o;return l(t,fe,(t=>n(0,o=t))),[o]}class he extends it{constructor(t){super(),ut(this,t,me,$e,c,{})}}function ge(e){let n,o,r;return{c(){n=v("h1"),n.textContent="0. Introduction",o=_(),r=v("p"),r.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",j(n,"class","svelte-ejruzp")},m(t,e){b(t,n,e),b(t,o,e),b(t,r,e)},p:t,i:t,o:t,d(t){t&&y(n),t&&y(o),t&&y(r)}}}function xe(t){return fe.reload(),Vt.insert("# you can see and edit source code here","some input to read"),[]}class be extends it{constructor(t){super(),ut(this,t,xe,ge,c,{})}}function ye(e){let n,o,r;return{c(){n=v("h1"),n.textContent="1. Hello World",o=_(),r=v("p"),r.textContent="Hello!",j(n,"class","svelte-ejruzp")},m(t,e){b(t,n,e),b(t,o,e),b(t,r,e)},p:t,i:t,o:t,d(t){t&&y(n),t&&y(o),t&&y(r)}}}function ve(t){return fe.reload(),Vt.insert('"Hello, world!".p',""),[]}class we extends it{constructor(t){super(),ut(this,t,ve,ye,c,{})}}function _e(e){let n,o,r,s;return n=new zt({props:{path:"",component:be}}),r=new zt({props:{path:"helloworld",component:we}}),{c(){ot(n.$$.fragment),o=_(),ot(r.$$.fragment)},m(t,e){rt(n,t,e),b(t,o,e),rt(r,t,e),s=!0},p:t,i(t){s||(Y(n.$$.fragment,t),Y(r.$$.fragment,t),s=!0)},o(t){Z(n.$$.fragment,t),Z(r.$$.fragment,t),s=!1},d(t){st(n,t),t&&y(o),st(r,t)}}}function ke(t){let e,n,o,r,s,c,u,i;return n=new he({}),s=new ne({props:{$$slots:{default:[_e]},$$scope:{ctx:t}}}),u=new Zt({}),{c(){e=v("main"),ot(n.$$.fragment),o=_(),r=v("div"),ot(s.$$.fragment),c=_(),ot(u.$$.fragment),j(r,"class","flex svelte-hrew70"),j(e,"class","svelte-hrew70")},m(t,a){b(t,e,a),rt(n,e,null),x(e,o),x(e,r),rt(s,r,null),x(r,c),rt(u,r,null),i=!0},p(t,e){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),s.$set(n)},i(t){i||(Y(n.$$.fragment,t),Y(s.$$.fragment,t),Y(u.$$.fragment,t),i=!0)},o(t){Z(n.$$.fragment,t),Z(s.$$.fragment,t),Z(u.$$.fragment,t),i=!1},d(t){t&&y(e),st(n),st(s),st(u)}}}function Ee(t){let e,n;return e=new Pt({props:{basepath:ue,$$slots:{default:[ke]},$$scope:{ctx:t}}}),{c(){ot(e.$$.fragment)},m(t,o){rt(e,t,o),n=!0},p(t,[n]){const o={};1&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){n||(Y(e.$$.fragment,t),n=!0)},o(t){Z(e.$$.fragment,t),n=!1},d(t){st(e,t)}}}const je=new Go;fetch("./main.wasm").then((t=>t.arrayBuffer())).then((t=>WebAssembly.instantiate(t,je.importObject))).then((t=>{je.run(t.instance)}));return new class extends it{constructor(t){super(),ut(this,t,null,Ee,c,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
