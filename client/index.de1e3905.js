import{S as a,i as s,s as t,a as e,c as n,q as r,d as o,b as i,e as c,f as l,m,t as h,g as f,h as u,j as d,k as $,l as p,n as g,o as v,p as _,r as b,u as x,v as y,w as H,x as E,y as j}from"./client.12ce3b48.js";import{C as w}from"./Container.93e578ff.js";function A(a){let s,t,n,r,c,m,h,f;return{c(){s=$("div"),t=$("h5"),n=p("Hi, my name is"),r=e(),c=$("h1"),m=p("Arthur Matias"),this.h()},l(a){s=g(a,"DIV",{class:!0});var e=v(s);t=g(e,"H5",{class:!0,style:!0});var l=v(t);n=_(l,"Hi, my name is"),l.forEach(o),r=i(e),c=g(e,"H1",{class:!0});var h=v(c);m=_(h,"Arthur Matias"),h.forEach(o),e.forEach(o),this.h()},h(){b(t,"class","animate__animated animate__fadeInLeft svelte-1ungoab"),x(t,"--main-color",a[0]),b(c,"class","animate__animated animate__fadeInRight svelte-1ungoab"),b(s,"class","home svelte-1ungoab")},m(e,o){l(e,s,o),y(s,t),y(t,n),y(s,r),y(s,c),y(c,m),h||(f=H(s,"wheel",a[2]),h=!0)},p(a,s){1&s&&x(t,"--main-color",a[0])},d(a){a&&o(s),h=!1,f()}}}function I(a){let s,t,d;return t=new w({props:{$$slots:{default:[A]},$$scope:{ctx:a}}}),{c(){s=e(),n(t.$$.fragment),this.h()},l(a){r('[data-svelte="svelte-e0rge3"]',document.head).forEach(o),s=i(a),c(t.$$.fragment,a),this.h()},h(){document.title="Home | Arthur Matias"},m(a,e){l(a,s,e),m(t,a,e),d=!0},p(a,[s]){const e={};9&s&&(e.$$scope={dirty:s,ctx:a}),t.$set(e)},i(a){d||(h(t.$$.fragment,a),d=!0)},o(a){f(t.$$.fragment,a),d=!1},d(a){a&&o(s),u(t,a)}}}function M(a,s,t){let e;function n(a){console.log(a.deltaY),a.deltaY>0&&E("/about",{replace:!0})}d(a,j,(a=>t(0,e=a)));return[e,n,a=>n(a)]}export default class extends a{constructor(a){super(),s(this,a,M,I,t,{})}}
