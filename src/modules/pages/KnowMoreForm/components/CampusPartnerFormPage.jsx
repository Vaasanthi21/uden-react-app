import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { GraduationCap, Sparkles, CheckCircle2, ArrowRight, ArrowLeft, Building2, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

const styles = {
  outer: css`
    min-height: calc(100vh - 120px);
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
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
    background: rgba(255, 176, 32, 0.15);
    border: 1px solid rgba(255, 176, 32, 0.35);
    border-radius: 99px;
    color: #B45309;
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
      color: #D97706;
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
    border: 1.5px solid rgba(251, 191, 36, 0.3);
    border-radius: 24px;
    padding: 44px;
    box-shadow: 0 20px 40px -15px rgba(217, 119, 6, 0.1);
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
      border-color: #D97706;
      box-shadow: 0 0 0 4px rgba(217, 119, 6, 0.12);
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
    background: linear-gradient(135deg, #D97706 0%, #B45309 100%);
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 10px 25px -5px rgba(217, 119, 6, 0.35);
    margin-top: 28px;
  `,
  successBox: css`
    text-align: center;
    padding: 48px 24px;
    background: #FEF3C7;
    border: 1.5px solid #FDE68A;
    border-radius: 24px;
    h3 {
      font-size: 24px;
      color: #92400E;
      font-weight: 800;
      margin: 16px 0 8px 0;
    }
    p {
      color: #78350F;
      font-size: 15px;
    }
  `
};

const CampusPartnerFormPage = () => {
  const [formData, setFormData] = useState({
    collegeName: '',
    tpoEmail: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if (window._hsq) {
        window._hsq.push(["identify", {
          email: formData.tpoEmail,
          company: formData.collegeName
        }]);
        window._hsq.push(["trackEvent", { id: "Campus Placement Partner Submission" }]);
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
            <GraduationCap size={15} /> FOR COLLEGES &amp; TPO OFFICERS
          </div>
          <h1 css={styles.title}>
            Host <span>Campus Placement Drive</span>
          </h1>
          <p css={styles.sub}>
            Partner with UDEN to bring 150+ corporate recruiters to your campus, automate student NAAC/NBA placement analytics, and save 100+ hours of manual shortlisting.
          </p>
        </div>

        <div css={styles.formCard}>
          {submitted ? (
            <div css={styles.successBox}>
              <CheckCircle2 size={56} color="#92400E" style={{ margin: '0 auto' }} />
              <h3>Placement Drive Request Received!</h3>
              <p>Our Campus Institutional Lead will schedule a placement drive call with <strong>{formData.tpoEmail}</strong> within 24 hours.</p>
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
                  <label css={styles.label}>College / Institution Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. IIT Kanpur / SRM University / Anna University"
                    css={styles.input}
                    value={formData.collegeName}
                    onChange={(e) => setFormData({ ...formData, collegeName: e.target.value })}
                  />
                </div>

                <div css={styles.fullWidth}>
                  <label css={styles.label}>Official TPO Email ID *</label>
                  <input
                    type="email"
                    required
                    placeholder="tpo@college.edu.in"
                    css={styles.input}
                    value={formData.tpoEmail}
                    onChange={(e) => setFormData({ ...formData, tpoEmail: e.target.value })}
                  />
                </div>
              </div>

              <button type="submit" css={styles.submitBtn}>
                Schedule Campus Partnership Call <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default CampusPartnerFormPage;
