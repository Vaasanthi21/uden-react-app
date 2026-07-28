import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { ShieldCheck, Video, Award, Clock, ArrowRight, CheckCircle2, Building, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let CandidateNetworkImage;
try {
  CandidateNetworkImage = require('../../../../utils/consts/uploaded_illustrations').CandidateNetworkImage;
} catch (e) {
  CandidateNetworkImage = null;
}

const floatSlow = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0px); }
`;

const styles = {
  container: css`
    max-width: 1140px;
    margin: 0 auto;
    padding: 0 20px;
  `,
  cardOuter: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    border: 2px solid #DA532C;
    border-radius: 28px;
    padding: 50px;
    box-shadow: 0 16px 36px rgba(218, 83, 44, 0.12);
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      padding: 32px;
      gap: 32px;
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
    margin-bottom: 18px;
    border: 1px solid rgba(218, 83, 44, 0.2);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 36px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.25;
    margin-bottom: 18px;
    letter-spacing: -0.5px;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
  `,
  subtitle: css`
    font-size: 16px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 32px;
    font-weight: 500;
  `,
  benefitsList: css`
    list-style: none;
    padding: 0;
    margin: 0 0 36px 0;

    li {
      display: flex;
      align-items: center;
      gap: 14px;
      font-size: 15px;
      color: #1E293B;
      font-weight: 700;
      margin-bottom: 14px;
    }
  `,
  ctaBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 16px 32px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 6px 18px rgba(218, 83, 44, 0.25);

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(218, 83, 44, 0.35);
    }
  `,

  /* RIGHT SIDE PREVIEW CARD */
  previewCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    animation: ${floatSlow} 4s ease-in-out infinite;
  `,
  networkImg: css`
    width: 100%;
    max-height: 180px;
    object-fit: contain;
    margin-bottom: 20px;
    border-radius: 14px;
    background: #FFFDF7;
    padding: 10px;
    border: 1.5px solid #FEF5D8;
  `,
  candidateHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 18px;
    border-bottom: 1px solid #E2E8F0;
    margin-bottom: 20px;
  `,
  candidateAvatar: css`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 17px;
  `,
  scoreBadge: css`
    background: #FEF5D8;
    color: #DA532C;
    border: 1px solid rgba(255, 176, 32, 0.6);
    font-size: 12px;
    font-weight: 800;
    padding: 5px 12px;
    border-radius: 14px;
  `,
  scoreRow: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 24px;
  `,
  scoreBox: css`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 14px;
    padding: 16px;
    text-align: center;

    h4 {
      font-size: 22px;
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
  videoVerifiedBox: css`
    background: rgba(218, 83, 44, 0.08);
    border: 1.5px dashed #DA532C;
    border-radius: 14px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13.5px;
    font-weight: 700;
    color: #1E293B;
  `
};

const RecruiterVettedHub = () => {
  const navigate = useNavigate();

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
              <CheckCircle2 size={20} color="#DA532C" />
              <span>Top 5% verified technical & domain skill scores</span>
            </li>
            <li>
              <CheckCircle2 size={20} color="#DA532C" />
              <span>AI Video Interview Assessment Recordings Included</span>
            </li>
            <li>
              <CheckCircle2 size={20} color="#DA532C" />
              <span>48-Hour Shortlist SLA Guarantee with Zero Upfront Sourcing Fee</span>
            </li>
          </ul>

          <button css={styles.ctaBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.FIND_TALENT)}>
            Request Candidate Profiles
            <ArrowRight size={18} />
          </button>
        </div>

        <div css={styles.previewCard} className="uden-card-hover">
          {CandidateNetworkImage && (
            <img src={CandidateNetworkImage} alt="Interconnected Candidate Talent Network" css={styles.networkImg} />
          )}

          <div css={styles.candidateHeader}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div css={styles.candidateAvatar}>PJ</div>
              <div>
                <div style={{ fontSize: '16px', fontWeight: '800', color: '#1E293B' }}>Palak Jain</div>
                <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: '600' }}>React & TypeScript Engineer</div>
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
            <Video size={22} color="#DA532C" />
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: '800', color: '#1E293B' }}>AI Video Interview Recording</div>
              <div style={{ fontSize: '11.5px', color: '#64748B' }}>Behavioral STAR Method & Live Code Defense</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterVettedHub;
