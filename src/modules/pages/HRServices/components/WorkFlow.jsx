import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Sparkles, Target, TrendingUp, Users, Award, GraduationCap, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 44px;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid rgba(218, 83, 44, 0.25);
  `,
  title: css`
    font-size: 34px;
    font-weight: 900;
    color: #1E293B;
    margin: 0 0 10px 0;
  `,
  subtitle: css`
    font-size: 16px;
    color: #64748B;
    max-width: 680px;
    margin: 0 auto;
    line-height: 1.6;
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 960px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  `,
  card: (isFeatured) => css`
    background: ${isFeatured ? 'linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%)' : '#FFFFFF'};
    color: #1E293B;
    border: 1.5px solid ${isFeatured ? '#DA532C' : '#E2E8F0'};
    border-radius: 20px;
    padding: 32px 24px;
    box-shadow: ${isFeatured ? '0 12px 28px rgba(218, 83, 44, 0.12)' : '0 4px 14px rgba(0, 0, 0, 0.03)'};
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    overflow: hidden;

    &:hover {
      transform: translateY(-6px);
      border-color: #DA532C;
      box-shadow: 0 16px 32px rgba(218, 83, 44, 0.2);
    }
  `,
  topRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  `,
  iconBox: (isFeatured) => css`
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: ${isFeatured ? '#DA532C' : 'rgba(218, 83, 44, 0.12)'};
    color: ${isFeatured ? '#FFFFFF' : '#DA532C'};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  tagBadge: (isFeatured) => css`
    font-size: 11.5px;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 12px;
    background: ${isFeatured ? '#FFF5F5' : '#F1F5F9'};
    color: #DA532C;
    border: 1px solid ${isFeatured ? '#FECDD3' : '#CBD5E1'};
  `,
  cardTitle: css`
    font-size: 20px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 12px;
    line-height: 1.3;
  `,
  cardDesc: css`
    font-size: 14px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 24px;
    font-weight: 500;
  `,
  learnMoreBtn: css`
    background: none;
    border: none;
    padding: 0;
    color: #DA532C;
    font-weight: 800;
    font-size: 13.5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: gap 0.2s ease;

    &:hover {
      gap: 10px;
    }
  `
};

const offerings = [
  {
    id: 1,
    title: 'Vision, Mission & Values Statement',
    tag: 'BRAND FOUNDATION',
    desc: 'Align executive leadership, build employer brand loyalty, and define your organization’s strategic purpose.',
    icon: <Target size={24} />,
    featured: true
  },
  {
    id: 2,
    title: 'Performance Management',
    tag: 'TALENT RETENTION',
    desc: 'Design scorecards, leadership targets, and performance philosophies that retain top talent.',
    icon: <TrendingUp size={24} />,
    featured: false
  },
  {
    id: 3,
    title: 'Optimized HR Operations',
    tag: 'PROCESS EFFICIENCY',
    desc: 'Streamline onboarding workflows, eliminate unproductive transactions, and enhance employee loyalty.',
    icon: <Users size={24} />,
    featured: false
  },
  {
    id: 4,
    title: 'HR Policy & Compliance',
    tag: 'LEGAL & AUDIT READY',
    desc: 'Develop compliant workplace policies, ESG/CSR frameworks, and employee benefit structures.',
    icon: <ShieldCheck size={24} />,
    featured: false
  },
  {
    id: 5,
    title: 'Strategic Career Pathing',
    tag: 'MERITOCRATIC GROWTH',
    desc: 'Establish clear competency frameworks and career growth paths to cultivate internal leadership.',
    icon: <Award size={24} />,
    featured: true
  },
  {
    id: 6,
    title: 'Employee Engagement',
    tag: 'CULTURE & WELLNESS',
    desc: 'Organize team-building events, wellness initiatives, and positive workplace experiences.',
    icon: <Sparkles size={24} />,
    featured: false
  },
  {
    id: 7,
    title: 'Campus to Corporate Program',
    tag: 'FRESH TALENT INTAKE',
    desc: 'Conceptualize and execute complete campus recruitment drives to build your future tech workforce.',
    icon: <GraduationCap size={24} />,
    featured: false
  }
];

const HRServicesWorkFlow = (props) => {
  const navigate = useNavigate();

  return (
    <div css={styles.section} {...props}>
      <div css={styles.header}>
        <div css={styles.badgeTag}>
          <Sparkles size={14} />
          HOLISTIC SERVICE OFFERINGS
        </div>
        <h2 css={styles.title}>HR Services Offerings of UDEN</h2>
        <p css={styles.subtitle}>
          Explore our end-to-end HR solutions built to empower leadership teams, optimize operations, and retain top talent.
        </p>
      </div>

      <div css={styles.grid}>
        {offerings.map((item) => (
          <div key={item.id} css={styles.card(item.featured)}>
            <div>
              <div css={styles.topRow}>
                <div css={styles.iconBox(item.featured)}>{item.icon}</div>
                <span css={styles.tagBadge(item.featured)}>{item.tag}</span>
              </div>

              <h3 css={styles.cardTitle}>{item.title}</h3>
              <p css={styles.cardDesc}>{item.desc}</p>
            </div>

            <button 
              css={styles.learnMoreBtn}
              onClick={() => navigate(AppRoutes.HR_SERVICE_JOIN)}
            >
              Consult HR Leads
              <ArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HRServicesWorkFlow;