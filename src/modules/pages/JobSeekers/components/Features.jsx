import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Globe, TrendingUp, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';
import JobSeekersConst from '../JobSeekers.Const';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 48px;

    h2 {
      font-size: 32px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 10px;
    }

    p {
      color: #64748B;
      font-size: 15px;
      max-width: 700px;
      margin: 0 auto;
    }
  `,
  featureRow: (reverse) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    margin-bottom: 56px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 36px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      border-color: #DA532C;
      box-shadow: 0 12px 28px rgba(218, 83, 44, 0.12);
    }

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      padding: 24px;
    }

    ${reverse && `
      direction: rtl;
      * {
        direction: ltr;
      }
    `}
  `,
  featureImgBox: css`
    width: 100%;
    max-height: 280px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FFFDF7;
    border-radius: 16px;
    padding: 20px;
    border: 1px solid rgba(255, 176, 32, 0.3);

    img {
      max-width: 100%;
      max-height: 240px;
      object-fit: contain;
      border-radius: 12px;
    }
  `,
  featureContent: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 12px;
    align-self: flex-start;
  `,
  featureTitle: css`
    font-size: 24px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 12px;
  `,
  featureDesc: css`
    font-size: 14.5px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 20px;
    font-weight: 500;
  `,
  ctaBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-weight: 800;
    font-size: 13.5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    align-self: flex-start;
    transition: background 0.2s ease;

    &:hover {
      background: #B83D1B;
    }
  `
};

const featureIcons = [<Globe size={18} />, <TrendingUp size={18} />, <UserCheck size={18} />];

const JobSeekersFeature = (props) => {
  const navigate = useNavigate();
  const data = JobSeekersConst.Features;
  const features = data.features || [];

  return (
    <div css={styles.section} {...props}>
      <div css={styles.header}>
        <h2>{data.title || "Get Access to a Global Pool of Opportunities"}</h2>
        <p>UDEN provides complete support from AI baseline skill assessment to direct recruiter shortlists.</p>
      </div>

      {features.map((feat, idx) => (
        <div key={idx} css={styles.featureRow(idx % 2 === 1)}>
          <div css={styles.featureImgBox}>
            <img src={feat.image} alt={feat.title} />
          </div>

          <div css={styles.featureContent}>
            <div css={styles.badgeTag}>
              {featureIcons[idx % featureIcons.length]}
              FEATURE 0{idx + 1}
            </div>
            <h3 css={styles.featureTitle}>{feat.title}</h3>
            <p css={styles.featureDesc}>{feat.description}</p>

            <button 
              css={styles.ctaBtn}
              onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
            >
              Explore Opportunity
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default JobSeekersFeature;