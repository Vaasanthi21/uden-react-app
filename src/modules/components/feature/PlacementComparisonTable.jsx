import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { CheckCircle2, XCircle, ArrowRight, Calendar, Sparkles } from 'lucide-react';
import { openBubbleLogin } from '../../../utils/bubbleAuth';
import { useFormModal } from '../modal/FormModalContext';

const styles = {
  wrapper: css`
    margin-top: 56px;
    padding: 40px 28px;
    background: #FFFFFF;
    border: 1.5px solid #FEF5D8;
    border-radius: 28px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);

    @media (max-width: 640px) {
      padding: 24px 16px;
      margin-top: 36px;
    }
  `,
  header: css`
    text-align: center;
    max-width: 680px;
    margin: 0 auto 32px;
  `,
  badge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FFF5F0;
    border: 1px solid #FFDECB;
    color: #F55825;
    padding: 5px 14px;
    border-radius: 20px;
    font-size: 11.5px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 12px;
  `,
  title: css`
    font-size: 30px;
    font-weight: 900;
    color: #0F172A;
    margin: 0 0 10px;
    letter-spacing: -0.5px;

    span {
      color: #F55825;
    }

    @media (max-width: 640px) {
      font-size: 24px;
    }
  `,
  subtitle: css`
    font-size: 14.5px;
    color: #64748B;
    line-height: 1.6;
    margin: 0;
  `,
  tableWrapper: css`
    width: 100%;
    overflow-x: auto;
    border-radius: 18px;
    border: 1px solid #E2E8F0;
    margin-bottom: 32px;
  `,
  table: css`
    width: 100%;
    border-collapse: collapse;
    font-family: inherit;

    th, td {
      padding: 16px 20px;
      text-align: left;
      font-size: 14px;
    }

    th {
      font-size: 13.5px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.5px;
      border-bottom: 1.5px solid #E2E8F0;
    }

    tr:not(:last-child) td {
      border-bottom: 1px solid #F1F5F9;
    }

    @media (max-width: 640px) {
      th, td {
        padding: 12px 14px;
        font-size: 13px;
      }
    }
  `,
  thCategory: css`
    width: 24%;
    background: #F8FAFC;
    color: #475569;
  `,
  thOldWay: css`
    width: 38%;
    background: #F8FAFC;
    color: #64748B;
  `,
  thUden: css`
    width: 38%;
    background: #FFF7ED;
    color: #EA580C;
    font-weight: 900;
  `,
  tdCategory: css`
    font-weight: 800;
    color: #1E293B;
    background: #FAFAFA;
  `,
  tdOldWay: css`
    color: #64748B;
    background: #FFFFFF;
    display: flex;
    align-items: flex-start;
    gap: 8px;
    line-height: 1.5;
  `,
  tdUden: css`
    color: #0F172A;
    font-weight: 700;
    background: #FFFDF9;
    border-left: 2px solid #FFEDD5;
    line-height: 1.5;

    .highlight {
      color: #F55825;
      font-weight: 800;
    }
  `,
  ctaBottom: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  `,
  primaryBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 13px 28px;
    border-radius: 30px;
    font-size: 14.5px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 6px 18px rgba(245, 88, 37, 0.25);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(245, 88, 37, 0.35);
    }
  `,
  secondaryBtn: css`
    background: transparent;
    color: #475569;
    border: 1.5px solid #CBD5E1;
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;

    &:hover {
      border-color: #F55825;
      color: #F55825;
      background: #FFF7ED;
      transform: translateY(-1px);
    }
  `
};

const comparisonData = [
  {
    category: 'Screening',
    oldWay: 'Manual review of every resume line by line (takes weeks)',
    udenText: 'Save 100+ hours with instant ATS scoring and 8-axis skill radar matching'
  },
  {
    category: 'Shortlists',
    oldWay: 'Weeks of back-and-forth emails between recruiters and TPO',
    udenText: '48-hour hiring shortlists delivered directly to employers'
  },
  {
    category: 'Interview Practice',
    oldWay: '1 superficial mock round or zero personalized prep',
    udenText: '24x7 AI mock interviews with comprehensive behavioral and technical analytics'
  },
  {
    category: 'Drive Scheduling',
    oldWay: 'Scheduling chaos, clashes, and lost corporate placement offers',
    udenText: 'Automated drive scheduling with 150+ hiring partners in one dashboard'
  },
  {
    category: 'Talent Readiness',
    oldWay: 'Unvetted skill claims requiring heavy post-hire corporate retraining',
    udenText: '100% pre-assessed, verified candidates ready for Day 1 deployment'
  }
];

export default function PlacementComparisonTable() {
  const { openModal } = useFormModal();

  return (
    <div css={styles.wrapper}>
      <div css={styles.header}>
        <div css={styles.badge}>
          <Sparkles size={13} color="#F55825" />
          The Placement Shift
        </div>
        <h2 css={styles.title}>
          Manual placements vs <span>UDEN</span>
        </h2>
        <p css={styles.subtitle}>
          What changes when your placement cell and corporate hiring partners move to an AI-automated network.
        </p>
      </div>

      <div css={styles.tableWrapper}>
        <table css={styles.table}>
          <thead>
            <tr>
              <th css={styles.thCategory}>Placement Area</th>
              <th css={styles.thOldWay}>The Old Way (Manual)</th>
              <th css={styles.thUden}>With UDEN Platform</th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((item, index) => (
              <tr key={index}>
                <td css={styles.tdCategory}>{item.category}</td>
                <td>
                  <div css={styles.tdOldWay}>
                    <XCircle size={16} color="#94A3B8" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item.oldWay}</span>
                  </div>
                </td>
                <td css={styles.tdUden}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <CheckCircle2 size={16} color="#10B981" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{item.udenText}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div css={styles.ctaBottom}>
        <button 
          css={styles.primaryBtn}
          onClick={() => {
            try {
              if (window.dataLayer) {
                window.dataLayer.push({
                  event: 'cta_click',
                  button_text: 'Get Started Free',
                  button_location: 'comparison_table'
                });
              }
            } catch (e) {}
            openBubbleLogin();
          }}
        >
          Get Started Free
          <ArrowRight size={16} />
        </button>

        <button 
          css={styles.secondaryBtn}
          onClick={() => openModal('demo')}
        >
          <Calendar size={15} color="#F55825" />
          Book a Demo
        </button>
      </div>
    </div>
  );
}
