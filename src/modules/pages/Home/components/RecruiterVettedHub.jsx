import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { ShieldCheck, Video, Award, Clock, ArrowRight, CheckCircle2, Building, Users, Sparkles, Cpu, CheckSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

let CandidateNetworkImage;
try {
  CandidateNetworkImage = require('utils/consts/uploaded_illustrations').CandidateNetworkImage;
} catch (e) {
  CandidateNetworkImage = null;
}

const floatSlow = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const styles = {
  container: css`
    max-width: 1160px;
    margin: 0 auto;
    padding: 0 20px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  heroGrid: css`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 52px;
    align-items: center;
    margin-bottom: 56px;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(75, 99, 140, 0.1);
    color: #4B638C;
    padding: 6px 18px;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 18px;
    border: 1px solid rgba(75, 99, 140, 0.25);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 40px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.18;
    margin-bottom: 18px;
    letter-spacing: -0.8px;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }
  `,
  subtitle: css`
    font-size: 16.5px;
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
      gap: 12px;
      font-size: 15px;
      color: #1E293B;
      font-weight: 700;
      margin-bottom: 14px;
    }
  `,
  ctaBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 16px 34px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 6px 18px rgba(245, 88, 37, 0.28);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(245, 88, 37, 0.38);
    }
  `,

  /* RIGHT SIDE FLOATING PREVIEW CARD */
  previewCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 28px;
    padding: 32px;
    box-shadow: 0 20px 48px rgba(75, 99, 140, 0.12);
    animation: ${floatSlow} 4s ease-in-out infinite;
  `,
  networkImg: css`
    width: 100%;
    max-height: 180px;
    object-fit: contain;
    margin-bottom: 20px;
    border-radius: 16px;
    background: #FFFDF0;
    padding: 10px;
    border: 1.5px solid rgba(247, 188, 8, 0.4);
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
    background: #4B638C;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 17px;
    box-shadow: 0 4px 10px rgba(75, 99, 140, 0.25);
  `,
  scoreBadge: css`
    background: #FFFDF0;
    color: #1E293B;
    border: 1.5px solid #F7BC08;
    font-size: 12px;
    font-weight: 800;
    padding: 5px 12px;
    border-radius: 14px;
    box-shadow: 0 2px 6px rgba(247, 188, 8, 0.2);
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
      color: #F55825;
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
    background: rgba(75, 99, 140, 0.08);
    border: 1.5px dashed #4B638C;
    border-radius: 14px;
    padding: 16px;
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13.5px;
    font-weight: 700;
    color: #1E293B;
  `,

  /* BORDERLESS 3-COLUMN FEATURE ROW (MATCHING NXTJOB VIDEO) */
  featureColumnsGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
    padding-top: 44px;
    border-top: 1px solid #E2E8F0;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  `,
  featureColItem: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  colIconBox: css`
    width: 44px;
    height: 44px;
    border-radius: 12px;
    background: rgba(75, 99, 140, 0.12);
    color: #4B638C;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  colTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin: 0;
  `,
  colDesc: css`
    font-size: 14px;
    color: #64748B;
    line-height: 1.6;
    margin: 0;
    font-weight: 500;
  `
};

const RecruiterVettedHub = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.container}>
      {/* Native Floating Hero Grid with NO Outer Box Border */}
      <div css={styles.heroGrid}>
        <div>
          <div css={styles.badgeTag} className="uden-float-anim">
            <Building size={14} color="#F7BC08" />
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
              <CheckCircle2 size={20} color="#F55825" />
              <span>Top 5% verified technical & domain skill scores</span>
            </li>
            <li>
              <CheckCircle2 size={20} color="#F55825" />
              <span>AI Video Interview Assessment Recordings Included</span>
            </li>
            <li>
              <CheckCircle2 size={20} color="#F55825" />
              <span>48-Hour Shortlist SLA Guarantee with Zero Upfront Sourcing Fee</span>
            </li>
          </ul>

          <button css={styles.ctaBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.FIND_TALENT)}>
            Request Candidate Profiles
            <ArrowRight size={18} />
          </button>
        </div>

        {/* Right Floating Preview Card */}
        <div css={styles.previewCard} className="uden-card-hover">
          {CandidateNetworkImage && (
            <img src={CandidateNetworkImage} alt="Interconnected Candidate Talent Network" loading="lazy" decoding="async" css={styles.networkImg} />
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
            <Video size={22} color="#4B638C" />
            <div>
              <div style={{ fontSize: '13.5px', fontWeight: '800', color: '#1E293B' }}>AI Video Interview Recording</div>
              <div style={{ fontSize: '11.5px', color: '#64748B' }}>Behavioral STAR Method & Live Code Defense</div>
            </div>
          </div>
        </div>
      </div>

      {/* Borderless 3-Column Feature Row (Matching NxtJob Video Layout) */}
      <div css={styles.featureColumnsGrid}>
        <div css={styles.featureColItem}>
          <div css={styles.colIconBox}>
            <Cpu size={22} />
          </div>
          <h3 css={styles.colTitle}>AI Skill Screening</h3>
          <p css={styles.colDesc}>Turns candidate profiles into pre-assessed scorecards in seconds with verified repository logs.</p>
        </div>

        <div css={styles.featureColItem}>
          <div css={styles.colIconBox} style={{ background: 'rgba(245, 88, 37, 0.12)', color: '#F55825' }}>
            <Video size={22} />
          </div>
          <h3 css={styles.colTitle}>Verified Video Scorecards</h3>
          <p css={styles.colDesc}>Watch live code defense recordings and behavioral responses evaluated by AI analysis.</p>
        </div>

        <div css={styles.featureColItem}>
          <div css={styles.colIconBox} style={{ background: 'rgba(247, 188, 8, 0.15)', color: '#1E293B' }}>
            <ShieldCheck size={22} color="#F7BC08" />
          </div>
          <h3 css={styles.colTitle}>Zero Upfront Sourcing Fees</h3>
          <p css={styles.colDesc}>Receive a 48-hour shortlist SLA with 90-day placement retention warranty built-in.</p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterVettedHub;
