!function(){"use strict";const t=1614850990440,e=`cache${t}`,c=["/client/client.2758c6cb.js","/client/inject_styles.5607aec6.js","/client/index.26621f42.js","/client/Container.affdecaf.js","/client/portfolio.d4fb882a.js","/client/contact.30cf7f4d.js","/client/about.132d7d37.js","/client/index.6c99731f.js","/client/[slug].2d9cdacf.js"].concat(["/service-worker-index.html","/global.css","/logo.svg","/manifest.json"]),n=new Set(c);self.addEventListener("install",(t=>{t.waitUntil(caches.open(e).then((t=>t.addAll(c))).then((()=>{self.skipWaiting()})))})),self.addEventListener("activate",(t=>{t.waitUntil(caches.keys().then((async t=>{for(const c of t)c!==e&&await caches.delete(c);self.clients.claim()})))})),self.addEventListener("fetch",(e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const c=new URL(e.request.url),s=c.protocol.startsWith("http"),a=c.hostname===self.location.hostname&&c.port!==self.location.port,i=c.host===self.location.host&&n.has(c.pathname),o="only-if-cached"===e.request.cache&&!i;!s||a||o||e.respondWith((async()=>i&&await caches.match(e.request)||async function(e){const c=await caches.open(`offline${t}`);try{const t=await fetch(e);return c.put(e,t.clone()),t}catch(t){const n=await c.match(e);if(n)return n;throw t}}(e.request))())}))}();