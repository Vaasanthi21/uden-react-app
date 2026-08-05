import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Users, Sparkles, CheckCircle2, ArrowRight, Building2, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

const styles = {
  outer: css`
    min-height: calc(100vh - 120px);
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%);
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
    background: rgba(75, 99, 140, 0.1);
    border: 1px solid rgba(75, 99, 140, 0.25);
    border-radius: 99px;
    color: #4B638C;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 16px;
    text-transform: uppercase;
  `,
  title: css`
    font-size: 38px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 12px;
    letter-spacing: -0.5px;
    span {
      color: #4B638C;
    }
  `,
  sub: css`
    font-size: 16px;
    color: #64748B;
    max-width: 640px;
    margin: 0 auto;
    line-height: 1.6;
  `,
  formCard: css`
    background: #FFFFFF;
    border: 1.5px solid rgba(75, 99, 140, 0.2);
    border-radius: 24px;
    padding: 44px;
    box-shadow: 0 20px 40px -15px rgba(75, 99, 140, 0.1);
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
  `,
  input: css`
    width: 100%;
    padding: 14px 18px;
    border-radius: 12px;
    border: 1.5px solid #E2E8F0;
    font-size: 15px;
    color: #1E293B;
    outline: none;
    &:focus {
      border-color: #4B638C;
      box-shadow: 0 0 0 4px rgba(75, 99, 140, 0.12);
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
  `,
  submitBtn: css`
    width: 100%;
    padding: 16px 28px;
    border-radius: 14px;
    background: linear-gradient(135deg, #4B638C 0%, #2D3E5E 100%);
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 10px 25px -5px rgba(75, 99, 140, 0.35);
    margin-top: 28px;
  `,
  successBox: css`
    text-align: center;
    padding: 48px 24px;
    background: #F1F5F9;
    border: 1.5px solid #CBD5E1;
    border-radius: 24px;
    h3 {
      font-size: 24px;
      color: #334155;
      font-weight: 800;
      margin: 16px 0 8px 0;
    }
    p {
      color: #475569;
      font-size: 15px;
    }
  `
};

const HRServicesJoinPage = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    businessEmail: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (window._hsq) {
        window._hsq.push(["identify", {
          email: formData.businessEmail,
          company: formData.companyName
        }]);
        window._hsq.push(["trackEvent", { id: "HR Services Join Request Submission" }]);
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
            <Users size={15} /> ENTERPRISE HR &amp; WORKFORCE SOLUTIONS
          </div>
          <h1 css={styles.title}>
            Enterprise <span>HR Solutions Inquiry</span>
          </h1>
          <p css={styles.sub}>
            Connect with our HR consulting team for staff augmentation, executive search, payroll management, and corporate compliance solutions.
          </p>
        </div>

        <div css={styles.formCard}>
          {submitted ? (
            <div css={styles.successBox}>
              <CheckCircle2 size={56} color="#334155" style={{ margin: '0 auto' }} />
              <h3>HR Solutions Inquiry Received!</h3>
              <p>Our Senior HR Advisory lead will reach out to <strong>{formData.businessEmail}</strong> within 24 hours.</p>
              <Link to={AppRoutes.HOME} style={{ textDecoration: 'none' }}>
                <button css={styles.submitBtn} style={{ maxWidth: '280px', margin: '24px auto 0 auto' }}>
                  Return to Home
                </button>
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div css={styles.grid}>
                <div css={styles.fullWidth}>
                  <label css={styles.label}>Company / Institution Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Infosys / Tech Mahindra"
                    css={styles.input}
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  />
                </div>

                <div css={styles.fullWidth}>
                  <label css={styles.label}>Official Business Email ID *</label>
                  <input
                    type="email"
                    required
                    placeholder="hr@company.com"
                    css={styles.input}
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" css={styles.submitBtn}>
                Request HR Consultation <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default HRServicesJoinPage;
