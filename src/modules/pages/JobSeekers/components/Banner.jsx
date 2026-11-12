import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { 
  Sparkles, ArrowRight, CheckCircle2, ShieldCheck, UserCheck, TrendingUp, Building,
  FileText, MapPin, Zap, Bookmark, Check, X, Info, Send, RotateCcw, Trash2, Lock
} from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';
import { openBubbleLogin } from 'utils/bubbleAuth';

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%);
    padding: 64px 16px 56px 16px;
    border-bottom: 4px solid #4B638C;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1.05fr;
    gap: 36px;
    align-items: center;

    @media (max-width: 992px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 36px;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FEF5D8;
    color: #F55825;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 18px;
    border: 1px solid #F7BC08;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    align-self: flex-start;

    @media (max-width: 992px) {
      align-self: center;
    }
  `,
  title: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.18;
    margin: 0 0 16px 0;
    letter-spacing: -0.8px;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,
  subtitle: css`
    font-size: 16px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 28px;
    font-weight: 500;
  `,
  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 28px;

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  `,
  statCard: css`
    background: #FFFFFF;
    border: 1.5px solid rgba(247, 188, 8, 0.4);
    border-radius: 16px;
    padding: 14px 18px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  statIcon: css`
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: rgba(75, 99, 140, 0.12);
    color: #4B638C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  statNum: css`
    font-size: 19px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1;
    margin-bottom: 3px;

    span {
      color: #F55825;
    }
  `,
  statLabel: css`
    font-size: 11.5px;
    color: #64748B;
    font-weight: 700;
  `,
  ctaButtonGroup: css`
    display: flex;
    gap: 14px;
    align-items: center;

    @media (max-width: 992px) {
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      width: 100%;
    }
  `,
  primaryBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 14px 28px;
    border-radius: 28px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 8px 20px rgba(245, 88, 37, 0.25);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(245, 88, 37, 0.35);
    }
  `,
  secondaryBtn: css`
    background: #FFFFFF;
    color: #4B638C;
    border: 2px solid #4B638C;
    padding: 13px 24px;
    border-radius: 28px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;

    &:hover {
      background: rgba(75, 99, 140, 0.08);
      transform: translateY(-2px);
    }
  `,

  /* Right Column: Authentic Digiverve UDEN AI Job Assistant Portal UI Mockup */
  rightCol: css`
    position: relative;
    width: 100%;
  `,
  portalWindow: css`
    background: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #E2E8F0;
    box-shadow: 0 20px 48px -10px rgba(15, 23, 42, 0.12), 0 0 0 1px rgba(15, 23, 42, 0.04);
    overflow: hidden;
    position: relative;
    text-align: left;
  `,
  browserBar: css`
    background: #F8FAFC;
    border-bottom: 1px solid #E2E8F0;
    padding: 8px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  trafficLights: css`
    display: flex;
    gap: 6px;
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      display: inline-block;
    }
    .red { background: #EF4444; }
    .yellow { background: #F59E0B; }
    .green { background: #10B981; }
  `,
  urlPill: css`
    flex: 1;
    max-width: 320px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 3px 12px;
    font-size: 11.5px;
    color: #64748B;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: monospace;
    margin: 0 auto;
  `,
  appHeader: css`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #F1F5F9;
    background: #FFFFFF;
  `,
  appLogo: css`
    font-size: 15px;
    font-weight: 900;
    color: #F55825;
    display: flex;
    align-items: center;
    gap: 8px;
    letter-spacing: -0.3px;

    span {
      font-size: 9.5px;
      color: #94A3B8;
      font-weight: 600;
      letter-spacing: 0;
    }
  `,
  appUserCredits: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  creditsBadge: css`
    font-size: 11px;
    color: #0284C7;
    background: #E0F2FE;
    padding: 4px 10px;
    border-radius: 12px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  userAvatarCircle: css`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: #0284C7;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 12px;
  `,
  navTabsBar: css`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 16px;
    border-bottom: 1px solid #E2E8F0;
    background: #FAFAFA;
    overflow-x: auto;
  `,
  navTab: css`
    padding: 9px 4px;
    font-size: 12px;
    font-weight: 700;
    color: #64748B;
    cursor: pointer;
    white-space: nowrap;
    border-bottom: 2px solid transparent;
    display: flex;
    align-items: center;
    gap: 6px;

    &.active {
      color: #2563EB;
      border-bottom-color: #2563EB;
    }
  `,
  portalBody: css`
    padding: 14px 16px 16px 16px;
    background: #F8FAFC;
    display: grid;
    grid-template-columns: 210px 1fr;
    gap: 14px;
    position: relative;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  profileWidget: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 14px;
    padding: 14px;
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  avatarRow: css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 4px;
  `,
  avatarSilhouette: css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background: #E2E8F0;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 2px solid #CBD5E1;
  `,
  aiBadgeFloating: css`
    position: absolute;
    bottom: -4px;
    right: -10px;
    background: #FFFFFF;
    border: 1.5px solid #0EA5E9;
    color: #0284C7;
    font-size: 10px;
    font-weight: 800;
    padding: 1px 6px;
    border-radius: 12px;
  `,
  profileDetails: css`
    text-align: center;
  `,
  candidateNameText: css`
    font-size: 13.5px;
    font-weight: 800;
    color: #0F172A;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 4px;
  `,
  checkBadgeBlue: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #0284C7;
    color: #FFFFFF;
  `,
  candidateSubtitle: css`
    font-size: 10.5px;
    color: #64748B;
    margin-top: 2px;
    line-height: 1.35;
  `,
  candidateLoc: css`
    font-size: 10.5px;
    color: #475569;
    margin-top: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
  `,
  skillPillsContainer: css`
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    justify-content: center;
    margin-top: 4px;
  `,
  skillChip: css`
    background: #EEF2FF;
    color: #4338CA;
    font-size: 10px;
    font-weight: 700;
    padding: 2px 7px;
    border-radius: 6px;
  `,
  metricsMiniGrid: css`
    background: #F8FAFC;
    border-radius: 8px;
    padding: 8px;
    margin-top: 4px;
    font-size: 10px;
    color: #475569;
    line-height: 1.5;

    div {
      display: flex;
      justify-content: space-between;
      span {
        font-weight: 700;
        color: #0F172A;
      }
    }
  `,
  profileFooterTracker: css`
    display: flex;
    justify-content: space-around;
    padding-top: 6px;
    border-top: 1px solid #F1F5F9;
    font-size: 10px;
    font-weight: 800;
    color: #64748B;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `,

  /* Right Side of the Body */
  mainWorkArea: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: relative;
  `,
  resumeFileCard: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  resumeFileLeft: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,
  fileIconBox: css`
    width: 32px;
    height: 32px;
    border-radius: 8px;
    background: #F3E8FF;
    color: #7E22CE;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  resumeFileName: css`
    font-size: 12px;
    font-weight: 800;
    color: #0F172A;
  `,
  resumeFileMeta: css`
    font-size: 10.5px;
    color: #16A34A;
    font-weight: 700;
  `,
  actionStrip: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    flex-wrap: wrap;
  `,
  actionPillText: css`
    font-size: 11px;
    color: #2563EB;
    font-weight: 700;
    cursor: pointer;
  `,
  findJobsBtn: css`
    background: #2563EB;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    padding: 5px 12px;
    font-size: 11px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  matchedHeading: css`
    font-size: 13px;
    font-weight: 800;
    color: #0F172A;
    margin-top: 4px;
    display: flex;
    align-items: center;
    gap: 6px;

    span {
      font-size: 11px;
      font-weight: 500;
      color: #64748B;
    }
  `,
  jobBackdropCard: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 12px;
    opacity: 0.85;
  `,
  jobBackdropHeader: css`
    display: flex;
    gap: 10px;
    align-items: flex-start;
  `,
  companyLogoR: css`
    width: 34px;
    height: 34px;
    border-radius: 8px;
    background: #0284C7;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  jobBackdropTitle: css`
    font-size: 12.5px;
    font-weight: 800;
    color: #0F172A;
    line-height: 1.3;
  `,
  jobBackdropMeta: css`
    font-size: 10.5px;
    color: #64748B;
    margin-top: 2px;
  `,
  jobSubmittedTag: css`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    color: #16A34A;
    font-size: 10.5px;
    font-weight: 700;
    margin-top: 6px;
  `,

  /* Centered Foreground Floating "Skills snapshot" Popover */
  skillsSnapshotPopover: css`
    background: #FFFFFF;
    border-radius: 14px;
    border: 1.5px solid #CBD5E1;
    box-shadow: 0 16px 36px rgba(15, 23, 42, 0.18);
    padding: 14px 16px;
    margin-top: -30px;
    position: relative;
    z-index: 5;
    animation: fadeInPopover 0.3s ease;
  `,
  snapshotHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
    padding-bottom: 8px;
    border-bottom: 1px solid #F1F5F9;
  `,
  snapshotTitle: css`
    font-size: 13.5px;
    font-weight: 800;
    color: #0F172A;
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  fitGaugeRow: css`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 12px;
  `,
  circleGauge: css`
    position: relative;
    width: 52px;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  circleGaugeText: css`
    position: absolute;
    font-size: 13px;
    font-weight: 900;
    color: #0F172A;
  `,
  fitScoreDetails: css`
    display: flex;
    flex-direction: column;
    gap: 2px;
  `,
  fitScoreLabel: css`
    font-size: 11.5px;
    font-weight: 700;
    color: #334155;
    display: flex;
    align-items: center;
    gap: 4px;
  `,
  fitScoreStatus: css`
    font-size: 11px;
    font-weight: 800;
    color: #16A34A;
    span {
      font-weight: 600;
      color: #64748B;
    }
  `,
  skillsGroup: css`
    margin-bottom: 10px;
  `,
  skillsGroupLabel: css`
    font-size: 10px;
    font-weight: 800;
    color: #475569;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    margin-bottom: 4px;

    span {
      color: #EF4444;
    }
  `,
  skillsPillsRow: css`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  `,
  mandatoryPill: css`
    background: #F3E8FF;
    color: #7E22CE;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 6px;
  `,
  matchedPill: css`
    background: #DCFCE7;
    color: #15803D;
    font-size: 11px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 6px;
  `,
  popoverActions: css`
    display: flex;
    gap: 8px;
    margin-top: 12px;
    padding-top: 8px;
    border-top: 1px solid #F1F5F9;
  `,
  appliedStatusBtn: css`
    flex: 1;
    background: #DCFCE7;
    color: #15803D;
    border: 1.5px solid #86EFAC;
    border-radius: 8px;
    padding: 8px;
    font-size: 12px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  `,
  buildSkillsBtn: css`
    flex: 1;
    background: #FFFFFF;
    color: #1E293B;
    border: 1px solid #CBD5E1;
    border-radius: 8px;
    padding: 8px;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s ease;

    &:hover {
      background: #F8FAFC;
      border-color: #94A3B8;
    }
  `
};

const JobSeekerBanner = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = (location?.pathname || (typeof window !== 'undefined' ? window.location.pathname : '')).toLowerCase();
  const isStudents = path.includes('/students') || path.includes('/benefits') || path.includes('/for-students');

  const badgeText = isStudents ? 'STUDENT PLACEMENT & AI PREP' : 'AI JOB MATCHING & CAREER ACCELERATOR';
  const heading = isStudents ? (
    <>AI Mock Interviews &amp; Placement Prep for <span>Students</span></>
  ) : (
    <>AI Job Matching for <span>First-Time Jobseekers</span></>
  );
  const subtitleText = isStudents ? (
    'UDEN offers 24x7 AI mock interviews, resume optimization, and skill assessment for Tier 2/3 college students, with ₹20,000–₹50,000 referral rewards.'
  ) : (
    'UDEN provides AI-matched career guidance, fitment scoring across 13,000+ job openings, and 1-click off-campus applications for first-time jobseekers, with ₹20,000–₹50,000 candidate referral rewards.'
  );

  const primaryBtnText = isStudents ? 'Start Free AI Mock Interview' : 'Search 13,000+ Jobs';
  const primaryBtnAction = () => { if (isStudents) { openBubbleLogin(); } else { navigate('/find-opportunity'); } };

  const secondaryBtnText = isStudents ? 'Explore 2026 Placement Report' : 'AI Student Career Prep';
  const secondaryBtnAction = () => navigate(isStudents ? '/reports/tier-2-3-placement-report-2026' : '/students');

  return (
    <div css={styles.heroOuter} className="uden-fade-in">
      <div css={styles.container}>
        {/* Left Column Candidate Value Proposition */}
        <div>
          <div css={styles.badgeTag} className="uden-float-anim">
            <Sparkles size={14} color="#F7BC08" />
            {badgeText}
          </div>

          <h1 css={styles.title}>
            {heading}
          </h1>

          <p css={styles.subtitle}>
            {subtitleText}
          </p>

          <div css={styles.statsGrid}>
            <div css={styles.statCard}>
              <div css={styles.statIcon}><Building size={20} /></div>
              <div>
                <div css={styles.statNum}>150<span>+</span></div>
                <div css={styles.statLabel}>Hiring Partners</div>
              </div>
            </div>

            <div css={styles.statCard}>
              <div css={styles.statIcon}><TrendingUp size={20} /></div>
              <div>
                <div css={styles.statNum}>₹8.5L</div>
                <div css={styles.statLabel}>Average CTC</div>
              </div>
            </div>

            <div css={styles.statCard}>
              <div css={styles.statIcon}><UserCheck size={20} /></div>
              <div>
                <div css={styles.statNum}>48<span>Hrs</span></div>
                <div css={styles.statLabel}>Direct Shortlist</div>
              </div>
            </div>

            <div css={styles.statCard}>
              <div css={styles.statIcon}><ShieldCheck size={20} /></div>
              <div>
                <div css={styles.statNum}>94<span>%</span></div>
                <div css={styles.statLabel}>Offer Conversion</div>
              </div>
            </div>
          </div>

          <div css={styles.ctaButtonGroup}>
            <button type="button" css={styles.primaryBtn} onClick={primaryBtnAction}>
              {primaryBtnText}
              <ArrowRight size={18} />
            </button>
            <button type="button" css={styles.secondaryBtn} onClick={secondaryBtnAction}>
              {secondaryBtnText}
            </button>
          </div>
        </div>

        {/* Right Column: Authentic UDEN AI Job Assistant Portal UI Mockup */}
        <div css={styles.rightCol}>
          <div css={styles.portalWindow} className="uden-card-hover">
            {/* Browser Frame Top Strip */}
            <div css={styles.browserBar}>
              <div css={styles.trafficLights}>
                <span className="red" />
                <span className="yellow" />
                <span className="green" />
              </div>
              <div css={styles.urlPill}>
                <Lock size={10} color="#64748B" />
                ai-job-assistant.cps.uden.tech/job-search
              </div>
            </div>

            {/* Portal Header */}
            <div css={styles.appHeader}>
              <div css={styles.appLogo}>
                UDEN
                <span>Assess • Upskill • Recruit</span>
              </div>
              <div css={styles.appUserCredits}>
                <div css={styles.creditsBadge}>
                  <Info size={11} />
                  AVAILABLE - 259 | CONSUMED - 141
                </div>
                <div css={styles.userAvatarCircle}>V</div>
              </div>
            </div>

            {/* Tabs Bar */}
            <div css={styles.navTabsBar}>
              <div css={[styles.navTab, css`&.active`]} className="active">
                <Sparkles size={13} color="#2563EB" />
                Matched Jobs (10)
              </div>
              <div css={styles.navTab}>
                <Bookmark size={13} />
                Saved Jobs
              </div>
              <div css={styles.navTab}>
                <Send size={13} />
                Quick Application Tracker (1)
              </div>
              <div css={styles.navTab}>
                Admin Posted / Feed
              </div>
            </div>

            {/* Portal Body with Candidate Profile & Skills Snapshot */}
            <div css={styles.portalBody}>
              {/* Profile Card on Left */}
              <div css={styles.profileWidget}>
                <div css={styles.avatarRow}>
                  <div css={styles.avatarSilhouette}>
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="#94A3B8">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    <div css={styles.aiBadgeFloating}>+ AI</div>
                  </div>
                </div>

                <div css={styles.profileDetails}>
                  <div css={styles.candidateNameText}>
                    VasanthiBojjagani
                    <span css={styles.checkBadgeBlue}>
                      <Check size={9} strokeWidth={3} />
                    </span>
                  </div>
                  <div css={styles.candidateSubtitle}>Building skills with Uden Tech learning paths</div>
                  <div css={styles.candidateLoc}>
                    <MapPin size={10} color="#64748B" /> Bengaluru, Karnataka
                  </div>
                </div>

                <div css={styles.skillPillsContainer}>
                  <span css={styles.skillChip}>JavaScript</span>
                  <span css={styles.skillChip}>TypeScript</span>
                  <span css={styles.skillChip}>Python</span>
                  <span css={styles.skillChip}>Java</span>
                  <span css={styles.skillChip}>SQL</span>
                  <span css={[styles.skillChip, css`background: #F1F5F9; color: #64748B;`]}>+18 more</span>
                </div>

                <div css={styles.metricsMiniGrid}>
                  <div>EXPERIENCE: <span>0.7 yrs</span></div>
                  <div>CURRENT SALARY: <span>₹ 3.0L</span></div>
                  <div>EXPECTED SALARY: <span>₹ 6.0L</span></div>
                </div>

                <div css={styles.profileFooterTracker}>
                  <span><Send size={11} color="#0284C7" /> 1 APPLIED</span>
                  <span><Bookmark size={11} color="#7E22CE" /> 0 SAVED</span>
                </div>
              </div>

              {/* Work Area on Right */}
              <div css={styles.mainWorkArea}>
                {/* Uploaded Resume File Pill */}
                <div css={styles.resumeFileCard}>
                  <div css={styles.resumeFileLeft}>
                    <div css={styles.fileIconBox}>
                      <FileText size={18} />
                    </div>
                    <div>
                      <div css={styles.resumeFileName}>VASANTHI BOJJAGANI.docx</div>
                      <div css={styles.resumeFileMeta}>16.0 KB • Ready</div>
                    </div>
                  </div>
                  <Trash2 size={14} color="#94A3B8" />
                </div>

                {/* Job Search & Reset Controls */}
                <div css={styles.actionStrip}>
                  <span css={styles.actionPillText}>+ Got a job description? Add it here</span>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <span style={{ fontSize: '11px', color: '#64748B', display: 'flex', alignItems: 'center', gap: '3px', cursor: 'pointer' }}>
                      <RotateCcw size={10} /> Reset All
                    </span>
                    <button type="button" css={styles.findJobsBtn}>
                      + Find Jobs 4 filters
                    </button>
                  </div>
                </div>

                {/* Matched Heading */}
                <div css={styles.matchedHeading}>
                  <Sparkles size={14} color="#2563EB" />
                  Matched for you
                  <span>(Ranked by fit with your learning path)</span>
                </div>

                {/* Background Job Card */}
                <div css={styles.jobBackdropCard}>
                  <div css={styles.jobBackdropHeader}>
                    <div css={styles.companyLogoR}>R</div>
                    <div>
                      <div css={styles.jobBackdropTitle}>Associate Software Engineer, No...</div>
                      <div css={styles.jobBackdropMeta}>ResMed • 📍 Bangalore, India • Full-time • Remote</div>
                      <div css={styles.jobSubmittedTag}>
                        <Check size={11} strokeWidth={3} /> Application submitted
                      </div>
                    </div>
                  </div>
                </div>

                {/* Foreground Floating "Skills snapshot" Popover */}
                <div css={styles.skillsSnapshotPopover}>
                  <div css={styles.snapshotHeader}>
                    <div css={styles.snapshotTitle}>
                      <Sparkles size={14} color="#7E22CE" />
                      Skills snapshot
                    </div>
                    <X size={14} color="#64748B" style={{ cursor: 'pointer' }} />
                  </div>

                  <div css={styles.fitGaugeRow}>
                    <div css={styles.circleGauge}>
                      <svg width="52" height="52" viewBox="0 0 36 36">
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#E2E8F0"
                          strokeWidth="3.5"
                        />
                        <path
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="#10B981"
                          strokeWidth="3.5"
                          strokeDasharray="97, 100"
                        />
                      </svg>
                      <div css={styles.circleGaugeText}>97%</div>
                    </div>

                    <div css={styles.fitScoreDetails}>
                      <div css={styles.fitScoreLabel}>
                        AI Fit Score <Info size={11} color="#64748B" />
                      </div>
                      <div css={styles.fitScoreStatus}>
                        STRONG FIT <span>• 100% skill coverage</span>
                      </div>
                    </div>
                  </div>

                  <div css={styles.skillsGroup}>
                    <div css={styles.skillsGroupLabel}>
                      MANDATORY SKILLS <span>*</span>
                    </div>
                    <div css={styles.skillsPillsRow}>
                      <span css={styles.mandatoryPill}>Node.js</span>
                      <span css={styles.mandatoryPill}>React.js</span>
                      <span css={styles.mandatoryPill}>JavaScript</span>
                    </div>
                  </div>

                  <div css={styles.skillsGroup}>
                    <div css={styles.skillsGroupLabel}>
                      <span style={{ color: '#16A34A', marginRight: '4px' }}>●</span> MATCHED
                    </div>
                    <div css={styles.skillsPillsRow}>
                      <span css={styles.matchedPill}>Node.js</span>
                      <span css={styles.matchedPill}>React.js</span>
                      <span css={styles.matchedPill}>JavaScript</span>
                    </div>
                  </div>

                  <div css={styles.popoverActions}>
                    <div css={styles.appliedStatusBtn}>
                      <Check size={13} strokeWidth={3} /> Applied
                    </div>
                    <button type="button" css={styles.buildSkillsBtn}>
                      <Zap size={13} color="#F59E0B" fill="#F59E0B" /> Build skills
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerBanner;
