import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Linkedin } from 'lucide-react';
import AboutUsConst from '../AboutUs.Const';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
    text-align: center;
  `,
  heading: css`
    font-size: 34px;
    font-weight: 900;
    color: #DA532C;
    margin-bottom: 36px;
  `,
  grid: css`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 32px;
    flex-wrap: wrap;
  `,
  card: css`
    background: #FFFDF7;
    border: 1.5px solid rgba(255, 176, 32, 0.4);
    border-radius: 20px;
    padding: 32px 40px;
    text-align: center;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    align-items: center;
    min-width: 280px;
    max-width: 340px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 28px rgba(218, 83, 44, 0.15);
      border-color: #DA532C;
    }
  `,
  avatar: css`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    border: 3px solid #DA532C;
    object-fit: cover;
    margin-bottom: 18px;
    box-shadow: 0 6px 16px rgba(218, 83, 44, 0.2);
  `,
  nameRow: css`
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 6px;
  `,
  name: css`
    font-size: 20px;
    font-weight: 800;
    color: #1E293B;
  `,
  designation: css`
    font-size: 13.5px;
    color: #64748B;
    font-weight: 600;
  `,
  linkedinLink: css`
    color: #DA532C;
    display: inline-flex;
    align-items: center;
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(1.15);
    }
  `
};

const AdvisorBoard = () => {
  const advisors = AboutUsConst?.AdvisoryBoard?.advisor || [];
  const title = AboutUsConst?.AdvisoryBoard?.title || "Advisor & Angel Investor";

  return (
    <div css={styles.section}>
      <h2 css={styles.heading}>{title}</h2>

      <div css={styles.grid}>
        {advisors.map((advisor) => (
          <div key={advisor.id} css={styles.card}>
            <img src={advisor.image} alt={advisor.name} css={styles.avatar} />

            <div css={styles.nameRow}>
              <span css={styles.name}>{advisor.name}</span>
              {advisor.linkedinUrl && (
                <a 
                  href={advisor.linkedinUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  css={styles.linkedinLink}
                  aria-label={`${advisor.name} LinkedIn Profile`}
                >
                  <Linkedin size={18} fill="#DA532C" color="#DA532C" />
                </a>
              )}
            </div>

            <div css={styles.designation}>{advisor.designation}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdvisorBoard;
