!function(){"use strict";const e=1614851768472,t=`cache${e}`,n=["/client/client.6cd4b75b.js","/client/inject_styles.5607aec6.js","/client/index.51739e0a.js","/client/Container.0d786fe2.js","/client/portfolio.9bfed663.js","/client/contact.e386c317.js","/client/about.2dcd1643.js","/client/index.62da309a.js","/client/[slug].be3e8e84.js"].concat(["/service-worker-index.html","/global.css","/logo.svg","/manifest.json"]),s=new Set(n);self.addEventListener("install",(e=>{e.waitUntil(caches.open(t).then((e=>e.addAll(n))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(e=>{e.waitUntil(caches.keys().then((async e=>{for(const n of e)n!==t&&await caches.delete(n);self.clients.claim()})))})),self.addEventListener("fetch",(t=>{if("GET"!==t.request.method||t.request.headers.has("range"))return;const n=new URL(t.request.url),c=n.protocol.startsWith("http"),a=n.hostname===self.location.hostname&&n.port!==self.location.port,i=n.host===self.location.host&&s.has(n.pathname),o="only-if-cached"===t.request.cache&&!i;!c||a||o||t.respondWith((async()=>i&&await caches.match(t.request)||async function(t){const n=await caches.open(`offline${e}`);try{const e=await fetch(t);return n.put(t,e.clone()),e}catch(e){const s=await n.match(t);if(s)return s;throw e}}(t.request))())}))}();
