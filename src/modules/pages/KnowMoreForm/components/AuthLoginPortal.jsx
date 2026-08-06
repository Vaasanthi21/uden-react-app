import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Sparkles, CheckCircle2, User, Building2 } from 'lucide-react';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

let CandidateImg;
let EmployerImg;
try {
  CandidateImg = require('assets/images/checklist-completed.jpg');
  EmployerImg = require('assets/images/recruitment-team.jpg');
} catch (e) {
  CandidateImg = process.env.PUBLIC_URL + '/images/checklist-completed.jpg';
  EmployerImg = process.env.PUBLIC_URL + '/images/recruitment-team.jpg';
}

const styles = {
  outer: css`
    min-height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFFFF;
    padding: 50px 20px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  card: css`
    width: 100%;
    max-width: 1040px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 28px;
    box-shadow: 0 20px 50px -10px rgba(75, 99, 140, 0.12);
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    overflow: hidden;

    @media (max-width: 880px) {
      grid-template-columns: 1fr;
    }
  `,
  leftCol: css`
    background: #FFFDF7;
    padding: 48px;
    color: #1E293B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1.5px solid #FEF5D8;

    @media (max-width: 880px) {
      padding: 36px 24px;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FEF5D8;
    color: #4B638C;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 20px;
    border: 1px solid #F7BC08;
    align-self: flex-start;
  `,
  heroHeading: css`
    font-size: 32px;
    font-weight: 900;
    line-height: 1.22;
    margin-bottom: 12px;
    color: #1E293B;
    letter-spacing: -0.5px;

    span {
      color: #F55825;
    }
  `,
  heroSub: css`
    font-size: 14.5px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 24px;
    font-weight: 600;
  `,
  illustrationImg: css`
    width: 100%;
    max-height: 230px;
    object-fit: contain;
    border-radius: 20px;
    margin-bottom: 24px;
    transition: all 0.3s ease;
  `,
  featuresList: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  `,
  featureItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13.5px;
    font-weight: 700;
    color: #1E293B;
  `,
  leftFooter: css`
    font-size: 12px;
    color: #64748B;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 700;
    border-top: 1px solid #FEF5D8;
    padding-top: 16px;
  `,
  rightCol: css`
    padding: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    @media (max-width: 880px) {
      padding: 36px 24px;
    }
  `,
  logoContainer: css`
    margin-bottom: 8px;
  `,
  subtitleText: css`
    font-size: 15px;
    font-weight: 800;
    color: #1E293B;
    letter-spacing: 0.5px;
    margin-bottom: 28px;

    span {
      color: #F55825;
    }
  `,
  tabContainer: css`
    display: flex;
    background: #FFFDF0;
    padding: 5px;
    border-radius: 30px;
    width: 100%;
    max-width: 340px;
    margin-bottom: 28px;
    border: 1px solid #F7BC08;
  `,
  tabBtn: (active) => css`
    flex: 1;
    padding: 11px 16px;
    border-radius: 24px;
    font-size: 13.5px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    background: ${active ? '#F55825' : 'transparent'};
    color: ${active ? '#FFFFFF' : '#475569'};
    box-shadow: ${active ? '0 4px 14px rgba(245, 88, 37, 0.3)' : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
  `,
  buttonsWrapper: css`
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 24px;
  `,
  btnGoogle: css`
    width: 100%;
    background: #FFFFFF;
    border: 1.5px solid #F55825;
    border-radius: 30px;
    padding: 13px 20px;
    font-size: 14.5px;
    font-weight: 800;
    color: #F55825;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;

    &:hover {
      background: #FFFDF7;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(245, 88, 37, 0.15);
    }
  `,
  btnLinkedIn: css`
    width: 100%;
    background: #FFFFFF;
    border: 1.5px solid #F55825;
    border-radius: 30px;
    padding: 13px 20px;
    font-size: 14.5px;
    font-weight: 800;
    color: #F55825;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;

    &:hover {
      background: #FFFDF7;
      transform: translateY(-2px);
      box-shadow: 0 6px 18px rgba(245, 88, 37, 0.15);
    }
  `,
  footerText: css`
    font-size: 12px;
    color: #64748B;
    line-height: 1.5;
    max-width: 340px;

    a {
      color: #F55825;
      font-weight: 700;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  `
};

export default function AuthLoginPortal() {
  const [role, setRole] = useState('jobseeker');

  const content = role === 'jobseeker' ? {
    badge: 'FOR JOBSEEKERS & SCHOLARS',
    title: <>Build Your Profile &amp; <span>Access Top Employers</span></>,
    subtitle: 'Unlock AI skill assessments, accredited upskilling tracks, and direct recruiter matching.',
    image: CandidateImg,
    features: [
      'Free Profile Setup & AI Skill Assessment',
      'Direct Access to 150+ Hiring Partners',
      '90-Day Placement Retention Warranty'
    ],
    footer: '100% Free Registration for Candidates'
  } : {
    badge: 'FOR RECRUITERS & ENTERPRISES',
    title: <>Hire Pre-Vetted <span>AI Video Candidates</span></>,
    subtitle: 'Access pre-assessed talent with verified skill scores and automated campus placement drives.',
    image: EmployerImg,
    features: [
      'Access Pre-Vetted Video & Skill Assessment Profiles',
      'Zero Sourcing Friction & Verified Skill Scores',
      '48-Hour Shortlist & Direct Interview Scheduling'
    ],
    footer: 'Dedicated Corporate Account Manager Support'
  };

  return (
    <div css={styles.outer} className="uden-fade-in">
      <div css={styles.card} className="uden-card-hover">
        {/* Left Column: Dynamic Persona Feature Card & Illustration */}
        <div css={styles.leftCol}>
          <div>
            <div css={styles.badgeTag} className="uden-float-anim">
              <Sparkles size={13} color="#F7BC08" />
              {content.badge}
            </div>

            <h2 css={styles.heroHeading}>
              {content.title}
            </h2>

            <p css={styles.heroSub}>
              {content.subtitle}
            </p>

            {content.image && (
              <img 
                src={content.image} 
                alt="Feature Illustration" 
                css={styles.illustrationImg}
              />
            )}

            <div css={styles.featuresList}>
              {content.features.map((feat, idx) => (
                <div key={idx} css={styles.featureItem}>
                  <CheckCircle2 size={16} color="#F55825" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div css={styles.leftFooter}>
            <ShieldCheck size={14} color="#4B638C" />
            {content.footer}
          </div>
        </div>

        {/* Right Column: UDEN Brand Header, Role Tabs, & One-Click OAuth Buttons */}
        <div css={styles.rightCol}>
          <div css={styles.logoContainer}>
            <Logo style={{ height: '48px' }} />
          </div>

          <div css={styles.subtitleText}>
            Assess <span>•</span> Upskill <span>•</span> Recruit
          </div>

          {/* One-Click Login Buttons */}
          <div css={styles.buttonsWrapper}>
            <button 
              css={styles.btnGoogle}
              onClick={() => alert(`Signing in with Google as ${role === 'employer' ? 'Employer' : 'Jobseeker'}...`)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Sign In with Google
            </button>

            <button 
              css={styles.btnLinkedIn}
              onClick={() => alert(`Signing in with LinkedIn as ${role === 'employer' ? 'Employer' : 'Jobseeker'}...`)}
            >
              <svg width="18" height="18" fill="#0A66C2" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
              </svg>
              Sign In with LinkedIn
            </button>
          </div>

          <div css={styles.footerText} style={{ marginTop: '14px' }}>
            Don't have an account? <Link to="/signup" style={{ color: '#F55825', fontWeight: 800 }}>Create your account →</Link>
          </div>

          <div css={styles.footerText}>
            By continuing, you agree to our <Link to={AppRoutes.PRIVACY}>Privacy Policy</Link> and <Link to={AppRoutes.TERMS}>Terms and condition</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
