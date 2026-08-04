import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Landmark, Sparkles, CheckCircle2, ArrowRight, ShieldCheck, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

const styles = {
  outer: css`
    min-height: calc(100vh - 120px);
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    padding: 60px 20px;
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
    margin-bottom: 40px;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 8px 18px;
    background: rgba(245, 88, 37, 0.1);
    border: 1px solid rgba(245, 88, 37, 0.25);
    border-radius: 99px;
    color: #DA532C;
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
      color: #DA532C;
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
    border: 1.5px solid rgba(218, 83, 44, 0.25);
    border-radius: 24px;
    padding: 44px;
    box-shadow: 0 20px 40px -15px rgba(218, 83, 44, 0.1);
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
      border-color: #DA532C;
      box-shadow: 0 0 0 4px rgba(218, 83, 44, 0.12);
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
    background: linear-gradient(135deg, #DA532C 0%, #B83B18 100%);
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    box-shadow: 0 10px 25px -5px rgba(218, 83, 44, 0.35);
    margin-top: 28px;
  `,
  successBox: css`
    text-align: center;
    padding: 48px 24px;
    background: #FFF7ED;
    border: 1.5px solid #FFEDD5;
    border-radius: 24px;
    h3 {
      font-size: 24px;
      color: #9A3412;
      font-weight: 800;
      margin: 16px 0 8px 0;
    }
    p {
      color: #C2410C;
      font-size: 15px;
    }
  `
};

const GovernmentPartnerFormPage = () => {
  const [formData, setFormData] = useState({
    deptName: '',
    officialEmail: '',
    nodalOfficer: '',
    phone: '',
    partnershipScope: 'State Skill Mission Employability Drive',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div css={styles.outer}>
      <div css={styles.container}>
        <div css={styles.header}>
          <div css={styles.badgeTag}>
            <Landmark size={15} /> GOVERNMENT &amp; STATE SKILL MISSIONS
          </div>
          <h1 css={styles.title}>
            Government <span>Employability Partnership</span>
          </h1>
          <p css={styles.sub}>
            GeM-ready, DPIIT-recognized platform for scaling mission-wide student placement tracking across state colleges and skill development centers.
          </p>
        </div>

        <div css={styles.formCard}>
          {submitted ? (
            <div css={styles.successBox}>
              <CheckCircle2 size={56} color="#9A3412" style={{ margin: '0 auto' }} />
              <h3>Mission Proposal Received!</h3>
              <p>Our Government Partnerships Nodal Officer will contact <strong>{formData.officialEmail}</strong> within 24 hours.</p>
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
                  <label css={styles.label}>Department / State Skill Mission Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. APSSDC / KSDC / NSDC Partner Mission"
                    css={styles.input}
                    value={formData.deptName}
                    onChange={(e) => setFormData({ ...formData, deptName: e.target.value })}
                  />
                </div>

                <div>
                  <label css={styles.label}>Official Government Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="officer@gov.in"
                    css={styles.input}
                    value={formData.officialEmail}
                    onChange={(e) => setFormData({ ...formData, officialEmail: e.target.value })}
                  />
                </div>

                <div>
                  <label css={styles.label}>Nodal Officer Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Shri V. K. Naidu (Director)"
                    css={styles.input}
                    value={formData.nodalOfficer}
                    onChange={(e) => setFormData({ ...formData, nodalOfficer: e.target.value })}
                  />
                </div>

                <div>
                  <label css={styles.label}>Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    css={styles.input}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label css={styles.label}>Partnership Scope</label>
                  <select
                    css={styles.select}
                    value={formData.partnershipScope}
                    onChange={(e) => setFormData({ ...formData, partnershipScope: e.target.value })}
                  >
                    <option>State Skill Mission Employability Drive</option>
                    <option>GeM Portal Tender / Procurement</option>
                    <option>Polytechnic &amp; ITI Skill Assessment Drive</option>
                  </select>
                </div>
              </div>

              <button type="submit" css={styles.submitBtn}>
                Submit State Mission Request <ArrowRight size={18} />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default GovernmentPartnerFormPage;
