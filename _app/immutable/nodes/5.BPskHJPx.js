import{s as G,h as C,f as N,o as A}from"../chunks/scheduler.GJjAvMcU.js";import{S as F,i as H,g as b,s as M,h as k,j,x as O,c as P,f as x,k as d,a as B,y as v,F as D,A as J,C as K,B as Q}from"../chunks/index.Yzr1IG5R.js";import{e as T}from"../chunks/each.-oqiv04n.js";import{o as R,f as V,i as U}from"../chunks/index.JpawHTMn.js";function q(n,e,s){const c=n.slice();return c[7]=e[s],c}function z(n){let e,s,c,u;function r(){return n[6](n[7])}return{c(){e=b("img"),this.h()},l(a){e=k(a,"IMG",{class:!0,src:!0}),this.h()},h(){d(e,"class","w-75 img-fluid mx-auto d-block m-2"),C(e.src,s=n[7])||d(e,"src",s)},m(a,h){B(a,e,h),c||(u=D(e,"click",r),c=!0)},p(a,h){n=a,h&1&&!C(e.src,s=n[7])&&d(e,"src",s)},d(a){a&&x(e),c=!1,u()}}}function W(n){let e,s,c="Installations",u,r,a,h,y,w,f,_,m,p,E,L,g=T(n[0]),i=[];for(let t=0;t<g.length;t+=1)i[t]=z(q(n,g,t));return{c(){e=b("section"),s=b("h1"),s.textContent=c,u=M(),r=b("div"),a=b("img"),w=M(),f=b("div");for(let t=0;t<i.length;t+=1)i[t].c();this.h()},l(t){e=k(t,"SECTION",{});var o=j(e);s=k(o,"H1",{class:!0,"data-svelte-h":!0}),O(s)!=="svelte-1bze1vf"&&(s.textContent=c),u=P(o),r=k(o,"DIV",{class:!0});var l=j(r);a=k(l,"IMG",{src:!0,class:!0}),l.forEach(x),w=P(o),f=k(o,"DIV",{class:!0});var I=j(f);for(let S=0;S<i.length;S+=1)i[S].l(I);I.forEach(x),o.forEach(x),this.h()},h(){d(s,"class","display-5 text-center m-4"),C(a.src,h=n[1])||d(a,"src",h),d(a,"class","svelte-u1p1ef"),d(r,"class",y="lightbox "+n[2]+" svelte-u1p1ef"),d(f,"class","container-fluid")},m(t,o){B(t,e,o),v(e,s),v(e,u),v(e,r),v(r,a),v(e,w),v(e,f);for(let l=0;l<i.length;l+=1)i[l]&&i[l].m(f,null);p=!0,E||(L=D(r,"click",n[5]),E=!0)},p(t,[o]){if((!p||o&2&&!C(a.src,h=t[1]))&&d(a,"src",h),(!p||o&4&&y!==(y="lightbox "+t[2]+" svelte-u1p1ef"))&&d(r,"class",y),o&9){g=T(t[0]);let l;for(l=0;l<g.length;l+=1){const I=q(t,g,l);i[l]?i[l].p(I,o):(i[l]=z(I),i[l].c(),i[l].m(f,null))}for(;l<i.length;l+=1)i[l].d(1);i.length=g.length}},i(t){p||(t&&N(()=>{p&&(m&&m.end(1),_=Q(e,V,U),_.start())}),p=!0)},o(t){_&&_.invalidate(),t&&(m=J(e,V,R)),p=!1},d(t){t&&x(e),K(i,t),t&&m&&m.end(),E=!1,L()}}}function X(n,e,s){let c=[];A(async()=>{const _=await(await fetch("/data/installations.json")).json();s(0,c=_.paths.map(m=>_.prefix+m))});let u="",r="";const a=f=>{const _=document.getElementById("topLevelNav");s(1,u=f),s(2,r="active"),document.body.style.overflow="hidden",_&&(_.style.zIndex="999")},h=()=>{s(1,u=""),s(2,r=""),document.body.style.overflow=""};return[c,u,r,a,h,()=>h(),f=>a(f)]}class te extends F{constructor(e){super(),H(this,e,X,W,G,{})}}export{te as component};
