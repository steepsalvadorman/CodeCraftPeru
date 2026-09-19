/** Smooth scroll with fixed-header offset for all in-page hash links */
function getHeaderOffset() {
  const header = document.getElementById('site-header');
  return (header?.offsetHeight ?? 80) + 20;
}

function scrollToHash(hash: string) {
  const id = hash.startsWith('#') ? hash.slice(1) : hash;
  if (!id) return;
  const target = document.getElementById(id);
  if (!target) return;

  const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - getHeaderOffset());
  window.scrollTo({ top, behavior: 'smooth' });
  history.replaceState(null, '', `#${id}`);
}

document.addEventListener('click', (e) => {
  const link = (e.target as Element | null)?.closest<HTMLAnchorElement>('a[href^="#"]');
  if (!link || link.closest('#navbar')) return;

  const href = link.getAttribute('href');
  if (!href || href === '#') return;

  e.preventDefault();
  scrollToHash(href);
});
