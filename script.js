(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  const searchToggle = document.querySelector('.search-toggle');
  const searchPanel = document.querySelector('.search-panel');
  const searchInput = document.querySelector('#site-search');
  const cards = [...document.querySelectorAll('[data-searchable]')];
  const noResults = document.querySelector('.no-results');

  menuToggle?.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Menü bezárása' : 'Menü megnyitása');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));
  searchToggle?.addEventListener('click', () => {
    searchPanel.hidden = !searchPanel.hidden;
    if (!searchPanel.hidden) searchInput?.focus();
  });
  searchInput?.addEventListener('input', () => {
    const query = searchInput.value.trim().toLocaleLowerCase('hu');
    let shown = 0;
    cards.forEach(card => {
      const haystack = (card.dataset.searchable + ' ' + card.textContent).toLocaleLowerCase('hu');
      const match = !query || haystack.includes(query);
      card.classList.toggle('search-hidden', !match);
      // Keep structural sections intact; hide only matching topic/article cards.
      if (card.matches('.topic-card, .article-card')) {
        card.hidden = !match;
        if (match) shown++;
      }
    });
    if (noResults) noResults.hidden = !query || shown > 0;
  });
  document.querySelector('#year').textContent = new Date().getFullYear();

  const cookieBanner = document.querySelector('#cookie-banner');
  const cookieClose = document.querySelector('#cookie-close');
  try {
    if (!localStorage.getItem('tokajkalauz-notice-dismissed')) cookieBanner.hidden = false;
    cookieClose?.addEventListener('click', () => {
      localStorage.setItem('tokajkalauz-notice-dismissed', '1');
      cookieBanner.hidden = true;
    });
  } catch (_) { /* localStorage may be disabled; banner remains dismissible for this session */ }
})();
