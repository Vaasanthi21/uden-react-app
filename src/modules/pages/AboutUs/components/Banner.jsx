import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Sparkles, Globe, ShieldCheck, Target, CheckCircle2 } from 'lucide-react';

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
    padding: 70px 16px 50px 16px;
    color: #FFFFFF;
    text-align: center;
    border-bottom: 4px solid #F55825;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 900px;
    margin: 0 auto;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(245, 88, 37, 0.15);
    color: #F55825;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 20px;
    border: 1px solid rgba(245, 88, 37, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 44px;
    font-weight: 900;
    color: #FFFFFF;
    line-height: 1.25;
    margin: 0 0 20px 0;
    letter-spacing: -0.8px;

    span {
      color: #F7BC08;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,
  subtitle: css`
    font-size: 17.5px;
    color: #CBD5E1;
    line-height: 1.65;
    margin-bottom: 40px;
    max-width: 780px;
    margin-left: auto;
    margin-right: auto;
  `,
  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  `,
  statCard: css`
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 18px;
    padding: 24px;
    text-align: center;

    h3 {
      font-size: 34px;
      font-weight: 900;
      color: #F7BC08;
      margin: 0 0 4px 0;
    }

    p {
      font-size: 13px;
      color: #94A3B8;
      margin: 0;
      font-weight: 700;
    }
  `,

  /* ABOUT UDEN OFFICIAL VISION & ECOSYSTEM SECTION */
  aboutContentSection: css`
    background: #FFFFFF;
    padding: 80px 20px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  aboutGrid: css`
    max-width: 1160px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 0.85fr 1.15fr;
    gap: 56px;
    align-items: center;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  `,
  illustrationBox: css`
    background: #FFFDF7;
    border: 2px solid #FEF5D8;
    border-radius: 28px;
    padding: 40px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 16px 36px rgba(75, 99, 140, 0.06);
    text-align: center;
  `,
  aboutHeading: css`
    font-size: 40px;
    font-weight: 900;
    color: #F55825;
    margin: 0 0 20px 0;
    letter-spacing: -0.5px;
  `,
  paragraphText: css`
    font-size: 15.5px;
    color: #334155;
    line-height: 1.75;
    margin-bottom: 20px;
    font-weight: 500;

    &:last-child {
      margin-bottom: 0;
    }
  `
};

const AboutBanner = () => {
  return (
    <div>
      {/* 1. Hero Mission Statement Banner */}
      <div css={styles.heroOuter}>
        <div css={styles.container}>
          <div css={styles.badgeTag}>
            <Sparkles size={14} />
            OUR PURPOSE &amp; MISSION
          </div>
          <h1 css={styles.title}>
            Unifying <span>Development &amp; Employment</span> Across the Globe
          </h1>
          <p css={styles.subtitle}>
            UDEN (Unified Development and Employment Network) bridges the gap between ambitious talent, accredited upskilling academies, and enterprise employers through algorithmic matching.
          </p>

          <div css={styles.statsGrid}>
            <div css={styles.statCard}>
              <h3>25,000+</h3>
              <p>Students Assessed</p>
            </div>
            <div css={styles.statCard}>
              <h3>150+</h3>
              <p>Corporate Partners</p>
            </div>
            <div css={styles.statCard}>
              <h3>98%</h3>
              <p>Placement Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Official About UDEN Vision & Platform Model Section (From Screenshot) */}
      <div css={styles.aboutContentSection}>
        <div css={styles.aboutGrid}>
          {/* Left Column Vector Puzzle Illustration */}
          <div css={styles.illustrationBox} className="uden-card-hover">
            <svg viewBox="0 0 320 280" style={{ width: '100%', maxHeight: '260px' }}>
              <defs>
                <linearGradient id="puzzleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#F55825" />
                  <stop offset="100%" stopColor="#F7BC08" />
                </linearGradient>
              </defs>
              {/* Person vector sketch */}
              <circle cx="90" cy="110" r="22" fill="#1E293B" />
              <path d="M 60,190 C 60,140 120,140 120,190 Z" fill="#1E293B" />
              <rect x="70" y="190" width="16" height="60" rx="4" fill="#1E293B" />
              <rect x="94" y="190" width="16" height="60" rx="4" fill="#1E293B" />
              
              {/* Puzzle Piece being fitted */}
              <path d="M 170,80 L 230,80 Q 245,80 245,95 Q 245,110 230,110 L 230,140 L 170,140 Z" fill="url(#puzzleGrad)" />
              <rect x="170" y="150" width="60" height="60" rx="12" fill="#F55825" opacity="0.85" />
              <rect x="240" y="80" width="60" height="60" rx="12" fill="#FEF5D8" stroke="#F7BC08" strokeWidth="3" />
              <rect x="240" y="150" width="60" height="60" rx="12" fill="url(#puzzleGrad)" opacity="0.9" />
            </svg>
            <div style={{ marginTop: '20px', fontWeight: 800, color: '#1E293B', fontSize: '15px' }}>
              Algorithmic Talent-Company Fitment Engine
            </div>
          </div>

          {/* Right Column Official About UDEN Information Text */}
          <div>
            <h2 css={styles.aboutHeading}>About UDEN</h2>
            
            <p css={styles.paragraphText}>
              To create an AI/ML powered ecosystem where the right talent gets guidance to access World's best opportunities. The platform facilitates an algorithmic fitment between the profile of the Talent and what global Companies require to meet their business demand.
            </p>

            <p css={styles.paragraphText}>
              UDEN platform ensures all companies get deserving and aspiring talents for their teams with a minimum effort toward the recruitment process. It helps minimize the cost of onboarding with our "Hire only Trained" model through process, IP's.
            </p>

            <p css={styles.paragraphText}>
              UDEN platform serves as an unbiased and neutral agency to rate/review and guide training and upskilling institutions based on industry requirements. It will be the one-stop solution for all job and course-related suggestions for job seekers and students. This initiative also provides us a vehicle to do our bit to create a better world for tomorrow.
            </p>

            <p css={styles.paragraphText}>
              The platform helps contribute to sustainability by promoting remote working and connecting global talent with businesses across the world. The reduced travel and local commute help reduce the carbon footprint. The platform will act as a means for the Talent to realize their dreams and meet their aspirations. It will also open up the world of opportunities to the talent in Tier-2/ 3 cities across the globe, which also increases the availability of Talent to the companies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;