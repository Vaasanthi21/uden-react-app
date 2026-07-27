import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, Video, Award, Clock, ArrowRight, CheckCircle2, User, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HomeConst } from '../Home.Const';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  container: css`
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 16px;
  `,
  cardOuter: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    border: 2px solid #DA532C;
    border-radius: 28px;
    padding: 44px;
    box-shadow: 0 16px 36px rgba(218, 83, 44, 0.14);
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      padding: 28px;
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
    margin-bottom: 16px;
    border: 1px solid rgba(218, 83, 44, 0.25);
    text-transform: uppercase;
  `,
  title: css`
    font-size: 34px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.25;
    margin-bottom: 16px;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 26px;
    }
  `,
  subtitle: css`
    font-size: 15.5px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 28px;
    font-weight: 500;
  `,
  benefitsList: css`
    list-style: none;
    padding: 0;
    margin: 0 0 32px 0;

    li {
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14.5px;
      color: #1E293B;
      font-weight: 700;
      margin-bottom: 12px;
    }
  `,
  ctaBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px 28px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: #B83D1B;
    }
  `,

  /* RIGHT SIDE PREVIEW CARD */
  previewCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 24px;
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.04);
  `,
  candidateHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1px solid #E2E8F0;
    margin-bottom: 16px;
  `,
  candidateAvatar: css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 16px;
  `,
  scoreBadge: css`
    background: #FEF5D8;
    color: #DA532C;
    border: 1px solid rgba(255, 176, 32, 0.6);
    font-size: 12px;
    font-weight: 800;
    padding: 4px 10px;
    border-radius: 12px;
  `,
  scoreRow: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 20px;
  `,
  scoreBox: css`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 12px;
    text-align: center;

    h4 {
      font-size: 20px;
      font-weight: 900;
      color: #DA532C;
      margin: 0 0 2px 0;
    }

    p {
      font-size: 11.5px;
      color: #64748B;
      margin: 0;
      font-weight: 700;
    }
  `,
  videoVerifiedBox: css`
    background: rgba(218, 83, 44, 0.08);
    border: 1px dashed #DA532C;
    border-radius: 12px;
    padding: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13px;
    font-weight: 700;
    color: #1E293B;
  `
};

const RecruiterVettedHub = () => {
  const navigate = useNavigate();
  const data = HomeConst.RecruiterHub;

  return (
    <div css={styles.container}>
      <div css={styles.cardOuter}>
        <div>
          <div css={styles.badgeTag}>
            <Building size={14} />
            ENTERPRISE RECRUITER HUB
          </div>
          <h2 css={styles.title}>
            Hire Pre-Vetted Tech Talent in <span>48 Hours</span>
          </h2>
          <p css={styles.subtitle}>
            Skip 30-day screening cycles. Access UDEN’s pool of pre-assessed candidates evaluated by AI video interviews and industry mentors.
          </p>

          <ul css={styles.benefitsList}>
            <li>
              <CheckCircle2 size={18} color="#DA532C" />
              <span>Top 5% verified technical & domain skill scores</span>
            </li>
            <li>
              <CheckCircle2 size={18} color="#DA532C" />
              <span>AI Video Interview Assessment Recordings Included</span>
            </li>
            <li>
              <CheckCircle2 size={18} color="#DA532C" />
              <span>48-Hour Shortlist SLA Guarantee with Zero Upfront Sourcing Fee</span>
            </li>
          </ul>

          <button css={styles.ctaBtn} onClick={() => navigate(AppRoutes.FIND_TALENT)}>
            Request Candidate Profiles
            <ArrowRight size={16} />
          </button>
        </div>

        {/* Right Candidate Video Verification Card */}
        <div css={styles.previewCard}>
          <div css={styles.candidateHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div css={styles.candidateAvatar}>PJ</div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: '800', color: '#1E293B' }}>Palak Jain</div>
                <div style={{ fontSize: '12px', color: '#64748B', fontWeight: '600' }}>React & TypeScript Engineer</div>
              </div>
            </div>
            <span css={styles.scoreBadge}>TOP 5% VERIFIED</span>
          </div>

          <div css={styles.scoreRow}>
            <div css={styles.scoreBox}>
              <h4>96%</h4>
              <p>Tech Skill Score</p>
            </div>
            <div css={styles.scoreBox}>
              <h4>94%</h4>
              <p>AI Video Speech Rating</p>
            </div>
          </div>

          <div css={styles.videoVerifiedBox}>
            <Video size={20} color="#DA532C" />
            <div>
              <div style={{ fontSize: '13px', fontWeight: '800', color: '#1E293B' }}>AI Video Interview Recording</div>
              <div style={{ fontSize: '11px', color: '#64748B' }}>Behavioral STAR Method & Live Code Defense</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterVettedHub;
