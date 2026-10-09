import { css } from '@emotion/react';

export const styles = {
  pageWrapper: css`
    width: 100%;
    min-height: 100vh;
    background: #FFFFFF;
    color: #1E293B;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  `,

  /* HERO SECTION */
  heroSection: css`
    background: linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%);
    border-bottom: 1px solid #FEE7DA;
    padding: 56px 24px 64px 24px;
    width: 100%;

    @media (max-width: 768px) {
      padding: 36px 16px 44px 16px;
    }
  `,

  heroContainer: css`
    max-width: 1240px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  `,

  heroLeft: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    font-size: 44px;
    line-height: 1.15;
    font-weight: 900;
    color: #1E293B;
    margin: 0;
    letter-spacing: -0.5px;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,

  heroSubtitle: css`
    font-size: 16.5px;
    line-height: 1.65;
    color: #475569;
    margin: 0;
    max-width: 620px;
    font-weight: 400;

    @media (max-width: 768px) {
      font-size: 15px;
    }
  `,

  featuresGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px 24px;
    margin-top: 4px;

    @media (max-width: 600px) {
      grid-template-columns: 1fr;
      gap: 10px;
    }
  `,

  featureItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14.5px;
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
    margin-top: 12px;
    flex-wrap: wrap;
  `,

  startBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    background: #F55825;
    color: #FFFFFF;
    font-size: 15.5px;
    font-weight: 700;
    padding: 13px 26px;
    border-radius: 12px;
    border: none;
    cursor: pointer;
    box-shadow: 0 8px 22px rgba(245, 88, 37, 0.28);
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: #E04818;
      transform: translateY(-2px);
      box-shadow: 0 12px 28px rgba(245, 88, 37, 0.35);
    }

    &:active {
      transform: translateY(0);
    }
  `,

  heroSecondaryText: css`
    font-size: 14px;
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
    font-size: 12.5px;
    font-weight: 700;
    color: #1E293B;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
    margin-bottom: 12px;
  `,

  heroCardImg: css`
    width: 100%;
    max-height: 280px;
    object-fit: contain;
    border-radius: 14px;
    margin: 8px 0;
  `,

  heroCardCaption: css`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13.5px;
    font-weight: 600;
    color: #475569;
    margin-top: 8px;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #F55825;
      display: inline-block;
    }
  `,

  /* MAIN CONTENT AREA (2-COLUMN) */
  mainSection: css`
    max-width: 1240px;
    margin: 0 auto;
    padding: 48px 24px 80px 24px;

    @media (max-width: 768px) {
      padding: 28px 16px 60px 16px;
    }
  `,

  mainGrid: css`
    display: grid;
    grid-template-columns: 360px 1fr;
    gap: 36px;
    align-items: start;

    @media (max-width: 1024px) {
      grid-template-columns: 320px 1fr;
      gap: 24px;
    }

    @media (max-width: 880px) {
      grid-template-columns: 1fr;
    }
  `,

  /* SIDEBAR: VIDEO MODULES */
  sidebar: css`
    background: #FFFFFF;
    border: 1.5px solid #F1F5F9;
    border-radius: 20px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    overflow: hidden;
    position: sticky;
    top: 96px;

    @media (max-width: 880px) {
      position: static;
    }
  `,

  sidebarHeader: css`
    padding: 20px 20px 16px 20px;
    border-bottom: 1px solid #F1F5F9;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,

  sidebarTitleWrap: css`
    display: flex;
    flex-direction: column;
    gap: 2px;
    text-align: left;

    h3 {
      font-size: 18px;
      font-weight: 800;
      color: #1E293B;
      margin: 0;
    }
    p {
      font-size: 12.5px;
      color: #94A3B8;
      margin: 0;
    }
  `,

  sidebarBadge: css`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    padding: 4px 10px;
    border-radius: 9999px;
    font-size: 12px;
    font-weight: 700;
    color: #475569;
  `,

  /* PROGRESS BAR */
  progressBox: css`
    padding: 12px 20px;
    background: #F8FAFC;
    border-bottom: 1px solid #F1F5F9;
    display: flex;
    flex-direction: column;
    gap: 6px;
    text-align: left;
  `,

  progressLabelRow: css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    font-weight: 700;
    color: #475569;
  `,

  progressBarTrack: css`
    width: 100%;
    height: 6px;
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
    padding: 8px 0;
    max-height: calc(100vh - 280px);
    overflow-y: auto;

    @media (max-width: 880px) {
      max-height: 480px;
    }
  `,

  moduleItem: (isActive) => css`
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 12px 18px;
    cursor: pointer;
    background: ${isActive ? '#FFF7F2' : '#FFFFFF'};
    border-left: ${isActive ? '4px solid #F55825' : '4px solid transparent'};
    transition: all 0.15s ease;
    text-align: left;

    &:hover {
      background: ${isActive ? '#FFF7F2' : '#F8FAFC'};
    }
  `,

  moduleThumb: css`
    width: 52px;
    height: 52px;
    border-radius: 10px;
    object-fit: cover;
    background: #F1F5F9;
    border: 1px solid #E2E8F0;
    flex-shrink: 0;
  `,

  moduleMeta: css`
    display: flex;
    flex-direction: column;
    gap: 4px;
    flex: 1;
    min-width: 0;

    .title {
      font-size: 14px;
      font-weight: 700;
      color: #1E293B;
      line-height: 1.3;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .tagsRow {
      display: flex;
      align-items: center;
      gap: 8px;
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
      font-size: 11px;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 6px;
      background: ${bg};
      color: ${color};
    `;
  },

  durationText: css`
    font-size: 11.5px;
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

  /* RIGHT COLUMN: WORKSPACE */
  workspaceCard: css`
    background: #FFFFFF;
    border: 1.5px solid #F1F5F9;
    border-radius: 24px;
    padding: 36px;
    box-shadow: 0 4px 25px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    gap: 28px;
    text-align: left;

    @media (max-width: 768px) {
      padding: 20px;
      gap: 20px;
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
    font-size: 12.5px;
    font-weight: 800;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  `,

  completeToggleBtn: (isCompleted) => css`
    display: inline-flex;
    align-items: center;
    gap: 7px;
    padding: 7px 16px;
    border-radius: 9999px;
    font-size: 13px;
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

  /* VIDEO PLAYER SCREEN */
  playerWrapper: css`
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #0F172A;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
    display: flex;
    align-items: center;
    justify-content: center;
  `,

  playerImage: css`
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  `,

  playerOverlay: css`
    position: absolute;
    inset: 0;
    background: rgba(15, 23, 42, 0.35);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    cursor: pointer;

    &:hover .playBtnCircle {
      transform: scale(1.1);
      box-shadow: 0 0 35px rgba(245, 88, 37, 0.6);
    }
  `,

  playBtnCircle: css`
    width: 68px;
    height: 68px;
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
    padding: 6px 16px;
    border-radius: 9999px;
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
  `,

  /* TITLE & NAV BAR */
  titleArea: css`
    display: flex;
    flex-direction: column;
    gap: 8px;

    h1 {
      font-size: 28px;
      font-weight: 900;
      color: #1E293B;
      margin: 0;
      line-height: 1.25;

      @media (max-width: 768px) {
        font-size: 22px;
      }
    }

    p {
      font-size: 15.5px;
      color: #64748B;
      line-height: 1.6;
      margin: 0;
    }
  `,

  navControlsBar: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 16px;
    border-top: 1px solid #F1F5F9;
    flex-wrap: wrap;
    gap: 16px;
  `,

  navGuideText: css`
    font-size: 13.5px;
    color: #64748B;
    font-weight: 500;
  `,

  navButtonsGroup: css`
    display: flex;
    align-items: center;
    gap: 12px;
  `,

  navPrevBtn: (disabled) => css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 18px;
    border-radius: 10px;
    border: 1.5px solid #E2E8F0;
    background: #FFFFFF;
    color: ${disabled ? '#CBD5E1' : '#475569'};
    font-size: 13.5px;
    font-weight: 700;
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    transition: all 0.15s ease;

    &:hover {
      background: ${disabled ? '#FFFFFF' : '#F8FAFC'};
      border-color: ${disabled ? '#E2E8F0' : '#CBD5E1'};
    }
  `,

  navNextBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 9px 20px;
    border-radius: 10px;
    background: #F55825;
    color: #FFFFFF;
    font-size: 13.5px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 14px rgba(245, 88, 37, 0.25);
    transition: all 0.15s ease;

    &:hover {
      background: #E04818;
      transform: translateY(-1px);
    }
  `,

  /* TWO-COLUMN DETAILS SECTION */
  detailsSection: css`
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 36px;
    margin-top: 8px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 28px;
    }
  `,

  leftDetailsCol: css`
    display: flex;
    flex-direction: column;
    gap: 28px;
  `,

  sectionHeading: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 6px 0;
  `,

  sectionSubtitle: css`
    font-size: 13.5px;
    color: #94A3B8;
    margin: 0 0 16px 0;
    font-weight: 500;
  `,

  aboutParagraphs: css`
    display: flex;
    flex-direction: column;
    gap: 14px;

    p {
      font-size: 14.5px;
      line-height: 1.7;
      color: #475569;
      margin: 0;
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
    margin-top: 2px;
  `,

  rightDetailsCol: css`
    display: flex;
    flex-direction: column;
    gap: 20px;
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
    font-size: 14.5px;
    line-height: 1.6;
    color: #334155;
    font-weight: 500;

    .dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #F55825;
      margin-top: 8px;
      flex-shrink: 0;
    }
  `,

  /* FAQ SECTION */
  faqContainer: css`
    margin-top: 16px;
    padding-top: 28px;
    border-top: 1.5px solid #F1F5F9;
    display: flex;
    flex-direction: column;
    gap: 16px;
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

  /* AI MENTOR CARD (PM: "Design the UI . How We should keep this using ai") */
  aiCard: css`
    margin-top: 24px;
    padding: 24px;
    background: linear-gradient(135deg, #FFF7F2 0%, #FEF3C7 100%);
    border: 1.5px solid #FED7AA;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    flex-wrap: wrap;

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
