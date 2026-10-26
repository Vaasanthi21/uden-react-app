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
  Play,
  Pause
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import ScrollReveal from '../../components/layout/ScrollReveal';
import { AppRoutes } from '../../../utils/consts/routes';

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

const rotateSlow = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const styles = {
  pageWrapper: css`
    min-height: 100vh;
    background: #F8FAFC;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    color: #1E293B;
    overflow-x: hidden;
    padding-bottom: 76px; /* Space for sticky mobile CTA */
    position: relative;
  `,
  scrollProgressBar: (progress) => css`
    position: fixed;
    top: 0;
    left: 0;
    width: ${progress}%;
    height: 3.5px;
    background: linear-gradient(90deg, #F55825 0%, #EA580C 50%, #F59E0B 100%);
    z-index: 1001;
    transition: width 0.12s ease-out;
    box-shadow: 0 0 12px rgba(245, 88, 37, 0.7);
  `,
  topBanner: css`
    background: linear-gradient(90deg, #F55825 0%, #D94616 100%);
    color: #FFFFFF;
    text-align: center;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    box-shadow: 0 2px 8px rgba(245, 88, 37, 0.25);
  `,
  header: css`
    background: rgba(255, 255, 255, 0.92);
    border-bottom: 1px solid rgba(226, 232, 240, 0.8);
    padding: 14px 28px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.03);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
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

  /* HERO SECTION (2-COL SPLIT ON DESKTOP) */
  heroSection: css`
    max-width: 1240px;
    margin: 0 auto;
    padding: 56px 24px 50px;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 40px;
    align-items: center;
    position: relative;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      padding: 36px 18px 36px;
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

  /* INTERACTIVE HERO ILLUSTRATION MOCKUP (RIGHT COL) */
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
    max-width: 1100px;
    margin: 10px auto 60px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 28px;
    padding: 38px 32px;
    box-shadow: 0 14px 36px -10px rgba(0, 0, 0, 0.05);
    transition: all 0.35s ease;

    &:hover {
      box-shadow: 0 20px 48px -12px rgba(15, 23, 42, 0.1);
    }

    @media (max-width: 768px) {
      padding: 26px 18px;
      margin: 10px 16px 40px;
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
    max-width: 1200px;
    margin: 0 auto 70px;
    padding: 0 24px;
    position: relative;

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
  /* GLASS CARDS WITH ORANGE SHADE */
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

  /* AUTO-ROTATING CAROUSEL: ATS RESUME TEMPLATES */
  templatesSection: css`
    max-width: 1200px;
    margin: 0 auto 70px;
    padding: 0 24px;
    position: relative;

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
  carouselContainer: css`
    position: relative;
    overflow: hidden;
    padding: 16px 4px 24px;
  `,
  templatesTrack: (offset) => css`
    display: flex;
    gap: 22px;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateX(-${offset}%);
  `,
  templateSlideCard: css`
    flex: 0 0 calc(33.333% - 15px);
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

    &:hover {
      transform: translateY(-8px) scale(1.02);
      border-color: #2563EB;
      box-shadow: 0 20px 40px rgba(37, 99, 235, 0.16);

      .templateAction {
        color: #2563EB;
      }
    }

    @media (max-width: 960px) {
      flex: 0 0 calc(50% - 11px);
    }
    @media (max-width: 640px) {
      flex: 0 0 100%;
    }
  `,
  templateVisualMockup: (accentColor) => css`
    height: 180px;
    background: #F8FAFC;
    border: 1px dashed ${accentColor || '#CBD5E1'};
    border-radius: 16px;
    padding: 14px;
    margin-bottom: 16px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.3s ease;
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
    max-width: 1100px;
    margin: 0 auto 70px;
    padding: 0 24px;

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

    @media (max-width: 768px) {
      padding: 28px 20px;
    }
  `,

  /* HOW IT WORKS */
  howItWorksBox: css`
    max-width: 1100px;
    margin: 0 auto 70px;
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFFFF 100%);
    border: 1.5px solid #FEF5D8;
    border-radius: 28px;
    padding: 42px 32px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);

    @media (max-width: 768px) {
      padding: 28px 18px;
      margin: 0 16px 50px;
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
    max-width: 1000px;
    margin: 0 auto 70px;
    padding: 0 24px;

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

  /* FAQ */
  faqSection: css`
    max-width: 840px;
    margin: 0 auto 70px;
    padding: 0 24px;

    @media (max-width: 768px) {
      padding: 0 16px;
      margin-bottom: 50px;
    }
  `,
  faqItem: css`
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
    padding: 20px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 16px;
    font-weight: 800;
    color: #1E293B;
  `,
  faqAnswer: css`
    padding: 0 24px 20px;
    font-size: 14.5px;
    color: #64748B;
    line-height: 1.65;
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

    @media (max-width: 768px) {
      display: flex;
    }
  `,

  /* COMPLIANT FOOTER */
  footer: css`
    background: #0F172A;
    color: #94A3B8;
    padding: 40px 20px;
    text-align: center;
    font-size: 13.5px;

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
  `
};

