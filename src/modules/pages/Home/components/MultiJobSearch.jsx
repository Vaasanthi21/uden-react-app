import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Search, MapPin, Sparkles, ArrowRight, Globe, Filter } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';
import { AppAssets } from '../../../../utils/consts/app_assets';

const styles = {
  container: css`
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 48px;

    h2 {
      font-size: 34px;
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
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 16px;
    border: 1px solid rgba(218, 83, 44, 0.2);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,

  /* SEARCH CARD */
  searchCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    margin-bottom: 44px;
    position: relative;
    overflow: hidden;
  `,
  inputGrid: css`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr auto;
    gap: 16px;
    align-items: center;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,
  inputField: css`
    display: flex;
    align-items: center;
    gap: 12px;
    background: #F8FAFC;
    border: 1.5px solid #E2E8F0;
    border-radius: 14px;
    padding: 14px 16px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:focus-within {
      border-color: #DA532C;
      background: #FFFFFF;
      box-shadow: 0 4px 14px rgba(218, 83, 44, 0.15);
    }

    input, select {
      background: transparent;
      border: none;
      outline: none;
      width: 100%;
      font-size: 15px;
      font-weight: 600;
      color: #1E293B;
    }
  `,
  searchBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 16px 32px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    white-space: nowrap;
  `,
  boardBadgesRow: css`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px dashed #E2E8F0;
    font-size: 13px;
    color: #64748B;
    font-weight: 700;
  `,
  boardPill: css`
    background: #FEF5D8;
    color: #DA532C;
    border: 1px solid rgba(255, 176, 32, 0.4);
    padding: 5px 14px;
    border-radius: 18px;
    font-size: 12px;
    font-weight: 800;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.08);
    }
  `,

  /* JOBS GRID */
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
    border: 1.5px solid #E2E8F0;
    border-radius: 22px;
    padding: 30px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  `,
  iconGraphic: css`
    width: 52px;
    height: 52px;
    object-fit: contain;
    margin-bottom: 14px;
    transition: transform 0.4s ease;

    &:hover {
      transform: rotate(5deg) scale(1.1);
    }
  `,
  jobHeader: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 14px;
  `,
  companyTag: css`
    font-size: 13px;
    font-weight: 800;
    color: #DA532C;
    background: rgba(218, 83, 44, 0.08);
    padding: 4px 12px;
    border-radius: 8px;
  `,
  sourceBoardTag: css`
    font-size: 11px;
    font-weight: 700;
    color: #64748B;
    background: #F1F5F9;
    padding: 4px 10px;
    border-radius: 6px;
  `,
  jobTitle: css`
    font-size: 19px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 10px;
    line-height: 1.4;
  `,
  jobMeta: css`
    display: flex;
    flex-direction: column;
    gap: 6px;
    font-size: 13.5px;
    color: #64748B;
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
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    color: #334155;
    font-size: 12px;
    font-weight: 700;
    padding: 4px 12px;
    border-radius: 8px;
  `,
  applyBtn: css`
    width: 100%;
    background: #FEF5D8;
    color: #DA532C;
    border: 1.5px solid #DA532C;
    padding: 12px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 14.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.3s ease;

    &:hover {
      background: #DA532C;
      color: #FFFFFF;
      box-shadow: 0 6px 18px rgba(218, 83, 44, 0.3);
    }
  `
};

const sampleJobs = [
  {
    icon: AppAssets.HomeAssets.FEATURES.TALENT_DEVELOPMENT,
    title: 'Frontend Engineer (React 18 & TypeScript)',
    company: 'Deloitte Digital',
    board: 'LinkedIn & UDEN Direct',
    location: 'Bengaluru (Hybrid)',
    package: '₹7.5L - ₹12.0L / yr',
    skills: ['React 18', 'TypeScript', 'Next.js', 'Redux']
  },
  {
    icon: AppAssets.HomeAssets.FEATURES.BEST_TALENT_FIT,
    title: 'SDE-1 (Java Microservices & AWS)',
    company: 'TCS Digital',
    board: 'Naukri & Enterprise',
    location: 'Hyderabad / Pune',
    package: '₹7.0L - ₹9.5L / yr',
    skills: ['Java 17', 'Spring Boot', 'AWS', 'Docker']
  },
  {
    icon: AppAssets.HomeAssets.FEATURES.AI_POWERED_MATHC,
    title: 'Data Analyst & Python Developer',
    company: 'Accenture AI Labs',
    board: 'Indeed & UDEN Partner',
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
    <div css={styles.container} className="uden-fade-in">
      <div css={styles.header}>
        <div css={styles.badgeTag} className="uden-float-anim">
          <Globe size={14} />
          MULTI-JOB BOARD SEARCH ENGINE
        </div>
        <h2>
          Search <span>100,000+ Jobs</span> Directly in One Place
        </h2>
        <p>
          Students can access live job openings aggregated from top global job boards, complete with company-specific round prep and AI video mock interviews.
        </p>
      </div>

      <div css={styles.searchCard}>
        <form onSubmit={handleSearchSubmit} css={styles.inputGrid}>
          <div css={styles.inputField}>
            <Search size={20} color="#DA532C" />
            <input 
              type="text" 
              placeholder="Search title, skills (e.g. React, Python, Data Analyst)..."
              value={roleQuery}
              onChange={(e) => setRoleQuery(e.target.value)}
            />
          </div>

          <div css={styles.inputField}>
            <MapPin size={20} color="#DA532C" />
            <input 
              type="text" 
              placeholder="Location (e.g. Bengaluru, Remote)..."
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>

          <div css={styles.inputField}>
            <Filter size={20} color="#DA532C" />
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

        <div css={styles.boardBadgesRow}>
          <span>Aggregating Live Openings From:</span>
          <span css={styles.boardPill}>Naukri.com</span>
          <span css={styles.boardPill}>LinkedIn Jobs</span>
          <span css={styles.boardPill}>Indeed</span>
          <span css={styles.boardPill}>150+ Direct UDEN Enterprise Partners</span>
        </div>
      </div>

      <div css={styles.jobsGrid}>
        {sampleJobs.map((job, idx) => (
          <div key={idx} css={styles.jobCard} className="uden-card-hover">
            <div>
              <img src={job.icon} alt={job.title} css={styles.iconGraphic} />
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
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiJobSearch;
