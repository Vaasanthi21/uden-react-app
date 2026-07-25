import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { UserCheck, GraduationCap, FileCheck, Rocket, Zap } from 'lucide-react';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
    text-align: center;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 700;
    margin-bottom: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid rgba(218, 83, 44, 0.2);
  `,
  heading: css`
    font-size: 32px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 10px 0;
  `,
  subtitle: css`
    font-size: 15px;
    color: #64748B;
    max-width: 650px;
    margin: 0 auto 40px auto;
    line-height: 1.6;
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    }
  `,
  card: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 18px;
    padding: 28px 20px;
    text-align: center;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 28px rgba(218, 83, 44, 0.15);
      border-color: #DA532C;
    }
  `,
  stepNum: css`
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #FFB020;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    border: 3px solid #FFFFFF;
    box-shadow: 0 4px 10px rgba(255, 176, 32, 0.35);
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
    font-size: 17px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 8px;
  `,
  cardDesc: css`
    font-size: 13px;
    color: #64748B;
    line-height: 1.55;
    margin: 0;
  `
};

const steps = [
  {
    num: '01',
    title: 'Create Profile & Assess',
    desc: 'Register for free and take AI skill assessments to establish your baseline.',
    icon: <UserCheck size={26} />
  },
  {
    num: '02',
    title: 'Close Skill Gaps',
    desc: 'Enroll in curated upskilling tracks to master high-demand tech stacks.',
    icon: <GraduationCap size={26} />
  },
  {
    num: '03',
    title: 'Mentorship & Resume Prep',
    desc: 'Get 1-on-1 resume feedback, mock interview practice, and confidence coaching.',
    icon: <FileCheck size={26} />
  },
  {
    num: '04',
    title: 'Get Hired & Scale',
    desc: 'Get matched directly to hiring companies and land your dream offer.',
    icon: <Rocket size={26} />
  }
];

const JobSeekerWorkFlow = (props) => {
  return (
    <div css={styles.section} {...props}>
      <div css={styles.badgeTag}>
        <Zap size={14} />
        STEP-BY-STEP CANDIDATE JOURNEY
      </div>
      <h2 css={styles.heading}>How UDEN Accelerates Your Career</h2>
      <p css={styles.subtitle}>
        A guided 4-step path from baseline skill assessment to guaranteed job interviews.
      </p>

      <div css={styles.grid}>
        {steps.map((step, idx) => (
          <div key={idx} css={styles.stepCard || styles.card}>
            <div css={styles.stepNum}>{step.num}</div>
            <div css={styles.iconCircle}>{step.icon}</div>
            <h3 css={styles.cardTitle}>{step.title}</h3>
            <p css={styles.cardDesc}>{step.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSeekerWorkFlow;