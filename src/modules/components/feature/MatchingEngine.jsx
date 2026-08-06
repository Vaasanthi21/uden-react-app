import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/consts/routes';

const matchPulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.85; }
  100% { transform: scale(1); opacity: 1; }
`;

const pulseDot = keyframes`
  0% { opacity: 0.4; }
  50% { opacity: 1; }
  100% { opacity: 0.4; }
`;

const JOBS = [
  { title: 'Senior React & Frontend Engineer', fit: 90, company: 'Deloitte Digital', loc: 'Bangalore, India', initial: 'D', gradient: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)' },
  { title: 'Lead Software Engineer, Front End', fit: 85, company: 'Capital One', loc: 'New York, USA', initial: 'C', gradient: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)' },
  { title: 'Full Stack Developer (Remote)', fit: 74, company: 'HR199', loc: 'Remote', initial: 'H', gradient: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)' },
];

const SKILLS = ['React', 'TypeScript', 'Next.js', 'Node.js', 'REST APIs'];

const styles = {
  section: css`
    position: relative;
    padding: 90px 0;
    background: linear-gradient(135deg, #FFFDF7 0%, #FFF3E0 100%);
    border-top: 1px solid #FFE0B2;
    border-bottom: 1px solid #FFE0B2;
    overflow: hidden;
    color: #1E293B;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  glowOrb1: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: rgba(245, 88, 37, 0.08);
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
  `,
  glowOrb2: css`
    position: absolute;
    top: 80px;
    right: 80px;
    width: 320px;
    height: 320px;
    background: rgba(247, 188, 8, 0.12);
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  `,
  header: css`
    text-align: center;
    max-width: 800px;
    margin: 0 auto 60px auto;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 18px;
    border-radius: 20px;
    background: #FEF5D8;
    border: 1px solid #F7BC08;
    color: #4B638C;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
  `,
  title: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    margin: 0 0 16px 0;
    line-height: 1.2;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }
  `,
  subtitle: css`
    font-size: 17px;
    color: #475569;
    line-height: 1.6;
    margin: 0;
  `,
  mainGrid: css`
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 48px;
    align-items: stretch;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  `,
  candidateCard: css`
    background: #FFFFFF;
    border-radius: 28px;
    border: 1.5px solid #FFE0B2;
    padding: 32px;
    box-shadow: 0 20px 50px -12px rgba(245, 88, 37, 0.15);
    color: #1E293B;
    width: 100%;
    max-width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    overflow: hidden;

    @media (max-width: 640px) {
      padding: 16px 12px;
    }
  `,
  profileRow: css`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 24px;
  `,
  avatarBox: css`
    width: 52px;
    height: 52px;
    border-radius: 18px;
    background: linear-gradient(135deg, #F55825 0%, #F7BC08 100%);
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  profileName: css`
    font-size: 17px;
    font-weight: 800;
    color: #1E293B;
    margin: 0;
  `,
  profileSub: css`
    font-size: 12.5px;
    color: #64748B;
    margin-top: 2px;
  `,
  gaugeFlex: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 16px 0;
    border-top: 1px solid #F1F5F9;
    border-bottom: 1px solid #F1F5F9;
    margin-bottom: 20px;

    @media (max-width: 640px) {
      flex-direction: column;
      gap: 14px;
    }
  `,
  gaugeContainer: css`
    position: relative;
    width: 110px;
    height: 110px;
  `,
  gaugeCenterText: css`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .fit-num {
      font-size: 24px;
      font-weight: 900;
      color: #1E293B;
      line-height: 1;
    }
    .fit-label {
      font-size: 9.5px;
      font-weight: 800;
      color: #64748B;
      letter-spacing: 0.5px;
      margin-top: 2px;
    }
  `,
  skillsRight: css`
    flex: 1;
  `,
  skillsTitle: css`
    font-size: 11px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 8px;
    letter-spacing: 0.5px;
  `,
  skillsWrap: css`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 10px;
  `,
  skillChip: css`
    padding: 3px 9px;
    border-radius: 12px;
    background: #F0F4FF;
    color: #4B638C;
    font-size: 11px;
    font-weight: 700;
  `,
  matchedCount: css`
    font-size: 12px;
    font-weight: 800;
    color: #10B981;
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  aiAnalysisBox: css`
    background: #FFFDF0;
    border: 1px solid #FEF5D8;
    border-radius: 18px;
    padding: 16px;
  `,
  aiHeader: css`
    font-size: 11px;
    font-weight: 800;
    color: #1E293B;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 6px;
    letter-spacing: 0.5px;
  `,
  aiText: css`
    font-size: 12.5px;
    color: #475569;
    line-height: 1.55;
    margin: 0;
  `,

  /* RIGHT SIDE JOBS LIST */
  jobsList: css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 16px;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
  `,
  jobCard: css`
    background: #FFFFFF;
    border: 1.5px solid #FFE0B2;
    border-radius: 20px;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 18px;
    transition: all 0.3s ease;
    cursor: pointer;
    box-shadow: 0 4px 16px rgba(245, 88, 37, 0.05);
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;

    @media (max-width: 640px) {
      padding: 12px 10px;
      gap: 10px;
    }

    &:hover {
      background: #FFFFFF;
      border-color: #F55825;
      transform: translateY(-2px);
      box-shadow: 0 16px 32px rgba(245, 88, 37, 0.18);

      .job-title {
        color: #F55825;
      }
      .job-sub {
        color: #1E293B;
      }
      .apply-btn {
        opacity: 1;
      }
    }
  `,
  jobInitial: (gradient) => css`
    width: 48px;
    height: 48px;
    border-radius: 16px;
    background: ${gradient};
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  jobMeta: css`
    flex: 1;
    min-width: 0;
    overflow: hidden;
    text-align: left;
  `,
  jobTitleRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    width: 100%;
  `,
  jobTitle: css`
    font-size: 15px;
    font-weight: 800;
    color: #1E293B;
    margin: 0;
    transition: color 0.2s ease;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
    flex: 1;
    min-width: 0;
  `,
  fitBadge: css`
    padding: 3px 10px;
    border-radius: 20px;
    background: #10B981;
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 900;
    animation: ${matchPulse} 2s infinite ease-in-out;
    white-space: nowrap;
    flex-shrink: 0;
    margin-left: auto;
  `,
  jobSub: css`
    font-size: 13px;
    color: #64748B;
    margin-top: 3px;
    transition: color 0.2s ease;
  `,
  activeRow: css`
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 6px;
  `,
  greenDot: css`
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #10B981;
    animation: ${pulseDot} 1.5s infinite ease-in-out;
  `,
  activeText: css`
    font-size: 11px;
    font-weight: 700;
    color: #10B981;
  `,
  applyBtn: css`
    opacity: 0;
    transition: opacity 0.2s ease;
    padding: 8px 18px;
    border-radius: 20px;
    border: 1.5px solid #F55825;
    background: #F55825;
    color: #FFFFFF;
    font-weight: 800;
    font-size: 13px;
    cursor: pointer;
    white-space: nowrap;

    &:hover {
      background: #D94616;
      border-color: #D94616;
    }
  `,
  ctaButton: css`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #F55825;
    color: #FFFFFF;
    padding: 16px 36px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 12px;
    box-shadow: 0 10px 24px rgba(245, 88, 37, 0.35);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 14px 32px rgba(245, 88, 37, 0.45);
    }
  `
};

export default function MatchingEngine() {
  const navigate = useNavigate();

  return (
    <section css={styles.section} id="matching-engine">
      <div css={styles.glowOrb1} />
      <div css={styles.glowOrb2} />

      <div css={styles.container}>
        <div css={styles.header}>
          <div css={styles.badgeTag}>
            <Sparkles size={14} color="#F7BC08" />
            THE MATCHING ENGINE
          </div>
          <h1 css={styles.title}>
            Lines of light connect your skills to <span>real jobs.</span>
          </h1>
          <p css={styles.subtitle}>
            Our AI reads your path, scores every opportunity, and shows you exactly where you fit — and what to build next.
          </p>
        </div>

        <div css={styles.mainGrid}>
          {/* Candidate Card */}
          <div css={styles.candidateCard}>
            <div css={styles.profileRow}>
              <div css={styles.avatarBox}>You</div>
              <div>
                <h4 css={styles.profileName}>Your Profile</h4>
                <p css={styles.profileSub}>Frontend Engineer · Learning path active</p>
              </div>
            </div>

            <div css={styles.gaugeFlex}>
              <div css={styles.gaugeContainer}>
                <svg viewBox="0 0 120 120" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                  <defs>
                    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#4B638C" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                  </defs>
                  <circle cx="60" cy="60" r="52" stroke="#E2E8F0" strokeWidth="9" fill="none" />
                  <circle
                    cx="60"
                    cy="60"
                    r="52"
                    stroke="url(#ringGrad)"
                    strokeWidth="9"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={2 * Math.PI * 52}
                    strokeDashoffset={2 * Math.PI * 52 * (1 - 0.84)}
                    style={{ transition: 'stroke-dashoffset 1.5s ease' }}
                  />
                </svg>
                <div css={styles.gaugeCenterText}>
                  <span className="fit-num">84%</span>
                  <span className="fit-label">FIT</span>
                </div>
              </div>

              <div css={styles.skillsRight}>
                <div css={styles.skillsTitle}>REQUIRED SKILLS</div>
                <div css={styles.skillsWrap}>
                  {SKILLS.map((s) => (
                    <span key={s} css={styles.skillChip}>{s}</span>
                  ))}
                </div>
                <div css={styles.matchedCount}>
                  <CheckCircle2 size={13} /> 5 matched
                </div>
              </div>
            </div>

            <div css={styles.aiAnalysisBox}>
              <div css={styles.aiHeader}>
                <Sparkles size={13} color="#F55825" /> AI ANALYSIS
              </div>
              <p css={styles.aiText}>
                Strong fit for the Lead Front End role — hands-on React &amp; TypeScript experience aligns with core requirements. Focus on AWS architecture depth.
              </p>
            </div>
          </div>

          {/* Job List */}
          <div css={styles.jobsList}>
            {JOBS.map((job) => (
              <div 
                key={job.title} 
                css={styles.jobCard}
                onClick={() => navigate(AppRoutes.JOB_SEARCH)}
              >
                <div css={styles.jobInitial(job.gradient)}>{job.initial}</div>
                <div css={styles.jobMeta}>
                  <div css={styles.jobTitleRow}>
                    <h4 className="job-title" css={styles.jobTitle}>{job.title}</h4>
                    <span css={styles.fitBadge}>{job.fit}% fit</span>
                  </div>
                  <div className="job-sub" css={styles.jobSub}>
                    {job.company} · {job.loc}
                  </div>
                  <div css={styles.activeRow}>
                    <div css={styles.greenDot} />
                    <span css={styles.activeText}>Actively Recruiting</span>
                  </div>
                </div>
                <button className="apply-btn" css={styles.applyBtn}>Apply</button>
              </div>
            ))}

            <div>
              <button 
                css={styles.ctaButton}
                onClick={() => navigate(AppRoutes.JOB_SEARCH)}
              >
                Get Matched Now
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
