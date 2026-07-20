import React from 'react';
import useScrollReveal from '../hooks/useScrollReveal';

/**
 * AnimateOnScroll — Lightweight wrapper that reveals children when scrolled into view.
 *
 * @param {string} animation - One of: fade-up, fade-down, fade-left, fade-right, fade-in, scale-up, blur-in
 * @param {number} delay - Delay in ms before animation starts (default: 0)
 * @param {number} duration - Animation duration in ms (default: 700)
 * @param {number} threshold - IntersectionObserver threshold (default: 0.15)
 * @param {string} className - Additional CSS classes
 * @param {string} as - HTML element to render (default: 'div')
 * @param {object} style - Additional inline styles
 * @param {React.ReactNode} children
 */
export default function AnimateOnScroll({
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  threshold = 0.15,
  className = '',
  as: Tag = 'div',
  style = {},
  children,
  ...rest
}) {
  const { ref } = useScrollReveal({ threshold });

  return (
    <Tag
      ref={ref}
      className={`scroll-reveal anim-${animation} ${className}`}
      style={{
        '--anim-delay': `${delay}ms`,
        '--anim-duration': `${duration}ms`,
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
