import { useRef, useEffect, useState } from 'react';

/**
 * useScrollReveal — IntersectionObserver-based scroll reveal hook.
 * Returns a ref callback to attach to any element. Adds 'is-visible'
 * class when element enters the viewport. Fire-once by default.
 *
 * Respects prefers-reduced-motion: if reduced motion is preferred,
 * elements are immediately set to visible (no animation).
 */
export default function useScrollReveal({ threshold = 0.05, rootMargin = '0px 0px 100px 0px' } = {}) {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setIsVisible(true);
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  return { ref: elementRef, isVisible };
}
