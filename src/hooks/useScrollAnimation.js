import { useEffect } from 'react';

export function useScrollAnimation(ready = true) {
  useEffect(() => {
    if (!ready) return;

    const timeout = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
      );

      const elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right');
      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect();
    }, 100);

    return () => clearTimeout(timeout);
  }, [ready]);
}
