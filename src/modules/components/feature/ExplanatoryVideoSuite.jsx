import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Play, Sparkles, Clock, CheckCircle2, GraduationCap, Building2, X, Monitor, ShieldCheck } from 'lucide-react';

let CareerVideoMP4;
let CandidateSnapshotImg;
let CampusSnapshotImg;

try {
  CareerVideoMP4 = require('../../../assets/images/career-growth-video.mp4');
  CandidateSnapshotImg = require('../../../assets/images/checklist-completed.jpg');
  CampusSnapshotImg = require('../../../assets/images/flowcharts/1Flowchart.png');
} catch (e) {
  CareerVideoMP4 = process.env.PUBLIC_URL + '/images/career-growth-video.mp4';
  CandidateSnapshotImg = process.env.PUBLIC_URL + '/images/checklist-completed.jpg';
  CampusSnapshotImg = process.env.PUBLIC_URL + '/images/flowcharts/1Flowchart.png';
}

const styles = {
  section: css`
    padding: 80px 20px;
    background: linear-gradient(135deg, #FFFDF7 0%, #FFF3E0 100%);
    border-top: 1px solid #FFE0B2;
    border-bottom: 1px solid #FFE0B2;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1160px;
    margin: 0 auto;
  `,
  header: css`
    text-align: center;
    max-width: 800px;
    margin: 0 auto 44px auto;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 18px;
    border-radius: 20px;
    background: #FEF5D8;
    border: 1px solid #F7BC08;
    color: #F55825;
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 0.5px;
    margin-bottom: 18px;
    text-transform: uppercase;
  `,
  title: css`
    font-size: 38px;
    font-weight: 900;
    color: #1E293B;
    margin: 0 0 16px 0;
    line-height: 1.2;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 28px;
    }
  `,
  subtitle: css`
    font-size: 16.5px;
    color: #475569;
    line-height: 1.6;
    margin: 0;
  `,
  tabRow: css`
    display: flex;
    justify-content: center;
    gap: 16px;
    margin-bottom: 40px;

    @media (max-width: 600px) {
      flex-direction: column;
    }
  `,
  tabBtn: (active) => css`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 12px 28px;
    border-radius: 30px;
    font-size: 14.5px;
    font-weight: 800;
    cursor: pointer;
    border: 1.5px solid ${active ? '#F55825' : '#E2E8F0'};
    background: ${active ? '#F55825' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#334155'};
    transition: all 0.25s ease;
    box-shadow: ${active ? '0 6px 18px rgba(245, 88, 37, 0.25)' : '0 2px 8px rgba(0,0,0,0.03)'};

    &:hover {
      transform: translateY(-2px);
    }
  `,
  videoCardGrid: css`
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    align-items: center;
    background: #FFFFFF;
    border: 2px solid #F55825;
    border-radius: 28px;
    padding: 36px;
    box-shadow: 0 20px 48px rgba(245, 88, 37, 0.12);

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      padding: 28px 20px;
    }
  `,
  videoThumbnailBox: css`
    position: relative;
    width: 100%;
    height: 320px;
    border-radius: 20px;
    overflow: hidden;
    cursor: pointer;
    background: #1E293B;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.85;
      transition: transform 0.4s ease, opacity 0.4s ease;
    }

    &:hover img {
      transform: scale(1.04);
      opacity: 0.95;
    }
  `,
  playOverlayBtn: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: #F55825;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 0 0 12px rgba(245, 88, 37, 0.3);
    transition: all 0.3s ease;

    &:hover {
      transform: translate(-50%, -50%) scale(1.1);
      box-shadow: 0 0 0 18px rgba(245, 88, 37, 0.4);
    }
  `,
  durationBadge: css`
    position: absolute;
    bottom: 16px;
    left: 16px;
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(8px);
    color: #FFFFFF;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 6px;
    border: 1px solid rgba(255, 255, 255, 0.2);
  `,
  contentCol: css`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `,
  cardHeading: css`
    font-size: 26px;
    font-weight: 900;
    color: #1E293B;
    margin-bottom: 12px;
    line-height: 1.25;

    span {
      color: #F55825;
    }
  `,
  cardSub: css`
    font-size: 14.5px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 24px;
  `,
  snapshotList: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
  `,
  snapshotItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13.5px;
    font-weight: 700;
    color: #1E293B;
  `,
  watchNowBtn: css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #F55825;
    color: #FFFFFF;
    padding: 14px 28px;
    border-radius: 28px;
    font-weight: 800;
    font-size: 14.5px;
    border: none;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 6px 18px rgba(245, 88, 37, 0.28);
    align-self: flex-start;

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(245, 88, 37, 0.38);
    }
  `,
  modalOverlay: css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 23, 42, 0.88);
    z-index: 9999;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  `,
  modalContent: css`
    position: relative;
    width: 100%;
    max-width: 860px;
    background: #1E293B;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);

    video {
      width: 100%;
      max-height: 70vh;
      display: block;
      outline: none;
    }
  `,
  closeBtn: css`
    position: absolute;
    top: 16px;
    right: 16px;
    background: #F55825;
    color: #FFFFFF;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 10;
  `
};

export default function ExplanatoryVideoSuite() {
  const [activeTab, setActiveTab] = useState('student');
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const studentData = {
    title: <>How Students Upskill &amp; <span>Get Placed 3x Faster</span></>,
    subtitle: 'A 90-second step-by-step walkthrough showing how UDEN parses your resume, prepares you for company selection rounds, and fast-tracks you to 150+ hiring managers.',
    image: CandidateSnapshotImg,
    snapshots: [
      '📸 AI Profile & Resume Parser Snapshot (Instant ATS Score)',
      '📸 Company PYQs & Selection Round Prep (Deloitte, TCS, Amazon)',
      '📸 Pre-Vetted Recruiter Shortlists & 1-on-1 Mentorship'
    ]
  };

  const campusData = {
    title: <>Automating <span>Campus Placement Drives</span> &amp; Batch Audits</>,
    subtitle: 'Discover how colleges use UDEN to conduct diagnostic skill audits, track student readiness, and invite top recruiters for bulk campus hiring drives.',
    image: CampusSnapshotImg,
    snapshots: [
      '📸 Real-time Batch Skill Readiness & Audit Analytics',
      '📸 Automated Placement Drive Workflow & Company PYQs',
      '📸 Verified AI Video Scorecards & 48-Hour Recruiter SLAs'
    ]
  };

  const currentData = activeTab === 'student' ? studentData : campusData;

  return (
    <section css={styles.section} id="explainer-videos">
      <div css={styles.container}>
        <div css={styles.header}>
          <div css={styles.badgeTag}>
            <Sparkles size={14} />
            90-SECOND PLATFORM WALKTHROUGH
          </div>
          <h2 css={styles.title}>
            See How UDEN Works in <span>90 Seconds.</span>
          </h2>
          <p css={styles.subtitle}>
            Watch interactive snapshot video guides tailored specifically for students and educational institutions.
          </p>
        </div>

        {/* Audience Selector Tabs */}
        <div css={styles.tabRow}>
          <button 
            css={styles.tabBtn(activeTab === 'student')}
            onClick={() => setActiveTab('student')}
          >
            <GraduationCap size={18} />
            For Students &amp; Aspirants
          </button>
          <button 
            css={styles.tabBtn(activeTab === 'campus')}
            onClick={() => setActiveTab('campus')}
          >
            <Building2 size={18} />
            For Colleges &amp; Campus Cells
          </button>
        </div>

        {/* Video Card Showcase */}
        <div css={styles.videoCardGrid} className="uden-fade-in">
          <div 
            css={styles.videoThumbnailBox}
            onClick={() => setIsVideoModalOpen(true)}
          >
            <img src={currentData.image} alt="Platform Video Walkthrough Thumbnail" />
            <div css={styles.playOverlayBtn}>
              <Play size={28} style={{ marginLeft: '4px' }} />
            </div>
            <div css={styles.durationBadge}>
              <Clock size={14} /> 90 Sec Explainer Video
            </div>
          </div>

          <div css={styles.contentCol}>
            <h3 css={styles.cardHeading}>{currentData.title}</h3>
            <p css={styles.cardSub}>{currentData.subtitle}</p>

            <div css={styles.snapshotList}>
              {currentData.snapshots.map((item, idx) => (
                <div key={idx} css={styles.snapshotItem}>
                  <CheckCircle2 size={16} color="#F55825" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button 
              css={styles.watchNowBtn}
              onClick={() => setIsVideoModalOpen(true)}
              className="uden-pulse-btn"
            >
              <Play size={16} /> Watch 90-Sec Video Walkthrough
            </button>
          </div>
        </div>
      </div>

      {/* Video Modal Player */}
      {isVideoModalOpen && (
        <div css={styles.modalOverlay} onClick={() => setIsVideoModalOpen(false)}>
          <div css={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button css={styles.closeBtn} onClick={() => setIsVideoModalOpen(false)}>
              <X size={20} />
            </button>
            <video controls autoPlay src={CareerVideoMP4}>
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </section>
  );
}
