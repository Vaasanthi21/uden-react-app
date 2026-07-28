import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Briefcase, Building, MapPin, Star, Sparkles, ArrowRight, FileCheck, CheckCircle2, Award, Users, Bot, BookOpen, Clock, ShieldCheck, ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/consts/routes';

import flowchartImage from "../../../assets/images/flowcharts/1Flowchart.png";
import ParseGif from "../../../assets/images/flowcharts/ParseGif.gif";
import Picture4 from "../../../assets/images/flowcharts/Picture4.jpg";
import Picture5 from "../../../assets/images/flowcharts/Picture5.png";

let StudentRoadmapImage;
try {
  const illustrations = require('../../../utils/consts/uploaded_illustrations');
  StudentRoadmapImage = illustrations.StudentRoadmapImage;
} catch (e) {
  StudentRoadmapImage = null;
}

const jobRecommendations = [
  {
    id: 1,
    title: 'Senior React & Fullstack Developer',
    company: 'Deloitte Digital',
    matchPercentage: 96,
    status: 'Interview Round',
    location: 'Bengaluru (Hybrid)',
    package: '₹7.5L - ₹12.0L / yr',
    tags: ['React 18', 'Next.js', 'TypeScript']
  },
  {
    id: 2,
    title: 'SDE-1 (Java Microservices & AWS)',
    company: 'TCS Digital',
    matchPercentage: 92,
    status: 'Screening Passed',
    location: 'Hyderabad / Pune',
    package: '₹7.0L - ₹9.5L / yr',
    tags: ['Java 17', 'Spring Boot', 'AWS']
  },
  {
    id: 3,
    title: 'AI / Python Data Engineer',
    company: 'Accenture AI Labs',
    matchPercentage: 95,
    status: 'Direct Shortlist',
    location: 'Remote / Global',
    package: '₹6.5L - ₹11.0L / yr',
    tags: ['Python', 'SQL', 'Pandas']
  }
];

