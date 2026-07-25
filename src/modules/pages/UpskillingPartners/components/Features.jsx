import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Award, Users, TrendingUp, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 40px;

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
  grid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,
  card: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(218, 83, 44, 0.15);
      border-color: #DA532C;
    }
  `,
  iconBox: css`
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  `,
  cardTitle: css`
    font-size: 20px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 12px;
  `,
  cardDesc: css`
    font-size: 14px;
    color: #64748B;
    line-height: 1.65;
    margin-bottom: 24px;
  `,
  bulletsList: css`
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 24px;
  `,
  bulletItem: css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13.5px;
    color: #334155;
    font-weight: 600;
  `
};

const partnerBenefits = [
  {
    title: 'Accredited Curriculum Synergy',
    desc: 'Co-design curriculum with UDEN’s real-time employer demand signals so your students learn skills actively sought by corporate recruiters.',
    bullets: ['Employer Demand Alignment', 'Verified Skill Badges', 'Industry-Grade Capstones'],
    icon: <Award size={26} />
  },
  {
    title: 'Guaranteed Candidate Placements',
    desc: 'Directly connect your graduating student cohorts to UDEN’s network of 150+ corporate hiring partners for immediate interviews.',
    bullets: ['Direct Recruiter Shortlists', 'Higher CTC Opportunities', 'Zero Placement Friction'],
    icon: <Users size={26} />
  },
  {
    title: 'Partner Revenue & Growth',
    desc: 'Expand your institute’s reach across UDEN’s candidate community and scale course enrollments with verified placement outcomes.',
    bullets: ['National Student Reach', 'Verified Outcome Badges', 'Continuous Cohort Demand'],
    icon: <TrendingUp size={26} />
  }
];

const UpskillingFeatures = (props) => {
  return (
    <div css={styles.section} {...props}>
      <div css={styles.header}>
        <h2>Why Partner with UDEN</h2>
        <p>Unlock strategic advantages for your training institute or academy.</p>
      </div>

      <div css={styles.grid}>
        {partnerBenefits.map((item, idx) => (
          <div key={idx} css={styles.card}>
            <div>
              <div css={styles.iconBox}>{item.icon}</div>
              <h3 css={styles.cardTitle}>{item.title}</h3>
              <p css={styles.cardDesc}>{item.desc}</p>

              <div css={styles.bulletsList}>
                {item.bullets.map((b, i) => (
                  <div key={i} css={styles.bulletItem}>
                    <CheckCircle2 size={15} color="#DA532C" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpskillingFeatures;