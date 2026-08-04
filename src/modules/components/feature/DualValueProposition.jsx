import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { 
  Sparkles, CheckCircle2, ArrowRight, UserCheck, 
  Building2, GraduationCap, ShieldCheck, Award, Zap, Users, Target 
} from 'lucide-react';
import { AppRoutes } from 'utils/consts/routes';

const styles = {
  sectionOuter: css`
    width: 100%;
    background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%);
    padding: 80px 20px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1240px;
    margin: 0 auto;
  `,
  header: css`
    text-align: center;
    margin-bottom: 56px;
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
    font-weight: 800;
    margin-bottom: 16px;
    text-transform: uppercase;
  `,
  mainHeading: css`
    font-size: 40px;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 16px;
    letter-spacing: -0.5px;
    span {
      background: linear-gradient(135deg, #F55825 0%, #D93800 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @media (max-width: 768px) {
      font-size: 30px;
    }
  `,
  subHeading: css`
    font-size: 16px;
    color: #64748B;
    max-width: 680px;
    margin: 0 auto;
    line-height: 1.6;
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    @media (max-width: 992px) {
      grid-template-columns: 1fr;
    }
  `,
  colCard: (isCompany) => css`
    background: ${isCompany ? '#FAF5FF' : '#FFFDF5'};
    border: 1.5px solid ${isCompany ? 'rgba(168, 85, 247, 0.3)' : 'rgba(251, 191, 36, 0.35)'};
    border-radius: 28px;
    padding: 40px;
    box-shadow: 0 16px 36px -10px ${isCompany ? 'rgba(147, 51, 234, 0.08)' : 'rgba(217, 119, 6, 0.08)'};
    position: relative;
    overflow: hidden;
  `,
  colBadge: (isCompany) => css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 99px;
    background: ${isCompany ? '#F3E8FF' : '#FEF3C7'};
    color: ${isCompany ? '#7E22CE' : '#B45309'};
    font-size: 12.5px;
    font-weight: 800;
    text-transform: uppercase;
    margin-bottom: 20px;
  `,
  colTitle: css`
    font-size: 26px;
    font-weight: 800;
    color: #0F172A;
    margin-bottom: 12px;
  `,
  colDesc: css`
    font-size: 14.5px;
    color: #475569;
    margin-bottom: 28px;
    line-height: 1.6;
  `,
  stepsList: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  stepItem: (isCompany) => css`
    display: flex;
    align-items: flex-start;
    gap: 14px;
    background: #FFFFFF;
    border: 1px solid ${isCompany ? 'rgba(192, 132, 252, 0.25)' : 'rgba(253, 230, 138, 0.4)'};
    border-radius: 14px;
    padding: 14px 18px;
  `,
  stepNum: (isCompany) => css`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${isCompany ? '#9333EA' : '#F55825'};
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  stepText: css`
    h5 {
      font-size: 15px;
      font-weight: 700;
      color: #0F172A;
      margin-bottom: 2px;
    }
    p {
      font-size: 13px;
      color: #64748B;
      margin: 0;
    }
  `,
  freeUpskillingHighlight: css`
    background: linear-gradient(135deg, #7E22CE 0%, #581C87 100%);
    color: #FFFFFF;
    border-radius: 14px;
    padding: 18px 20px;
    margin-top: 20px;
    display: flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 8px 20px rgba(126, 34, 206, 0.25);
    h5 {
      font-size: 15px;
      font-weight: 800;
      margin-bottom: 2px;
      color: #FFFFFF;
    }
    p {
      font-size: 12.5px;
      color: #E9D5FF;
      margin: 0;
    }
  `,
  metricsBar: css`
    margin-top: 56px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 24px 36px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
  `,
  metricBox: css`
    text-align: center;
    h4 {
      font-size: 28px;
      font-weight: 800;
      color: #F55825;
      margin-bottom: 4px;
    }
    p {
      font-size: 13px;
      font-weight: 700;
      color: #64748B;
      text-transform: uppercase;
    }
  `
};

