(() => {
  const cards = [...document.querySelectorAll('.gallery-card')];
  const filters = [...document.querySelectorAll('[data-gallery-filter]')];
  const dialog = document.getElementById('galleryDialog');
  const fullImage = document.getElementById('galleryFullImage');
  const caption = document.getElementById('galleryCaption');
  const status = document.getElementById('galleryStatus');
  let current = 0;
  let origin = null;
  const visible = () => cards.filter(card => !card.hidden);
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.galleryFilter;
    filters.forEach(filter => {
      const active = filter === button;
      filter.classList.toggle('is-active', active);
      filter.setAttribute('aria-pressed', String(active));
    });
    cards.forEach(card => { card.hidden = category !== 'All' && card.dataset.category !== category; });
    status.textContent = `Showing ${visible().length} photos`;
  }));
  function display(index) {
    const shown = visible();
    if (!shown.length) return;
    current = (index + shown.length) % shown.length;
    const card = shown[current];
    fullImage.src = card.dataset.src;
    fullImage.alt = card.querySelector('img').alt;
    caption.textContent = `${card.dataset.caption} · ${current + 1} / ${shown.length}`;
  }
  cards.forEach(card => card.addEventListener('click', () => {
    origin = card;
    display(visible().indexOf(card));
    dialog.showModal();
    document.getElementById('galleryClose').focus();
  }));
  document.getElementById('galleryClose').addEventListener('click', () => dialog.close());
  document.getElementById('galleryPrev').addEventListener('click', () => display(current - 1));
  document.getElementById('galleryNext').addEventListener('click', () => display(current + 1));
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => { fullImage.removeAttribute('src'); origin?.focus(); });
  document.addEventListener('keydown', event => {
    if (!dialog.open) return;
    if (event.key === 'ArrowLeft') { event.preventDefault(); display(current - 1); }
    if (event.key === 'ArrowRight') { event.preventDefault(); display(current + 1); }
  });
})();
