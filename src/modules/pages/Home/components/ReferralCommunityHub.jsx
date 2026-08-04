import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { DollarSign, Users, ArrowRight, CheckCircle2, Gift, Share2, Zap } from 'lucide-react';
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
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 20px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    box-sizing: border-box;

    @media (max-width: 640px) {
      padding: 0 14px;
      width: 100%;
      max-width: 100%;
      overflow: hidden;
    }
  `,
  /* TOP CENTERED BADGE WRAPPER */
  topBadgeWrap: css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 28px;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(75, 99, 140, 0.1);
    color: #4B638C;
    padding: 8px 20px;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 800;
    border: 1px solid rgba(75, 99, 140, 0.25);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    max-width: 100%;

    @media (max-width: 480px) {
      font-size: 10.5px;
      padding: 6px 14px;
    }
  `,
  /* 2-COLUMN GRID WITH FLUSH STARTING & ENDING BASELINES */
  heroGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: stretch;
    margin-bottom: 36px;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  `,
  illustrationCol: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  `,
  illustrationImg: css`
    width: 100%;
    height: 100%;
    max-height: 340px;
    object-fit: cover;
    border-radius: 24px;
    box-shadow: 0 16px 36px rgba(75, 99, 140, 0.1);
    background: #FFFFFF;
    padding: 12px;
    border: 1.5px solid #4B638C;
    box-sizing: border-box;

    @media (max-width: 640px) {
      max-height: 220px;
    }
  `,
  fallbackCard: css`
    width: 100%;
    height: 100%;
    min-height: 280px;
    background: #FFFFFF;
    border: 2px dashed #4B638C;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    color: #4B638C;
    font-weight: 800;
  `,
  rightCol: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: left;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  `,
  title: css`
    font-size: 38px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.2;
    margin: 0 0 16px 0;
    letter-spacing: -0.8px;
    text-align: left;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 26px;
    }
  `,
  subtitle: css`
    font-size: 15.5px;
    color: #475569;
    line-height: 1.6;
    margin: 0 0 20px 0;
    font-weight: 500;
    text-align: left;

    @media (max-width: 640px) {
      font-size: 14px;
    }
  `,
  benefitsList: css`
    list-style: none;
    padding: 0;
    margin: 0;
    text-align: left;
    width: 100%;
    box-sizing: border-box;

    li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      font-size: 14px;
      color: #1E293B;
      font-weight: 700;
      margin-bottom: 12px;
      text-align: left;

      svg {
        flex-shrink: 0;
        margin-top: 3px;
      }

      span {
        flex: 1;
        min-width: 0;
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  `,
  /* BOTTOM CENTERED BUTTON WRAPPER */
  bottomBtnWrap: css`
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 48px;
    box-sizing: border-box;
  `,
  ctaBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 16px 36px;
    border-radius: 30px;
    font-weight: 800;
    font-size: 15.5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 8px 24px rgba(245, 88, 37, 0.3);

    @media (max-width: 640px) {
      width: 100%;
      padding: 14px 20px;
      font-size: 14px;
    }

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(245, 88, 37, 0.4);
    }
  `,

  /* BORDERLESS 3-COLUMN FEATURE ROW */
  featureColumnsGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding-top: 40px;
    border-top: 1px solid #E2E8F0;
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  `,
  featureColItem: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    text-align: left;
    width: 100%;
    box-sizing: border-box;
  `,
  colIconBox: css`
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(75, 99, 140, 0.12);
    color: #4B638C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  colTitle: css`
    font-size: 17.5px;
    font-weight: 800;
    color: #1E293B;
    margin: 0;
    text-align: left;
  `,
  colDesc: css`
    font-size: 13.5px;
    color: #64748B;
    line-height: 1.6;
    margin: 0;
    font-weight: 500;
    text-align: left;
  `
};

const ReferralCommunityHub = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.container} className="uden-fade-in">
      {/* 1. TOP CENTERED BADGE */}
      <div css={styles.topBadgeWrap}>
        <div css={styles.badgeTag} className="uden-float-anim">
          <Gift size={14} color="#F7BC08" />
          EARN CASH REWARDS WHILE JOB SEARCHING
        </div>
      </div>

      {/* 2. 2-COLUMN GRID WITH FLUSH STARTING & ENDING BASELINES */}
      <div css={styles.heroGrid}>
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
              <Users size={36} color="#4B638C" />
              <span>Peer Collaboration &amp; Referral Hub</span>
            </div>
          )}
        </div>

        {/* Right Column: Title, Description & Benefits (Starts & Ends flush with left image) */}
        <div css={styles.rightCol}>
          <h2 css={styles.title}>
            Learn, Collaborate &amp; <span>Get Paid</span> by Referring Friends
          </h2>

          <p css={styles.subtitle}>
            Form peer study circles with classmates, share company interview prep resources, and earn cash referral rewards every time your referred friends sign up on UDEN.
          </p>

          <ul css={styles.benefitsList}>
            <li>
              <CheckCircle2 size={18} color="#F55825" />
              <span>Earn Cash Rewards per successful friend referral</span>
            </li>
            <li>
              <CheckCircle2 size={18} color="#F55825" />
              <span>Form Peer Study Groups for Deloitte, TCS &amp; Amazon prep</span>
            </li>
            <li>
              <CheckCircle2 size={18} color="#F55825" />
              <span>Access Shared Mock Interview Feedback &amp; Question Banks</span>
            </li>
          </ul>
        </div>
      </div>

      {/* 3. BOTTOM CENTERED BUTTON */}
      <div css={styles.bottomBtnWrap}>
        <button css={styles.ctaBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.JOB_SEEKERS)}>
          Refer Friends &amp; Earn Cash Rewards
          <ArrowRight size={18} />
        </button>
      </div>

      {/* 4. BORDERLESS 3-COLUMN FEATURE ROW */}
      <div css={styles.featureColumnsGrid}>
        <div css={styles.featureColItem}>
          <div css={styles.colIconBox}>
            <Share2 size={22} />
          </div>
          <h3 css={styles.colTitle}>Instant Referral Sharing</h3>
          <p css={styles.colDesc}>Generate custom WhatsApp and LinkedIn invite links in one click to invite your college peers.</p>
        </div>

        <div css={styles.featureColItem}>
          <div css={styles.colIconBox} style={{ background: 'rgba(245, 88, 37, 0.12)', color: '#F55825' }}>
            <DollarSign size={22} />
          </div>
          <h3 css={styles.colTitle}>Direct Cash Rewards</h3>
          <p css={styles.colDesc}>Track live referral earnings and receive direct cash deposits while searching for your dream role.</p>
        </div>

        <div css={styles.featureColItem}>
          <div css={styles.colIconBox} style={{ background: 'rgba(247, 188, 8, 0.15)', color: '#1E293B' }}>
            <Zap size={22} color="#F7BC08" />
          </div>
          <h3 css={styles.colTitle}>Collaborative Prep Circles</h3>
          <p css={styles.colDesc}>Access shared PYQ banks, company-specific test cases, and AI video interview scorecards with your group.</p>
        </div>
      </div>
    </div>
  );
};

export default ReferralCommunityHub;
