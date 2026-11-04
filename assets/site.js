
document.addEventListener('DOMContentLoaded',()=>{const b=document.querySelector('.menu'),n=document.querySelector('nav');if(b&&n)b.onclick=()=>n.classList.toggle('open');const q=document.querySelector('#q'),r=document.querySelector('#region');function f(){document.querySelectorAll('[data-winery]').forEach(x=>x.style.display=(x.dataset.winery.toLowerCase().includes((q?.value||'').toLowerCase())&&(r?.value==='all'||!r?.value||x.dataset.region===r.value))?'grid':'none')}q?.addEventListener('input',f);r?.addEventListener('change',f);document.querySelectorAll('[data-year]').forEach(x=>x.textContent=new Date().getFullYear())});

/* Image fallback: if a remote photo fails to load, show a neutral placeholder instead of a broken-image icon. */
(function(){
  var PH='data:image/svg+xml;utf8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 10" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2f5d4f"/><stop offset="1" stop-color="#183b33"/></linearGradient></defs><rect width="16" height="10" fill="url(#g)"/></svg>');
  function fail(img){if(img.dataset.failed)return;img.dataset.failed='1';img.removeAttribute('srcset');img.src=PH}
  window.addEventListener('error',function(e){if(e.target&&e.target.tagName==='IMG')fail(e.target)},true);
  document.addEventListener('DOMContentLoaded',function(){document.querySelectorAll('img').forEach(function(i){if(i.complete&&i.naturalWidth===0&&i.src&&i.src.indexOf('data:')!==0)fail(i)})});
})();
