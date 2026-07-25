import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Briefcase, Building, MapPin, Star, Sparkles, ArrowRight, FileCheck, CheckCircle2, Award } from 'lucide-react';
import flowchartImage from "../../../assets/images/flowcharts/1Flowchart.png";
import ParseGif from "../../../assets/images/flowcharts/ParseGif.gif";
import Picture4 from "../../../assets/images/flowcharts/Picture4.jpg";
import Picture5 from "../../../assets/images/flowcharts/Picture5.png";

const jobRecommendations = [
  {
    id: 1,
    title: 'Senior React & Fullstack Developer',
    company: 'TechInnovate Solutions',
    matchPercentage: 96,
    status: 'Interview',
    location: 'Remote / India',
    tags: ['React 18', 'Next.js', 'TypeScript']
  },
  {
    id: 2,
    title: 'AWS Cloud & DevOps Specialist',
    company: 'GrowthPath Inc.',
    matchPercentage: 92,
    status: 'Screening',
    location: 'Hybrid / APAC',
    tags: ['AWS', 'Kubernetes', 'Docker']
  },
  {
    id: 3,
    title: 'AI / Python Data Engineer',
    company: 'DataDrive Analytics',
    matchPercentage: 95,
    status: 'Applied',
    location: 'Remote / Global',
    tags: ['Python', 'PyTorch', 'LLMs']
  }
];

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    padding: 64px 16px 50px 16px;
    color: #1E293B;
    text-align: center;
    border-bottom: 4px solid #DA532C;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
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
    margin-bottom: 18px;
    border: 1px solid rgba(218, 83, 44, 0.25);
    text-transform: uppercase;
  `,
  heroTitle: css`
    font-size: 44px;
    font-weight: 900;
    color: #1E293B;
    margin-bottom: 16px;

    span {
      color: #DA532C;
    }
  `,
  heroSub: css`
    font-size: 17px;
    color: #475569;
    max-width: 740px;
    margin: 0 auto 32px auto;
    font-weight: 500;
    line-height: 1.6;
  `,

  /* FLOWCHART & PARSER SECTIONS */
  mediaSection: css`
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 16px;
  `,
  sectionHeader: css`
    text-align: center;
    margin-bottom: 36px;

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
  flowchartCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    text-align: center;
    margin-bottom: 50px;

    img {
      max-width: 100%;
      height: auto;
      border-radius: 16px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.05);
    }
  `,
  parserGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    align-items: center;
    margin-bottom: 60px;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  `,
  parserText: css`
    h3 {
      font-size: 26px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 14px;
    }
    p {
      font-size: 15px;
      color: #475569;
      line-height: 1.65;
      margin-bottom: 24px;
    }
  `,
  bulletItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #334155;
    margin-bottom: 10px;
  `,
  gifCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    text-align: center;

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
    }
  `,

  /* BENEFITS PICTURE GRID */
  benefitsGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;
    margin-bottom: 60px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
  benefitCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.04);

    h4 {
      font-size: 20px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 12px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      margin-bottom: 14px;
    }

    p {
      font-size: 14px;
      color: #64748B;
      line-height: 1.6;
      margin: 0;
    }
  `,

  /* JOB BOARD SECTION */
  jobBoardSection: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  boardHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 16px;

    h2 {
      font-size: 26px;
      font-weight: 800;
      color: #1E293B;
      display: flex;
      align-items: center;
      gap: 10px;
    }
  `,
  filterGroup: css`
    display: flex;
    gap: 8px;
  `,
  filterBtn: (active) => css`
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    border: 1.5px solid ${active ? '#DA532C' : '#CBD5E1'};
    background: ${active ? '#DA532C' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#334155'};
    transition: all 0.2s ease;
  `,
  jobsGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 20px;
  `,
  jobCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.03);
    transition: all 0.3s ease;

    &:hover {
      border-color: #DA532C;
      transform: translateY(-4px);
      box-shadow: 0 12px 28px rgba(218, 83, 44, 0.15);
    }
  `,
  cardTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 6px;
  `,
  metaRow: css`
    display: flex;
    align-items: center;
    gap: 14px;
    font-size: 13px;
    color: #64748B;
    margin-bottom: 14px;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `,
  matchTag: css`
    display: inline-flex;
    align-items: center;
    gap: 4px;
    background: #FFF5F5;
    color: #DA532C;
    font-size: 12px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 12px;
    border: 1px solid #FECDD3;
    margin-bottom: 16px;
  `,
  tagsRow: css`
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
  `,
  tag: css`
    background: #F8FAFC;
    color: #334155;
    font-size: 11.5px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid #E2E8F0;
  `
};

const Benefits = () => {
  const [filter, setFilter] = useState('all');

  const filteredJobs = jobRecommendations.filter(
    (j) => filter === 'all' || j.status.toLowerCase() === filter.toLowerCase()
  );

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. Hero Candidate Career Companion */}
      <div css={styles.heroOuter}>
        <div css={styles.container}>
          <div css={styles.badgeTag}>
            <Sparkles size={14} />
            STUDENT CAREER PORTAL
          </div>
          <h1 css={styles.heroTitle}>
            Your AI Placement & <span>Career Companion</span>
          </h1>
          <p css={styles.heroSub}>
            Smart job matching, real-time resume parsing insights, and interview prep for students and fresh graduates.
          </p>
        </div>
      </div>

      {/* 2. Flowchart & AI Resume Parsing Sections */}
      <div css={styles.mediaSection}>
        <div css={styles.sectionHeader}>
          <h2>End-to-End Student Placement Journey</h2>
          <p>How UDEN takes you from skill assessment to direct corporate interview shortlists.</p>
        </div>

        <div css={styles.flowchartCard}>
          <img src={flowchartImage} alt="UDEN Student Placement Flowchart" />
        </div>

        <div css={styles.parserGrid}>
          <div css={styles.parserText}>
            <h3>AI-Powered Resume Parsing & Skill Verification</h3>
            <p>Our engine automatically extracts key competencies, parses tech stacks, and recommends gap-closing courses to make your profile recruiter-ready.</p>
            <div css={styles.bulletItem}>
              <CheckCircle2 size={16} color="#DA532C" />
              <span>Instant AI Skill Profile Score</span>
            </div>
            <div css={styles.bulletItem}>
              <CheckCircle2 size={16} color="#DA532C" />
              <span>Automated Resume Format Optimization</span>
            </div>
            <div css={styles.bulletItem}>
              <CheckCircle2 size={16} color="#DA532C" />
              <span>Direct Match with 150+ Hiring Partners</span>
            </div>
          </div>

          <div css={styles.gifCard}>
            <img src={ParseGif} alt="Resume Parsing Engine Animation" />
          </div>
        </div>

        {/* 3. Student Career Benefits Grid */}
        <div css={styles.benefitsGrid}>
          <div css={styles.benefitCard}>
            <h4>Personalized Mentor Guidance</h4>
            <img src={Picture4} alt="Personalized Mentor Guidance" />
            <p>Get 1-on-1 feedback from senior tech leads to prepare for technical interviews and system design rounds.</p>
          </div>

          <div css={styles.benefitCard}>
            <h4>Direct Recruiter Interview Shortlists</h4>
            <img src={Picture5} alt="Direct Recruiter Interview Shortlists" />
            <p>Skip standard job application black holes — get fast-tracked straight to hiring managers with verified skill credentials.</p>
          </div>
        </div>
      </div>

      {/* 4. Interactive Student Job Board */}
      <div css={styles.jobBoardSection}>
        <div css={styles.boardHeader}>
          <h2>
            <Briefcase size={24} color="#DA532C" />
            Recommended Campus Drives & Opportunities
          </h2>

          <div css={styles.filterGroup}>
            {['All', 'Applied', 'Interview', 'Screening'].map((f) => (
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
            <div key={job.id} css={styles.jobCard}>
              <h3 css={styles.cardTitle}>{job.title}</h3>
              <div css={styles.metaRow}>
                <span><Building size={14} /> {job.company}</span>
                <span><MapPin size={14} /> {job.location}</span>
              </div>

              <div css={styles.matchTag}>
                <Star size={13} fill="#DA532C" color="#DA532C" />
                {job.matchPercentage}% AI Profile Match • {job.status}
              </div>

              <div css={styles.tagsRow}>
                {job.tags.map((t, idx) => (
                  <span key={idx} css={styles.tag}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Benefits;