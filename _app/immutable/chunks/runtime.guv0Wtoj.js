var Nn=Array.isArray,bn=Array.from,Pn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Wt=Object.getOwnPropertyDescriptors,Fn=Object.prototype,qn=Array.prototype,Xt=Object.getPrototypeOf;const Ln=()=>{};function Mn(t){return t()}function Qt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,wt=4,B=8,st=16,A=32,J=64,tt=128,O=256,K=512,d=1024,D=2048,P=4096,b=8192,F=16384,tn=32768,Tt=65536,Yn=1<<17,nn=1<<19,mt=1<<20,ht=Symbol("$state"),Hn=Symbol("legacy props"),jn=Symbol("");function At(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function gt(t){return!rn(t,this.v)}function en(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function ln(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function sn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Bn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Un(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Vn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Gn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let W=!1;function Kn(){W=!0}const $n=1,Zn=2,zn=4,Jn=8,Wn=16,Xn=1,Qn=2,tr=4,nr=8,rr=16,er=1,lr=2,fn="[",_n="[!",cn="]",Dt={},sr=Symbol();function at(t,n){var r={f:0,v:t,reactions:null,equals:At,version:0};return r}function ar(t){return Rt(at(t))}function vn(t,n=!1){var e;const r=at(t);return n||(r.equals=gt),W&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function ur(t,n=!1){return Rt(vn(t,n))}function Rt(t){return o!==null&&o.f&y&&(m===null?Dn([t]):m.push(t)),t}function or(t,n){return ut(t,Jt(()=>ct(t))),n}function ut(t,n){return o!==null&&_t()&&o.f&(y|st)&&(m===null||!m.includes(t))&&on(),pn(t,n)}function pn(t,n){return t.equals(n)||(t.v,t.v=n,t.version=Vt(),xt(t,D),_t()&&u!==null&&u.f&d&&!(u.f&A)&&(h!==null&&h.includes(t)?(T(u,D),Q(u)):g===null?Rn([t]):g.push(t))),n}function xt(t,n){var r=t.reactions;if(r!==null)for(var e=_t(),l=r.length,s=0;s<l;s++){var a=r[s],i=a.f;i&D||!e&&a===u||(T(a,n),i&(d|O)&&(i&y?xt(a,P):Q(a)))}}function It(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let I=!1;function ir(t){I=t}let w;function M(t){if(t===null)throw It(),Dt;return w=t}function fr(){return M(k(w))}function _r(t){if(I){if(k(w)!==null)throw It(),Dt;w=t}}function cr(t=1){if(I){for(var n=t,r=w;n--;)r=k(r);w=r}}function vr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===fn||r===_n)&&(t+=1)}var e=k(n);n.remove(),n=e}}var dt,St,Ot;function pr(){if(dt===void 0){dt=window;var t=Element.prototype,n=Node.prototype;St=pt(n,"firstChild").get,Ot=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function nt(t=""){return document.createTextNode(t)}function rt(t){return St.call(t)}function k(t){return Ot.call(t)}function hr(t,n){if(!I)return rt(t);var r=rt(w);if(r===null)r=w.appendChild(nt());else if(n&&r.nodeType!==3){var e=nt();return r==null||r.before(e),M(e),e}return M(r),r}function dr(t,n){if(!I){var r=rt(t);return r instanceof Comment&&r.data===""?k(r):r}return w}function Er(t,n=1,r=!1){let e=I?w:t;for(var l;n--;)l=e,e=k(e);if(!I)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=nt();return e===null?l==null||l.after(a):e.before(a),M(a),a}return M(e),e}function yr(t){t.textContent=""}function hn(t){var n=y|D;u===null?n|=O:u.f|=mt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:f,deps:null,equals:At,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function wr(t){const n=hn(t);return n.equals=gt,n}function kt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?ot(e):S(e)}}}function dn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ct(t){var n,r=u;z(dn(t));try{kt(t),n=Gt(t)}finally{z(r)}return n}function Nt(t){var n=Ct(t),r=(x||t.f&O)&&t.deps!==null?P:d;T(t,r),t.equals(n)||(t.v=n,t.version=Vt())}function ot(t){kt(t),j(t,0),T(t,F),t.v=t.children=t.deps=t.ctx=t.reactions=null}function bt(t){u===null&&o===null&&sn(),o!==null&&o.f&O&&ln(),ft&&en()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function q(t,n,r,e=!0){var l=(t&J)!==0,s=u,a={ctx:f,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,version:0};if(r){var i=C;try{Et(!0),U(a),a.f|=tn}catch(c){throw S(a),c}finally{Et(i)}}else n!==null&&Q(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&mt)===0;if(!_&&!l&&e&&(s!==null&&En(a,s),o!==null&&o.f&y)){var p=o;(p.children??(p.children=[])).push(a)}return a}function Tr(t){const n=q(B,null,!1);return T(n,d),n.teardown=t,n}function mr(t){bt();var n=u!==null&&(u.f&A)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Pt(t);return e}}function Ar(t){return bt(),it(t)}function gr(t){const n=q(J,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Pt(t){return q(wt,t,!1)}function Dr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=it(()=>{t(),!e.ran&&(e.ran=!0,ut(r.l.r2,!0),Jt(n))})}function Rr(){var t=f;it(()=>{if(ct(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&d&&T(r,P),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function it(t){return q(B,t,!0)}function xr(t){return yn(t)}function yn(t,n=0){return q(B|st|n,t,!0)}function Ir(t,n=!0){return q(B|A,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=ft,e=o;yt(!0),Z(null);try{n.call(null)}finally{yt(r),Z(e)}}}function qt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)ot(n[r])}}function Lt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function wn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&A||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&nn)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:k(e);e.remove(),e=s}r=!0}Lt(t,n&&!r),qt(t),j(t,0),T(t,F);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ft(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];Yt(t,r,!0),mn(r,()=>{S(t),n&&n()})}function mn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Yt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&Tt)!==0||(e.f&A)!==0;Yt(e,n,s?r:!1),e=l}}}function Sr(t){Ht(t,!0)}function Ht(t,n){if(t.f&b){L(t)&&U(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,l=(r.f&Tt)!==0||(r.f&A)!==0;Ht(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}let $=!1,et=[];function jt(){$=!1;const t=et.slice();et=[],Qt(t)}function Or(t){$||($=!0,queueMicrotask(jt)),et.push(t)}function An(){$&&jt()}const Bt=0,gn=1;let V=!1,G=Bt,Y=!1,H=null,C=!1,ft=!1;function Et(t){C=t}function yt(t){ft=t}let R=[],N=0;let o=null;function Z(t){o=t}let u=null;function z(t){u=t}let m=null;function Dn(t){m=t}let h=null,E=0,g=null;function Rn(t){g=t}let Ut=1,x=!1,f=null;function Vt(){return++Ut}function _t(){return!W||f!==null&&f.l===null}function L(t){var p;var n=t.f;if(n&D)return!0;if(n&P){var r=t.deps,e=(n&O)!==0;if(r!==null){var l,s,a=(n&K)!==0,i=e&&u!==null&&!x,_=r.length;if(a||i){for(l=0;l<_;l++)s=r[l],(a||!((p=s==null?void 0:s.reactions)!=null&&p.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=K)}for(l=0;l<_;l++)if(s=r[l],L(s)&&Nt(s),s.version>t.version)return!0}(!e||u!==null&&!x)&&T(t,d)}return!1}function xn(t,n){for(var r=n;r!==null;){if(r.f&tt)try{r.fn(t);return}catch{r.f^=tt}r=r.parent}throw V=!1,t}function In(t){return(t.f&F)===0&&(t.parent===null||(t.parent.f&tt)===0)}function X(t,n,r,e){if(V){if(r===null&&(V=!1),In(n))throw t;return}r!==null&&(V=!0);{xn(t,n);return}}function Gt(t){var vt;var n=h,r=E,e=g,l=o,s=x,a=m,i=f,_=t.f;h=null,E=0,g=null,o=_&(A|J)?null:t,x=!C&&(_&O)!==0,m=null,f=t.ctx;try{var p=(0,t.fn)(),c=t.deps;if(h!==null){var v;if(j(t,E),c!==null&&E>0)for(c.length=E+h.length,v=0;v<h.length;v++)c[E+v]=h[v];else t.deps=c=h;if(!x)for(v=E;v<c.length;v++)((vt=c[v]).reactions??(vt.reactions=[])).push(t)}else c!==null&&E<c.length&&(j(t,E),c.length=E);return p}finally{h=n,E=r,g=e,o=l,x=s,m=a,f=i}}function Sn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(T(n,P),n.f&(O|K)||(n.f^=K),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Sn(t,r[e])}function U(t){var n=t.f;if(!(n&F)){T(t,d);var r=u,e=f;u=t;try{n&st?wn(t):Lt(t),qt(t),Ft(t);var l=Gt(t);t.teardown=typeof l=="function"?l:null,t.version=Ut;var s=t.deps,a}catch(i){X(i,t,r,e||t.ctx)}finally{u=r}}}function Kt(){if(N>1e3){N=0;try{an()}catch(t){if(H!==null)X(t,H,null);else throw t}}N++}function $t(t){var n=t.length;if(n!==0){Kt();var r=C;C=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&d||(l.f^=d);var s=[];Zt(l,s),On(s)}}finally{C=r}}}function On(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(F|b)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){X(l,e,null,e.ctx)}}}function kn(){if(Y=!1,N>1001)return;const t=R;R=[],$t(t),Y||(N=0,H=null)}function Q(t){G===Bt&&(Y||(Y=!0,queueMicrotask(kn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(J|A)){if(!(r&d))return;n.f^=d}}R.push(n)}function Zt(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&A)!==0,a=s&&(l&d)!==0,i=r.next;if(!a&&!(l&b))if(l&B){if(s)r.f^=d;else try{L(r)&&U(r)}catch(v){X(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&wt&&e.push(r);if(i===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var p=v.next;if(p!==null){r=p;continue t}v=v.parent}}r=i}for(var c=0;c<e.length;c++)_=e[c],n.push(_),Zt(_,n)}function zt(t){var n=G,r=R;try{Kt();const l=[];G=gn,R=l,Y=!1,$t(r);var e=t==null?void 0:t();return An(),(R.length>0||l.length>0)&&zt(),N=0,H=null,e}finally{G=n,R=r}}async function kr(){await Promise.resolve(),zt()}function ct(t){var c;var n=t.f,r=(n&y)!==0;if(r&&n&F){var e=Ct(t);return ot(t),e}if(o!==null){m!==null&&m.includes(t)&&un();var l=o.deps;h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t),g!==null&&u!==null&&u.f&d&&!(u.f&A)&&g.includes(t)&&(T(u,D),Q(u))}else if(r&&t.deps===null)for(var s=t,a=s.parent,i=s;a!==null;)if(a.f&y){var _=a;i=_,a=_.parent}else{var p=a;(c=p.deriveds)!=null&&c.includes(i)||(p.deriveds??(p.deriveds=[])).push(i);break}return r&&(s=t,L(s)&&Nt(s)),t.v}function Jt(t){const n=o;try{return o=null,t()}finally{o=n}}const Cn=~(D|P|d);function T(t,n){t.f=t.f&Cn|n}function Cr(t,n=1){var r=ct(t),e=n===1?r++:r--;return ut(t,r),e}function Nr(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},W&&!n&&(f.l={s:null,u:null,r1:[],r2:at(!1)})}function br(t){const n=f;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];z(s.effect),Z(s.reaction),Pt(s.fn)}}finally{z(r),Z(e)}}f=n.p,n.m=!0}return{}}function Pr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)lt(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&lt(r)}}}function lt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{lt(t[e],n)}catch{}const r=Xt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Wt(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{zt as $,Z as A,z as B,o as C,u as D,Tt as E,Tr as F,Or as G,Pn as H,pr as I,rt as J,fn as K,k as L,Dt as M,ir as N,M as O,fr as P,cn as Q,It as R,Bn as S,yr as T,bn as U,gr as V,nt as W,er as X,lr as Y,Hn as Z,ut as _,mr as a,vn as a0,kr as a1,ar as a2,ht as a3,Fn as a4,qn as a5,at as a6,Vn as a7,pt as a8,sr as a9,zn as aA,Jn as aB,Wn as aC,jn as aD,Wt as aE,Dr as aF,Rr as aG,ur as aH,cr as aI,or as aJ,dt as aK,Gn as aa,Xt as ab,_n as ac,vr as ad,Sr as ae,Tn as af,Pt as ag,it as ah,Un as ai,Yn as aj,A as ak,J as al,Qn as am,nr as an,wr as ao,tr as ap,gt as aq,Xn as ar,rr as as,Cr as at,b as au,pn as av,Yt as aw,mn as ax,$n as ay,Zn as az,Jt as b,f as c,Qt as d,Pr as e,hn as f,ct as g,Kn as h,Nn as i,dr as j,br as k,W as l,hr as m,Ln as n,_r as o,Nr as p,Er as q,Mn as r,rn as s,xr as t,Ar as u,yn as v,Ir as w,S as x,I as y,w as z};
