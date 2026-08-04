import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Clock, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';
import { HomeConst } from '../Home.Const';

const styles = {
  container: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  banner: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    border-radius: 24px;
    padding: 48px;
    color: #1E293B;
    box-shadow: 0 12px 32px rgba(218, 83, 44, 0.1);
    display: grid;
    grid-template-columns: 1.2fr 1fr;
    gap: 40px;
    align-items: center;
    border: 1.5px solid rgba(255, 176, 32, 0.3);

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      padding: 32px 24px;
    }
  `,
  badge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 16px;
    border: 1px solid rgba(218, 83, 44, 0.25);
  `,
  heading: css`
    font-size: 32px;
    font-weight: 900;
    line-height: 1.25;
    margin-bottom: 16px;
    color: #1E293B;

    span {
      color: #DA532C;
    }
  `,
  desc: css`
    font-size: 15px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 28px;
  `,
  featureList: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
  `,
  featureItem: css`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14px;
    color: #334155;
    font-weight: 600;
  `,
  iconBox: css`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(218, 83, 44, 0.15);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  ctaButton: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px 32px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.2s ease;

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(218, 83, 44, 0.35);
    }
  `,
  cardRight: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  `,
  cardTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  slaRow: css`
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid #E2E8F0;
    font-size: 14px;

    span:first-of-type {
      color: #64748B;
      font-weight: 500;
    }
    span:last-of-type {
      font-weight: 800;
      color: #1E293B;
    }
  `
};

const featureIcons = [<ShieldCheck size={16} />, <Clock size={16} />, <CheckCircle size={16} />];

const RecruiterHub = () => {
  const navigate = useNavigate();
  const hubData = HomeConst.RecruiterHub;

  return (
    <div css={styles.container}>
      <div css={styles.banner}>
        <div>
          <div css={styles.badge}>
            <Zap size={14} />
            {hubData.badge}
          </div>
          <h2 css={styles.heading}>
            {hubData.headingMain}<span>{hubData.headingSpan}</span>
          </h2>
          <p css={styles.desc}>{hubData.desc}</p>

          <div css={styles.featureList}>
            {hubData.features.map((feat, idx) => (
              <div key={idx} css={styles.featureItem}>
                <div css={styles.iconBox}>{featureIcons[idx % featureIcons.length]}</div>
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <button 
            css={styles.ctaButton}
            onClick={() => navigate(AppRoutes.FIND_TALENT)}
          >
            {hubData.ctaText}
            <ArrowRight size={18} />
          </button>
        </div>

        <div css={styles.cardRight}>
          <div css={styles.cardTitle}>
            <Clock size={20} color="#DA532C" />
            {hubData.slaCard.title}
          </div>

          {hubData.slaCard.rows.map((row, idx) => (
            <div key={idx} css={styles.slaRow}>
              <span>{row.label}</span>
              <span style={row.highlight ? { color: '#DA532C' } : {}}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecruiterHub;
