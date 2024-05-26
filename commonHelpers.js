import{S as m,i as c}from"./assets/vendor-0fc460d7.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const d=a=>a.map(({likes:s,views:t,comments:i,downloads:e,webformatURL:r,largeImageURL:o,tags:u})=>`
    <li class="gallery-item">
    <a class="gallery-link" href="${o}">
      <img
        class="gallery-item-image"
        src="${r}"
        alt="${u}"
      />
    </a>
      <div class="image-info">
          <span class="image-likes">Likes: ${s}</span>
          <span class="image-views">Views: ${t}</span >
          <span  class="image-comments">Comments: ${i}</span>
          <span class="image-downloads">Dowloads: ${e}</span>
      </div>
   
      </li>
  `).join("");new m(".gallery a",{captionsData:"alt",captionDelay:250});const f="28216731-30bd748fb13dcf95cdddced76",p="https://pixabay.com/api/",y=a=>{const s=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:"true"});return fetch(`${p}/?${s}`).then(t=>{if(!t.ok)throw new Error(t.statusText);return t.json()})},n=document.querySelector(".gallery"),g=document.querySelector(".srch-form"),l=document.querySelector(".loader");function h(a){a.preventDefault();const s=a.target.elements.searchKeyword.value.trim();if(n.innerHTML="",s==="")return c.error({message:"Sorry, there are no images matching your search query. Please try again!"});n.innerHTML="",l.classList.remove("is-hidden"),y(s).then(t=>{t.hits.length===0&&c.error({message:"Sorry, there are no images matching your search query. Please try again!"}),n.innerHTML=d(t.hits),new m(".gallery a",{captionsData:"alt",captionsDelay:250})}).catch(t=>console.log(t)).finally(()=>{a.target.reset(),l.classList.add("is-hidden")})}g.addEventListener("submit",h);
//# sourceMappingURL=commonHelpers.js.map
