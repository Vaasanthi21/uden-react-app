import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';
import Logo from '../../../components/logo/Logo';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  outer: css`
    min-height: calc(100vh - 120px);
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
    padding: 40px 16px;
  `,
  card: css`
    width: 100%;
    max-width: 980px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    box-shadow: 0 20px 45px -10px rgba(0, 0, 0, 0.08);
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    overflow: hidden;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  `,
  leftCol: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    padding: 48px;
    color: #1E293B;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-right: 1.5px solid rgba(255, 176, 32, 0.35);

    @media (max-width: 860px) {
      padding: 32px 24px;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 24px;
    border: 1px solid rgba(218, 83, 44, 0.25);
    align-self: flex-start;
  `,
  heroHeading: css`
    font-size: 32px;
    font-weight: 900;
    line-height: 1.25;
    margin-bottom: 16px;
    color: #1E293B;

    span {
      color: #DA532C;
    }
  `,
  heroSub: css`
    font-size: 15px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 32px;
    font-weight: 500;
  `,
  featuresList: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 32px;
  `,
  featureItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #334155;
  `,
  leftFooter: css`
    font-size: 12px;
    color: #64748B;
    display: flex;
    align-items: center;
    gap: 6px;
    font-weight: 600;
  `,
  rightCol: css`
    padding: 56px 48px;
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
    font-size: 16px;
    font-weight: 800;
    color: #1E293B;
    letter-spacing: 0.5px;
    margin-bottom: 36px;

    span {
      color: #DA532C;
    }
  `,
  buttonsContainer: css`
    width: 100%;
    max-width: 340px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 32px;
  `,
  googleButton: css`
    width: 100%;
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 28px;
    padding: 13px 20px;
    font-size: 15px;
    font-weight: 700;
    color: #DA532C;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(218, 83, 44, 0.1);

    &:hover {
      background: #DA532C;
      color: #FFFFFF;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(218, 83, 44, 0.3);

      svg path {
        fill: #FFFFFF;
      }
    }
  `,
  linkedInButton: css`
    width: 100%;
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 28px;
    padding: 13px 20px;
    font-size: 15px;
    font-weight: 700;
    color: #DA532C;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(218, 83, 44, 0.1);

    &:hover {
      background: #DA532C;
      color: #FFFFFF;
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(218, 83, 44, 0.3);

      svg path {
        fill: #FFFFFF;
      }
    }
  `,
  footerText: css`
    font-size: 12.5px;
    color: #64748B;
    line-height: 1.5;
    max-width: 340px;

    a {
      color: #DA532C;
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
    <div css={styles.outer}>
      <div css={styles.card}>
        {/* LEFT PART: Soft Warm Yellow Value Proposition Canvas */}
        <div css={styles.leftCol}>
          <div>
            <div css={styles.badgeTag}>
              <Sparkles size={13} />
              UNIFIED EMPLOYMENT NETWORK
            </div>

            <h2 css={styles.heroHeading}>
              Unlock 150+ Corporate Careers & <span>Global Opportunities</span>
            </h2>

            <p css={styles.heroSub}>
              Access AI baseline skill evaluations, accredited partner upskilling programs, and direct recruiter shortlists.
            </p>

            <div css={styles.featuresList}>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#DA532C" />
                <span>Pre-Assessed Skill Profile Verification</span>
              </div>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#DA532C" />
                <span>Direct Recruiter Interview Shortlists</span>
              </div>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#DA532C" />
                <span>1-on-1 Mentorship & Resume Support</span>
              </div>
            </div>
          </div>

          <div css={styles.leftFooter}>
            <ShieldCheck size={14} color="#DA532C" />
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
              onClick={() => alert('Signing in with Google...')}
            >
              <svg width="20" height="20" viewBox="0 0 24 24">
                <path fill="#DA532C" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#DA532C" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#DA532C" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#DA532C" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              Sign In with Google
            </button>

            <button 
              css={styles.linkedInButton}
              onClick={() => alert('Signing in with LinkedIn...')}
            >
              <svg width="20" height="20" fill="#DA532C" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
              </svg>
              Sign In with LinkedIn
            </button>
          </div>

          <div css={styles.footerText}>
            By continuing, you agree to our <Link to={AppRoutes.PRIVACY}>Privacy Policy</Link> and <Link to={AppRoutes.TERMS}>Terms and condition</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLoginPortal;
