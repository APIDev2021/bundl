import{_ as l}from"./q-DYCSKtUC.js";import{b as x,s as _,u as w,z as y,r as v,d as t,k as m,q as r,f as k,g as s,y as u}from"./q-BdDSi9nv.js";const f=x("isMobile"),N=e=>_(f,e),z=()=>w(f),R=[{index:0,src:"https://customer-2pr7fubhe8y91e4g.cloudflarestream.com/18de14cd841baa7eea011d53d6530a05/iframe?poster=https%3A%2F%2Fcustomer-2pr7fubhe8y91e4g.cloudflarestream.com%2F18de14cd841baa7eea011d53d6530a05%2Fthumbnails%2Fthumbnail.jpg%3Ftime%3D%26height%3D600",title:"Wope Product Demo"}],p=750,P=["Previous","Next"],S=e=>{y(r(()=>l(()=>Promise.resolve().then(()=>T),void 0),"s_2fqQIaG1NNw"));const i=v(0),a=v(),d=z(),n=r(()=>l(()=>Promise.resolve().then(()=>E),void 0),"s_SKscbQFh8YA",[i,d,e,a]),c=r(()=>l(()=>Promise.resolve().then(()=>V),void 0),"s_jzyC2E0wFJI",[i,n]),h=o=>o==="Next"?i.value===e.video.length-1:i.value===0,g=o=>{if(h(o))return o;const b=o==="Next"?1:-1;return`${o} Video: ${e.video[i.value+b].title}`};return t("div",null,{class:m(o=>["hero-video-modal",{"hero-video-modal-open":o.open}],[e])},t("div",null,{class:"hero-video-modal-inner"},t("div",null,{class:"container-sm"},[t("button",{onClick$:e.onClose},{class:"hero-video-modal-toggle"},t("svg",null,{width:"12",height:"12",viewBox:"0 0 12 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},t("path",null,{d:"M1 1L11 11M11 1L1 11",stroke:"white","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"},null,3,null),3,null),2,null),t("div",null,{class:"hero-video-modal-content"},[t("h4",null,{class:"hero-video-modal-title"},m(o=>o.title,[e]),3,null),t("div",null,{class:"hero-video-modal-description"},m(o=>o.description,[e]),3,null),t("div",{ref:a},{class:"hero-video-modal-videos"},e.video.map(o=>t("div",{class:["hero-video-modal-videos-item",{"hero-video-modal-videos-item-active":i.value===o.index}]},null,[t("div",{class:["hero-video-modal-videos-item-mask",{"hero-video-modal-videos-item-mask-active":i.value!==o.index}],onClick$:r(()=>l(()=>Promise.resolve().then(()=>O),void 0),"s_FF4wRoAt4FE",[n,o])},null,null,2,null),e.open&&t("iframe",{src:k(o,"src")},{allow:"accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;",allowFullscreen:!0,width:"812",height:"468"},null,3,"B8_0")],1,o.index)),1,null),e.video.length>1&&t("div",null,{class:"hero-video-modal-actions"},P.map(o=>t("div",{class:["hero-video-modal-actions-item",{"hero-video-modal-actions-item-disabled":h(o)}],onClick$:r(()=>l(()=>Promise.resolve().then(()=>D),void 0),"s_ClwdiEGTKPg",[o,c])},null,g(o),0,"B8_1")),1,"B8_2")],1,null)],1,null),1,null),1,"B8_3")},B=Object.freeze(Object.defineProperty({__proto__:null,s_Y1hmhGzUzUQ:S},Symbol.toStringTag,{value:"Module"})),j=()=>{const[e,i]=s();return e(i.index)},O=Object.freeze(Object.defineProperty({__proto__:null,s_FF4wRoAt4FE:j},Symbol.toStringTag,{value:"Module"})),F=e=>{const[i,a,d,n]=s();if(e<0||e>=d.video.length||(i.value=e,a.value))return;const c=Math.min(p*e,p*2);n.value.style.transform=`translateX(-${c}px)`},E=Object.freeze(Object.defineProperty({__proto__:null,_hW:u,s_SKscbQFh8YA:F},Symbol.toStringTag,{value:"Module"})),A=e=>{const[i,a]=s(),d=e==="Next"?1:-1;a(i.value+d)},V=Object.freeze(Object.defineProperty({__proto__:null,_hW:u,s_jzyC2E0wFJI:A},Symbol.toStringTag,{value:"Module"})),C='.hero-video-modal-title{font-family:Rebond Grotesque,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Open Sans,Helvetica Neue,sans-serif;font-size:40px;font-weight:700;letter-spacing:-.01em;line-height:48px}.hero-video-modal-actions-item{font-feature-settings:"cv06" on,"calt" off,"liga" off;font-size:16px;font-weight:500;letter-spacing:-.01em;line-height:24px}.hero-video-modal-description{font-feature-settings:"cv06" on,"calt" off,"liga" off;font-size:20px;font-weight:400;letter-spacing:-.01em;line-height:28px}.hero-video-modal-actions-item-disabled{font-feature-settings:"cv06" on,"calt" off,"liga" off;font-size:16px;font-weight:400;letter-spacing:-.01em;line-height:24px}@media (max-width: 1248px){.hero-video-modal-title{font-size:28px;line-height:36px}}@media (max-width: 1248px){.hero-video-modal-description{font-size:16px;line-height:24px}}.hero-video-modal{height:100vh;left:0;padding:12px;position:fixed;text-align:left;top:0;width:100vw;z-index:99999}.hero-video-modal:not(.hero-video-modal-open){transition:.3s visibility;visibility:hidden}.hero-video-modal:not(.hero-video-modal-open) .hero-video-modal-inner{opacity:0;transform:scale(.95)}.hero-video-modal-content{width:100%}.hero-video-modal-inner{-webkit-backdrop-filter:blur(20px);backdrop-filter:blur(20px);background:#0a0118b3;border:1px solid rgba(255,255,255,.1);border-radius:16px;box-shadow:0 72px 54px #0a0118;height:100%;transition:.5s cubic-bezier(.6,.6,0,1) opacity,.5s cubic-bezier(.6,.6,0,1) transform;width:100%}.hero-video-modal .container-sm{display:flex;padding-top:96px}.hero-video-modal-toggle{background-color:#ffffff0a;border:1px solid rgba(255,255,255,.1);border-radius:999px;height:-moz-max-content;height:max-content;margin-right:32px;margin-top:7px;padding:10px;transition:.3s cubic-bezier(.6,.6,0,1) background-color,.3s cubic-bezier(.6,.6,0,1) border-color}.hero-video-modal-toggle:hover{background-color:#ffffff14;border-color:#ffffff26}.hero-video-modal-title{margin-bottom:16px}.hero-video-modal-description{margin-bottom:56px;max-width:624px}.hero-video-modal-title,.hero-video-modal-description{background:linear-gradient(90.49deg,#fffffff2,#fffc);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent}.hero-video-modal-videos{display:flex;transition:.45s cubic-bezier(.6,.6,0,1) transform;width:-moz-max-content;width:max-content}.hero-video-modal-videos-item{background:#ffffff0d;border:1px solid rgba(255,255,255,.1)!important;border-radius:16px;height:468px;overflow:hidden;position:relative;width:812px}.hero-video-modal-videos-item:not(:last-child){margin-right:30px}.hero-video-modal-videos-item-mask{background-color:#0a011880;cursor:pointer;height:100%;left:0;position:absolute;top:0;transition:.45s cubic-bezier(.6,.6,0,1) opacity;width:100%}.hero-video-modal-videos-item-mask:not(.hero-video-modal-videos-item-mask-active){opacity:0;pointer-events:none}.hero-video-modal-videos-item-mask:hover{opacity:.6}.hero-video-modal-videos-item iframe{border:0!important}.hero-video-modal-actions{color:#fff;display:flex;justify-content:space-between;margin-top:16px;width:720px}.hero-video-modal-actions-item{cursor:pointer}.hero-video-modal-actions-item-disabled{cursor:not-allowed;opacity:.5}@media (max-width: 1248px){.hero-video-modal{text-align:center}.hero-video-modal-title{margin-bottom:8px}.hero-video-modal-description{margin-bottom:24px}.hero-video-modal-videos{height:188px;margin:0 auto;position:relative;width:100%}.hero-video-modal-videos-item{display:none;height:188px;left:0;margin-right:0!important;position:absolute;top:0;width:100%}.hero-video-modal-videos-item-mask{display:none}.hero-video-modal-videos-item-active{display:block;z-index:1}.hero-video-modal-videos-item-active+.hero-video-modal-videos-item{display:block;opacity:.5;transform:scale(.95) translateY(13px)}.hero-video-modal-actions{width:100%}.hero-video-modal-toggle{margin-right:0;margin-top:0;position:absolute;right:16px;top:16px}}@media (max-width: 390px){.hero-video-modal{border-radius:0;padding:0}.hero-video-modal-inner{padding:4px}}',I=C,T=Object.freeze(Object.defineProperty({__proto__:null,s_2fqQIaG1NNw:I},Symbol.toStringTag,{value:"Module"})),M=()=>{const[e,i]=s();return i(e)},D=Object.freeze(Object.defineProperty({__proto__:null,s_ClwdiEGTKPg:M},Symbol.toStringTag,{value:"Module"}));export{F as a,A as b,I as c,M as d,B as e,N as p,j as s,S as s_Y1hmhGzUzUQ,z as u,R as v};
