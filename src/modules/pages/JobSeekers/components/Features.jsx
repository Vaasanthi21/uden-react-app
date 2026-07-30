import React, { useState, useEffect, useRef } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Download, Award, Palette, BrainCircuit, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let StudentRoadmapImage, CandidateNetworkImage, AiRobotTeamImage, FaqSupportDeskImage;
try {
  const illustrations = require('../../../../utils/consts/uploaded_illustrations');
  StudentRoadmapImage = illustrations.StudentRoadmapImage;
  CandidateNetworkImage = illustrations.CandidateNetworkImage;
  AiRobotTeamImage = illustrations.AiRobotTeamImage;
  FaqSupportDeskImage = illustrations.FaqSupportDeskImage;
} catch (e) {
  StudentRoadmapImage = null;
  CandidateNetworkImage = null;
  AiRobotTeamImage = null;
  FaqSupportDeskImage = null;
}

const styles = {
  sectionOuter: css`
    width: 100%;
    background: linear-gradient(180deg, #FFFDF7 0%, #FFFDF0 100%);
    padding: 80px 20px;
    position: relative;
    overflow: hidden;
    color: #1E293B;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    border-bottom: 2px solid rgba(75, 99, 140, 0.15);
  `,
  container: css`
    max-width: 1240px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  `,
  header: css`
    text-align: center;
    margin-bottom: 52px;

    h2 {
      font-size: 38px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 12px;
      letter-spacing: -0.8px;

      span {
        color: #F55825;
      }
    }

    p {
      color: #475569;
      font-size: 16px;
      max-width: 680px;
      margin: 0 auto;
      font-weight: 500;
      line-height: 1.6;
    }
  `,

  /* AUTO-ROTATING HORIZONTAL SLIDING CAROUSEL TRACK ON WHITE BACKGROUND */
  trackWrapper: css`
    width: 100%;
    overflow-x: hidden;
    padding: 20px 0 40px 0;
  `,
  cardsTrack: css`
    display: flex;
    gap: 28px;
    width: max-content;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  `,
  cardItem: (isActive) => css`
    width: 340px;
    background: #FFFFFF;
    border: ${isActive ? '2px solid #F55825' : '1.5px solid #E2E8F0'};
    border-radius: 28px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: ${isActive ? '0 20px 48px rgba(245, 88, 37, 0.18)' : '0 16px 36px rgba(75, 99, 140, 0.08)'};
    opacity: ${isActive ? 1 : 0.65};
    transform: ${isActive ? 'scale(1.02)' : 'scale(0.98)'};
    cursor: pointer;

    &:hover {
      opacity: 1;
      transform: translateY(-6px) scale(1.02);
      border-color: #4B638C;
      box-shadow: 0 24px 48px rgba(75, 99, 140, 0.16);
    }
  `,
  previewImgBox: css`
    width: 100%;
    height: 170px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 18px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  `,
  iconBox: (isActive) => css`
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: ${isActive ? 'rgba(245, 88, 37, 0.12)' : 'rgba(75, 99, 140, 0.12)'};
    border: ${isActive ? '1px solid rgba(245, 88, 37, 0.3)' : '1px solid rgba(75, 99, 140, 0.25)'};
    color: ${isActive ? '#F55825' : '#4B638C'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    box-shadow: 0 4px 10px rgba(75, 99, 140, 0.1);
  `,
  cardTitle: css`
    font-size: 21px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 10px;
    line-height: 1.3;
  `,
  cardDesc: css`
    font-size: 14px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 24px;
    font-weight: 500;
  `,
  openCta: (isActive) => css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${isActive ? '#F55825' : '#4B638C'};
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: all 0.25s ease;

    &:hover {
      color: #D94616;
      transform: translateX(4px);
    }
  `,

  /* DOT PAGINATION & CONTROLS */
  dotsContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 16px;
  `,
  dotPill: (isActive) => css`
    width: ${isActive ? '32px' : '10px'};
    height: 10px;
    border-radius: 6px;
    background: ${isActive ? '#F55825' : '#CBD5E1'};
    box-shadow: ${isActive ? '0 2px 8px rgba(245, 88, 37, 0.4)' : 'none'};
    cursor: pointer;
    transition: all 0.35s ease;

    &:hover {
      background: #4B638C;
    }
  `
};

const suiteFeatures = [
  {
    title: 'Unlimited Profile Downloads',
    desc: 'Perfect your candidate profile and resume on your terms with zero limits or paywalls.',
    icon: <Download size={22} />,
    image: StudentRoadmapImage
  },
  {
    title: 'Professional AI Templates',
    desc: 'Designed to hook recruiter attention in seconds with pre-assessed skill badges.',
    icon: <Award size={22} />,
    image: CandidateNetworkImage
  },
  {
    title: 'Custom Fonts & Brand Colors',
    desc: 'Pick your color palette, font styles, and personal branding hierarchy in one flow.',
    icon: <Palette size={22} />,
    image: AiRobotTeamImage
  },
  {
    title: 'AI Feedback & Scorecard',
    desc: 'Helps to grab recruiters attention with automated ATS resume score insights.',
    icon: <BrainCircuit size={22} />,
    image: FaqSupportDeskImage
  }
];

const JobSeekersFeature = (props) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate carousel cards every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % suiteFeatures.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [isPaused]);

  // Calculate horizontal offset translation for smooth sliding
  const cardWidthWithGap = 340 + 28; // Card width + gap
  const translateX = -(activeIndex * cardWidthWithGap);

  return (
    <div css={styles.sectionOuter} {...props}>
      <div css={styles.container}>
        <div css={styles.header}>
          <h2>Get 3x More Interview Calls <span>with UDEN AI Suite</span></h2>
          <p>Cycles automatically — hover to pause, click any card or pill to navigate.</p>
        </div>

        {/* Auto-Rotating Horizontal Carousel Track */}
        <div 
          css={styles.trackWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            css={styles.cardsTrack}
            style={{ transform: `translateX(${translateX}px)` }}
          >
            {suiteFeatures.map((item, idx) => {
              const isActive = idx === activeIndex;

              return (
                <div 
                  key={idx} 
                  css={styles.cardItem(isActive)}
                  onClick={() => {
                    setActiveIndex(idx);
                    navigate(AppRoutes.FIND_OPPORTUNITY);
                  }}
                >
                  <div>
                    <div css={styles.previewImgBox}>
                      {item.image ? (
                        <img src={item.image} alt={item.title} />
                      ) : (
                        <FileText size={48} color="#4B638C" />
                      )}
                    </div>

                    <div css={styles.iconBox(isActive)}>{item.icon}</div>
                    <h3 css={styles.cardTitle}>{item.title}</h3>
                    <p css={styles.cardDesc}>{item.desc}</p>
                  </div>

                  <div css={styles.openCta(isActive)}>
                    <span>Explore Feature</span>
                    <ArrowRight size={15} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Auto-Rotation Indicator Dots */}
        <div css={styles.dotsContainer}>
          {suiteFeatures.map((_, idx) => (
            <div 
              key={idx}
              css={styles.dotPill(idx === activeIndex)}
              onClick={() => setActiveIndex(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobSeekersFeature;