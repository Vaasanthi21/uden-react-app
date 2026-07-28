import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Search, Sparkles, ShieldCheck, Clock, ArrowRight, Users, CheckCircle2, Building2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let RecruitmentTeamImage;
try {
  RecruitmentTeamImage = require('../../../../assets/images/recruitment-team.jpg');
} catch (e) {
  try {
    RecruitmentTeamImage = require('../../../../assets/images/candidate-network.jpg');
  } catch (err) {
    RecruitmentTeamImage = process.env.PUBLIC_URL + '/images/recruitment-team.jpg';
  }
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
    gap: 24px;
  `,
  recruitImgBanner: css`
    width: 100%;
    max-height: 260px;
    object-fit: contain;
    border-radius: 24px;
    background: #FFFFFF;
    padding: 14px;
    border: 2px solid #DA532C;
    box-shadow: 0 12px 32px rgba(218, 83, 44, 0.12);
  `,
  widgetCard: css`
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 16px 36px rgba(218, 83, 44, 0.12);
  `,
  cardTitle: css`
    font-size: 20px;
    font-weight: 900;
    color: #1E293B;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  cardSub: css`
    font-size: 13.5px;
    color: #64748B;
    margin-bottom: 24px;
    line-height: 1.5;
  `,
  formGroup: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 24px;
  `,
  field: css`
    display: flex;
    flex-direction: column;
    gap: 6px;

    label {
      font-size: 13px;
      font-weight: 700;
      color: #1E293B;
    }

    select {
      padding: 12px 14px;
      border-radius: 12px;
      border: 1.5px solid #CBD5E1;
      font-size: 14px;
      color: #1E293B;
      background: #FFFFFF;
      outline: none;
      font-weight: 600;

      &:focus {
        border-color: #DA532C;
      }
    }
  `,
  ctaBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
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

const CompaniesBanner = () => {
  const [role, setRole] = useState('fullstack');
  const navigate = useNavigate();

  const handleRequestSubmit = (e) => {
    e.preventDefault();
    navigate(AppRoutes.FIND_TALENT);
  };

  return (
    <div css={styles.heroOuter} className="uden-fade-in">
      <div css={styles.container}>
        {/* Left Column Text & Value Proposition */}
        <div>
          <div css={styles.badgeTag} className="uden-float-anim">
            <Sparkles size={14} />
            ENTERPRISE TALENT ACQUISITION
          </div>
          <h1 css={styles.title}>
            Hire Pre-Vetted, <span>Job-Ready Tech Talent</span> in 48 Hours
          </h1>
          <p css={styles.subtitle}>
            Access top 1% pre-assessed software engineers, cloud architects, and data experts across India & global markets. Zero sourcing fee until you hire.
          </p>

          <div css={styles.bulletGrid}>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>Pre-Assessed Skill Scores</span>
            </div>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>48-Hour Shortlist Guarantee</span>
            </div>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>Zero Sourcing Fee Upfront</span>
            </div>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>90-Day Placement Warranty</span>
            </div>
          </div>
        </div>

        {/* Right Column Talent Request Card with Embedded Recruitment Illustration */}
        <div css={styles.rightCol}>
          <img 
            src={RecruitmentTeamImage} 
            alt="Corporate Recruitment Team & Candidate Profile" 
            css={styles.recruitImgBanner}
            className="uden-card-hover" 
          />

          <div css={styles.widgetCard} className="uden-card-hover">
            <div css={styles.cardTitle}>
              <Building2 size={22} color="#DA532C" />
              Request Candidate Profiles
            </div>
            <p css={styles.cardSub}>Tell us your hiring needs and receive pre-vetted candidate resumes within 48 hours.</p>

            <form onSubmit={handleRequestSubmit}>
              <div css={styles.formGroup}>
                <div css={styles.field}>
                  <label>Primary Tech Role:</label>
                  <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="fullstack">Fullstack / React & Node.js Dev</option>
                    <option value="cloud">Cloud Engineer & DevOps (AWS/Azure)</option>
                    <option value="ai">AI / Data Science & Python Engineer</option>
                    <option value="mobile">Mobile App Developer (Flutter / React Native)</option>
                    <option value="qa">QA Automation & SDET Engineer</option>
                  </select>
                </div>

                <div css={styles.field}>
                  <label>Required Experience Level:</label>
                  <select defaultValue="mid">
                    <option value="fresher">Pre-Assessed Fresher (0-1 Yrs)</option>
                    <option value="mid">Mid-Senior (2-5 Yrs)</option>
                    <option value="lead">Lead Architect (5+ Yrs)</option>
                  </select>
                </div>
              </div>

              <button type="submit" css={styles.ctaBtn} className="uden-pulse-btn">
                Get Pre-Vetted Candidates
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompaniesBanner;