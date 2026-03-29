import{a as S,S as P,i as n}from"./assets/vendor-C2ySes1p.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const q="55217883-a145003b8f3fe15b3b9351ee8",_="https://pixabay.com/api/",f=15;async function m(a,o){return(await S.get(_,{params:{key:q,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:f}})).data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),g=document.querySelector(".button-load-more"),E=new P(".gallery a",{captionsData:"alt",captionDelay:250});function L(a){const t=a.map(r=>`
      <li class="gallery__item">
        <a href="${r.largeImageURL}">
          <img src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
        </a>
        <div class="info">
  <p class="info-item">
    <span class="info-title">Likes</span>
    <span class="info-value">${r.likes}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Views</span>
    <span class="info-value">${r.views}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Comments</span>
    <span class="info-value">${r.comments}</span>
  </p>
  <p class="info-item">
    <span class="info-title">Downloads</span>
    <span class="info-value">${r.downloads}</span>
  </p>
</div>
      </li>
    `).join("");y.insertAdjacentHTML("beforeend",t),E.refresh()}function M(){y.innerHTML=""}function v(){h.classList.add("active")}function w(){h.classList.remove("active")}function b(){g.classList.add("is-hidden")}function u(){g.classList.remove("is-hidden")}const p=document.querySelector(".form"),A=document.querySelector(".button-load-more");let i=1,c="",d=0;p.addEventListener("submit",async a=>{if(a.preventDefault(),c=p.querySelector('input[name="search-text"]').value.trim(),!c){n.warning({message:"Please enter a search term!"});return}i=1,M(),b(),v();try{const t=await m(c,i);if(d=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!"});return}L(t.hits),d>f?u():n.info({message:"We're sorry, but you've reached the end of search results."})}catch{n.error({message:"Something went wrong. Please try again later!"})}finally{w()}});A.addEventListener("click",async()=>{i+=1,b(),v();try{const a=await m(c,i);L(a.hits);const o=Math.ceil(d/f);i<o?u():n.info({message:"We're sorry, but you've reached the end of search results."});const t=document.querySelector(".gallery__item");if(t){const r=t.getBoundingClientRect().height;window.scrollBy({top:r*2,behavior:"smooth"})}}catch{n.error({message:"Something went wrong. Please try again later!"}),u()}finally{w()}});
//# sourceMappingURL=index.js.map
