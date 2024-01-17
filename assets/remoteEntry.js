import{_ as c}from"./hardik-preload-helper.js";const l=new Set(["Module","__esModule","default","_export_sfc"]);let a={"./App":()=>(d(["hardik-style.css"]),f("./hardik-__federation_expose_App.js").then(e=>Object.keys(e).every(t=>l.has(t))?()=>e.default:()=>e))};const i={},d=e=>{const t=import.meta.url;if(typeof t>"u"){console.warn('The remote style takes effect only when the build.target option in the vite.config.ts file is higher than that of "es2020".');return}const o=t.substring(0,t.lastIndexOf("remoteEntry.js"));e.forEach(s=>{const r=o+s;if(r in i)return;i[r]=!0;const n=document.head.appendChild(document.createElement("link"));n.href=r,n.rel="stylesheet"})};async function f(e){return c(()=>import(e),__vite__mapDeps([]))}const p=e=>{if(!a[e])throw new Error("Can not find remote module "+e);return a[e]()},u=e=>{globalThis.__federation_shared__=globalThis.__federation_shared__||{},Object.entries(e).forEach(([t,o])=>{const s=Object.keys(o)[0],r=Object.values(o)[0],n=r.scope||"default";globalThis.__federation_shared__[n]=globalThis.__federation_shared__[n]||{};const _=globalThis.__federation_shared__[n];(_[t]=_[t]||{})[s]=r})};export{d as dynamicLoadingCss,p as get,u as init};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
