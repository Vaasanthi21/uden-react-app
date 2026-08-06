import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Award, Rocket, Building, ShieldCheck } from 'lucide-react';

const styles = {
  section: css`
    max-width: 1000px;
    margin: 60px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 48px;

    h2 {
      font-size: 32px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 8px;
    }

    p {
      color: #64748B;
      font-size: 15px;
    }
  `,
  timelineContainer: css`
    position: relative;

    &::before {
      content: '';
      position: absolute;
      left: 50%;
      top: 0;
      bottom: 0;
      width: 3px;
      background: #E2E8F0;
      transform: translateX(-50%);

      @media (max-width: 768px) {
        left: 20px;
      }
    }
  `,
  timelineRow: (isEven) => css`
    display: flex;
    justify-content: ${isEven ? 'flex-start' : 'flex-end'};
    padding-bottom: 40px;
    position: relative;

    @media (max-width: 768px) {
      justify-content: flex-start;
      padding-left: 54px;
    }
  `,
  card: css`
    width: 44%;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;

    &:hover {
      border-color: #DA532C;
      box-shadow: 0 12px 28px rgba(218, 83, 44, 0.15);
      transform: translateY(-4px);
    }

    @media (max-width: 768px) {
      width: 100%;
    }
  `,
  yearTag: css`
    display: inline-block;
    background: #DA532C;
    color: #FFFFFF;
    font-size: 12px;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 12px;
    margin-bottom: 8px;
  `,
  rowTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 6px;
  `,
  rowDesc: css`
    font-size: 13.5px;
    color: #64748B;
    line-height: 1.55;
    margin: 0;
  `,
  centerDot: css`
    position: absolute;
    left: 50%;
    top: 24px;
    transform: translate(-50%, -50%);
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 3px solid #DA532C;
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 10px rgba(218, 83, 44, 0.3);

    @media (max-width: 768px) {
      left: 20px;
    }
  `
};

const milestones = [
  {
    year: '2020',
    title: 'UDEN Founded',
    desc: 'Established with the mission to solve hiring friction by unifying developers, trainers, and recruiters.',
    icon: <Rocket size={18} />
  },
  {
    year: '2022',
    title: 'Startup India DIPP Accreditation',
    desc: 'Recognized by Govt of India (DIPP) for innovation in talent assessment and career advancement.',
    icon: <Award size={18} />
  },
  {
    year: '2024',
    title: '150+ Corporate Hiring Partners',
    desc: 'Expanded network across enterprise firms including Deloitte, bluCognition, and global tech agencies.',
    icon: <Building size={18} />
  },
  {
    year: '2026',
    title: '2,500+ Candidate Placements',
    desc: 'Achieved over 2,500 successful candidate placements with 98% 90-day retention warranty.',
    icon: <ShieldCheck size={18} />
  }
];

const AboutTimeline = () => {
  return (
    <div css={styles.section}>
      <div css={styles.header}>
        <h2>Our Growth Journey</h2>
        <p>Key milestones that shaped UDEN into a trusted talent & employment network.</p>
      </div>

      <div css={styles.timelineContainer}>
        {milestones.map((m, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={idx} css={styles.timelineRow(isEven)}>
              <div css={styles.centerDot}>{m.icon}</div>
              <div css={styles.card}>
                <span css={styles.yearTag}>{m.year}</span>
                <h3 css={styles.rowTitle}>{m.title}</h3>
                <p css={styles.rowDesc}>{m.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutTimeline;
