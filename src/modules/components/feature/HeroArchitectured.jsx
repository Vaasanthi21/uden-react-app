import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { 
  Sparkles, ArrowRight, Calendar, GraduationCap, Building2, Briefcase, 
  CheckCircle2, ShieldCheck, Video, FileText, Target, BookOpen, BarChart3, 
  Handshake, Gift, Star, Award, Award as WreathIcon, Smartphone, Play, Bot, TrendingUp
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/consts/routes';

const floatAnim = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const pulseDot = keyframes`
  0% { opacity: 0.3; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(0.9); }
`;

const styles = {
  heroOuter: css`
    position: relative;
    padding: 60px 20px 50px 20px;
    background: linear-gradient(180deg, #FFFDF7 0%, #FFFFFF 100%);
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    border-bottom: 1px solid #FEF5D8;
    overflow: hidden;

    @media (max-width: 640px) {
      padding: 36px 12px 30px 12px;
    }
  `,
  container: css`
    max-width: 1240px;
    margin: 0 auto;
  `,
  topGrid: css`
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 40px;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  `,

  /* LEFT HAND NARRATIVE & TRIAD CARDS */
  leftCol: css`
    display: flex;
    flex-direction: column;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FFF5F0;
    color: #F55825;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 20px;
    border: 1px solid #FFDDD1;
    align-self: flex-start;
    letter-spacing: 0.3px;
  `,
  title: css`
    font-size: 48px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.14;
    margin: 0 0 18px 0;
    letter-spacing: -1.2px;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 32px;
      letter-spacing: -0.5px;
    }
  `,
  subtitle: css`
    font-size: 16px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 28px;
    font-weight: 500;

    .hl-student { color: #F55825; font-weight: 700; }
    .hl-college { color: #2563EB; font-weight: 700; }
    .hl-recruiter { color: #16A34A; font-weight: 700; }
  `,
  ctaRow: css`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    flex-wrap: wrap;
  `,
  primaryBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 15px 32px;
    border-radius: 30px;
    font-size: 15.5px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 8px 20px rgba(245, 88, 37, 0.28);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(245, 88, 37, 0.38);
    }
  `,
  secondaryBtn: css`
    background: #FFFFFF;
    color: #1E293B;
    border: 1.5px solid #CBD5E1;
    padding: 15px 28px;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.25s ease;

    &:hover {
      border-color: #F55825;
      color: #F55825;
      transform: translateY(-2px);
    }
  `,
  trustSubline: css`
    font-size: 13px;
    font-weight: 700;
    color: #64748B;
    display: flex;
    align-items: center;
    gap: 6px;
    margin-bottom: 32px;
    flex-wrap: wrap;

    span {
      color: #1E293B;
      font-weight: 800;
    }
  `,

  /* 3 STAKEHOLDER CARDS GRID */
  triadGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 14px;
    margin-bottom: 12px;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      gap: 12px;
    }
  `,
  studentCard: css`
    background: #FFF7ED;
    border: 1.5px solid #FFEDD5;
    border-radius: 18px;
    padding: 18px 16px;
    transition: all 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(245, 88, 37, 0.1);
    }
  `,
  collegeCard: css`
    background: #EFF6FF;
    border: 1.5px solid #DBEAFE;
    border-radius: 18px;
    padding: 18px 16px;
    transition: all 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(37, 99, 235, 0.1);
    }
  `,
  recruiterCard: css`
    background: #F0FDF4;
    border: 1.5px solid #DCFCE7;
    border-radius: 18px;
    padding: 18px 16px;
    transition: all 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 20px rgba(22, 163, 74, 0.1);
    }
  `,
  cardHeader: css`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
    font-size: 15px;
    font-weight: 900;
    color: #1E293B;
  `,
  cardList: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 12px;
    font-weight: 700;
    color: #334155;
  `,
  cardItem: css`
    display: flex;
    align-items: center;
    gap: 6px;
  `,

  /* RIGHT HAND DASHBOARD & PHONE MOCKUP PREVIEW */
  previewWrapper: css`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  desktopMockup: css`
    width: 100%;
    max-width: 620px;
    background: #1E293B;
    border-radius: 24px;
    box-shadow: 0 25px 60px -15px rgba(30, 41, 59, 0.35);
    border: 2px solid #334155;
    overflow: hidden;
    color: #FFFFFF;
  `,
  dashHeader: css`
    background: #0F172A;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #334155;
  `,
  dashDots: css`
    display: flex;
    gap: 6px;
    span {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #475569;
    }
  `,
  dashTitle: css`
    font-size: 11.5px;
    font-weight: 800;
    color: #94A3B8;
    letter-spacing: 0.5px;
  `,
  dashBody: css`
    display: grid;
    grid-template-columns: 140px 1fr;
    background: #F8FAFC;
    color: #1E293B;
    min-height: 380px;

    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  sidebar: css`
    background: #0F172A;
    padding: 16px 12px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: #94A3B8;
    font-size: 11px;
    font-weight: 700;

    .active-item {
      background: #F55825;
      color: #FFFFFF;
      padding: 8px 10px;
      border-radius: 10px;
    }
    .item {
      padding: 6px 10px;
      display: flex;
      align-items: center;
      gap: 6px;
    }

    @media (max-width: 640px) {
      display: none;
    }
  `,
  mainCanvas: css`
    padding: 18px;
    background: #FFFFFF;
  `,
  welcomeBanner: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
    h4 {
      font-size: 14px;
      font-weight: 900;
      color: #1E293B;
      margin: 0;
    }
    p {
      font-size: 11px;
      color: #64748B;
      margin: 2px 0 0 0;
    }
  `,
  ptsPill: css`
    background: #FFF7ED;
    border: 1px solid #FFEDD5;
    color: #F55825;
    padding: 3px 10px;
    border-radius: 14px;
    font-size: 11px;
    font-weight: 800;
  `,
  widgetsGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;

    @media (max-width: 480px) {
      grid-template-columns: 1fr;
    }
  `,
  widgetBox: css`
    background: #F8FAFC;
    border: 1.5px solid #E2E8F0;
    border-radius: 14px;
    padding: 12px;
  `,
  wTitle: css`
    font-size: 11.5px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 4px 0;
  `,
  wSub: css`
    font-size: 10px;
    color: #64748B;
    margin-bottom: 8px;
  `,
  matchRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 10.5px;
    padding: 4px 0;
    border-bottom: 1px solid #F1F5F9;

    .m-title {
      font-weight: 800;
      color: #1E293B;
    }
    .m-score {
      color: #10B981;
      font-weight: 900;
    }
  `,

  /* FLOATING SMARTPHONE MOCKUP OVERLAY */
  mobileOverlay: css`
    position: absolute;
    bottom: -20px;
    right: -20px;
    width: 175px;
    background: #000000;
    border-radius: 28px;
    padding: 8px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
    border: 3px solid #334155;
    animation: ${floatAnim} 4s ease-in-out infinite;

    @media (max-width: 768px) {
      display: none;
    }
  `,
  phoneInner: css`
    background: #FFFFFF;
    border-radius: 22px;
    padding: 10px;
    color: #1E293B;
    font-size: 10px;
  `,

  /* HORIZONTAL CORE MODULES STRIP */
  modulesStrip: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #FFFDF4;
    border: 1.5px solid #FEF5D8;
    border-radius: 24px;
    padding: 18px 24px;
    margin-top: 48px;
    flex-wrap: wrap;
    gap: 16px;

    @media (max-width: 900px) {
      justify-content: center;
      padding: 16px 12px;
    }
  `,
  moduleItem: css`
    display: flex;
    align-items: center;
    gap: 10px;

    .m-icon-bg {
      width: 36px;
      height: 36px;
      border-radius: 12px;
      background: #FFF5F0;
      color: #F55825;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .m-label {
      font-size: 13px;
      font-weight: 800;
      color: #1E293B;
      margin: 0;
    }

    .m-sub {
      font-size: 11px;
      color: #64748B;
      margin-top: 1px;
      font-weight: 600;
    }
  `,

  /* TRUSTED & SUPPORTED BY LOGOS ROW */
  trustedOuter: css`
    margin-top: 40px;
    text-align: center;
  `,
  trustedLabel: css`
    font-size: 12.5px;
    font-weight: 800;
    color: #64748B;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 20px;
  `,
  logosRow: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 28px;
    flex-wrap: wrap;
  `,
  logoPill: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 16px;
    padding: 8px 18px;
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 12.5px;
    font-weight: 800;
    color: #334155;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    transition: all 0.2s ease;

    &:hover {
      border-color: #F55825;
      transform: translateY(-1px);
    }
  `,
  wreathPill: css`
    background: linear-gradient(135deg, #FFFDF0 0%, #FFF5F0 100%);
    border: 1.5px solid #F7BC08;
    color: #D97706;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 900;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  `
};

export default function HeroArchitectured() {
  const navigate = useNavigate();

  return (
    <div css={styles.heroOuter}>
      <div css={styles.container}>
        
        {/* Top Grid: Hero Left Narrative & Right Dashboard Mockup */}
        <div css={styles.topGrid}>
          
          {/* Left Column: Heading, CTAs & 3-Stakeholder Cards */}
          <div css={styles.leftCol}>
            <div css={styles.badgeTag} className="uden-float-anim">
              <Sparkles size={14} color="#F55825" />
              AI-First Campus Placement System (CPS)
            </div>

            <h1 css={styles.title}>
              AI-Powered Career Transformation <span>Platform</span>
            </h1>

            <p css={styles.subtitle}>
              Bridging <span className="hl-student">Students</span>, <span className="hl-college">Colleges</span> and <span className="hl-recruiter">Recruiters</span> through AI-powered career intelligence, interview preparation, resume optimization, placement automation and smart hiring.
            </p>

            <div css={styles.ctaRow}>
              <button 
                css={styles.primaryBtn}
                onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
                className="uden-pulse-btn"
              >
                Get Started Free
                <ArrowRight size={18} />
              </button>

              <button 
                css={styles.secondaryBtn}
                onClick={() => navigate('/campus-partner-form')}
              >
                <Calendar size={16} color="#F55825" />
                Book a Demo
              </button>
            </div>

            <div css={styles.trustSubline}>
              <ShieldCheck size={16} color="#10B981" />
              <span>Trusted by 100+ Colleges</span> • <span>70+ Recruiters</span> • <span>Thousands of Students</span>
            </div>

            {/* Triad Grid: For Students, For Colleges, For Recruiters */}
            <div css={styles.triadGrid}>
              
              {/* For Students Card */}
              <div 
                css={styles.studentCard}
                onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
                style={{ cursor: 'pointer' }}
              >
                <div css={styles.cardHeader}>
                  <GraduationCap size={18} color="#F55825" />
                  For Students
                </div>
                <div css={styles.cardList}>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#F55825" /> AI Interview Practice</div>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#F55825" /> Resume Builder</div>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#F55825" /> Learning Roadmaps</div>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#F55825" /> Job Matching</div>
                </div>
              </div>

              {/* For Colleges Card */}
              <div 
                css={styles.collegeCard}
                onClick={() => navigate('/campus-partner-form')}
                style={{ cursor: 'pointer' }}
              >
                <div css={styles.cardHeader}>
                  <Building2 size={18} color="#2563EB" />
                  For Colleges
                </div>
                <div css={styles.cardList}>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#2563EB" /> Placement Automation</div>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#2563EB" /> Student Analytics</div>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#2563EB" /> Skill Gap Analysis</div>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#2563EB" /> Reports &amp; Insights</div>
                </div>
              </div>

              {/* For Recruiters Card */}
              <div 
                css={styles.recruiterCard}
                onClick={() => navigate(AppRoutes.FIND_TALENT)}
                style={{ cursor: 'pointer' }}
              >
                <div css={styles.cardHeader}>
                  <Briefcase size={18} color="#16A34A" />
                  For Recruiters
                </div>
                <div css={styles.cardList}>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#16A34A" /> AI Shortlisting</div>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#16A34A" /> Candidate Ranking</div>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#16A34A" /> ATS Integration</div>
                  <div css={styles.cardItem}><CheckCircle2 size={13} color="#16A34A" /> Faster Hiring</div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Dashboard UI Window & Smartphone Overlay */}
          <div css={styles.previewWrapper}>
            <div css={styles.desktopMockup}>
              
              {/* Desktop Header */}
              <div css={styles.dashHeader}>
                <div css={styles.dashDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div css={styles.dashTitle}>UDEN Assess • Upskill • Recruit</div>
              </div>

              {/* Desktop Main Body */}
              <div css={styles.dashBody}>
                
                {/* Sidebar */}
                <div css={styles.sidebar}>
                  <div className="active-item">📊 Dashboard</div>
                  <div className="item">🎙️ AI Interview</div>
                  <div className="item">📄 Resume Builder</div>
                  <div className="item">🎯 Job Matches</div>
                  <div className="item">📖 Learning Path</div>
                  <div className="item">🤖 Assistant</div>
                </div>

                {/* Main Workspace */}
                <div css={styles.mainCanvas}>
                  <div css={styles.welcomeBanner}>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, margin: 0, color: '#1E293B' }}>Welcome back, Ananya 👋</h3>
                      <p>Continue your career transformation journey.</p>
                    </div>
                    <span css={styles.ptsPill}>✨ 12,400 Points</span>
                  </div>

                  <div css={styles.widgetsGrid}>
                    
                    {/* Widget 1: AI Interview Simulation */}
                    {/* Widget 1: Practice Points */}
                    <div css={styles.widgetBox}>
                      <div css={styles.wTitle}>Practice Points</div>
                      <span style={{ background: '#FFFBEB', color: '#B45309', fontSize: '10px', padding: '3px 8px', borderRadius: '10px', fontWeight: 800 }}>✨ 12,400 Points</span>
                    </div>

                    {/* Widget 2: Resume Score */}
                    <div css={styles.widgetBox}>
                      <div css={styles.wTitle}>Resume Score</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ fontSize: '18px', fontWeight: 900, color: '#D93805' }}>85</span>
                        <span style={{ fontSize: '10px', color: '#15803D', fontWeight: 700 }}>Great! Strong Resume</span>
                      </div>
                    </div>

                    {/* Widget 3: Job Matches */}
                    <div css={styles.widgetBox} style={{ gridColumn: 'span 2' }}>
                      <div css={styles.wTitle}>Job Matches for You</div>
                      <div css={styles.matchRow}>
                        <span className="m-title">Software Engineer (TCS · Bangalore)</span>
                        <span className="m-score">96% Match</span>
                      </div>
                      <div css={styles.matchRow}>
                        <span className="m-title">Data Analyst (Deloitte · Hyderabad)</span>
                        <span className="m-score">92% Match</span>
                      </div>
                      <div css={styles.matchRow}>
                        <span className="m-title">Product Analyst (Zoho · Chennai)</span>
                        <span className="m-score">90% Match</span>
                      </div>
                    </div>

                  </div>
                </div>

              </div>

            </div>

            {/* Mobile Phone Mockup Overlay */}
            <div css={styles.mobileOverlay}>
              <div css={styles.phoneInner}>
                <div style={{ fontWeight: 900, fontSize: '11px', marginBottom: '4px' }}>Hi Ananya 👋</div>
                <div style={{ background: '#F55825', color: '#FFF', padding: '6px', borderRadius: '8px', marginBottom: '6px', fontWeight: 800 }}>
                  AI Interview
                </div>
                <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', padding: '6px', borderRadius: '8px' }}>
                  <span style={{ fontSize: '9px', color: '#64748B' }}>Resume Score</span>
                  <div style={{ fontWeight: 900, color: '#15803D', fontSize: '14px' }}>85 / 100</div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Horizontal Core Platform Feature Modules Bar */}
        <div css={styles.modulesStrip}>
          
          <div css={styles.moduleItem}>
            <div className="m-icon-bg"><Video size={18} /></div>
            <div>
              <p className="m-label">AI Interview</p>
              <p className="m-sub">Simulation</p>
            </div>
          </div>

          <div css={styles.moduleItem}>
            <div className="m-icon-bg"><FileText size={18} /></div>
            <div>
              <p className="m-label">AI Resume</p>
              <p className="m-sub">&amp; Cover Letter</p>
            </div>
          </div>

          <div css={styles.moduleItem}>
            <div className="m-icon-bg"><Target size={18} /></div>
            <div>
              <p className="m-label">Smart Job</p>
              <p className="m-sub">Matching</p>
            </div>
          </div>

          <div css={styles.moduleItem}>
            <div className="m-icon-bg"><BookOpen size={18} /></div>
            <div>
              <p className="m-label">Personalized</p>
              <p className="m-sub">Learning Path</p>
            </div>
          </div>

          <div css={styles.moduleItem}>
            <div className="m-icon-bg"><BarChart3 size={18} /></div>
            <div>
              <p className="m-label">Skill Gap</p>
              <p className="m-sub">Analysis</p>
            </div>
          </div>

          <div css={styles.moduleItem}>
            <div className="m-icon-bg"><Handshake size={18} /></div>
            <div>
              <p className="m-label">Placement</p>
              <p className="m-sub">Automation</p>
            </div>
          </div>

          <div css={styles.moduleItem}>
            <div className="m-icon-bg"><Gift size={18} /></div>
            <div>
              <p className="m-label">Referral &amp; Rewards</p>
              <p className="m-sub">Earn While You Grow</p>
            </div>
          </div>

        </div>

        {/* Trusted & Supported By Logos Strip */}
        <div css={styles.trustedOuter}>
          <div css={styles.trustedLabel}>Trusted &amp; Supported By</div>
          <div css={styles.logosRow}>
            
            <div css={styles.logoPill}>
              <span style={{ color: '#00A4EF', fontWeight: 900 }}>❖</span> Microsoft <span style={{ fontSize: '11px', color: '#64748B' }}>Founders Hub</span>
            </div>

            <div css={styles.logoPill}>
              <span style={{ color: '#76B900', fontWeight: 900 }}>▲</span> NVIDIA <span style={{ fontSize: '11px', color: '#64748B' }}>INCEPTION PROGRAM</span>
            </div>

            <div css={styles.logoPill}>
              <span style={{ color: '#FF9900', fontWeight: 900 }}>aws</span> EdStart
            </div>

            <div css={styles.logoPill}>
              <span style={{ color: '#E11D48', fontWeight: 900 }}>TiE</span> Fostering Entrepreneurship
            </div>

            <div css={styles.logoPill}>
              <span style={{ color: '#2563EB', fontWeight: 900 }}>NSRCEL</span> IIMB, Bangalore
            </div>

            <div css={styles.wreathPill}>
              <WreathIcon size={16} />
              Building Bharat's AI-First Career Ecosystem
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
