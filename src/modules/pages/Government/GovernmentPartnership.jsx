import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Landmark, Sparkles, ShieldCheck, ArrowRight, CheckCircle2, Award, Users, BookOpen, GraduationCap, Briefcase } from 'lucide-react';
import FaqPage from '../Faq/Faq';

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FFFDF0 0%, #FFFFFF 100%);
    padding: 64px 16px 56px 16px;
    border-bottom: 4px solid #F55825;
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
    background: rgba(245, 88, 37, 0.1);
    color: #F55825;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 20px;
    border: 1px solid rgba(245, 88, 37, 0.2);
    text-transform: uppercase;
  `,
  title: css`
    font-size: 38px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.25;
    margin: 0 0 18px 0;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 28px;
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
    border: 1.5px solid rgba(75, 99, 140, 0.2);
    border-radius: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 4px 12px rgba(75, 99, 140, 0.05);
  `,
  statIcon: css`
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: rgba(245, 88, 37, 0.1);
    color: #F55825;
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
      color: #F55825;
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
    border: 2px solid #F55825;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 20px 48px rgba(245, 88, 37, 0.12);
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
      border-color: #F55825;
      box-shadow: 0 4px 12px rgba(245, 88, 37, 0.15);
    }
  `,
  submitBtn: css`
    width: 100%;
    background: #F55825;
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
      background: #D94616;
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
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  `,
  modelCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px 24px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: transform 0.25s ease, border-color 0.25s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: #F55825;
      box-shadow: 0 12px 24px rgba(245, 88, 37, 0.1);
    }

    .cardIcon {
      width: 48px;
      height: 48px;
      border-radius: 12px;
      background: #FFFDF0;
      border: 1px solid #FEF5D8;
      color: #F55825;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 16px;
    }

    h3 {
      font-size: 18px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 10px;
    }

    p {
      font-size: 13.5px;
      color: #64748B;
      line-height: 1.6;
      margin: 0;
    }
  `
};

const GovernmentPartnership = () => {
  const [institutionName, setInstitutionName] = useState('');
  const [email, setEmail] = useState('');
  const [studentCount, setStudentCount] = useState('');

  const handleProposalSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Student Employability & Skill Development proposal sent for ${institutionName || 'your institution'}. Our Education & Youth Empowerment Lead will contact you shortly.`);
    setInstitutionName('');
    setEmail('');
    setStudentCount('');
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* 1. Hero Government & Youth Skill Development Banner */}
      <div css={styles.heroOuter}>
        <div css={styles.container}>
          <div>
            <div css={styles.badgeTag}>
              <GraduationCap size={14} />
              YOUTH SKILL DEVELOPMENT &amp; EMPLOYABILITY
            </div>
            <h1 css={styles.title}>
              Empowering Students with <span>Industry-Ready Tech Skills</span> &amp; Career Growth
            </h1>
            <p css={styles.subtitle}>
              UDEN collaborates with educational departments, skill development initiatives, and public institutions to bridge the gap between academic education and high-paying global employment opportunities.
            </p>

            <div css={styles.statsGrid}>
              <div css={styles.statCard}>
                <div css={styles.statIcon}><Users size={20} /></div>
                <div>
                  <div css={styles.statNum}>25,000<span>+</span></div>
                  <div css={styles.statLabel}>Students Skill-Assessed</div>
                </div>
              </div>

              <div css={styles.statCard}>
                <div css={styles.statIcon}><Briefcase size={20} /></div>
                <div>
                  <div css={styles.statNum}>150<span>+</span></div>
                  <div css={styles.statLabel}>Corporate Hiring Partners</div>
                </div>
              </div>

              <div css={styles.statCard}>
                <div css={styles.statIcon}><Award size={20} /></div>
                <div>
                  <div css={styles.statNum}>98<span>%</span></div>
                  <div css={styles.statLabel}>Placement Success Rate</div>
                </div>
              </div>

              <div css={styles.statCard}>
                <div css={styles.statIcon}><ShieldCheck size={20} /></div>
                <div>
                  <div css={styles.statNum}>100<span>%</span></div>
                  <div css={styles.statLabel}>Free Candidate Registration</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Student Employability Proposal Form */}
          <div css={styles.formCard}>
            <div css={styles.formTitle}>
              <Landmark size={20} color="#F55825" />
              Request Student Employability Proposal
            </div>
            <p css={styles.formSub}>Discover how UDEN brings free skill assessments, mentorship, and corporate placement drives to your students.</p>

            <form onSubmit={handleProposalSubmit}>
              <input 
                type="text"
                placeholder="Institution / Department Name"
                value={institutionName}
                onChange={(e) => setInstitutionName(e.target.value)}
                css={styles.input}
                required
              />
              <input 
                type="email"
                placeholder="Official Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                css={styles.input}
                required
              />
              <input 
                type="text"
                placeholder="Target Student Strength (e.g. 500 Students)"
                value={studentCount}
                onChange={(e) => setStudentCount(e.target.value)}
                css={styles.input}
                required
              />
              <button type="submit" css={styles.submitBtn}>
                Request Employability Proposal
                <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* 2. How UDEN Empowers Students Section */}
      <div css={styles.modelSection}>
        <div css={styles.sectionHeader}>
          <h2>How UDEN Empowers Students &amp; Public Institutions</h2>
          <p>A comprehensive ecosystem providing end-to-end guidance, skill building, and placement access.</p>
        </div>

        <div css={styles.modelGrid}>
          <div css={styles.modelCard}>
            <div className="cardIcon">
              <BookOpen size={24} />
            </div>
            <h3>1. Free Diagnostic Skill Assessments</h3>
            <p>Students undergo comprehensive diagnostic skill tests covering technical coding, aptitude, and logical reasoning to evaluate career readiness.</p>
          </div>

          <div css={styles.modelCard}>
            <div className="cardIcon">
              <Sparkles size={24} />
            </div>
            <h3>2. Company PYQs &amp; Exam Prep</h3>
            <p>Access previous years' question (PYQ) banks and company-specific round prep modules for Deloitte, TCS, Amazon, and top hiring partners.</p>
          </div>

          <div css={styles.modelCard}>
            <div className="cardIcon">
              <Award size={24} />
            </div>
            <h3>3. AI Video Mock Interviews</h3>
            <p>Students practice live video interviews with AI-driven real-time feedback on body language, technical accuracy, and communication clarity.</p>
          </div>

          <div css={styles.modelCard}>
            <div className="cardIcon">
              <Briefcase size={24} />
            </div>
            <h3>4. Direct Corporate Placement Drives</h3>
            <p>UDEN connects pre-assessed candidates directly to 150+ hiring partners with 48-hour shortlist SLAs and zero sourcing fees for candidates.</p>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div style={{ padding: '70px 0', background: '#FFFFFF' }}>
        <FaqPage />
      </div>
    </div>
  );
};

export default GovernmentPartnership;
