if(!self.define){let e,i={};const s=(s,n)=>(s=new URL(s+".js",n).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(n,r)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let t={};const c=e=>s(e,o),d={module:{uri:o},exports:t,require:c};i[o]=Promise.all(n.map((e=>d[e]||c(e)))).then((e=>(r(...e),t)))}}define(["./workbox-3625d7b0"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index-3b2daa9a.css",revision:null},{url:"assets/index-b1643431.js",revision:null},{url:"index.html",revision:"6807ea07f3833394b94df482d103ef21"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"worker.js",revision:"671f98260b25b5d03e3694ac65e187d5"},{url:"icons/icon.png",revision:"bf9a27a80b97a75facf4e912501ca579"},{url:"icons/icon.svg",revision:"1cafab5ee42058a3d628f8b4f6b4f04b"},{url:"manifest.webmanifest",revision:"e94e3bdc0bd9cb304e032dc0644862b0"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
