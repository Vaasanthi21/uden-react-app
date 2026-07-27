import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';

const marqueeAnim = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const brandList = [
  { name: 'bluCognition', style: { fontWeight: 800, textTransform: 'none', letterSpacing: '0px' } },
  { name: 'ramco', style: { fontWeight: 800, textTransform: 'lowercase', letterSpacing: '0.5px' } },
  { name: 'CYBRILLA', style: { fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px' } },
  { name: 'BRAVVURA', style: { fontWeight: 900, textTransform: 'uppercase', letterSpacing: '4px' } },
  { name: 'AON', style: { fontWeight: 900, textTransform: 'uppercase', letterSpacing: '2px' } },
  { name: 'MICROSOFT', style: { fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px' } },
  { name: 'AWS', style: { fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px' } },
  { name: 'DELOITTE', style: { fontWeight: 900, textTransform: 'uppercase', letterSpacing: '3px' } }
];

const styles = {
  sectionOuter: css`
    width: 100%;
    overflow: hidden;
    background: #FFFFFF;
    padding: 36px 0;
    position: relative;

    /* Left & Right Edge Gradient Masking */
    &::before, &::after {
      content: '';
      position: absolute;
      top: 0;
      width: 140px;
      height: 100%;
      z-index: 2;
      pointer-events: none;
    }

    &::before {
      left: 0;
      background: linear-gradient(to right, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    }

    &::after {
      right: 0;
      background: linear-gradient(to left, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    }
  `,
  titleHeader: css`
    text-align: center;
    font-size: 13.5px;
    font-weight: 600;
    color: #475569;
    letter-spacing: 0.2px;
    margin-bottom: 28px;
  `,
  marqueeTrack: css`
    display: flex;
    width: max-content;
    animation: ${marqueeAnim} 22s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  `,
  brandGroup: css`
    display: flex;
    align-items: center;
    gap: 72px;
    padding: 0 36px;
  `,
  brandItem: css`
    font-size: 24px;
    color: #94A3B8;
    white-space: nowrap;
    user-select: none;
    transition: all 0.3s ease;
    cursor: pointer;

    &:hover {
      color: #DA532C;
      transform: scale(1.08);
    }
  `
};

const TrustedBrand = () => {
  return (
    <div css={styles.sectionOuter}>
      <div css={styles.titleHeader}>
        Trusted by Global Companies and Upskilling Partners
      </div>

      <div css={styles.marqueeTrack}>
        <div css={styles.brandGroup}>
          {brandList.map((brand, idx) => (
            <span key={idx} css={styles.brandItem} style={brand.style}>
              {brand.name}
            </span>
          ))}
        </div>

        <div css={styles.brandGroup}>
          {brandList.map((brand, idx) => (
            <span key={`dup-${idx}`} css={styles.brandItem} style={brand.style}>
              {brand.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBrand;