var app=function(){"use strict";function t(){}function n(t){return t()}function e(){return Object.create(null)}function r(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function i(t,n){t.appendChild(n)}function l(t,n,e){t.insertBefore(n,e||null)}function s(t){t.parentNode.removeChild(t)}function u(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function a(t){return document.createElement(t)}function f(){return t=" ",document.createTextNode(t);var t}function d(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}let g;function p(t){g=t}const m=[],h=[],$=[],y=[],_=Promise.resolve();let b=!1;function x(t){$.push(t)}const v=new Set;let k=0;function w(){const t=g;do{for(;k<m.length;){const t=m[k];k++,p(t),j(t.$$)}for(p(null),m.length=0,k=0;h.length;)h.pop()();for(let t=0;t<$.length;t+=1){const n=$[t];v.has(n)||(v.add(n),n())}$.length=0}while(m.length);for(;y.length;)y.pop()();b=!1,v.clear(),p(t)}function j(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(x)}}const A=new Set;function E(t,n){-1===t.$$.dirty[0]&&(m.push(t),b||(b=!0,_.then(w)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function L(c,i,l,u,a,f,d,m=[-1]){const h=g;p(c);const $=c.$$={fragment:null,ctx:null,props:f,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(i.context||(h?h.$$.context:[])),callbacks:e(),dirty:m,skip_bound:!1,root:i.target||h.$$.root};d&&d($.root);let y=!1;if($.ctx=l?l(c,i.props||{},((t,n,...e)=>{const r=e.length?e[0]:n;return $.ctx&&a($.ctx[t],$.ctx[t]=r)&&(!$.skip_bound&&$.bound[t]&&$.bound[t](r),y&&E(c,t)),n})):[],$.update(),y=!0,r($.before_update),$.fragment=!!u&&u($.ctx),i.target){if(i.hydrate){const t=function(t){return Array.from(t.childNodes)}(i.target);$.fragment&&$.fragment.l(t),t.forEach(s)}else $.fragment&&$.fragment.c();i.intro&&((_=c.$$.fragment)&&_.i&&(A.delete(_),_.i(b))),function(t,e,c,i){const{fragment:l,on_mount:s,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,c),i||x((()=>{const e=s.map(n).filter(o);u?u.push(...e):r(e),t.$$.on_mount=[]})),a.forEach(x)}(c,i.target,i.anchor,i.customElement),w()}var _,b;p(h)}function M(t,n,e){const r=t.slice();return r[0]=n[e],r[2]=e,r}function S(t,n,e){const r=t.slice();return r[0]=n[e],r[2]=e,r}function T(t){let n;return{c(){n=a("div"),n.innerHTML=`<img src="${"assets/pictures/picture_"+(t[2]+1).toString()+".jpg"}" alt="Please wait ... "/>`,d(n,"class","item")},m(t,e){l(t,n,e)},d(t){t&&s(n)}}}function H(t){let n;return{c(){n=a("div"),n.innerHTML=`<img src="${"assets/pictures/picture_"+(t[2]+1).toString()+".jpg"}" alt="Please wait ... "/> \n\t\t\t`,d(n,"class","item")},m(t,e){l(t,n,e)},d(t){t&&s(n)}}}function N(n){let e,r,o,c,g,p=Array(11),m=[];for(let t=0;t<p.length;t+=1)m[t]=T(S(n,p,t));let h=Array(6),$=[];for(let t=0;t<h.length;t+=1)$[t]=H(M(n,h,t));return{c(){e=a("main"),r=a("div"),r.innerHTML='<img src="assets/landing/landing.jpg" alt="Landing"/> \n\t\t<h1>Willkommen zur Kunst Gallerie des Birklehof!</h1>',o=f(),c=a("div");for(let t=0;t<m.length;t+=1)m[t].c();g=f();for(let t=0;t<$.length;t+=1)$[t].c();d(r,"class","landing"),d(c,"class","masonry")},m(t,n){l(t,e,n),i(e,r),i(e,o),i(e,c);for(let t=0;t<m.length;t+=1)m[t].m(c,null);i(c,g);for(let t=0;t<$.length;t+=1)$[t].m(c,null)},p:t,i:t,o:t,d(t){t&&s(e),u(m,t),u($,t)}}}return new class extends class{$destroy(){!function(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),L(this,t,null,N,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
