(() => {
 const menu=document.querySelector('.menu-toggle'), nav=document.querySelector('.main-nav');
 menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Menü schließen':'Menü öffnen')});
 nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const filter=document.querySelector('#site-search');
 filter?.addEventListener('input',()=>{const q=filter.value.trim().toLocaleLowerCase(document.documentElement.lang||'hu');let shown=0;document.querySelectorAll('[data-searchable]').forEach(el=>{const hit=!q||(el.dataset.searchable+' '+el.textContent).toLocaleLowerCase(document.documentElement.lang||'hu').includes(q);el.hidden=!hit;if(hit)shown++});const empty=document.querySelector('#empty-state');if(empty)empty.hidden=shown>0});
 const wf=document.querySelector('#winery-filter');wf?.addEventListener('input',()=>{const q=wf.value.trim().toLocaleLowerCase();document.querySelectorAll('.winery').forEach(el=>el.hidden=!((el.dataset.searchable+' '+el.textContent).toLocaleLowerCase().includes(q))});
})();