import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Sparkles, ArrowRight, CheckCircle2, Star, ShieldCheck, UserCheck, TrendingUp, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let JobTeamImage;
try {
  JobTeamImage = require('../../../../assets/images/job-team.jpg');
} catch (e) {
  JobTeamImage = process.env.PUBLIC_URL + '/images/job-team.jpg';
}

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%);
    padding: 64px 16px 56px 16px;
    border-bottom: 4px solid #4B638C;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.05fr 0.95fr;
    gap: 40px;
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
    background: #FEF5D8;
    color: #F55825;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 18px;
    border: 1px solid #F7BC08;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    align-self: flex-start;

    @media (max-width: 960px) {
      align-self: center;
    }
  `,
  title: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.18;
    margin: 0 0 16px 0;
    letter-spacing: -0.8px;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,
  subtitle: css`
    font-size: 16px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 28px;
    font-weight: 500;
  `,
  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 14px;
    margin-bottom: 28px;

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  `,
  statCard: css`
    background: #FFFFFF;
    border: 1.5px solid rgba(247, 188, 8, 0.4);
    border-radius: 16px;
    padding: 14px 18px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  statIcon: css`
    width: 40px;
    height: 40px;
    border-radius: 12px;
    background: rgba(75, 99, 140, 0.12);
    color: #4B638C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  statNum: css`
    font-size: 19px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1;
    margin-bottom: 3px;

    span {
      color: #F55825;
    }
  `,
  statLabel: css`
    font-size: 11.5px;
    color: #64748B;
    font-weight: 700;
  `,
  ctaButtonGroup: css`
    display: flex;
    gap: 14px;
    align-items: center;

    @media (max-width: 960px) {
      justify-content: center;
    }

    @media (max-width: 480px) {
      flex-direction: column;
      width: 100%;
    }
  `,
  primaryBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 14px 28px;
    border-radius: 28px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 8px 20px rgba(245, 88, 37, 0.25);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(245, 88, 37, 0.35);
    }
  `,
  secondaryBtn: css`
    background: #FFFFFF;
    color: #4B638C;
    border: 2px solid #4B638C;
    padding: 13px 24px;
    border-radius: 28px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;

    &:hover {
      background: rgba(75, 99, 140, 0.08);
      transform: translateY(-2px);
    }
  `,
  rightCol: css`
    display: flex;
    flex-direction: column;
    gap: 18px;
  `,
  jobImgBanner: css`
    width: 100%;
    max-height: 180px;
    object-fit: contain;
    border-radius: 20px;
    background: #FFFFFF;
    padding: 10px;
    border: 1.5px solid #FEF5D8;
    box-shadow: 0 8px 24px rgba(75, 99, 140, 0.08);
  `,
  profileDemoCard: css`
    background: #FFFFFF;
    border: 1.5px solid #FEF5D8;
    border-radius: 22px;
    padding: 22px;
    box-shadow: 0 14px 32px rgba(75, 99, 140, 0.1);
  `,
  profileCardHeader: css`
    display: flex;
    align-items: center;
    gap: 14px;
    margin-bottom: 20px;
    padding-bottom: 16px;
    border-bottom: 1px solid #E2E8F0;
  `,
  candidateAvatar: css`
    width: 54px;
    height: 54px;
    border-radius: 50%;
    border: 2.5px solid #4B638C;
    object-fit: cover;
  `,
  candidateName: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  candidateRole: css`
    font-size: 12.5px;
    color: #64748B;
    font-weight: 600;
  `,
  scoreBadge: css`
    margin-left: auto;
    background: rgba(247, 188, 8, 0.15);
    border: 1px solid rgba(247, 188, 8, 0.5);
    color: #1E293B;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  shortlistBanner: css`
    background: #FFFDF4;
    border: 1.5px solid rgba(247, 188, 8, 0.5);
    border-radius: 14px;
    padding: 14px;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  shortlistText: css`
    font-size: 12.5px;
    color: #1E293B;
    font-weight: 700;
    line-height: 1.4;

    span {
      color: #F55825;
    }
  `,
  evalBtn: css`
    width: 100%;
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 14px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 14.5px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: #D94616;
    }
  `
};

const JobSeekerBanner = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.heroOuter} className="uden-fade-in">
      <div css={styles.container}>
        {/* Left Column Candidate Value Proposition */}
        <div>
          <div css={styles.badgeTag} className="uden-float-anim">
            <Sparkles size={14} color="#F7BC08" />
            CANDIDATE CAREER PLATFORM
          </div>

          <h1 css={styles.title}>
            Land High-Paying Tech Jobs & <span>Work with Global Companies</span>
          </h1>

          <p css={styles.subtitle}>
            Get AI-assessed on top in-demand skills, close profile gaps with accredited upskilling tracks, and get hired directly by 150+ top companies in India & abroad.
          </p>

          <div css={styles.statsGrid}>
            <div css={styles.statCard}>
              <div css={styles.statIcon}><Building size={20} /></div>
              <div>
                <div css={styles.statNum}>150<span>+</span></div>
                <div css={styles.statLabel}>Hiring Partners</div>
              </div>
            </div>

            <div css={styles.statCard}>
              <div css={styles.statIcon}><TrendingUp size={20} /></div>
              <div>
                <div css={styles.statNum}>₹8.5L</div>
                <div css={styles.statLabel}>Average CTC</div>
              </div>
            </div>

            <div css={styles.statCard}>
              <div css={styles.statIcon}><UserCheck size={20} /></div>
              <div>
                <div css={styles.statNum}>48<span>Hrs</span></div>
                <div css={styles.statLabel}>Direct Shortlist</div>
              </div>
            </div>

            <div css={styles.statCard}>
              <div css={styles.statIcon}><ShieldCheck size={20} /></div>
              <div>
                <div css={styles.statNum}>94<span>%</span></div>
                <div css={styles.statLabel}>Offer Conversion</div>
              </div>
            </div>
          </div>

          <div css={styles.ctaButtonGroup}>
            <button css={styles.primaryBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
              Build Your Free Profile
              <ArrowRight size={18} />
            </button>
            <button css={styles.secondaryBtn} onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
              Explore Open Drives
            </button>
          </div>
        </div>

        {/* Right Column: Embedded Candidate JOB Team Illustration Banner + AI Match Card */}
        <div css={styles.rightCol}>
          <img 
            src={JobTeamImage} 
            alt="Candidate JOB Team & Opportunity Finder" 
            css={styles.jobImgBanner}
            className="uden-card-hover" 
          />

          <div css={styles.profileDemoCard} className="uden-card-hover">
            <div css={styles.profileCardHeader}>
              <img 
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
                alt="Candidate Profile" 
                css={styles.candidateAvatar} 
              />
              <div>
                <div css={styles.candidateName}>
                  Alex Sharma
                  <CheckCircle2 size={16} color="#4B638C" />
                </div>
                <div css={styles.candidateRole}>Fullstack React & Node.js Engineer</div>
              </div>

              <div css={styles.scoreBadge}>
                <Star size={14} fill="#F7BC08" color="#F7BC08" />
                96% AI Score
              </div>
            </div>

            <div css={styles.shortlistBanner}>
              <Sparkles size={20} color="#F7BC08" />
              <div css={styles.shortlistText}>
                Verified Recruiter Match: <span>Deloitte Tech</span> • Interview Shortlist Confirmed (₹9.2L / yr)
              </div>
            </div>

            <button css={styles.evalBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
              Get Free AI Profile Evaluation
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerBanner;