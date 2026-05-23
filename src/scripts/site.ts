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
