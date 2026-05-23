/**
 * Site-wide motion + interaction layer.
 * - Lenis smooth scroll
 * - Scroll-reveal via IntersectionObserver
 * - Parallax on [data-parallax] elements
 */

import Lenis from 'lenis';

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ─── Smooth scroll
if (!prefersReducedMotion) {
  const lenis = new Lenis({
    duration: 1.1,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });

  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Parallax on scroll
  const parallaxEls = document.querySelectorAll<HTMLElement>('[data-parallax]');
  if (parallaxEls.length > 0) {
    lenis.on('scroll', ({ scroll }: { scroll: number }) => {
      parallaxEls.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const speed = parseFloat(el.dataset.parallax || '0.15');
        const offset = -((window.innerHeight - rect.top) * speed);
        el.style.transform = `translate3d(0, ${offset}px, 0)`;
      });
    });
  }
}

// ─── Scroll reveal
const revealEls = document.querySelectorAll('.reveal, .reveal-stagger');
if (revealEls.length > 0) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
  );
  revealEls.forEach((el) => observer.observe(el));
}

// ─── Hero carousel
document.querySelectorAll<HTMLElement>('.hero-carousel').forEach((root) => {
  const slides = root.querySelectorAll<HTMLElement>('.hero-slide');
  const images = root.querySelectorAll<HTMLElement>('.hero-image');
  const dots = root.querySelectorAll<HTMLElement>('.hero-dot');
  const current = root.querySelector<HTMLElement>('.hero-current');
  const total = slides.length;
  const autoplayMs = parseInt(root.dataset.autoplay || '7000', 10);
  let index = 0;
  let timer: number | undefined;

  // Expose autoplay duration to CSS for progress bar
  root.style.setProperty('--autoplay-ms', `${autoplayMs}ms`);

  const setActive = (next: number) => {
    index = (next + total) % total;
    slides.forEach((s, i) => s.classList.toggle('is-active', i === index));
    images.forEach((s, i) => s.classList.toggle('is-active', i === index));
    dots.forEach((d, i) => {
      d.classList.toggle('is-active', i === index);
      d.setAttribute('aria-selected', i === index ? 'true' : 'false');
      // Reset progress bar by forcing a reflow
      const p = d.querySelector<HTMLElement>('.hero-dot-progress');
      if (p) {
        p.style.width = '0';
        void p.offsetWidth;
      }
    });
    if (current) current.textContent = String(index + 1).padStart(2, '0');
    // Restart progress on the active dot
    const activeDot = dots[index];
    if (activeDot) {
      activeDot.style.setProperty('--progress', '0%');
      requestAnimationFrame(() => {
        activeDot.style.setProperty('--progress', '100%');
      });
    }
  };

  const next = () => setActive(index + 1);
  const prev = () => setActive(index - 1);

  const start = () => {
    if (prefersReducedMotion) return;
    clearInterval(timer);
    timer = window.setInterval(next, autoplayMs);
    // Trigger initial progress
    const activeDot = dots[index];
    if (activeDot) {
      activeDot.style.setProperty('--progress', '0%');
      requestAnimationFrame(() => activeDot.style.setProperty('--progress', '100%'));
    }
  };
  const stop = () => clearInterval(timer);

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      setActive(i);
      start();
    });
  });
  root.querySelector<HTMLElement>('[data-dir="prev"]')?.addEventListener('click', () => {
    prev();
    start();
  });
  root.querySelector<HTMLElement>('[data-dir="next"]')?.addEventListener('click', () => {
    next();
    start();
  });

  root.addEventListener('mouseenter', stop);
  root.addEventListener('mouseleave', start);

  // Keyboard nav
  root.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') { prev(); start(); }
    if (e.key === 'ArrowRight') { next(); start(); }
  });

  // Init
  start();
});
