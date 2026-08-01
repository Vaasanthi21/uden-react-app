import React, { useEffect, useRef, useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(45px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const styles = {
  container: (isVisible, delay) => css`
    opacity: ${isVisible ? 1 : 0};
    transform: ${isVisible ? 'translateY(0)' : 'translateY(30px)'};
    transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms;
    will-change: ${isVisible ? 'auto' : 'opacity, transform'};
  `
};

const ScrollReveal = ({ children, delay = 0, threshold = 0.1, style, className }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (el) observer.unobserve(el);
        }
      },
      { threshold }
    );

    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, [threshold]);

  return (
    <div 
      ref={ref} 
      css={styles.container(isVisible, delay)} 
      style={style}
      className={className}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
