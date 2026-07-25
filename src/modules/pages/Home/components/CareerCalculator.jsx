import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { TrendingUp, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';
import { HomeConst } from '../Home.Const';

const styles = {
  section: css`
    background: #FFFDF7;
    padding: 50px 16px;
    border-radius: 24px;
    margin: 40px auto;
    max-width: 1200px;
    border: 1.5px solid rgba(255, 176, 32, 0.3);
  `,
  container: css`
    max-width: 1000px;
    margin: 0 auto;
  `,
  header: css`
    text-align: center;
    margin-bottom: 36px;

    h2 {
      font-size: 28px;
      font-weight: 800;
      color: #DA532C;
      margin-bottom: 8px;
    }

    p {
      color: #64748B;
      font-size: 15px;
    }
  `,
  calcBox: css`
    background: #FFFFFF;
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 10px 30px rgba(218, 83, 44, 0.12);
    border: 1px solid #E2E8F0;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 32px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
  formCol: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  fieldGroup: css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    label {
      font-size: 14px;
      font-weight: 700;
      color: #1E293B;
    }

    select {
      padding: 12px 16px;
      border-radius: 10px;
      border: 1.5px solid #CBD5E1;
      font-size: 14px;
      color: #1E293B;
      background: #FFFFFF;
      outline: none;
      font-weight: 600;
      cursor: pointer;

      &:focus {
        border-color: #DA532C;
      }
    }
  `,
  resultCol: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    border-radius: 16px;
    padding: 28px;
    color: #1E293B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 6px 18px rgba(218, 83, 44, 0.08);
    border: 1.5px solid rgba(255, 176, 32, 0.4);
  `,
  growthHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  `,
  growthBadge: css`
    background: #FFF5F5;
    color: #DA532C;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid #FECDD3;
  `,
  bigNumber: css`
    font-size: 34px;
    font-weight: 900;
    color: #DA532C;
    margin-bottom: 4px;
  `,
  skillsContainer: css`
    margin: 20px 0;
  `,
  skillsLabel: css`
    font-size: 13px;
    color: #475569;
    margin-bottom: 8px;
    font-weight: 700;
  `,
  skillTags: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  `,
  skillChip: css`
    background: #FFFFFF;
    color: #DA532C;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 12.5px;
    font-weight: 700;
    border: 1px solid rgba(218, 83, 44, 0.3);
    box-shadow: 0 2px 6px rgba(0,0,0,0.03);
  `,
  ctaBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px;
    border-radius: 10px;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(218, 83, 44, 0.35);
    }
  `
};

const CareerCalculator = () => {
  const [selectedDomain, setSelectedDomain] = useState('frontend');
  const navigate = useNavigate();
  const calcData = HomeConst.CareerCalculator;
  const currentData = calcData.domains[selectedDomain];

  return (
    <div css={styles.section}>
      <div css={styles.container}>
        <div css={styles.header}>
          <h2>{calcData.title}</h2>
          <p>{calcData.subtitle}</p>
        </div>

        <div css={styles.calcBox}>
          <div css={styles.formCol}>
            <div css={styles.fieldGroup}>
              <label>Select Domain / Field:</label>
              <select 
                value={selectedDomain} 
                onChange={(e) => setSelectedDomain(e.target.value)}
              >
                {Object.keys(calcData.domains).map(key => (
                  <option key={key} value={key}>{calcData.domains[key].label}</option>
                ))}
              </select>
            </div>

            <div css={styles.fieldGroup}>
              <label>Target Job Roles:</label>
              <select>
                {currentData.roles.map((role, idx) => (
                  <option key={idx} value={role}>{role}</option>
                ))}
              </select>
            </div>

            <p style={{ fontSize: '13px', color: '#64748B', lineHeight: '1.5', marginTop: '10px' }}>
              💡 <b>Did you know?</b> Candidates who complete UDEN partner upskilling programs see an average <b style={{ color: '#DA532C' }}>45%+ salary jump</b> within 90 days.
            </p>
          </div>

          <div css={styles.resultCol}>
            <div>
              <div css={styles.growthHeader}>
                <span style={{ fontSize: '13px', color: '#475569', fontWeight: '700' }}>ESTIMATED GROWTH</span>
                <span css={styles.growthBadge}>
                  <TrendingUp size={14} />
                  {currentData.growth} Avg Uplift
                </span>
              </div>

              <div css={styles.bigNumber}>{currentData.avgSalary}</div>
              <span style={{ fontSize: '12px', color: '#64748B', fontWeight: '500' }}>Expected salary range based on current market demand</span>

              <div css={styles.skillsContainer}>
                <div css={styles.skillsLabel}>TOP REQUIRED SKILLS IN DEMAND:</div>
                <div css={styles.skillTags}>
                  {currentData.skills.map((s, idx) => (
                    <span key={idx} css={styles.skillChip}>{s}</span>
                  ))}
                </div>
              </div>
            </div>

            <button 
              css={styles.ctaBtn}
              onClick={() => navigate(AppRoutes.UPSKILLING_PARTNERS)}
            >
              Get Upskilled with UDEN Partners
              <ArrowUpRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerCalculator;
