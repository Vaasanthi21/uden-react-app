import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Sparkles, CheckCircle2, User, Building2, ArrowRight } from 'lucide-react';
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
    padding: 48px 40px;
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
    margin-bottom: 24px;
    text-align: center;

    span {
      color: #DA532C;
    }
  `,
  accountTypeTabs: css`
    display: flex;
    background: #F1F5F9;
    padding: 4px;
    border-radius: 12px;
    margin-bottom: 24px;
  `,
  tabBtn: (active) => css`
    flex: 1;
    padding: 10px;
    border-radius: 8px;
    font-size: 13px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    background: ${active ? '#DA532C' : 'transparent'};
    color: ${active ? '#FFFFFF' : '#475569'};
    box-shadow: ${active ? '0 2px 8px rgba(218,83,44,0.3)' : 'none'};
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s ease;
  `,
  formField: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 14px;

    label {
      font-size: 12.5px;
      font-weight: 700;
      color: #334155;
    }

    input, select {
      padding: 11px 14px;
      border-radius: 10px;
      border: 1.5px solid #CBD5E1;
      font-size: 13.5px;
      color: #1E293B;
      outline: none;
      font-weight: 600;
      background: #FFFFFF;

      &:focus {
        border-color: #DA532C;
      }
    }
  `,
  socialButtonsRow: css`
    display: flex;
    gap: 12px;
    margin-bottom: 18px;
  `,
  socialBtn: css`
    flex: 1;
    background: #FFFFFF;
    border: 1.5px solid #DA532C;
    border-radius: 20px;
    padding: 10px 14px;
    font-size: 13px;
    font-weight: 700;
    color: #DA532C;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;

    &:hover {
      background: #DA532C;
      color: #FFFFFF;
      transform: translateY(-2px);
    }
  `,
  dividerRow: css`
    display: flex;
    align-items: center;
    margin: 16px 0;
    color: #94A3B8;
    font-size: 11.5px;
    font-weight: 700;

    &::before, &::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #E2E8F0;
    }

    span {
      padding: 0 10px;
    }
  `,
  submitBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 13px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 14.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;
    transition: background 0.2s ease;

    &:hover {
      background: #B83D1B;
    }
  `,
  footerText: css`
    font-size: 12px;
    color: #64748B;
    text-align: center;
    margin-top: 18px;
    line-height: 1.5;

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

const AuthSignupPortal = () => {
  const [accountType, setAccountType] = useState('candidate'); // 'candidate' or 'employer'
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert(`Account created successfully as ${accountType}! Welcome to UDEN.tech.`);
  };

  return (
    <div css={styles.outer}>
      <div css={styles.card}>
        {/* Left Column Brand Value Proposition */}
        <div css={styles.leftCol}>
          <div>
            <div css={styles.badgeTag}>
              <Sparkles size={13} />
              JOIN THE UDEN NETWORK
            </div>

            <h2 css={styles.heroHeading}>
              Build Your Profile & <span>Access Top Employers</span>
            </h2>

            <p css={styles.heroSub}>
              Create your account to unlock AI skill assessments, accredited upskilling tracks, and direct recruiter matching.
            </p>

            <div css={styles.featuresList}>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#DA532C" />
                <span>Free Profile Setup & Skill Assessment</span>
              </div>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#DA532C" />
                <span>Direct Access to 150+ Hiring Partners</span>
              </div>
              <div css={styles.featureItem}>
                <CheckCircle2 size={16} color="#DA532C" />
                <span>90-Day Placement Retention Warranty</span>
              </div>
            </div>
          </div>

          <div css={styles.leftFooter}>
            <ShieldCheck size={14} color="#DA532C" />
            100% Free Registration for Candidates
          </div>
        </div>

        {/* Right Column Account Signup Form */}
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
              <User size={15} />
              Jobseeker
            </button>
            <button 
              css={styles.tabBtn(accountType === 'employer')}
              onClick={() => setAccountType('employer')}
            >
              <Building2 size={15} />
              Employer
            </button>
          </div>

          {/* Social Sign Up Options */}
          <div css={styles.socialButtonsRow}>
            <button 
              css={styles.socialBtn}
              onClick={() => alert('Signing up with Google...')}
            >
              Sign Up with Google
            </button>
            <button 
              css={styles.socialBtn}
              onClick={() => alert('Signing up with LinkedIn...')}
            >
              Sign Up with LinkedIn
            </button>
          </div>

          <div css={styles.dividerRow}>
            <span>OR SIGN UP WITH EMAIL</span>
          </div>

          {/* Email Registration Form */}
          <form onSubmit={handleSignupSubmit}>
            <div css={styles.formField}>
              <label>{accountType === 'employer' ? 'Company Name / Recruiter Name:' : 'Full Name:'}</label>
              <input 
                type="text"
                placeholder={accountType === 'employer' ? 'e.g. Acme Tech Pvt Ltd' : 'e.g. Alex Sharma'}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div css={styles.formField}>
              <label>{accountType === 'employer' ? 'Official Work Email:' : 'Email Address:'}</label>
              <input 
                type="email"
                placeholder="name@domain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div css={styles.formField}>
              <label>Create Password:</label>
              <input 
                type="password"
                placeholder="Minimum 8 characters"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            <button type="submit" css={styles.submitBtn}>
              {accountType === 'employer' ? 'Create Employer Account' : 'Create Candidate Account'}
              <ArrowRight size={16} />
            </button>
          </form>

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
