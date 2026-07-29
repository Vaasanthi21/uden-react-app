import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let ChecklistCompletedImage;
try {
  ChecklistCompletedImage = require('../../../../assets/images/checklist-completed.jpg');
} catch (e) {
  ChecklistCompletedImage = process.env.PUBLIC_URL + '/images/checklist-completed.jpg';
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
    font-size: 32px;
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
    font-size: 14.5px;
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
    gap: 10px;
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
    padding: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;

    @media (max-width: 860px) {
      padding: 40px 24px;
    }
  `,
  logoContainer: css`
    margin-bottom: 8px;
  `,
  subtitleText: css`
    font-size: 15.5px;
    font-weight: 800;
    color: #1E293B;
    letter-spacing: 0.5px;
    margin-bottom: 32px;

    span {
      color: #F55825;
    }
  `,
  buttonsContainer: css`
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 28px;
  `,
  googleButton: css`
    width: 100%;
    background: #F55825;
    border: none;
    border-radius: 28px;
    padding: 14px 20px;
    font-size: 15px;
    font-weight: 800;
    color: #FFFFFF;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 6px 18px rgba(245, 88, 37, 0.25);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(245, 88, 37, 0.35);
    }
  `,
  linkedInButton: css`
    width: 100%;
    background: #FFFFFF;
    border: 2px solid #4B638C;
    border-radius: 28px;
    padding: 13px 20px;
    font-size: 15px;
    font-weight: 800;
    color: #4B638C;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;

    &:hover {
      background: #F8FAFC;
      transform: translateY(-2px);
    }
  `,
  footerText: css`
    font-size: 12.5px;
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

const AuthLoginPortal = () => {
  return (
    <div css={styles.outer} className="uden-fade-in">
      <div css={styles.card} className="uden-card-hover">
        {/* LEFT PART: Value Proposition Canvas + Checklist Illustration */}
        <div css={styles.leftCol}>
          <div>
            <div css={styles.badgeTag} className="uden-float-anim">
              <Sparkles size={13} color="#F7BC08" />
              UNIFIED EMPLOYMENT NETWORK
            </div>

            <h2 css={styles.heroHeading}>
              Unlock 150+ Corporate Careers & <span>Global Opportunities</span>
            </h2>

            <p css={styles.heroSub}>
              Access AI baseline skill evaluations, accredited partner upskilling programs, and direct recruiter shortlists.
            </p>

            {ChecklistCompletedImage && (
              <img 
                src={ChecklistCompletedImage} 
                alt="Candidate Profile Completed Verification Checklist" 
                css={styles.checklistImg}
              />
            )}

            <div css={styles.featuresList}>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#4B638C" />
                <span>Pre-Assessed Skill Profile Verification</span>
              </div>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#4B638C" />
                <span>Direct Recruiter Interview Shortlists</span>
              </div>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#4B638C" />
                <span>1-on-1 Mentorship & Resume Support</span>
              </div>
            </div>
          </div>

          <div css={styles.leftFooter}>
            <ShieldCheck size={14} color="#4B638C" />
            100% Encrypted & Secure Authentication
          </div>
        </div>

        {/* RIGHT PART: Clean UDEN Logo, Buttons & Legal Disclaimer */}
        <div css={styles.rightCol}>
          <div css={styles.logoContainer}>
            <Logo style={{ height: '48px' }} />
          </div>

          <div css={styles.subtitleText}>
            Assess <span>•</span> Upskill <span>•</span> Recruit
          </div>

          <div css={styles.buttonsContainer}>
            <button 
              css={styles.googleButton}
              className="uden-pulse-btn"
              onClick={() => alert('Signing in with Google...')}
            >
              Sign In with Google
            </button>

            <button 
              css={styles.linkedInButton}
              onClick={() => alert('Signing in with LinkedIn...')}
            >
              Sign In with LinkedIn
            </button>
          </div>

          <div css={styles.footerText}>
            By continuing, you agree to our <Link to={AppRoutes.PRIVACY}>Privacy Policy</Link> and <Link to={AppRoutes.TERMS}>Terms and conditions</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLoginPortal;
