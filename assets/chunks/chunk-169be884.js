const d={context:void 0,registry:void 0};function de(e){d.context=e}function qe(){return{...d.context,id:`${d.context.id}${d.context.count++}-`,count:0}}const Ve=(e,t)=>e===t,x=Symbol("solid-proxy"),Z=Symbol("solid-track"),We=Symbol("solid-dev-component"),q={equals:Ve};let Ye=Te;const D=1,V=2,Pe={owned:null,cleanups:null,context:null,owner:null};var b=null;let Q=null,y=null,w=null,T=null,Y=0;function K(e,t){const n=y,i=b,s=e.length===0,r=s?Pe:{owned:null,cleanups:null,context:null,owner:t===void 0?i:t},l=s?e:()=>e(()=>N(()=>z(r)));b=r,y=null;try{return B(l,!0)}finally{y=n,b=i}}function Oe(e,t){t=t?Object.assign({},q,t):q;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},i=s=>(typeof s=="function"&&(s=s(n.value)),$e(n,s));return[Ee.bind(n),i]}function _(e,t,n){const i=Ne(e,t,!1,D);X(i)}function L(e,t,n){n=n?Object.assign({},q,n):q;const i=Ne(e,t,!0,0);return i.observers=null,i.observerSlots=null,i.comparator=n.equals||void 0,X(i),Ee.bind(i)}function Xe(e){return B(e,!1)}function N(e){if(y===null)return e();const t=y;y=null;try{return e()}finally{y=t}}function ze(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function Ce(){return y}function Qe(e,t){const n=Symbol("context");return{id:n,Provider:nt(n),defaultValue:e}}function Je(e){let t;return(t=De(b,e.id))!==void 0?t:e.defaultValue}function Ze(e){const t=L(e),n=L(()=>ee(t()));return n.toArray=()=>{const i=n();return Array.isArray(i)?i:i!=null?[i]:[]},n}function Ee(){if(this.sources&&this.state)if(this.state===D)X(this);else{const e=w;w=null,B(()=>W(this),!1),w=e}if(y){const e=this.observers?this.observers.length:0;y.sources?(y.sources.push(this),y.sourceSlots.push(e)):(y.sources=[this],y.sourceSlots=[e]),this.observers?(this.observers.push(y),this.observerSlots.push(y.sources.length-1)):(this.observers=[y],this.observerSlots=[y.sources.length-1])}return this.value}function $e(e,t,n){let i=e.value;return(!e.comparator||!e.comparator(i,t))&&(e.value=t,e.observers&&e.observers.length&&B(()=>{for(let s=0;s<e.observers.length;s+=1){const r=e.observers[s],l=Q&&Q.running;l&&Q.disposed.has(r),(l?!r.tState:!r.state)&&(r.pure?w.push(r):T.push(r),r.observers&&_e(r)),l||(r.state=D)}if(w.length>1e6)throw w=[],new Error},!1)),t}function X(e){if(!e.fn)return;z(e);const t=b,n=y,i=Y;y=b=e,et(e,e.value,i),y=n,b=t}function et(e,t,n){let i;try{i=e.fn(t)}catch(s){return e.pure&&(e.state=D,e.owned&&e.owned.forEach(z),e.owned=null),e.updatedAt=n+1,Le(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?$e(e,i):e.value=i,e.updatedAt=n)}function Ne(e,t,n,i=D,s){const r={fn:e,state:i,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==Pe&&(b.owned?b.owned.push(r):b.owned=[r]),r}function je(e){if(e.state===0)return;if(e.state===V)return W(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Y);)e.state&&t.push(e);for(let n=t.length-1;n>=0;n--)if(e=t[n],e.state===D)X(e);else if(e.state===V){const i=w;w=null,B(()=>W(e,t[0]),!1),w=i}}function B(e,t){if(w)return e();let n=!1;t||(w=[]),T?n=!0:T=[],Y++;try{const i=e();return tt(n),i}catch(i){n||(T=null),w=null,Le(i)}}function tt(e){if(w&&(Te(w),w=null),e)return;const t=T;T=null,t.length&&B(()=>Ye(t),!1)}function Te(e){for(let t=0;t<e.length;t++)je(e[t])}function W(e,t){e.state=0;for(let n=0;n<e.sources.length;n+=1){const i=e.sources[n];if(i.sources){const s=i.state;s===D?i!==t&&(!i.updatedAt||i.updatedAt<Y)&&je(i):s===V&&W(i,t)}}}function _e(e){for(let t=0;t<e.observers.length;t+=1){const n=e.observers[t];n.state||(n.state=V,n.pure?w.push(n):T.push(n),n.observers&&_e(n))}}function z(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),i=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const r=s.pop(),l=n.observerSlots.pop();i<s.length&&(r.sourceSlots[l]=i,s[i]=r,n.observerSlots[i]=l)}}if(e.owned){for(t=e.owned.length-1;t>=0;t--)z(e.owned[t]);e.owned=null}if(e.cleanups){for(t=e.cleanups.length-1;t>=0;t--)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Le(e){throw e}function De(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:De(e.owner,t):void 0}function ee(e){if(typeof e=="function"&&!e.length)return ee(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const i=ee(e[n]);Array.isArray(i)?t.push.apply(t,i):t.push(i)}return t}return e}function nt(e,t){return function(i){let s;return _(()=>s=N(()=>(b.context={[e]:i.value},Ze(()=>i.children))),void 0),s}}const it=Symbol("fallback");function he(e){for(let t=0;t<e.length;t++)e[t]()}function st(e,t,n={}){let i=[],s=[],r=[],l=0,o=t.length>1?[]:null;return ze(()=>he(r)),()=>{let f=e()||[],u,c;return f[Z],N(()=>{let h=f.length,g,A,m,S,C,P,O,E,M;if(h===0)l!==0&&(he(r),r=[],i=[],s=[],l=0,o&&(o=[])),n.fallback&&(i=[it],s[0]=K(Ke=>(r[0]=Ke,n.fallback())),l=1);else if(l===0){for(s=new Array(h),c=0;c<h;c++)i[c]=f[c],s[c]=K(a);l=h}else{for(m=new Array(h),S=new Array(h),o&&(C=new Array(h)),P=0,O=Math.min(l,h);P<O&&i[P]===f[P];P++);for(O=l-1,E=h-1;O>=P&&E>=P&&i[O]===f[E];O--,E--)m[E]=s[O],S[E]=r[O],o&&(C[E]=o[O]);for(g=new Map,A=new Array(E+1),c=E;c>=P;c--)M=f[c],u=g.get(M),A[c]=u===void 0?-1:u,g.set(M,c);for(u=P;u<=O;u++)M=i[u],c=g.get(M),c!==void 0&&c!==-1?(m[c]=s[u],S[c]=r[u],o&&(C[c]=o[u]),c=A[c],g.set(M,c)):r[u]();for(c=P;c<h;c++)c in m?(s[c]=m[c],r[c]=S[c],o&&(o[c]=C[c],o[c](c))):s[c]=K(a);s=s.slice(0,l=h),i=f.slice(0)}return s});function a(h){if(r[c]=h,o){const[g,A]=Oe(c);return o[c]=A,t(f[c],g)}return t(f[c])}}}let Me=!1;function rt(){Me=!0}function $(e,t){if(Me&&d.context){const n=d.context;de(qe());const i=N(()=>e(t||{}));return de(n),i}return N(()=>e(t||{}))}function R(){return!0}const te={get(e,t,n){return t===x?n:e.get(t)},has(e,t){return t===x?!0:e.has(t)},set:R,deleteProperty:R,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:R,deleteProperty:R}},ownKeys(e){return e.keys()}};function J(e){return(e=typeof e=="function"?e():e)?e:{}}function ot(...e){let t=!1;for(let i=0;i<e.length;i++){const s=e[i];t=t||!!s&&x in s,e[i]=typeof s=="function"?(t=!0,L(s)):s}if(t)return new Proxy({get(i){for(let s=e.length-1;s>=0;s--){const r=J(e[s])[i];if(r!==void 0)return r}},has(i){for(let s=e.length-1;s>=0;s--)if(i in J(e[s]))return!0;return!1},keys(){const i=[];for(let s=0;s<e.length;s++)i.push(...Object.keys(J(e[s])));return[...new Set(i)]}},te);const n={};for(let i=e.length-1;i>=0;i--)if(e[i]){const s=Object.getOwnPropertyDescriptors(e[i]);for(const r in s)r in n||Object.defineProperty(n,r,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const o=(e[l]||{})[r];if(o!==void 0)return o}}})}return n}function lt(e,...t){const n=new Set(t.length>1?t.flat():t[0]);if(x in e){const s=t.map(r=>new Proxy({get(l){return r.includes(l)?e[l]:void 0},has(l){return r.includes(l)&&l in e},keys(){return r.filter(l=>l in e)}},te));return s.push(new Proxy({get(r){return n.has(r)?void 0:e[r]},has(r){return n.has(r)?!1:r in e},keys(){return Object.keys(e).filter(r=>!n.has(r))}},te)),s}const i=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(i).filter(s=>!n.has(s))),t.map(s=>{const r={};for(let l=0;l<s.length;l++){const o=s[l];o in e&&Object.defineProperty(r,o,i[o]?i[o]:{get(){return e[o]},set(){return!0},enumerable:!0})}return r})}function Xt(e){const t="fallback"in e&&{fallback:()=>e.fallback};return L(st(()=>e.each,e.children,t||void 0))}const ft=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],ct=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...ft]),ut=new Set(["innerHTML","textContent","innerText","children"]),at=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),dt=Object.assign(Object.create(null),{class:"className",formnovalidate:{$:"formNoValidate",BUTTON:1,INPUT:1},ismap:{$:"isMap",IMG:1},nomodule:{$:"noModule",SCRIPT:1},playsinline:{$:"playsInline",VIDEO:1},readonly:{$:"readOnly",INPUT:1,TEXTAREA:1}});function ht(e,t){const n=dt[e];return typeof n=="object"?n[t]?n.$:void 0:n}const gt=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),yt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),bt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function wt(e,t,n){let i=n.length,s=t.length,r=i,l=0,o=0,f=t[s-1].nextSibling,u=null;for(;l<s||o<r;){if(t[l]===n[o]){l++,o++;continue}for(;t[s-1]===n[r-1];)s--,r--;if(s===l){const c=r<i?o?n[o-1].nextSibling:n[r-o]:f;for(;o<r;)e.insertBefore(n[o++],c)}else if(r===o)for(;l<s;)(!u||!u.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[r-1]&&n[o]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[o++],t[l++].nextSibling),e.insertBefore(n[--r],c),t[s]=n[r]}else{if(!u){u=new Map;let a=o;for(;a<r;)u.set(n[a],a++)}const c=u.get(t[l]);if(c!=null)if(o<c&&c<r){let a=l,h=1,g;for(;++a<s&&a<r&&!((g=u.get(t[a]))==null||g!==c+h);)h++;if(h>c-o){const A=t[l];for(;o<c;)e.insertBefore(n[o++],A)}else e.replaceChild(n[o++],t[l++])}else l++;else t[l++].remove()}}}const ge="_$DX_DELEGATE";function ke(e,t,n,i={}){let s;return K(r=>{s=r,t===document?e():le(t,e(),t.firstChild?null:void 0,n)},i.owner),()=>{s(),t.textContent=""}}function ve(e,t,n){let i;const s=()=>{const l=document.createElement("template");return l.innerHTML=e,n?l.content.firstChild.firstChild:l.content.firstChild},r=t?()=>(i||(i=s())).cloneNode(!0):()=>N(()=>document.importNode(i||(i=s()),!0));return r.cloneNode=r,r}function mt(e,t=window.document){const n=t[ge]||(t[ge]=new Set);for(let i=0,s=e.length;i<s;i++){const r=e[i];n.has(r)||(n.add(r),t.addEventListener(r,Ie))}}function ne(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function pt(e,t,n,i){i==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,i)}function At(e,t){t==null?e.removeAttribute("class"):e.className=t}function xt(e,t,n,i){if(i)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=r=>s.call(e,n[1],r))}else e.addEventListener(t,n)}function St(e,t,n={}){const i=Object.keys(t||{}),s=Object.keys(n);let r,l;for(r=0,l=s.length;r<l;r++){const o=s[r];!o||o==="undefined"||t[o]||(ye(e,o,!1),delete n[o])}for(r=0,l=i.length;r<l;r++){const o=i[r],f=!!t[o];!o||o==="undefined"||n[o]===f||!f||(ye(e,o,!0),n[o]=f)}return n}function Pt(e,t,n){if(!t)return n?ne(e,"style"):t;const i=e.style;if(typeof t=="string")return i.cssText=t;typeof n=="string"&&(i.cssText=n=void 0),n||(n={}),t||(t={});let s,r;for(r in n)t[r]==null&&i.removeProperty(r),delete n[r];for(r in t)s=t[r],s!==n[r]&&(i.setProperty(r,s),n[r]=s);return n}function Ot(e,t={},n,i){const s={};return i||_(()=>s.children=I(e,t.children,s.children)),_(()=>t.ref&&t.ref(e)),_(()=>Ct(e,t,n,!0,s,!0)),s}function le(e,t,n,i){if(n!==void 0&&!i&&(i=[]),typeof t!="function")return I(e,t,i,n);_(s=>I(e,t(),s,n),i)}function Ct(e,t,n,i,s={},r=!1){t||(t={});for(const l in s)if(!(l in t)){if(l==="children")continue;s[l]=be(e,l,null,s[l],n,r)}for(const l in t){if(l==="children"){i||I(e,t.children);continue}const o=t[l];s[l]=be(e,l,o,s[l],n,r)}}function Et(e,t,n={}){d.completed=globalThis._$HY.completed,d.events=globalThis._$HY.events,d.load=globalThis._$HY.load,d.gather=s=>me(t,s),d.registry=new Map,d.context={id:n.renderId||"",count:0},me(t,n.renderId);const i=ke(e,t,[...t.childNodes],n);return d.context=null,i}function fe(e){let t,n;if(!d.context||!(t=d.registry.get(n=jt()))){if(d.context&&console.warn("Unable to find DOM nodes for hydration key:",n),!e)throw new Error("Unrecoverable Hydration Mismatch. No template for key: "+n);return e()}return d.completed&&d.completed.add(t),d.registry.delete(n),t}function $t(e){let t=e,n=0,i=[];if(d.context)for(;t;){if(t.nodeType===8){const s=t.nodeValue;if(s==="#")n++;else if(s==="/"){if(n===0)return[t,i];n--}}i.push(t),t=t.nextSibling}return[t,i]}function zt(){d.events&&!d.events.queued&&(queueMicrotask(()=>{const{completed:e,events:t}=d;for(t.queued=!1;t.length;){const[n,i]=t[0];if(!e.has(n))return;Ie(i),t.shift()}}),d.events.queued=!0)}function Nt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function ye(e,t,n){const i=t.trim().split(/\s+/);for(let s=0,r=i.length;s<r;s++)e.classList.toggle(i[s],n)}function be(e,t,n,i,s,r){let l,o,f,u,c;if(t==="style")return Pt(e,n,i);if(t==="classList")return St(e,n,i);if(n===i)return i;if(t==="ref")r||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);i&&e.removeEventListener(a,i),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);i&&e.removeEventListener(a,i,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),h=gt.has(a);if(!h&&i){const g=Array.isArray(i)?i[0]:i;e.removeEventListener(a,g)}(h||n)&&(xt(e,a,n,h),h&&mt([a]))}else if(t.slice(0,5)==="attr:")ne(e,t.slice(5),n);else if((c=t.slice(0,5)==="prop:")||(f=ut.has(t))||!s&&((u=ht(t,e.tagName))||(o=ct.has(t)))||(l=e.nodeName.includes("-")))c&&(t=t.slice(5),o=!0),t==="class"||t==="className"?At(e,n):l&&!o&&!f?e[Nt(t)]=n:e[u||t]=n;else{const a=s&&t.indexOf(":")>-1&&bt[t.split(":")[0]];a?pt(e,a,t,n):ne(e,at[t]||t,n)}return n}function Ie(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),d.registry&&!d.done&&(d.done=_$HY.done=!0);n;){const i=n[t];if(i&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?i.call(n,s,e):i.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function I(e,t,n,i,s){if(d.context){!n&&(n=[...e.childNodes]);let o=[];for(let f=0;f<n.length;f++){const u=n[f];u.nodeType===8&&u.data.slice(0,2)==="!$"?u.remove():o.push(u)}n=o}for(;typeof n=="function";)n=n();if(t===n)return n;const r=typeof t,l=i!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,r==="string"||r==="number"){if(d.context)return n;if(r==="number"&&(t=t.toString()),l){let o=n[0];o&&o.nodeType===3?o.data=t:o=document.createTextNode(t),n=k(e,n,i,o)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||r==="boolean"){if(d.context)return n;n=k(e,n,i)}else{if(r==="function")return _(()=>{let o=t();for(;typeof o=="function";)o=o();n=I(e,o,n,i)}),()=>n;if(Array.isArray(t)){const o=[],f=n&&Array.isArray(n);if(ie(o,t,n,s))return _(()=>n=I(e,o,n,i,!0)),()=>n;if(d.context){if(!o.length)return n;for(let u=0;u<o.length;u++)if(o[u].parentNode)return n=o}if(o.length===0){if(n=k(e,n,i),l)return n}else f?n.length===0?we(e,o,i):wt(e,n,o):(n&&k(e),we(e,o));n=o}else if(t.nodeType){if(d.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=k(e,n,i,t);k(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}else console.warn("Unrecognized value. Skipped inserting",t)}return n}function ie(e,t,n,i){let s=!1;for(let r=0,l=t.length;r<l;r++){let o=t[r],f=n&&n[r],u;if(!(o==null||o===!0||o===!1))if((u=typeof o)=="object"&&o.nodeType)e.push(o);else if(Array.isArray(o))s=ie(e,o,f)||s;else if(u==="function")if(i){for(;typeof o=="function";)o=o();s=ie(e,Array.isArray(o)?o:[o],Array.isArray(f)?f:[f])||s}else e.push(o),s=!0;else{const c=String(o);f&&f.nodeType===3&&f.data===c?e.push(f):e.push(document.createTextNode(c))}}return s}function we(e,t,n=null){for(let i=0,s=t.length;i<s;i++)e.insertBefore(t[i],n)}function k(e,t,n,i){if(n===void 0)return e.textContent="";const s=i||document.createTextNode("");if(t.length){let r=!1;for(let l=t.length-1;l>=0;l--){const o=t[l];if(s!==o){const f=o.parentNode===e;!r&&!l?f?e.replaceChild(s,o):e.insertBefore(s,n):f&&o.remove()}else r=!0}}else e.insertBefore(s,n);return[s]}function me(e,t){const n=e.querySelectorAll("*[data-hk]");for(let i=0;i<n.length;i++){const s=n[i],r=s.getAttribute("data-hk");(!t||r.startsWith(t))&&!d.registry.has(r)&&d.registry.set(r,s)}}function jt(){const e=d.context;return`${e.id}${e.count++}`}const Tt="http://www.w3.org/2000/svg";function _t(e,t=!1){return t?document.createElementNS(Tt,e):document.createElement(e)}const Lt=(...e)=>(rt(),Et(...e));function ce(e){const[t,n]=lt(e,["component"]),i=L(()=>t.component);return L(()=>{const s=i();switch(typeof s){case"function":return Object.assign(s,{[We]:!0}),N(()=>s(n));case"string":const r=yt.has(s),l=d.context?fe():_t(s,r);return Ot(l,n,r),l}})}function Dt(e,t){const n=globalThis.__vite_plugin_ssr=globalThis.__vite_plugin_ssr||{};return n[e]=n[e]||t}const{Context:He}=Dt("PageContextProvider.ts",{Context:Qe()});function Mt(e){if(!e.pageContext)throw new Error("Argument pageContext missing");return $(He.Provider,{get value(){return e.pageContext},get children(){return e.children}})}function ue(){const e=Je(He);if(!e)throw new Error("<PageContextProvider> is needed for being able to use usePageContext()");return e}const se=Symbol("store-raw"),G=Symbol("store-node");function Be(e){let t=e[x];if(!t&&(Object.defineProperty(e,x,{value:t=new Proxy(e,It)}),!Array.isArray(e))){const n=Object.keys(e),i=Object.getOwnPropertyDescriptors(e);for(let s=0,r=n.length;s<r;s++){const l=n[s];i[l].get&&Object.defineProperty(e,l,{enumerable:i[l].enumerable,get:i[l].get.bind(t)})}}return t}function j(e){let t;return e!=null&&typeof e=="object"&&(e[x]||!(t=Object.getPrototypeOf(e))||t===Object.prototype||Array.isArray(e))}function H(e,t=new Set){let n,i,s,r;if(n=e!=null&&e[se])return n;if(!j(e)||t.has(e))return e;if(Array.isArray(e)){Object.isFrozen(e)?e=e.slice(0):t.add(e);for(let l=0,o=e.length;l<o;l++)s=e[l],(i=H(s,t))!==s&&(e[l]=i)}else{Object.isFrozen(e)?e=Object.assign({},e):t.add(e);const l=Object.keys(e),o=Object.getOwnPropertyDescriptors(e);for(let f=0,u=l.length;f<u;f++)r=l[f],!o[r].get&&(s=e[r],(i=H(s,t))!==s&&(e[r]=i))}return e}function ae(e){let t=e[G];return t||Object.defineProperty(e,G,{value:t=Object.create(null)}),t}function re(e,t,n){return e[t]||(e[t]=Ge(n))}function kt(e,t){const n=Reflect.getOwnPropertyDescriptor(e,t);return!n||n.get||!n.configurable||t===x||t===G||(delete n.value,delete n.writable,n.get=()=>e[x][t]),n}function Fe(e){if(Ce()){const t=ae(e);(t._||(t._=Ge()))()}}function vt(e){return Fe(e),Reflect.ownKeys(e)}function Ge(e){const[t,n]=Oe(e,{equals:!1,internal:!0});return t.$=n,t}const It={get(e,t,n){if(t===se)return e;if(t===x)return n;if(t===Z)return Fe(e),n;const i=ae(e),s=i[t];let r=s?s():e[t];if(t===G||t==="__proto__")return r;if(!s){const l=Object.getOwnPropertyDescriptor(e,t);Ce()&&(typeof r!="function"||e.hasOwnProperty(t))&&!(l&&l.get)&&(r=re(i,t,r)())}return j(r)?Be(r):r},has(e,t){return t===se||t===x||t===Z||t===G||t==="__proto__"?!0:(this.get(e,t,e),t in e)},set(){return!0},deleteProperty(){return!0},ownKeys:vt,getOwnPropertyDescriptor:kt};function p(e,t,n,i=!1){if(!i&&e[t]===n)return;const s=e[t],r=e.length;n===void 0?delete e[t]:e[t]=n;let l=ae(e),o;if((o=re(l,t,s))&&o.$(()=>n),Array.isArray(e)&&e.length!==r){for(let f=e.length;f<r;f++)(o=l[f])&&o.$();(o=re(l,"length",r))&&o.$(e.length)}(o=l._)&&o.$()}function Re(e,t){const n=Object.keys(t);for(let i=0;i<n.length;i+=1){const s=n[i];p(e,s,t[s])}}function Ht(e,t){if(typeof t=="function"&&(t=t(e)),t=H(t),Array.isArray(t)){if(e===t)return;let n=0,i=t.length;for(;n<i;n++){const s=t[n];e[n]!==s&&p(e,n,s)}p(e,"length",i)}else Re(e,t)}function F(e,t,n=[]){let i,s=e;if(t.length>1){i=t.shift();const l=typeof i,o=Array.isArray(e);if(Array.isArray(i)){for(let f=0;f<i.length;f++)F(e,[i[f]].concat(t),n);return}else if(o&&l==="function"){for(let f=0;f<e.length;f++)i(e[f],f)&&F(e,[f].concat(t),n);return}else if(o&&l==="object"){const{from:f=0,to:u=e.length-1,by:c=1}=i;for(let a=f;a<=u;a+=c)F(e,[a].concat(t),n);return}else if(t.length>1){F(e[i],t,[i].concat(n));return}s=e[i],n=[i].concat(n)}let r=t[0];typeof r=="function"&&(r=r(s,n),r===s)||i===void 0&&r==null||(r=H(r),i===void 0||j(s)&&j(r)&&!Array.isArray(r)?Re(s,r):p(e,i,r))}function Bt(...[e,t]){const n=H(e||{}),i=Array.isArray(n),s=Be(n);function r(...l){Xe(()=>{i&&l.length===1?Ht(n,l[0]):F(n,l)})}return[s,r]}const oe=Symbol("store-root");function v(e,t,n,i,s){const r=t[n];if(e===r)return;if(n!==oe&&(!j(e)||!j(r)||s&&e[s]!==r[s])){p(t,n,e);return}if(Array.isArray(e)){if(e.length&&r.length&&(!i||s&&e[0]&&e[0][s]!=null)){let f,u,c,a,h,g,A,m;for(c=0,a=Math.min(r.length,e.length);c<a&&(r[c]===e[c]||s&&r[c]&&e[c]&&r[c][s]===e[c][s]);c++)v(e[c],r,c,i,s);const S=new Array(e.length),C=new Map;for(a=r.length-1,h=e.length-1;a>=c&&h>=c&&(r[a]===e[h]||s&&r[c]&&e[c]&&r[a][s]===e[h][s]);a--,h--)S[h]=r[a];if(c>h||c>a){for(u=c;u<=h;u++)p(r,u,e[u]);for(;u<e.length;u++)p(r,u,S[u]),v(e[u],r,u,i,s);r.length>e.length&&p(r,"length",e.length);return}for(A=new Array(h+1),u=h;u>=c;u--)g=e[u],m=s&&g?g[s]:g,f=C.get(m),A[u]=f===void 0?-1:f,C.set(m,u);for(f=c;f<=a;f++)g=r[f],m=s&&g?g[s]:g,u=C.get(m),u!==void 0&&u!==-1&&(S[u]=r[f],u=A[u],C.set(m,u));for(u=c;u<e.length;u++)u in S?(p(r,u,S[u]),v(e[u],r,u,i,s)):p(r,u,e[u])}else for(let f=0,u=e.length;f<u;f++)v(e[f],r,f,i,s);r.length>e.length&&p(r,"length",e.length);return}const l=Object.keys(e);for(let f=0,u=l.length;f<u;f++)v(e[l[f]],r,l[f],i,s);const o=Object.keys(r);for(let f=0,u=o.length;f<u;f++)e[o[f]]===void 0&&p(r,o[f],void 0)}function Ft(e,t={}){const{merge:n,key:i="id"}=t,s=H(e);return r=>{if(!j(r)||!j(s))return s;const l=v(s,{[oe]:r},oe,n,i);return l===void 0?r:l}}function Gt(e){if(typeof e.title=="string")return e.title;if(e.title)throw new Error("pageContext.title should be a string");const{title:t}=e.config;if(typeof t=="string")return t;if(!t)return null;const{configDefinedAt:n}=e.configEntries.title[0];if(typeof t=="function"){const i=t(e);if(typeof i=="string")return i;if(i)throw new Error(n+" should return a string")}throw new Error(n+" should be a string or a function returning a string")}function pe(e){return $(Mt,{pageContext:e,get children(){return $(Rt,{get children(){return $(Ut,{get children(){return $(Kt,{})}})}})}})}function Rt(e){const t=ue();return $(ce,{get component(){return t.config.Wrapper??Ue},get children(){return e.children}})}function Ut(e){const t=ue();return $(ce,{get component(){return t.config.Layout??Ue},get children(){return e.children}})}function Kt(){const e=ue();return $(ce,ot({get component(){return e.Page}},()=>e.pageProps??{}))}function Ue(e){return L(()=>e.children)}const[Ae,xe]=Bt({});let U,Se=!1;async function qt(e){if(Se)xe(Ft(e));else{U&&U(),xe(e);const n=document.getElementById("page-view");e.isHydration?U=Lt(()=>pe(Ae),n):U=ke(()=>pe(Ae),n),Se=!0}const t=Gt(e);t!==null&&(document.title=t)}const Qt=Object.freeze(Object.defineProperty({__proto__:null,default:qt},Symbol.toStringTag,{value:"Module"}));const Vt=ve('<div class="flex flex-col mx-auto"><header class="w-full flex justify-center py-4 bg-warning"><span class="text-4xl text-warning-content">⚠ Under construction</span></header><!#><!/>'),Wt=ve('<div class="container max-w-6xl mx-auto mt-6 min-h-screen">');function Jt(e){return(()=>{const t=fe(Vt),n=t.firstChild,i=n.nextSibling,[s,r]=$t(i.nextSibling);return le(t,$(Yt,{get children(){return e.children}}),s,r),t})()}function Yt(e){return(()=>{const t=fe(Wt);return le(t,()=>e.children),t})()}export{Xt as F,Jt as L,Qt as _,lt as a,Ot as b,_ as c,$ as d,$t as e,Bt as f,fe as g,L as h,le as i,zt as r,ne as s,ve as t};
