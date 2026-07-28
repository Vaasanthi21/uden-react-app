import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Users, FileSearch } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let CandidateNetworkImage;
try {
  CandidateNetworkImage = require('../../../../assets/images/candidate-network.jpg');
} catch (e) {
  CandidateNetworkImage = process.env.PUBLIC_URL + '/images/candidate-network.jpg';
}

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FEF5D8 100%);
    padding: 70px 20px 50px 20px;
    border-bottom: 2px solid rgba(218, 83, 44, 0.2);
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FEF5D8;
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 18px;
    border: 1px solid rgba(255, 176, 32, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.18;
    margin: 0 0 16px 0;
    letter-spacing: -0.8px;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,
  subtitle: css`
    font-size: 16.5px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 32px;
    font-weight: 500;
  `,
  bulletGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 36px;

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  `,
  bulletItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 700;
    color: #1E293B;
  `,
  iconBox: css`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: rgba(218, 83, 44, 0.15);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  rightCol: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,
  hrImgBanner: css`
    width: 100%;
    max-height: 280px;
    object-fit: contain;
    border-radius: 24px;
    background: #FFFFFF;
    padding: 14px;
    border: 2px solid #DA532C;
    box-shadow: 0 12px 32px rgba(218, 83, 44, 0.12);
  `,
  primaryBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px 30px;
    border-radius: 14px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 8px 20px rgba(218, 83, 44, 0.25);

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(218, 83, 44, 0.35);
    }
  `
};

const HRServicesBanner = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.heroOuter} className="uden-fade-in">
      <div css={styles.container}>
        <div>
          <div css={styles.badgeTag} className="uden-float-anim">
            <Sparkles size={14} />
            END-TO-END HR & RECRUITMENT SERVICES
          </div>
          <h1 css={styles.title}>
            Streamline Enterprise Hiring with <span>AI-Driven HR Operations</span>
          </h1>
          <p css={styles.subtitle}>
            From automated ATS resume screening and video background checks to payroll and placement compliance — empower your HR team with UDEN's verified talent ecosystem.
          </p>

          <div css={styles.bulletGrid}>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>Automated ATS Resume Parsing</span>
            </div>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>Background & Credential Verification</span>
            </div>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>Payroll & Onboarding Compliance</span>
            </div>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>48-Hour Talent Shortlisting</span>
            </div>
          </div>

          <button css={styles.primaryBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.HR_SERVICE_JOIN)}>
            Explore Enterprise HR Services
            <ArrowRight size={18} />
          </button>
        </div>

        <div css={styles.rightCol}>
          {CandidateNetworkImage && (
            <img 
              src={CandidateNetworkImage} 
              alt="HR Candidate Screening & Network Illustration" 
              css={styles.hrImgBanner}
              className="uden-card-hover" 
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HRServicesBanner;