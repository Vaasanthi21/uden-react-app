import { css } from '@emotion/react';

export const styles = {
  pageWrapper: css`
    width: 100%;
    min-height: 100vh;
    background: #F8F9FA;
    color: #1E293B;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    overflow: visible !important;
  `,

  /* HERO SECTION */
  heroSection: css`
    background: linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%);
    border-bottom: 1px solid #FEE7DA;
    padding: 44px 24px 50px 24px;
    width: 100%;

    @media (max-width: 768px) {
      padding: 30px 16px 36px 16px;
    }
  `,

  heroContainer: css`
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 40px;
    align-items: center;

    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      gap: 32px;
    }
  `,

  heroLeft: css`
    display: flex;
    flex-direction: column;
    gap: 18px;
    text-align: left;
  `,

  badgePill: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: #FFF0E8;
    color: #F55825;
    border: 1px solid rgba(245, 88, 37, 0.2);
    border-radius: 9999px;
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    width: fit-content;
  `,

  heroTitle: css`
    font-size: 42px;
    line-height: 1.15;
    font-weight: 900;
    color: #1E293B;
    margin: 0;
    letter-spacing: -0.5px;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }
  `,

  heroSubtitle: css`
    font-size: 16px;
    line-height: 1.65;
    color: #475569;
    margin: 0;
    max-width: 620px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 14.5px;
    }
  `,

  featuresGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 24px;
    margin-top: 4px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 8px;
    }
  `,

  featureItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #334155;

    .icon {
      color: #10B981;
      flex-shrink: 0;
    }
  `,

  heroCtaRow: css`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 10px;
    flex-wrap: wrap;
  `,

  startBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #F55825;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 700;
    padding: 12px 24px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 20px rgba(245, 88, 37, 0.28);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: #E04818;
      transform: translateY(-2px);
    }
  `,

  heroSecondaryText: css`
    font-size: 13.5px;
    color: #64748B;
    font-weight: 500;
  `,

  /* HERO RIGHT CARD */
  heroRightCard: css`
    background: #FFF9F5;
    border: 1.5px solid #FFEDD5;
    border-radius: 24px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 16px 40px rgba(245, 88, 37, 0.06);
    position: relative;
    overflow: hidden;
  `,

  heroCardBadge: css`
    align-self: flex-start;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FFFFFF;
    border: 1px solid #FFE4D6;
    padding: 6px 14px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 700;
    color: #1E293B;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    margin-bottom: 10px;
  `,

  heroCardImg: css`
    width: 100%;
    max-height: 260px;
    object-fit: contain;
    border-radius: 14px;
    margin: 6px 0;
  `,

  heroCardCaption: css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    font-weight: 600;
    color: #475569;
    margin-top: 8px;

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #F55825;
      display: inline-block;
    }
  `,

  /* MAIN WORKSPACE SECTION */
  mainSection: css`
    max-width: 1280px;
    margin: 0 auto;
    padding: 36px 24px 80px 24px;
    overflow: visible !important;

    @media (max-width: 768px) {
      padding: 24px 16px 60px 16px;
    }
  `,

  mainGrid: css`
    display: grid;
    grid-template-columns: 320px minmax(0, 1fr);
    gap: 32px;
    align-items: start;
    width: 100%;
    overflow: visible !important;

    @media (max-width: 1024px) {
      grid-template-columns: 290px minmax(0, 1fr);
      gap: 20px;
    }

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,

  /* LEFT SIDEBAR: STATIC / STICKY */
  sidebar: css`
    position: -webkit-sticky;
    position: sticky;
    top: 96px;
    align-self: flex-start;
    width: 100%;
    height: fit-content;
    max-height: calc(100vh - 116px);
    background: #FFFFFF;
    border: 1.5px solid #ECEFF2;
    border-radius: 24px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    z-index: 40;

    @media (max-width: 900px) {
      position: static;
      max-height: none;
    }
  `,

  sidebarHeader: css`
    padding: 18px 20px 14px 20px;
    border-bottom: 1px solid #F1F5F9;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-shrink: 0;
  `,

  sidebarTitleWrap: css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: left;

    h3 {
      font-size: 17px;
      font-weight: 800;
      color: #1E293B;
      margin: 0;
    }
    p {
      font-size: 12px;
      color: #94A3B8;
      margin: 0;
    }
  `,

  sidebarBadge: css`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    padding: 3px 10px;
    border-radius: 9999px;
    font-size: 11.5px;
    font-weight: 700;
    color: #475569;
  `,

  /* PROGRESS BAR */
  progressBox: css`
    padding: 10px 18px;
    background: #F8FAFC;
    border-bottom: 1px solid #F1F5F9;
    display: flex;
    flex-direction: column;
    gap: 5px;
    text-align: left;
    flex-shrink: 0;
  `,

  progressLabelRow: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 11.5px;
    font-weight: 700;
    color: #475569;
  `,

  progressBarTrack: css`
    width: 100%;
    height: 5px;
    background: #E2E8F0;
    border-radius: 9999px;
    overflow: hidden;
  `,

  progressBarFill: (percent) => css`
    width: ${percent}%;
    height: 100%;
    background: linear-gradient(90deg, #F55825 0%, #10B981 100%);
    border-radius: 9999px;
    transition: width 0.4s ease;
  `,

  /* MODULE LIST */
  moduleList: css`
    list-style: none;
    margin: 0;
    padding: 10px 12px;
    overflow-y: auto;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 6px;

    /* Custom sleek scrollbar */
    scrollbar-width: thin;
    scrollbar-color: #CBD5E1 transparent;

    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: #CBD5E1;
      border-radius: 4px;
    }
  `,

  moduleItem: (isActive) => css`
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px 12px;
    border-radius: 16px;
    cursor: pointer;
    background: ${isActive ? '#FFF2EC' : 'transparent'};
    border: 1px solid ${isActive ? '#FFD8C7' : 'transparent'};
    transition: all 0.18s ease;
    text-align: left;

    &:hover {
      background: ${isActive ? '#FFF2EC' : '#F8FAFC'};
    }
  `,

  moduleThumbWrap: css`
    position: relative;
    width: 44px;
    height: 44px;
    flex-shrink: 0;
  `,

  moduleThumb: css`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    object-fit: cover;
    background: #F1F5F9;
    border: 1px solid #E2E8F0;
  `,

  moduleNumberBadgeCorner: css`
    position: absolute;
    top: -4px;
    left: -4px;
    width: 17px;
    height: 17px;
    border-radius: 50%;
    background: #F55825;
    color: #FFFFFF;
    font-size: 10px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 4px rgba(245, 88, 37, 0.4);
  `,

  moduleMeta: css`
    display: flex;
    flex-direction: column;
    gap: 3px;
    flex: 1;
    min-width: 0;

    .title {
      font-size: 13.5px;
      font-weight: 700;
      color: #1E293B;
      line-height: 1.25;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .activeTitle {
      color: #F55825 !important;
    }

    .tagsRow {
      display: flex;
      align-items: center;
      gap: 6px;
    }
  `,

  levelBadge: (level) => {
    let bg = '#F1F5F9';
    let color = '#475569';
    if (level === 'Beginner') {
      bg = '#ECFDF5';
      color = '#047857';
    } else if (level === 'Intermediate') {
      bg = '#FFFBEB';
      color = '#B45309';
    } else if (level === 'Advanced') {
      bg = '#FEF2F2';
      color = '#B91C1C';
    }
    return css`
      font-size: 10.5px;
      font-weight: 700;
      padding: 1px 6px;
      border-radius: 5px;
      background: ${bg};
      color: ${color};
    `;
  },

  durationText: css`
    font-size: 11px;
    color: #94A3B8;
    font-weight: 500;
  `,

  moduleCheckIcon: (isCompleted) => css`
    color: ${isCompleted ? '#10B981' : '#CBD5E1'};
    flex-shrink: 0;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: ${isCompleted ? '#059669' : '#94A3B8'};
    }
  `,

  sidebarFooterIndicator: css`
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #94A3B8;
    background: #FFFFFF;
    border-top: 1px solid #F8FAFC;
    flex-shrink: 0;
  `,

  /* RIGHT SCROLLABLE CONTENT COLUMN */
  rightColumn: css`
    display: flex;
    flex-direction: column;
    gap: 28px;
    min-width: 0;
    width: 100%;
  `,

  /* CARD 1: VIDEO PLAYER CARD */
  videoPlayerCard: css`
    background: #FFFFFF;
    border: 1.5px solid #ECEFF2;
    border-radius: 24px;
    padding: 28px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    gap: 20px;
    text-align: left;

    @media (max-width: 768px) {
      padding: 18px;
      gap: 16px;
    }
  `,

  topBar: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 12px;
  `,

  topBarLeft: css`
    display: flex;
    align-items: center;
    gap: 12px;
  `,

  moduleNumberBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    color: #F55825;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  `,

  completeToggleBtn: (isCompleted) => css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 9999px;
    font-size: 12.5px;
    font-weight: 700;
    cursor: pointer;
    border: 1.5px solid ${isCompleted ? '#10B981' : '#E2E8F0'};
    background: ${isCompleted ? '#ECFDF5' : '#FFFFFF'};
    color: ${isCompleted ? '#047857' : '#475569'};
    transition: all 0.2s ease;

    &:hover {
      border-color: #10B981;
      background: #F0FDF4;
      color: #047857;
    }
  `,

  playerWrapper: css`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #0F172A;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  videoPlayerContainer: css`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #000000;
  `,

  videoElement: css`
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: #000000;
    border-radius: 18px;
    display: block;
  `,

  playerImage: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
  `,

  playerOverlay: css`
    position: absolute;
    inset: 0;
    background: rgba(15, 23, 42, 0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 14px;
    cursor: pointer;

    &:hover .playBtnCircle {
      transform: scale(1.1);
      box-shadow: 0 0 35px rgba(245, 88, 37, 0.6);
    }
  `,

  playBtnCircle: css`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #F55825;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 24px rgba(245, 88, 37, 0.4);
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  `,

  comingSoonPill: css`
    background: rgba(15, 23, 42, 0.85);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 5px 14px;
    border-radius: 9999px;
    color: #FFFFFF;
    font-size: 10.5px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  `,

  titleArea: css`
    display: flex;
    flex-direction: column;
    gap: 6px;

    h1 {
      font-size: 26px;
      font-weight: 900;
      color: #1E293B;
      margin: 0;
      line-height: 1.25;

      @media (max-width: 768px) {
        font-size: 21px;
      }
    }

    p {
      font-size: 15px;
      color: #64748B;
      line-height: 1.6;
      margin: 0;
    }
  `,

  navControlsBar: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 14px;
    border-top: 1px solid #F1F5F9;
    flex-wrap: wrap;
    gap: 14px;
  `,

  navGuideText: css`
    font-size: 13px;
    color: #64748B;
    font-weight: 500;
  `,

  navButtonsGroup: css`
    display: flex;
    align-items: center;
    gap: 10px;
  `,

  navPrevBtn: (disabled) => css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 16px;
    border-radius: 10px;
    border: 1.5px solid #E2E8F0;
    background: #FFFFFF;
    color: ${disabled ? '#CBD5E1' : '#475569'};
    font-size: 13px;
    font-weight: 700;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.15s ease;

    &:hover {
      background: ${disabled ? '#FFFFFF' : '#F8FAFC'};
    }
  `,

  navNextBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 8px 18px;
    border-radius: 10px;
    background: #F55825;
    color: #FFFFFF;
    font-size: 13px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(245, 88, 37, 0.25);
    transition: all 0.15s ease;

    &:hover {
      background: #E04818;
    }
  `,

  /* 2-COLUMN ROW: ABOUT THIS VIDEO (LEFT) + KEY TAKEAWAYS (RIGHT) */
  aboutAndTakeawaysRow: css`
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 24px;
    width: 100%;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,

  aboutCard: css`
    background: #FFFFFF;
    border: 1.5px solid #ECEFF2;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 16px;

    h3 {
      font-size: 20px;
      font-weight: 800;
      color: #1E293B;
      margin: 0;
    }

    p {
      font-size: 14.5px;
      line-height: 1.7;
      color: #475569;
      margin: 0;
    }
  `,

  takeawaysCard: css`
    background: #FFFBF9;
    border: 1.5px solid #FFEDD5;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(245, 88, 37, 0.04);
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 18px;

    h3 {
      font-size: 20px;
      font-weight: 800;
      color: #1E293B;
      margin: 0;
    }
  `,

  takeawaysList: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  takeawayItem: css`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    font-size: 14px;
    line-height: 1.55;
    color: #334155;
    font-weight: 500;

    .iconCircle {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      background: #F55825;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      margin-top: 2px;
    }
  `,

  /* CARD 3: WHAT THIS VIDEO COVERS */
  coversCard: css`
    background: #FFFFFF;
    border: 1.5px solid #ECEFF2;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 20px;
  `,

  cardHeaderWithIcon: css`
    display: flex;
    align-items: center;
    gap: 12px;

    .iconBox {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: #FFF2EC;
      color: #F55825;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .titleWrap {
      display: flex;
      flex-direction: column;
      gap: 2px;

      h3 {
        font-size: 20px;
        font-weight: 800;
        color: #1E293B;
        margin: 0;
      }
      span {
        font-size: 13px;
        color: #94A3B8;
        font-weight: 500;
      }
    }
  `,

  coversList: css`
    display: flex;
    flex-direction: column;
    gap: 14px;
    list-style: none;
    margin: 0;
    padding: 0;
  `,

  coverStepItem: css`
    display: flex;
    align-items: flex-start;
    gap: 14px;
    font-size: 14.5px;
    color: #334155;
    line-height: 1.5;
  `,

  stepNumberBadge: css`
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: #FFF0EB;
    border: 1.5px solid #F55825;
    color: #F55825;
    font-size: 12px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
  `,

  /* CARD 4: FAQS CARD */
  faqsCard: css`
    background: #FFFFFF;
    border: 1.5px solid #ECEFF2;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    text-align: left;
    display: flex;
    flex-direction: column;
    gap: 18px;
  `,

  faqItem: (isOpen) => css`
    border: 1.5px solid ${isOpen ? 'rgba(245, 88, 37, 0.4)' : '#F1F5F9'};
    border-radius: 16px;
    overflow: hidden;
    background: ${isOpen ? '#FFFDFB' : '#FFFFFF'};
    transition: all 0.2s ease;
  `,

  faqHeader: (isOpen) => css`
    width: 100%;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: transparent;
    border: none;
    cursor: pointer;
    text-align: left;
    font-size: 15px;
    font-weight: 700;
    color: ${isOpen ? '#F55825' : '#1E293B'};
    gap: 16px;

    &:hover {
      color: #F55825;
    }
  `,

  faqBody: css`
    padding: 0 20px 18px 20px;
    font-size: 14px;
    line-height: 1.65;
    color: #475569;
    font-weight: 400;
  `,

  /* CARD 5: AI MENTOR CARD */
  aiCard: css`
    padding: 24px;
    background: linear-gradient(135deg, #FFF7F2 0%, #FEF3C7 100%);
    border: 1.5px solid #FED7AA;
    border-radius: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;
    text-align: left;

    .content {
      display: flex;
      flex-direction: column;
      gap: 4px;

      h4 {
        margin: 0;
        font-size: 16px;
        font-weight: 800;
        color: #1E293B;
        display: flex;
        align-items: center;
        gap: 8px;
      }
      p {
        margin: 0;
        font-size: 13.5px;
        color: #64748B;
      }
    }
  `,

  aiBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #1E293B;
    color: #FFFFFF;
    padding: 10px 20px;
    border-radius: 12px;
    font-size: 13.5px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      background: #0F172A;
      transform: translateY(-1px);
    }
  `
};
