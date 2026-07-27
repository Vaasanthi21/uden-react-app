import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BookOpen, Video, FileText, Bot, Award, ArrowRight, CheckCircle2, Sparkles, HelpCircle, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HomeConst } from '../Home.Const';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  container: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 36px;

    h2 {
      font-size: 32px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 8px;

      span {
        color: #DA532C;
      }
    }

    p {
      color: #64748B;
      font-size: 15.5px;
      font-weight: 500;
      max-width: 720px;
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

  /* COMPANY TABS */
  tabsRow: css`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  `,
  companyTab: (active) => css`
    padding: 12px 24px;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    border: 2px solid ${active ? '#DA532C' : '#E2E8F0'};
    background: ${active ? '#DA532C' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#334155'};
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: ${active ? '0 8px 20px -6px rgba(218, 83, 44, 0.35)' : 'none'};

    &:hover {
      border-color: #DA532C;
      color: ${active ? '#FFFFFF' : '#DA532C'};
    }
  `,

  /* ROUNDS GRID */
  roundsGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  `,
  roundCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: #DA532C;
      box-shadow: 0 12px 28px rgba(218, 83, 44, 0.12);
    }
  `,
  roundHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  `,
  roundBadge: css`
    width: 38px;
    height: 38px;
    border-radius: 10px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    font-weight: 900;
  `,
  roundTitle: css`
    font-size: 19px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 8px;
  `,
  roundDesc: css`
    font-size: 14px;
    color: #64748B;
    line-height: 1.6;
    margin-bottom: 20px;
  `,
  resourceList: css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 24px;
  `,
  resourceItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 10px;
    padding: 10px 12px;
    font-size: 13px;
    font-weight: 700;
    color: #334155;
  `,
  aiMockCard: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    border: 2px solid #DA532C;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 10px 24px rgba(218, 83, 44, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  startBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 12px;
    border-radius: 10px;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: #B83D1B;
    }
  `
};

const CompanyPrepExplorer = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState('deloitte');
  const navigate = useNavigate();
  const prepData = HomeConst.CompanyInterviewPrep;

  const currentCompany = prepData.companies.find(c => c.id === selectedCompanyId) || prepData.companies[0];

  return (
    <div css={styles.container}>
      <div css={styles.header}>
        <div css={styles.badgeTag}>
          <Sparkles size={14} />
          COMPANY-SPECIFIC ROUND PREP & PYQs ENGINE
        </div>
        <h2>{prepData.title}</h2>
        <p>{prepData.subtitle}</p>
      </div>

      {/* Target Company Tabs */}
      <div css={styles.tabsRow}>
        {prepData.companies.map((comp) => (
          <button 
            key={comp.id}
            css={styles.companyTab(selectedCompanyId === comp.id)}
            onClick={() => setSelectedCompanyId(comp.id)}
          >
            <Award size={16} />
            {comp.name} ({comp.avgPackage})
          </button>
        ))}
      </div>

      {/* 3 Rounds Breakdown Cards */}
      <div css={styles.roundsGrid}>
        {currentCompany.rounds.map((rnd, idx) => {
          const isAiVideoRound = idx === 2;
          return isAiVideoRound ? (
            /* Round 3: AI Video Mock Interview Card */
            <div key={idx} css={styles.aiMockCard}>
              <div>
                <div css={styles.roundHeader}>
                  <div css={styles.roundBadge}>{rnd.roundNum}</div>
                  <span style={{ fontSize: '11px', fontWeight: '800', background: '#DA532C', color: '#FFF', padding: '3px 8px', borderRadius: '6px' }}>
                    AI VIDEO SIMULATOR
                  </span>
                </div>
                <h3 css={styles.roundTitle}>{rnd.title}</h3>
                <p css={styles.roundDesc}>{rnd.description}</p>

                <div css={styles.resourceList}>
                  <div css={styles.resourceItem}>
                    <Bot size={16} color="#DA532C" />
                    <span>{rnd.pyqCount}</span>
                  </div>
                  <div css={styles.resourceItem}>
                    <Video size={16} color="#DA532C" />
                    <span>{rnd.videoCount}</span>
                  </div>
                </div>
              </div>

              <button css={styles.startBtn} onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
                <Play size={16} />
                Launch AI Video Mock Interview
              </button>
            </div>
          ) : (
            /* Round 1 & 2 Cards */
            <div key={idx} css={styles.roundCard}>
              <div>
                <div css={styles.roundHeader}>
                  <div css={styles.roundBadge}>{rnd.roundNum}</div>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748B' }}>SELECTION ROUND</span>
                </div>
                <h3 css={styles.roundTitle}>{rnd.title}</h3>
                <p css={styles.roundDesc}>{rnd.description}</p>

                <div css={styles.resourceList}>
                  <div css={styles.resourceItem}>
                    <FileText size={16} color="#DA532C" />
                    <span>{rnd.pyqCount}</span>
                  </div>
                  <div css={styles.resourceItem}>
                    <Video size={16} color="#DA532C" />
                    <span>{rnd.videoCount}</span>
                  </div>
                </div>
              </div>

              <button 
                style={{
                  width: '100%',
                  background: '#F8FAFC',
                  border: '1.5px solid #CBD5E1',
                  color: '#1E293B',
                  padding: '10px',
                  borderRadius: '10px',
                  fontWeight: '800',
                  fontSize: '13.5px',
                  cursor: 'pointer',
                  display: 'flex',
                  align-items: 'center',
                  justify-content: 'center',
                  gap: '6px'
                }}
                onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
              >
                Access Round Prep & PYQs
                <ArrowRight size={15} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyPrepExplorer;
