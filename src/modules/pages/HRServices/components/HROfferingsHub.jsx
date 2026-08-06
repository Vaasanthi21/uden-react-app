import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';

const styles = {
  section: css`
    background: #FFFFFF;
    padding: 70px 20px;
    font-family: 'Segoe UI', Arial, sans-serif;
  `,
  mainTitle: css`
    text-align: center;
    font-size: 34px;
    font-weight: 900;
    color: #F55825;
    margin-bottom: 60px;
    letter-spacing: -0.5px;
  `,
  diagramGrid: css`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 380px 1fr;
    gap: 20px;
    align-items: center;

    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
      gap: 40px;
    }
  `,
  colLeft: css`
    display: flex;
    flex-direction: column;
    gap: 48px;
    text-align: right;

    @media (max-width: 1024px) {
      text-align: left;
      gap: 32px;
    }
  `,
  colRight: css`
    display: flex;
    flex-direction: column;
    gap: 48px;
    text-align: left;

    @media (max-width: 1024px) {
      gap: 32px;
    }
  `,
  offeringBlock: css`
    position: relative;
    
    h3 {
      font-size: 21px;
      font-weight: 800;
      color: #000000;
      margin: 0 0 8px 0;
      line-height: 1.3;
    }

    p {
      font-size: 13.5px;
      color: #333333;
      line-height: 1.6;
      margin: 0;
      font-weight: 500;
    }
  `,
  wheelCenter: css`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `,
  bottomBlock: css`
    max-width: 680px;
    margin: 50px auto 0 auto;
    text-align: center;

    h3 {
      font-size: 21px;
      font-weight: 800;
      color: #000000;
      margin-bottom: 8px;
    }

    p {
      font-size: 13.5px;
      color: #333333;
      line-height: 1.6;
      margin: 0;
      font-weight: 500;
    }
  `
};

const HROfferingsHub = () => {
  return (
    <div css={styles.section}>
      {/* Title matching exact image */}
      <h2 css={styles.mainTitle}>HR Services Offerings of UDEN</h2>

      <div css={styles.diagramGrid}>
        {/* Left Column Offerings */}
        <div css={styles.colLeft}>
          <div css={styles.offeringBlock}>
            <h3>HR Policy and Compliance</h3>
            <p>
              UDEN with its expertise along with the stakeholders will create and roll out world class employee policies that covers the Workplace , Employee Benefits, ESG, CSR and that are compliant with the local laws .
            </p>
          </div>

          <div css={styles.offeringBlock}>
            <h3>HR Operations</h3>
            <p>
              UDEN will develop complete onboarding process that will emphasize on organizations values, eliminate the unproductive transactions, and optimize the process. Having strong onboarding process will help create loyalty and develop employer brand.
            </p>
          </div>

          <div css={styles.offeringBlock}>
            <h3>Campus to Corporate Program:</h3>
            <p>
              With its expertise and industry experience, UDEN can help in conceptualising, designing, and executing a complete Campus to Corporate program. This certainly helps the growing organization develop best in class work culture, develop internal talent, manage labour cost effectively and significantly.
            </p>
          </div>
        </div>

        {/* Center Ring Diagram matching exact image */}
        <div css={styles.wheelCenter}>
          <svg width="340" height="340" viewBox="0 0 340 340">
            {/* Radiating gray connecting lines */}
            <line x1="55" y1="85" x2="0" y2="60" stroke="#777777" strokeWidth="2" />
            <line x1="30" y1="170" x2="0" y2="170" stroke="#777777" strokeWidth="2" />
            <line x1="55" y1="255" x2="0" y2="280" stroke="#777777" strokeWidth="2" />
            
            <line x1="285" y1="85" x2="340" y2="60" stroke="#777777" strokeWidth="2" />
            <line x1="310" y1="170" x2="340" y2="170" stroke="#777777" strokeWidth="2" />
            <line x1="285" y1="255" x2="340" y2="280" stroke="#777777" strokeWidth="2" />

            {/* Thick Orange Ring */}
            <circle cx="170" cy="170" r="130" stroke="#F55825" strokeWidth="18" fill="none" />

            {/* 6 Connector Nodes along Ring */}
            <circle cx="55" cy="85" r="9" fill="#F55825" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="30" cy="170" r="9" fill="#F55825" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="55" cy="255" r="9" fill="#F55825" stroke="#FFFFFF" strokeWidth="3" />

            <circle cx="285" cy="85" r="9" fill="#F55825" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="310" cy="170" r="9" fill="#F55825" stroke="#FFFFFF" strokeWidth="3" />
            <circle cx="285" cy="255" r="9" fill="#F55825" stroke="#FFFFFF" strokeWidth="3" />

            {/* Speech Bubbles at top center */}
            <g transform="translate(110, 80)">
              <ellipse cx="25" cy="22" rx="14" ry="11" fill="#F55825" />
              <path d="M22 30 L16 38 L27 33 Z" fill="#F55825" />

              <ellipse cx="60" cy="16" rx="20" ry="15" fill="#F55825" />
              <path d="M56 28 L50 38 L63 31 Z" fill="#F55825" />

              <ellipse cx="95" cy="26" rx="16" ry="12" fill="#F55825" />
              <path d="M92 35 L86 43 L97 37 Z" fill="#F55825" />
            </g>

            {/* 3 Executive Avatars at center */}
            <g transform="translate(95, 135)">
              {/* Left Person */}
              <circle cx="30" cy="30" r="14" fill="#F55825" />
              <path d="M10 75 C10 50, 50 50, 50 75 Z" fill="#F55825" />
              {/* Tie */}
              <polygon points="30,52 33,65 30,72 27,65" fill="#FFFFFF" />

              {/* Right Person */}
              <circle cx="120" cy="30" r="14" fill="#F55825" />
              <path d="M100 75 C100 50, 140 50, 140 75 Z" fill="#F55825" />
              {/* Tie */}
              <polygon points="120,52 123,65 120,72 117,65" fill="#FFFFFF" />

              {/* Center Main Person (Slightly Larger & In Front) */}
              <circle cx="75" cy="22" r="17" fill="#F55825" />
              <path d="M50 85 C50 55, 100 55, 100 85 Z" fill="#F55825" />
              {/* Collar & Tie */}
              <polygon points="75,55 80,72 75,82 70,72" fill="#FFFFFF" />
            </g>
          </svg>
        </div>

        {/* Right Column Offerings */}
        <div css={styles.colRight}>
          <div css={styles.offeringBlock}>
            <h3>Employee Engagement</h3>
            <p>
              UDEN can design and run various employee engagement events that would help build team bonding, destress employees and make a fun work environment
            </p>
          </div>

          <div css={styles.offeringBlock}>
            <h3>Performance Management</h3>
            <p>
              UDEN helps organization to define and design its performance philosophy and process. In the highly volatile talent market, having right performance management process, metrics and philosophy helps organization to retain, develop top talent.
            </p>
          </div>

          <div css={styles.offeringBlock}>
            <h3>Career Pathing</h3>
            <p>
              UDEN with its methodology, will help create the career paths that promote meritocracy and focuses on identifying the talent early and help grow faster in the organization.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Center Offering */}
      <div css={styles.bottomBlock}>
        <h3>Vision Mission Values Statement</h3>
        <p>
          UDEN has expertise in developing the vision, mission and values statement for the organization.
        </p>
      </div>
    </div>
  );
};

export default HROfferingsHub;
