import React, { useEffect, useRef, useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { ShieldCheck, Globe, GraduationCap, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const styles = {
  section: css`
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 16px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    overflow: hidden;
  `,
  header: css`
    text-align: center;
    margin-bottom: 44px;

    h2 {
      font-size: 34px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 10px;
      letter-spacing: -0.5px;

      span {
        color: #F55825;
      }
    }

    p {
      color: #64748B;
      font-size: 16px;
      max-width: 650px;
      margin: 0 auto;
      font-weight: 500;
    }
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  `,
  cardLeft: (isVisible) => css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 36px;
    box-shadow: 0 16px 36px rgba(75, 99, 140, 0.08);
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${isVisible ? 1 : 0};
    animation: ${isVisible ? slideInLeft : 'none'} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 48px rgba(75, 99, 140, 0.16);
      border-color: #4B638C;
    }
  `,
  cardRight: (isVisible) => css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 36px;
    box-shadow: 0 16px 36px rgba(75, 99, 140, 0.08);
    transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${isVisible ? 1 : 0};
    animation: ${isVisible ? slideInRight : 'none'} 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 48px rgba(75, 99, 140, 0.16);
      border-color: #4B638C;
    }
  `,
  cardHeader: css`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 18px;
  `,
  iconBox: css`
    width: 54px;
    height: 54px;
    border-radius: 16px;
    background: rgba(75, 99, 140, 0.12);
    color: #4B638C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(75, 99, 140, 0.1);
  `,
  cardTitle: css`
    font-size: 20px;
    font-weight: 800;
    color: #1E293B;
    line-height: 1.3;
  `,
  cardDesc: css`
    font-size: 14.5px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 24px;
    font-weight: 500;
  `,
  bulletsList: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 28px;
  `,
  bulletItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    color: #1E293B;
    font-weight: 700;
  `,
  actionBtn: css`
    background: #FFFDF0;
    color: #4B638C;
    border: 1.5px solid rgba(247, 188, 8, 0.6);
    padding: 11px 22px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 13.5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    align-self: flex-start;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(247, 188, 8, 0.15);

    &:hover {
      background: #F55825;
      color: #FFFFFF;
      border-color: #F55825;
      box-shadow: 0 8px 20px rgba(245, 88, 37, 0.3);
      transform: translateY(-2px);
    }
  `
};

const solutions = [
  {
    title: 'Pre-Assessed & Skill-Verified Talent',
    desc: 'Candidates on UDEN complete rigorous coding assessments, system design evaluations, and gap-closing upskilling. Access verified skill scores and code repository logs before shortlisting.',
    bullets: ['Verified Code Quality Scores', 'Progressive Skill Tracking', 'Zero False Resumes'],
    icon: <ShieldCheck size={26} color="#4B638C" />
  },
  {
    title: 'Global Talent Pool & Cost Optimization',
    desc: 'Attract high-performing engineers across India, APAC, and global markets. Manage talent costs effectively with options for full-time, contract, or remote engagements.',
    bullets: ['Global Remote Workforce', 'Flexible Engagement Models', 'Up to 45% Cost Efficiency'],
    icon: <Globe size={26} color="#4B638C" />
  },
  {
    title: 'Curated Enterprise Upskilling Tracks',
    desc: 'Have unique stack requirements? UDEN collaborates with trusted upskilling partners to train candidate cohorts specifically on your proprietary tech stack and architecture.',
    bullets: ['Custom Stack Curations', 'Predictable Talent Pipelines', 'Partner Upskilling Accreditation'],
    icon: <GraduationCap size={26} color="#4B638C" />
  },
  {
    title: 'On-Demand Domain Expertise',
    desc: 'Instantly source candidates with niche domain experience in AI/ML, Microservices, Cloud DevOps, Fullstack Web 3.0, and Data Engineering.',
    bullets: ['AI & Data Science Pools', 'AWS & Cloud Specialists', 'Pre-Vetted Senior Leads'],
    icon: <Cpu size={26} color="#4B638C" />
  }
];

const CompaniesFeature = (props) => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} css={styles.section} {...props}>
      <div css={styles.header}>
        <h2>Why Enterprise Recruiters <span>Hire via UDEN</span></h2>
        <p>Comprehensive talent acquisition solutions designed to accelerate intake, reduce cost, and guarantee quality.</p>
      </div>

      <div css={styles.grid}>
        {solutions.map((item, idx) => {
          const isLeft = idx % 2 === 0; // Card 1 & 3 are Left (idx 0, 2), Card 2 & 4 are Right (idx 1, 3)

          return (
            <div 
              key={idx} 
              css={isLeft ? styles.cardLeft(isVisible) : styles.cardRight(isVisible)}
            >
              <div>
                <div css={styles.cardHeader}>
                  <div css={styles.iconBox}>{item.icon}</div>
                  <h3 css={styles.cardTitle}>{item.title}</h3>
                </div>
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

              <button 
                css={styles.actionBtn}
                onClick={() => navigate(AppRoutes.FIND_TALENT)}
              >
                Explore Solution
                <ArrowRight size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompaniesFeature;