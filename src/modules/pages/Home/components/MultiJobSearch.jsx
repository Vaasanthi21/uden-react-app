import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Search, MapPin, Briefcase, Sparkles, ArrowRight, CheckCircle2, Globe, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  container: css`
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 36px;

    h2 {
      font-size: 32px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 10px;

      span {
        color: #DA532C;
      }
    }

    p {
      color: #64748B;
      font-size: 15.5px;
      font-weight: 500;
      max-width: 700px;
      margin: 0 auto;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 14px;
    border: 1px solid rgba(218, 83, 44, 0.25);
    text-transform: uppercase;
  `,
  searchCard: css`
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 24px;
    box-shadow: 0 12px 32px rgba(218, 83, 44, 0.12);
    margin-bottom: 32px;
  `,
  inputGrid: css`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr auto;
    gap: 12px;
    align-items: center;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  `,
  inputField: css`
    display: flex;
    align-items: center;
    gap: 10px;
    background: #F8FAFC;
    border: 1.5px solid #CBD5E1;
    border-radius: 12px;
    padding: 12px 14px;

    input, select {
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
      font-size: 14.5px;
      font-weight: 600;
      color: #1E293B;
    }
  `,
  searchBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px 28px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s ease;
    white-space: nowrap;

    &:hover {
      background: #B83D1B;
    }
  `,
  boardBadgesRow: css`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 16px;
    font-size: 13px;
    color: #64748B;
    font-weight: 700;
  `,
  boardPill: css`
    background: #FEF5D8;
    color: #DA532C;
    border: 1px solid rgba(255, 176, 32, 0.5);
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 800;
  `,

  /* SAMPLE JOBS GRID */
  jobsGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
    gap: 20px;
  `,
  jobCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-4px);
      border-color: #DA532C;
      box-shadow: 0 12px 24px rgba(218, 83, 44, 0.12);
    }
  `,
  jobHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 12px;
  `,
  companyTag: css`
    font-size: 12.5px;
    font-weight: 800;
    color: #DA532C;
    background: rgba(218, 83, 44, 0.1);
    padding: 4px 10px;
    border-radius: 8px;
  `,
  sourceBoardTag: css`
    font-size: 11px;
    font-weight: 700;
    color: #64748B;
    background: #F1F5F9;
    padding: 3px 8px;
    border-radius: 6px;
  `,
  jobTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 8px;
  `,
  jobMeta: css`
    display: flex;
    gap: 16px;
    font-size: 13px;
    color: #64748B;
    font-weight: 600;
    margin-bottom: 16px;
  `,
  tagsRow: css`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 20px;
  `,
  skillTag: css`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    color: #334155;
    font-size: 12px;
    font-weight: 700;
    padding: 3px 10px;
    border-radius: 6px;
  `,
  applyBtn: css`
    width: 100%;
    background: #FEF5D8;
    color: #DA532C;
    border: 1.5px solid #DA532C;
    padding: 10px;
    border-radius: 10px;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    transition: all 0.2s ease;

    &:hover {
      background: #DA532C;
      color: #FFFFFF;
    }
  `
};

const sampleJobs = [
  {
    title: 'Frontend Engineer (React 18 & TypeScript)',
    company: 'Deloitte Digital',
    board: 'Aggregated via LinkedIn & UDEN Direct',
    location: 'Bengaluru (Hybrid)',
    package: '₹7.5L - ₹12.0L / yr',
    skills: ['React 18', 'TypeScript', 'Next.js', 'Redux']
  },
  {
    title: 'SDE-1 (Java Microservices & AWS)',
    company: 'TCS Digital',
    board: 'Aggregated via Naukri & Enterprise',
    location: 'Hyderabad / Pune',
    package: '₹7.0L - ₹9.5L / yr',
    skills: ['Java 17', 'Spring Boot', 'AWS', 'Docker']
  },
  {
    title: 'Data Analyst & Python ML Developer',
    company: 'Antlia Tech & Accenture',
    board: 'Aggregated via Indeed & UDEN Partner',
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
    <div css={styles.container}>
      <div css={styles.header}>
        <div css={styles.badgeTag}>
          <Globe size={14} />
          MULTI-JOB BOARD SEARCH ENGINE
        </div>
        <h2>
          Search <span>100,000+ Jobs</span> Directly in One Unified Portal
        </h2>
        <p>
          Students can access live openings aggregated across top global job boards, complete with company round-by-round exam prep and AI video mock interviews.
        </p>
      </div>

      {/* Multi-Job Search Form */}
      <div css={styles.searchCard}>
        <form onSubmit={handleSearchSubmit} css={styles.inputGrid}>
          <div css={styles.inputField}>
            <Search size={18} color="#DA532C" />
            <input 
              type="text" 
              placeholder="Search job title, skills (e.g. React, Python, Data Analyst)..."
              value={roleQuery}
              onChange={(e) => setRoleQuery(e.target.value)}
            />
          </div>

          <div css={styles.inputField}>
            <MapPin size={18} color="#DA532C" />
            <input 
              type="text" 
              placeholder="Location (e.g. Bengaluru, Remote)..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div css={styles.inputField}>
            <Filter size={18} color="#DA532C" />
            <select value={workModel} onChange={(e) => setWorkModel(e.target.value)}>
              <option value="all">All Work Models</option>
              <option value="remote">Remote / WFH</option>
              <option value="hybrid">Hybrid</option>
              <option value="onsite">On-Site</option>
            </select>
          </div>

          <button type="submit" css={styles.searchBtn}>
            Search Openings
            <ArrowRight size={16} />
          </button>
        </form>

        <div css={styles.boardBadgesRow}>
          <span>Aggregating Live Openings From:</span>
          <span css={styles.boardPill}>Naukri.com</span>
          <span css={styles.boardPill}>LinkedIn Jobs</span>
          <span css={styles.boardPill}>Indeed</span>
          <span css={styles.boardPill}>150+ Direct UDEN Enterprise Partners</span>
        </div>
      </div>

      {/* Sample Job Match Cards */}
      <div css={styles.jobsGrid}>
        {sampleJobs.map((job, idx) => (
          <div key={idx} css={styles.jobCard}>
            <div>
              <div css={styles.jobHeader}>
                <span css={styles.companyTag}>{job.company}</span>
                <span css={styles.sourceBoardTag}>{job.board}</span>
              </div>
              <h3 css={styles.jobTitle}>{job.title}</h3>
              <div css={styles.jobMeta}>
                <span>📍 {job.location}</span>
                <span>💰 {job.package}</span>
              </div>
              <div css={styles.tagsRow}>
                {job.skills.map((skill, sIdx) => (
                  <span key={sIdx} css={styles.skillTag}>{skill}</span>
                ))}
              </div>
            </div>
            <button css={styles.applyBtn} onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
              Prepare & Apply Now
              <ArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiJobSearch;
