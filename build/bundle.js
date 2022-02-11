var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function l(t){t.forEach(o)}function c(t){return"function"==typeof t}function i(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s;function u(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}function a(t,e,n,o){if(t){const r=d(t,e,n,o);return t[0](r)}}function d(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function f(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}function g(t,e,n,o,r,l){if(r){const c=d(e,n,o,l);t.p(c,r)}}function m(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}function $(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}const p="undefined"!=typeof window;let h=p?()=>window.performance.now():()=>Date.now(),y=p?t=>requestAnimationFrame(t):t;const v=new Set;function w(t){v.forEach((e=>{e.c(t)||(v.delete(e),e.f())})),0!==v.size&&y(w)}function b(t,e){t.appendChild(e)}function x(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function k(t){const e=z("style");return function(t,e){b(t.head||t,e)}(x(t),e),e.sheet}function _(t,e,n){t.insertBefore(e,n||null)}function L(t){t.parentNode.removeChild(t)}function E(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function z(t){return document.createElement(t)}function B(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function S(t){return document.createTextNode(t)}function P(){return S(" ")}function j(){return S("")}function I(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function M(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function W(t,e,n,o){null===n?t.style.removeProperty(e):t.style.setProperty(e,n,o?"important":"")}const A=new Map;let D,H=0;function R(t,e,n,o,r,l,c,i=0){const s=16.666/o;let u="{\n";for(let t=0;t<=1;t+=s){const o=e+(n-e)*l(t);u+=100*t+`%{${c(o,1-o)}}\n`}const a=u+`100% {${c(n,1-n)}}\n}`,d=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${i}`,f=x(t),{stylesheet:g,rules:m}=A.get(f)||function(t,e){const n={stylesheet:k(e),rules:{}};return A.set(t,n),n}(f,t);m[d]||(m[d]=!0,g.insertRule(`@keyframes ${d} ${a}`,g.cssRules.length));const $=t.style.animation||"";return t.style.animation=`${$?`${$}, `:""}${d} ${o}ms linear ${r}ms 1 both`,H+=1,d}function T(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),H-=r,H||y((()=>{H||(A.forEach((t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}})),A.clear())})))}function N(t){D=t}function O(t){(function(){if(!D)throw new Error("Function called outside component initialization");return D})().$$.on_mount.push(t)}const F=[],G=[],V=[],Z=[],q=Promise.resolve();let K=!1;function Q(t){V.push(t)}const J=new Set;let U,X=0;function Y(){const t=D;do{for(;X<F.length;){const t=F[X];X++,N(t),tt(t.$$)}for(N(null),F.length=0,X=0;G.length;)G.pop()();for(let t=0;t<V.length;t+=1){const e=V[t];J.has(e)||(J.add(e),e())}V.length=0}while(F.length);for(;Z.length;)Z.pop()();K=!1,J.clear(),N(t)}function tt(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Q)}}function et(t,e,n){t.dispatchEvent(function(t,e,n=!1){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,!1,e),o}(`${e?"intro":"outro"}${n}`))}const nt=new Set;let ot;function rt(){ot={r:0,c:[],p:ot}}function lt(){ot.r||l(ot.c),ot=ot.p}function ct(t,e){t&&t.i&&(nt.delete(t),t.i(e))}function it(t,e,n,o){if(t&&t.o){if(nt.has(t))return;nt.add(t),ot.c.push((()=>{nt.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const st={duration:0};function ut(n,o,r){let l,i,s=o(n,r),u=!1,a=0;function d(){l&&T(n,l)}function f(){const{delay:o=0,duration:r=300,easing:c=e,tick:f=t,css:g}=s||st;g&&(l=R(n,0,1,r,o,c,g,a++)),f(0,1);const m=h()+o,$=m+r;i&&i.abort(),u=!0,Q((()=>et(n,!0,"start"))),i=function(t){let e;return 0===v.size&&y(w),{promise:new Promise((n=>{v.add(e={c:t,f:n})})),abort(){v.delete(e)}}}((t=>{if(u){if(t>=$)return f(1,0),et(n,!0,"end"),d(),u=!1;if(t>=m){const e=c((t-m)/r);f(e,1-e)}}return u}))}let g=!1;return{start(){g||(g=!0,T(n),c(s)?(s=s(),(U||(U=Promise.resolve(),U.then((()=>{U=null}))),U).then(f)):f())},invalidate(){g=!1},end(){u&&(d(),u=!1)}}}function at(t,e){const n={},o={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],i=e[l];if(i){for(const t in c)t in i||(o[t]=1);for(const t in i)r[t]||(n[t]=i[t],r[t]=1);t[l]=i}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function dt(t){return"object"==typeof t&&null!==t?t:{}}function ft(t){t&&t.c()}function gt(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:u,after_update:a}=t.$$;i&&i.m(e,n),r||Q((()=>{const e=s.map(o).filter(c);u?u.push(...e):l(e),t.$$.on_mount=[]})),a.forEach(Q)}function mt(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function $t(t,e){-1===t.$$.dirty[0]&&(F.push(t),K||(K=!0,q.then(Y)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function pt(e,n,o,c,i,s,u,a=[-1]){const d=D;N(e);const f=e.$$={fragment:null,ctx:null,props:s,update:t,not_equal:i,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:r(),dirty:a,skip_bound:!1,root:n.target||d.$$.root};u&&u(f.root);let g=!1;if(f.ctx=o?o(e,n.props||{},((t,n,...o)=>{const r=o.length?o[0]:n;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),g&&$t(e,t)),n})):[],f.update(),g=!0,l(f.before_update),f.fragment=!!c&&c(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(L)}else f.fragment&&f.fragment.c();n.intro&&ct(e.$$.fragment),gt(e,n.target,n.anchor,n.customElement),Y()}N(d)}class ht{$destroy(){mt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function yt(t,{delay:n=0,duration:o=400,easing:r=e}={}){const l=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>"opacity: "+t*l}}function vt(t){let e,n,o,r,l;const c=[bt,wt],i=[];function s(t,e){return 1&e&&(n=null),"string"==typeof t[0]?0:(null==n&&(n=!!["function","object"].includes(typeof t[0])),n?1:-1)}return~(o=s(t,-1))&&(r=i[o]=c[o](t)),{c(){e=z("div"),r&&r.c(),M(e,"class",kt)},m(t,n){_(t,e,n),~o&&i[o].m(e,null),l=!0},p(t,n){let l=o;o=s(t,n),o===l?~o&&i[o].p(t,n):(r&&(rt(),it(i[l],1,1,(()=>{i[l]=null})),lt()),~o?(r=i[o],r?r.p(t,n):(r=i[o]=c[o](t),r.c()),ct(r,1),r.m(e,null)):r=null)},i(t){l||(ct(r),l=!0)},o(t){it(r),l=!1},d(t){t&&L(e),~o&&i[o].d()}}}function wt(t){let e,o,r;const l=[t[1]];var c=t[0];function i(t){let e={};for(let t=0;t<l.length;t+=1)e=n(e,l[t]);return{props:e}}return c&&(e=new c(i())),{c(){e&&ft(e.$$.fragment),o=j()},m(t,n){e&&gt(e,t,n),_(t,o,n),r=!0},p(t,n){const r=2&n?at(l,[dt(t[1])]):{};if(c!==(c=t[0])){if(e){rt();const t=e;it(t.$$.fragment,1,0,(()=>{mt(t,1)})),lt()}c?(e=new c(i()),ft(e.$$.fragment),ct(e.$$.fragment,1),gt(e,o.parentNode,o)):e=null}else c&&e.$set(r)},i(t){r||(e&&ct(e.$$.fragment,t),r=!0)},o(t){e&&it(e.$$.fragment,t),r=!1},d(t){t&&L(o),e&&mt(e,t)}}}function bt(e){let n,o;return{c(){n=z("div"),o=S(e[0])},m(t,e){_(t,n,e),b(n,o)},p(t,e){1&e&&C(o,t[0])},i:t,o:t,d(t){t&&L(n)}}}function xt(t){let e,n,o=t[0]&&vt(t);return{c(){o&&o.c(),e=j()},m(t,r){o&&o.m(t,r),_(t,e,r),n=!0},p(t,[n]){t[0]?o?(o.p(t,n),1&n&&ct(o,1)):(o=vt(t),o.c(),ct(o,1),o.m(e.parentNode,e)):o&&(rt(),it(o,1,1,(()=>{o=null})),lt())},i(t){n||(ct(o),n=!0)},o(t){it(o),n=!1},d(t){o&&o.d(t),t&&L(e)}}}const kt="svelte-lazy-placeholder";function _t(t,e,n){let{placeholder:o=null}=e,{placeholderProps:r=null}=e;return t.$$set=t=>{"placeholder"in t&&n(0,o=t.placeholder),"placeholderProps"in t&&n(1,r=t.placeholderProps)},[o,r]}class Lt extends ht{constructor(t){super(),pt(this,t,_t,xt,i,{placeholder:0,placeholderProps:1})}}function Et(t){let e,n;return e=new Lt({props:{placeholder:t[1],placeholderProps:t[2]}}),{c(){ft(e.$$.fragment)},m(t,o){gt(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.placeholder=t[1]),4&n&&(o.placeholderProps=t[2]),e.$set(o)},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function zt(t){let e,n,o,r,l;const c=t[15].default,i=a(c,t,t[14],null),s=i||function(t){let e;return{c(){e=S("Lazy load content")},m(t,n){_(t,e,n)},d(t){t&&L(e)}}}();let u=!t[3]&&t[1]&&Bt(t);return{c(){e=z("div"),s&&s.c(),o=P(),u&&u.c(),r=j(),M(e,"class",Pt),M(e,"style",t[5])},m(t,n){_(t,e,n),s&&s.m(e,null),_(t,o,n),u&&u.m(t,n),_(t,r,n),l=!0},p(n,o){t=n,i&&i.p&&(!l||16384&o)&&g(i,c,t,t[14],l?f(c,t[14],o,null):m(t[14]),null),(!l||32&o)&&M(e,"style",t[5]),!t[3]&&t[1]?u?(u.p(t,o),10&o&&ct(u,1)):(u=Bt(t),u.c(),ct(u,1),u.m(r.parentNode,r)):u&&(rt(),it(u,1,1,(()=>{u=null})),lt())},i(o){l||(ct(s,o),n||Q((()=>{n=ut(e,yt,t[0]||{}),n.start()})),ct(u),l=!0)},o(t){it(s,t),it(u),l=!1},d(t){t&&L(e),s&&s.d(t),t&&L(o),u&&u.d(t),t&&L(r)}}}function Bt(t){let e,n;return e=new Lt({props:{placeholder:t[1],placeholderProps:t[2]}}),{c(){ft(e.$$.fragment)},m(t,o){gt(e,t,o),n=!0},p(t,n){const o={};2&n&&(o.placeholder=t[1]),4&n&&(o.placeholderProps=t[2]),e.$set(o)},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function St(e){let n,o,r,l,i,s;const u=[zt,Et],a=[];function d(t,e){return t[4]?0:t[1]?1:-1}return~(o=d(e))&&(r=a[o]=u[o](e)),{c(){n=z("div"),r&&r.c(),M(n,"class",e[6]),W(n,"height",e[7])},m(r,u){var d;_(r,n,u),~o&&a[o].m(n,null),l=!0,i||(d=e[8].call(null,n),s=d&&c(d.destroy)?d.destroy:t,i=!0)},p(t,[e]){let l=o;o=d(t),o===l?~o&&a[o].p(t,e):(r&&(rt(),it(a[l],1,1,(()=>{a[l]=null})),lt()),~o?(r=a[o],r?r.p(t,e):(r=a[o]=u[o](t),r.c()),ct(r,1),r.m(n,null)):r=null)},i(t){l||(ct(r),l=!0)},o(t){it(r),l=!1},d(t){t&&L(n),~o&&a[o].d(),i=!1,s()}}}const Pt="svelte-lazy-content";function jt(t){document.removeEventListener("scroll",t,!0),window.removeEventListener("resize",t)}function It(t,e,n){let o,{$$slots:r={},$$scope:l}=e,{height:c=0}=e,{offset:i=150}=e,{fadeOption:s={delay:0,duration:400}}=e,{resetHeightDelay:u=0}=e,{onload:a=null}=e,{placeholder:d=null}=e,{placeholderProps:f=null}=e,{class:g=""}=e;const m="svelte-lazy"+(g?" "+g:""),$=y();let p=!1,h=!0;function y(){return"number"==typeof c?c+"px":c}return t.$$set=t=>{"height"in t&&n(9,c=t.height),"offset"in t&&n(10,i=t.offset),"fadeOption"in t&&n(0,s=t.fadeOption),"resetHeightDelay"in t&&n(11,u=t.resetHeightDelay),"onload"in t&&n(12,a=t.onload),"placeholder"in t&&n(1,d=t.placeholder),"placeholderProps"in t&&n(2,f=t.placeholderProps),"class"in t&&n(13,g=t.class),"$$scope"in t&&n(14,l=t.$$scope)},t.$$.update=()=>{8&t.$$.dirty&&n(5,o=h?"":"display: none")},[s,d,f,h,p,o,m,$,function(t){!function(t){c&&(t.style.height=y())}(t);const e=function(t,e,n){let o,r,l,c=null,i=0;n||(n={});const s=function(){i=!1===n.leading?0:new Date,c=null,l=t.apply(o,r),c||(o=r=null)};return function(u){const a=new Date;i||!1!==n.leading||(i=a);const d=e-(a-i);return o=this,r=arguments,d<=0||d>e?(c&&(clearTimeout(c),c=null),i=a,l=t.apply(o,r),c||(o=r=null)):c||!1===n.trailing||(c=setTimeout(s,d)),l}}((o=>{const r=t.getBoundingClientRect().top,l=function(t){return t&&t.target&&t.target.getBoundingClientRect?t.target.getBoundingClientRect().bottom:window.innerHeight}(o)+i;r<=l&&(n(4,p=!0),function(t){setTimeout((()=>{const e=function(t){const e=t.querySelector("img");if(!e)return!1;if(!e.complete)return n(3,h=!1),t.addEventListener("load",(()=>{n(3,h=!0),t.style.height="auto"}),{capture:!0,once:!0}),t.addEventListener("error",(()=>{n(3,h=!0)}),{capture:!0,once:!0}),!0;if(0===e.naturalHeight)return!0;return!1}(t);e||(t.style.height="auto")}),u)}(t),a&&a(t),jt(e))}),200);var o;return o=e,document.addEventListener("scroll",o,!0),window.addEventListener("resize",o),setTimeout((()=>{e()})),{destroy:()=>{jt(e)}}},c,i,u,a,g,l,r]}class Mt extends ht{constructor(t){super(),pt(this,t,It,St,i,{height:9,offset:10,fadeOption:0,resetHeightDelay:11,onload:12,placeholder:1,placeholderProps:2,class:13})}}function Ct(t,e,n){const o=t.slice();return o[1]=e[n],o}function Wt(e){let n,o;return{c(){n=z("img"),u(n.src,o="assets/pictures/"+e[1].title+"/IMG_1.jpg")||M(n,"src",o),M(n,"alt","Please wait ... ")},m(t,e){_(t,n,e)},p:t,d(t){t&&L(n)}}}function At(t){let e,n,o,r,l,c,i,s,u,a,d,f,g,m,$,p=t[1].title+"",h=t[1].class+"",y=t[1].description+"";return n=new Mt({props:{height:300,$$slots:{default:[Wt]},$$scope:{ctx:t}}}),{c(){e=z("div"),ft(n.$$.fragment),o=P(),r=z("a"),l=z("h2"),c=S(p),s=P(),u=z("p"),a=S(h),d=P(),f=z("p"),g=S(y),m=P(),M(r,"href",i="#"+t[1].title),M(e,"class","item")},m(t,i){_(t,e,i),gt(n,e,null),b(e,o),b(e,r),b(r,l),b(l,c),b(e,s),b(e,u),b(u,a),b(e,d),b(e,f),b(f,g),b(e,m),$=!0},p(t,e){const o={};16&e&&(o.$$scope={dirty:e,ctx:t}),n.$set(o)},i(t){$||(ct(n.$$.fragment,t),$=!0)},o(t){it(n.$$.fragment,t),$=!1},d(t){t&&L(e),mt(n)}}}function Dt(t){let e,n,o,r,l,c=t[0],i=[];for(let e=0;e<c.length;e+=1)i[e]=At(Ct(t,c,e));const s=t=>it(i[t],1,1,(()=>{i[t]=null}));return{c(){e=z("div"),n=z("div"),n.innerHTML='<img src="assets/landing/landing.jpg" alt="Landing"/> \n    <div class="overlay"></div> \n    <h1 class="big-title">Willkommen zur Kunstgallerie</h1> \n    <h1 class="big-title">des Birklehof!</h1> \n    <h1 class="small-title">Willkommen zur Kunstgallerie des Birklehof!</h1>',o=P(),r=z("div");for(let t=0;t<i.length;t+=1)i[t].c();M(n,"class","landing"),M(r,"class","masonry")},m(t,c){_(t,e,c),b(e,n),b(e,o),b(e,r);for(let t=0;t<i.length;t+=1)i[t].m(r,null);l=!0},p(t,[e]){if(1&e){let n;for(c=t[0],n=0;n<c.length;n+=1){const o=Ct(t,c,n);i[n]?(i[n].p(o,e),ct(i[n],1)):(i[n]=At(o),i[n].c(),ct(i[n],1),i[n].m(r,null))}for(rt(),n=c.length;n<i.length;n+=1)s(n);lt()}},i(t){if(!l){for(let t=0;t<c.length;t+=1)ct(i[t]);l=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)it(i[t]);l=!1},d(t){t&&L(e),E(i,t)}}}function Ht(t){return[[{title:"Waldboden",class:"7. Klasse Dez 2021",description:"Wir gingen gemeinsam in den Wald um Skizzen von den Dingen, die auf dem Waldboden zu sehen sind, zu erfassen. \n\nAusgehend von diesen Zeichnungen haben die SchülerInnen begonnen Schicht für Schicht die Waldböden zu malen."},{title:"Landschaften",class:"Q2 Feb 2022",description:"Raumtiefe entsteht durch Landschaftsebenen, Proportionen und die Luftperspektive (Verblassen und Verblauen von in der Ferne liegenden Bildelementen). In dieser praktischen Arbeit wurden typische Schwarzwald Landschaften umgesetzt. "}]]}class Rt extends ht{constructor(t){super(),pt(this,t,Ht,Dt,i,{})}}class Tt extends ht{constructor(t){super(),pt(this,t,null,null,i,{})}}function Nt(t){let e,n;return{c(){e=B("title"),n=S(t[0])},m(t,o){_(t,e,o),b(e,n)},p(t,e){1&e&&C(n,t[0])},d(t){t&&L(e)}}}function Ot(t){let e,n,o,r=t[0]&&Nt(t);const l=t[3].default,c=a(l,t,t[2],null);return{c(){e=B("svg"),r&&r.c(),n=j(),c&&c.c(),M(e,"xmlns","http://www.w3.org/2000/svg"),M(e,"viewBox",t[1]),M(e,"class","svelte-c8tyih")},m(t,l){_(t,e,l),r&&r.m(e,null),b(e,n),c&&c.m(e,null),o=!0},p(t,[i]){t[0]?r?r.p(t,i):(r=Nt(t),r.c(),r.m(e,n)):r&&(r.d(1),r=null),c&&c.p&&(!o||4&i)&&g(c,l,t,t[2],o?f(l,t[2],i,null):m(t[2]),null),(!o||2&i)&&M(e,"viewBox",t[1])},i(t){o||(ct(c,t),o=!0)},o(t){it(c,t),o=!1},d(t){t&&L(e),r&&r.d(),c&&c.d(t)}}}function Ft(t,e,n){let{$$slots:o={},$$scope:r}=e,{title:l=null}=e,{viewBox:c}=e;return t.$$set=t=>{"title"in t&&n(0,l=t.title),"viewBox"in t&&n(1,c=t.viewBox),"$$scope"in t&&n(2,r=t.$$scope)},[l,c,r,o]}class Gt extends ht{constructor(t){super(),pt(this,t,Ft,Ot,i,{title:0,viewBox:1})}}function Vt(t){let e;return{c(){e=B("path"),M(e,"d","M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z")},m(t,n){_(t,e,n)},d(t){t&&L(e)}}}function Zt(t){let e,o;const r=[{viewBox:"0 0 512 512"},t[0]];let l={$$slots:{default:[Vt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)l=n(l,r[t]);return e=new Gt({props:l}),{c(){ft(e.$$.fragment)},m(t,n){gt(e,t,n),o=!0},p(t,[n]){const o=1&n?at(r,[r[0],dt(t[0])]):{};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){it(e.$$.fragment,t),o=!1},d(t){mt(e,t)}}}function qt(t,e,o){return t.$$set=t=>{o(0,e=n(n({},e),$(t)))},[e=$(e)]}class Kt extends ht{constructor(t){super(),pt(this,t,qt,Zt,i,{})}}function Qt(t){let e;return{c(){e=B("path"),M(e,"d","M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z")},m(t,n){_(t,e,n)},d(t){t&&L(e)}}}function Jt(t){let e,o;const r=[{viewBox:"0 0 512 512"},t[0]];let l={$$slots:{default:[Qt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)l=n(l,r[t]);return e=new Gt({props:l}),{c(){ft(e.$$.fragment)},m(t,n){gt(e,t,n),o=!0},p(t,[n]){const o=1&n?at(r,[r[0],dt(t[0])]):{};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){it(e.$$.fragment,t),o=!1},d(t){mt(e,t)}}}function Ut(t,e,o){return t.$$set=t=>{o(0,e=n(n({},e),$(t)))},[e=$(e)]}class Xt extends ht{constructor(t){super(),pt(this,t,Ut,Jt,i,{})}}function Yt(t){let e;return{c(){e=B("path"),M(e,"d","M278.6 256l68.2-68.2c6.2-6.2 6.2-16.4 0-22.6-6.2-6.2-16.4-6.2-22.6 0L256 233.4l-68.2-68.2c-6.2-6.2-16.4-6.2-22.6 0-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3l68.2 68.2-68.2 68.2c-3.1 3.1-4.7 7.2-4.7 11.3 0 4.1 1.6 8.2 4.7 11.3 6.2 6.2 16.4 6.2 22.6 0l68.2-68.2 68.2 68.2c6.2 6.2 16.4 6.2 22.6 0 6.2-6.2 6.2-16.4 0-22.6L278.6 256z")},m(t,n){_(t,e,n)},d(t){t&&L(e)}}}function te(t){let e,o;const r=[{viewBox:"0 0 512 512"},t[0]];let l={$$slots:{default:[Yt]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)l=n(l,r[t]);return e=new Gt({props:l}),{c(){ft(e.$$.fragment)},m(t,n){gt(e,t,n),o=!0},p(t,[n]){const o=1&n?at(r,[r[0],dt(t[0])]):{};2&n&&(o.$$scope={dirty:n,ctx:t}),e.$set(o)},i(t){o||(ct(e.$$.fragment,t),o=!0)},o(t){it(e.$$.fragment,t),o=!1},d(t){mt(e,t)}}}function ee(t,e,o){return t.$$set=t=>{o(0,e=n(n({},e),$(t)))},[e=$(e)]}class ne extends ht{constructor(t){super(),pt(this,t,ee,te,i,{})}}function oe(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function re(e){let n,o;return{c(){n=z("img"),u(n.src,o=ie+(e[7]+1).toString()+".jpg")||M(n,"src",o),M(n,"alt","Please wait ... ")},m(t,e){_(t,n,e)},p:t,d(t){t&&L(n)}}}function le(t){let e,n,o,r,l,c;function i(){return t[3](t[7])}return n=new Mt({props:{height:300,$$slots:{default:[re]},$$scope:{ctx:t}}}),{c(){e=z("div"),ft(n.$$.fragment),o=P(),M(e,"class","item clickable")},m(t,s){_(t,e,s),gt(n,e,null),b(e,o),r=!0,l||(c=I(e,"click",i),l=!0)},p(e,o){t=e;const r={};256&o&&(r.$$scope={dirty:o,ctx:t}),n.$set(r)},i(t){r||(ct(n.$$.fragment,t),r=!0)},o(t){it(n.$$.fragment,t),r=!1},d(t){t&&L(e),mt(n),l=!1,c()}}}function ce(t){let e,n,o,r,c,i,s,a,d,f,g,m,$,p,h,y,v,w,x,k,B,S,j,C,W,A,D,H,R,T,N,O,F,G,V;x=new Kt({}),A=new Xt({}),T=new ne({});let Z=Array(se),q=[];for(let e=0;e<Z.length;e+=1)q[e]=le(oe(t,Z,e));const K=t=>it(q[t],1,1,(()=>{q[t]=null}));return{c(){e=z("div"),n=z("div"),o=z("img"),c=P(),i=z("div"),s=P(),a=z("h1"),a.textContent="Waldboden",d=P(),f=z("h1"),f.textContent="Waldboden",g=P(),m=z("p"),m.textContent="Wir gingen gemeinsam in den Wald um Skizzen von den Dingen, die auf dem Waldboden zu sehen sind, zu erfassen. Ausgehend von diesen Zeichnungen haben die SchülerInnen begonnen Schicht für Schicht die Waldböden zu malen.",$=P(),p=z("div"),p.innerHTML='<a href="#Home" class="back-link"><p>Zurück zur Übersicht</p></a>',h=P(),y=z("div"),v=z("div"),w=z("div"),ft(x.$$.fragment),k=P(),B=z("img"),j=P(),C=z("div"),W=z("div"),ft(A.$$.fragment),D=P(),H=z("div"),R=z("div"),ft(T.$$.fragment),N=P(),O=z("div");for(let t=0;t<q.length;t+=1)q[t].c();u(o.src,r=ie+(Math.floor(Math.random()*(se-1))+1).toString()+".jpg")||M(o,"src",r),M(o,"alt","Landing"),M(i,"class","overlay"),M(a,"class","big-title"),M(f,"class","small-title"),M(m,"class","description"),M(n,"class","landing"),M(w,"class","icon"),M(v,"id","next_left"),M(v,"class","clickable"),M(B,"id","focus_image"),u(B.src,S="")||M(B,"src",""),M(B,"alt","Please wait ... "),M(W,"class","icon"),M(C,"id","next_right"),M(C,"class","clickable"),M(R,"class","icon"),M(H,"id","close"),M(H,"class","clickable"),M(y,"id","overlay"),M(O,"class","masonry")},m(r,l){_(r,e,l),b(e,n),b(n,o),b(n,c),b(n,i),b(n,s),b(n,a),b(n,d),b(n,f),b(n,g),b(n,m),b(n,$),b(n,p),b(e,h),b(e,y),b(y,v),b(v,w),gt(x,w,null),b(y,k),b(y,B),b(y,j),b(y,C),b(C,W),gt(A,W,null),b(y,D),b(y,H),b(H,R),gt(T,R,null),b(e,N),b(e,O);for(let t=0;t<q.length;t+=1)q[t].m(O,null);F=!0,G||(V=[I(v,"click",t[1]),I(C,"click",t[2]),I(H,"click",ue)],G=!0)},p(t,[e]){if(1&e){let n;for(Z=Array(se),n=0;n<Z.length;n+=1){const o=oe(t,Z,n);q[n]?(q[n].p(o,e),ct(q[n],1)):(q[n]=le(o),q[n].c(),ct(q[n],1),q[n].m(O,null))}for(rt(),n=Z.length;n<q.length;n+=1)K(n);lt()}},i(t){if(!F){ct(x.$$.fragment,t),ct(A.$$.fragment,t),ct(T.$$.fragment,t);for(let t=0;t<Z.length;t+=1)ct(q[t]);F=!0}},o(t){it(x.$$.fragment,t),it(A.$$.fragment,t),it(T.$$.fragment,t),q=q.filter(Boolean);for(let t=0;t<q.length;t+=1)it(q[t]);F=!1},d(t){t&&L(e),mt(x),mt(A),mt(T),E(q,t),G=!1,l(V)}}}const ie="assets/pictures/Waldboden/IMG_",se=9;function ue(){document.getElementById("overlay").style.display="none"}function ae(t){O((()=>window.scrollTo(0,0)));let e=0;function n(t){e=t+1,document.getElementById("focus_image").src=ie+e.toString()+".jpg",document.getElementById("overlay").style.display="block"}return[n,function(){e-=1,e<1&&(e=se),document.getElementById("focus_image").src=ie+e.toString()+".jpg"},function(){e+=1,e>se&&(e=1),document.getElementById("focus_image").src=ie+e.toString()+".jpg"},t=>{n(t)}]}class de extends ht{constructor(t){super(),pt(this,t,ae,ce,i,{})}}function fe(t,e,n){const o=t.slice();return o[5]=e[n],o[7]=n,o}function ge(e){let n,o;return{c(){n=z("img"),u(n.src,o=pe+(e[7]+1).toString()+".jpg")||M(n,"src",o),M(n,"alt","Please wait ... ")},m(t,e){_(t,n,e)},p:t,d(t){t&&L(n)}}}function me(t){let e,n,o,r,l,c;function i(){return t[3](t[7])}return n=new Mt({props:{height:300,$$slots:{default:[ge]},$$scope:{ctx:t}}}),{c(){e=z("div"),ft(n.$$.fragment),o=P(),M(e,"class","item clickable")},m(t,s){_(t,e,s),gt(n,e,null),b(e,o),r=!0,l||(c=I(e,"click",i),l=!0)},p(e,o){t=e;const r={};256&o&&(r.$$scope={dirty:o,ctx:t}),n.$set(r)},i(t){r||(ct(n.$$.fragment,t),r=!0)},o(t){it(n.$$.fragment,t),r=!1},d(t){t&&L(e),mt(n),l=!1,c()}}}function $e(t){let e,n,o,r,c,i,s,a,d,f,g,m,$,p,h,y,v,w,x,k,B,S,j,C,W,A,D,H,R,T,N,O,F,G,V;x=new Kt({}),A=new Xt({}),T=new ne({});let Z=Array(he),q=[];for(let e=0;e<Z.length;e+=1)q[e]=me(fe(t,Z,e));const K=t=>it(q[t],1,1,(()=>{q[t]=null}));return{c(){e=z("div"),n=z("div"),o=z("img"),c=P(),i=z("div"),s=P(),a=z("h1"),a.textContent="Landschaften",d=P(),f=z("h1"),f.textContent="Landschaften",g=P(),m=z("p"),m.textContent="Raumtiefe entsteht durch Landschaftsebenen, Proportionen und die Luftperspektive (Verblassen und Verblauen von in der Ferne liegenden Bildelementen). In dieser praktischen Arbeit wurden typische Schwarzwald Landschaften umgesetzt.",$=P(),p=z("div"),p.innerHTML='<a href="#Home" class="back-link"><p>Zurück zur Übersicht</p></a>',h=P(),y=z("div"),v=z("div"),w=z("div"),ft(x.$$.fragment),k=P(),B=z("img"),j=P(),C=z("div"),W=z("div"),ft(A.$$.fragment),D=P(),H=z("div"),R=z("div"),ft(T.$$.fragment),N=P(),O=z("div");for(let t=0;t<q.length;t+=1)q[t].c();u(o.src,r=pe+(Math.floor(Math.random()*(he-1))+1).toString()+".jpg")||M(o,"src",r),M(o,"alt","Landing"),M(i,"class","overlay"),M(a,"class","big-title"),M(f,"class","small-title"),M(m,"class","description"),M(n,"class","landing"),M(w,"class","icon"),M(v,"id","next_left"),M(v,"class","clickable"),M(B,"id","focus_image"),u(B.src,S="")||M(B,"src",""),M(B,"alt","Please wait ... "),M(W,"class","icon"),M(C,"id","next_right"),M(C,"class","clickable"),M(R,"class","icon"),M(H,"id","close"),M(H,"class","clickable"),M(y,"id","overlay"),M(O,"class","masonry")},m(r,l){_(r,e,l),b(e,n),b(n,o),b(n,c),b(n,i),b(n,s),b(n,a),b(n,d),b(n,f),b(n,g),b(n,m),b(n,$),b(n,p),b(e,h),b(e,y),b(y,v),b(v,w),gt(x,w,null),b(y,k),b(y,B),b(y,j),b(y,C),b(C,W),gt(A,W,null),b(y,D),b(y,H),b(H,R),gt(T,R,null),b(e,N),b(e,O);for(let t=0;t<q.length;t+=1)q[t].m(O,null);F=!0,G||(V=[I(v,"click",t[1]),I(C,"click",t[2]),I(H,"click",ye)],G=!0)},p(t,[e]){if(1&e){let n;for(Z=Array(he),n=0;n<Z.length;n+=1){const o=fe(t,Z,n);q[n]?(q[n].p(o,e),ct(q[n],1)):(q[n]=me(o),q[n].c(),ct(q[n],1),q[n].m(O,null))}for(rt(),n=Z.length;n<q.length;n+=1)K(n);lt()}},i(t){if(!F){ct(x.$$.fragment,t),ct(A.$$.fragment,t),ct(T.$$.fragment,t);for(let t=0;t<Z.length;t+=1)ct(q[t]);F=!0}},o(t){it(x.$$.fragment,t),it(A.$$.fragment,t),it(T.$$.fragment,t),q=q.filter(Boolean);for(let t=0;t<q.length;t+=1)it(q[t]);F=!1},d(t){t&&L(e),mt(x),mt(A),mt(T),E(q,t),G=!1,l(V)}}}const pe="assets/pictures/Landschaften/IMG_",he=9;function ye(){document.getElementById("overlay").style.display="none"}function ve(t){O((()=>window.scrollTo(0,0)));let e=0;function n(t){e=t+1,document.getElementById("focus_image").src=pe+e.toString()+".jpg",document.getElementById("overlay").style.display="block"}return[n,function(){e-=1,e<1&&(e=he),document.getElementById("focus_image").src=pe+e.toString()+".jpg"},function(){e+=1,e>he&&(e=1),document.getElementById("focus_image").src=pe+e.toString()+".jpg"},t=>{n(t)}]}class we extends ht{constructor(t){super(),pt(this,t,ve,$e,i,{})}}function be(t){let e,n;return e=new Tt({}),{c(){ft(e.$$.fragment)},m(t,o){gt(e,t,o),n=!0},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function xe(t){let e,n;return e=new we({}),{c(){ft(e.$$.fragment)},m(t,o){gt(e,t,o),n=!0},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function ke(t){let e,n;return e=new de({}),{c(){ft(e.$$.fragment)},m(t,o){gt(e,t,o),n=!0},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function _e(t){let e,n;return e=new Rt({}),{c(){ft(e.$$.fragment)},m(t,o){gt(e,t,o),n=!0},i(t){n||(ct(e.$$.fragment,t),n=!0)},o(t){it(e.$$.fragment,t),n=!1},d(t){mt(e,t)}}}function Le(t){let e,n,o,r,l,c,i,s,a,d;const f=[_e,ke,xe,be],g=[];function m(t,e){return"#Home"===t[0]||""===t[0]?0:"#Waldboden"===t[0]?1:"#Landschaften"===t[0]?2:3}return c=m(t),i=g[c]=f[c](t),{c(){e=z("main"),n=z("div"),o=z("img"),l=P(),i.c(),M(o,"alt","Birklehof | Privates Internat & Gymnasium"),W(o,"cursor","pointer"),M(o,"id","logo"),u(o.src,r="./assets/logo.png")||M(o,"src","./assets/logo.png"),M(n,"class","toolbar")},m(r,i){_(r,e,i),b(e,n),b(n,o),b(e,l),g[c].m(e,null),s=!0,a||(d=I(o,"click",t[1]),a=!0)},p(t,[n]){let o=c;c=m(t),c!==o&&(rt(),it(g[o],1,1,(()=>{g[o]=null})),lt(),i=g[c],i||(i=g[c]=f[c](t),i.c()),ct(i,1),i.m(e,null))},i(t){s||(ct(i),s=!0)},o(t){it(i),s=!1},d(t){t&&L(e),g[c].d(),a=!1,d()}}}function Ee(t,e,n){let o=document.location.hash;window.onpopstate=function(t){n(0,o=document.location.hash)};return[o,()=>{return t="https://www.birklehof.de/",void window.open(t,"_blank").focus();var t}]}return new class extends ht{constructor(t){super(),pt(this,t,Ee,Le,i,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
