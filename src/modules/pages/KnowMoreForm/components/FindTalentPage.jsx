import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Building2, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, ArrowLeft, Clock, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

const styles = {
  outer: css`
    min-height: calc(100vh - 120px);
    background: linear-gradient(135deg, #FFFDF0 0%, #FFFFFF 100%);
    padding: 36px 16px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  container: css`
    max-width: 900px;
    width: 100%;
  `,
  header: css`
    text-align: center;
    margin-bottom: 24px;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: rgba(245, 88, 37, 0.1);
    border: 1px solid rgba(245, 88, 37, 0.25);
    border-radius: 99px;
    color: #F55825;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 16px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 38px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
    span {
      background: linear-gradient(135deg, #F55825 0%, #D93800 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  `,
  sub: css`
    font-size: 16px;
    color: #64748B;
    max-width: 620px;
    margin: 0 auto;
    line-height: 1.6;
  `,
  formCard: css`
    background: #FFFFFF;
    border: 1.5px solid rgba(226, 232, 240, 0.8);
    border-radius: 24px;
    padding: 44px;
    box-shadow: 0 20px 40px -15px rgba(245, 88, 37, 0.08);
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  fullWidth: css`
    grid-column: 1 / -1;
  `,
  label: css`
    display: block;
    font-size: 13px;
    font-weight: 700;
    color: #334155;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  `,
  input: css`
    width: 100%;
    padding: 14px 18px;
    border-radius: 12px;
    border: 1.5px solid #E2E8F0;
    font-size: 15px;
    color: #1E293B;
    outline: none;
    transition: all 0.2s ease;
    &:focus {
      border-color: #F55825;
      box-shadow: 0 0 0 4px rgba(245, 88, 37, 0.12);
    }
  `,
  select: css`
    width: 100%;
    padding: 14px 18px;
    border-radius: 12px;
    border: 1.5px solid #E2E8F0;
    font-size: 15px;
    color: #1E293B;
    background: #FFFFFF;
    outline: none;
    cursor: pointer;
    &:focus {
      border-color: #F55825;
      box-shadow: 0 0 0 4px rgba(245, 88, 37, 0.12);
    }
  `,
  submitBtn: css`
    width: 100%;
    padding: 16px 28px;
    border-radius: 14px;
    background: linear-gradient(135deg, #F55825 0%, #D93800 100%);
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 10px 25px -5px rgba(245, 88, 37, 0.4);
    transition: all 0.2s ease;
    margin-top: 28px;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 30px -5px rgba(245, 88, 37, 0.5);
    }
  `,
  successBox: css`
    text-align: center;
    padding: 48px 24px;
    background: #F0FDF4;
    border: 1.5px solid #BBF7D0;
    border-radius: 24px;
    h3 {
      font-size: 24px;
      color: #166534;
      font-weight: 800;
      margin: 16px 0 8px 0;
    }
    p {
      color: #15803D;
      font-size: 15px;
    }
  `,
  metricsRow: css`
    display: flex;
    justify-content: center;
    gap: 32px;
    margin-top: 36px;
    padding-top: 24px;
    border-top: 1px solid #F1F5F9;
    @media (max-width: 640px) {
      flex-direction: column;
      gap: 16px;
    }
  `,
  metricItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    color: #475569;
    font-size: 14px;
    font-weight: 600;
  `
};

const FindTalentPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    workEmail: '',
    contactNumber: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (window._hsq) {
        window._hsq.push(["identify", {
          email: formData.workEmail,
          company: formData.companyName,
          phone: formData.contactNumber
        }]);
        window._hsq.push(["trackEvent", { id: "Corporate Find Talent Request Submission" }]);
      }
    } catch (err) {
      console.log("HubSpot tracking error:", err);
    }
    setSubmitted(true);
  };

  return (
    <div css={styles.outer}>
      <div css={styles.container}>
        <div css={styles.header}>
          <div css={styles.badgeTag}>
            <Building2 size={15} aria-hidden="true" /> FOR RECRUITERS &amp; ENTERPRISES
          </div>
          <h1 css={styles.title}>
            Hire <span>Pre-Vetted AI Talent</span>
          </h1>
          <p css={styles.sub}>
            Access 10,000+ industry-verified candidate profiles mapped to exact technical skill stacks. Zero placement commission options available.
          </p>
        </div>

        <div css={styles.formCard}>
          {submitted ? (
            <div css={styles.successBox}>
              <CheckCircle2 size={56} color="#166534" style={{ margin: '0 auto' }} aria-hidden="true" />
              <h3>Talent Request Submitted!</h3>
              <p>Our Corporate Talent Specialist will send curated candidate matches to <strong>{formData.workEmail}</strong> within 2 hours.</p>
              <Link to={AppRoutes.HOME} style={{ textDecoration: 'none' }}>
                <button css={styles.submitBtn} style={{ maxWidth: '280px', margin: '24px auto 0 auto' }}>
                  Return to Home
                </button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} aria-label="Find Pre-Vetted Talent Form">
              <div css={styles.grid}>
                <div css={styles.fullWidth}>
                  <label htmlFor="companyName" css={styles.label}>Company / Institution Name *</label>
                  <input
                    id="companyName"
                    name="companyName"
                    type="text"
                    required
                    aria-required="true"
                    aria-label="Company or Institution Name"
                    placeholder="e.g. Google Inc. / Deloitte / SRM University"
                    css={styles.input}
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div css={styles.fullWidth}>
                  <label htmlFor="workEmail" css={styles.label}>Official Work Email ID *</label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    required
                    aria-required="true"
                    aria-label="Official Work Email Address"
                    placeholder="name@company.com"
                    css={styles.input}
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                  />
                </div>

                <div css={styles.fullWidth}>
                  <label htmlFor="contactNumber" css={styles.label}>Contact / Mobile Number *</label>
                  <input
                    id="contactNumber"
                    name="contactNumber"
                    type="tel"
                    required
                    aria-required="true"
                    aria-label="Contact or Mobile Number"
                    placeholder="+91 98765 43210"
                    css={styles.input}
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" css={styles.submitBtn}>
                Request Pre-Vetted Candidates <ArrowRight size={18} aria-hidden="true" />
              </button>
            </form>
          )}

          <div css={styles.metricsRow}>
            <div css={styles.metricItem}>
              <ShieldCheck size={18} color="#F55825" /> 100% Verified Skills &amp; Projects
            </div>
            <div css={styles.metricItem}>
              <Clock size={18} color="#F55825" /> 48-Hour Placement Shortlist
            </div>
            <div css={styles.metricItem}>
              <Users size={18} color="#F55825" /> 150+ Partner Recruiters
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindTalentPage;
