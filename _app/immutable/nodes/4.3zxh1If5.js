import{s as O,n as E,o as F,f as I,r as J,h as S}from"../chunks/scheduler.BYpAmZKV.js";import{S as q,i as z,g as p,s as k,h as v,j as y,f as g,c as T,x as $,k as d,a as C,y as m,A as K,E as M,d as w,p as Q,t as U,b as R,m as P,n as D,o as L,B as A,z as G,r as W,u as X,v as Y,w as Z}from"../chunks/index.-F1yMgkN.js";import{f as x,o as ee,i as te}from"../chunks/index.5WoYFeK4.js";import{e as N}from"../chunks/each.-oqiv04n.js";function V(f,e,s){const c=f.slice();return c[4]=e[s],c[6]=s,c}function j(f){let e,s,c=f[4].name+"",l,h,u,i=f[4].material+"",_,t,a,n;return{c(){e=p("div"),s=p("h5"),l=P(c),h=k(),u=p("p"),_=P(i),this.h()},l(o){e=v(o,"DIV",{class:!0});var r=y(e);s=v(r,"H5",{class:!0});var b=y(s);l=D(b,c),b.forEach(g),h=T(r),u=v(r,"P",{class:!0});var H=y(u);_=D(H,i),H.forEach(g),r.forEach(g),this.h()},h(){d(s,"class","text-dark display-6 fs-2 fw-bold"),d(u,"class","text-dark display-6 fs-5"),d(e,"class","carousel-caption d-none d-md-block bg-light rounded")},m(o,r){C(o,e,r),m(e,s),m(s,l),m(e,h),m(e,u),m(u,_),n=!0},p(o,r){(!n||r&1)&&c!==(c=o[4].name+"")&&L(l,c),(!n||r&1)&&i!==(i=o[4].material+"")&&L(_,i)},i(o){n||(o&&S(()=>{n&&(a&&a.end(1),t=A(e,x,{}),t.start())}),n=!0)},o(o){t&&t.invalidate(),o&&(a=G(e,x,{})),n=!1},d(o){o&&g(e),o&&a&&a.end()}}}function B(f){let e,s,c,l,h,u,i,_,t=f[1]&&j(f);return{c(){e=p("div"),s=p("img"),h=k(),t&&t.c(),u=k(),this.h()},l(a){e=v(a,"DIV",{class:!0});var n=y(e);s=v(n,"IMG",{class:!0,src:!0,alt:!0}),h=T(n),t&&t.l(n),u=T(n),n.forEach(g),this.h()},h(){d(s,"class","d-block mx-auto svelte-t3nscg"),I(s.src,c=f[4].path)||d(s,"src",c),d(s,"alt",l=f[4].name),d(e,"class","carousel-item "+(f[6]===0?"active":"")+" svelte-t3nscg")},m(a,n){C(a,e,n),m(e,s),m(e,h),t&&t.m(e,null),m(e,u),i||(_=[M(s,"mouseenter",f[2]),M(s,"mouseleave",f[3])],i=!0)},p(a,n){n&1&&!I(s.src,c=a[4].path)&&d(s,"src",c),n&1&&l!==(l=a[4].name)&&d(s,"alt",l),a[1]?t?(t.p(a,n),n&2&&w(t,1)):(t=j(a),t.c(),w(t,1),t.m(e,u)):t&&(Q(),U(t,1,1,()=>{t=null}),R())},d(a){a&&g(e),t&&t.d(),i=!1,J(_)}}}function se(f){let e,s,c,l,h='<span class="carousel-control-prev-icon bg-dark rounded" aria-hidden="true"></span> <span class="visually-hidden">Previous</span>',u,i,_='<span class="carousel-control-next-icon bg-dark rounded" aria-hidden="true"></span> <span class="visually-hidden">Next</span>',t=N(f[0]),a=[];for(let n=0;n<t.length;n+=1)a[n]=B(V(f,t,n));return{c(){e=p("div"),s=p("div");for(let n=0;n<a.length;n+=1)a[n].c();c=k(),l=p("button"),l.innerHTML=h,u=k(),i=p("button"),i.innerHTML=_,this.h()},l(n){e=v(n,"DIV",{id:!0,class:!0});var o=y(e);s=v(o,"DIV",{class:!0});var r=y(s);for(let b=0;b<a.length;b+=1)a[b].l(r);r.forEach(g),c=T(o),l=v(o,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0,"data-svelte-h":!0}),$(l)!=="svelte-3aa77u"&&(l.innerHTML=h),u=T(o),i=v(o,"BUTTON",{class:!0,type:!0,"data-bs-target":!0,"data-bs-slide":!0,"data-svelte-h":!0}),$(i)!=="svelte-1xve0yy"&&(i.innerHTML=_),o.forEach(g),this.h()},h(){d(s,"class","carousel-inner"),d(l,"class","carousel-control-prev"),d(l,"type","button"),d(l,"data-bs-target","#imgCarousel"),d(l,"data-bs-slide","prev"),d(i,"class","carousel-control-next"),d(i,"type","button"),d(i,"data-bs-target","#imgCarousel"),d(i,"data-bs-slide","next"),d(e,"id","imgCarousel"),d(e,"class","carousel slide h-100 w-100")},m(n,o){C(n,e,o),m(e,s);for(let r=0;r<a.length;r+=1)a[r]&&a[r].m(s,null);m(e,c),m(e,l),m(e,u),m(e,i)},p(n,[o]){if(o&3){t=N(n[0]);let r;for(r=0;r<t.length;r+=1){const b=V(n,t,r);a[r]?a[r].p(b,o):(a[r]=B(b),a[r].c(),a[r].m(s,null))}for(;r<a.length;r+=1)a[r].d(1);a.length=t.length}},i:E,o:E,d(n){n&&g(e),K(a,n)}}}function ae(f,e,s){let c=[];F(async()=>{const i=await fetch("/images.json");s(0,c=await i.json())});let l=!0;return[c,l,()=>s(1,l=!1),()=>s(1,l=!0)]}class ne extends q{constructor(e){super(),z(this,e,ae,se,O,{})}}function re(f){let e,s,c="Paintings",l,h,u,i,_;return h=new ne({}),{c(){e=p("section"),s=p("h1"),s.textContent=c,l=k(),W(h.$$.fragment),this.h()},l(t){e=v(t,"SECTION",{});var a=y(e);s=v(a,"H1",{class:!0,"data-svelte-h":!0}),$(s)!=="svelte-8y8nnz"&&(s.textContent=c),l=T(a),X(h.$$.fragment,a),a.forEach(g),this.h()},h(){d(s,"class","display-5 text-center m-4")},m(t,a){C(t,e,a),m(e,s),m(e,l),Y(h,e,null),_=!0},p:E,i(t){_||(w(h.$$.fragment,t),t&&S(()=>{_&&(i&&i.end(1),u=A(e,x,te),u.start())}),_=!0)},o(t){U(h.$$.fragment,t),u&&u.invalidate(),t&&(i=G(e,x,ee)),_=!1},d(t){t&&g(e),Z(h),t&&i&&i.end()}}}class ue extends q{constructor(e){super(),z(this,e,null,re,O,{})}}export{ue as component};