const studentBenefits = [
  {
    icon: <Bot size={22} color="#DA532C" />,
    title: 'AI Profile & Match Engine',
    desc: 'Automatically parses your skills, builds ATS-formatted resumes, and matches you with 100,000+ live openings — saving 20 days of manual searching.'
  },
  {
    icon: <BookOpen size={22} color="#DA532C" />,
    title: 'Company PYQs & Round Prep',
    desc: 'Access previous years’ exam papers, selection round criteria, and curated video lessons for Deloitte, TCS NQT, Amazon SDE, and top IT employers.'
  },
  {
    icon: <Users size={22} color="#DA532C" />,
    title: '1-on-1 Industry Mentorship',
    desc: 'Get direct interview feedback and behavioral STAR method coaching from senior engineering leads and placement counselors.'
  },
  {
    icon: <ShieldCheck size={22} color="#DA532C" />,
    title: 'Pre-Vetted Recruiter Shortlists',
    desc: 'Skip 30-day application black holes. Get fast-tracked directly to hiring managers with verified AI video interview scorecards.'
  }
];

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FEF5D8 100%);
    padding: 80px 20px 60px 20px;
    border-bottom: 2px solid rgba(218, 83, 44, 0.2);
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1160px;
    margin: 0 auto;
  `,
  heroGrid: css`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FEF5D8;
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 18px;
    border: 1px solid rgba(255, 176, 32, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  heroTitle: css`
    font-size: 44px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.18;
    margin-bottom: 18px;
    letter-spacing: -0.8px;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,
  heroSub: css`
    font-size: 16.5px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 32px;
    font-weight: 500;
  `,
  btnGroup: css`
    display: flex;
    gap: 14px;
    flex-wrap: wrap;

    @media (max-width: 900px) {
      justify-content: center;
    }
  `,
  primaryBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px 30px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 6px 18px rgba(218, 83, 44, 0.25);

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(218, 83, 44, 0.35);
    }
  `,
  secondaryBtn: css`
    background: #FFFFFF;
    border: 1.5px solid #DA532C;
    color: #DA532C;
    padding: 14px 28px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;

    &:hover {
      background: #FEF5D8;
      transform: translateY(-2px);
    }
  `,
  heroImg: css`
    width: 100%;
    max-height: 340px;
    object-fit: contain;
    border-radius: 24px;
    background: #FFFFFF;
    padding: 14px;
    border: 2px solid #DA532C;
    box-shadow: 0 14px 36px rgba(218, 83, 44, 0.12);
  `,

  /* 4 CORE BENEFITS CARDS GRID */
  benefitsSection: css`
    padding: 80px 20px;
    background: #FFFFFF;
  `,
  sectionHeader: css`
    text-align: center;
    margin-bottom: 48px;

    h2 {
      font-size: 36px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 12px;
      letter-spacing: -0.5px;

      span {
        color: #DA532C;
      }
    }

    p {
      color: #64748B;
      font-size: 16px;
      font-weight: 500;
      max-width: 680px;
      margin: 0 auto;
      line-height: 1.65;
    }
  `,
  cardsGrid: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  benefitCardItem: css`
    background: #FFFDF7;
    border: 1.5px solid rgba(218, 83, 44, 0.25);
    border-radius: 22px;
    padding: 28px;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-6px);
      border-color: #DA532C;
      box-shadow: 0 14px 32px rgba(218, 83, 44, 0.15);
    }

    h3 {
      font-size: 19px;
      font-weight: 800;
      color: #1E293B;
      margin: 16px 0 10px 0;
    }

    p {
      font-size: 14px;
      color: #64748B;
      line-height: 1.6;
      margin: 0;
    }
  `,

  /* COMPRESSED SLEEK FLOWCHART CARD */
  journeySection: css`
    padding: 80px 20px;
    background: linear-gradient(135deg, #FFFDF7 0%, #FEF5D8 100%);
    border-top: 1px solid rgba(218, 83, 44, 0.15);
    border-bottom: 1px solid rgba(218, 83, 44, 0.15);
  `,
  flowchartCard: css`
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 20px;
    box-shadow: 0 10px 28px rgba(218, 83, 44, 0.1);
    text-align: center;
    max-width: 860px;
    margin: 0 auto 56px auto;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 380px;
      object-fit: contain;
      border-radius: 12px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.02);
      }
    }
  `,
  parserGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 44px;
    align-items: center;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,
  parserText: css`
    h3 {
      font-size: 30px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 16px;
      letter-spacing: -0.5px;
    }
    p {
      font-size: 15.5px;
      color: #475569;
      line-height: 1.65;
      margin-bottom: 24px;
    }
  `,
  bulletItem: css`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 14.5px;
    font-weight: 700;
    color: #1E293B;
    margin-bottom: 12px;
  `,
  gifCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 10px 28px rgba(0, 0, 0, 0.04);
    text-align: center;

    img {
      width: 100%;
      max-height: 280px;
      object-fit: contain;
      border-radius: 16px;
    }
  `,

  /* RECOMMENDED JOBS BOARD */
  jobBoardSection: css`
    padding: 80px 20px;
    background: #FFFFFF;
  `,
  boardHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 32px;
    flex-wrap: wrap;
    gap: 16px;

    h2 {
      font-size: 30px;
      font-weight: 900;
      color: #1E293B;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  `,
  filterGroup: css`
    display: flex;
    gap: 10px;
  `,
  filterBtn: (active) => css`
    padding: 8px 20px;
    border-radius: 24px;
    font-size: 13.5px;
    font-weight: 800;
    cursor: pointer;
    border: 1.5px solid ${active ? '#DA532C' : '#E2E8F0'};
    background: ${active ? '#DA532C' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#334155'};
    transition: all 0.25s ease;
    box-shadow: ${active ? '0 4px 14px rgba(218, 83, 44, 0.25)' : 'none'};
  `,
  jobsGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  `,
  jobCard: css`
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 28px;
    box-shadow: 0 8px 24px rgba(218, 83, 44, 0.08);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.35s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 36px rgba(218, 83, 44, 0.16);
    }
  `,
  cardTitle: css`
    font-size: 19px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 8px;
  `,
  metaRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 13.5px;
    color: #64748B;
    font-weight: 600;
    margin-bottom: 14px;
  `,
  matchTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FEF5D8;
    color: #DA532C;
    font-size: 12.5px;
    font-weight: 800;
    padding: 5px 14px;
    border-radius: 14px;
    border: 1px solid rgba(255, 176, 32, 0.6);
    margin-bottom: 18px;
  `,
  tagsRow: css`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  `,
  tag: css`
    background: #FEF5D8;
    color: #DA532C;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 10px;
    border: 1px solid rgba(255, 176, 32, 0.4);
  `,
  applyBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 12px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 14.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;

    &:hover {
      background: #B83D1B;
      box-shadow: 0 6px 18px rgba(218, 83, 44, 0.35);
    }
  `
};

