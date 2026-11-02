import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { 
  FileText, 
  Sparkles, 
  Bot, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft,
  ChevronRight,
  Clock, 
  Zap, 
  Target, 
  Award,
  Layers,
  MessageSquare,
  Star,
  Users,
  Check,
  TrendingUp,
  Search,
  ExternalLink,
  Laptop,
  HelpCircle,
  LogIn,
  SlidersHorizontal,
  Flame,
  CheckCircle,
  BookOpen,
  Compass,
  Code,
  Brain,
  GraduationCap,
  ListChecks
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import ScrollReveal from '../../components/layout/ScrollReveal';
import { AppRoutes } from '../../../utils/consts/routes';
import { AppAssets } from '../../../utils/consts/app_assets';
import { buildBubbleLoginUrl } from '../../../utils/bubbleAuth';
import { getOfferConfig } from '../../../config/launchOffer.config';

/* KEYFRAME ANIMATIONS FOR SMOOTH TRANSITIONS & HOVER EFFECTS */
const floatSlow = keyframes`
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
`;

const pulseGlow = keyframes`
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.08); }
`;

const laserScan = keyframes`
  0% { top: 0%; opacity: 0.8; }
  50% { top: 92%; opacity: 1; }
  100% { top: 0%; opacity: 0.8; }
`;

const shimmer = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(200%); }
`;

const sparkleTwinkle = keyframes`
  0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.85; }
  50% { transform: scale(1.28) rotate(18deg); opacity: 1; filter: drop-shadow(0 0 8px #FEF08A); }
`;

const gradientShift = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const bounceSubtle = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-3px); }
`;

const styles = {
  pageWrapper: css`
    min-height: 100vh;
    background: #F8FAFC;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    color: #1E293B;
    overflow-x: hidden;
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    margin: 0;
    padding: 0;
  `,

  scrollProgressBar: (progress) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: ${progress}%;
    height: 3.5px;
    background: linear-gradient(90deg, #F55825 0%, #EA580C 50%, #F59E0B 100%);
    z-index: 1005;
    transition: width 0.12s ease-out;
    box-shadow: 0 0 12px rgba(245, 88, 37, 0.7);
  `,

  /* STICKY TOP CONTAINER (ANIMATED BANNER + HEADER TOGETHER) */
  stickyHeaderWrapper: css`
    position: sticky;
    top: 0;
    z-index: 1000;
    width: 100%;
    box-shadow: 0 6px 24px rgba(0, 0, 0, 0.08);
  `,

  inAppNoticeBanner: css`
    background: #0F172A;
    color: #F8FAFC;
    padding: 10px 20px;
    font-size: 13px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.12);
    position: relative;
    z-index: 1002;
    @media (max-width: 768px) {
      padding: 9px 14px;
      font-size: 11.5px;
    }
  `,

  inAppChromeBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    border-radius: 6px;
    padding: 5px 12px;
    font-size: 11.5px;
    font-weight: 700;
    cursor: pointer;
    white-space: nowrap;
    transition: background 0.2s ease;
    &:hover {
      background: #EA580C;
    }
  `,

  inAppCloseBtn: css`
    background: transparent;
    border: none;
    color: #94A3B8;
    font-size: 18px;
    line-height: 1;
    cursor: pointer;
    padding: 2px 6px;
    &:hover {
      color: #FFFFFF;
    }
  `,

  /* EXPANDED PROMINENT HEADER BANNER WITH ILLUSTRATION */
  topBanner: css`
    background: linear-gradient(90deg, #F55825 0%, #EA580C 35%, #D94616 70%, #F55825 100%);
    background-size: 300% 300%;
    animation: ${gradientShift} 7s ease infinite;
    color: #FFFFFF;
    text-align: center;
    padding: 14px 24px;
    position: relative;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    @media (max-width: 768px) {
      padding: 12px 14px;
    }
  `,

  shimmerLight: css`
    position: absolute;
    top: 0;
    left: 0;
    width: 40%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.32) 50%, transparent 100%);
    transform: skewX(-25deg);
    animation: ${shimmer} 5s infinite ease-in-out;
    pointer-events: none;
  `,

  bannerContent: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    position: relative;
    z-index: 2;
    max-width: 1200px;
    width: 100%;
    @media (max-width: 900px) {
      flex-wrap: wrap;
      gap: 10px;
    }
  `,

  bannerIllustrationBox: css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    animation: ${bounceSubtle} 3s infinite ease-in-out;
  `,

  bannerTextGroup: css`
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    justify-content: center;
  `,

  bannerHeadline: css`
    font-size: 15px;
    font-weight: 800;
    letter-spacing: 0.2px;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    gap: 8px;
    strong {
      color: #FEF08A;
      font-weight: 900;
    }
    @media (max-width: 640px) {
      font-size: 13px;
    }
  `,

  bannerOfferPill: css`
    background: rgba(0, 0, 0, 0.28);
    border: 1px solid rgba(255, 255, 255, 0.35);
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 800;
    color: #FEF08A;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    letter-spacing: 0.3px;
    white-space: nowrap;
    @media (max-width: 640px) {
      font-size: 11px;
      padding: 3px 8px;
    }
  `,

  bannerCtaBtn: css`
    background: #FFFFFF;
    color: #D94616;
    border: none;
    padding: 7px 18px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 900;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.25s ease;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18);
    flex-shrink: 0;
    &:hover {
      background: #FEF08A;
      color: #9A3412;
      transform: translateY(-1px) scale(1.04);
      box-shadow: 0 6px 18px rgba(0, 0, 0, 0.24);
    }
    @media (max-width: 768px) {
      display: none;
    }
  `,

  animatedSparkleIcon: css`
    display: inline-flex;
    align-items: center;
    animation: ${sparkleTwinkle} 2.5s infinite ease-in-out;
    color: #FEF08A;
  `,

  /* HEADER WITH LOGO & SIGN-IN */
  header: css`
    background: rgba(255, 255, 255, 0.96);
    border-bottom: 1px solid rgba(226, 232, 240, 0.85);
    padding: 12px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
  `,

  signInBtn: css`
    background: transparent;
    color: #F55825;
    border: 1.5px solid #F55825;
    padding: 9px 20px;
    border-radius: 24px;
    font-size: 13.5px;
    font-weight: 800;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    &:hover {
      background: #FFF5F0;
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(245, 88, 37, 0.15);
    }
  `,

  /* HERO SECTION */
  heroSection: css`
    width: 100%;
    max-width: 1240px;
    margin: 0 auto;
    padding: 50px 24px 44px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    align-items: center;
    position: relative;
    box-sizing: border-box;
    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      padding: 32px 18px 32px;
      text-align: center;
    }
  `,

  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 245, 240, 0.9);
    border: 1px solid #FFDECB;
    color: #F55825;
    padding: 8px 18px;
    border-radius: 24px;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 22px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    box-shadow: 0 2px 8px rgba(245, 88, 37, 0.08);
  `,

  heroTitle: css`
    font-size: 46px;
    font-weight: 900;
    line-height: 1.15;
    color: #0F172A;
    letter-spacing: -1.2px;
    margin: 0 0 18px;
    span {
      background: linear-gradient(90deg, #F55825 0%, #EA580C 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    @media (max-width: 960px) {
      font-size: 34px;
      line-height: 1.22;
      margin: 0 auto 16px;
    }
    @media (max-width: 480px) {
      font-size: 29px;
    }
  `,

  heroSubtitle: css`
    font-size: 17px;
    line-height: 1.65;
    color: #475569;
    margin: 0 0 32px;
    font-weight: 500;
    @media (max-width: 960px) {
      font-size: 15.5px;
      margin: 0 auto 28px;
      max-width: 650px;
    }
  `,

  ctaContainer: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    margin-bottom: 28px;
    @media (max-width: 960px) {
      align-items: center;
    }
  `,

  primaryBtn: css`
    background: linear-gradient(135deg, #F55825 0%, #D94616 100%);
    color: #FFFFFF;
    border: none;
    padding: 16px 38px;
    border-radius: 36px;
    font-size: 16.5px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 12px 28px rgba(245, 88, 37, 0.38);
    &:hover {
      background: linear-gradient(135deg, #EA580C 0%, #C2410C 100%);
      transform: translateY(-3px) scale(1.02);
      box-shadow: 0 18px 36px rgba(245, 88, 37, 0.48);
    }
  `,

  btnSubtext: css`
    font-size: 13px;
    color: #64748B;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 7px;
  `,

  /* INTERACTIVE HERO ILLUSTRATION MOCKUP */
  heroIllustrationCard: css`
    background: rgba(255, 255, 255, 0.95);
    border-radius: 28px;
    border: 1.5px solid rgba(245, 88, 37, 0.25);
    box-shadow: 0 24px 50px -12px rgba(15, 23, 42, 0.12), 0 8px 24px rgba(245, 88, 37, 0.12);
    padding: 26px;
    position: relative;
    overflow: hidden;
    backdrop-filter: blur(16px);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    &:hover {
      transform: translateY(-6px) scale(1.01);
      box-shadow: 0 32px 64px -14px rgba(245, 88, 37, 0.25);
      border-color: #F55825;
    }
  `,

  scannerLaser: css`
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(90deg, rgba(245,88,37,0) 0%, #F55825 50%, rgba(245,88,37,0) 100%);
    box-shadow: 0 0 14px #F55825;
    animation: ${laserScan} 3.2s infinite ease-in-out;
    pointer-events: none;
    z-index: 10;
  `,

  mockupHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 16px;
    border-bottom: 1.5px solid #F1F5F9;
    margin-bottom: 20px;
  `,

  scoreCircle: css`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: #FFF5F0;
    border: 3px solid #F55825;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 14px rgba(245, 88, 37, 0.25);
    .scoreVal {
      font-size: 20px;
      font-weight: 900;
      color: #F55825;
      line-height: 1;
    }
    .scoreLabel {
      font-size: 9px;
      font-weight: 800;
      color: #78350F;
      text-transform: uppercase;
      letter-spacing: 0.3px;
    }
  `,

  mockupSkillChips: css`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 18px;
  `,

  mockupChip: (status) => css`
    padding: 5px 11px;
    border-radius: 12px;
    font-size: 11.5px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    background: ${status === 'pass' ? '#ECFDF5' : '#FFFBEB'};
    color: ${status === 'pass' ? '#047857' : '#B45309'};
    border: 1px solid ${status === 'pass' ? '#A7F3D0' : '#FDE68A'};
  `,

  aiFloatingCard: css`
    background: linear-gradient(135deg, #1E293B 0%, #0F172A 100%);
    color: #FFFFFF;
    border-radius: 18px;
    padding: 16px 18px;
    display: flex;
    align-items: center;
    gap: 14px;
    margin-top: 14px;
    box-shadow: 0 10px 24px rgba(15, 23, 42, 0.2);
  `,

  /* THE CONTRAST STORY CARD */
  contrastCard: css`
    width: 100%;
    max-width: 1100px;
    margin: 10px auto 60px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 28px;
    padding: 38px 32px;
    box-shadow: 0 14px 36px -10px rgba(0, 0, 0, 0.05);
    transition: all 0.35s ease;
    box-sizing: border-box;
    &:hover {
      box-shadow: 0 20px 48px -12px rgba(15, 23, 42, 0.1);
    }
    @media (max-width: 768px) {
      padding: 26px 18px;
      margin: 10px 16px 40px;
      width: calc(100% - 32px);
    }
  `,

  contrastGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 24px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  `,

  contrastColOld: css`
    background: #FEF2F2;
    border: 1.5px solid #FECACA;
    border-radius: 20px;
    padding: 24px;
    text-align: left;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 24px rgba(239, 68, 68, 0.1);
    }
  `,

  contrastColNew: css`
    background: #F0FDF4;
    border: 1.5px solid #BBF7D0;
    border-radius: 20px;
    padding: 24px;
    text-align: left;
    transition: all 0.3s ease;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 24px rgba(34, 197, 94, 0.12);
    }
  `,

  /* 4 CORE PILLARS AS GLASS CARDS WITH ORANGE SHADE */
  featuresSection: css`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 70px;
    padding: 0 24px;
    position: relative;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 0 16px;
      margin-bottom: 50px;
    }
  `,

  ambientOrbLeft: css`
    position: absolute;
    top: 60px;
    left: -40px;
    width: 320px;
    height: 320px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(245, 88, 37, 0.22) 0%, rgba(245, 88, 37, 0) 70%);
    filter: blur(55px);
    pointer-events: none;
    z-index: 0;
    animation: ${pulseGlow} 6s infinite ease-in-out;
  `,

  ambientOrbRight: css`
    position: absolute;
    bottom: 20px;
    right: -40px;
    width: 360px;
    height: 360px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(251, 146, 60, 0.22) 0%, rgba(245, 88, 37, 0) 70%);
    filter: blur(60px);
    pointer-events: none;
    z-index: 0;
    animation: ${pulseGlow} 7s infinite ease-in-out reverse;
  `,

  sectionHeading: css`
    text-align: center;
    margin-bottom: 42px;
    position: relative;
    z-index: 1;
    h2 {
      font-size: 34px;
      font-weight: 900;
      color: #0F172A;
      margin: 0 0 12px;
      letter-spacing: -0.8px;
    }
    p {
      font-size: 16px;
      color: #64748B;
      margin: 0 auto;
      max-width: 680px;
      line-height: 1.6;
    }
    @media (max-width: 640px) {
      h2 { font-size: 26px; }
      p { font-size: 14.5px; }
    }
  `,

  featureCardsGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(265px, 1fr));
    gap: 24px;
    position: relative;
    z-index: 1;
  `,

  glassFeatureCard: css`
    background: linear-gradient(145deg, rgba(255, 255, 255, 0.82) 0%, rgba(255, 245, 240, 0.72) 50%, rgba(254, 237, 230, 0.65) 100%);
    backdrop-filter: blur(18px);
    -webkit-backdrop-filter: blur(18px);
    border: 1.5px solid rgba(245, 88, 37, 0.24);
    border-radius: 26px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 12px 32px rgba(245, 88, 37, 0.08), inset 0 1px 1.5px rgba(255, 255, 255, 0.95), inset 0 0 16px rgba(245, 88, 37, 0.04);
    position: relative;
    &:hover {
      transform: translateY(-10px) scale(1.02);
      background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(255, 240, 233, 0.88) 100%);
      border-color: rgba(245, 88, 37, 0.65);
      box-shadow: 0 24px 50px -10px rgba(245, 88, 37, 0.32), 0 0 24px rgba(245, 88, 37, 0.18), inset 0 1px 2px rgba(255, 255, 255, 1);
      .featureThumbImg {
        transform: scale(1.07);
      }
      .glassCardGlow {
        opacity: 1;
      }
    }
  `,

  glassCardGlow: css`
    position: absolute;
    top: 0;
    right: 0;
    width: 140px;
    height: 140px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(245, 88, 37, 0.2) 0%, transparent 70%);
    filter: blur(20px);
    pointer-events: none;
    opacity: 0.5;
    transition: opacity 0.4s ease;
  `,

  featureThumbBox: css`
    height: 160px;
    background: rgba(241, 245, 249, 0.6);
    overflow: hidden;
    position: relative;
    border-bottom: 1.5px solid rgba(245, 88, 37, 0.14);
    .featureThumbImg {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.5s ease;
    }
    .featureOverlayBadge {
      position: absolute;
      bottom: 12px;
      left: 14px;
      background: rgba(15, 23, 42, 0.88);
      backdrop-filter: blur(6px);
      color: #FFFFFF;
      font-size: 11px;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: 12px;
      letter-spacing: 0.3px;
      text-transform: uppercase;
      box-shadow: 0 2px 6px rgba(0,0,0,0.2);
    }
  `,

  featureCardBody: css`
    padding: 24px 22px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
    position: relative;
    z-index: 1;
  `,

  cardTitle: css`
    font-size: 19px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 8px;
    line-height: 1.3;
  `,

  cardDesc: css`
    font-size: 14px;
    color: #64748B;
    line-height: 1.6;
    margin: 0 0 18px;
    flex-grow: 1;
  `,

  costTag: css`
    font-size: 12px;
    font-weight: 800;
    background: rgba(245, 88, 37, 0.12);
    color: #C2410C;
    border: 1px solid rgba(245, 88, 37, 0.3);
    padding: 5px 12px;
    border-radius: 14px;
    display: inline-block;
    align-self: flex-start;
    backdrop-filter: blur(4px);
  `,

  /* DEDICATED SHOWCASE: JOB AGENT PRO & AI INTERVIEW BOT (ROLE PREPARATION ENGINE) */
  rolePrepSection: css`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 75px;
    padding: 0 24px;
    position: relative;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 0 16px;
      margin-bottom: 50px;
    }
  `,

  rolePrepHeadingPill: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FFF5F0;
    color: #F55825;
    border: 1px solid #FFDECB;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.4px;
  `,

  rolePrepGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
    align-items: stretch;
    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      gap: 24px;
    }
  `,

  rolePrepCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 26px;
    padding: 30px 26px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    &:hover {
      transform: translateY(-6px);
      border-color: #F55825;
      box-shadow: 0 20px 48px rgba(245, 88, 37, 0.14);
    }
    @media (max-width: 480px) {
      padding: 22px 18px;
    }
  `,

  rolePrepCardHeader: css`
    display: flex;
    align-items: flex-start;
    gap: 14px;
    margin-bottom: 20px;
    padding-bottom: 18px;
    border-bottom: 1.5px solid #F1F5F9;
  `,

  rolePrepIconCircle: css`
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: #FFF5F0;
    border: 1.5px solid #FFDECB;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    color: #F55825;
  `,

  rolePrepFeatureBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #C2410C;
    background: #FFF7ED;
    border: 1px solid #FFEDD5;
    padding: 3px 10px;
    border-radius: 12px;
    margin-bottom: 6px;
  `,

  rolePrepCardTitle: css`
    font-size: 22px;
    font-weight: 900;
    color: #0F172A;
    margin: 0 0 4px;
    line-height: 1.25;
  `,

  rolePrepCardSubtitle: css`
    font-size: 13.5px;
    color: #64748B;
    line-height: 1.5;
    margin: 0;
  `,

  rolePrepHighlightBox: css`
    background: #F8FAFC;
    border: 1.5px solid #E2E8F0;
    border-radius: 18px;
    padding: 16px 18px;
    margin-bottom: 16px;
  `,

  rolePrepSectionTitle: css`
    font-size: 13px;
    font-weight: 800;
    color: #334155;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 10px;
  `,

  rolePrepRoundItem: css`
    display: flex;
    align-items: flex-start;
    gap: 10px;
    padding: 9px 12px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    margin-bottom: 8px;
    font-size: 12.5px;
    color: #1E293B;
    &:last-child {
      margin-bottom: 0;
    }
    .roundBadge {
      background: #F55825;
      color: #FFFFFF;
      font-size: 10.5px;
      font-weight: 800;
      padding: 2px 7px;
      border-radius: 8px;
      white-space: nowrap;
      flex-shrink: 0;
    }
  `,

  rolePrepPyqSnippet: css`
    background: #FFFFFF;
    border: 1px solid #FED7AA;
    border-left: 3.5px solid #F55825;
    border-radius: 10px;
    padding: 10px 12px;
    margin-bottom: 8px;
    font-size: 12.5px;
    line-height: 1.45;
    color: #1E293B;
    &:last-child {
      margin-bottom: 0;
    }
  `,

  rolePrepLearningStep: css`
    display: flex;
    align-items: center;
    gap: 10px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 12px;
    padding: 8px 12px;
    margin-bottom: 6px;
    font-size: 12px;
    color: #334155;
    &:last-child {
      margin-bottom: 0;
    }
    .stepIcon {
      color: #10B981;
      flex-shrink: 0;
    }
  `,

  mockInterviewMessageBubble: css`
    padding: 12px 14px;
    border-radius: 16px;
    font-size: 13px;
    line-height: 1.5;
    margin-bottom: 10px;
    box-sizing: border-box;
    &.botMsg {
      background: #FFF7ED;
      border: 1.5px solid #FFEDD5;
      color: #9A3412;
      border-top-left-radius: 4px;
    }
    &.userMsg {
      background: #F1F5F9;
      border: 1.5px solid #E2E8F0;
      color: #1E293B;
      border-top-right-radius: 4px;
    }
    &.evalMsg {
      background: #ECFDF5;
      border: 1.5px solid #A7F3D0;
      color: #065F46;
    }
  `,

  rolePrepCardActionBtn: css`
    background: linear-gradient(135deg, #F55825 0%, #D94616 100%);
    color: #FFFFFF;
    border: none;
    border-radius: 14px;
    padding: 13px 20px;
    font-size: 14.5px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    cursor: pointer;
    margin-top: 18px;
    width: 100%;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 16px rgba(245, 88, 37, 0.25);
    &:hover {
      background: linear-gradient(135deg, #EA580C 0%, #C2410C 100%);
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(245, 88, 37, 0.35);
    }
  `,

  /* AUTO-ROTATING CAROUSEL: ATS RESUME TEMPLATES */
  templatesSection: css`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto 70px;
    padding: 0 24px;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    @media (max-width: 768px) {
      padding: 0 16px;
      margin-bottom: 50px;
    }
  `,

  autoRotateBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FFF5F0;
    color: #EA580C;
    border: 1px solid #FFDECB;
    padding: 5px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 12px;
    .greenDot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #10B981;
      box-shadow: 0 0 8px #10B981;
    }
  `,

  /* DIRECT FAST-TRACK PROCEDURE GUIDE (Click -> Login -> Direct to Resume Builder) */
  procedureGuideBox: css`
    width: 100%;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1.5px solid #FFDECB;
    border-radius: 20px;
    padding: 22px 24px;
    margin: 0 auto 30px;
    max-width: 980px;
    box-shadow: 0 6px 20px rgba(245, 88, 37, 0.06);
    @media (max-width: 768px) {
      padding: 18px 14px;
      margin-bottom: 24px;
    }
  `,

  procedureStepsRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: stretch;
      gap: 10px;
    }
  `,

  procedureStepCard: css`
    flex: 1;
    min-width: 0;
    width: 100%;
    box-sizing: border-box;
    background: #FFFBF9;
    border: 1px solid #FFEBE0;
    border-radius: 14px;
    padding: 12px 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    text-align: left;
    .stepNumBadge {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      background: #F55825;
      color: #FFFFFF;
      font-size: 13px;
      font-weight: 900;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }
    .stepContent {
      flex: 1;
      min-width: 0;
    }
    .stepTitle {
      font-size: 13px;
      font-weight: 800;
      color: #0F172A;
      margin-bottom: 2px;
    }
    .stepDesc {
      font-size: 11.5px;
      color: #64748B;
      line-height: 1.4;
      word-break: break-word;
    }
    @media (max-width: 480px) {
      padding: 10px 12px;
      gap: 10px;
    }
  `,

  stepSeparatorArrow: css`
    flex-shrink: 0;
    @media (max-width: 768px) {
      display: none;
    }
  `,

  carouselContainer: css`
    width: 100%;
    max-width: 100%;
    overflow: hidden;
    position: relative;
    padding: 16px 0 24px;
    box-sizing: border-box;
  `,

  templatesTrack: (offset) => css`
    display: flex;
    width: 100%;
    box-sizing: border-box;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateX(-${offset}%);
  `,

  templateSlideWrapper: (cardsPerView) => css`
    flex: 0 0 ${100 / cardsPerView}%;
    max-width: ${100 / cardsPerView}%;
    min-width: ${100 / cardsPerView}%;
    padding: 0 10px;
    box-sizing: border-box;
    @media (max-width: 640px) {
      padding: 0 4px;
    }
  `,

  /* CLICKABLE TEMPLATE PREVIEW CARD (DIRECTS TO RESUME BUILDER VIA LOGIN) */
  templateSlideCard: css`
    width: 100%;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 22px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    cursor: pointer;
    min-height: 100%;
    &:hover {
      transform: translateY(-8px) scale(1.02);
      border-color: #F55825;
      box-shadow: 0 20px 40px rgba(245, 88, 37, 0.16);
      .templateCtaBtn {
        background: #D94616;
        box-shadow: 0 6px 18px rgba(245, 88, 37, 0.35);
        .arrowIcon {
          transform: translateX(4px);
        }
      }
    }
    @media (max-width: 640px) {
      padding: 18px 14px;
      border-radius: 20px;
    }
  `,

  templateVisualMockup: (accentColor) => css`
    height: 185px;
    background: #FFFFFF;
    border-radius: 14px;
    padding: 12px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.04);
    box-sizing: border-box;
    overflow: hidden;
  `,

  templateCtaBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    border-radius: 12px;
    padding: 11px 16px;
    font-size: 13.5px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 14px;
    transition: all 0.25s ease;
    box-shadow: 0 4px 12px rgba(245, 88, 37, 0.25);
    width: 100%;
    cursor: pointer;
    .arrowIcon {
      transition: transform 0.25s ease;
    }
  `,

  carouselControlsRow: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-top: 24px;
  `,

  carouselNavBtn: css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    color: #1E293B;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
    &:hover {
      background: #F55825;
      color: #FFFFFF;
      border-color: #F55825;
      transform: scale(1.08);
    }
  `,

  carouselDot: (isActive) => css`
    width: ${isActive ? '24px' : '8px'};
    height: 8px;
    border-radius: 4px;
    background: ${isActive ? '#F55825' : '#CBD5E1'};
    transition: all 0.3s ease;
    cursor: pointer;
  `,

  /* INTERACTIVE TESTIMONIALS CAROUSEL */
  testimonialsSection: css`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto 70px;
    padding: 0 24px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 0 16px;
      margin-bottom: 50px;
    }
  `,

  testimonialCard: css`
    background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
    border-radius: 28px;
    padding: 40px 36px;
    color: #FFFFFF;
    box-shadow: 0 20px 48px -10px rgba(15, 23, 42, 0.35);
    border: 1px solid rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    transition: all 0.35s ease;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 28px 20px;
    }
  `,

  /* HOW IT WORKS */
  howItWorksBox: css`
    width: 100%;
    max-width: 1100px;
    margin: 0 auto 70px;
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFFFF 100%);
    border: 1.5px solid #FEF5D8;
    border-radius: 28px;
    padding: 42px 32px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 28px 18px;
      margin: 0 auto 50px;
      width: calc(100% - 32px);
    }
  `,

  stepsGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 22px;
    margin-top: 32px;
  `,

  stepCard: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 26px 20px;
    text-align: left;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    &:hover {
      transform: translateY(-6px);
      border-color: #F55825;
      box-shadow: 0 12px 28px rgba(245, 88, 37, 0.12);
    }
  `,

  stepNum: css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #F55825;
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 16px;
    box-shadow: 0 4px 12px rgba(245, 88, 37, 0.3);
  `,

  /* PRICING */
  pricingSection: css`
    width: 100%;
    max-width: 1000px;
    margin: 0 auto 70px;
    padding: 0 24px;
    box-sizing: border-box;
    @media (max-width: 768px) {
      padding: 0 16px;
      margin-bottom: 50px;
    }
  `,

  pricingCardsGrid: css`
    display: grid;
    grid-template-columns: 1fr 1.15fr;
    gap: 26px;
    align-items: center;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,

  pricingCard: (featured) => css`
    background: #FFFFFF;
    border: ${featured ? '2.5px solid #F55825' : '1.5px solid #E2E8F0'};
    border-radius: 28px;
    padding: ${featured ? '40px 32px' : '32px 26px'};
    box-shadow: ${featured ? '0 20px 50px rgba(245, 88, 37, 0.2)' : '0 6px 20px rgba(0,0,0,0.04)'};
    position: relative;
    text-align: left;
    transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
    box-sizing: border-box;
    &:hover {
      transform: translateY(-6px) scale(1.01);
      box-shadow: ${featured ? '0 28px 60px rgba(245, 88, 37, 0.28)' : '0 14px 32px rgba(0,0,0,0.08)'};
    }
  `,

  popularRibbon: css`
    position: absolute;
    top: -14px;
    right: 28px;
    background: linear-gradient(90deg, #F55825 0%, #D94616 100%);
    color: #FFFFFF;
    font-size: 11.5px;
    font-weight: 900;
    padding: 6px 16px;
    border-radius: 24px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    box-shadow: 0 4px 12px rgba(245, 88, 37, 0.3);
  `,

  /* FAQ (FIXED EXTENDING WIDTH ON ACCORDION CLICK) */
  faqSection: css`
    width: 100%;
    max-width: 840px;
    margin: 0 auto 70px;
    padding: 0 24px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    @media (max-width: 768px) {
      padding: 0 16px;
      margin-bottom: 50px;
    }
  `,

  faqItem: css`
    width: 100%;
    box-sizing: border-box;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 18px;
    margin-bottom: 14px;
    overflow: hidden;
    transition: all 0.25s ease;
    &:hover {
      border-color: #CBD5E1;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
    }
  `,

  faqQuestion: css`
    width: 100%;
    box-sizing: border-box;
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    color: #1E293B;
    user-select: none;
    text-align: left;
    span {
      flex: 1;
    }
  `,

  faqAnswer: css`
    width: 100%;
    box-sizing: border-box;
    padding: 14px 24px 20px;
    font-size: 14.5px;
    color: #64748B;
    line-height: 1.65;
    word-break: break-word;
    border-top: 1px solid #F1F5F9;
  `,

  /* MOBILE STICKY CTA */
  stickyMobileCta: css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFFFFF;
    border-top: 1px solid #E2E8F0;
    padding: 12px 20px;
    display: none;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.1);
    box-sizing: border-box;
    @media (max-width: 768px) {
      display: flex;
    }
  `,

  /* CORRECTLY PLACED FULL-WIDTH COMPLIANT FOOTER */
  footer: css`
    background: #0F172A;
    color: #94A3B8;
    padding: 44px 20px 48px;
    text-align: center;
    font-size: 13.5px;
    width: 100%;
    box-sizing: border-box;
    margin-top: 40px;
    position: relative;
    z-index: 10;
    a {
      color: #94A3B8;
      text-decoration: none;
      margin: 0 10px;
      font-weight: 600;
      &:hover {
        color: #FFFFFF;
        text-decoration: underline;
      }
    }
    @media (max-width: 768px) {
      padding-bottom: 96px;
    }
  `
};

/* LAUNCH OFFER AUTO-SWITCH: Driven by ONE central config date in src/config/launchOffer.config.js */

/* TESTIMONIALS ON /start: DISPLAYED */
const SHOW_TESTIMONIALS = true;

export default function StudentStart() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [offerConfig, setOfferConfig] = useState(() => getOfferConfig());
  const isOfferActive = offerConfig.isOfferActive;
  const [showInAppBanner, setShowInAppBanner] = useState(true);

  /* Detect in-app browsers (Instagram, Facebook, Messenger, TikTok) */
  const [inAppInfo, setInAppInfo] = useState({ isInApp: false, isAndroid: false, isIOS: false });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.navigator) {
      const ua = window.navigator.userAgent || '';
      const isInApp = /FBAN|FBAV|Instagram|Messenger|Line|musical_ly|BytedanceWebview/i.test(ua);
      const isAndroid = /Android/i.test(ua);
      const isIOS = /iPhone|iPad|iPod/i.test(ua);
      setInAppInfo({ isInApp, isAndroid, isIOS });
    }
  }, []);

  /* Check offer expiry every 30s so page auto-switches smoothly using the central config */
  useEffect(() => {
    const checkOffer = () => {
      setOfferConfig(getOfferConfig());
    };
    checkOffer();
    const interval = setInterval(checkOffer, 30000);
    return () => clearInterval(interval);
  }, []);

  /* Carousel State: Templates */
  const [templateIndex, setTemplateIndex] = useState(0);
  const [isTemplatePaused, setIsTemplatePaused] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(3);

  /* Carousel State: Testimonials */
  const [testimIndex, setTestimIndex] = useState(0);
  const [isTestimPaused, setIsTestimPaused] = useState(false);

  /* Scroll Progress Listener */
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(currentProgress);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Viewport resize listener for responsive carousel */
  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth < 640) setCardsPerView(1);
      else if (window.innerWidth < 960) setCardsPerView(2);
      else setCardsPerView(3);
    };

    updateCardsPerView();
    window.addEventListener('resize', updateCardsPerView);
    return () => window.removeEventListener('resize', updateCardsPerView);
  }, []);

  /* Set noindex until official ad launch */
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    meta.content = 'noindex, nofollow';
    document.title = 'Will Your Resume Pass the ATS Check? Free ATS Score & AI Career Prep | UDEN';
    return () => {
      meta.content = 'index, follow';
    };
  }, []);

  /* 4 ATS TEMPLATES DATA (MATCHING ACTUAL UDEN RESUME BUILDER SYSTEM) */
  const templates = [
    {
      id: 1,
      name: 'Template 1: ATS Standard Classic',
      category: 'Software & Campus Drives',
      accent: '#0F172A',
      highlight: '100% ATS Safe',
      desc: 'Single-column monochrome format. Specifically engineered for enterprise ATS parsers with zero tables, clean hierarchy, and standard fonts.',
      pills: ['Zero Tables / ATS Safe', 'STAR Method Bullets', '100% Parse Rate']
    },
    {
      id: 2,
      name: 'Template 2: Modern Executive Purple',
      category: 'Developers & Freshers',
      accent: '#6366F1',
      highlight: 'Modern Split Column',
      desc: 'Vibrant header banner with a structured two-column layout. Ideal for spotlighting both technical skill capsules and internship projects.',
      pills: ['Banner Header', 'Skill Capsules', 'Timeline Layout']
    },
    {
      id: 3,
      name: 'Template 3: Corporate Slate Blue',
      category: 'SDE, Analytics & Consulting',
      accent: '#0284C7',
      highlight: 'High Density',
      desc: 'Clean corporate layout with subtle blue dividers and pill-styled skills. Designed for SDE and analyst roles where clarity is paramount.',
      pills: ['Executive Dividers', 'High Information Density', 'Cloud & Tech Stack']
    },
    {
      id: 4,
      name: 'Template 4: Minimalist Accent Border',
      category: 'UI/UX & Creative Tech',
      accent: '#F55825',
      highlight: 'Accent Border',
      desc: 'Contemporary minimalist layout featuring an elegant accent border and structured project showcases. Perfect for frontend, UI/UX, and tech roles.',
      pills: ['Accent Page Border', 'Project Spotlights', 'Clean Typography']
    }
  ];

  const maxTemplateSteps = Math.max(1, templates.length - cardsPerView + 1);

  /* Adjust templateIndex if cardsPerView changes */
  useEffect(() => {
    if (templateIndex >= maxTemplateSteps) {
      setTemplateIndex(0);
    }
  }, [cardsPerView, maxTemplateSteps, templateIndex]);

  /* CONTINUOUS AUTO-ROTATING TEMPLATES CAROUSEL (every 3.2 seconds) */
  useEffect(() => {
    if (isTemplatePaused) return;
    const maxSteps = Math.max(1, templates.length - cardsPerView + 1);
    const timer = setInterval(() => {
      setTemplateIndex((prev) => (prev + 1) % maxSteps);
    }, 3200);
    return () => clearInterval(timer);
  }, [isTemplatePaused, cardsPerView, templates.length]);

  /* CONTINUOUS AUTO-ROTATING TESTIMONIALS CAROUSEL (every 4.5 seconds) */
  useEffect(() => {
    if (isTestimPaused) return;
    const timer = setInterval(() => {
      setTestimIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isTestimPaused]);

  /* General CTA click handler - ALWAYS OPENS IN NEW TAB (OR DIRECT CHROME INTENT IN META IN-APP BROWSER) */
  const handleCTAClick = (location, openInNewTab = true, destination = '') => {
    try {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'cta_click',
          button_location: location,
          destination: destination || undefined
        });
      }
    } catch (e) {
      console.log('GTM track error:', e);
    }

    const search = window.location.search;
    const sep = search ? '&' : '?';
    const destParam = destination ? `${sep}destination=${destination}` : '';
    const url = buildBubbleLoginUrl(destination ? { destination } : {});

    // If viewing inside Meta in-app browser on Android, trigger direct Chrome intent to prevent Google 403 disallowed_useragent
    if (inAppInfo.isInApp && inAppInfo.isAndroid) {
      const rawUrl = url.replace(/^https?:\/\//, '');
      const chromeIntent = `intent://${rawUrl}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.href = chromeIntent;
      return;
    }

    if (openInNewTab) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      window.location.href = url;
    }
  };

  /* Direct Template Click Handler - REDIRECTS TO LOGIN IN NEW TAB AND ONWARDS TO RESUME BUILDER */
  const handleTemplateClick = (templateId, templateName) => {
    try {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'template_select',
          template_id: templateId,
          template_name: templateName,
          destination: 'resume_builder'
        });
      }
    } catch (e) {
      console.log('GTM track error:', e);
    }

    const search = window.location.search;
    const sep = search ? '&' : '?';
    const targetUrl = buildBubbleLoginUrl({ destination: 'resume_builder', template_id: templateId });

    if (inAppInfo.isInApp && inAppInfo.isAndroid) {
      const rawUrl = targetUrl.replace(/^https?:\/\//, '');
      const chromeIntent = `intent://${rawUrl}#Intent;scheme=https;package=com.android.chrome;end`;
      window.location.href = chromeIntent;
      return;
    }

    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  /* Open current page in external Chrome if user is on Android inside in-app browser */
  const openInExternalChrome = () => {
    const rawUrl = window.location.href.replace(/^https?:\/\//, '');
    window.location.href = `intent://${rawUrl}#Intent;scheme=https;package=com.android.chrome;end`;
  };

  /* TESTIMONIALS DATA (OFFICIAL UDEN LANDING PAGE CANDIDATES & EMPLOYERS) */
  const testimonials = [
    {
      id: 1,
      image: AppAssets.HomeAssets.TESTIMONIAL.PALAK_JAIN,
      quote: "UDEN helped me with the interview preparation, PYQs, and AI video mock interviews which built my confidence. Thanks to their team I cracked Deloitte’s interview.",
      name: "Palak Jain",
      role: "Placed at Deloitte",
      company: "Deloitte",
      badge: "Verified Candidate"
    },
    {
      id: 2,
      image: AppAssets.HomeAssets.TESTIMONIAL.PANKAJ_SHARMA,
      quote: "Searching from lakhs of jobs and following the company-specific round prep guide made all the difference. I cleared TCS Digital with a ₹7.0L package.",
      name: "Pankaj Sharma",
      role: "Software Engineer",
      company: "TCS Digital (₹7.0L Package)",
      badge: "Placed via UDEN"
    },
    {
      id: 3,
      image: AppAssets.HomeAssets.TESTIMONIAL.ANANYA_VERMA,
      quote: "As a hiring manager, UDEN reduced our time-to-hire from 4 weeks to under 48 hours. The pre-assessed AI video interview recordings saved us dozens of screening rounds.",
      name: "Ananya Verma",
      role: "Talent Acquisition Director",
      company: "Enterprise Partner",
      badge: "Enterprise Employer"
    }
  ];

  const faqs = [
    {
      q: 'Is it really free to start?',
      a: 'Yes, 100%! When you sign in with Google or LinkedIn, your account immediately receives 70 free starter points. You can use these to run multiple ATS resume checks and chat with the UDEN AI Assistant without entering any credit card.'
    },
    {
      q: 'What happens when my free points finish?',
      a: isOfferActive 
        ? `Free points give you full access to diagnose your resume and explore features. When they finish, you can upgrade to the ${offerConfig.offerPrice}/month launch plan for full AI mock interviews, unlimited resume template exports, and Job Agent Pro matching.`
        : `Free points give you full access to diagnose your resume and explore features. When they finish, you can upgrade to the ${offerConfig.standardPrice}/month Student Placement Pass for full AI mock interviews, unlimited resume template exports, and Job Agent Pro matching.`
    },
    {
      q: 'What makes UDEN’s Resume Builder & Templates different?',
      a: 'Unlike generic online templates that confuse ATS parsers with multi-column tables and fancy icons, UDEN’s templates are strictly built according to modern corporate ATS standards. You can customize them as you wish, and our AI will rewrite your achievements using the STAR impact method.'
    },
    {
      q: 'What is Job Agent Pro and how does it find matched jobs?',
      a: 'Job Agent Pro is your autonomous AI role-preparation and job discovery engine. Once you upload your resume, AI calculates your Fit Score across 13,000+ job openings on the platform to find your ideal matches. For any target role, it provides the complete company selection process and round-by-round hiring procedures, authentic previously asked questions (PYQs) from past recruitment drives, and a customized learning path to prepare for that specific role.'
    },
    {
      q: 'How does the AI Interview Bot work?',
      a: 'The AI Interview Bot lets you request mock interviews tailored to any specific role you target (such as SDE, Cloud Engineer, Data Analyst, etc.). It conducts interactive interview sessions based on authentic previously asked company questions (PYQs), evaluates your answers in real time with scoring, and allows you to clarify any technical concept with the UDEN AI Assistant instantly.'
    },
    {
      q: 'Can I try an AI Mock Interview?',
      a: `AI mock interviews simulate real-world technical and HR rounds with instant evaluation and response analytics. 1 Full AI Mock Interview with an in-depth performance report and PYQ training is included with the ${offerConfig.currentPrice} Student Placement Pass.`
    },
    {
      q: 'Is my resume and personal data safe?',
      a: 'Absolutely. Your resume and personal information are strictly encrypted and used solely to generate your career insights. We do not sell student data to third parties.'
    }
  ];

  /* Helper to render visual preview of each of the 4 templates matching real screenshots */
  const renderTemplateMockup = (tpl) => {
    if (tpl.id === 1) {
      return (
        <div css={styles.templateVisualMockup(tpl.accent)} style={{ background: '#FFFFFF', border: '1.5px solid #CBD5E1' }}>
          <div style={{ textAlign: 'center', borderBottom: '1px solid #E2E8F0', paddingBottom: '6px' }}>
            <div style={{ fontSize: '11px', fontWeight: 900, color: '#0F172A', letterSpacing: '0.8px' }}>YOUR NAME</div>
            <div style={{ fontSize: '8px', color: '#64748B', marginTop: '2px' }}>Role • City, State • Phone • Email • LinkedIn</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', padding: '4px 0' }}>
            <div style={{ height: '5px', width: '35%', background: '#0F172A', borderRadius: '2px' }} />
            <div style={{ height: '4px', width: '92%', background: '#E2E8F0', borderRadius: '2px' }} />
            <div style={{ height: '4px', width: '82%', background: '#E2E8F0', borderRadius: '2px' }} />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ height: '5px', width: '38%', background: '#0F172A', borderRadius: '2px' }} />
            <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '7.5px', background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '1px 5px', borderRadius: '3px', color: '#334155' }}>Java</span>
              <span style={{ fontSize: '7.5px', background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '1px 5px', borderRadius: '3px', color: '#334155' }}>Python</span>
              <span style={{ fontSize: '7.5px', background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '1px 5px', borderRadius: '3px', color: '#334155' }}>SQL</span>
              <span style={{ fontSize: '7.5px', background: '#F1F5F9', border: '1px solid #E2E8F0', padding: '1px 5px', borderRadius: '3px', color: '#334155' }}>Git</span>
            </div>
          </div>
        </div>
      );
    }
    if (tpl.id === 2) {
      return (
        <div css={styles.templateVisualMockup(tpl.accent)} style={{ background: '#FFFFFF', border: '1.5px solid #DDD6FE', padding: 0 }}>
          <div style={{ background: 'linear-gradient(135deg, #4F46E5 0%, #6366F1 100%)', padding: '8px 10px', color: '#FFFFFF' }}>
            <div style={{ fontSize: '10.5px', fontWeight: 900 }}>Your Name</div>
            <div style={{ fontSize: '7.5px', opacity: 0.9, marginTop: '1px' }}>Your Job Title / Role</div>
            <div style={{ display: 'flex', gap: '3px', marginTop: '3px' }}>
              <span style={{ fontSize: '6.5px', background: 'rgba(255,255,255,0.2)', padding: '1px 4px', borderRadius: '3px' }}>Location</span>
              <span style={{ fontSize: '6.5px', background: 'rgba(255,255,255,0.2)', padding: '1px 4px', borderRadius: '3px' }}>Email</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '6px', padding: '8px 10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ fontSize: '8px', fontWeight: 800, color: '#4F46E5' }}>Work Experience</div>
              <div style={{ height: '3.5px', width: '90%', background: '#E2E8F0', borderRadius: '2px' }} />
              <div style={{ height: '3.5px', width: '80%', background: '#E2E8F0', borderRadius: '2px' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <div style={{ fontSize: '8px', fontWeight: 800, color: '#4F46E5' }}>Skills</div>
              <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '6.5px', background: '#EEF2FF', color: '#4F46E5', padding: '1px 4px', borderRadius: '4px' }}>React</span>
                <span style={{ fontSize: '6.5px', background: '#EEF2FF', color: '#4F46E5', padding: '1px 4px', borderRadius: '4px' }}>Node</span>
                <span style={{ fontSize: '6.5px', background: '#EEF2FF', color: '#4F46E5', padding: '1px 4px', borderRadius: '4px' }}>AWS</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (tpl.id === 3) {
      return (
        <div css={styles.templateVisualMockup(tpl.accent)} style={{ background: '#FFFFFF', border: '1.5px solid #BAE6FD' }}>
          <div style={{ borderBottom: '2px solid #0284C7', paddingBottom: '5px' }}>
            <div style={{ fontSize: '11px', fontWeight: 900, color: '#0369A1' }}>YOUR NAME</div>
            <div style={{ fontSize: '7.5px', color: '#64748B' }}>Software Engineer &bull; Cloud Developer</div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', marginTop: '4px' }}>
            <div style={{ fontSize: '8px', fontWeight: 800, color: '#0369A1' }}>Experience</div>
            <div style={{ height: '3.5px', width: '95%', background: '#E2E8F0', borderRadius: '2px' }} />
            <div style={{ height: '3.5px', width: '85%', background: '#E2E8F0', borderRadius: '2px' }} />
          </div>
          <div style={{ marginTop: '4px' }}>
            <div style={{ fontSize: '8px', fontWeight: 800, color: '#0369A1', marginBottom: '2px' }}>Skills &amp; Expertise</div>
            <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '7px', background: '#E0F2FE', color: '#0369A1', padding: '1px 5px', borderRadius: '5px' }}>C++</span>
              <span style={{ fontSize: '7px', background: '#E0F2FE', color: '#0369A1', padding: '1px 5px', borderRadius: '5px' }}>FullStack</span>
              <span style={{ fontSize: '7px', background: '#E0F2FE', color: '#0369A1', padding: '1px 5px', borderRadius: '5px' }}>Docker</span>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div css={styles.templateVisualMockup(tpl.accent)} style={{ background: '#FFFFFF', border: '1.5px solid #F55825', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 3, left: 3, right: 3, bottom: 3, border: '1px solid #FFDECB', pointerEvents: 'none', borderRadius: '10px' }} />
        <div style={{ padding: '2px 4px' }}>
          <div style={{ fontSize: '10.5px', fontWeight: 900, color: '#0F172A' }}>Aarav Sharma <span style={{ fontSize: '7.5px', fontWeight: 600, color: '#EA580C' }}>UI/UX Designer</span></div>
          <div style={{ fontSize: '7px', color: '#64748B', marginTop: '1px' }}>Bengaluru, Karnataka • linkedin.com/in/aarav</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', padding: '0 4px' }}>
          <div style={{ fontSize: '7.5px', fontWeight: 800, color: '#0F172A' }}>Professional Summary</div>
          <div style={{ height: '3.5px', width: '92%', background: '#F1F5F9', borderRadius: '2px' }} />
        </div>
        <div style={{ padding: '0 4px' }}>
          <div style={{ fontSize: '7.5px', fontWeight: 800, color: '#0F172A', marginBottom: '2px' }}>Skills</div>
          <div style={{ display: 'flex', gap: '3px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '6.5px', background: '#FFF5F0', border: '1px solid #FFDECB', color: '#C2410C', padding: '1px 4px', borderRadius: '4px' }}>Figma</span>
            <span style={{ fontSize: '6.5px', background: '#FFF5F0', border: '1px solid #FFDECB', color: '#C2410C', padding: '1px 4px', borderRadius: '4px' }}>Prototyping</span>
            <span style={{ fontSize: '6.5px', background: '#FFF5F0', border: '1px solid #FFDECB', color: '#C2410C', padding: '1px 4px', borderRadius: '4px' }}>User Research</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div css={styles.pageWrapper}>
      {/* Scroll Progress Indicator Bar */}
      <div css={styles.scrollProgressBar(scrollProgress)} />

      {/* STICKY TOP CONTAINER (ANIMATED BANNER + HEADER TOGETHER) */}
      <div css={styles.stickyHeaderWrapper}>
        {/* Expanded Prominent Launch Offer Banner with Illustration & Sparkles */}
        <div css={styles.topBanner}>
          <div css={styles.shimmerLight} />
          <div css={styles.bannerContent}>
            {/* Rich Vector Graduate & Career Booster Illustration */}
            <div css={styles.bannerIllustrationBox}>
              <svg width="42" height="42" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="48" height="48" rx="14" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                <path d="M24 10L37 17.5L24 25L11 17.5L24 10Z" fill="#FEF08A" />
                <path d="M15 21V28C15 30.8 18.8 33 24 33C29.2 33 33 30.8 33 28V21" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
                <path d="M37 17.5V28" stroke="#FEF08A" strokeWidth="2" strokeLinecap="round" />
                <circle cx="37" cy="29" r="2.2" fill="#FEF08A" />
                <circle cx="10" cy="12" r="1.5" fill="#FEF08A" />
                <circle cx="39" cy="11" r="1.5" fill="#FFFFFF" />
              </svg>
            </div>
            <div css={styles.bannerTextGroup}>
              {isOfferActive ? (
                <>
                  <div css={styles.bannerHeadline}>
                    <span css={styles.animatedSparkleIcon}>
                      <Sparkles size={16} />
                    </span>
                    <span>Special Student Launch Offer: Get <strong>70 Free Starter Points</strong> on Sign-Up!</span>
                  </div>
                  <div css={styles.bannerOfferPill}>
                    <Zap size={13} fill="#FEF08A" />
                    <span>{offerConfig.bannerOfferText}</span>
                  </div>
                </>
              ) : (
                <>
                  <div css={styles.bannerHeadline}>
                    <span css={styles.animatedSparkleIcon}>
                      <Sparkles size={16} />
                    </span>
                    <span>Student Placement Pass: Get <strong>70 Free Starter Points</strong> on Sign-Up!</span>
                  </div>
                  <div css={styles.bannerOfferPill}>
                    <Zap size={13} fill="#FEF08A" />
                    <span>₹500/mo Plan &bull; Full AI Mock Interviews &amp; Job Agent Pro</span>
                  </div>
                </>
              )}
            </div>
            <button css={styles.bannerCtaBtn} onClick={() => handleCTAClick('top_banner_cta', true)}>
              <span>Claim 70 Points</span>
              <ArrowRight size={14} />
            </button>
          </div>
        </div>

        {/* Minimalist Header */}
        <header css={styles.header}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Logo style={{ height: '36px' }} />
          </div>
          <button css={styles.signInBtn} onClick={() => handleCTAClick('header_signin', true)}>
            Sign In to Portal
          </button>
        </header>
      </div>

      {/* MAIN HERO SECTION (SPLIT 2-COLUMN WITH LIVE SCANNER ILLUSTRATION) */}
      <section css={styles.heroSection}>
        {/* Left Column: Copy & CTAs */}
        <ScrollReveal delay={50} style={{ width: '100%', boxSizing: 'border-box' }}>
          <div>
            <div css={styles.badgeTag}>
              <Zap size={15} /> 13,000+ Job Openings on the Platform • 70 Free Starter Points on Sign Up • No Card Needed
            </div>
            <h1 css={styles.heroTitle}>
              Will Your Resume Pass the <span>ATS Filter</span>?
            </h1>
            <p css={styles.heroSubtitle}>
              75% of student resumes are rejected by automated company software before a recruiter ever reads them. 
              Upload your resume, discover where it falls short, and unlock AI tools engineered to help you crack placement drives.
            </p>
            <div css={styles.ctaContainer}>
              <button css={styles.primaryBtn} onClick={() => handleCTAClick('hero', true)}>
                Check My Resume Free
                <ArrowRight size={19} />
              </button>
              <div css={styles.btnSubtext}>
                <ShieldCheck size={16} color="#10B981" />
                Sign in with Google • Takes 5 seconds • 100% Free to Start
              </div>
            </div>
            <div style={{ fontSize: '13px', color: '#64748B', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span>⭐ Made specifically for college students, freshers &amp; jobseekers in India</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Right Column: Live ATS Scanner & AI Mockup Illustration */}
        <ScrollReveal delay={150} style={{ width: '100%', boxSizing: 'border-box' }}>
          <div css={styles.heroIllustrationCard}>
            <div css={styles.scannerLaser} />
            <div css={styles.mockupHeader}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 800, color: '#F55825', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  LIVE ATS SIMULATION
                </div>
                <div style={{ fontSize: '17px', fontWeight: 900, color: '#0F172A' }}>
                  SDE Placement Radar
                </div>
                <div style={{ fontSize: '12px', color: '#64748B' }}>
                  Target: Full Stack &amp; Cloud Drives
                </div>
              </div>
              <div css={styles.scoreCircle}>
                <span className="scoreVal">88</span>
                <span className="scoreLabel">ATS Score</span>
              </div>
            </div>

            {/* Detected Keywords & Matching Status */}
            <div style={{ fontSize: '12px', fontWeight: 800, color: '#334155', marginBottom: '8px' }}>
              Matched Skills &amp; Verifications:
            </div>
            <div css={styles.mockupSkillChips}>
              <span css={styles.mockupChip('pass')}><Check size={12} /> React 18 (STAR verified)</span>
              <span css={styles.mockupChip('pass')}><Check size={12} /> Python / DSA</span>
              <span css={styles.mockupChip('pass')}><Check size={12} /> SQL Database</span>
              <span css={styles.mockupChip('warn')}><TrendingUp size={12} /> AWS Cloud (+5 pts)</span>
            </div>

            {/* AI Suggestion Box */}
            <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: '14px', padding: '12px 14px', fontSize: '12.5px', color: '#334155' }}>
              <span style={{ fontWeight: 800, color: '#F55825' }}>AI Tip: </span>
              Quantify project impact with percentage metrics to increase recruiter interview shortlists by 3.4x.
            </div>

            {/* Floating AI Agent Status Card */}
            <div css={styles.aiFloatingCard}>
              <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(245, 88, 37, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Bot size={20} color="#F55825" />
              </div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 800 }}>Job Agent Pro Active</div>
                <div style={{ fontSize: '11.5px', color: '#94A3B8' }}>13,000+ Active Job Openings Matched to Fit Score</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* THE STORYLINE & CONTRAST CARD WITH SCROLL REVEAL */}
      <ScrollReveal delay={100} style={{ width: '100%', boxSizing: 'border-box' }}>
        <div css={styles.contrastCard}>
          <h3 style={{ fontSize: '22px', fontWeight: 900, textAlign: 'center', margin: '0 0 8px', color: '#0F172A' }}>
            Stop Sending Resumes Into A Black Hole
          </h3>
          <p style={{ textAlign: 'center', color: '#64748B', fontSize: '15px', margin: 0 }}>
            Campus placement competition is brutal. Here is how UDEN levels the playing field for you:
          </p>
          <div css={styles.contrastGrid}>
            <div css={styles.contrastColOld}>
              <div style={{ color: '#DC2626', fontWeight: 800, fontSize: '15px', marginBottom: '10px' }}>
                ❌ The Old, Stressful Way
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: '#7F1D1D', fontSize: '14px', lineHeight: 1.8 }}>
                <li>Applying to 50+ companies with the same generic PDF.</li>
                <li>Filtered out by automated ATS bots within 3 seconds.</li>
                <li>Stuck on interview prep with no feedback or real practice.</li>
                <li>Zero visibility into why recruiters rejected your profile.</li>
              </ul>
            </div>
            <div css={styles.contrastColNew}>
              <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '15px', marginBottom: '10px' }}>
                ✅ The UDEN AI Advantage
              </div>
              <ul style={{ margin: 0, paddingLeft: '18px', color: '#14532D', fontSize: '14px', lineHeight: 1.8 }}>
                <li><strong>Instant ATS Score:</strong> Know exactly where your resume lacks before applying.</li>
                <li><strong>Custom Templates:</strong> Build clean, recruiter-approved resumes effortlessly.</li>
                <li><strong>Job Agent Pro:</strong> Match your Fit Score across 13,000+ job openings on the platform, view full company selection procedures, PYQs, and create your learning path.</li>
                <li><strong>AI Interview Bot:</strong> Request role-specific mock interviews and practice with authentic previously asked questions (PYQs) &amp; get instant doubt solving.</li>
              </ul>
            </div>
          </div>
        </div>
      </ScrollReveal>

      {/* THE 4 CORE PILLARS AS GLASS CARDS WITH ORANGE SHADE & SCROLL REVEAL */}
      <section css={styles.featuresSection}>
        {/* Radiant Ambient Background Glow Orbs for Glass Effect */}
        <div css={styles.ambientOrbLeft} />
        <div css={styles.ambientOrbRight} />

        <ScrollReveal delay={80} style={{ width: '100%', boxSizing: 'border-box' }}>
          <div css={styles.sectionHeading}>
            <h2>Everything You Need To Secure Your Offer</h2>
            <p>Four integrated AI modules built to turn your preparation into confirmed shortlists.</p>
          </div>
        </ScrollReveal>

        <div css={styles.featureCardsGrid}>
          {/* Card 1: ATS Resume Analysis (Glass with Orange Shade) */}
          <ScrollReveal delay={100} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.glassFeatureCard}>
              <div css={styles.glassCardGlow} />
              <div css={styles.featureThumbBox}>
                <img 
                  src={process.env.PUBLIC_URL + '/assets/tutorials/video_3_resume_analysis.png'} 
                  alt="ATS Resume Analysis" 
                  className="featureThumbImg"
                />
                <span className="featureOverlayBadge">Instant Diagnostic</span>
              </div>
              <div css={styles.featureCardBody}>
                <div>
                  <h4 css={styles.cardTitle}>ATS Resume Analysis</h4>
                  <p css={styles.cardDesc}>
                    Upload your resume and get an instant score (0–100). Identify missing keywords, formatting errors, and weak bullet points tailored to target job roles.
                  </p>
                </div>
                <div css={styles.costTag}>Uses 5 Free Points / Scan</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: AI Resume Builder & Templates (Glass with Orange Shade) */}
          <ScrollReveal delay={200} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.glassFeatureCard}>
              <div css={styles.glassCardGlow} />
              <div css={styles.featureThumbBox}>
                <img 
                  src={process.env.PUBLIC_URL + '/assets/tutorials/video_2_profile_resume.png'} 
                  alt="AI Resume Builder & Templates" 
                  className="featureThumbImg"
                />
                <span className="featureOverlayBadge">Build As You Wish</span>
              </div>
              <div css={styles.featureCardBody}>
                <div>
                  <h4 css={styles.cardTitle}>Pro Resume Templates</h4>
                  <p css={styles.cardDesc}>
                    Choose from modern, ATS-proof resume templates. Customize sections, let AI rewrite your achievements with high-impact action verbs, and export in 1 click.
                  </p>
                </div>
                <div css={styles.costTag}>Included with Starter &amp; Plan</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 3: Job Agent Pro (Glass with Orange Shade) */}
          <ScrollReveal delay={300} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.glassFeatureCard}>
              <div css={styles.glassCardGlow} />
              <div css={styles.featureThumbBox}>
                <img 
                  src={process.env.PUBLIC_URL + '/assets/tutorials/video_6_job_agent_pro.png'} 
                  alt="Job Agent Pro" 
                  className="featureThumbImg"
                />
                <span className="featureOverlayBadge">Fit Score &amp; Learning Paths</span>
              </div>
              <div css={styles.featureCardBody}>
                <div>
                  <h4 css={styles.cardTitle}>Job Agent Pro</h4>
                  <p css={styles.cardDesc}>
                    Upload your resume to discover jobs matched to your Fit Score across 13,000+ job openings on the platform. View complete company selection processes, round procedures, and previously asked questions (PYQs)—and create your custom learning path.
                  </p>
                </div>
                <div css={styles.costTag}>Fit Score &amp; Custom Learning Paths</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: AI Interview Bot (Glass with Orange Shade) */}
          <ScrollReveal delay={400} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.glassFeatureCard}>
              <div css={styles.glassCardGlow} />
              <div css={styles.featureThumbBox}>
                <img 
                  src={process.env.PUBLIC_URL + '/assets/tutorials/video_4_interview_coach.png'} 
                  alt="AI Interview Bot" 
                  className="featureThumbImg"
                />
                <span className="featureOverlayBadge">Role-Specific Mock Practice</span>
              </div>
              <div css={styles.featureCardBody}>
                <div>
                  <h4 css={styles.cardTitle}>AI Interview Bot</h4>
                  <p css={styles.cardDesc}>
                    Request mock interviews tailored to any desired role. Practice with an AI interviewer trained on authentic previously asked company questions (PYQs), receive real-time answer scoring, and clarify technical doubts on the spot.
                  </p>
                </div>
                <div css={styles.costTag}>Role-Specific PYQ Mock Practice</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* DEDICATED SHOWCASE: JOB AGENT PRO & AI INTERVIEW BOT (ROLE PREPARATION ENGINE) */}
      <section css={styles.rolePrepSection}>
        <ScrollReveal delay={50} style={{ width: '100%', boxSizing: 'border-box' }}>
          <div css={styles.sectionHeading}>
            <div css={styles.rolePrepHeadingPill}>
              <Brain size={16} />
              <span>Role Preparation Engine</span>
            </div>
            <h2>Prepare for Your Desired Role with Job Agent Pro &amp; AI Interview Bot</h2>
            <p>
              Upload your resume to discover matched roles based on your Fit Score across 13,000+ job openings on the platform. 
              Unlock company selection procedures, previously asked questions (PYQs), custom learning paths, and request role-specific mock interviews.
            </p>
          </div>
        </ScrollReveal>

        <div css={styles.rolePrepGrid}>
          {/* Card A: Job Agent Pro */}
          <ScrollReveal delay={100} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.rolePrepCard}>
              <div>
                <div css={styles.rolePrepCardHeader}>
                  <div css={styles.rolePrepIconCircle}>
                    <Briefcase size={26} />
                  </div>
                  <div>
                    <div css={styles.rolePrepFeatureBadge}>
                      <Target size={12} /> Fit Score Matching Engine
                    </div>
                    <h3 css={styles.rolePrepCardTitle}>Job Agent Pro</h3>
                    <p css={styles.rolePrepCardSubtitle}>
                      Autonomous AI job matching, company selection procedures &amp; custom learning paths.
                    </p>
                  </div>
                </div>

                {/* Sub-module 1: Resume Upload & Fit Score */}
                <div css={styles.rolePrepHighlightBox}>
                  <div css={styles.rolePrepSectionTitle}>
                    <CheckCircle2 size={16} color="#F55825" />
                    <span>Resume Upload &amp; Live Fit Score</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF', padding: '10px 14px', borderRadius: '12px', border: '1px solid #E2E8F0', marginBottom: '8px' }}>
                    <div>
                      <div style={{ fontSize: '13px', fontWeight: 800, color: '#0F172A' }}>Target: Software Development Engineer (SDE)</div>
                      <div style={{ fontSize: '11.5px', color: '#16A34A', fontWeight: 700 }}>13,000+ Job Openings on Platform Evaluated</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <span style={{ fontSize: '18px', fontWeight: 900, color: '#F55825' }}>89%</span>
                      <div style={{ fontSize: '10px', color: '#64748B', fontWeight: 800 }}>FIT SCORE</div>
                    </div>
                  </div>
                  <div style={{ height: '6px', width: '100%', background: '#F1F5F9', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: '89%', background: 'linear-gradient(90deg, #F55825, #EA580C)', borderRadius: '3px' }} />
                  </div>
                </div>

                {/* Sub-module 2: Complete Selection Process & Procedure */}
                <div css={styles.rolePrepHighlightBox}>
                  <div css={styles.rolePrepSectionTitle}>
                    <ListChecks size={16} color="#F55825" />
                    <span>Company Selection Process &amp; Procedures</span>
                  </div>
                  <div css={styles.rolePrepRoundItem}>
                    <span className="roundBadge">Round 1</span>
                    <div>
                      <strong>Online Assessment:</strong> Coding problems (DSA), quantitative aptitude &amp; CS core MCQs (60 mins).
                    </div>
                  </div>
                  <div css={styles.rolePrepRoundItem}>
                    <span className="roundBadge">Round 2</span>
                    <div>
                      <strong>Technical Interview:</strong> Data structures, system design, algorithm optimization &amp; live coding.
                    </div>
                  </div>
                  <div css={styles.rolePrepRoundItem}>
                    <span className="roundBadge">Round 3</span>
                    <div>
                      <strong>Techno-Managerial &amp; HR:</strong> Project deep dives, scenario-based questions &amp; culture fitment.
                    </div>
                  </div>
                </div>

                {/* Sub-module 3: Previously Asked Questions (PYQs) & Custom Learning Path */}
                <div css={styles.rolePrepHighlightBox}>
                  <div css={styles.rolePrepSectionTitle}>
                    <BookOpen size={16} color="#F55825" />
                    <span>PYQs &amp; Custom Learning Path</span>
                  </div>
                  <div css={styles.rolePrepPyqSnippet}>
                    <span style={{ fontSize: '11px', fontWeight: 800, color: '#C2410C', textTransform: 'uppercase' }}>PYQ From Top Tech Drive:</span>
                    <div style={{ fontWeight: 600, marginTop: '2px' }}>"Explain React Virtual DOM vs Real DOM and optimize state re-renders with memoization."</div>
                  </div>
                  <div css={styles.rolePrepLearningStep}>
                    <Compass size={16} className="stepIcon" />
                    <span><strong>Personalized Roadmap:</strong> AI builds step-by-step sprints bridging your resume skill gaps to reach a 95%+ Fit Score.</span>
                  </div>
                </div>
              </div>

              <button 
                css={styles.rolePrepCardActionBtn}
                onClick={() => handleCTAClick('showcase_job_agent_pro', true, 'job_agent_pro')}
              >
                <span>Upload Resume &amp; Check Fit Score</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </ScrollReveal>

          {/* Card B: AI Interview Bot */}
          <ScrollReveal delay={200} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.rolePrepCard}>
              <div>
                <div css={styles.rolePrepCardHeader}>
                  <div css={styles.rolePrepIconCircle} style={{ background: '#EFF6FF', borderColor: '#DBEAFE', color: '#2563EB' }}>
                    <Bot size={26} />
                  </div>
                  <div>
                    <div css={styles.rolePrepFeatureBadge} style={{ background: '#EFF6FF', borderColor: '#DBEAFE', color: '#1D4ED8' }}>
                      <Sparkles size={12} /> On-Demand Role Practice
                    </div>
                    <h3 css={styles.rolePrepCardTitle}>AI Interview Bot</h3>
                    <p css={styles.rolePrepCardSubtitle}>
                      Request mock interviews for any desired role and practice with authentic PYQs.
                    </p>
                  </div>
                </div>

                {/* Sub-module 1: Request Interview for Desired Role */}
                <div css={styles.rolePrepHighlightBox}>
                  <div css={styles.rolePrepSectionTitle}>
                    <GraduationCap size={16} color="#2563EB" />
                    <span>Role-Specific Interview Request</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: '#FFFFFF', padding: '10px 14px', borderRadius: '12px', border: '1px solid #E2E8F0', flexWrap: 'wrap', gap: '8px' }}>
                    <div>
                      <div style={{ fontSize: '11px', fontWeight: 700, color: '#64748B' }}>DESIRED ROLE SELECTED</div>
                      <div style={{ fontSize: '13.5px', fontWeight: 900, color: '#0F172A' }}>Frontend / Full Stack React Engineer</div>
                    </div>
                    <span style={{ fontSize: '11px', background: '#ECFDF5', color: '#059669', border: '1px solid #A7F3D0', padding: '4px 10px', borderRadius: '12px', fontWeight: 800 }}>
                      ● Mock Session Ready
                    </span>
                  </div>
                </div>

                {/* Sub-module 2: Interactive Mock Interview Simulation (Based on PYQs) */}
                <div css={styles.rolePrepHighlightBox}>
                  <div css={styles.rolePrepSectionTitle}>
                    <MessageSquare size={16} color="#2563EB" />
                    <span>Live Simulation Based on Previous Questions</span>
                  </div>
                  
                  {/* Bot Question Message */}
                  <div className="botMsg" css={styles.mockInterviewMessageBubble}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 800, fontSize: '11.5px', marginBottom: '4px' }}>
                      <Bot size={14} /> AI Interviewer (Trained on PYQ Bank):
                    </div>
                    "Let's test your problem-solving. A top tech drive previously asked: How do you design an LRU Cache with O(1) time complexity for get and put operations?"
                  </div>

                  {/* Candidate Answer Message */}
                  <div className="userMsg" css={styles.mockInterviewMessageBubble}>
                    <div style={{ fontWeight: 800, fontSize: '11.5px', color: '#64748B', marginBottom: '4px' }}>
                      Candidate Response:
                    </div>
                    "I combine a Doubly Linked List for O(1) node eviction and insertion with a Hash Map for O(1) key lookups..."
                  </div>

                  {/* Real-time AI Evaluation */}
                  <div className="evalMsg" css={styles.mockInterviewMessageBubble}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontWeight: 900, fontSize: '12px', marginBottom: '4px' }}>
                      <span>✓ AI Score: 9.2 / 10</span>
                      <span style={{ fontSize: '11px' }}>Real-Time Assessment</span>
                    </div>
                    <div style={{ fontSize: '12px', lineHeight: 1.4 }}>
                      Strong algorithmic justification. Recommendation: Emphasize concurrency handling and null-pointer boundary checks.
                    </div>
                  </div>
                </div>

                {/* Sub-module 3: Instant Technical Doubt Clearing */}
                <div css={styles.rolePrepHighlightBox}>
                  <div css={styles.rolePrepSectionTitle}>
                    <Code size={16} color="#2563EB" />
                    <span>UDEN AI Assistant: Instant Technical Clarifications</span>
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#334155', lineHeight: 1.5 }}>
                    Stuck during your prep? Ask the UDEN AI Assistant any technical question regarding data structures, code syntax, system design, or interview behavioral answers for immediate clarification.
                  </div>
                </div>
              </div>

              <button 
                css={styles.rolePrepCardActionBtn}
                style={{ background: 'linear-gradient(135deg, #2563EB 0%, #1D4ED8 100%)', boxShadow: '0 4px 16px rgba(37, 99, 235, 0.25)' }}
                onClick={() => handleCTAClick('showcase_ai_interview_bot', true, 'ai_interview_bot')}
              >
                <span>Request AI Mock Interview for Your Role</span>
                <ArrowRight size={17} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTINUOUS AUTO-ROTATING CAROUSEL: ATS RESUME TEMPLATES */}
      <section css={styles.templatesSection}>
        <ScrollReveal delay={100} style={{ width: '100%', boxSizing: 'border-box' }}>
          <div css={styles.sectionHeading}>
            <div css={styles.autoRotateBadge}>
              <span className="greenDot" />
              <span>Auto-Rotating Preview &bull; Hover to Pause</span>
            </div>
            <h2>Build Your Resume with the Templates</h2>
            <p>Click any template below to open directly in a new tab inside the Resume Builder.</p>
          </div>

          {/* DIRECT FAST-TRACK PROCEDURE GUIDE */}
          <div css={styles.procedureGuideBox}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', fontWeight: 800, color: '#C2410C', fontSize: '14.5px', marginBottom: '14px' }}>
              <Sparkles size={17} color="#F55825" />
              <span>How It Works: 1-Click Template Setup</span>
            </div>
            <div css={styles.procedureStepsRow}>
              <div css={styles.procedureStepCard}>
                <span className="stepNumBadge">1</span>
                <div className="stepContent">
                  <div className="stepTitle">Choose a Template</div>
                  <div className="stepDesc">Browse the ATS templates below and click your favorite</div>
                </div>
              </div>
              <ChevronRight size={20} color="#F55825" className="stepSeparatorArrow" />
              <div css={styles.procedureStepCard}>
                <span className="stepNumBadge">2</span>
                <div className="stepContent">
                  <div className="stepTitle">Quick Sign In</div>
                  <div className="stepDesc">Authenticate with Google or Email in a new tab</div>
                </div>
              </div>
              <ChevronRight size={20} color="#F55825" className="stepSeparatorArrow" />
              <div css={styles.procedureStepCard}>
                <span className="stepNumBadge">3</span>
                <div className="stepContent">
                  <div className="stepTitle">Direct to Resume Builder</div>
                  <div className="stepDesc">Opens straight into the Resume Builder ready to customize!</div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <div 
          css={styles.carouselContainer}
          onMouseEnter={() => setIsTemplatePaused(true)}
          onMouseLeave={() => setIsTemplatePaused(false)}
        >
          <div css={styles.templatesTrack(templateIndex * (100 / cardsPerView))}>
            {templates.map((tpl) => (
              <div key={tpl.id} css={styles.templateSlideWrapper(cardsPerView)}>
                <div 
                  css={styles.templateSlideCard}
                  onClick={() => handleTemplateClick(tpl.id, tpl.name)}
                >
                  <div>
                    {renderTemplateMockup(tpl)}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: tpl.accent, textTransform: 'uppercase' }}>
                        {tpl.category}
                      </span>
                      <span style={{ fontSize: '10px', background: '#F1F5F9', padding: '3px 8px', borderRadius: '8px', fontWeight: 700, color: '#334155' }}>
                        {tpl.highlight}
                      </span>
                    </div>
                    <h4 style={{ fontSize: '17.5px', fontWeight: 800, color: '#0F172A', margin: '0 0 6px' }}>
                      {tpl.name}
                    </h4>
                    <p style={{ fontSize: '13px', color: '#64748B', lineHeight: 1.55, margin: '0 0 14px' }}>
                      {tpl.desc}
                    </p>
                  </div>
                  {/* HIGH-CONVERTING CTA BUTTON DIRECTING TO RESUME BUILDER IN NEW TAB */}
                  <button 
                    css={styles.templateCtaBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleTemplateClick(tpl.id, tpl.name);
                    }}
                  >
                    <span>Select &amp; Build Resume</span>
                    <ArrowRight size={15} className="arrowIcon" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Navigation, Auto-Rotate Indicator & Dots */}
          <div css={styles.carouselControlsRow}>
            <button 
              css={styles.carouselNavBtn} 
              onClick={() => setTemplateIndex((prev) => (prev - 1 + maxTemplateSteps) % maxTemplateSteps)}
              aria-label="Previous template"
            >
              <ChevronLeft size={20} />
            </button>
            <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
              {Array.from({ length: maxTemplateSteps }).map((_, i) => (
                <div 
                  key={i} 
                  css={styles.carouselDot(i === templateIndex)} 
                  onClick={() => setTemplateIndex(i)} 
                />
              ))}
            </div>
            <button 
              css={styles.carouselNavBtn} 
              onClick={() => setTemplateIndex((prev) => (prev + 1) % maxTemplateSteps)}
              aria-label="Next template"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* AUTO-ROTATING TESTIMONIALS CAROUSEL & PLACEMENT PROOF */}
      <section css={styles.testimonialsSection}>
        <ScrollReveal delay={100} style={{ width: '100%', boxSizing: 'border-box' }}>
          <div css={styles.sectionHeading}>
            <h2>Real Stories from UDEN Candidates &amp; Employers</h2>
            <p>See how candidates leverage 13,000+ job openings on the platform, PYQs, and AI role prep to crack top offers.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150} style={{ width: '100%', boxSizing: 'border-box' }}>
          <div 
            css={styles.testimonialCard}
            onMouseEnter={() => setIsTestimPaused(true)}
            onMouseLeave={() => setIsTestimPaused(false)}
          >
            <div style={{ display: 'flex', gap: '4px', marginBottom: '18px' }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={18} fill="#F59E0B" color="#F59E0B" />
              ))}
            </div>
            <p style={{ fontSize: '18px', lineHeight: 1.65, fontStyle: 'italic', color: '#F1F5F9', margin: '0 0 28px', minHeight: '80px' }}>
              "{testimonials[testimIndex].quote}"
            </p>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.12)', paddingTop: '20px', flexWrap: 'wrap', gap: '14px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #F55825', flexShrink: 0, background: '#1E293B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img 
                    src={testimonials[testimIndex].image} 
                    alt={testimonials[testimIndex].name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  />
                </div>
                <div>
                  <div style={{ fontSize: '17px', fontWeight: 900, color: '#FFFFFF' }}>
                    {testimonials[testimIndex].name}
                  </div>
                  <div style={{ fontSize: '13.5px', color: '#F55825', fontWeight: 700 }}>
                    {testimonials[testimIndex].role}
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#94A3B8', display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '2px' }}>
                    <ShieldCheck size={13} color="#10B981" />
                    <span>{testimonials[testimIndex].badge}</span>
                  </div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '10px' }}>
                <button 
                  css={styles.carouselNavBtn} 
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}
                  onClick={() => setTestimIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={18} />
                </button>
                <button 
                  css={styles.carouselNavBtn} 
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.2)' }}
                  onClick={() => setTestimIndex((prev) => (prev + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* HOW IT WORKS IN 3 SIMPLE STEPS WITH SCROLL REVEAL */}
      <div css={styles.howItWorksBox}>
        <ScrollReveal delay={50} style={{ width: '100%', boxSizing: 'border-box' }}>
          <h3 style={{ fontSize: '26px', fontWeight: 900, margin: '0 0 8px', color: '#0F172A' }}>
            How It Works in 3 Simple Steps
          </h3>
          <p style={{ color: '#64748B', fontSize: '15.5px', margin: 0 }}>
            Go from zero to interview-ready in under 5 minutes.
          </p>
        </ScrollReveal>

        <div css={styles.stepsGrid}>
          <ScrollReveal delay={100} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.stepCard}>
              <div css={styles.stepNum}>1</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>Sign in with Google</h4>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                Your account instantly starts with <strong>70 free starter points</strong>. No payment details required.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={200} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.stepCard}>
              <div css={styles.stepNum}>2</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>Scan or Build Resume</h4>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                Upload your existing resume for an ATS score, or build a new one with our pro templates.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={300} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.stepCard}>
              <div css={styles.stepNum}>3</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>Practice &amp; Get Hired</h4>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                Request role-specific mock interviews with the AI Interview Bot using real PYQs, follow your custom learning path, and apply to 13,000+ job openings matched to your Fit Score.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* PRICING & 14 NOV LAUNCH COUNTDOWN WITH SCROLL REVEAL */}
      <section css={styles.pricingSection}>
        <ScrollReveal delay={80} style={{ width: '100%', boxSizing: 'border-box' }}>
          <div css={styles.sectionHeading}>
            <h2>Simple, Transparent Student Pricing</h2>
            <p>Start free today. Upgrade when you are ready for real mock interviews.</p>
          </div>
        </ScrollReveal>

        <div css={styles.pricingCardsGrid}>
          {/* Free Tier */}
          <ScrollReveal delay={120} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.pricingCard(false)}>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
                Free Starter
              </div>
              <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', margin: '8px 0 16px' }}>
                ₹0 <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>/ forever</span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', fontSize: '14px', lineHeight: 2.2 }}>
                <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> 70 Free Starter Points</li>
                <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Up to 14 ATS Resume Scans</li>
                <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> 70 Queries with UDEN AI Assistant</li>
                <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Valid for 30 Days</li>
              </ul>
              <button 
                css={styles.primaryBtn} 
                style={{ width: '100%', background: '#F1F5F9', color: '#0F172A', boxShadow: 'none' }}
                onClick={() => handleCTAClick('pricing_free', true)}
              >
                Get 70 Free Points
              </button>
            </div>
          </ScrollReveal>

          {/* Paid Plan Tier (Auto switches ₹200 vs ₹500 on 14 Nov 23:59:59 IST) */}
          <ScrollReveal delay={200} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.pricingCard(true)}>
              <div css={styles.popularRibbon}>
                {offerConfig.popularRibbonText}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#F55825', textTransform: 'uppercase' }}>
                Student Placement Pass
              </div>
              <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', margin: '8px 0 4px' }}>
                {offerConfig.currentPrice} <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>/ month</span>
              </div>
              {isOfferActive ? (
                <div style={{ fontSize: '12.5px', color: '#DC2626', fontWeight: 800, marginBottom: '16px' }}>
                  {offerConfig.pricingSwitchText}
                </div>
              ) : (
                <div style={{ fontSize: '12.5px', color: '#16A34A', fontWeight: 800, marginBottom: '16px' }}>
                  ✓ Complete AI Interview &amp; Role Preparation Suite
                </div>
              )}
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', fontSize: '14px', lineHeight: 2.2 }}>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <strong>1 Full Role-Specific AI Mock Interview</strong> + Report</li>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <strong>500 Bonus Points</strong> for Scans &amp; UDEN AI Assistant</li>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> AI Resume Builder &amp; ATS Templates</li>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Job Agent Pro: Fit Score Matching across 13,000+ Openings</li>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Complete Selection Procedures, PYQs &amp; Learning Paths</li>
              </ul>
              <button 
                css={styles.primaryBtn} 
                style={{ width: '100%' }}
                onClick={() => handleCTAClick('pricing_paid', true)}
              >
                {offerConfig.currentCtaText}
                <ArrowRight size={19} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLACEMENT FAQ (WITH FIXED WIDTH AND CLEAN EXPANSION) */}
      <section css={styles.faqSection}>
        <ScrollReveal delay={80} style={{ width: '100%', boxSizing: 'border-box' }}>
          <div css={styles.sectionHeading}>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about points, plans, and ATS checks.</p>
          </div>
        </ScrollReveal>

        {faqs.map((faq, idx) => (
          <ScrollReveal key={idx} delay={idx * 40} style={{ width: '100%', boxSizing: 'border-box' }}>
            <div css={styles.faqItem}>
              <div 
                css={styles.faqQuestion} 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <span>{faq.q}</span>
                {openFaq === idx ? <ChevronUp size={19} color="#F55825" /> : <ChevronDown size={19} color="#94A3B8" />}
              </div>
              {openFaq === idx && (
                <div css={styles.faqAnswer}>
                  {faq.a}
                </div>
              )}
            </div>
          </ScrollReveal>
        ))}
      </section>

      {/* STICKY BOTTOM BAR ON MOBILE */}
      <div css={styles.stickyMobileCta}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#0F172A' }}>70 Free Points</div>
          <div style={{ fontSize: '11px', color: '#16A34A', fontWeight: 700 }}>No card needed</div>
        </div>
        <button 
          css={styles.primaryBtn} 
          style={{ padding: '10px 22px', fontSize: '14px' }}
          onClick={() => handleCTAClick('sticky_mobile', true)}
        >
          Check My Resume
          <ArrowRight size={15} />
        </button>
      </div>

      {/* CORRECTLY PLACED FULL-WIDTH COMPLIANT FOOTER (NO WHITE GAP) */}
      <footer css={styles.footer}>
        <p style={{ margin: '0 0 12px', fontWeight: 700, color: '#E2E8F0' }}>
          UDEN — Unified Development and Employment Network
        </p>
        <p style={{ margin: '0 0 16px', fontSize: '12.5px' }}>
          Operated by Digverve Solutions Pvt. Ltd. &copy; 2026. All rights reserved.
        </p>
        <div>
          <Link to={AppRoutes.PRIVACY}>Privacy Policy</Link>
          <span>•</span>
          <Link to={AppRoutes.TERMS}>Terms &amp; Conditions</Link>
          <span>•</span>
          <Link to={AppRoutes.REFUND}>Refund &amp; Cancellation</Link>
          <span>•</span>
          <Link to="/contact-us">Contact Support</Link>
        </div>
      </footer>
    </div>
  );
}
