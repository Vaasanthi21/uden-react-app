import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { User, Building2, ClipboardCheck, GraduationCap, TrendingUp, HeartHandshake, Target, CheckCircle2, FileSearch, Users, Layers, Award } from 'lucide-react';

const fadeInSlide = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const styles = {
  section: css`
    padding: 80px 20px;
    background: #FFFDF4;
    border-top: 1px solid #FEF5D8;
    border-bottom: 1px solid #FEF5D8;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 980px;
    margin: 0 auto;
  `,
  header: css`
    text-align: center;
    margin-bottom: 40px;
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
    padding: 12px 28px;
    border-radius: 30px;
    font-size: 14.5px;
    font-weight: 800;
    cursor: pointer;
    border: none;
    background: ${active ? '#F55825' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#475569'};
    box-shadow: ${active ? '0 8px 20px rgba(245, 88, 37, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.04)'};
    transition: all 0.25s ease;

    &:hover {
      transform: translateY(-2px);
    }
  `,
  cardList: css`
    display: flex;
    flex-direction: column;
    gap: 18px;
    margin-top: 36px;
    animation: ${fadeInSlide} 0.4s ease forwards;
  `,
  itemCard: css`
    background: #FFFFFF;
    border-radius: 20px;
    padding: 24px 32px;
    display: flex;
    align-items: center;
    gap: 24px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
    border: 1.5px solid #FEF5D8;
    transition: all 0.3s ease;

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 12px 30px rgba(245, 88, 37, 0.12);
      border-color: #F55825;
    }

    @media (max-width: 640px) {
      padding: 20px;
      gap: 16px;
    }
  `,
  badgeNumber: css`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #F55825;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  iconBox: css`
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: #FFFDF0;
    border: 1px solid #FEF5D8;
    color: #F55825;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 640px) {
      display: none;
    }
  `,
  contentBox: css`
    flex: 1;
  `,
  cardTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 6px 0;

    @media (max-width: 640px) {
      font-size: 16px;
    }
  `,
  subTagsRow: css`
    display: flex;
    align-items: center;
    gap: 12px;
    color: #64748B;
    font-size: 13px;
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

  const jobseekersSteps = [
    {
      num: 1,
      title: 'Technical & behavioral Assessment',
      sub1: 'Holistic',
      sub2: 'Certified',
      icon: <ClipboardCheck size={22} />
    },
    {
      num: 2,
      title: 'Upskilling based on demand and assessed skill gap',
      sub1: 'Live classes',
      sub2: 'Curated Programs',
      icon: <GraduationCap size={22} />
    },
    {
      num: 3,
      title: 'Profile improves with continuous upskilling',
      sub1: 'Holistic',
      sub2: 'Certified',
      icon: <TrendingUp size={22} />
    },
    {
      num: 4,
      title: 'Mentorship & guidance for best fitment',
      sub1: 'Live Classes',
      sub2: '1-on-1',
      icon: <HeartHandshake size={22} />
    },
    {
      num: 5,
      title: 'Suggest & shortlist based on best-fit match',
      sub1: 'AI Powered',
      sub2: 'Maximize Reach',
      icon: <Target size={22} />
    },
    {
      num: 6,
      title: 'Companies get right Talent at the right cost',
      sub1: 'Best fit Match',
      sub2: 'Global Talent',
      icon: <Award size={22} />
    }
  ];

  const companiesSteps = [
    {
      num: 1,
      title: 'Platform identifies Best- fit and near fit profiles',
      sub1: 'Best fit match',
      sub2: 'Global Talent',
      icon: <Target size={22} />
    },
    {
      num: 2,
      title: 'Shortlist Talent and initiate the hiring process',
      sub1: 'Pool',
      sub2: 'Pre Assessed',
      icon: <FileSearch size={22} />
    },
    {
      num: 3,
      title: 'Work with UDEN to design curated programs',
      sub1: 'Customized',
      sub2: 'Visibility',
      icon: <Layers size={22} />
    },
    {
      num: 4,
      title: 'Profiles are shortlisted and upskilled',
      sub1: 'Live Classes',
      sub2: '1-on-1',
      icon: <Users size={22} />
    },
    {
      num: 5,
      title: 'Upskilled resources ready for hiring',
      sub1: 'Holistic',
      sub2: 'Certified',
      icon: <CheckCircle2 size={22} />
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
              onClick={() => setActiveTab('jobseekers')}
            >
              <User size={18} />
              Job Seekers
            </button>

            <button 
              css={styles.tabBtn(activeTab === 'companies')} 
              onClick={() => setActiveTab('companies')}
            >
              <Building2 size={18} />
              Companies
            </button>
          </div>
        </div>

        <div key={activeTab} css={styles.cardList}>
          {currentSteps.map((step) => (
            <div key={step.num} css={styles.itemCard}>
              <div css={styles.badgeNumber}>{step.num}</div>
              <div css={styles.iconBox}>{step.icon}</div>
              <div css={styles.contentBox}>
                <h3 css={styles.cardTitle}>{step.title}</h3>
                <div css={styles.subTagsRow}>
                  <span>{step.sub1}</span>
                  <span css={styles.tagDot} />
                  <span>{step.sub2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
