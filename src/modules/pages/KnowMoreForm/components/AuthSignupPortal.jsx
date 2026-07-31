import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Sparkles, CheckCircle2, User, Building2, ArrowRight } from 'lucide-react';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let ChecklistCompletedImage;
let RecruitmentTeamImage;
try {
  ChecklistCompletedImage = require('../../../../assets/images/checklist-completed.jpg');
  RecruitmentTeamImage = require('../../../../assets/images/recruitment-team.jpg');
} catch (e) {
  ChecklistCompletedImage = process.env.PUBLIC_URL + '/images/checklist-completed.jpg';
  RecruitmentTeamImage = process.env.PUBLIC_URL + '/images/recruitment-team.jpg';
}

const styles = {
  outer: css`
    min-height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
    padding: 40px 16px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  card: css`
    width: 100%;
    max-width: 1020px;
    background: #FFFFFF;
    border: 2px solid #4B638C;
    border-radius: 24px;
    box-shadow: 0 20px 45px -10px rgba(75, 99, 140, 0.15);
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    overflow: hidden;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  `,
  leftCol: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%);
    padding: 44px;
    color: #1E293B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1.5px solid rgba(247, 188, 8, 0.4);

    @media (max-width: 860px) {
      padding: 32px 24px;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(75, 99, 140, 0.1);
    color: #4B638C;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 20px;
    border: 1px solid rgba(75, 99, 140, 0.25);
    align-self: flex-start;
  `,
  heroHeading: css`
    font-size: 30px;
    font-weight: 900;
    line-height: 1.22;
    margin-bottom: 14px;
    color: #1E293B;
    letter-spacing: -0.5px;

    span {
      color: #F55825;
    }
  `,
  heroSub: css`
    font-size: 14px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 24px;
    font-weight: 500;
  `,
  checklistImg: css`
    width: 100%;
    max-height: 200px;
    object-fit: contain;
    border-radius: 16px;
    background: #FFFFFF;
    padding: 10px;
    border: 1.5px solid #FFFDF0;
    margin-bottom: 24px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
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
  `,
  rightCol: css`
    padding: 44px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media (max-width: 860px) {
      padding: 36px 24px;
    }
  `,
  logoContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 8px;
    text-align: center;
  `,
  subtitleText: css`
    font-size: 15px;
    font-weight: 800;
    color: #1E293B;
    letter-spacing: 0.5px;
    margin-bottom: 28px;
    text-align: center;

    span {
      color: #F55825;
    }
  `,
  accountTypeTabs: css`
    display: flex;
    background: #FFFDF0;
    padding: 5px;
    border-radius: 14px;
    margin-bottom: 32px;
    border: 1px solid rgba(247, 188, 8, 0.5);
  `,
  tabBtn: (active) => css`
    flex: 1;
    padding: 12px;
    border-radius: 10px;
    font-size: 13.5px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    background: ${active ? '#4B638C' : 'transparent'};
    color: ${active ? '#FFFFFF' : '#475569'};
    box-shadow: ${active ? '0 4px 12px rgba(75,99,140,0.3)' : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
  `,
  socialButtonsCol: css`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 24px;
  `,
  socialBtnGoogle: css`
    width: 100%;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 30px;
    padding: 14px 20px;
    font-size: 14px;
    font-weight: 800;
    color: #1E293B;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);

    &:hover {
      border-color: #4B638C;
      background: #F8FAFC;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
    }
  `,
  socialBtnLinkedIn: css`
    width: 100%;
    background: #0A66C2;
    border: none;
    border-radius: 30px;
    padding: 14px 20px;
    font-size: 14px;
    font-weight: 800;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 4px 14px rgba(10, 102, 194, 0.28);

    &:hover {
      background: #004182;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(10, 102, 194, 0.38);
    }
  `,
  footerText: css`
    font-size: 12px;
    color: #64748B;
    text-align: center;
    margin-top: 24px;
    line-height: 1.5;

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

const AuthSignupPortal = () => {
  const [accountType, setAccountType] = useState('candidate');

  const leftContent = accountType === 'candidate' ? {
    badge: 'JOIN THE UDEN NETWORK',
    title: <>Build Your Profile & <span>Access Top Employers</span></>,
    subtitle: 'Create your account to unlock AI skill assessments, accredited upskilling tracks, and direct recruiter matching.',
    image: ChecklistCompletedImage,
    features: [
      'Free Profile Setup & Skill Assessment',
      'Direct Access to 150+ Hiring Partners',
      '90-Day Placement Retention Warranty'
    ],
    footer: '100% Free Registration for Candidates'
  } : {
    badge: 'HIRE PRE-VETTED TALENT',
    title: <>Access Verified <span>AI Video Candidates</span></>,
    subtitle: 'Hire job-ready candidates with verified skill scores, AI video interview previews, and automated campus placement drives.',
    image: RecruitmentTeamImage,
    features: [
      'Access Pre-Vetted Video & Skill Assessment Profiles',
      'Zero Sourcing Friction & Verified Skill Scores',
      'Fast-Track Campus Placement Drives & Bulk Shortlisting'
    ],
    footer: '48-Hour Shortlist & Direct Interview Scheduling'
  };

  return (
    <div css={styles.outer} className="uden-fade-in">
      <div css={styles.card} className="uden-card-hover">
        {/* Dynamic Left Column Brand Value Proposition + Persona Illustration */}
        <div css={styles.leftCol}>
          <div>
            <div css={styles.badgeTag} className="uden-float-anim">
              <Sparkles size={13} color="#F7BC08" />
              {leftContent.badge}
            </div>

            <h2 css={styles.heroHeading}>
              {leftContent.title}
            </h2>

            <p css={styles.heroSub}>
              {leftContent.subtitle}
            </p>

            {leftContent.image && (
              <img 
                src={leftContent.image} 
                alt="Persona Illustration" 
                css={styles.checklistImg}
              />
            )}

            <div css={styles.featuresList}>
              {leftContent.features.map((feat, idx) => (
                <div key={idx} css={styles.featureItem}>
                  <CheckCircle2 size={16} color="#4B638C" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          <div css={styles.leftFooter}>
            <ShieldCheck size={14} color="#4B638C" />
            {leftContent.footer}
          </div>
        </div>

        {/* Right Column One-Click OAuth Login/Signup */}
        <div css={styles.rightCol}>
          <div css={styles.logoContainer}>
            <Logo style={{ height: '42px' }} />
          </div>

          <div css={styles.subtitleText}>
            Assess <span>•</span> Upskill <span>•</span> Recruit
          </div>

          {/* Persona Switcher Tabs */}
          <div css={styles.accountTypeTabs}>
            <button 
              css={styles.tabBtn(accountType === 'candidate')}
              onClick={() => setAccountType('candidate')}
            >
              <User size={16} />
              Jobseeker
            </button>
            <button 
              css={styles.tabBtn(accountType === 'employer')}
              onClick={() => setAccountType('employer')}
            >
              <Building2 size={16} />
              Employer
            </button>
          </div>

          {/* One-Click Social Sign Up Options (No Email Form) */}
          <div css={styles.socialButtonsCol}>
            <button 
              css={styles.socialBtnGoogle}
              onClick={() => alert(`Redirecting to Google Sign-In for ${accountType === 'employer' ? 'Employer' : 'Candidate'} account...`)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Sign Up with Google
            </button>
            <button 
              css={styles.socialBtnLinkedIn}
              onClick={() => alert(`Redirecting to LinkedIn Sign-In for ${accountType === 'employer' ? 'Employer' : 'Candidate'} account...`)}
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z"/>
              </svg>
              Sign Up with LinkedIn
            </button>
          </div>

          {/* Terms Disclaimer */}
          <div css={styles.footerText}>
            By signing up, you agree to our <Link to={AppRoutes.PRIVACY}>Privacy Policy</Link> and <Link to={AppRoutes.TERMS}>Terms and condition</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthSignupPortal;
