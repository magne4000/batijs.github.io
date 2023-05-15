import{g as d,s as f,c as m,t as c,a as C,b as x,i,d as b,F as _,r as y,e as k,f as w,h as F,_ as P,L as j}from"../chunks/chunk-169be884.js";const E="/batijs.github.io/assets/static/logo.059a8ea3.svg",A=c('<img alt="Bâti logo">');function L(r){return(()=>{const l=d(A);return f(l,"src",E),m(a=>{const n=r.size,s=r.size;return n!==a._v$&&f(l,"height",a._v$=n),s!==a._v$2&&f(l,"width",a._v$2=s),a},{_v$:void 0,_v$2:void 0}),l})()}const N=c('<select class="select w-full max-w-xs">'),O=c("<option>");function R(r){const[l,a]=C(r,["options"]);return(()=>{const n=d(N);return x(n,a,!1,!0),i(n,b(_,{get each(){return l.options},children:s=>(()=>{const e=d(O);return i(e,()=>s.label),m(t=>{const o=s.disabled,u=s.selected;return o!==t._v$&&(e.disabled=t._v$=o),u!==t._v$2&&(e.selected=t._v$2=u),t},{_v$:void 0,_v$2:void 0}),m(()=>e.value=s.value),e})()})),y(),n})()}const z=c('<div class="form-control w-full max-w-xs"><label class="label"><span class="label-text"></span></label><!#><!/>');function D(r){return(()=>{const l=d(z),a=l.firstChild,n=a.firstChild,s=a.nextSibling,[e,t]=k(s.nextSibling);return i(n,()=>r.label),i(l,()=>r.children,e,t),l})()}const M={label:"Framework",features:[{label:"SolidJS",value:"solid",selected:!0},{label:"React - Coming Soon",value:"react",disabled:!0},{label:"Vue - Coming Soon",value:"vue",disabled:!0}]},U={label:"Auth",features:[{label:"none"},{label:"AuthJS",value:"authjs",selected:!0},{label:"Auth0 - Coming Soon",value:"auth0",disabled:!0},{label:"Firebase - Coming Soon",value:"firebase",disabled:!0}]},B={label:"RPC",features:[{label:"none"},{label:"Telefunc",value:"telefunc",selected:!0},{label:"tRPC - Coming Soon",value:"trpc",disabled:!0}]},H={label:"Server",features:[{label:"none"},{label:"Hattip",value:"hattip",selected:!0},{label:"Express",value:"express"}]},T={label:"UI",features:[{label:"none"},{label:"TailwindCSS",value:"tailwindcss",selected:!0},{label:"UnoCSS - Coming Soon",value:"unocss",disabled:!0},{label:"MUI - Coming Soon",value:"mui",disabled:!0}]},V={label:"Database",features:[{label:"none",selected:!0},{label:"Prisma",value:"prisma"},{label:"EdgeDB - Coming Soon",value:"edgedb",disabled:!0}]},I={disabled:!0,label:"Hosting",features:[{label:"Coming Soon",selected:!0},{label:"Vercel - Coming Soon",value:"vercel",disabled:!0},{label:"Netlify - Coming Soon",value:"netlify",disabled:!0}]},J={disabled:!0,label:"Analytics",features:[{label:"Coming Soon",selected:!0},{label:"Plausible.io - Coming Soon",value:"plausible-io",disabled:!0},{label:"Google Analytics - Coming Soon",value:"google-analytics",disabled:!0},{label:"Segment - Coming Soon",value:"segment",disabled:!0}]},G={disabled:!0,label:"Error tracking",features:[{label:"Coming Soon",selected:!0},{label:"Sentry - Coming Soon",value:"sentry",disabled:!0},{label:"Logrocket - Coming Soon",value:"logrocket",disabled:!0}]},v={framework:M,auth:U,rpc:B,server:H,uikit:T,db:V,hosting:I,analytics:J,error:G},q=c('<div class="w-full items-center flex justify-center gap-8"><a class="inline-block" href="/"></a><h1 class="font-sans font-bold text-8xl pb-4">Bâti'),K=c('<div class="w-full items-center flex justify-center mt-8"><div class="w-4/5 flex flex-col bg-base-300 px-4 py-8 gap-4 rounded-xl shadow-2xl"><div class="grid place-items-center grid-cols-2"></div><div class="divider"></div><div class="px-4"><kbd class="kbd kbd-lg select-all">');function Q(){const r=Object.keys(v),[l,a]=w(Object.assign({},...Object.entries(v).map(([e,t])=>{var o;return{[e]:(o=t.features.find(u=>u.selected))==null?void 0:o.value}})));function n(){return r.filter(e=>l[e]).map(e=>`--${l[e]}`)}const s=F(()=>["pnpm","create","@batijs/app",...n(),"my-app"]);return[(()=>{const e=d(q),t=e.firstChild;return i(t,b(L,{size:96})),e})(),(()=>{const e=d(K),t=e.firstChild,o=t.firstChild,u=o.nextSibling,S=u.nextSibling,p=S.firstChild;return i(o,b(_,{get each(){return Object.entries(v)},children:([$,g])=>b(D,{get label(){return g.label},get children(){return b(R,{get disabled(){return g.disabled},onChange:h=>a($,h.target.value||void 0),get options(){return g.features}})}})})),i(p,()=>s().join(" ")),e})()]}const W=Object.freeze(Object.defineProperty({__proto__:null,default:Q},Symbol.toStringTag,{value:"Module"})),Y=[{configName:"onRenderClient",codeFilePath:"vike-solid/renderer/+onRenderClient.js",isPlusFile:!0,codeFileExports:P},{configName:"Page",codeFilePath:"/pages/index/+Page.tsx",isPlusFile:!0,codeFileExports:W},{configName:"Layout",codeFilePath:"/layouts/LayoutDefault.tsx",isPlusFile:!1,codeFileExportValue:j}];export{Y as default};