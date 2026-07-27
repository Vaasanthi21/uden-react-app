import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { Search, MapPin, Sparkles, ArrowRight, Globe, Filter, DollarSign, Users, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const floatAnim = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const styles = {
  sectionOuter: css`
    width: 100%;
    background: linear-gradient(135deg, #FFFDF7 0%, #FEF5D8 100%);
    padding: 80px 20px;
    position: relative;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1160px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  `,
  header: css`
    text-align: center;
    margin-bottom: 44px;

    h2 {
      font-size: 38px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 14px;
      letter-spacing: -0.8px;

      span {
        color: #DA532C;
      }
    }

    p {
      color: #475569;
      font-size: 16px;
      font-weight: 500;
      max-width: 760px;
      margin: 0 auto;
      line-height: 1.65;
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
    margin-bottom: 16px;
    border: 1px solid rgba(255, 176, 32, 0.6);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,

  /* VALUE HIGHLIGHT BAR (SAVING 20 DAYS & REFERRAL REWARDS) */
  valueHighlightBar: css`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 32px;
    flex-wrap: wrap;
  `,
  valuePill: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FFFFFF;
    border: 1.5px solid #DA532C;
    color: #1E293B;
    padding: 10px 20px;
    border-radius: 24px;
    font-size: 13.5px;
    font-weight: 800;
    box-shadow: 0 4px 14px rgba(218, 83, 44, 0.1);

    span {
      color: #DA532C;
    }
  `,

  /* SEARCH CARD CONTAINER */
  searchCard: css`
    background: #FFFDF7;
    border: 1.5px solid rgba(218, 83, 44, 0.25);
    border-radius: 28px;
    padding: 32px;
    box-shadow: 0 12px 32px rgba(218, 83, 44, 0.08);
    margin-bottom: 48px;
  `,
  inputGrid: css`
    display: grid;
    grid-template-columns: 1.4fr 1fr 1fr auto;
    gap: 16px;
    align-items: center;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,
  inputPill: css`
    display: flex;
    align-items: center;
    gap: 10px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 12px 18px;
    transition: all 0.3s ease;

    &:focus-within {
      border-color: #DA532C;
      box-shadow: 0 4px 14px rgba(218, 83, 44, 0.15);
    }

    input, select {
      border: none;
      outline: none;
      background: transparent;
      width: 100%;
      font-size: 14.5px;
      font-weight: 600;
      color: #1E293B;
      font-family: 'Plus Jakarta Sans', sans-serif;

      &::placeholder {
        color: #94A3B8;
      }
    }
  `,
  searchBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px 28px;
    border-radius: 20px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 6px 18px rgba(218, 83, 44, 0.3);
    white-space: nowrap;
    font-family: 'Plus Jakarta Sans', sans-serif;

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 8px 22px rgba(218, 83, 44, 0.45);
    }
  `,
  boardBadgesRow: css`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 24px;
    padding-top: 20px;
    border-top: 1px dashed rgba(218, 83, 44, 0.25);
    font-size: 13.5px;
    color: #475569;
    font-weight: 700;
  `,
  boardPill: css`
    background: #FEF5D8;
    color: #DA532C;
    border: 1px solid rgba(255, 176, 32, 0.6);
    padding: 5px 16px;
    border-radius: 18px;
    font-size: 12.5px;
    font-weight: 800;
    transition: transform 0.25s ease;

    &:hover {
      transform: scale(1.05);
    }
  `,

  /* 3 JOB CARDS MATCHING SCREENSHOT EXACTLY */
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
    box-shadow: 0 10px 28px rgba(218, 83, 44, 0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 36px rgba(218, 83, 44, 0.18);
    }
  `,
  jobHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
  `,
  companyTag: css`
    font-size: 13px;
    font-weight: 800;
    color: #DA532C;
    background: rgba(218, 83, 44, 0.1);
    padding: 5px 12px;
    border-radius: 10px;
  `,
  sourceBoardTag: css`
    font-size: 11.5px;
    font-weight: 700;
    color: #DA532C;
    background: #FEF5D8;
    border: 1px solid rgba(255, 176, 32, 0.5);
    padding: 4px 10px;
    border-radius: 8px;
  `,
  jobTitle: css`
    font-size: 19.5px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 12px;
    line-height: 1.35;
    letter-spacing: -0.3px;
  `,
  jobMeta: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 14px;
    color: #475569;
    font-weight: 600;
    margin-bottom: 20px;
  `,
  tagsRow: css`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  `,
  skillTag: css`
    background: #FEF5D8;
    border: 1px solid rgba(255, 176, 32, 0.4);
    color: #DA532C;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 12px;
  `,
  applyBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 13px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 14.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
    font-family: 'Plus Jakarta Sans', sans-serif;

    &:hover {
      background: #B83D1B;
      box-shadow: 0 6px 18px rgba(218, 83, 44, 0.35);
    }
  `
};

const sampleJobs = [
  {
    title: 'Frontend Engineer (React 18 & TypeScript)',
    company: 'Deloitte Digital',
    board: 'Direct Hiring Partner',
    location: 'Bengaluru (Hybrid)',
    package: '₹7.5L - ₹12.0L / yr',
    skills: ['React 18', 'TypeScript', 'Next.js', 'Redux']
  },
  {
    title: 'SDE-1 (Java Microservices & AWS)',
    company: 'TCS Digital',
    board: 'AI Crawled Opening',
    location: 'Hyderabad / Pune',
    package: '₹7.0L - ₹9.5L / yr',
    skills: ['Java 17', 'Spring Boot', 'AWS', 'Docker']
  },
  {
    title: 'Data Analyst & Python Developer',
    company: 'Accenture AI Labs',
    board: 'Direct Hiring Partner',
    location: 'Remote / Work From Home',
    package: '₹6.5L - ₹11.0L / yr',
    skills: ['Python', 'SQL', 'Pandas', 'PowerBI']
  }
];

const MultiJobSearch = () => {
  const [roleQuery, setRoleQuery] = useState('');
  const [location, setLocation] = useState('');
  const [workModel, setWorkModel] = useState('all');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(AppRoutes.FIND_OPPORTUNITY);
  };

  return (
    <div css={styles.sectionOuter} className="uden-fade-in">
      <div css={styles.container}>
        <div css={styles.header}>
          <div css={styles.badgeTag} className="uden-float-anim">
            <Sparkles size={14} />
            AI-POWERED MATCHING COMPANION
          </div>
          <h2>
            Search <span>100,000+ Jobs</span> & Save 20 Days Manually
          </h2>
          <p>
            UDEN’s AI companion understands your profile to eliminate manual job searching. Plus, get paid cash rewards while searching by referring friends!
          </p>
        </div>

        {/* Value Highlights Pill Bar */}
        <div css={styles.valueHighlightBar}>
          <div css={styles.valuePill}>
            <Clock size={16} color="#DA532C" />
            <span>Saves 20 Days</span> of Manual Job Searching
          </div>
          <div css={styles.valuePill}>
            <Users size={16} color="#DA532C" />
            Direct Partner Postings (Growing Daily)
          </div>
          <div css={styles.valuePill}>
            <DollarSign size={16} color="#DA532C" />
            <span>Get Paid</span> by Referring Friends
          </div>
        </div>

        {/* Search Card Pill Container */}
        <div css={styles.searchCard}>
          <form onSubmit={handleSearchSubmit} css={styles.inputGrid}>
            <div css={styles.inputPill}>
              <Search size={18} color="#DA532C" />
              <input 
                type="text" 
                placeholder="Search title, skills (e.g. React, Python)"
                value={roleQuery}
                onChange={(e) => setRoleQuery(e.target.value)}
              />
            </div>

            <div css={styles.inputPill}>
              <MapPin size={18} color="#DA532C" />
              <input 
                type="text" 
                placeholder="Location (e.g. Bengaluru)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <div css={styles.inputPill}>
              <Filter size={18} color="#DA532C" />
              <select value={workModel} onChange={(e) => setWorkModel(e.target.value)}>
                <option value="all">All Work Models</option>
                <option value="remote">Remote / WFH</option>
                <option value="hybrid">Hybrid</option>
                <option value="onsite">On-Site</option>
              </select>
            </div>

            <button type="submit" css={styles.searchBtn} className="uden-pulse-btn">
              Search Openings
              <ArrowRight size={18} />
            </button>
          </form>

          {/* Aggregating Live Openings Pill Row */}
          <div css={styles.boardBadgesRow}>
            <span>AI Match Engine Highlights:</span>
            <span css={styles.boardPill}>Direct Enterprise Partner Postings</span>
            <span css={styles.boardPill}>AI Job Crawling Engine</span>
            <span css={styles.boardPill}>Refer & Earn Rewards</span>
            <span css={styles.boardPill}>20 Days Time Saved</span>
          </div>
        </div>

        {/* 3 Job Cards matching UDEN brand colors */}
        <div css={styles.jobsGrid}>
          {sampleJobs.map((job, idx) => (
            <div key={idx} css={styles.jobCard} className="uden-card-hover">
              <div>
                <div css={styles.jobHeader}>
                  <span css={styles.companyTag}>{job.company}</span>
                  <span css={styles.sourceBoardTag}>{job.board}</span>
                </div>
                <h3 css={styles.jobTitle}>{job.title}</h3>
                <div css={styles.jobMeta}>
                  <span>📍 {job.location}</span>
                  <span style={{ color: '#DA532C', fontWeight: '800' }}>💰 {job.package}</span>
                </div>
                <div css={styles.tagsRow}>
                  {job.skills.map((skill, sIdx) => (
                    <span key={sIdx} css={styles.skillTag}>{skill}</span>
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
  );
};

export default MultiJobSearch;
