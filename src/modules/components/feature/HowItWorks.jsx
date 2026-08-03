import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { User, Building2, ClipboardCheck, GraduationCap, TrendingUp, HeartHandshake, Target, CheckCircle2, FileSearch, Layers, Users, Award } from 'lucide-react';

const fadeInSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const styles = {
  section: css`
    padding: 90px 20px;
    background: #FFFDF4;
    border-top: 1px solid #FEF5D8;
    border-bottom: 1px solid #FEF5D8;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1060px;
    margin: 0 auto;
  `,
  header: css`
    text-align: center;
    margin-bottom: 50px;
  `,
  badgeTag: css`
    font-size: 12px;
    font-weight: 800;
    color: #4B638C;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    margin-bottom: 12px;
    display: inline-block;
  `,
  title: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    margin: 0;
    letter-spacing: -0.8px;

    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,
  tabRow: css`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-top: 28px;
  `,
  tabBtn: (active) => css`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 32px;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    border: none;
    background: ${active ? '#F55825' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#475569'};
    box-shadow: ${active ? '0 8px 22px rgba(245, 88, 37, 0.35)' : '0 2px 8px rgba(0, 0, 0, 0.04)'};
    transition: all 0.25s ease;

    &:hover {
      transform: translateY(-2px);
    }
  `,

  /* ALTERNATING ZIG-ZAG TIMELINE CONTAINER */
  timelineContainer: css`
    position: relative;
    margin-top: 50px;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 20px;
      bottom: 20px;
      width: 3px;
      background: #FFE0B2;
      transform: translateX(-50%);

      @media (max-width: 768px) {
        left: 24px;
      }
    }
  `,
  timelineList: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    animation: ${fadeInSlide} 0.4s ease forwards;
  `,
  timelineRow: (isEven) => css`
    display: flex;
    justify-content: ${isEven ? 'flex-end' : 'flex-start'};
    position: relative;
    padding-bottom: 24px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      justify-content: flex-start;
      padding-left: 56px;
      width: 100%;
    }
  `,
  centerDot: css`
    position: absolute;
    left: 50%;
    top: 36px;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 2.5px solid #F55825;
    color: #F55825;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 14px rgba(245, 88, 37, 0.25);
    z-index: 3;

    @media (max-width: 768px) {
      left: 24px;
    }
  `,
  card: (isHovered) => css`
    width: 45%;
    background: #FFFFFF;
    border: 2px solid ${isHovered ? '#F55825' : '#FFE0B2'};
    border-radius: 24px;
    padding: 32px 28px;
    text-align: center;
    box-shadow: ${isHovered ? '0 16px 36px rgba(245, 88, 37, 0.18)' : '0 6px 20px rgba(0, 0, 0, 0.03)'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    position: relative;
    z-index: 2;
    box-sizing: border-box;
    overflow: hidden;

    &:hover {
      border-color: #F55825;
      box-shadow: 0 16px 36px rgba(245, 88, 37, 0.18);
      transform: translateY(-4px);
    }

    @media (max-width: 768px) {
      width: 100%;
      padding: 20px 14px;
    }
  `,
  numPill: css`
    display: inline-block;
    background: #F55825;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 900;
    padding: 4px 14px;
    border-radius: 20px;
    margin-bottom: 14px;
    box-shadow: 0 4px 10px rgba(245, 88, 37, 0.25);
  `,
  cardTitle: css`
    font-size: 19px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 10px 0;
    line-height: 1.35;

    @media (max-width: 640px) {
      font-size: 16.5px;
    }
  `,
  subTagsRow: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: #64748B;
    font-size: 13.5px;
    font-weight: 600;
  `,
  tagDot: css`
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background: #CBD5E1;
  `
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('jobseekers');
  const [activeStep, setActiveStep] = useState(2);

  const jobseekersSteps = [
    {
      num: 1,
      title: 'Technical & behavioral Assessment',
      sub1: 'Holistic',
      sub2: 'Certified',
      icon: <ClipboardCheck size={20} />
    },
    {
      num: 2,
      title: 'Upskilling based on demand and assessed skill gap',
      sub1: 'Live classes',
      sub2: 'Curated Programs',
      icon: <GraduationCap size={20} />
    },
    {
      num: 3,
      title: 'Profile improves with continuous upskilling',
      sub1: 'Holistic',
      sub2: 'Certified',
      icon: <TrendingUp size={20} />
    },
    {
      num: 4,
      title: 'Mentorship & guidance for best fitment',
      sub1: 'Live Classes',
      sub2: '1-on-1',
      icon: <HeartHandshake size={20} />
    },
    {
      num: 5,
      title: 'Suggest & shortlist based on best-fit match',
      sub1: 'AI Powered',
      sub2: 'Maximize Reach',
      icon: <Target size={20} />
    },
    {
      num: 6,
      title: 'Companies get right Talent at the right cost',
      sub1: 'Best fit Match',
      sub2: 'Global Talent',
      icon: <Award size={20} />
    }
  ];

  const companiesSteps = [
    {
      num: 1,
      title: 'Platform identifies Best- fit and near fit profiles',
      sub1: 'Best fit match',
      sub2: 'Global Talent',
      icon: <Target size={20} />
    },
    {
      num: 2,
      title: 'Shortlist Talent and initiate the hiring process',
      sub1: 'Pool',
      sub2: 'Pre Assessed',
      icon: <FileSearch size={20} />
    },
    {
      num: 3,
      title: 'Work with UDEN to design curated programs',
      sub1: 'Customized',
      sub2: 'Visibility',
      icon: <Layers size={20} />
    },
    {
      num: 4,
      title: 'Profiles are shortlisted and upskilled',
      sub1: 'Live Classes',
      sub2: '1-on-1',
      icon: <Users size={20} />
    },
    {
      num: 5,
      title: 'Upskilled resources ready for hiring',
      sub1: 'Holistic',
      sub2: 'Certified',
      icon: <CheckCircle2 size={20} />
    }
  ];

  const currentSteps = activeTab === 'jobseekers' ? jobseekersSteps : companiesSteps;

  return (
    <section css={styles.section} id="how-it-works">
      <div css={styles.container}>
        <div css={styles.header}>
          <span css={styles.badgeTag}>STREAMLINED PROCESS</span>
          <h2 css={styles.title}>How it works</h2>

          <div css={styles.tabRow}>
            <button 
              css={styles.tabBtn(activeTab === 'jobseekers')} 
              onClick={() => { setActiveTab('jobseekers'); setActiveStep(1); }}
            >
              <User size={18} />
              Job Seekers
            </button>

            <button 
              css={styles.tabBtn(activeTab === 'companies')} 
              onClick={() => { setActiveTab('companies'); setActiveStep(2); }}
            >
              <Building2 size={18} />
              Companies
            </button>
          </div>
        </div>

        <div css={styles.timelineContainer}>
          <div key={activeTab} css={styles.timelineList}>
            {currentSteps.map((step, idx) => {
              const isEven = idx % 2 === 1; // 0=odd (left), 1=even (right)
              return (
                <div key={step.num} css={styles.timelineRow(isEven)}>
                  <div css={styles.centerDot}>{step.icon}</div>
                  
                  <div 
                    css={styles.card(activeStep === step.num)}
                    onClick={() => setActiveStep(step.num)}
                  >
                    <span css={styles.numPill}>{step.num}</span>
                    <h3 css={styles.cardTitle}>{step.title}</h3>
                    <div css={styles.subTagsRow}>
                      <span>{step.sub1}</span>
                      <span css={styles.tagDot} />
                      <span>{step.sub2}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
