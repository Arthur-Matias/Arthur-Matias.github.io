import{_ as t,a as n,b as a,c as e,i as s,d as c,S as o,s as r,e as i,f as u,q as f,g as l,h,j as m,k as d,m as v,l as p,t as $,n as g,o as y,p as _,r as R,u as Y,v as x,w as E,x as H,y as b,z as A,A as j,B as w,C as B,D as C,E as I}from"./client.628fc276.js";import{C as M}from"./Container.6f092bd7.js";function T(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var s,c=n(t);if(e){var o=n(this).constructor;s=Reflect.construct(c,arguments,o)}else s=c.apply(this,arguments);return a(this,s)}}function D(t){var n,a,e,s,c,o,r,u;return{c:function(){n=R("div"),a=R("h5"),e=Y("Hi, my name is"),s=i(),c=R("h1"),o=Y("Arthur Matias"),this.h()},l:function(t){n=x(t,"DIV",{class:!0});var r=E(n);a=x(r,"H5",{class:!0,style:!0});var i=E(a);e=H(i,"Hi, my name is"),i.forEach(l),s=h(r),c=x(r,"H1",{class:!0});var u=E(c);o=H(u,"Arthur Matias"),u.forEach(l),r.forEach(l),this.h()},h:function(){b(a,"class","animate__animated animate__fadeInLeft svelte-226un9"),A(a,"--main-color",t[0]),b(c,"class","animate__animated animate__fadeInRight svelte-226un9"),b(n,"class","home svelte-226un9")},m:function(i,f){d(i,n,f),j(n,a),j(a,e),j(n,s),j(n,c),j(c,o),r||(u=[w(n,"touchmove",t[3]),w(n,"wheel",t[4])],r=!0)},p:function(t,n){1&n&&A(a,"--main-color",t[0])},d:function(t){t&&l(n),r=!1,B(u)}}}function k(t){var n,a,e;return a=new M({props:{$$slots:{default:[D]},$$scope:{ctx:t}}}),{c:function(){n=i(),u(a.$$.fragment),this.h()},l:function(t){f('[data-svelte="svelte-171ae18"]',document.head).forEach(l),n=h(t),m(a.$$.fragment,t),this.h()},h:function(){document.title="Arthur Matias | Home"},m:function(t,s){d(t,n,s),v(a,t,s),e=!0},p:function(t,n){var e=p(n,1)[0],s={};65&e&&(s.$$scope={dirty:e,ctx:t}),a.$set(s)},i:function(t){e||($(a.$$.fragment,t),e=!0)},o:function(t){g(a.$$.fragment,t),e=!1},d:function(t){t&&l(n),y(a,t)}}}function q(t,n,a){var e,s;function c(t){console.log(t.deltaY),t.deltaY>0&&C("/about",{replace:!0})}function o(t){var n=t.changedTouches[0];console.log(t.changedTouches[0]),void 0===s?s=t.changedTouches[0]:s.screenY>n.screenY?C("/about",{replace:!0}):(s.screenY,n.screenY)}_(t,I,(function(t){return a(0,e=t)}));return[e,c,o,function(t){o(t)},function(t){return c(t)}]}var z=function(n){t(i,o);var a=T(i);function i(t){var n;return e(this,i),n=a.call(this),s(c(n),t,q,k,r,{}),n}return i}();export default z;
