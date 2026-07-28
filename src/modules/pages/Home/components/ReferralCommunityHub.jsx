import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { DollarSign, Users, Sparkles, ArrowRight, CheckCircle2, Gift } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let TeamCollaborationImage;
try {
  TeamCollaborationImage = require('../../../../utils/consts/uploaded_illustrations').TeamCollaborationImage;
} catch (e) {
  TeamCollaborationImage = null;
}

const styles = {
  container: css`
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  `,
  cardOuter: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    border: 2px solid #DA532C;
    border-radius: 28px;
    padding: 50px;
    box-shadow: 0 16px 36px rgba(218, 83, 44, 0.12);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      padding: 32px;
      gap: 32px;
    }
  `,
  illustrationCol: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  illustrationImg: css`
    width: 100%;
    max-height: 320px;
    object-fit: contain;
    border-radius: 20px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.05);
    background: #FFFFFF;
    padding: 12px;
  `,
  fallbackCard: css`
    width: 100%;
    height: 280px;
    background: #FFFFFF;
    border: 2px dashed #DA532C;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: #DA532C;
    font-weight: 800;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 18px;
    border: 1px solid rgba(218, 83, 44, 0.25);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 34px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.25;
    margin-bottom: 18px;
    letter-spacing: -0.5px;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 26px;
    }
  `,
  subtitle: css`
    font-size: 15.5px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 28px;
    font-weight: 500;
  `,
  benefitsList: css`
    list-style: none;
    padding: 0;
    margin: 0 0 32px 0;

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14.5px;
      color: #1E293B;
      font-weight: 700;
      margin-bottom: 12px;
    }
  `,
  ctaBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 16px 32px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 6px 18px rgba(218, 83, 44, 0.25);

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(218, 83, 44, 0.35);
    }
  `
};

const ReferralCommunityHub = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.container} className="uden-fade-in">
      <div css={styles.cardOuter}>
        {/* Left Column: Illustration Image */}
        <div css={styles.illustrationCol}>
          {TeamCollaborationImage ? (
            <img 
              src={TeamCollaborationImage} 
              alt="Peer Learning & Referral Collaboration" 
              css={styles.illustrationImg}
              className="uden-card-hover"
            />
          ) : (
            <div css={styles.fallbackCard}>
              <Users size={36} color="#DA532C" />
              <span>Peer Collaboration & Referral Hub</span>
            </div>
          )}
        </div>

        {/* Right Column: Copy & Actions */}
        <div>
          <div css={styles.badgeTag} className="uden-float-anim">
            <Gift size={14} />
            EARN CASH REWARDS WHILE JOB SEARCHING
          </div>

          <h2 css={styles.title}>
            Learn, Collaborate & <span>Get Paid</span> by Referring Friends
          </h2>

          <p css={styles.subtitle}>
            Form peer study circles with classmates, share company interview prep resources, and earn cash referral rewards every time your referred friends sign up on UDEN.
          </p>

          <ul css={styles.benefitsList}>
            <li>
              <CheckCircle2 size={18} color="#DA532C" />
              <span>Earn Cash Rewards per successful friend referral</span>
            </li>
            <li>
              <CheckCircle2 size={18} color="#DA532C" />
              <span>Form Peer Study Groups for Deloitte, TCS & Amazon prep</span>
            </li>
            <li>
              <CheckCircle2 size={18} color="#DA532C" />
              <span>Access Shared Mock Interview Feedback & Question Banks</span>
            </li>
          </ul>

          <button css={styles.ctaBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.JOB_SEEKERS)}>
            Refer Friends & Earn Cash Rewards
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralCommunityHub;
