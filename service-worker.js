!function(){"use strict";const e=1614856575605,t=`cache${e}`,n=["/client/client.1eb53409.js","/client/inject_styles.5607aec6.js","/client/index.f5beb5cf.js","/client/Container.49a09f78.js","/client/portfolio.c68fd311.js","/client/contact.6b1e2a23.js","/client/about.13abe14d.js","/client/index.84ffc94f.js","/client/[slug].ae480730.js"].concat(["/service-worker-index.html","/global.css","/logo.svg","/manifest.json"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
