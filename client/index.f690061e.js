import{S as t,i as s,s as e,k as l,l as r,n as o,o as n,p as a,d as h,r as c,f,v as i,G as u,a as p,q as g,b as d,E as m,H as v}from"./client.fcc1a577.js";function E(t,s,e){const l=t.slice();return l[1]=s[e],l}function b(t){let s,e,p,g,d=t[1].title+"";return{c(){s=l("li"),e=l("a"),p=r(d),this.h()},l(t){s=o(t,"LI",{});var l=n(s);e=o(l,"A",{rel:!0,href:!0});var r=n(e);p=a(r,d),r.forEach(h),l.forEach(h),this.h()},h(){c(e,"rel","prefetch"),c(e,"href",g="blog/"+t[1].slug)},m(t,l){f(t,s,l),i(s,e),i(e,p)},p(t,s){1&s&&d!==(d=t[1].title+"")&&u(p,d),1&s&&g!==(g="blog/"+t[1].slug)&&c(e,"href",g)},d(t){t&&h(s)}}}function j(t){let s,e,u,j,x,A=t[0],H=[];for(let s=0;s<A.length;s+=1)H[s]=b(E(t,A,s));return{c(){s=p(),e=l("h1"),u=r("Recent posts"),j=p(),x=l("ul");for(let t=0;t<H.length;t+=1)H[t].c();this.h()},l(t){g('[data-svelte="svelte-w40ptd"]',document.head).forEach(h),s=d(t),e=o(t,"H1",{});var l=n(e);u=a(l,"Recent posts"),l.forEach(h),j=d(t),x=o(t,"UL",{class:!0});var r=n(x);for(let t=0;t<H.length;t+=1)H[t].l(r);r.forEach(h),this.h()},h(){document.title="Blog | Arthur Matias",c(x,"class","svelte-1frg2tf")},m(t,l){f(t,s,l),f(t,e,l),i(e,u),f(t,j,l),f(t,x,l);for(let t=0;t<H.length;t+=1)H[t].m(x,null)},p(t,[s]){if(1&s){let e;for(A=t[0],e=0;e<A.length;e+=1){const l=E(t,A,e);H[e]?H[e].p(l,s):(H[e]=b(l),H[e].c(),H[e].m(x,null))}for(;e<H.length;e+=1)H[e].d(1);H.length=A.length}},i:m,o:m,d(t){t&&h(s),t&&h(e),t&&h(j),t&&h(x),v(H,t)}}}function x(){return this.fetch("blog.json").then((t=>t.json())).then((t=>({posts:t})))}function A(t,s,e){let{posts:l}=s;return t.$$set=t=>{"posts"in t&&e(0,l=t.posts)},[l]}export default class extends t{constructor(t){super(),s(this,t,A,j,e,{posts:0})}}export{x as preload};
