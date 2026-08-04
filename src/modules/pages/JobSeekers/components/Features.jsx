import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { ArrowRight, Download, Award, Palette, BrainCircuit, FileText } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

let StudentRoadmapImage, CandidateNetworkImage, AiRobotTeamImage, FaqSupportDeskImage;
try {
  const illustrations = require('utils/consts/uploaded_illustrations');
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

const marqueeScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const styles = {
  sectionOuter: css`
    width: 100%;
    background: linear-gradient(180deg, #FFFDF7 0%, #FFFDF0 100%);
    padding: 80px 0;
    position: relative;
    overflow: hidden;
    color: #1E293B;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    border-bottom: 2px solid rgba(75, 99, 140, 0.15);
  `,
  container: css`
    max-width: 1240px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  `,
  header: css`
    text-align: center;
    margin-bottom: 48px;

    h2 {
      font-size: 38px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 12px;
      letter-spacing: -0.8px;

      span {
        color: #F55825;
      }
    }

    p {
      color: #475569;
      font-size: 16px;
      max-width: 680px;
      margin: 0 auto;
      font-weight: 500;
      line-height: 1.6;
    }
  `,

  /* INFINITE MARQUEE TRACK CONTAINER */
  marqueeWrapper: css`
    width: 100%;
    overflow: hidden;
    padding: 20px 0;
    mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
  `,
  marqueeTrack: css`
    display: flex;
    gap: 28px;
    width: max-content;
    animation: ${marqueeScroll} 28s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  `,
  cardItem: css`
    width: 340px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 28px;
    padding: 32px 28px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 16px 36px rgba(75, 99, 140, 0.08);
    cursor: pointer;

    &:hover {
      transform: translateY(-8px);
      border-color: #F55825;
      box-shadow: 0 24px 48px rgba(245, 88, 37, 0.2);
    }
  `,
  previewImgBox: css`
    width: 100%;
    height: 170px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
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
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: rgba(75, 99, 140, 0.12);
    border: 1px solid rgba(75, 99, 140, 0.25);
    color: #4B638C;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    box-shadow: 0 4px 10px rgba(75, 99, 140, 0.1);
  `,
  cardTitle: css`
    font-size: 21px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 10px;
    line-height: 1.3;
  `,
  cardDesc: css`
    font-size: 14px;
    color: #475569;
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
      color: #D94616;
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

// Duplicate suite features array for seamless infinite marquee loop
const marqueeItems = [...suiteFeatures, ...suiteFeatures];

const JobSeekersFeature = (props) => {
  const navigate = useNavigate();

  return (
    <div css={styles.sectionOuter} {...props}>
      <div css={styles.container}>
        <div css={styles.header}>
          <h2>Get 3x More Interview Calls <span>with UDEN AI Suite</span></h2>
          <p>We don't just build resumes — we craft them for impact using AI and expert recruiter insights. Hover to pause.</p>
        </div>
      </div>

      {/* Infinite Seamless Marquee Track */}
      <div css={styles.marqueeWrapper}>
        <div css={styles.marqueeTrack}>
          {marqueeItems.map((item, idx) => (
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
  );
};

export default JobSeekersFeature;