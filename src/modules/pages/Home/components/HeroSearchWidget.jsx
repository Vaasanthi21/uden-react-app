import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Search, Sparkles, Briefcase, MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

const styles = {
  container: css`
    max-width: 1140px;
    margin: 20px auto 48px auto;
    padding: 0 16px;
    position: relative;
    z-index: 10;
  `,
  wrapper: css`
    background: #FFFFFF;
    border-radius: 28px;
    box-shadow: 0 20px 48px rgba(75, 99, 140, 0.08);
    border: 1.5px solid #E2E8F0;
    padding: 32px 36px;

    @media (max-width: 768px) {
      padding: 24px 20px;
    }
  `,
  topRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 24px;
    flex-wrap: wrap;
    gap: 16px;
  `,
  titleGroup: css`
    display: flex;
    align-items: center;
    gap: 12px;
    
    h2 {
      font-size: 22px;
      font-weight: 800;
      color: #1E293B;
      margin: 0;
      letter-spacing: -0.4px;
    }
  `,
  badgeTag: css`
    background: rgba(75, 99, 140, 0.1);
    color: #4B638C;
    padding: 5px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    border: 1px solid rgba(75, 99, 140, 0.2);
  `,
  tabNav: css`
    display: flex;
    gap: 6px;
    background: #F8FAFC;
    padding: 4px;
    border-radius: 30px;
    border: 1px solid #E2E8F0;
    max-width: 100%;
    flex-wrap: wrap;

    @media (max-width: 640px) {
      width: 100%;
      border-radius: 16px;
      justify-content: center;
    }
  `,
  tabBtn: (active) => css`
    padding: 8px 20px;
    border-radius: 24px;
    font-size: 13.5px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
    background: ${active ? '#4B638C' : 'transparent'};
    color: ${active ? '#FFFFFF' : '#475569'};
    box-shadow: ${active ? '0 4px 14px rgba(75, 99, 140, 0.25)' : 'none'};

    @media (max-width: 640px) {
      padding: 8px 12px;
      font-size: 12px;
      flex: 1;
      text-align: center;
    }

    &:hover {
      color: ${active ? '#FFFFFF' : '#4B638C'};
    }
  `,
  searchForm: css`
    display: grid;
    grid-template-columns: 1.5fr 1fr 1fr auto;
    gap: 12px;
    align-items: center;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  `,
  inputBox: css`
    display: flex;
    align-items: center;
    gap: 10px;
    background: #F8FAFC;
    border: 1.5px solid #CBD5E1;
    border-radius: 14px;
    padding: 12px 16px;
    transition: all 0.2s ease;

    &:focus-within {
      border-color: #4B638C;
      background: #FFFFFF;
      box-shadow: 0 4px 12px rgba(75, 99, 140, 0.1);
    }

    input, select {
      border: none;
      background: transparent;
      outline: none;
      width: 100%;
      font-size: 14px;
      font-weight: 600;
      color: #1E293B;

      &::placeholder {
        color: #94A3B8;
      }
    }
  `,
  searchBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 14px 30px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.2s ease;
    box-shadow: 0 6px 18px rgba(245, 88, 37, 0.25);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(245, 88, 37, 0.35);
    }
  `,
  tagsRow: css`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    flex-wrap: wrap;

    span {
      font-size: 12.5px;
      color: #64748B;
      font-weight: 600;
    }
  `,
  tagChip: css`
    background: #F8FAFC;
    color: #334155;
    border: 1px solid #E2E8F0;
    padding: 5px 14px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #4B638C;
      color: #FFFFFF;
      border-color: #4B638C;
      transform: translateY(-1px);
    }
  `
};

const HeroSearchWidget = () => {
  const [activeTab, setActiveTab] = useState('candidate');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (activeTab === 'candidate') {
      navigate(AppRoutes.FIND_TALENT);
    } else {
      navigate(AppRoutes.FIND_OPPORTUNITY);
    }
  };

  return (
    <div css={styles.container} className="uden-fade-in">
      <div css={styles.wrapper} className="uden-card-hover">
        <div css={styles.topRow}>
          <div css={styles.titleGroup}>
            <div css={styles.badgeTag} className="uden-float-anim">
              <Sparkles size={14} color="#F7BC08" />
              AI MATCH ENGINE
            </div>
            <h2>What are you looking for today?</h2>
          </div>

          <div css={styles.tabNav}>
            <button 
              type="button" 
              css={styles.tabBtn(activeTab === 'candidate')}
              onClick={() => setActiveTab('candidate')}
            >
              🏢 Hire Candidates
            </button>
            <button 
              type="button" 
              css={styles.tabBtn(activeTab === 'job')}
              onClick={() => setActiveTab('job')}
            >
              👔 Find Jobs & Courses
            </button>
          </div>
        </div>

        <form onSubmit={handleSearch} css={styles.searchForm}>
          <div css={styles.inputBox}>
            <Search size={18} color="#4B638C" />
            <label htmlFor="hero-search-query" style={{ display: 'none' }}>Search Query</label>
            <input 
              id="hero-search-query"
              type="text" 
              aria-label="Search Query"
              placeholder={activeTab === 'candidate' ? "Search skills e.g., React, Node.js, Data Science..." : "Search job roles e.g., Frontend Dev, Product Manager..."}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          <div css={styles.inputBox}>
            <Briefcase size={18} color="#4B638C" />
            <label htmlFor="hero-exp-select" style={{ display: 'none' }}>Experience Filter</label>
            <select id="hero-exp-select" aria-label="Experience Filter" defaultValue="all">
              <option value="all">Experience: All Levels</option>
              <option value="fresher">Fresher / 0-1 Years</option>
              <option value="mid">Mid Level (2-4 Years)</option>
              <option value="senior">Senior (5+ Years)</option>
            </select>
          </div>

          <div css={styles.inputBox}>
            <MapPin size={18} color="#4B638C" />
            <label htmlFor="hero-loc-select" style={{ display: 'none' }}>Location Filter</label>
            <select id="hero-loc-select" aria-label="Location Filter" defaultValue="remote">
              <option value="remote">Location: Remote / Any</option>
              <option value="india">India (Tier-1 Cities)</option>
              <option value="abroad">Global / Overseas</option>
            </select>
          </div>

          <button type="submit" css={styles.searchBtn} className="uden-pulse-btn">
            Search
            <ArrowRight size={18} />
          </button>
        </form>

        <div css={styles.tagsRow}>
          <span>Popular Searches:</span>
          <div css={styles.tagChip} onClick={() => navigate(AppRoutes.FIND_TALENT)}>React 18 Devs</div>
          <div css={styles.tagChip} onClick={() => navigate(AppRoutes.FIND_TALENT)}>Python AI Engineer</div>
          <div css={styles.tagChip} onClick={() => navigate(AppRoutes.FIND_TALENT)}>Pre-Assessed Freshers</div>
          <div css={styles.tagChip} onClick={() => navigate(AppRoutes.HR_SERVICES)}>HR Outsourcing</div>
        </div>
      </div>
    </div>
  );
};

export default HeroSearchWidget;
