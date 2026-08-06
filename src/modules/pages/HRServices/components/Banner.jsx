import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Search, Sparkles, ShieldCheck, Clock, ArrowRight, Users, CheckCircle2, Building2, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

let CandidateNetworkImage;
try {
  CandidateNetworkImage = require('assets/images/candidate-network.jpg');
} catch (e) {
  CandidateNetworkImage = process.env.PUBLIC_URL + '/images/candidate-network.jpg';
}

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%);
    padding: 70px 20px 50px 20px;
    border-bottom: 2px solid rgba(75, 99, 140, 0.2);
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
    background: rgba(75, 99, 140, 0.1);
    color: #4B638C;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 18px;
    border: 1px solid rgba(75, 99, 140, 0.25);
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
      color: #F55825;
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
    background: rgba(75, 99, 140, 0.15);
    color: #4B638C;
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
  hrImgBanner: css`
    width: 100%;
    max-height: 270px;
    object-fit: contain;
    border-radius: 24px;
    background: #FFFFFF;
    padding: 12px;
    border: 2px solid #4B638C;
    box-shadow: 0 12px 32px rgba(75, 99, 140, 0.12);
  `,
  widgetCard: css`
    background: #FFFFFF;
    border: 2px solid #4B638C;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 16px 36px rgba(75, 99, 140, 0.12);
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
        border-color: #4B638C;
      }
    }
  `,
  ctaBtn: css`
    width: 100%;
    background: #F55825;
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
    box-shadow: 0 6px 18px rgba(245, 88, 37, 0.25);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(245, 88, 37, 0.35);
    }
  `
};

const HRServicesBanner = () => {
  const [serviceType, setServiceType] = useState('outsourcing');
  const navigate = useNavigate();

  const handleConsultationSubmit = (e) => {
    e.preventDefault();
    navigate(AppRoutes.FIND_TALENT);
  };

  return (
    <div css={styles.heroOuter} className="uden-fade-in">
      <div css={styles.container}>
        {/* Left Column Text & Value Proposition */}
        <div>
          <div css={styles.badgeTag} className="uden-float-anim">
            <Sparkles size={14} color="#F7BC08" />
            END-TO-END HR & RECRUITMENT SOLUTIONS
          </div>
          <h1 css={styles.title}>
            Streamline Hiring & <span>HR Operations</span> for Global Enterprises
          </h1>
          <p css={styles.subtitle}>
            From candidate sourcing and background verification to payroll management and talent retention, UDEN delivers customized HR solutions.
          </p>

          <div css={styles.bulletGrid}>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>End-to-End Recruitment Outsourcing</span>
            </div>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>Background & Skill Verification</span>
            </div>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>Payroll & Compliance Support</span>
            </div>
            <div css={styles.bulletItem}>
              <div css={styles.iconBox}><CheckCircle2 size={15} /></div>
              <span>90-Day Candidate Warranty</span>
            </div>
          </div>
        </div>

        {/* Right Column Consultation Request Card */}
        <div css={styles.rightCol}>
          <img 
            src={CandidateNetworkImage} 
            alt="Candidate Network & HR Screening Visual" 
            css={styles.hrImgBanner}
            className="uden-card-hover" 
          />

          <div css={styles.widgetCard} className="uden-card-hover">
            <div css={styles.cardTitle}>
              <UserCheck size={22} color="#4B638C" />
              Request HR Consultation
            </div>
            <p css={styles.cardSub}>Speak with our HR specialists to tailor recruitment & payroll solutions for your organization.</p>

            <form onSubmit={handleConsultationSubmit}>
              <div css={styles.formGroup}>
                <div css={styles.field}>
                  <label htmlFor="hr-banner-service">Primary HR Need:</label>
                  <select id="hr-banner-service" aria-label="Primary HR Need" value={serviceType} onChange={(e) => setServiceType(e.target.value)}>
                    <option value="outsourcing">Recruitment Process Outsourcing (RPO)</option>
                    <option value="verification">Background & Skill Verification</option>
                    <option value="payroll">Payroll & Statutory Compliance</option>
                    <option value="upskilling">Custom Corporate Cohort Training</option>
                  </select>
                </div>

                <div css={styles.field}>
                  <label htmlFor="hr-banner-volume">Team Hiring Volume:</label>
                  <select id="hr-banner-volume" aria-label="Team Hiring Volume" defaultValue="10-50">
                    <option value="1-10">1 - 10 Hires / Month</option>
                    <option value="10-50">10 - 50 Hires / Month</option>
                    <option value="50+">50+ Enterprise Cohorts</option>
                  </select>
                </div>
              </div>

              <button type="submit" css={styles.ctaBtn} className="uden-pulse-btn">
                Schedule HR Consultation
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRServicesBanner;