import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { CheckCircle2, ShieldCheck, User, Building2, ArrowRight, MessageSquare, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: css`
    max-width: 720px;
    margin: 40px auto;
    padding: 0 16px;
    position: relative;
  `,
  cardWrapper: css`
    background: #FFFDF7;
    border: 2px solid #FEF5D8;
    border-radius: 28px;
    padding: 36px 32px;
    box-shadow: 0 20px 48px rgba(75, 99, 140, 0.08);

    @media (max-width: 640px) {
      padding: 24px 18px;
    }
  `,
  checkList: css`
    margin-bottom: 32px;
    display: flex;
    flex-direction: column;
    gap: 14px;
  `,
  checkItem: css`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 16px;
    font-weight: 700;
    color: #1E293B;

    svg {
      flex-shrink: 0;
    }

    @media (max-width: 640px) {
      font-size: 14.5px;
    }
  `,
  guaranteeBadge: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 15px;
    font-weight: 700;
    color: #4B638C;
    margin-top: 6px;
  `,
  logoSection: css`
    text-align: center;
    margin-bottom: 28px;
  `,
  logoTitle: css`
    font-family: 'Outfit', 'Inter', sans-serif;
    font-size: 42px;
    font-weight: 900;
    color: #F55825;
    letter-spacing: -1px;
    margin: 0 0 4px 0;
  `,
  taglineText: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    letter-spacing: 0.5px;

    span {
      color: #F55825;
    }
  `,
  companySubText: css`
    font-size: 13px;
    font-weight: 600;
    color: #64748B;
    margin-top: 4px;
    letter-spacing: 0.2px;
  `,
  toggleContainer: css`
    background: #FFF8EA;
    border: 2px solid #F7BC08;
    border-radius: 18px;
    padding: 6px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6px;
    margin-bottom: 28px;
  `,
  toggleBtn: (active) => css`
    padding: 14px 20px;
    border-radius: 14px;
    border: none;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;
    background: ${active ? '#4B638C' : 'transparent'};
    color: ${active ? '#FFFFFF' : '#475569'};
    box-shadow: ${active ? '0 6px 16px rgba(75, 99, 140, 0.3)' : 'none'};

    &:hover {
      color: ${active ? '#FFFFFF' : '#4B638C'};
    }
  `,
  oauthGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 14px;
    margin-bottom: 28px;

    @media (max-width: 520px) {
      grid-template-columns: 1fr;
    }
  `,
  oauthBtn: css`
    background: #FFFFFF;
    border: 2px solid #4B638C;
    border-radius: 24px;
    padding: 14px 20px;
    font-size: 15px;
    font-weight: 700;
    color: #1E293B;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.2s ease;

    &:hover {
      background: #F8FAFC;
      border-color: #F55825;
      color: #F55825;
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(245, 88, 37, 0.15);
    }
  `,
  divider: css`
    display: flex;
    align-items: center;
    text-align: center;
    margin: 28px 0;

    &::before, &::after {
      content: '';
      flex: 1;
      border-bottom: 1px solid #CBD5E1;
    }

    span {
      padding: 0 16px;
      font-size: 12.5px;
      font-weight: 800;
      color: #64748B;
      letter-spacing: 1px;
      text-transform: uppercase;
    }
  `,
  formGroup: css`
    margin-bottom: 20px;

    label {
      display: block;
      font-size: 14px;
      font-weight: 700;
      color: #1E293B;
      margin-bottom: 8px;
    }

    input, select, textarea {
      width: 100%;
      padding: 14px 18px;
      border: 1.5px solid #CBD5E1;
      border-radius: 14px;
      font-size: 15px;
      font-weight: 600;
      color: #0F172A;
      background: #FFFFFF;
      outline: none;
      transition: all 0.2s ease;

      &:focus {
        border-color: #F55825;
        box-shadow: 0 4px 14px rgba(245, 88, 37, 0.15);
      }

      &::placeholder {
        color: #94A3B8;
        font-weight: 500;
      }
    }
  `,
  submitBtn: css`
    width: 100%;
    background: linear-gradient(135deg, #F55825 0%, #D94616 100%);
    color: #FFFFFF;
    border: none;
    padding: 16px 28px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 8px 24px rgba(245, 88, 37, 0.3);
    margin-top: 24px;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(245, 88, 37, 0.4);
    }
  `,
  floatingChatBtn: css`
    position: fixed;
    bottom: 28px;
    right: 28px;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #F55825;
    color: #FFFFFF;
    border: none;
    box-shadow: 0 10px 25px rgba(245, 88, 37, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 999;
    transition: all 0.25s ease;

    &:hover {
      transform: scale(1.1);
      background: #D94616;
    }
  `
};

const GoogleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
  </svg>
);

const HeroAuthSegmented = () => {
  const [roleMode, setRoleMode] = useState('jobseeker');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    targetRole: '',
    companyName: '',
    hiringNeeds: ''
  });
  const navigate = useNavigate();

  const handleModeChange = (mode) => {
    setRoleMode(mode);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (roleMode === 'jobseeker') {
      alert(`Registration Successful! Welcome to UDEN Candidate Portal, ${formData.name || 'Jobseeker'}. Redirecting to Career Acceleration...`);
      navigate('/job-search');
    } else {
      alert(`Employer Registration Received! Thank you, ${formData.companyName || 'Recruiter'}. Our Talent Acquisition Specialist will contact you within 2 hours.`);
      navigate('/job-management');
    }
  };

  return (
    <div css={styles.container}>
      <div css={styles.cardWrapper}>
        {/* Dynamic Header Feature Checkmarks */}
        <div css={styles.checkList}>
          {roleMode === 'jobseeker' ? (
            <>
              <div css={styles.checkItem}>
                <CheckCircle2 size={20} color="#34D399" />
                <span>Free Profile Setup &amp; Skill Assessment</span>
              </div>
              <div css={styles.checkItem}>
                <CheckCircle2 size={20} color="#34D399" />
                <span>Direct Access to 150+ Hiring Partners</span>
              </div>
              <div css={styles.checkItem}>
                <CheckCircle2 size={20} color="#34D399" />
                <span>90-Day Placement Retention Warranty</span>
              </div>
              <div css={styles.guaranteeBadge}>
                <ShieldCheck size={20} color="#4B638C" />
                <span>100% Free Registration for Candidates</span>
              </div>
            </>
          ) : (
            <>
              <div css={styles.checkItem}>
                <CheckCircle2 size={20} color="#34D399" />
                <span>Pre-Vetted AI Skill Verified Candidates</span>
              </div>
              <div css={styles.checkItem}>
                <CheckCircle2 size={20} color="#34D399" />
                <span>Direct Access to Top Tech &amp; Non-Tech Talent</span>
              </div>
              <div css={styles.checkItem}>
                <CheckCircle2 size={20} color="#34D399" />
                <span>90-Day Candidate Replacement Guarantee</span>
              </div>
              <div css={styles.guaranteeBadge}>
                <ShieldCheck size={20} color="#4B638C" />
                <span>Zero Upfront Sourcing Fees &amp; 10x Faster Hiring</span>
              </div>
            </>
          )}
        </div>

        {/* UDEN Logo & Tagline */}
        <div css={styles.logoSection}>
          <h2 css={styles.logoTitle}>UDEN</h2>
          <div css={styles.taglineText}>
            Assess <span>•</span> Upskill <span>•</span> Recruit
          </div>
          <div css={styles.companySubText}>
            Unified Development and Employment Network
          </div>
        </div>

        {/* Segmented Toggle Pill (Jobseeker vs Employer) */}
        <div css={styles.toggleContainer}>
          <button 
            type="button" 
            css={styles.toggleBtn(roleMode === 'jobseeker')}
            onClick={() => handleModeChange('jobseeker')}
          >
            <User size={18} />
            Jobseeker
          </button>
          <button 
            type="button" 
            css={styles.toggleBtn(roleMode === 'employer')}
            onClick={() => handleModeChange('employer')}
          >
            <Building2 size={18} />
            Employer
          </button>
        </div>

        {/* Social OAuth Buttons */}
        <div css={styles.oauthGrid}>
          <button type="button" css={styles.oauthBtn} onClick={() => handleModeChange(roleMode)}>
            <GoogleIcon />
            Sign Up with Google
          </button>
          <button type="button" css={styles.oauthBtn} onClick={() => handleModeChange(roleMode)}>
            <LinkedInIcon />
            Sign Up with LinkedIn
          </button>
        </div>

        {/* Form Divider */}
        <div css={styles.divider}>
          <span>OR SIGN UP WITH EMAIL</span>
        </div>

        {/* Dynamic Email Sign Up Form */}
        <form onSubmit={handleSubmit}>
          {roleMode === 'jobseeker' ? (
            <>
              <div css={styles.formGroup}>
                <label>Full Name:</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Enter your full name" 
                  required 
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>

              <div css={styles.formGroup}>
                <label>Email Address:</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="name@company.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div css={styles.formGroup}>
                <label>Phone Number / WhatsApp:</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+91 98765 43210" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div css={styles.formGroup}>
                <label>Target Role / Primary Skill:</label>
                <input 
                  type="text" 
                  name="targetRole" 
                  placeholder="e.g. React Developer, Data Analyst, Product Manager" 
                  value={formData.targetRole}
                  onChange={handleChange}
                />
              </div>
            </>
          ) : (
            <>
              <div css={styles.formGroup}>
                <label>Company Name / Recruiter Name:</label>
                <input 
                  type="text" 
                  name="companyName" 
                  placeholder="Enter company or agency name" 
                  required 
                  value={formData.companyName}
                  onChange={handleChange}
                />
              </div>

              <div css={styles.formGroup}>
                <label>Work Email:</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="recruiter@company.com" 
                  required 
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div css={styles.formGroup}>
                <label>Contact Phone Number:</label>
                <input 
                  type="tel" 
                  name="phone" 
                  placeholder="+91 98765 43210" 
                  required 
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div css={styles.formGroup}>
                <label>Hiring Needs / Required Skillset:</label>
                <input 
                  type="text" 
                  name="hiringNeeds" 
                  placeholder="e.g. Hiring 3 Senior React Devs, 2 Python Engineers" 
                  value={formData.hiringNeeds}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          <button type="submit" css={styles.submitBtn}>
            {roleMode === 'jobseeker' ? 'Create Free Candidate Account' : 'Create Employer Hiring Account'}
            <ArrowRight size={18} />
          </button>
        </form>
      </div>

      {/* Floating Coral Orange Chat Widget */}
      <button 
        type="button" 
        css={styles.floatingChatBtn}
        onClick={() => alert("UDEN Support Assistant: How can we help you today? Chat with our team!")}
        title="Chat with UDEN Support"
      >
        <MessageSquare size={26} />
      </button>
    </div>
  );
};

export default HeroAuthSegmented;