const Benefits = () => {
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();

  const filteredJobs = jobRecommendations.filter(
    (j) => filter === 'all' || j.status.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* 1. Hero Student Placement Accelerator */}
      <div css={styles.heroOuter} className="uden-fade-in">
        <div css={styles.container}>
          <div css={styles.heroGrid}>
            <div>
              <div css={styles.badgeTag} className="uden-float-anim">
                <Sparkles size={14} />
                STUDENT CAREER & PLACEMENT ACCELERATOR
              </div>
              <h1 css={styles.heroTitle}>
                Your AI Career Companion for <span>Placement Success</span>
              </h1>
              <p css={styles.heroSub}>
                Smart AI job matching, company-specific round prep, previous years' exam papers (PYQs), and direct recruiter interview shortlists for Tier 2/3 students across India.
              </p>
              <div css={styles.btnGroup}>
                <button css={styles.primaryBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
                  Search 100,000+ Jobs
                  <ArrowRight size={18} />
                </button>
                <button css={styles.secondaryBtn} onClick={() => navigate(AppRoutes.JOB_SEEKERS)}>
                  Explore Student Benefits
                </button>
              </div>
            </div>

            <div>
              {StudentRoadmapImage ? (
                <img src={StudentRoadmapImage} alt="Student Career Growth Roadmap" css={styles.heroImg} className="uden-card-hover" />
              ) : (
                <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '24px', border: '2px solid #DA532C', textAlign: 'center' }}>
                  <Award size={48} color="#DA532C" />
                  <h3 style={{ color: '#1E293B', marginTop: '14px' }}>AI Career Readiness Engine</h3>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 2. Four Core Student Benefits Grid */}
      <div css={styles.benefitsSection}>
        <div css={styles.container}>
          <div css={styles.sectionHeader}>
            <h2>
              Why Students Choose <span>UDEN.tech</span>
            </h2>
            <p>Everything you need to upskill, prepare for company selection rounds, and get placed at top tech enterprises.</p>
          </div>

          <div css={styles.cardsGrid}>
            {studentBenefits.map((item, idx) => (
              <div key={idx} css={styles.benefitCardItem} className="uden-card-hover">
                <div>{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Placement Journey & AI Resume Parser Demonstration */}
      <div css={styles.journeySection}>
        <div css={styles.container}>
          <div css={styles.sectionHeader}>
            <h2>End-to-End Placement Journey</h2>
            <p>From initial skill assessment to verified AI video scorecards and direct corporate interview shortlists.</p>
          </div>

          {/* Compressed Sleek Flowchart Card */}
          <div css={styles.flowchartCard} className="uden-card-hover">
            <img src={flowchartImage} alt="UDEN Student Placement Flowchart" />
          </div>

          <div css={styles.parserGrid}>
            <div css={styles.parserText}>
              <h3>AI-Powered Resume Parsing & Skill Verification</h3>
              <p>Our engine automatically extracts key competencies, parses tech stacks, and recommends gap-closing courses to make your profile recruiter-ready.</p>
              <div css={styles.bulletItem}>
                <CheckCircle2 size={18} color="#DA532C" />
                <span>Instant AI Skill Profile Score & Competency Radar</span>
              </div>
              <div css={styles.bulletItem}>
                <CheckCircle2 size={18} color="#DA532C" />
                <span>Automated ATS-Optimized Resume Formatting</span>
              </div>
              <div css={styles.bulletItem}>
                <CheckCircle2 size={18} color="#DA532C" />
                <span>Direct Fast-Track to 150+ Direct Hiring Partners</span>
              </div>
            </div>

            <div css={styles.gifCard} className="uden-card-hover">
              <img src={ParseGif} alt="Resume Parsing Engine Animation" />
            </div>
          </div>
        </div>
      </div>

      {/* 4. Interactive Student Opportunities & Job Board */}
      <div css={styles.jobBoardSection}>
        <div css={styles.container}>
          <div css={styles.boardHeader}>
            <h2>
              <Briefcase size={26} color="#DA532C" />
              Recommended Student Placement Opportunities
            </h2>

            <div css={styles.filterGroup}>
              {['All', 'Interview', 'Screening', 'Shortlist'].map((f) => (
                <button 
                  key={f}
                  css={styles.filterBtn(filter.toLowerCase() === f.toLowerCase())}
                  onClick={() => setFilter(f.toLowerCase())}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>

          <div css={styles.jobsGrid}>
            {filteredJobs.map((job) => (
              <div key={job.id} css={styles.jobCard} className="uden-card-hover">
                <div>
                  <h3 css={styles.cardTitle}>{job.title}</h3>
                  <div css={styles.metaRow}>
                    <span>🏢 {job.company}</span>
                    <span>📍 {job.location}</span>
                  </div>

                  <div css={styles.matchTag}>
                    <Star size={14} fill="#DA532C" color="#DA532C" />
                    {job.matchPercentage}% AI Profile Match • {job.status}
                  </div>

                  <div css={styles.tagsRow}>
                    {job.tags.map((t, idx) => (
                      <span key={idx} css={styles.tag}>{t}</span>
                    ))}
                  </div>
                </div>

                <button css={styles.applyBtn} onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
                  Prepare & Apply Now
                  <ArrowRight size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;