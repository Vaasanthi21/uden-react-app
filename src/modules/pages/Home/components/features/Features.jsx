import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ChevronLeft, ChevronRight, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HomeConst } from '../../Home.Const';
import { AppRoutes } from 'utils/consts/routes';
import IndemandSkills from './IndemandSkills';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 28px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 8px;
    }

    p {
      color: #64748B;
      font-size: 15px;
    }
  `,
  carouselOuter: css`
    position: relative;
    padding: 20px 48px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
      padding: 0;
    }
  `,
  stageGrid: css`
    display: grid;
    grid-template-columns: 0.8fr 1.15fr 0.8fr;
    gap: 20px;
    align-items: center;
    width: 100%;
    max-width: 1100px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
  spotlightCard: (isCenter) => css`
    background: #FFFFFF;
    border: ${isCenter ? '2.5px solid #DA532C' : '1px solid #E2E8F0'};
    border-radius: 18px;
    overflow: hidden;
    box-shadow: ${isCenter ? '0 16px 40px rgba(218, 83, 44, 0.25)' : '0 4px 12px rgba(0, 0, 0, 0.04)'};
    transform: ${isCenter ? 'scale(1.06)' : 'scale(0.88)'};
    opacity: ${isCenter ? '1' : '0.45'};
    filter: ${isCenter ? 'none' : 'blur(3px)'};
    transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    height: 100%;
    cursor: ${isCenter ? 'default' : 'pointer'};

    &:hover {
      ${!isCenter && `
        opacity: 0.75;
        filter: blur(1px);
        transform: scale(0.92);
      `}
    }
  `,
  imageTop: (isCenter) => css`
    background: linear-gradient(180deg, #F8FAFC 0%, #EDF2F7 100%);
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #E2E8F0;
    height: ${isCenter ? '150px' : '110px'};
    transition: height 0.4s ease;

    img {
      max-height: ${isCenter ? '110px' : '75px'};
      max-width: 100%;
      object-fit: contain;
      transition: all 0.4s ease;
    }
  `,
  matterBottom: css`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  `,
  badgeTag: (isCenter) => css`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: ${isCenter ? '#DA532C' : 'rgba(218, 83, 44, 0.1)'};
    color: ${isCenter ? '#FFFFFF' : '#DA532C'};
    padding: 4px 10px;
    border-radius: 14px;
    font-size: 11px;
    font-weight: 700;
    margin-bottom: 10px;
    align-self: flex-start;
  `,
  cardTitle: (isCenter) => css`
    font-size: ${isCenter ? '19px' : '15px'};
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 8px;
    line-height: 1.3;
    transition: font-size 0.3s ease;
  `,
  cardDesc: (isCenter) => css`
    font-size: ${isCenter ? '13px' : '11.5px'};
    color: #475569;
    line-height: 1.55;
    margin-bottom: 16px;
    flex-grow: 1;
  `,
  bulletList: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 18px;
  `,
  bulletItem: css`
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11.5px;
    color: #334155;
    font-weight: 600;
  `,
  actionBtn: (isCenter) => css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 10px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.25s ease;

    &:hover {
      background: #C0392B;
      box-shadow: 0 6px 16px rgba(218, 83, 44, 0.35);
    }
  `,
  controlsRow: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 32px;
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
  arrowBtn: (direction) => css`
    position: absolute;
    top: 45%;
    ${direction === 'left' ? 'left: 0;' : 'right: 0;'}
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
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transition: all 0.2s ease;
    z-index: 10;

    &:hover {
      background: #DA532C;
      border-color: #DA532C;
      color: #FFFFFF;
      transform: scale(1.1);
    }

    @media (max-width: 768px) {
      display: none;
    }
  `
};

const featureHighlights = [
  ["AI Assessment Engine", "Gap Closing Tracks", "Global Company Matches"],
  ["Predictable Intake", "Cost-Effective Talent", "50+ Curated Programs"],
  ["Upskilling Accreditation", "Custom Stacks", "Fast-Track Hiring"],
  ["Skill Matching Engine", "Continuous Profile Growth", "Pre-Vetted Pool"]
];

const HomeFeatures = (props) => {
  const data = HomeConst.Features;
  const features = data.features || [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPaused || features.length === 0) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused, features.length]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };

  const leftIndex = (activeIndex - 1 + features.length) % features.length;
  const centerIndex = activeIndex;
  const rightIndex = (activeIndex + 1) % features.length;

  const stageSlots = [
    { ...features[leftIndex], position: 'left', originalIndex: leftIndex },
    { ...features[centerIndex], position: 'center', originalIndex: centerIndex },
    { ...features[rightIndex], position: 'right', originalIndex: rightIndex }
  ];

  return (
    <div css={styles.section}>
      <div css={styles.header}>
        <h2>{data.title}</h2>
        <p>Curated solutions for talent development, precision matching, and skill gap closure</p>
      </div>

      <div 
        css={styles.carouselOuter}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <button 
          css={styles.arrowBtn('left')} 
          onClick={handlePrev} 
          aria-label="Previous Feature"
        >
          <ChevronLeft size={22} />
        </button>

        <div css={styles.stageGrid}>
          {stageSlots.map((item) => {
            const isCenter = item.position === 'center';
            return (
              <div 
                key={item.originalIndex}
                css={styles.spotlightCard(isCenter)}
                onClick={() => !isCenter && setActiveIndex(item.originalIndex)}
              >
                <div css={styles.imageTop(isCenter)}>
                  <img src={item.image} alt={item.title} />
                </div>

                <div css={styles.matterBottom}>
                  <div>
                    <div css={styles.badgeTag(isCenter)}>
                      <Sparkles size={11} />
                      {isCenter ? 'FEATURE IN FOCUS' : `FEATURE 0${item.originalIndex + 1}`}
                    </div>
                    <h3 css={styles.cardTitle(isCenter)}>{item.title}</h3>
                    <p css={styles.cardDesc(isCenter)}>{item.description}</p>

                    {isCenter && (
                      <div css={styles.bulletList}>
                        {(featureHighlights[item.originalIndex % featureHighlights.length] || []).map((hl, i) => (
                          <div key={i} css={styles.bulletItem}>
                            <CheckCircle2 size={13} color="#DA532C" />
                            {hl}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button 
                    css={styles.actionBtn(isCenter)}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(AppRoutes.FIND_TALENT);
                    }}
                  >
                    Explore Feature
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <button 
          css={styles.arrowBtn('right')} 
          onClick={handleNext} 
          aria-label="Next Feature"
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div css={styles.controlsRow}>
        <div css={styles.dotsNav}>
          {features.map((_, idx) => (
            <div 
              key={idx} 
              css={styles.dot(idx === activeIndex)} 
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>

      <IndemandSkills data={data.bottom} />
    </div>
  );
};

export default HomeFeatures;
