import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Sparkles, ArrowRight, CheckCircle2, Star, ShieldCheck, UserCheck, TrendingUp, Building } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    padding: 64px 16px 56px 16px;
    border-bottom: 4px solid #DA532C;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      text-align: center;
      gap: 36px;
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
    margin-bottom: 20px;
    border: 1px solid rgba(218, 83, 44, 0.25);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.2;
    margin: 0 0 18px 0;

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
  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
    margin-bottom: 36px;

    @media (max-width: 540px) {
      grid-template-columns: 1fr;
    }
  `,
  statCard: css`
    background: #FFFFFF;
    border: 1.5px solid rgba(255, 176, 32, 0.4);
    border-radius: 16px;
    padding: 16px 20px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    display: flex;
    align-items: center;
    gap: 14px;
  `,
  statIcon: css`
    width: 42px;
    height: 42px;
    border-radius: 12px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  statNum: css`
    font-size: 20px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1;
    margin-bottom: 4px;

    span {
      color: #DA532C;
    }
  `,
  statLabel: css`
    font-size: 12px;
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
    background: #DA532C;
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
    box-shadow: 0 8px 20px rgba(218, 83, 44, 0.25);

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(218, 83, 44, 0.35);
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  `,
  secondaryBtn: css`
    background: #FFFFFF;
    color: #DA532C;
    border: 2px solid #DA532C;
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
      background: rgba(218, 83, 44, 0.08);
      transform: translateY(-2px);
    }

    @media (max-width: 480px) {
      width: 100%;
    }
  `,

  /* RIGHT COLUMN: AI SKILL MATCH DEMO CARD */
  profileDemoCard: css`
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 20px 40px rgba(218, 83, 44, 0.15);
    position: relative;
  `,
  profileCardHeader: css`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
    padding-bottom: 20px;
    border-bottom: 1px solid #E2E8F0;
  `,
  candidateAvatar: css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2.5px solid #DA532C;
    object-fit: cover;
  `,
  candidateName: css`
    font-size: 19px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 4px;
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  candidateRole: css`
    font-size: 13px;
    color: #64748B;
    font-weight: 600;
  `,
  scoreBadge: css`
    margin-left: auto;
    background: rgba(218, 83, 44, 0.1);
    border: 1px solid rgba(218, 83, 44, 0.3);
    color: #DA532C;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  domainPillsRow: css`
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  `,
  domainPill: (active) => css`
    padding: 8px 14px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 700;
    cursor: pointer;
    border: 1.5px solid ${active ? '#DA532C' : '#CBD5E1'};
    background: ${active ? '#DA532C' : '#F8FAFC'};
    color: ${active ? '#FFFFFF' : '#475569'};
    transition: all 0.2s ease;
  `,
  shortlistBanner: css`
    background: #FFFDF7;
    border: 1.5px solid rgba(255, 176, 32, 0.5);
    border-radius: 14px;
    padding: 16px;
    margin-bottom: 24px;
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  shortlistText: css`
    font-size: 13px;
    color: #1E293B;
    font-weight: 700;
    line-height: 1.4;

    span {
      color: #DA532C;
    }
  `,
  evalBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px;
    border-radius: 14px;
    font-weight: 800;
    font-size: 15px;
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

const JobSeekerBanner = () => {
  const [selectedPill, setSelectedPill] = useState('react');
  const navigate = useNavigate();

  return (
    <div css={styles.heroOuter}>
      <div css={styles.container}>
        {/* Left Column Candidate Value Proposition */}
        <div>
          <div css={styles.badgeTag}>
            <Sparkles size={14} />
            CANDIDATE CAREER PLATFORM
          </div>

          <h1 css={styles.title}>
            Land High-Paying Tech Jobs & <span>Work with Global Companies</span>
          </h1>

          <p css={styles.subtitle}>
            Get AI-assessed on top in-demand skills, close profile gaps with accredited upskilling tracks, and get hired directly by 150+ top companies in India & abroad.
          </p>

          {/* 4 Stat Metrics Grid */}
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

          {/* Action CTAs */}
          <div css={styles.ctaButtonGroup}>
            <button 
              css={styles.primaryBtn}
              onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
            >
              Build Your Free Profile
              <ArrowRight size={18} />
            </button>
            <button 
              css={styles.secondaryBtn}
              onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
            >
              Explore Open Drives
            </button>
          </div>
        </div>

        {/* Right Column Interactive AI Skill Match Card */}
        <div css={styles.profileDemoCard}>
          <div css={styles.profileCardHeader}>
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80" 
              alt="Candidate Profile" 
              css={styles.candidateAvatar} 
            />
            <div>
              <div css={styles.candidateName}>
                Alex Sharma
                <CheckCircle2 size={16} color="#DA532C" />
              </div>
              <div css={styles.candidateRole}>Fullstack React & Node.js Engineer</div>
            </div>

            <div css={styles.scoreBadge}>
              <Star size={14} fill="#DA532C" color="#DA532C" />
              96% AI Score
            </div>
          </div>

          {/* Interactive Skill Domain Selector */}
          <div css={styles.domainPillsRow}>
            <button 
              css={styles.domainPill(selectedPill === 'react')}
              onClick={() => setSelectedPill('react')}
            >
              Frontend React
            </button>
            <button 
              css={styles.domainPill(selectedPill === 'aws')}
              onClick={() => setSelectedPill('aws')}
            >
              AWS Cloud
            </button>
            <button 
              css={styles.domainPill(selectedPill === 'ai')}
              onClick={() => setSelectedPill('ai')}
            >
              Python & AI
            </button>
          </div>

          {/* Real-Time Shortlist Status Banner */}
          <div css={styles.shortlistBanner}>
            <Sparkles size={20} color="#DA532C" />
            <div css={styles.shortlistText}>
              Verified Recruiter Match: <span>Deloitte Tech</span> • Interview Shortlist Confirmed (₹9.2L / yr)
            </div>
          </div>

          <button 
            css={styles.evalBtn}
            onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
          >
            Get Free AI Profile Evaluation
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSeekerBanner;