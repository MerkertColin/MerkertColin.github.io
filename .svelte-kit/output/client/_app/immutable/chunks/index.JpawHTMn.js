import{i}from"./scheduler.GJjAvMcU.js";const s=400,g=s,P={duration:s,x:"-100vw"},T={duration:s,delay:g,x:"100vw"};function v(n){const t=n-1;return t*t*t+1}function U(n,{delay:t=0,duration:c=400,easing:e=v,x:u=0,y:f=0,opacity:y=0}={}){const o=getComputedStyle(n),a=+o.opacity,l=o.transform==="none"?"":o.transform,m=a*(1-y),[d,p]=i(u),[$,x]=i(f);return{delay:t,duration:c,easing:e,css:(r,_)=>`
			transform: ${l} translate(${(1-r)*d}${p}, ${(1-r)*$}${x});
			opacity: ${a-m*_}`}}export{U as f,T as i,P as o};
