import{S as y,i as h}from"./assets/vendor-CNpq9t8i.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const d=document.querySelector(".loader"),g=document.querySelector(".gallery");let u;function b(o){const i=o.hits.map(({webformatURL:l,largeImageURL:s,tags:e,likes:t,views:n,comments:r,downloads:m})=>`
    <li class="card">
      <a href="${s}">
        <img src="${l}" alt="${e}" loading="lazy"/>
      </a>
      <ul class="description">
        <li><p>Likes</p><span>${t}</span></li>
        <li><p>View</p><span>${n}</span></li>
        <li><p>Comments</p><span>${r}</span></li>
        <li><p>Download</p><span>${m}</span></li>
      </ul>
    </li>
  `).join("");g.innerHTML=i,u?u.refresh():u=new y(".gallery a",{captionsData:"alt"})}function p(){d.style.display="none"}function $(){d.style.display="block"}const q=document.querySelector(".gallery");function L(o){const{url:i,key:l,q:s,image_type:e,orientation:t,safesearch:n}=o;return fetch(`${i}?key=${l}&q=${s}&image_type=${e}&orientation=${t}&safesearch=${n}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{r.total===0?(q.innerHTML="",h.show({position:"topRight",color:"red",message:"Sorry, there are no images matching your search query. Please try again!"})):b(r)}).catch(r=>{throw r}).finally(()=>p())}const S=document.querySelector("#form"),E=document.querySelector(".inputFild"),c=document.querySelector(".btnSearchImg");c.disabled=!0;p();const f={url:"https://pixabay.com/api/",key:"52935594-c28acfca0b14dad36f3e3eac1",q:"",image_type:"photo",orientation:"horizontal",safesearch:!0};let a="";E.addEventListener("input",o=>{if(a=o.target.value.trim(),a===""){c.disabled=!0;return}c.disabled=!1,f.q=a});S.addEventListener("submit",o=>{if(o.preventDefault(),a===""){c.disabled=!0,console.log("Enetr some text!");return}$(),L(f)});
//# sourceMappingURL=index.js.map
