import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { UserPlus, ClipboardCheck, TrendingUp, RefreshCw, Users, Rocket, User, Building2 } from 'lucide-react';
import { HomeConst } from '../Home.Const';

const styles = {
  section: css`
    max-width: 1240px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  headerContainer: css`
    text-align: center;
    margin-bottom: 40px;
  `,
  pillBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 14px;
    border: 1px solid rgba(218, 83, 44, 0.2);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  heading: css`
    font-size: 36px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 10px 0;
  `,
  subtitle: css`
    font-size: 15px;
    color: #64748B;
    margin: 0;
  `,
  tabNav: css`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-top: 24px;
  `,
  tabBtn: (active) => css`
    padding: 10px 24px;
    border-radius: 30px;
    font-weight: 700;
    font-size: 14px;
    border: 2px solid ${active ? '#DA532C' : '#E2E8F0'};
    background: ${active ? '#DA532C' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#475569'};
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    box-shadow: ${active ? '0 6px 16px rgba(218, 83, 44, 0.35)' : 'none'};

    &:hover {
      border-color: #DA532C;
    }
  `,
  timelineWrapper: css`
    position: relative;
    margin: 50px 0;
  `,
  connectingLine: css`
    position: absolute;
    top: 36px;
    left: 8%;
    right: 8%;
    height: 3px;
    background: linear-gradient(90deg, #DA532C 0%, #FF8A65 50%, #DA532C 100%);
    z-index: 1;
    border-radius: 2px;

    @media (max-width: 992px) {
      display: none;
    }
  `,
  stepsGrid: css`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 16px;
    position: relative;
    z-index: 2;

    @media (max-width: 992px) {
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 24px;
    }
  `,
  stepCard: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 16px;
    padding: 24px 16px;
    text-align: center;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 28px rgba(218, 83, 44, 0.15);
      border-color: #DA532C;
    }
  `,
  stepNumber: css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #F59E0B;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border: 3px solid #FFFFFF;
    box-shadow: 0 4px 10px rgba(245, 158, 11, 0.35);
  `,
  iconCircle: css`
    width: 56px;
    height: 56px;
    border-radius: 50%;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  `,
  cardTitle: css`
    font-size: 15px;
    font-weight: 700;
    color: #1E293B;
    margin-bottom: 10px;
    line-height: 1.35;
    min-height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  cardDesc: css`
    font-size: 12.5px;
    color: #64748B;
    line-height: 1.55;
    margin: 0;
  `,
  bottomBanner: css`
    background: #F8FAFC;
    border: 1px dashed #CBD5E1;
    border-radius: 14px;
    padding: 16px 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    margin-top: 36px;
    text-align: center;

    span {
      font-size: 14px;
      font-weight: 600;
      color: #1E293B;
    }
  `,
  rocketIcon: css`
    color: #DA532C;
    flex-shrink: 0;
  `
};

const seekerIcons = [
  <UserPlus size={26} />,
  <ClipboardCheck size={26} />,
  <TrendingUp size={26} />,
  <RefreshCw size={26} />,
  <Users size={26} />
];

const companyIcons = [
  <UserPlus size={26} />,
  <ClipboardCheck size={26} />,
  <Users size={26} />,
  <TrendingUp size={26} />,
  <Rocket size={26} />
];

const HomeWorkFlow = () => {
  const [activeTab, setActiveTab] = useState('jobseeker');
  const data = HomeConst.WorkFlowNew;

  const currentSteps = activeTab === 'jobseeker' ? data.jobSeekerSteps : data.companySteps;
  const currentIcons = activeTab === 'jobseeker' ? seekerIcons : companyIcons;

  return (
    <div css={styles.section}>
      <div css={styles.headerContainer}>
        <div css={styles.pillBadge}>
          {activeTab === 'jobseeker' ? <User size={14} /> : <Building2 size={14} />}
          {activeTab === 'jobseeker' ? 'Job Seeker Journey' : 'Company Journey'}
        </div>
        <h2 css={styles.heading}>{data.title}</h2>
        <p css={styles.subtitle}>{data.subtitle}</p>

        <div css={styles.tabNav}>
          <button 
            type="button" 
            css={styles.tabBtn(activeTab === 'jobseeker')}
            onClick={() => setActiveTab('jobseeker')}
          >
            <User size={16} />
            Job Seekers
          </button>
          <button 
            type="button" 
            css={styles.tabBtn(activeTab === 'company')}
            onClick={() => setActiveTab('company')}
          >
            <Building2 size={16} />
            Companies
          </button>
        </div>
      </div>

      <div css={styles.timelineWrapper}>
        <div css={styles.connectingLine} />
        <div css={styles.stepsGrid}>
          {currentSteps.map((step, idx) => (
            <div key={idx} css={styles.stepCard}>
              <div css={styles.stepNumber}>{step.step}</div>
              <div css={styles.iconCircle}>
                {currentIcons[idx % currentIcons.length]}
              </div>
              <div css={styles.cardTitle}>{step.title}</div>
              <p css={styles.cardDesc}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div css={styles.bottomBanner}>
        <Rocket size={20} css={styles.rocketIcon} />
        <span>{data.footerBanner}</span>
      </div>
    </div>
  );
};

export default HomeWorkFlow;