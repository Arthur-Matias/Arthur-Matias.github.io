import{S as t,i as s,s as e,a as n,k as a,l as o,q as i,d as r,b as c,n as u,o as l,p as f,r as h,f as d,v as p,H as m,D as v}from"./client.27873afe.js";function y(t){let s,e,y,x,H,g,j=t[0].title+"",w=t[0].html+"";return document.title=s=t[0].title,{c(){e=n(),y=a("h1"),x=o(j),H=n(),g=a("div"),this.h()},l(t){i('[data-svelte="svelte-1uty71u"]',document.head).forEach(r),e=c(t),y=u(t,"H1",{});var s=l(y);x=f(s,j),s.forEach(r),H=c(t),g=u(t,"DIV",{class:!0}),l(g).forEach(r),this.h()},h(){h(g,"class","content svelte-emm3f3")},m(t,s){d(t,e,s),d(t,y,s),p(y,x),d(t,H,s),d(t,g,s),g.innerHTML=w},p(t,[e]){1&e&&s!==(s=t[0].title)&&(document.title=s),1&e&&j!==(j=t[0].title+"")&&m(x,j),1&e&&w!==(w=t[0].html+"")&&(g.innerHTML=w)},i:v,o:v,d(t){t&&r(e),t&&r(y),t&&r(H),t&&r(g)}}}var x=function(t,s,e,n){return new(e||(e=Promise))((function(a,o){function i(t){try{c(n.next(t))}catch(t){o(t)}}function r(t){try{c(n.throw(t))}catch(t){o(t)}}function c(t){var s;t.done?a(t.value):(s=t.value,s instanceof e?s:new e((function(t){t(s)}))).then(i,r)}c((n=n.apply(t,s||[])).next())}))};function H({params:t}){return x(this,void 0,void 0,(function*(){const s=yield this.fetch(`blog/${t.slug}.json`),e=yield s.json();if(200===s.status)return{post:e};this.error(s.status,e.message)}))}function g(t,s,e){let{post:n}=s;return t.$$set=t=>{"post"in t&&e(0,n=t.post)},[n]}export default class extends t{constructor(t){super(),s(this,t,g,y,e,{post:0})}}export{H as preload};