export default function StudentStart() {
  const [openFaq, setOpenFaq] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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

  /* CONTINUOUS AUTO-ROTATING TEMPLATES CAROUSEL (every 3 seconds) */
  useEffect(() => {
    if (isTemplatePaused) return;
    const maxSteps = Math.max(1, 5 - cardsPerView + 1);
    const timer = setInterval(() => {
      setTemplateIndex((prev) => (prev + 1) % maxSteps);
    }, 3000);
    return () => clearInterval(timer);
  }, [isTemplatePaused, cardsPerView]);

  /* CONTINUOUS AUTO-ROTATING TESTIMONIALS CAROUSEL (every 4.5 seconds) */
  useEffect(() => {
    if (isTestimPaused) return;
    const timer = setInterval(() => {
      setTestimIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isTestimPaused]);

  const handleCTAClick = (location) => {
    try {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'cta_click',
          button_location: location
        });
      }
    } catch (e) {
      console.log('GTM track error:', e);
    }

    const search = window.location.search;
    window.location.href = `https://cps.uden.tech/log_in${search}`;
  };

  /* 5 ATS TEMPLATES DATA */
  const templates = [
    {
      id: 1,
      name: 'Ivy League Tech SDE',
      category: 'Software & Cloud',
      accent: '#2563EB',
      highlight: '99% ATS Friendly',
      desc: 'Single-column format optimized for technical recruiters. Spotlights LeetCode/GitHub links, tech stack badges, and system design projects.',
      pills: ['LeetCode / GitHub Header', 'STAR Method Bullets', 'Zero Tables / ATS Safe']
    },
    {
      id: 2,
      name: 'FinTech & Analytics Pro',
      category: 'Finance & Consulting',
      accent: '#059669',
      highlight: 'High Metric Density',
      desc: 'Built for business analysts, quantitative finance, and strategy roles. Formatted to emphasize measurable ROI, CAGR metrics, and SQL/BI tools.',
      pills: ['Financial Modeling', 'KPI Impact Badges', 'Executive Header']
    },
    {
      id: 3,
      name: 'Campus Fresher Clean',
      category: 'Freshers & College Drives',
      accent: '#F55825',
      highlight: 'Best for 0–2 Yrs Exp',
      desc: 'Specially crafted for Tier 2/3 engineering & degree students. Balances academic scores, capstone projects, lab certifications, and extracurriculars.',
      pills: ['Academic Highlights', 'Internship Focus', 'Recruiter 30-Sec Scan']
    },
    {
      id: 4,
      name: 'Full Stack & DevOps Specialist',
      category: 'DevOps & Infrastructure',
      accent: '#7C3AED',
      highlight: 'Toolchain Focused',
      desc: 'Emphasizes Docker, Kubernetes, CI/CD pipelines, and microservices architecture with clean verification tags for recruiter review.',
      pills: ['Pipeline Architecture', 'Cloud Certifications', 'System Scalability']
    },
    {
      id: 5,
      name: 'Modern Product & Management',
      category: 'Product & Growth',
      accent: '#D97706',
      highlight: 'Product Roadmap',
      desc: 'Designed for APM, product marketing, and growth roles with clear sections for user retention metrics, A/B tests, and agile sprint delivery.',
      pills: ['A/B Testing Impact', 'Agile / Scrum Badges', 'Cross-functional']
    }
  ];

  /* TESTIMONIALS DATA */
  const testimonials = [
    {
      quote: "My college placement cell warned us that ATS bots reject 70% of resumes. I uploaded mine to UDEN, discovered 8 missing cloud keywords, and fixed them in 15 minutes using the ATS templates. Got shortlisted by Deloitte Digital on day one!",
      name: "Rohan Verma",
      package: "₹9.5 LPA",
      role: "Associate SDE",
      company: "Deloitte Digital",
      college: "Tier-2 B.Tech, 2026 Batch",
      accent: "#2563EB"
    },
    {
      quote: "The 24x7 AI Assistant is literally like having a personal senior developer on call. I practiced coding scenarios and STAR behavioral answers at 1 AM before my TCS Digital interview. Cleared both rounds with confidence!",
      name: "Priya Sharma",
      package: "₹7.2 LPA",
      role: "Digital Systems Engineer",
      company: "TCS Digital",
      college: "Tier-3 Institute, Hyderabad",
      accent: "#059669"
    },
    {
      quote: "Job Agent Pro completely eliminated the stress of filling endless application forms. It matched my Python and AWS projects directly with Accenture recruiters and scheduled my technical round within 48 hours.",
      name: "Aniket Mukherjee",
      package: "₹8.0 LPA",
      role: "Cloud Associate",
      company: "Accenture",
      college: "NIT Rourkela Graduate",
      accent: "#7C3AED"
    }
  ];

  const faqs = [
    {
      q: 'Is it really free to start?',
      a: 'Yes, 100%! When you sign in with Google or LinkedIn, your account immediately receives 70 free starter points. You can use these to run multiple ATS resume checks and consult the 24x7 AI career assistant without entering any credit card.'
    },
    {
      q: 'What happens when my free points finish?',
      a: 'Free points give you full access to diagnose your resume and explore features. When they finish, you can upgrade to the ₹200/month launch plan for full AI mock interviews, unlimited resume template exports, and Job Agent Pro matching.'
    },
    {
      q: 'What makes UDEN’s Resume Builder & Templates different?',
      a: 'Unlike generic online templates that confuse ATS parsers with multi-column tables and fancy icons, UDEN’s templates are strictly built according to modern corporate ATS standards. You can customize them as you wish, and our AI will rewrite your achievements using the STAR impact method.'
    },
    {
      q: 'What is Job Agent Pro?',
      a: 'Job Agent Pro is your autonomous AI placement assistant. Instead of manually searching through dozens of job boards, it monitors verified corporate drives, matches your skill radar with role requirements, and fast-tracks you to recruiters with 48-hour shortlist SLAs.'
    },
    {
      q: 'Can I try an AI Mock Interview?',
      a: 'AI mock interviews simulate real-world technical and HR rounds with instant voice and response analytics. AI mock interviews are unlocked as part of the ₹200 launch plan.'
    },
    {
      q: 'Is my resume and personal data safe?',
      a: 'Absolutely. Your resume and personal information are strictly encrypted and used solely to generate your career insights. We do not sell student data to third parties.'
    }
  ];

  const maxTemplateSteps = Math.max(1, 5 - cardsPerView + 1);

  return (
    <div css={styles.pageWrapper}>
      {/* Scroll Progress Indicator Bar */}
      <div css={styles.scrollProgressBar(scrollProgress)} />

      {/* Top Launch Offer Banner */}
      <div css={styles.topBanner}>
        <Sparkles size={16} />
        Special Student Launch Offer: Get 70 Free Credits on Sign-Up! ₹200/mo plan ends 14 Nov.
      </div>

      {/* Minimalist Header */}
      <header css={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Logo style={{ height: '36px' }} />
        </div>
        <button css={styles.signInBtn} onClick={() => handleCTAClick('header_signin')}>
          Sign In to Portal
        </button>
      </header>

      {/* MAIN HERO SECTION (SPLIT 2-COLUMN WITH LIVE SCANNER ILLUSTRATION) */}
      <section css={styles.heroSection}>
        {/* Left Column: Copy & CTAs */}
        <ScrollReveal delay={50}>
          <div>
            <div css={styles.badgeTag}>
              <Zap size={15} /> 70 Free Credits Added on Sign Up • No Card Needed
            </div>

            <h1 css={styles.heroTitle}>
              Will Your Resume Pass the <span>ATS Filter</span>?
            </h1>

            <p css={styles.heroSubtitle}>
              75% of student resumes are rejected by automated company software before a recruiter ever reads them. 
              Upload your resume, discover where it falls short, and unlock AI tools engineered to help you crack placement drives.
            </p>

            <div css={styles.ctaContainer}>
              <button css={styles.primaryBtn} onClick={() => handleCTAClick('hero')}>
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
        <ScrollReveal delay={150}>
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
                <div style={{ fontSize: '11.5px', color: '#94A3B8' }}>12 Verified Partner Openings Matched</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* THE STORYLINE & CONTRAST CARD WITH SCROLL REVEAL */}
      <ScrollReveal delay={100}>
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
                <li><strong>Job Agent Pro:</strong> Automated job discovery matching your exact skills.</li>
                <li><strong>24x7 AI Assistant:</strong> A personal placement mentor available round the clock.</li>
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

        <ScrollReveal delay={80}>
          <div css={styles.sectionHeading}>
            <h2>Everything You Need To Secure Your Offer</h2>
            <p>Four integrated AI modules built to turn your preparation into confirmed shortlists.</p>
          </div>
        </ScrollReveal>

        <div css={styles.featureCardsGrid}>
          {/* Card 1: ATS Resume Analysis (Glass with Orange Shade) */}
          <ScrollReveal delay={100}>
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
          <ScrollReveal delay={200}>
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
          <ScrollReveal delay={300}>
            <div css={styles.glassFeatureCard}>
              <div css={styles.glassCardGlow} />
              <div css={styles.featureThumbBox}>
                <img 
                  src={process.env.PUBLIC_URL + '/assets/tutorials/video_6_job_agent_pro.png'} 
                  alt="Job Agent Pro" 
                  className="featureThumbImg"
                />
                <span className="featureOverlayBadge">Automated Placement</span>
              </div>
              <div css={styles.featureCardBody}>
                <div>
                  <h4 css={styles.cardTitle}>Job Agent Pro</h4>
                  <p css={styles.cardDesc}>
                    Your autonomous AI scout that scans 100k+ active tech and corporate openings, connects with 150+ hiring partners, and matches roles directly to your skill radar.
                  </p>
                </div>
                <div css={styles.costTag}>48-Hour Recruiter SLA</div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 4: 24x7 AI Career Assistant (Glass with Orange Shade) */}
          <ScrollReveal delay={400}>
            <div css={styles.glassFeatureCard}>
              <div css={styles.glassCardGlow} />
              <div css={styles.featureThumbBox}>
                <img 
                  src={process.env.PUBLIC_URL + '/assets/tutorials/video_4_interview_coach.png'} 
                  alt="24x7 AI Placement Assistant" 
                  className="featureThumbImg"
                />
                <span className="featureOverlayBadge">Like ChatGPT For Careers</span>
              </div>
              <div css={styles.featureCardBody}>
                <div>
                  <h4 css={styles.cardTitle}>24x7 AI Assistant</h4>
                  <p css={styles.cardDesc}>
                    Ask anything! Get tailored coding interview questions, project explanation scripts, company-specific preparation guides, and real-time placement mentorship.
                  </p>
                </div>
                <div css={styles.costTag}>Uses 1 Free Point / Question</div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTINUOUS AUTO-ROTATING CAROUSEL: ATS RESUME TEMPLATES ("BUILD AS YOU WISH") */}
      <section css={styles.templatesSection}>
        <ScrollReveal delay={100}>
          <div css={styles.sectionHeading}>
            <div css={styles.autoRotateBadge}>
              <span className="greenDot" />
              <span>Auto-Rotating Carousel &bull; Hover to Pause</span>
            </div>
            <h2>Build Your Resume As You Wish</h2>
            <p>Explore recruiter-approved ATS templates. Auto-formatted, single-column, and designed to bypass screening bots.</p>
          </div>
        </ScrollReveal>

        <div 
          css={styles.carouselContainer}
          onMouseEnter={() => setIsTemplatePaused(true)}
          onMouseLeave={() => setIsTemplatePaused(false)}
        >
          <div css={styles.templatesTrack(templateIndex * (100 / cardsPerView))}>
            {templates.map((tpl) => (
              <div 
                key={tpl.id} 
                css={styles.templateSlideCard}
                onClick={() => handleCTAClick(`template_${tpl.id}`)}
              >
                <div>
                  <div css={styles.templateVisualMockup(tpl.accent)}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: tpl.accent, textTransform: 'uppercase' }}>
                        {tpl.category}
                      </span>
                      <span style={{ fontSize: '10px', background: '#F1F5F9', padding: '3px 8px', borderRadius: '8px', fontWeight: 700 }}>
                        {tpl.highlight}
                      </span>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                      <div style={{ height: '8px', width: '60%', background: '#E2E8F0', borderRadius: '4px' }} />
                      <div style={{ height: '6px', width: '90%', background: '#F1F5F9', borderRadius: '3px' }} />
                      <div style={{ height: '6px', width: '75%', background: '#F1F5F9', borderRadius: '3px' }} />
                    </div>

                    <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                      {tpl.pills.map((pill, i) => (
                        <span key={i} style={{ fontSize: '9.5px', background: '#FFFFFF', border: '1px solid #E2E8F0', padding: '2px 6px', borderRadius: '6px', color: '#475569', fontWeight: 600 }}>
                          {pill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h4 style={{ fontSize: '18px', fontWeight: 800, color: '#0F172A', margin: '0 0 6px' }}>
                    {tpl.name}
                  </h4>
                  <p style={{ fontSize: '13.5px', color: '#64748B', lineHeight: 1.55, margin: '0 0 16px' }}>
                    {tpl.desc}
                  </p>
                </div>

                <div 
                  className="templateAction" 
                  style={{ fontSize: '13px', fontWeight: 800, color: '#F55825', display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <span>Build with this Template</span>
                  <ArrowRight size={15} />
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
        <ScrollReveal delay={100}>
          <div css={styles.sectionHeading}>
            <h2>2,500+ Students Placed Across 150+ Partners</h2>
            <p>See how students from engineering &amp; degree colleges cracked dream placements using UDEN AI.</p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={150}>
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
              <div>
                <div style={{ fontSize: '17px', fontWeight: 900, color: '#FFFFFF' }}>
                  {testimonials[testimIndex].name}
                </div>
                <div style={{ fontSize: '13.5px', color: '#F55825', fontWeight: 700 }}>
                  {testimonials[testimIndex].role} &bull; {testimonials[testimIndex].company} ({testimonials[testimIndex].package})
                </div>
                <div style={{ fontSize: '12px', color: '#94A3B8' }}>
                  {testimonials[testimIndex].college}
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
        <ScrollReveal delay={50}>
          <h3 style={{ fontSize: '26px', fontWeight: 900, margin: '0 0 8px', color: '#0F172A' }}>
            How It Works in 3 Simple Steps
          </h3>
          <p style={{ color: '#64748B', fontSize: '15.5px', margin: 0 }}>
            Go from zero to interview-ready in under 5 minutes.
          </p>
        </ScrollReveal>

        <div css={styles.stepsGrid}>
          <ScrollReveal delay={100}>
            <div css={styles.stepCard}>
              <div css={styles.stepNum}>1</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>Sign in with Google</h4>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                Your account instantly starts with <strong>70 free credits</strong>. No payment details required.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div css={styles.stepCard}>
              <div css={styles.stepNum}>2</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>Scan or Build Resume</h4>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                Upload your existing resume for an ATS score, or build a new one with our pro templates.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div css={styles.stepCard}>
              <div css={styles.stepNum}>3</div>
              <h4 style={{ fontSize: '17px', fontWeight: 800, margin: '0 0 8px', color: '#0F172A' }}>Practice &amp; Get Hired</h4>
              <p style={{ fontSize: '14px', color: '#64748B', margin: 0, lineHeight: 1.55 }}>
                Ask the AI assistant interview questions, take an AI mock interview, and let Job Agent Pro find verified openings.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* PRICING & 14 NOV LAUNCH COUNTDOWN WITH SCROLL REVEAL */}
      <section css={styles.pricingSection}>
        <ScrollReveal delay={80}>
          <div css={styles.sectionHeading}>
            <h2>Simple, Transparent Student Pricing</h2>
            <p>Start free today. Upgrade when you are ready for real mock interviews.</p>
          </div>
        </ScrollReveal>

        <div css={styles.pricingCardsGrid}>
          {/* Free Tier */}
          <ScrollReveal delay={120}>
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
                <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> 70 AI Career Assistant Queries</li>
                <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Valid for 30 Days</li>
              </ul>
              <button 
                css={styles.primaryBtn} 
                style={{ width: '100%', background: '#F1F5F9', color: '#0F172A', boxShadow: 'none' }}
                onClick={() => handleCTAClick('pricing_free')}
              >
                Get 70 Free Points
              </button>
            </div>
          </ScrollReveal>

          {/* Launch Offer Tier */}
          <ScrollReveal delay={200}>
            <div css={styles.pricingCard(true)}>
              <div css={styles.popularRibbon}>Launch Offer: 60% OFF</div>
              <div style={{ fontSize: '13px', fontWeight: 800, color: '#F55825', textTransform: 'uppercase' }}>
                Student Placement Pass
              </div>
              <div style={{ fontSize: '38px', fontWeight: 900, color: '#0F172A', margin: '8px 0 4px' }}>
                ₹200 <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>/ month</span>
              </div>
              <div style={{ fontSize: '12.5px', color: '#DC2626', fontWeight: 800, marginBottom: '16px' }}>
                ⏰ Offer ends 14 Nov. Switches to ₹500 on 15 Nov!
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', fontSize: '14px', lineHeight: 2.2 }}>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <strong>1 Full AI Mock Interview</strong> + Report</li>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <strong>500 Bonus Points</strong></li>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> AI Resume Builder &amp; Cover Letter Creator</li>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Job Agent Pro Automated Matching</li>
                <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Personalized Learning Path Generator</li>
              </ul>
              <button 
                css={styles.primaryBtn} 
                style={{ width: '100%' }}
                onClick={() => handleCTAClick('pricing_paid')}
              >
                Start for ₹200 Today
                <ArrowRight size={19} />
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* PLACEMENT FAQ WITH SCROLL REVEAL */}
      <section css={styles.faqSection}>
        <ScrollReveal delay={80}>
          <div css={styles.sectionHeading}>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about points, plans, and ATS checks.</p>
          </div>
        </ScrollReveal>

        {faqs.map((faq, idx) => (
          <ScrollReveal key={idx} delay={idx * 60}>
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
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#0F172A' }}>70 Free Credits</div>
          <div style={{ fontSize: '11px', color: '#16A34A', fontWeight: 700 }}>No card needed</div>
        </div>
        <button 
          css={styles.primaryBtn} 
          style={{ padding: '10px 22px', fontSize: '14px' }}
          onClick={() => handleCTAClick('sticky_mobile')}
        >
          Check My Resume
          <ArrowRight size={15} />
        </button>
      </div>

      {/* COMPLIANT FOOTER */}
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
          <Link to="/contact-us">Contact Support</Link>
        </div>
      </footer>
    </div>
  );
}
