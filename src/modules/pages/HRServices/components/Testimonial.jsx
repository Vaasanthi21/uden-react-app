import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ChevronLeft, ChevronRight, Quote, Star, Award, MessageSquare } from 'lucide-react';
import HRServicesConst from '../HRServices.Const';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 40px;
  `,
  pillBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  heading: css`
    font-size: 32px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 8px 0;
  `,
  subtitle: css`
    font-size: 15px;
    color: #64748B;
    margin: 0;
  `,
  cardContainer: css`
    position: relative;
    background: linear-gradient(135deg, #2D2221 0%, #1A1A1A 100%);
    border-radius: 24px;
    padding: 48px;
    color: #FFFFFF;
    box-shadow: 0 20px 40px -10px rgba(45, 34, 33, 0.3);
    max-width: 960px;
    margin: 0 auto;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.1);

    @media (max-width: 768px) {
      padding: 32px 20px;
    }
  `,
  bgQuoteIcon: css`
    position: absolute;
    top: 24px;
    right: 32px;
    color: rgba(255, 255, 255, 0.05);
    width: 140px;
    height: 140px;
    pointer-events: none;
  `,
  ratingRow: css`
    display: flex;
    gap: 4px;
    margin-bottom: 20px;
  `,
  quoteText: css`
    font-size: 17.5px;
    font-weight: 500;
    line-height: 1.65;
    color: #F1F5F9;
    margin-bottom: 32px;
    font-style: italic;
    min-height: 90px;
    position: relative;
    z-index: 2;

    @media (max-width: 768px) {
      font-size: 15.5px;
    }
  `,
  authorRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding-top: 24px;
    position: relative;
    z-index: 2;

    @media (max-width: 600px) {
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
    }
  `,
  authorInfo: css`
    display: flex;
    align-items: center;
    gap: 16px;
  `,
  avatarRing: css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    padding: 3px;
    background: linear-gradient(135deg, #DA532C 0%, #FFB020 100%);
    box-shadow: 0 4px 12px rgba(218, 83, 44, 0.3);
    flex-shrink: 0;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
      background: #FFFFFF;
    }
  `,
  authorName: css`
    font-size: 18px;
    font-weight: 700;
    color: #FFFFFF;
    line-height: 1.2;
  `,
  authorRole: css`
    font-size: 13px;
    color: #94A3B8;
    margin-top: 2px;
  `,
  verifiedBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.2);
    color: #DA532C;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 700;
    border: 1px solid rgba(218, 83, 44, 0.3);
  `,
  controlsRow: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
  `,
  dotsNav: css`
    display: flex;
    gap: 8px;
    align-items: center;
  `,
  dot: (active) => css`
    width: ${active ? '28px' : '10px'};
    height: 10px;
    border-radius: 5px;
    background: ${active ? '#DA532C' : '#CBD5E1'};
    cursor: pointer;
    transition: all 0.3s ease;
  `,
  arrowBtn: css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid #CBD5E1;
    background: #FFFFFF;
    color: #1E293B;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(0,0,0,0.06);
    transition: all 0.2s ease;

    &:hover {
      background: #DA532C;
      border-color: #DA532C;
      color: #FFFFFF;
      transform: scale(1.08);
    }
  `
};

const HRServicesTestimonial = () => {
  const data = HRServicesConst.Testimonials;
  const testimonials = data.testimonials || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const activeItem = testimonials[currentIndex] || {};

  return (
    <div css={styles.section}>
      <div css={styles.header}>
        <div css={styles.pillBadge}>
          <MessageSquare size={14} />
          CLIENT HR REVIEWS & TESTIMONIALS
        </div>
        <h2 css={styles.heading}>{data.title || "Trusted by HR & Operations Leaders"}</h2>
        <p css={styles.subtitle}>See how admin managers and senior recruiters scale their teams using UDEN's total HR solutions.</p>
      </div>

      <div 
        css={styles.cardContainer}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <Quote css={styles.bgQuoteIcon} />

        <div css={styles.ratingRow}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} fill="#FFB020" color="#FFB020" />
          ))}
        </div>

        <div css={styles.quoteText}>
          "{activeItem.message}"
        </div>

        <div css={styles.authorRow}>
          <div css={styles.authorInfo}>
            <div css={styles.avatarRing}>
              <img src={activeItem.image} alt={activeItem.name} />
            </div>
            <div>
              <div css={styles.authorName}>{activeItem.name}</div>
              <div css={styles.authorRole}>{activeItem.designation} — {activeItem.company}</div>
            </div>
          </div>

          <div css={styles.verifiedBadge}>
            <Award size={15} />
            Verified Enterprise Client
          </div>
        </div>
      </div>

      <div css={styles.controlsRow}>
        <button css={styles.arrowBtn} onClick={handlePrev} aria-label="Previous Testimonial">
          <ChevronLeft size={20} />
        </button>

        <div css={styles.dotsNav}>
          {testimonials.map((_, idx) => (
            <div 
              key={idx} 
              css={styles.dot(idx === currentIndex)} 
              onClick={() => setCurrentIndex(idx)}
            />
          ))}
        </div>

        <button css={styles.arrowBtn} onClick={handleNext} aria-label="Next Testimonial">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default HRServicesTestimonial;