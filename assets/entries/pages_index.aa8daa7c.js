import{g as u,s as x,c as _,t as b,a as m,i as o,u as k,b as R,d as B,e as q,m as H,f as c,F as w,r as h,h as F,j,S as P,k as T,o as U,l as G,n as I,_ as J,L as K}from"../chunks/chunk-ddf3265b.js";const Q="/batijs.github.io/assets/static/logo.059a8ea3.svg",W=b('<img alt="Bâti logo">');function X(e){return(()=>{const t=u(W);return x(t,"src",Q),_(l=>{const n=e.size,i=e.size;return n!==l._v$&&x(t,"height",l._v$=n),i!==l._v$2&&x(t,"width",l._v$2=i),l},{_v$:void 0,_v$2:void 0}),t})()}const Y=b('<div class="drawer drawer-mobile"><input id="my-drawer-2" type="checkbox" class="drawer-toggle"><div class="drawer-content flex flex-col items-center justify-start"><!#><!/><label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">Add elements</label></div><div class="drawer-side"><label for="my-drawer-2" class="drawer-overlay"></label><!#><!/>');function Z(e){return(()=>{const t=u(Y),l=t.firstChild,n=l.nextSibling,i=n.firstChild,[r,a]=m(i.nextSibling);r.nextSibling;const s=n.nextSibling,d=s.firstChild,f=d.nextSibling,[$,v]=m(f.nextSibling);return o(n,()=>e.children,r,a),o(s,()=>e.drawer,$,v),t})()}function ee(e,t){const l=t();e.setAttribute("data-flip-name",l),e.style.viewTransitionName=l}function E(e,t){const l=document.querySelector(`[data-flip-name="${e}"]`);if(!l||!("startViewTransition"in document)){t();return}l.style.viewTransitionName=e,document.startViewTransition(()=>{l.style.viewTransitionName="",t()})}const te=b('<div><label class="label"><span class="label-text"></span></label><!#><!/>');function L(e){return(()=>{const t=u(te),l=t.firstChild,n=l.firstChild,i=l.nextSibling,[r,a]=m(i.nextSibling);return k(ee,t,()=>e.label),o(n,()=>e.label),o(t,()=>e.children,r,a),_(()=>R(t,"form-control w-full max-w-xs "+(e.class??""))),t})()}const le=b("<select>"),ie=b("<option>");function N(e){const[t,l]=B(e,["options","class"]);return(()=>{const n=u(le);return q(n,H({get class(){return"select max-w-xs "+(t.class??"")}},l),!1,!0),o(n,c(w,{get each(){return t.options},children:i=>(()=>{const r=u(ie);return o(r,()=>i.label),_(a=>{const s=i.disabled,d=i.selected;return s!==a._v$&&(r.disabled=a._v$=s),d!==a._v$2&&(r.selected=a._v$2=d),a},{_v$:void 0,_v$2:void 0}),_(()=>r.value=i.value??""),r})()})),h(),n})()}const ne=b('<ul class="menu p-4 w-80 bg-base-300 text-base-content">'),re=b('<div class="input-group"><!#><!/><button class="btn btn-primary">+');function se(){const{drawerFeatures:e,selectFeature:t,moveFeature:l}=j(P);return(()=>{const n=u(ne);return o(n,c(w,{get each(){return Object.keys(e())},children:i=>c(L,{get label(){return e()[i].label},get children(){const r=u(re),a=r.firstChild,[s,d]=m(a.nextSibling),f=s.nextSibling;return o(r,c(N,{class:"grow text-xs",get disabled(){return e()[i].disabled},onChange:$=>{t(i,$.target.value||void 0)},get options(){return e()[i].features}}),s,d),f.$$click=()=>{E(T(e)[i].label,()=>l(i))},_(()=>f.disabled=e()[i].disabled),h(),r}})})),n})()}F(["click"]);function ae(e){let t;async function l(){clearTimeout(t);const n=window.getSelection();n&&(await navigator.clipboard.writeText(n.toString()),e.classList.add("tooltip","tooltip-open"),t=setTimeout(()=>{e.classList.remove("tooltip","tooltip-open")},3e3))}e.addEventListener("click",l),U(()=>e.removeEventListener("click",l))}const oe=b('<div class="container mt-8"><div class="w-full items-center flex justify-center gap-8"><a class="inline-block" href="/"></a><h1 class="font-sans font-bold text-8xl pb-4">Bâti</h1></div><div class="w-full items-center flex justify-center mt-8"><div class="w-4/5 flex flex-col bg-base-300 px-4 py-8 rounded-xl shadow-2xl"><div class="px-4"><kbd class="w-full text-center tooltip-primary inline-flex tooltip-bottom kbd kbd-lg select-all" data-tip="Copied to clipboard!"></kbd></div><div class="divider"></div><div class="flex flex-row flex-wrap justify-center gap-4">'),ce=b('<div class="input-group"><!#><!/><button class="btn hover:btn-error" title="remove">-');function de(){const{featuresValues:e,inViewFeatures:t,selectFeature:l,moveFeature:n}=j(P),i=Object.keys(I);function r(){return i.filter(s=>e()[s]).map(s=>`--${e()[s]}`)}const a=G(()=>["pnpm","create","@batijs/app",...r(),"my-app"]);return c(Z,{get drawer(){return c(se,{})},get children(){const s=u(oe),d=s.firstChild,f=d.firstChild,$=d.nextSibling,v=$.firstChild,y=v.firstChild,C=y.firstChild,O=y.nextSibling,V=O.nextSibling;return o(f,c(X,{size:96})),k(ae,C,()=>!0),o(C,()=>a().join(" ")),o(V,c(w,{get each(){return Object.keys(t())},children:g=>c(L,{get label(){return t()[g].label},get children(){const p=u(ce),z=p.firstChild,[S,A]=m(z.nextSibling),D=S.nextSibling;return o(p,c(N,{class:"grow",get disabled(){return t()[g].disabled},onChange:M=>l(g,M.target.value||void 0),get options(){return t()[g].features}}),S,A),D.$$click=()=>{E(T(t)[g].label,()=>n(g))},h(),p}})})),s}})}F(["click"]);const ue=Object.freeze(Object.defineProperty({__proto__:null,default:de},Symbol.toStringTag,{value:"Module"})),fe=[{configName:"onRenderClient",codeFilePath:"vike-solid/renderer/+onRenderClient.js",isPlusFile:!0,codeFileExports:J},{configName:"Page",codeFilePath:"/pages/index/+Page.tsx",isPlusFile:!0,codeFileExports:ue},{configName:"Layout",codeFilePath:"/layouts/LayoutDefault.tsx",isPlusFile:!1,codeFileExportValue:K}];export{fe as default};
