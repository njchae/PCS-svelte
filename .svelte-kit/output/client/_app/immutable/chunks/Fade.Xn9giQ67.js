import{s as _,j as h,e as g,c as b,b as p,d as c,f as T,k as r,g as y,u as L,l as P,m as v,o as d}from"./scheduler.ZXF-Obww.js";import{S as O,i as E,t as w,b as F}from"./index.o5rAxo9B.js";function I(o){let t,s;const l=o[5].default,a=h(l,o,o[4],null);return{c(){t=g("div"),a&&a.c(),this.h()},l(e){t=b(e,"DIV",{id:!0,style:!0});var n=p(t);a&&a.l(n),n.forEach(c),this.h()},h(){T(t,"id","container"),r(t,"opacity",o[0]),r(t,"transition-duration","0.7s"),r(t,"transform","translateY("+o[1]+"px)")},m(e,n){y(e,t,n),a&&a.m(t,null),s=!0},p(e,[n]){a&&a.p&&(!s||n&16)&&L(a,l,e,e[4],s?v(l,e[4],n,null):P(e[4]),null),(!s||n&1)&&r(t,"opacity",e[0]),(!s||n&2)&&r(t,"transform","translateY("+e[1]+"px)")},i(e){s||(w(a,e),s=!0)},o(e){F(a,e),s=!1},d(e){e&&c(t),a&&a.d(e)}}}function S(o,t,s){let{$$slots:l={},$$scope:a}=t,e=0,n=-20,{visibleOnPageLoad:f=!0}=t,{fadeTime:u=1e3}=t;return f?d(()=>{setTimeout(()=>{s(0,e=1),s(1,n=0)},u)}):d(()=>{window.addEventListener("scroll",()=>{const m=document.getElementById("container")?.scrollTop;m&&m<.1&&(s(0,e=1),s(1,n=0))})}),o.$$set=i=>{"visibleOnPageLoad"in i&&s(2,f=i.visibleOnPageLoad),"fadeTime"in i&&s(3,u=i.fadeTime),"$$scope"in i&&s(4,a=i.$$scope)},[e,n,f,u,a,l]}class k extends O{constructor(t){super(),E(this,t,S,I,_,{visibleOnPageLoad:2,fadeTime:3})}}export{k as F};