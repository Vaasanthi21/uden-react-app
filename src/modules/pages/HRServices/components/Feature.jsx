import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ChevronLeft, ChevronRight, Sparkles, ArrowRight, Target, TrendingUp, Users, FileCheck, Award, GraduationCap } from 'lucide-react';
import HRServicesConst from '../HRServices.Const';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

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
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid rgba(218, 83, 44, 0.25);
  `,
  title: css`
    font-size: 34px;
    font-weight: 900;
    color: #1E293B;
    margin: 0 0 10px 0;
  `,
  subtitle: css`
    font-size: 16px;
    color: #64748B;
    max-width: 700px;
    margin: 0 auto;
    line-height: 1.6;
  `,
  carouselWrapper: css`
    position: relative;
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    border-radius: 24px;
    padding: 48px;
    color: #1E293B;
    box-shadow: 0 12px 32px rgba(218, 83, 44, 0.1);
    border: 1.5px solid rgba(255, 176, 32, 0.35);
    min-height: 340px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (max-width: 768px) {
      padding: 32px 20px;
    }
  `,
  cardHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
  `,
  solutionCounter: css`
    background: #FFF5F5;
    color: #DA532C;
    padding: 4px 14px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    border: 1px solid #FECDD3;
  `,
  iconTitleGroup: css`
    display: flex;
    align-items: center;
    gap: 18px;
  `,
  iconBox: css`
    width: 60px;
    height: 60px;
    border-radius: 16px;
    background: #DA532C;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 20px rgba(218, 83, 44, 0.35);
    flex-shrink: 0;
  `,
  solutionTitle: css`
    font-size: 26px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.25;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  `,
  solutionDesc: css`
    font-size: 16px;
    color: #475569;
    line-height: 1.7;
    margin-bottom: 32px;
    max-width: 860px;
    font-weight: 500;
  `,
  controlsRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(226, 232, 240, 0.8);
    padding-top: 24px;
  `,
  dotsNav: css`
    display: flex;
    gap: 8px;
    align-items: center;
  `,
  dot: (active) => css`
    width: ${active ? '32px' : '10px'};
    height: 10px;
    border-radius: 5px;
    background: ${active ? '#DA532C' : '#CBD5E1'};
    cursor: pointer;
    transition: all 0.3s ease;
  `,
  arrowsGroup: css`
    display: flex;
    align-items: center;
    gap: 12px;
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
  `,
  consultBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 800;
    font-size: 13.5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: background 0.2s;

    &:hover {
      background: #B83D1B;
    }
  `
};

const solutionIcons = [
  <Target size={28} />,
  <TrendingUp size={28} />,
  <Users size={28} />,
  <FileCheck size={28} />,
  <Award size={28} />,
  <Sparkles size={28} />,
  <GraduationCap size={28} />
];

const HRServicesFeature = (props) => {
  const data = HRServicesConst.Features;
  const solutions = data.features || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isPaused || solutions.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, solutions.length]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % solutions.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + solutions.length) % solutions.length);
  };

  const activeSolution = solutions[currentIndex] || {};

  return (
    <div css={styles.section} {...props}>
      <div css={styles.header}>
        <div css={styles.badgeTag}>
          <Sparkles size={14} />
          7 COMPREHENSIVE HR SOLUTIONS
        </div>
        <h2 css={styles.title}>{data.title}</h2>
        <p css={styles.subtitle}>{data.subtitle}</p>
      </div>

      <div 
        css={styles.carouselWrapper}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <div>
          <div css={styles.cardHeader}>
            <div css={styles.iconTitleGroup}>
              <div css={styles.iconBox}>
                {solutionIcons[currentIndex % solutionIcons.length]}
              </div>
              <h3 css={styles.solutionTitle}>{activeSolution.title}</h3>
            </div>

            <div css={styles.solutionCounter}>
              Solution 0{currentIndex + 1} / 0{solutions.length}
            </div>
          </div>

          <p css={styles.solutionDesc}>
            {activeSolution.description}
          </p>
        </div>

        <div css={styles.controlsRow}>
          <div css={styles.dotsNav}>
            {solutions.map((_, idx) => (
              <div 
                key={idx}
                css={styles.dot(idx === currentIndex)}
                onClick={() => setCurrentIndex(idx)}
              />
            ))}
          </div>

          <div css={styles.arrowsGroup}>
            <button 
              css={styles.arrowBtn}
              onClick={handlePrev}
              aria-label="Previous HR Solution"
            >
              <ChevronLeft size={20} />
            </button>

            <button 
              css={styles.arrowBtn}
              onClick={handleNext}
              aria-label="Next HR Solution"
            >
              <ChevronRight size={20} />
            </button>

            <button 
              css={styles.consultBtn}
              onClick={() => navigate(AppRoutes.HR_SERVICE_JOIN)}
            >
              Get Solution
              <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRServicesFeature;