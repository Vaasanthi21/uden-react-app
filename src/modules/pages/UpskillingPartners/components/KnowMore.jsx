import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

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
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 32px;
    border: 1.5px solid rgba(255, 176, 32, 0.35);

    @media (max-width: 860px) {
      flex-direction: column;
      text-align: center;
      padding: 36px 24px;
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
    margin-bottom: 14px;
    border: 1px solid rgba(218, 83, 44, 0.25);
  `,
  heading: css`
    font-size: 28px;
    font-weight: 900;
    line-height: 1.3;
    margin: 0 0 10px 0;
    color: #1E293B;
    max-width: 680px;

    span {
      color: #DA532C;
    }
  `,
  subtitle: css`
    font-size: 15px;
    color: #475569;
    margin: 0;
  `,
  ctaBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 16px 36px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    white-space: nowrap;
    transition: all 0.25s ease;

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(218, 83, 44, 0.35);
    }
  `
};

const UpskillingKnowMore = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.container}>
      <div css={styles.banner}>
        <div>
          <div css={styles.badge}>
            <Zap size={14} />
            BECOME AN ACCREDITED PARTNER
          </div>
          <h2 css={styles.heading}>
            Partner with UDEN to <span>Train & Place Industry Candidates</span>
          </h2>
          <p css={styles.subtitle}>Join our network of 50+ institute partners and deliver job-aligned curriculum.</p>
        </div>

        <button 
          css={styles.ctaBtn}
          onClick={() => navigate(AppRoutes.BECOME_PARTNER)}
        >
          Join as Upskilling Partner
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default UpskillingKnowMore;