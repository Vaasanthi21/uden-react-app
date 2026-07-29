import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { ShieldCheck, Globe, GraduationCap, Cpu, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

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
    margin-bottom: 48px;

    h2 {
      font-size: 36px;
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

  /* 3D COVERFLOW CAROUSEL CONTAINER */
  carouselWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
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
    background: #FFFFFF;
    border: ${isActive ? '2px solid #F55825' : '1.5px solid #E2E8F0'};
    border-radius: 28px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.45s cubic-bezier(0.16, 1, 0.3, 1);
    transform: ${isActive ? 'scale(1.08) translateZ(50px)' : 'scale(0.92) translateZ(0)'};
    opacity: ${isActive ? 1 : 0.5};
    box-shadow: ${isActive ? '0 20px 48px rgba(245, 88, 37, 0.18)' : '0 10px 30px rgba(75, 99, 140, 0.06)'};

    &:hover {
      opacity: 1;
      border-color: #4B638C;
      box-shadow: 0 20px 40px rgba(75, 99, 140, 0.15);
    }

    @media (max-width: 900px) {
      width: 100%;
      max-width: 360px;
      transform: none;
      opacity: 1;
    }
  `,
  cardIconBox: (isActive) => css`
    width: 54px;
    height: 54px;
    border-radius: 16px;
    background: ${isActive ? 'rgba(245, 88, 37, 0.12)' : 'rgba(75, 99, 140, 0.1)'};
    border: ${isActive ? '1.5px solid rgba(245, 88, 37, 0.3)' : '1px solid rgba(75, 99, 140, 0.2)'};
    color: ${isActive ? '#F55825' : '#4B638C'};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    box-shadow: ${isActive ? '0 4px 14px rgba(245, 88, 37, 0.2)' : 'none'};
  `,
  cardTitle: css`
    font-size: 21px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 12px;
    line-height: 1.3;
  `,
  cardDesc: css`
    font-size: 14px;
    color: #475569;
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
    font-size: 13.5px;
    color: #1E293B;
    font-weight: 700;
  `,
  openStudioCta: (isActive) => css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: ${isActive ? '#F55825' : '#4B638C'};
    font-size: 13px;
    font-weight: 800;
    transition: all 0.25s ease;
    background: ${isActive ? '#FFFDF0' : 'transparent'};
    padding: ${isActive ? '8px 16px' : '0'};
    border-radius: ${isActive ? '10px' : '0'};
    border: ${isActive ? '1px solid rgba(247, 188, 8, 0.5)' : 'none'};

    &:hover {
      color: #F55825;
      transform: translateX(4px);
    }
  `,

  /* PAGINATION DOTS */
  dotsContainer: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
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

const solutions = [
  {
    title: 'Pre-Assessed & Skill-Verified Talent',
    desc: 'Candidates on UDEN complete rigorous coding assessments, system design evaluations, and gap-closing upskilling.',
    bullets: ['Verified Code Quality Scores', 'Progressive Skill Tracking', 'Zero False Resumes'],
    icon: <ShieldCheck size={26} />
  },
  {
    title: 'Global Talent Pool & Cost Optimization',
    desc: 'Attract high-performing engineers across India, APAC, and global markets with options for full-time or contract engagements.',
    bullets: ['Global Remote Workforce', 'Flexible Engagement Models', 'Up to 45% Cost Efficiency'],
    icon: <Globe size={26} />
  },
  {
    title: 'Curated Enterprise Upskilling Tracks',
    desc: 'UDEN collaborates with trusted upskilling partners to train candidate cohorts specifically on your proprietary tech stack.',
    bullets: ['Custom Stack Curations', 'Predictable Talent Pipelines', 'Partner Accreditation'],
    icon: <GraduationCap size={26} />
  },
  {
    title: 'On-Demand Domain Expertise',
    desc: 'Instantly source candidates with niche domain experience in AI/ML, Microservices, Cloud DevOps, and Data Engineering.',
    bullets: ['AI & Data Science Pools', 'AWS & Cloud Specialists', 'Pre-Vetted Senior Leads'],
    icon: <Cpu size={26} />
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
      <div css={styles.container}>
        <div css={styles.header}>
          <h2>Why Enterprise Recruiters <span>Hire via UDEN</span></h2>
          <p>Cycles automatically — hover to pause, click any card to jump straight to it.</p>
        </div>

        {/* 3D Coverflow Carousel Container on WHITE Background */}
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
                        <CheckCircle2 size={16} color="#F55825" />
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
                  <ArrowRight size={15} />
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