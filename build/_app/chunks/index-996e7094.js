function O(){}const rt=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function H(){return Object.create(null)}function $(t){t.forEach(K)}function W(t){return typeof t=="function"}function Rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let N;function qt(t,e){return N||(N=document.createElement("a")),N.href=e,t===N.href}function ct(t){return Object.keys(t).length===0}function Pt(t,e,n,r){if(t){const l=Q(t,e,n,r);return t[0](l)}}function Q(t,e,n,r){return t[1]&&r?lt(n.ctx.slice(),t[1](r(e))):n.ctx}function zt(t,e,n,r){if(t[2]&&r){const l=t[2](r(n));if(e.dirty===void 0)return l;if(typeof l=="object"){const s=[],i=Math.max(e.dirty.length,l.length);for(let o=0;o<i;o+=1)s[o]=e.dirty[o]|l[o];return s}return e.dirty|l}return e.dirty}function Bt(t,e,n,r,l,s){if(l){const i=Q(e,n,r,s);t.p(i,l)}}function Lt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}const U=typeof window!="undefined";let ot=U?()=>window.performance.now():()=>Date.now(),L=U?t=>requestAnimationFrame(t):O;const x=new Set;function V(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&L(V)}function st(t){let e;return x.size===0&&L(V),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let R=!1;function ut(){R=!0}function at(){R=!1}function ft(t,e,n,r){for(;t<e;){const l=t+(e-t>>1);n(l)<=r?t=l+1:e=l}return t}function _t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let u=0;u<e.length;u++){const _=e[u];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let l=0;for(let c=0;c<e.length;c++){const u=e[c].claim_order,_=(l>0&&e[n[l]].claim_order<=u?l+1:ft(1,l,a=>e[n[a]].claim_order,u))-1;r[c]=n[_]+1;const f=_+1;n[f]=c,l=Math.max(f,l)}const s=[],i=[];let o=e.length-1;for(let c=n[l]+1;c!=0;c=r[c-1]){for(s.push(e[c-1]);o>=c;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);s.reverse(),i.sort((c,u)=>c.claim_order-u.claim_order);for(let c=0,u=0;c<i.length;c++){for(;u<s.length&&i[c].claim_order>=s[u].claim_order;)u++;const _=u<s.length?s[u]:null;t.insertBefore(i[c],_)}}function dt(t,e){t.appendChild(e)}function X(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function ht(t){const e=Y("style");return mt(X(t),e),e.sheet}function mt(t,e){dt(t.head||t,e)}function pt(t,e){if(R){for(_t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Tt(t,e,n){R&&!n?pt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function yt(t){t.parentNode.removeChild(t)}function Y(t){return document.createElement(t)}function T(t){return document.createTextNode(t)}function Ft(){return T(" ")}function Ht(){return T("")}function It(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function Gt(t){return function(e){return e.preventDefault(),t.call(this,e)}}function Jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function gt(t){return Array.from(t.childNodes)}function xt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function Z(t,e,n,r,l=!1){xt(t);const s=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const c=n(o);return c===void 0?t.splice(i,1):t[i]=c,l||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const c=n(o);return c===void 0?t.splice(i,1):t[i]=c,l?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function $t(t,e,n,r){return Z(t,l=>l.nodeName===e,l=>{const s=[];for(let i=0;i<l.attributes.length;i++){const o=l.attributes[i];n[o.name]||s.push(o.name)}s.forEach(i=>l.removeAttribute(i))},()=>r(e))}function Kt(t,e,n){return $t(t,e,n,Y)}function bt(t,e){return Z(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>T(e),!0)}function Wt(t){return bt(t," ")}function Qt(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Ut(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function wt(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}const S=new Map;let M=0;function vt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Et(t,e){const n={stylesheet:ht(e),rules:{}};return S.set(t,n),n}function I(t,e,n,r,l,s,i,o=0){const c=16.666/r;let u=`{
`;for(let p=0;p<=1;p+=c){const g=e+(n-e)*s(p);u+=p*100+`%{${i(g,1-g)}}
`}const _=u+`100% {${i(n,1-n)}}
}`,f=`__svelte_${vt(_)}_${o}`,a=X(t),{stylesheet:d,rules:h}=S.get(a)||Et(a,t);h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${_}`,d.cssRules.length));const y=t.style.animation||"";return t.style.animation=`${y?`${y}, `:""}${f} ${r}ms linear ${l}ms 1 both`,M+=1,f}function kt(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?s=>s.indexOf(e)<0:s=>s.indexOf("__svelte")===-1),l=n.length-r.length;l&&(t.style.animation=r.join(", "),M-=l,M||Nt())}function Nt(){L(()=>{M||(S.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),S.clear())})}let E;function v(t){E=t}function F(){if(!E)throw new Error("Function called outside component initialization");return E}function Vt(t){F().$$.on_mount.push(t)}function Xt(t){F().$$.after_update.push(t)}function Yt(t,e){F().$$.context.set(t,e)}const w=[],G=[],A=[],J=[],tt=Promise.resolve();let B=!1;function et(){B||(B=!0,tt.then(nt))}function Zt(){return et(),tt}function D(t){A.push(t)}const P=new Set;let j=0;function nt(){const t=E;do{for(;j<w.length;){const e=w[j];j++,v(e),jt(e.$$)}for(v(null),w.length=0,j=0;G.length;)G.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];P.has(n)||(P.add(n),n())}A.length=0}while(w.length);for(;J.length;)J.pop()();B=!1,P.clear(),v(t)}function jt(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(D)}}let b;function At(){return b||(b=Promise.resolve(),b.then(()=>{b=null})),b}function z(t,e,n){t.dispatchEvent(wt(`${e?"intro":"outro"}${n}`))}const C=new Set;let m;function te(){m={r:0,c:[],p:m}}function ee(){m.r||$(m.c),m=m.p}function Ct(t,e){t&&t.i&&(C.delete(t),t.i(e))}function ne(t,e,n,r){if(t&&t.o){if(C.has(t))return;C.add(t),m.c.push(()=>{C.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const St={duration:0};function ie(t,e,n,r){let l=e(t,n),s=r?0:1,i=null,o=null,c=null;function u(){c&&kt(t,c)}function _(a,d){const h=a.b-s;return d*=Math.abs(h),{a:s,b:a.b,d:h,duration:d,start:a.start,end:a.start+d,group:a.group}}function f(a){const{delay:d=0,duration:h=300,easing:y=rt,tick:p=O,css:g}=l||St,q={start:ot()+d,b:a};a||(q.group=m,m.r+=1),i||o?o=q:(g&&(u(),c=I(t,s,a,h,d,y,g)),a&&p(0,1),i=_(q,h),D(()=>z(t,a,"start")),st(k=>{if(o&&k>o.start&&(i=_(o,h),o=null,z(t,i.b,"start"),g&&(u(),c=I(t,s,i.b,i.duration,0,y,l.css))),i){if(k>=i.end)p(s=i.b,1-s),z(t,i.b,"end"),o||(i.b?u():--i.group.r||$(i.group.c)),i=null;else if(k>=i.start){const it=k-i.start;s=i.a+i.d*y(it/i.duration),p(s,1-s)}}return!!(i||o)}))}return{run(a){W(l)?At().then(()=>{l=l(),f(a)}):f(a)},end(){u(),i=o=null}}}function re(t,e){const n={},r={},l={$$scope:1};let s=t.length;for(;s--;){const i=t[s],o=e[s];if(o){for(const c in i)c in o||(r[c]=1);for(const c in o)l[c]||(n[c]=o[c],l[c]=1);t[s]=o}else for(const c in i)l[c]=1}for(const i in r)i in n||(n[i]=void 0);return n}function le(t){return typeof t=="object"&&t!==null?t:{}}function ce(t){t&&t.c()}function oe(t,e){t&&t.l(e)}function Mt(t,e,n,r){const{fragment:l,on_mount:s,on_destroy:i,after_update:o}=t.$$;l&&l.m(e,n),r||D(()=>{const c=s.map(K).filter(W);i?i.push(...c):$(c),t.$$.on_mount=[]}),o.forEach(D)}function Dt(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Ot(t,e){t.$$.dirty[0]===-1&&(w.push(t),et(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function se(t,e,n,r,l,s,i,o=[-1]){const c=E;v(t);const u=t.$$={fragment:null,ctx:null,props:s,update:O,not_equal:l,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:H(),dirty:o,skip_bound:!1,root:e.target||c.$$.root};i&&i(u.root);let _=!1;if(u.ctx=n?n(t,e.props||{},(f,a,...d)=>{const h=d.length?d[0]:a;return u.ctx&&l(u.ctx[f],u.ctx[f]=h)&&(!u.skip_bound&&u.bound[f]&&u.bound[f](h),_&&Ot(t,f)),a}):[],u.update(),_=!0,$(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){ut();const f=gt(e.target);u.fragment&&u.fragment.l(f),f.forEach(yt)}else u.fragment&&u.fragment.c();e.intro&&Ct(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),at(),nt()}v(c)}class ue{$destroy(){Dt(this,1),this.$destroy=O}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const l=r.indexOf(n);l!==-1&&r.splice(l,1)}}$set(e){this.$$set&&!ct(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{re as A,le as B,Dt as C,lt as D,Zt as E,Pt as F,Bt as G,Lt as H,zt as I,pt as J,qt as K,It as L,Gt as M,D as N,ie as O,ue as S,gt as a,Jt as b,Kt as c,yt as d,Y as e,Ut as f,Tt as g,bt as h,se as i,Qt as j,Ft as k,Ht as l,Wt as m,O as n,te as o,ne as p,ee as q,Ct as r,Rt as s,T as t,Yt as u,Xt as v,Vt as w,ce as x,oe as y,Mt as z};