const DualValueProposition = () => {
  return (
    <div css={styles.sectionOuter}>
      <div css={styles.container}>
        
        {/* HEADER */}
        <div css={styles.header}>
          <div css={styles.badgeTag}>
            <Sparkles size={14} /> DUAL VALUE PROPOSITION
          </div>
          <h2 css={styles.mainHeading}>
            Built for <span>Job Seekers</span> &amp; <span>Companies</span>
          </h2>
          <p css={styles.subHeading}>
            UDEN bridges the gap between ambitious talent and top employers through AI-assisted career progression and zero-risk corporate hiring.
          </p>
        </div>

        {/* SIDE BY SIDE GRID */}
        <div css={styles.grid}>
          
          {/* LEFT: JOB SEEKERS (ORANGE THEME) */}
          <div css={styles.colCard(false)}>
            <div css={styles.colBadge(false)}>
              <GraduationCap size={14} /> FOR JOB SEEKERS — YOUR AI CAREER PATH
            </div>
            <h3 css={styles.colTitle}>From Skill Assessment to Dream Role</h3>
            <p css={styles.colDesc}>
              Stop manually searching job boards. Let UDEN's AI build your personalized career roadmap, optimize your ATS resume, and match you with verified employer openings.
            </p>

            <div css={styles.stepsList}>
              <div css={styles.stepItem(false)}>
                <div css={styles.stepNum(false)}>1</div>
                <div css={styles.stepText}>
                  <h5>AI Career &amp; Skill Assessment</h5>
                  <p>Discover your exact technical strengths and skill gaps in under 2 minutes.</p>
                </div>
              </div>

              <div css={styles.stepItem(false)}>
                <div css={styles.stepNum(false)}>2</div>
                <div css={styles.stepText}>
                  <h5>Personalized AI Learning Path</h5>
                  <p>Curated micro-courses tailored to high-demand corporate job roles.</p>
                </div>
              </div>

              <div css={styles.stepItem(false)}>
                <div css={styles.stepNum(false)}>3</div>
                <div css={styles.stepText}>
                  <h5>Skill Building &amp; Real Projects</h5>
                  <p>Build industry-grade projects verified by recruiter neural networks.</p>
                </div>
              </div>

              <div css={styles.stepItem(false)}>
                <div css={styles.stepNum(false)}>4</div>
                <div css={styles.stepText}>
                  <h5>AI Mock Interviews &amp; Resume Score</h5>
                  <p>Practice live video mock interviews and fix ATS resume bottlenecks.</p>
                </div>
              </div>

              <div css={styles.stepItem(false)}>
                <div css={styles.stepNum(false)}>5</div>
                <div css={styles.stepText}>
                  <h5>Certifications &amp; Skill Badging</h5>
                  <p>Earn verified credentials recognized by 150+ corporate hiring partners.</p>
                </div>
              </div>

              <div css={styles.stepItem(false)}>
                <div css={styles.stepNum(false)}>6</div>
                <div css={styles.stepText}>
                  <h5>AI Fitment &amp; Direct Job Matching</h5>
                  <p>Matched directly to partner openings saving 20+ days of manual searching.</p>
                </div>
              </div>

              <div css={styles.stepItem(false)}>
                <div css={styles.stepNum(false)}>7</div>
                <div css={styles.stepText}>
                  <h5>Apply &amp; Get Hired</h5>
                  <p>1-click application submission with instant recruiter notifications.</p>
                </div>
              </div>

              <div css={styles.stepItem(false)}>
                <div css={styles.stepNum(false)}>8</div>
                <div css={styles.stepText}>
                  <h5>Referral Cash Earnings &amp; Continuous Growth</h5>
                  <p>Refer friends, earn cash, and get a share of successful referral hiring fees.</p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: COMPANIES (PURPLE THEME) */}
          <div css={styles.colCard(true)}>
            <div css={styles.colBadge(true)}>
              <Building2 size={14} /> FOR COMPANIES — SMARTER HIRING &amp; FREE UPSKILLING
            </div>
            <h3 css={styles.colTitle}>Zero-Risk Talent Acquisition</h3>
            <p css={styles.colDesc}>
              Hire pre-vetted candidates with 90%+ skill fitment. UDEN provides 100% free post-hire upskilling to ensure seamless onboarding into your tech stack.
            </p>

            <div css={styles.stepsList}>
              <div css={styles.stepItem(true)}>
                <div css={styles.stepNum(true)}>1</div>
                <div css={styles.stepText}>
                  <h5>AI Talent Discovery &amp; Sourcing</h5>
                  <p>Search 10,000+ candidate profiles pre-assessed for real-world code readiness.</p>
                </div>
              </div>

              <div css={styles.stepItem(true)}>
                <div css={styles.stepNum(true)}>2</div>
                <div css={styles.stepText}>
                  <h5>Automated Fitment Score Analysis</h5>
                  <p>Save 100+ hours of manual screening with algorithmic candidate rankings.</p>
                </div>
              </div>

              <div css={styles.stepItem(true)}>
                <div css={styles.stepNum(true)}>3</div>
                <div css={styles.stepText}>
                  <h5>Hire with Confidence</h5>
                  <p>Conduct 1-click interview drives with zero placement commissions.</p>
                </div>
              </div>

              {/* 100% FREE UPSKILLING BANNER */}
              <div css={styles.freeUpskillingHighlight}>
                <Award size={28} style={{ flexShrink: 0 }} />
                <div>
                  <h5>100% FREE Upskilling for Hired Talent</h5>
                  <p>We train your hired candidates on your specific tech stack at zero cost to your company.</p>
                </div>
              </div>

              <div css={styles.stepItem(true)}>
                <div css={styles.stepNum(true)}>5</div>
                <div css={styles.stepText}>
                  <h5>Grow High-Performing Teams</h5>
                  <p>Accelerate time-to-productivity with pre-aligned engineering talent.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM METRICS TICKER BAR */}
        <div css={styles.metricsBar}>
          <div css={styles.metricBox}>
            <h4>1 Lakh+</h4>
            <p>Jobs Analyzed Daily</p>
          </div>
          <div css={styles.metricBox}>
            <h4>10,000+</h4>
            <p>Verified Candidates</p>
          </div>
          <div css={styles.metricBox}>
            <h4>150+</h4>
            <p>Hiring Enterprise Partners</p>
          </div>
          <div css={styles.metricBox}>
            <h4>100+ Hrs</h4>
            <p>Recruiter Time Saved</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DualValueProposition;
