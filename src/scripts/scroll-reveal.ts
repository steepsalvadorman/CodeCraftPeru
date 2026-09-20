/** Fade-in-up each block as it enters the viewport while scrolling. */
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const reveals = document.querySelectorAll<HTMLElement>('.reveal');

if (reveals.length) {
  if (reducedMotion) {
    reveals.forEach((el) => el.classList.add('is-revealed'));
  } else {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -4% 0px' }
    );

    reveals.forEach((el) => observer.observe(el));
  }
}
