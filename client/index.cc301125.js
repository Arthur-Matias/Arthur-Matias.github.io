import{S as a,i as s,s as e,c as t,a as n,m as c,t as o,b as r,d as l,e as i,f as m,g as h,h as u,j as f,k as d,l as $,n as p,o as g,p as v,q as _,r as Y,u as b,v as x,w as y,x as H,y as j}from"./client.a54fc3a2.js";import{C as w}from"./Container.47b875bf.js";function E(a){let s,e,t,n,c,o,r,l;return{c(){s=m("div"),e=m("h5"),t=h("Hi, my name is"),n=u(),c=m("h1"),o=h("Arthur Matias"),this.h()},l(a){s=f(a,"DIV",{class:!0});var r=d(s);e=f(r,"H5",{class:!0,style:!0});var l=d(e);t=$(l,"Hi, my name is"),l.forEach(p),n=g(r),c=f(r,"H1",{class:!0});var i=d(c);o=$(i,"Arthur Matias"),i.forEach(p),r.forEach(p),this.h()},h(){v(e,"class","animate__animated animate__fadeInLeft svelte-226un9"),_(e,"--main-color",a[0]),v(c,"class","animate__animated animate__fadeInRight svelte-226un9"),v(s,"class","home svelte-226un9")},m(i,m){Y(i,s,m),b(s,e),b(e,t),b(s,n),b(s,c),b(c,o),r||(l=[x(s,"touchmove",a[3]),x(s,"wheel",a[4])],r=!0)},p(a,s){1&s&&_(e,"--main-color",a[0])},d(a){a&&p(s),r=!1,y(l)}}}function I(a){let s,e;return s=new w({props:{$$slots:{default:[E]},$$scope:{ctx:a}}}),{c(){t(s.$$.fragment)},l(a){n(s.$$.fragment,a)},m(a,t){c(s,a,t),e=!0},p(a,[e]){const t={};65&e&&(t.$$scope={dirty:e,ctx:a}),s.$set(t)},i(a){e||(o(s.$$.fragment,a),e=!0)},o(a){r(s.$$.fragment,a),e=!1},d(a){l(s,a)}}}function T(a,s,e){let t,n;function c(a){console.log(a.deltaY),a.deltaY>0&&H("/about",{replace:!0})}function o(a){let s=a.changedTouches[0];console.log(a.changedTouches[0]),void 0===n?n=a.changedTouches[0]:n.screenY>s.screenY?H("/about",{replace:!0}):(n.screenY,s.screenY)}i(a,j,(a=>e(0,t=a)));return[t,c,o,a=>{o(a)},a=>c(a)]}export default class extends a{constructor(a){super(),s(this,a,T,I,e,{})}}
