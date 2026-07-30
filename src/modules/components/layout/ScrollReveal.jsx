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
    transform: ${isVisible ? 'translateY(0)' : 'translateY(45px)'};
    transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms;
    will-change: opacity, transform;
  `
};

const ScrollReveal = ({ children, delay = 0, threshold = 0.12, style, className }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
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
