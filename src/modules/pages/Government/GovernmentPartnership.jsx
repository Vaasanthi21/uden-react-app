import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Landmark, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, FileText, Award, BarChart3 } from 'lucide-react';

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    padding: 64px 16px 56px 16px;
    border-bottom: 4px solid #DA532C;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 36px;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 20px;
    border: 1px solid rgba(218, 83, 44, 0.25);
    text-transform: uppercase;
  `,
  title: css`
    font-size: 40px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.25;
    margin: 0 0 18px 0;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }
  `,
  subtitle: css`
    font-size: 16.5px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 32px;
    font-weight: 500;
  `,
  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 32px;

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  `,
  statCard: css`
    background: #FFFFFF;
    border: 1.5px solid rgba(255, 176, 32, 0.4);
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  statIcon: css`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  statNum: css`
    font-size: 18px;
    font-weight: 900;
    color: #1E293B;

    span {
      color: #DA532C;
    }
  `,
  statLabel: css`
    font-size: 12px;
    color: #64748B;
    font-weight: 700;
  `,

  /* BRIEFING FORM CARD */
  formCard: css`
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 20px 40px rgba(218, 83, 44, 0.15);
  `,
  formTitle: css`
    font-size: 20px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  formSub: css`
    font-size: 13px;
    color: #64748B;
    margin-bottom: 24px;
  `,
  input: css`
    width: 100%;
    padding: 12px 14px;
    margin-bottom: 14px;
    border-radius: 10px;
    border: 1.5px solid #CBD5E1;
    font-size: 14px;
    color: #1E293B;
    outline: none;
    box-sizing: border-box;
    font-weight: 600;

    &:focus {
      border-color: #DA532C;
    }
  `,
  submitBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: #B83D1B;
    }
  `,

  /* MODEL DETAILS SECTION */
  modelSection: css`
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 16px;
  `,
  sectionHeader: css`
    text-align: center;
    margin-bottom: 44px;

    h2 {
      font-size: 32px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 8px;
    }

    p {
      color: #64748B;
      font-size: 15px;
      font-weight: 500;
    }
  `,
  modelGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,
  modelCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);

    h3 {
      font-size: 20px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 12px;
    }

    p {
      font-size: 14px;
      color: #64748B;
      line-height: 1.6;
      margin: 0;
    }
  `
};

const GovernmentPartnership = () => {
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');

  const handleBriefingSubmit = (e) => {
    e.preventDefault();
    alert('Briefing request received. Our State Higher Education Lead will connect with your department shortly.');
    setDepartment('');
    setEmail('');
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* 1. Hero Government Partnerships Banner */}
      <div css={styles.heroOuter}>
        <div css={styles.container}>
          <div>
            <div css={styles.badgeTag}>
              <Landmark size={14} />
              FOR GOVERNMENT & STATE DHE
            </div>
            <h1 css={styles.title}>
              Converting Employability Scheme Budgets into <span>Audit-Ready Placements</span>
            </h1>
            <p css={styles.subtitle}>
              UDEN partners with State Departments of Higher Education to convert unspent scheme budgets into measurable, trackable placement outcomes — as in Jharkhand's DHE Scheme 2107.
            </p>

            <div css={styles.statsGrid}>
              <div css={styles.statCard}>
                <div css={styles.statIcon}><BarChart3 size={18} /></div>
                <div>
                  <div css={styles.statNum}>₹95 Cr</div>
                  <div css={styles.statLabel}>Scheme Budget Utilized</div>
                </div>
              </div>

              <div css={styles.statCard}>
                <div css={styles.statIcon}><Award size={18} /></div>
                <div>
                  <div css={styles.statNum}>60<span>Colleges</span></div>
                  <div css={styles.statLabel}>State Higher Education</div>
                </div>
              </div>

              <div css={styles.statCard}>
                <div css={styles.statIcon}><FileText size={18} /></div>
                <div>
                  <div css={styles.statNum}>GFR 194</div>
                  <div css={styles.statLabel}>Procurement Compliant</div>
                </div>
              </div>

              <div css={styles.statCard}>
                <div css={styles.statIcon}><ShieldCheck size={18} /></div>
                <div>
                  <div css={styles.statNum}>20,000<span>+</span></div>
                  <div css={styles.statLabel}>Students Enrolled</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Briefing Form */}
          <div css={styles.formCard}>
            <div css={styles.formTitle}>
              <Landmark size={20} color="#DA532C" />
              Request State MoU Briefing
            </div>
            <p css={styles.formSub}>Connect with UDEN's Government Partnerships team for scheme utilization models.</p>

            <form onSubmit={handleBriefingSubmit}>
              <input 
                type="text"
                placeholder="State Dept. / Ministry Name (e.g. Jharkhand DHE)"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                css={styles.input}
                required
              />
              <input 
                type="email"
                placeholder="Official Government Email ID (.gov.in / .nic.in)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                css={styles.input}
                required
              />
              <button type="submit" css={styles.submitBtn}>
                Request Briefing & MoU Proposal
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. The Jharkhand Model Explanation */}
      <div css={styles.modelSection}>
        <div css={styles.sectionHeader}>
          <h2>The Jharkhand DHE Scheme 2107 Model</h2>
          <p>How UDEN turns unspent state employability funds into measurable placement statistics.</p>
        </div>

        <div css={styles.modelGrid}>
          <div css={styles.modelCard}>
            <h3>1. Budget Utilization</h3>
            <p>State outcome budgets are routinely under-utilized (~6%). UDEN structures audit-compliant utilization tracks for State Higher Education Departments.</p>
          </div>

          <div css={styles.modelCard}>
            <h3>2. GFR Rule 194 Procurement</h3>
            <p>Runs through standard single-source government procurement guidelines to streamline state-wide college onboarding without administrative delays.</p>
          </div>

          <div css={styles.modelCard}>
            <h3>3. Audit-Ready Outcome Tracking</h3>
            <p>Real-time placement dashboards track student enrollment, skill verification, mock interview readiness, and final corporate offer letters.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GovernmentPartnership;
