import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { GraduationCap, Sparkles, Award, ArrowRight, BookOpen, CheckCircle2, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    padding: 64px 16px 50px 16px;
    color: #1E293B;
    border-bottom: 4px solid #DA532C;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 32px;
    }
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
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.2;
    margin: 0 0 16px 0;
    letter-spacing: -0.5px;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,
  subtitle: css`
    font-size: 16.5px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 32px;
    font-weight: 500;
  `,
  searchBox: css`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    border-radius: 14px;
    padding: 6px 6px 6px 16px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.04);
    margin-bottom: 28px;
    gap: 10px;

    input {
      background: transparent;
      border: none;
      outline: none;
      color: #1E293B;
      font-size: 15px;
      width: 100%;
      font-weight: 600;

      &::placeholder {
        color: #94A3B8;
      }
    }
  `,
  searchBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 12px 24px;
    border-radius: 10px;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 6px;
    white-space: nowrap;
    transition: background 0.2s;

    &:hover {
      background: #B83D1B;
    }
  `,
  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  `,
  statCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 14px;
    padding: 20px 16px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0,0,0,0.03);

    h3 {
      font-size: 28px;
      font-weight: 900;
      color: #DA532C;
      margin: 0 0 4px 0;
    }

    p {
      font-size: 12px;
      color: #64748B;
      margin: 0;
      font-weight: 700;
    }
  `,
  rightCardDeck: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 8px 24px rgba(0,0,0,0.04);
  `,
  deckTitle: css`
    font-size: 18px;
    font-weight: 900;
    color: #1E293B;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  partnerItem: css`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 0;
    border-bottom: 1px solid #E2E8F0;

    &:last-of-type {
      border-bottom: none;
    }
  `,
  partnerIcon: css`
    width: 40px;
    height: 40px;
    border-radius: 10px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
  `
};

const partnerTypes = [
  { name: 'AWS & Cloud Academy', track: 'Cloud Architect & DevOps', count: '12 Courses' },
  { name: 'Fullstack Engineering Institute', track: 'React 18 & Next.js Fullstack', count: '18 Courses' },
  { name: 'AI & Data Science Labs', track: 'Python, PyTorch & LLMs', count: '10 Courses' },
  { name: 'Mobile App Developer Guild', track: 'Flutter & Native Mobile', count: '8 Courses' }
];

const UpskillingBanner = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(AppRoutes.FIND_OPPORTUNITY);
  };

  return (
    <div css={styles.heroOuter}>
      <div css={styles.container}>
        <div>
          <div css={styles.badgeTag}>
            <Sparkles size={14} />
            ACCREDITED UPSKILLING NETWORK
          </div>
          <h1 css={styles.title}>
            Master In-Demand Skills with <span>Trusted Partner Academies</span>
          </h1>
          <p css={styles.subtitle}>
            UDEN collaborates with accredited training partners to close skill gaps and guarantee candidate placement for high-growth tech roles.
          </p>

          <form onSubmit={handleSearch} css={styles.searchBox}>
            <Search size={20} color="#DA532C" />
            <input 
              type="text"
              placeholder="Search upskilling tracks (e.g. AWS, Fullstack, AI, DevOps)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type="submit" css={styles.searchBtn}>
              Explore Tracks
              <ArrowRight size={16} />
            </button>
          </form>

          <div css={styles.statsGrid}>
            <div css={styles.statCard}>
              <h3>50+</h3>
              <p>Accredited Programs</p>
            </div>
            <div css={styles.statCard}>
              <h3>94%</h3>
              <p>Placement Match Rate</p>
            </div>
            <div css={styles.statCard}>
              <h3>+45%</h3>
              <p>Avg Salary Uplift</p>
            </div>
          </div>
        </div>

        <div css={styles.rightCardDeck}>
          <div css={styles.deckTitle}>
            <Award size={20} color="#DA532C" />
            Featured Partner Academies
          </div>

          {partnerTypes.map((p, idx) => (
            <div key={idx} css={styles.partnerItem}>
              <div css={styles.partnerIcon}><BookOpen size={20} /></div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '800', color: '#1E293B' }}>{p.name}</div>
                <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '500' }}>{p.track} • {p.count}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpskillingBanner;