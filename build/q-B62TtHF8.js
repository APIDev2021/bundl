import{_ as s}from"./q-DYCSKtUC.js";import{z as d,r as n,d as p,k as g,q as i,l as u,S as b,g as _,y as m}from"./q-BdDSi9nv.js";const v='.magical-borders{position:relative}.magical-borders:hover .magical-borders-content>*:after{opacity:1}.magical-borders-content>*{background:linear-gradient(180deg,#a9a3c233,#a9a3c20c);border-radius:16px;position:relative}.magical-borders-content>* .magical-borders-inner{background-color:#0a0118;border-radius:16px;display:flex;flex-direction:column;flex-grow:1;top:1px;right:1px;bottom:1px;left:1px;position:absolute;z-index:2}.magical-borders-content>*:hover:before{opacity:1}.magical-borders-content>*:before,.magical-borders-content>*:after{border-radius:inherit;content:"";height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transition:opacity .5s;width:100%}.magical-borders-content>*:before{background:radial-gradient(var(--circle-size, 600px) circle at var(--mouse-x) var(--mouse-y),rgba(255,255,255,.06),transparent 40%);z-index:15}.magical-borders-content>*:after{background:radial-gradient(var(--circle-size, 600px) circle at var(--mouse-x) var(--mouse-y),rgba(255,255,255,.4),transparent 40%);z-index:1}',f=v,y=Object.freeze(Object.defineProperty({__proto__:null,s_o1yGT7PTVA4:f},Symbol.toStringTag,{value:"Module"})),T=t=>{d(i(()=>s(()=>Promise.resolve().then(()=>y),void 0),"s_o1yGT7PTVA4"));const r=t.ref||n(),a=n([]),e=i(()=>s(()=>Promise.resolve().then(()=>h),void 0),"s_pYVTIfNVm4E",[a,r]);return p("div",{ref:r},{class:g(o=>["magical-borders",o.class],[t]),onMouseMove$:e},u(b,null,3,"Ad_0"),1,"Ad_1")},x=t=>{const[r,a]=_();if(r.value.length===0){const e=a.value.querySelectorAll(".magical-borders-content");r.value=[...e].map(o=>[...o.children]).flat()}r.value.forEach(e=>{const o=e.getBoundingClientRect(),c=t.clientX-o.left,l=t.clientY-o.top;e.style.setProperty("--mouse-x",`${c}px`),e.style.setProperty("--mouse-y",`${l}px`)})},h=Object.freeze(Object.defineProperty({__proto__:null,_hW:m,s_pYVTIfNVm4E:x},Symbol.toStringTag,{value:"Module"}));export{x as a,T as s,f as s_o1yGT7PTVA4};
