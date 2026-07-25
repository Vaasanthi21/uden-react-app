import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Globe, GraduationCap, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';
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
      max-width: 650px;
      margin: 0 auto;
    }
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;

    @media (max-width: 860px) {
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
  cardHeader: css`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 16px;
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
    flex-shrink: 0;
  `,
  cardTitle: css`
    font-size: 20px;
    font-weight: 800;
    color: #1E293B;
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
  `,
  actionBtn: css`
    background: #FFF5F5;
    color: #DA532C;
    border: 1px solid #FECDD3;
    padding: 10px 18px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 13px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    align-self: flex-start;
    transition: all 0.2s ease;

    &:hover {
      background: #DA532C;
      color: #FFFFFF;
      border-color: #DA532C;
    }
  `
};

const solutions = [
  {
    title: 'Pre-Assessed & Skill-Verified Talent',
    desc: 'Candidates on UDEN complete rigorous coding assessments, system design evaluations, and gap-closing upskilling. Access verified skill scores and code repository logs before shortlisting.',
    bullets: ['Verified Code Quality Scores', 'Progressive Skill Tracking', 'Zero False Resumes'],
    icon: <ShieldCheck size={26} />
  },
  {
    title: 'Global Talent Pool & Cost Optimization',
    desc: 'Attract high-performing engineers across India, APAC, and global markets. Manage talent costs effectively with options for full-time, contract, or remote engagements.',
    bullets: ['Global Remote Workforce', 'Flexible Engagement Models', 'Up to 45% Cost Efficiency'],
    icon: <Globe size={26} />
  },
  {
    title: 'Curated Enterprise Upskilling Tracks',
    desc: 'Have unique stack requirements? UDEN collaborates with trusted upskilling partners to train candidate cohorts specifically on your proprietary tech stack and architecture.',
    bullets: ['Custom Stack Curations', 'Predictable Talent Pipelines', 'Partner Upskilling Accreditation'],
    icon: <GraduationCap size={26} />
  },
  {
    title: 'On-Demand Domain Expertise',
    desc: 'Instantly source candidates with niche domain experience in AI/ML, Microservices, Cloud DevOps, Fullstack Web 3.0, and Data Engineering.',
    bullets: ['AI & Data Science Pools', 'AWS & Cloud Specialists', 'Pre-Vetted Senior Leads'],
    icon: <Cpu size={26} />
  }
];

const CompaniesFeature = (props) => {
  const navigate = useNavigate();

  return (
    <div css={styles.section} {...props}>
      <div css={styles.header}>
        <h2>Why Enterprise Recruiters Hire via UDEN</h2>
        <p>Comprehensive talent acquisition solutions designed to accelerate intake, reduce cost, and guarantee quality.</p>
      </div>

      <div css={styles.grid}>
        {solutions.map((item, idx) => (
          <div key={idx} css={styles.card}>
            <div>
              <div css={styles.cardHeader}>
                <div css={styles.iconBox}>{item.icon}</div>
                <h3 css={styles.cardTitle}>{item.title}</h3>
              </div>
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

            <button 
              css={styles.actionBtn}
              onClick={() => navigate(AppRoutes.FIND_TALENT)}
            >
              Explore Solution
              <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesFeature;