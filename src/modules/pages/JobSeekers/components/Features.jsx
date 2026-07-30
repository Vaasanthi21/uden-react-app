import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Download, Award, Palette, BrainCircuit, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

let StudentRoadmapImage, CandidateNetworkImage, AiRobotTeamImage, FaqSupportDeskImage;
try {
  const illustrations = require('../../../../utils/consts/uploaded_illustrations');
  StudentRoadmapImage = illustrations.StudentRoadmapImage;
  CandidateNetworkImage = illustrations.CandidateNetworkImage;
  AiRobotTeamImage = illustrations.AiRobotTeamImage;
  FaqSupportDeskImage = illustrations.FaqSupportDeskImage;
} catch (e) {
  StudentRoadmapImage = null;
  CandidateNetworkImage = null;
  AiRobotTeamImage = null;
  FaqSupportDeskImage = null;
}

const styles = {
  sectionOuter: css`
    width: 100%;
    background: linear-gradient(180deg, #0B0F17 0%, #111827 100%);
    padding: 90px 20px;
    position: relative;
    overflow: hidden;
    color: #FFFFFF;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1240px;
    margin: 0 auto;
    position: relative;
    z-index: 2;
  `,
  header: css`
    text-align: center;
    margin-bottom: 56px;

    h2 {
      font-size: 38px;
      font-weight: 900;
      color: #FFFFFF;
      margin-bottom: 12px;
      letter-spacing: -0.8px;

      span {
        color: #F55825;
        background: linear-gradient(135deg, #F55825 0%, #F7BC08 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

    p {
      color: #94A3B8;
      font-size: 16px;
      max-width: 680px;
      margin: 0 auto;
      font-weight: 500;
      line-height: 1.6;
    }
  `,

  /* HORIZONTAL SLIDING CAROUSEL TRACK */
  trackWrapper: css`
    width: 100%;
    overflow-x: auto;
    scroll-behavior: smooth;
    padding: 20px 0 40px 0;

    /* Custom scrollbar styling */
    &::-webkit-scrollbar {
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: rgba(255, 255, 255, 0.05);
      border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: #F55825;
      border-radius: 4px;
    }
  `,
  cardsTrack: css`
    display: flex;
    gap: 28px;
    width: max-content;
  `,
  cardItem: css`
    width: 340px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1.5px solid rgba(255, 255, 255, 0.1);
    border-radius: 28px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      border-color: #F55825;
      background: rgba(255, 255, 255, 0.08);
      box-shadow: 0 20px 48px rgba(245, 88, 37, 0.25);
    }
  `,
  previewImgBox: css`
    width: 100%;
    height: 170px;
    background: rgba(15, 23, 42, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 18px;
    padding: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }
  `,
  iconBox: css`
    width: 46px;
    height: 46px;
    border-radius: 14px;
    background: rgba(245, 88, 37, 0.15);
    border: 1px solid rgba(245, 88, 37, 0.4);
    color: #F7BC08;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
  `,
  cardTitle: css`
    font-size: 21px;
    font-weight: 800;
    color: #FFFFFF;
    margin-bottom: 10px;
    line-height: 1.3;
  `,
  cardDesc: css`
    font-size: 14px;
    color: #94A3B8;
    line-height: 1.6;
    margin-bottom: 24px;
    font-weight: 500;
  `,
  openCta: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: #F55825;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    transition: all 0.25s ease;

    &:hover {
      color: #F7BC08;
      transform: translateX(4px);
    }
  `
};

const suiteFeatures = [
  {
    title: 'Unlimited Profile Downloads',
    desc: 'Perfect your candidate profile and resume on your terms with zero limits or paywalls.',
    icon: <Download size={22} />,
    image: StudentRoadmapImage
  },
  {
    title: 'Professional AI Templates',
    desc: 'Designed to hook recruiter attention in seconds with pre-assessed skill badges.',
    icon: <Award size={22} />,
    image: CandidateNetworkImage
  },
  {
    title: 'Custom Fonts & Brand Colors',
    desc: 'Pick your color palette, font styles, and personal branding hierarchy in one flow.',
    icon: <Palette size={22} />,
    image: AiRobotTeamImage
  },
  {
    title: 'AI Feedback & Scorecard',
    desc: 'Helps to grab recruiters attention with automated ATS resume score insights.',
    icon: <BrainCircuit size={22} />,
    image: FaqSupportDeskImage
  }
];

const JobSeekersFeature = (props) => {
  const navigate = useNavigate();

  return (
    <div css={styles.sectionOuter} {...props}>
      <div css={styles.container}>
        <div css={styles.header}>
          <h2>Get 3x More Interview Calls <span>with UDEN AI Suite</span></h2>
          <p>We don't just build resumes — we craft them for impact using AI and expert recruiter insights.</p>
        </div>

        {/* Horizontal Sliding Cards Track matching NxtJob.ai Video */}
        <div css={styles.trackWrapper}>
          <div css={styles.cardsTrack}>
            {suiteFeatures.map((item, idx) => (
              <div 
                key={idx} 
                css={styles.cardItem}
                onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
              >
                <div>
                  <div css={styles.previewImgBox}>
                    {item.image ? (
                      <img src={item.image} alt={item.title} />
                    ) : (
                      <FileText size={48} color="#4B638C" />
                    )}
                  </div>

                  <div css={styles.iconBox}>{item.icon}</div>
                  <h3 css={styles.cardTitle}>{item.title}</h3>
                  <p css={styles.cardDesc}>{item.desc}</p>
                </div>

                <div css={styles.openCta}>
                  <span>Explore Feature</span>
                  <ArrowRight size={15} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSeekersFeature;