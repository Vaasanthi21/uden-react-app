import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { ShieldCheck, Globe, GraduationCap, Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const floatParticle = keyframes`
  0% { transform: translateY(0px) scale(1); opacity: 0.3; }
  50% { transform: translateY(-15px) scale(1.2); opacity: 0.7; }
  100% { transform: translateY(0px) scale(1); opacity: 0.3; }
`;

const styles = {
  sectionOuter: css`
    width: 100%;
    background: linear-gradient(180deg, #0B0F17 0%, #111827 100%);
    padding: 90px 20px;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  bgGlowTop: css`
    position: absolute;
    top: -100px;
    left: 50%;
    transform: translateX(-50%);
    width: 600px;
    height: 350px;
    background: radial-gradient(circle, rgba(245, 88, 37, 0.18) 0%, rgba(11, 15, 23, 0) 70%);
    pointer-events: none;
    z-index: 1;
  `,
  particle1: css`
    position: absolute;
    top: 20%;
    left: 15%;
    width: 6px;
    height: 6px;
    background: #F55825;
    border-radius: 50%;
    box-shadow: 0 0 12px #F55825;
    animation: ${floatParticle} 4s ease-in-out infinite;
  `,
  particle2: css`
    position: absolute;
    bottom: 25%;
    right: 18%;
    width: 8px;
    height: 8px;
    background: #F7BC08;
    border-radius: 50%;
    box-shadow: 0 0 16px #F7BC08;
    animation: ${floatParticle} 5s ease-in-out infinite 1s;
  `,
  container: css`
    max-width: 1240px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  `,
  header: css`
    text-align: center;
    margin-bottom: 56px;

    h2 {
      font-size: 38px;
      font-weight: 900;
      color: #FFFFFF;
      margin-bottom: 12px;
      letter-spacing: -0.8px;

      span {
        color: #F55825;
        background: linear-gradient(135deg, #F55825 0%, #F7BC08 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      color: #94A3B8;
      font-size: 16px;
      max-width: 680px;
      margin: 0 auto;
      font-weight: 500;
      line-height: 1.6;
    }
  `,

  /* 3D COVERFLOW CAROUSEL CONTAINER */
  carouselWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    perspective: 1200px;
    padding: 20px 0 40px 0;
    min-height: 440px;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  `,
  cardItem: (isActive) => css`
    width: 320px;
    min-height: 400px;
    background: ${isActive ? 'rgba(255, 255, 255, 0.07)' : 'rgba(255, 255, 255, 0.03)'};
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: ${isActive ? '2px solid #F55825' : '1px solid rgba(255, 255, 255, 0.1)'};
    border-radius: 28px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    transform: ${isActive ? 'scale(1.08) translateZ(50px)' : 'scale(0.92) translateZ(0)'};
    opacity: ${isActive ? 1 : 0.45};
    box-shadow: ${isActive ? '0 20px 50px rgba(245, 88, 37, 0.3)' : '0 10px 30px rgba(0, 0, 0, 0.4)'};

    &:hover {
      opacity: 1;
      border-color: #F7BC08;
      box-shadow: 0 20px 40px rgba(247, 188, 8, 0.25);
    }

    @media (max-width: 900px) {
      width: 100%;
      max-width: 360px;
      transform: none;
      opacity: 1;
    }
  `,
  cardIconBox: (isActive) => css`
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: ${isActive ? 'rgba(245, 88, 37, 0.2)' : 'rgba(255, 255, 255, 0.08)'};
    border: ${isActive ? '1.5px solid rgba(245, 88, 37, 0.5)' : '1px solid rgba(255, 255, 255, 0.15)'};
    color: ${isActive ? '#F7BC08' : '#94A3B8'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    box-shadow: ${isActive ? '0 0 20px rgba(245, 88, 37, 0.4)' : 'none'};
  `,
  cardTitle: css`
    font-size: 21px;
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 12px;
    line-height: 1.3;
  `,
  cardDesc: css`
    font-size: 13.5px;
    color: #94A3B8;
    line-height: 1.6;
    margin-bottom: 20px;
    font-weight: 500;
  `,
  bulletsList: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
  `,
  bulletItem: css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #E2E8F0;
    font-weight: 700;
  `,
  openStudioCta: (isActive) => css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${isActive ? '#F55825' : '#94A3B8'};
    font-size: 12.5px;
    font-weight: 900;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: all 0.25s ease;

    &:hover {
      color: #F7BC08;
      transform: translateX(4px);
    }
  `,

  /* PAGINATION DOTS */
  dotsContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 24px;
  `,
  dotPill: (isActive) => css`
    width: ${isActive ? '32px' : '10px'};
    height: 10px;
    border-radius: 6px;
    background: ${isActive ? '#F55825' : 'rgba(255, 255, 255, 0.2)'};
    box-shadow: ${isActive ? '0 0 12px rgba(245, 88, 37, 0.6)' : 'none'};
    cursor: pointer;
    transition: all 0.35s ease;

    &:hover {
      background: #F7BC08;
    }
  `
};

const solutions = [
  {
    title: 'Pre-Assessed & Skill-Verified Talent',
    desc: 'Candidates on UDEN complete rigorous coding assessments, system design evaluations, and gap-closing upskilling.',
    bullets: ['Verified Code Quality Scores', 'Progressive Skill Tracking', 'Zero False Resumes'],
    icon: <ShieldCheck size={24} />
  },
  {
    title: 'Global Talent Pool & Cost Optimization',
    desc: 'Attract high-performing engineers across India, APAC, and global markets with options for full-time or contract engagements.',
    bullets: ['Global Remote Workforce', 'Flexible Engagement Models', 'Up to 45% Cost Efficiency'],
    icon: <Globe size={24} />
  },
  {
    title: 'Curated Enterprise Upskilling Tracks',
    desc: 'UDEN collaborates with trusted upskilling partners to train candidate cohorts specifically on your proprietary tech stack.',
    bullets: ['Custom Stack Curations', 'Predictable Talent Pipelines', 'Partner Accreditation'],
    icon: <GraduationCap size={24} />
  },
  {
    title: 'On-Demand Domain Expertise',
    desc: 'Instantly source candidates with niche domain experience in AI/ML, Microservices, Cloud DevOps, and Data Engineering.',
    bullets: ['AI & Data Science Pools', 'AWS & Cloud Specialists', 'Pre-Vetted Senior Leads'],
    icon: <Cpu size={24} />
  }
];

const CompaniesFeature = (props) => {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-cycle cards every 4 seconds unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % solutions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <div css={styles.sectionOuter} {...props}>
      <div css={styles.bgGlowTop} />
      <div css={styles.particle1} />
      <div css={styles.particle2} />

      <div css={styles.container}>
        <div css={styles.header}>
          <h2>Why Enterprise Recruiters <span>Hire via UDEN</span></h2>
          <p>Cycles automatically — hover to pause, click any card to jump straight to it.</p>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div 
          css={styles.carouselWrapper}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {solutions.map((item, idx) => {
            const isActive = idx === activeIndex;

            return (
              <div 
                key={idx} 
                css={styles.cardItem(isActive)}
                onClick={() => setActiveIndex(idx)}
              >
                <div>
                  <div css={styles.cardIconBox(isActive)}>
                    {item.icon}
                  </div>
                  <h3 css={styles.cardTitle}>{item.title}</h3>
                  <p css={styles.cardDesc}>{item.desc}</p>

                  <div css={styles.bulletsList}>
                    {item.bullets.map((b, i) => (
                      <div key={i} css={styles.bulletItem}>
                        <CheckCircle2 size={15} color="#F7BC08" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div 
                  css={styles.openStudioCta(isActive)}
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(AppRoutes.FIND_TALENT);
                  }}
                >
                  <span>Explore Solution</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Pagination Dots */}
        <div css={styles.dotsContainer}>
          {solutions.map((_, idx) => (
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

export default CompaniesFeature;