import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Award, Briefcase, MapPin, CheckCircle2, ArrowRight, UserCheck, Sparkles, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let StudentRoadmapImage, CandidateNetworkImage, AiRobotTeamImage, FaqSupportDeskImage, RecruitmentTeamImage;
try {
  const illustrations = require('../../../../utils/consts/uploaded_illustrations');
  StudentRoadmapImage = illustrations.StudentRoadmapImage;
  CandidateNetworkImage = illustrations.CandidateNetworkImage;
  AiRobotTeamImage = illustrations.AiRobotTeamImage;
  FaqSupportDeskImage = illustrations.FaqSupportDeskImage;
  RecruitmentTeamImage = illustrations.RecruitmentTeamImage;
} catch (e) {
  StudentRoadmapImage = null;
  CandidateNetworkImage = null;
  AiRobotTeamImage = null;
  FaqSupportDeskImage = null;
  RecruitmentTeamImage = null;
}

const candidateBanners = [
  StudentRoadmapImage,
  CandidateNetworkImage,
  AiRobotTeamImage,
  FaqSupportDeskImage
];

const styles = {
  section: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  topHeroBanner: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%);
    border: 1.5px solid rgba(247, 188, 8, 0.5);
    border-radius: 24px;
    padding: 32px;
    margin-bottom: 44px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 36px;
    align-items: center;
    box-shadow: 0 16px 36px rgba(75, 99, 140, 0.08);

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `,
  topImg: css`
    width: 100%;
    max-height: 220px;
    object-fit: contain;
    border-radius: 16px;
    background: #FFFFFF;
    padding: 8px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  `,
  header: css`
    text-align: center;
    margin-bottom: 40px;

    h2 {
      font-size: 34px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 10px;
      letter-spacing: -0.5px;

      span {
        color: #F55825;
      }
    }

    p {
      color: #64748B;
      font-size: 16px;
      font-weight: 500;
    }
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  card: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 22px;
    padding: 24px;
    box-shadow: 0 12px 32px rgba(75, 99, 140, 0.07);
    transition: all 0.35s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-6px);
      border-color: #4B638C;
      box-shadow: 0 20px 40px rgba(75, 99, 140, 0.15);
    }
  `,
  cardImgBanner: css`
    width: 100%;
    max-height: 120px;
    object-fit: contain;
    border-radius: 12px;
    background: #FFFDF0;
    padding: 6px;
    border: 1px solid rgba(247, 188, 8, 0.4);
    margin-bottom: 16px;
  `,
  candidateHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  `,
  avatarBadge: css`
    width: 42px;
    height: 42px;
    border-radius: 50%;
    background: #4B638C;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 15px;
    box-shadow: 0 4px 10px rgba(75, 99, 140, 0.25);
  `,
  verifiedTag: css`
    background: #FFFDF0;
    color: #1E293B;
    font-size: 12px;
    font-weight: 800;
    padding: 4px 12px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1.5px solid #F7BC08;
    box-shadow: 0 2px 6px rgba(247, 188, 8, 0.2);
  `,
  roleTitle: css`
    font-size: 17px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 6px;
    line-height: 1.3;
  `,
  experienceRow: css`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    color: #64748B;
    font-weight: 600;
    margin-bottom: 16px;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `,
  skillsTags: css`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
  `,
  skillChip: css`
    background: #FFFDF0;
    color: #4B638C;
    font-size: 11.5px;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 8px;
    border: 1px solid rgba(247, 188, 8, 0.5);
  `,
  footerRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #E2E8F0;
    padding-top: 14px;
  `,
  noticeText: css`
    font-size: 12px;
    font-weight: 800;
    color: #10B981;
  `,
  requestLink: css`
    color: #F55825;
    font-weight: 800;
    font-size: 13px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      text-decoration: underline;
    }
  `
};

const topCandidates = [
  {
    initials: 'SK',
    role: 'Senior React 18 & Next.js Lead',
    exp: '5.5 Years',
    location: 'Remote / India',
    score: '96% Match',
    skills: ['React 18', 'Next.js', 'TypeScript', 'Redux'],
    notice: '⚡ Immediate Joiner'
  },
  {
    initials: 'AP',
    role: 'AWS Cloud & DevOps Architect',
    exp: '4.0 Years',
    location: 'Hybrid / APAC',
    score: '94% Match',
    skills: ['AWS EC2', 'Docker', 'Kubernetes', 'CI/CD'],
    notice: '⚡ 15 Days Notice'
  },
  {
    initials: 'VK',
    role: 'AI / Python Data Engineer',
    exp: '3.5 Years',
    location: 'Remote / Global',
    score: '95% Match',
    skills: ['Python', 'Django', 'PyTorch', 'LLMs'],
    notice: '⚡ Immediate Joiner'
  },
  {
    initials: 'RD',
    role: 'Flutter Cross-Platform Specialist',
    exp: '3.0 Years',
    location: 'Remote / India',
    score: '91% Match',
    skills: ['Flutter', 'Dart', 'BLoC', 'Firebase'],
    notice: '⚡ Immediate Joiner'
  }
];

const TalentPoolPreview = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.section} className="uden-fade-in">
      {/* Feature Header Banner with Recruitment Team Illustration */}
      {RecruitmentTeamImage && (
        <div css={styles.topHeroBanner} className="uden-card-hover">
          <div>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#FFFDF0', color: '#4B638C', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: '800', marginBottom: '14px', border: '1.5px solid #F7BC08' }}>
              <ShieldCheck size={14} color="#F7BC08" />
              PRE-VETTED TALENT SPOTLIGHT
            </div>
            <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#1E293B', marginBottom: '10px' }}>
              Hire Verified Engineers with Zero Upfront Sourcing Fees
            </h3>
            <p style={{ fontSize: '14.5px', color: '#475569', lineHeight: '1.6', marginBottom: '20px' }}>
              Every candidate in our spotlight pool undergoes rigorous AI technical assessments, system design interviews, and background verifications.
            </p>
            <button 
              style={{ background: '#F55825', color: '#FFFFFF', border: 'none', padding: '12px 24px', borderRadius: '24px', fontWeight: '800', fontSize: '14px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px', boxShadow: '0 6px 18px rgba(245, 88, 37, 0.28)' }}
              className="uden-pulse-btn"
              onClick={() => navigate(AppRoutes.FIND_TALENT)}
            >
              Request Full Candidate Roster
              <ArrowRight size={16} />
            </button>
          </div>

          <img src={RecruitmentTeamImage} alt="Recruitment Team & Candidate Spotlight" css={styles.topImg} />
        </div>
      )}

      <div css={styles.header}>
        <h2>
          Pre-Assessed <span>Candidate Spotlight</span>
        </h2>
        <p>Preview top-rated talent actively seeking opportunities across engineering teams.</p>
      </div>

      <div css={styles.grid}>
        {topCandidates.map((c, idx) => {
          const bannerImg = candidateBanners[idx];

          return (
            <div key={idx} css={styles.card} className="uden-card-hover">
              <div>
                {bannerImg && (
                  <img src={bannerImg} alt={c.role} css={styles.cardImgBanner} />
                )}

                <div css={styles.candidateHeader}>
                  <div css={styles.avatarBadge}>{c.initials}</div>
                  <div css={styles.verifiedTag}>
                    <Award size={13} color="#F7BC08" />
                    {c.score}
                  </div>
                </div>

                <div css={styles.roleTitle}>{c.role}</div>
                <div css={styles.experienceRow}>
                  <span><Briefcase size={14} /> {c.exp}</span>
                  <span><MapPin size={14} /> {c.location}</span>
                </div>

                <div css={styles.skillsTags}>
                  {c.skills.map((s, i) => (
                    <span key={i} css={styles.skillChip}>{s}</span>
                  ))}
                </div>
              </div>

              <div css={styles.footerRow}>
                <span css={styles.noticeText}>{c.notice}</span>
                <button 
                  css={styles.requestLink}
                  onClick={() => navigate(AppRoutes.FIND_TALENT)}
                >
                  Request Profile
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TalentPoolPreview;
