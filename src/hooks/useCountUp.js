import { useRef, useEffect, useState, useCallback } from 'react';

/**
 * useCountUp — Animates a numeric value from 0 to target using requestAnimationFrame.
 * Triggers on IntersectionObserver entry (fire-once).
 *
 * @param {string} targetValue - The target value string (e.g., "500+", "99.9%", "24/7", "100%")
 * @param {number} duration - Animation duration in ms (default: 2000)
 * @returns {{ ref, displayValue }} — ref to attach to container, displayValue to render
 */
export default function useCountUp(targetValue, duration = 2000) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(targetValue);
  const hasAnimated = useRef(false);

  // Parse numeric part and suffix from value string
  const parseValue = useCallback((val) => {
    // Handle special case "24/7"
    if (val === '24/7') {
      return { numericPart: 24, suffix: '/7', hasDecimal: false, decimalPlaces: 0 };
    }

    const match = val.match(/^([\d.]+)(.*)/);
    if (!match) return { numericPart: 0, suffix: val, hasDecimal: false, decimalPlaces: 0 };

    const numStr = match[1];
    const suffix = match[2] || '';
    const hasDecimal = numStr.includes('.');
    const decimalPlaces = hasDecimal ? numStr.split('.')[1].length : 0;

    return {
      numericPart: parseFloat(numStr),
      suffix,
      hasDecimal,
      decimalPlaces,
    };
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el || hasAnimated.current) return;

    // Respect reduced motion
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motionQuery.matches) {
      setDisplayValue(targetValue);
      hasAnimated.current = true;
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          observer.unobserve(el);

          const { numericPart, suffix, decimalPlaces } = parseValue(targetValue);

          if (numericPart === 0) {
            setDisplayValue(targetValue);
            return;
          }

          const startTime = performance.now();

          const animate = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // easeOutExpo easing
            const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

            const currentValue = eased * numericPart;

            if (decimalPlaces > 0) {
              setDisplayValue(currentValue.toFixed(decimalPlaces) + suffix);
            } else {
              setDisplayValue(Math.floor(currentValue) + suffix);
            }

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(targetValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [targetValue, duration, parseValue]);

  return { ref, displayValue };
}
