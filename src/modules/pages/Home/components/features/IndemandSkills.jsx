import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Cpu, TrendingUp, Code2, Cloud, Database, Layers, Zap } from 'lucide-react';

const styles = {
  container: css`
    margin-top: 60px;
    padding: 48px 24px;
    background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
    border-radius: 24px;
    border: 1px solid #E2E8F0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    text-align: center;
  `,
  pillBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 700;
    margin-bottom: 14px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    border: 1px solid rgba(218, 83, 44, 0.2);
  `,
  heading: css`
    font-size: 30px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 10px 0;
  `,
  subtitle: css`
    font-size: 15px;
    color: #64748B;
    max-width: 680px;
    margin: 0 auto 32px auto;
    line-height: 1.6;
  `,
  tabsNav: css`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  `,
  tabBtn: (active) => css`
    padding: 10px 22px;
    border-radius: 24px;
    font-size: 13.5px;
    font-weight: 700;
    border: 2px solid ${active ? '#DA532C' : '#CBD5E1'};
    background: ${active ? '#2D2221' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#475569'};
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: ${active ? '0 6px 18px rgba(45, 34, 33, 0.25)' : 'none'};

    &:hover {
      border-color: #DA532C;
    }
  `,
  skillsGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
    max-width: 1050px;
    margin: 0 auto;
    text-align: left;
  `,
  skillCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 18px;
    padding: 22px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 28px rgba(218, 83, 44, 0.15);
      border-color: #DA532C;
    }
  `,
  cardHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  `,
  iconBadge: css`
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  demandTag: css`
    background: #FFF5F5;
    color: #DA532C;
    font-size: 12px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid #FECDD3;
  `,
  skillTitle: css`
    font-size: 17px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 6px;
  `,
  salaryTag: css`
    font-size: 12.5px;
    color: #64748B;
    font-weight: 600;
    margin-bottom: 16px;

    b {
      color: #F59E0B;
      font-weight: 700;
    }
  `,
  progressWrapper: css`
    margin-bottom: 16px;
  `,
  progressLabelRow: css`
    display: flex;
    justify-content: space-between;
    font-size: 11.5px;
    font-weight: 700;
    color: #475569;
    margin-bottom: 6px;
  `,
  barTrack: css`
    height: 6px;
    background: #E2E8F0;
    border-radius: 3px;
    overflow: hidden;
  `,
  barFill: (percent) => css`
    height: 100%;
    width: ${percent}%;
    background: linear-gradient(90deg, #DA532C 0%, #F59E0B 100%);
    border-radius: 3px;
  `,
  roleTagsRow: css`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
  `,
  roleChip: css`
    background: #F8FAFC;
    color: #334155;
    font-size: 11px;
    font-weight: 600;
    padding: 3px 8px;
    border-radius: 6px;
    border: 1px solid #E2E8F0;
  `
};

const skillCategories = [
  { id: 'all', label: 'All Tech Stack' },
  { id: 'cloud', label: 'Cloud & DevOps' },
  { id: 'frontend', label: 'Frontend & Fullstack' },
  { id: 'data', label: 'AI & Data Science' }
];

const richSkillsList = [
  {
    name: 'React 18 & Next.js Fullstack',
    cat: 'frontend',
    growth: '+62%',
    demandIndex: 94,
    salary: '₹12L - ₹24L/yr',
    roles: ['Fullstack Dev', 'Frontend Lead'],
    icon: <Code2 size={22} />
  },
  {
    name: 'AWS Cloud & Architecture',
    cat: 'cloud',
    growth: '+58%',
    demandIndex: 91,
    salary: '₹14L - ₹28L/yr',
    roles: ['Cloud Engineer', 'DevOps Lead'],
    icon: <Cloud size={22} />
  },
  {
    name: 'Python, Django & LLM Stack',
    cat: 'data',
    growth: '+65%',
    demandIndex: 96,
    salary: '₹15L - ₹32L/yr',
    roles: ['AI Engineer', 'Backend Dev'],
    icon: <Cpu size={22} />
  },
  {
    name: 'Node.js & Microservices',
    cat: 'cloud',
    growth: '+52%',
    demandIndex: 88,
    salary: '₹11L - ₹22L/yr',
    roles: ['Backend Architect', 'Node Specialist'],
    icon: <Layers size={22} />
  },
  {
    name: 'Flutter & Cross-Platform',
    cat: 'frontend',
    growth: '+45%',
    demandIndex: 84,
    salary: '₹9L - ₹18L/yr',
    roles: ['Mobile Dev', 'iOS / Android Lead'],
    icon: <Code2 size={22} />
  },
  {
    name: 'Data Engineering & PostgreSQL',
    cat: 'data',
    growth: '+60%',
    demandIndex: 92,
    salary: '₹13L - ₹26L/yr',
    roles: ['Data Architect', 'ETL Developer'],
    icon: <Database size={22} />
  }
];

const IndemandSkills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all' 
    ? richSkillsList 
    : richSkillsList.filter(s => s.cat === activeTab);

  return (
    <div css={styles.container}>
      <div css={styles.pillBadge}>
        <Zap size={14} />
        LIVE RECRUITMENT INDEX • 2026
      </div>
      <h3 css={styles.heading}>Top In-Demand Skills Demanded by Employers</h3>
      <p css={styles.subtitle}>
        UDEN continuously tracks hiring demand gaps across 150+ corporate partners and channelizes talent upskilling for high-growth tech stacks.
      </p>

      <div css={styles.tabsNav}>
        {skillCategories.map(cat => (
          <button 
            key={cat.id}
            type="button"
            css={styles.tabBtn(activeTab === cat.id)}
            onClick={() => setActiveTab(cat.id)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div css={styles.skillsGrid}>
        {filteredSkills.map((skill, idx) => (
          <div key={idx} css={styles.skillCard}>
            <div>
              <div css={styles.cardHeader}>
                <div css={styles.iconBadge}>{skill.icon}</div>
                <div css={styles.demandTag}>
                  <TrendingUp size={13} />
                  {skill.growth} Hiring Surge
                </div>
              </div>

              <div css={styles.skillTitle}>{skill.name}</div>
              <div css={styles.salaryTag}>Avg Market CTC: <b>{skill.salary}</b></div>

              <div css={styles.progressWrapper}>
                <div css={styles.progressLabelRow}>
                  <span>RECRUITER DEMAND INDEX</span>
                  <span>{skill.demandIndex}% Match</span>
                </div>
                <div css={styles.barTrack}>
                  <div css={styles.barFill(skill.demandIndex)} />
                </div>
              </div>
            </div>

            <div css={styles.roleTagsRow}>
              {skill.roles.map((r, i) => (
                <span key={i} css={styles.roleChip}>{r}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndemandSkills;