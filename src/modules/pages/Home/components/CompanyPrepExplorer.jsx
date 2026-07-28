import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BookOpen, Video, FileText, Bot, Award, ArrowRight, CheckCircle2, Sparkles, Play, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HomeConst } from '../Home.Const';
import { AppRoutes } from '../../../../utils/consts/routes';
import { AppAssets } from '../../../../utils/consts/app_assets';

let MentorGuidanceImage;
let AiRobotTeamImage;
try {
  MentorGuidanceImage = require('../../../../utils/consts/uploaded_illustrations').MentorGuidanceImage;
  AiRobotTeamImage = require('../../../../utils/consts/uploaded_illustrations').AiRobotTeamImage;
} catch (e) {
  MentorGuidanceImage = null;
  AiRobotTeamImage = null;
}

const styles = {
  container: css`
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  `,
  topMentorCard: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FEF5D8 100%);
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 32px 40px;
    margin-bottom: 44px;
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 36px;
    align-items: center;
    box-shadow: 0 12px 32px rgba(218, 83, 44, 0.1);

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      padding: 24px;
    }
  `,
  mentorImg: css`
    width: 100%;
    max-height: 260px;
    object-fit: contain;
    border-radius: 16px;
    background: #FFFFFF;
    padding: 10px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.06);
  `,
  header: css`
    text-align: center;
    margin-bottom: 44px;

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
      max-width: 700px;
      margin: 0 auto;
      line-height: 1.65;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
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

  /* COMPANY TABS */
  tabsRow: css`
    display: flex;
    justify-content: center;
    gap: 14px;
    margin-bottom: 40px;
    flex-wrap: wrap;
  `,
  companyTab: (active) => css`
    padding: 14px 28px;
    border-radius: 32px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    border: 2px solid ${active ? '#DA532C' : '#E2E8F0'};
    background: ${active ? '#DA532C' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#334155'};
    display: flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    box-shadow: ${active ? '0 8px 22px -6px rgba(218, 83, 44, 0.35)' : 'none'};

    &:hover {
      border-color: #DA532C;
      color: ${active ? '#FFFFFF' : '#DA532C'};
      transform: translateY(-2px);
    }
  `,

  /* ROUNDS GRID */
  roundsGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  `,
  roundCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  iconGraphic: css`
    width: 48px;
    height: 48px;
    object-fit: contain;
    margin-bottom: 12px;
    transition: transform 0.4s ease;

    &:hover {
      transform: scale(1.1) rotate(-5deg);
    }
  `,
  robotGraphic: css`
    width: 100%;
    max-height: 120px;
    object-fit: contain;
    margin-bottom: 16px;
    border-radius: 12px;
    background: #FFFFFF;
    padding: 6px;
  `,
  roundHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  `,
  roundBadge: css`
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16px;
    font-weight: 900;
  `,
  roundTitle: css`
    font-size: 20px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 10px;
    line-height: 1.35;
  `,
  roundDesc: css`
    font-size: 14.5px;
    color: #64748B;
    line-height: 1.65;
    margin-bottom: 24px;
  `,
  resourceList: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
  `,
  resourceItem: css`
    display: flex;
    align-items: center;
    gap: 12px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 12px 14px;
    font-size: 13.5px;
    font-weight: 700;
    color: #334155;
  `,
  aiMockCard: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 12px 28px rgba(218, 83, 44, 0.15);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  startBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 14.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `,
  accessBtn: css`
    width: 100%;
    background: #F8FAFC;
    border: 1.5px solid #CBD5E1;
    color: #1E293B;
    padding: 12px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;

    &:hover {
      border-color: #DA532C;
      color: #DA532C;
      background: #FFFFFF;
    }
  `
};

const roundIcons = [
  AppAssets.HomeAssets.FEATURES.TALENT_DEVELOPMENT,
  AppAssets.HomeAssets.FEATURES.CURATED_PROGRAM,
  AppAssets.HomeAssets.FEATURES.AI_POWERED_MATHC
];

const CompanyPrepExplorer = () => {
  const [selectedCompanyId, setSelectedCompanyId] = useState('deloitte');
  const navigate = useNavigate();
  const prepData = HomeConst.CompanyInterviewPrep;

  const currentCompany = prepData.companies.find(c => c.id === selectedCompanyId) || prepData.companies[0];

  return (
    <div css={styles.container} className="uden-fade-in">
      {/* 1-on-1 Mentor Guidance Top Feature Banner displaying Image 1 */}
      {MentorGuidanceImage && (
        <div css={styles.topMentorCard} className="uden-card-hover">
          <img src={MentorGuidanceImage} alt="1-on-1 Mentor Guidance & Live Prep" css={styles.mentorImg} />
          <div>
            <div css={styles.badgeTag} className="uden-float-anim">
              <Users size={14} />
              1-ON-1 MENTORSHIP & GROUP PREP
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#1E293B', marginBottom: '10px' }}>
              Learn Directly from Industry Experts & Crack Target Selection Rounds
            </h3>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
              Get personal guidance from experienced mentors who have cleared selection rounds at Deloitte, TCS NQT, and Amazon SDE.
            </p>
            <button css={styles.accessBtn} style={{ background: '#DA532C', color: '#FFFFFF', border: 'none' }} onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
              Book 1-on-1 Mentor Session
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      <div css={styles.header}>
        <div css={styles.badgeTag} className="uden-float-anim">
          <Sparkles size={14} />
          COMPANY-SPECIFIC ROUND PREP & PYQs ENGINE
        </div>
        <h2>{prepData.title}</h2>
        <p>{prepData.subtitle}</p>
      </div>

      <div css={styles.tabsRow}>
        {prepData.companies.map((comp) => (
          <button 
            key={comp.id}
            css={styles.companyTab(selectedCompanyId === comp.id)}
            onClick={() => setSelectedCompanyId(comp.id)}
          >
            <Award size={18} />
            {comp.name} ({comp.avgPackage})
          </button>
        ))}
      </div>

      <div css={styles.roundsGrid} className="uden-tab-anim" key={selectedCompanyId}>
        {currentCompany.rounds.map((rnd, idx) => {
          const isAiVideoRound = idx === 2;
          return isAiVideoRound ? (
            <div key={idx} css={styles.aiMockCard} className="uden-card-hover">
              <div>
                {AiRobotTeamImage ? (
                  <img src={AiRobotTeamImage} alt="AI Mock Interview Assistant" css={styles.robotGraphic} />
                ) : (
                  <img src={roundIcons[idx]} alt={rnd.title} css={styles.iconGraphic} />
                )}
                <div css={styles.roundHeader}>
                  <div css={styles.roundBadge}>{rnd.roundNum}</div>
                  <span style={{ fontSize: '11px', fontWeight: '800', background: '#DA532C', color: '#FFF', padding: '4px 10px', borderRadius: '8px' }}>
                    AI VIDEO SIMULATOR
                  </span>
                </div>
                <h3 css={styles.roundTitle}>{rnd.title}</h3>
                <p css={styles.roundDesc}>{rnd.description}</p>

                <div css={styles.resourceList}>
                  <div css={styles.resourceItem}>
                    <Bot size={18} color="#DA532C" />
                    <span>{rnd.pyqCount}</span>
                  </div>
                  <div css={styles.resourceItem}>
                    <Video size={18} color="#DA532C" />
                    <span>{rnd.videoCount}</span>
                  </div>
                </div>
              </div>

              <button css={styles.startBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
                <Play size={16} />
                Launch AI Video Mock Interview
              </button>
            </div>
          ) : (
            <div key={idx} css={styles.roundCard} className="uden-card-hover">
              <div>
                <img src={roundIcons[idx]} alt={rnd.title} css={styles.iconGraphic} />
                <div css={styles.roundHeader}>
                  <div css={styles.roundBadge}>{rnd.roundNum}</div>
                  <span style={{ fontSize: '12px', fontWeight: '700', color: '#64748B' }}>SELECTION ROUND</span>
                </div>
                <h3 css={styles.roundTitle}>{rnd.title}</h3>
                <p css={styles.roundDesc}>{rnd.description}</p>

                <div css={styles.resourceList}>
                  <div css={styles.resourceItem}>
                    <FileText size={18} color="#DA532C" />
                    <span>{rnd.pyqCount}</span>
                  </div>
                  <div css={styles.resourceItem}>
                    <Video size={18} color="#DA532C" />
                    <span>{rnd.videoCount}</span>
                  </div>
                </div>
              </div>

              <button 
                css={styles.accessBtn}
                onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
              >
                Access Round Prep & PYQs
                <ArrowRight size={16} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CompanyPrepExplorer;
