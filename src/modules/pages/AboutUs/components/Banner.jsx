import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Sparkles, Globe, Target, Award } from 'lucide-react';

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #2D2221 0%, #1A1A1A 100%);
    padding: 70px 16px 50px 16px;
    color: #FFFFFF;
    text-align: center;
    border-bottom: 4px solid #DA532C;
  `,
  container: css`
    max-width: 900px;
    margin: 0 auto;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(218, 83, 44, 0.2);
    color: #DA532C;
    padding: 6px 18px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 20px;
    border: 1px solid rgba(218, 83, 44, 0.3);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 46px;
    font-weight: 900;
    color: #FFFFFF;
    line-height: 1.25;
    margin: 0 0 20px 0;
    letter-spacing: -0.8px;

    span {
      color: #FFB020;
    }

    @media (max-width: 768px) {
      font-size: 34px;
    }
  `,
  subtitle: css`
    font-size: 18px;
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
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 16px;
    padding: 24px;
    text-align: center;

    h3 {
      font-size: 34px;
      font-weight: 900;
      color: #FFB020;
      margin: 0 0 4px 0;
    }

    p {
      font-size: 13px;
      color: #94A3B8;
      margin: 0;
      font-weight: 600;
    }
  `
};

const AboutBanner = () => {
  return (
    <div css={styles.heroOuter}>
      <div css={styles.container}>
        <div css={styles.badgeTag}>
          <Sparkles size={14} />
          OUR PURPOSE & MISSION
        </div>
        <h1 css={styles.title}>
          Unifying <span>Development & Employment</span> Across the Globe
        </h1>
        <p css={styles.subtitle}>
          UDEN (Unified Development and Employment Network) bridges the gap between ambitious talent, accredited upskilling academies, and enterprise employers through data-driven matching.
        </p>

        <div css={styles.statsGrid}>
          <div css={styles.statCard}>
            <h3>2,500+</h3>
            <p>Careers Placed</p>
          </div>
          <div css={styles.statCard}>
            <h3>150+</h3>
            <p>Corporate Partners</p>
          </div>
          <div css={styles.statCard}>
            <h3>50+</h3>
            <p>Accredited Academies</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBanner;