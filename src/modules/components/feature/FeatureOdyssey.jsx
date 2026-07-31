import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import {
  Clock, CheckCircle2, Zap, Trophy, ListChecks, ShieldCheck,
  GraduationCap, BarChart3, Layers, Rocket, FileText, Sparkles,
} from 'lucide-react';

const marqueeX = keyframes`
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); }
`;

const marqueeXReverse = keyframes`
  0% { transform: translateX(-50%); }
  100% { transform: translateX(0%); }
`;

const FEATURES = [
  {
    id: 'learning-paths',
    tag: 'In Focus',
    title: 'Learning Path Designer',
    desc: 'Designs and structures a comprehensive learning journey by identifying critical skills, setting milestones, and integrating practical experiences.',
    badges: ['Skill-paced', 'Skill Based'],
    cta: 'Start Learning',
    progress: 100,
    icon: GraduationCap,
    accent: 'coral',
  },
  {
    id: 'matched-jobs',
    tag: 'AI Ranked',
    title: 'Matched For You',
    desc: 'Jobs ranked by fit with your learning path and saved skills — 90% fit, 85% fit, actively recruiting roles surfaced first.',
    badges: ['Mock scoring', 'Live fit'],
    cta: 'View Details',
    progress: 90,
    icon: Sparkles,
    accent: 'blue',
  },
  {
    id: 'skills-snapshot',
    tag: 'AI Fit',
    title: 'Skills Snapshot',
    desc: 'A circular AI Fit Score with required skills, matched skills, and precise skill gaps — tap to learn exactly what to build next.',
    badges: ['Skill gaps', 'Apply ready'],
    cta: 'Build Skills',
    progress: 80,
    icon: Zap,
    accent: 'gold',
  },
  {
    id: 'job-detail',
    tag: 'Deep Dive',
    title: 'Role Detail & Fit Analysis',
    desc: 'About the role, requirements, what you’ll do, JD summary and your fit analysis side-by-side — no more guesswork.',
    badges: ['AI Analysis', 'JD Summary'],
    cta: 'Apply Now',
    progress: 84,
    icon: FileText,
    accent: 'coral',
  },
  {
    id: 'interview-rounds',
    tag: 'Prep',
    title: 'Interview Rounds',
    desc: 'Phone screen, online coding test, power day — each round broken down with verified durations and actionable preparation tips.',
    badges: ['Tip boxes', 'Verified'],
    cta: 'Learn This Round',
    progress: 60,
    icon: Trophy,
    accent: 'gold',
  },
  {
    id: 'review-ack',
    tag: 'Intel',
    title: 'Review Acknowledgement',
    desc: 'About the company, a summarized role, and previously asked questions pulled from real interview reviews — before you ever apply.',
    badges: ['12 real Qs', 'Summarized'],
    cta: 'Review',
    progress: 70,
    icon: ShieldCheck,
    accent: 'blue',
  },
  {
    id: 'learning-confirmation',
    tag: 'Tailored',
    title: 'Learning Path Confirmation',
    desc: 'Confirm mandatory and optional skills so the path adapts to your current proficiency — then generate it in one click.',
    badges: ['Mandatory', 'Optional'],
    cta: 'Generate Path',
    progress: 50,
    icon: Layers,
    accent: 'coral',
  },
  {
    id: 'assessment',
    tag: 'Test',
    title: 'Assessment Engine',
    desc: '10 MCQs, +10 marks each, untimed, with clear guidelines and a token-deducted attempt log. Results shown immediately.',
    badges: ['100 pts', 'Untimed'],
    cta: 'Start Assessment',
    progress: 100,
    icon: ListChecks,
    accent: 'gold',
  },
  {
    id: 'tracker',
    tag: 'Live',
    title: 'Application Tracker',
    desc: 'A Kanban from Applied to Offer — track every stage in one place, with live tracking badges and stage-aware colors.',
    badges: ['Kanban', 'Live'],
    cta: 'Open Tracker',
    progress: 40,
    icon: BarChart3,
    accent: 'emerald',
  },
];

const ACCENT_STYLES = {
  coral: {
    iconBg: '#FFF5F5',
    iconBorder: '#FECDD3',
    iconColor: '#F55825',
    tagBg: '#FFF1F2',
    tagColor: '#F55825',
    barBg: '#F55825',
    btnBg: '#F55825',
  },
  blue: {
    iconBg: '#F0F4FF',
    iconBorder: '#C7D2FE',
    iconColor: '#4B638C',
    tagBg: '#EEF2FF',
    tagColor: '#4B638C',
    barBg: '#4B638C',
    btnBg: '#4B638C',
  },
  gold: {
    iconBg: '#FFFBEB',
    iconBorder: '#FDE68A',
    iconColor: '#D97706',
    tagBg: '#FEF3C7',
    tagColor: '#B45309',
    barBg: '#F7BC08',
    btnBg: '#D97706',
  },
  emerald: {
    iconBg: '#ECFDF5',
    iconBorder: '#A7F3D0',
    iconColor: '#10B981',
    tagBg: '#D1FAE5',
    tagColor: '#047857',
    barBg: '#10B981',
    btnBg: '#10B981',
  },
};

const styles = {
  section: css`
    position: relative;
    padding: 80px 0;
    background: #FFFFFF;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  header: css`
    max-width: 800px;
    margin: 0 auto 48px auto;
    text-align: center;
    padding: 0 20px;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 16px;
    border-radius: 20px;
    background: #FFFDF0;
    border: 1px solid #FEF5D8;
    color: #4B638C;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.5px;
    margin-bottom: 16px;
  `,
  title: css`
    font-size: 38px;
    font-weight: 900;
    color: #1E293B;
    letter-spacing: -0.5px;
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
    font-size: 16px;
    color: #64748B;
    line-height: 1.6;
    margin: 0;
  `,
  trackRow: css`
    position: relative;
    display: flex;
    overflow: hidden;
    margin-bottom: 24px;
  `,
  marqueeTrack: (reverse) => css`
    display: flex;
    width: max-content;
    animation: ${reverse ? marqueeXReverse : marqueeX} 35s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  `,
  card: css`
    width: 350px;
    flex-shrink: 0;
    background: #FFFFFF;
    border-radius: 24px;
    border: 1.5px solid #E2E8F0;
    box-shadow: 0 10px 30px rgba(75, 99, 140, 0.08);
    padding: 24px;
    margin: 0 12px;
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 36px rgba(245, 88, 37, 0.15);
      border-color: #F55825;
    }
  `,
  cardTop: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  `,
  iconBox: (accentKey) => {
    const a = ACCENT_STYLES[accentKey];
    return css`
      width: 48px;
      height: 48px;
      border-radius: 16px;
      background: ${a.iconBg};
      border: 1px solid ${a.iconBorder};
      color: ${a.iconColor};
      display: flex;
      align-items: center;
      justify-content: center;
    `;
  },
  tagBadge: (accentKey) => {
    const a = ACCENT_STYLES[accentKey];
    return css`
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.5px;
      background: ${a.tagBg};
      color: ${a.tagColor};
    `;
  },
  cardTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 8px 0;
  `,
  cardDesc: css`
    font-size: 13.5px;
    color: #64748B;
    line-height: 1.6;
    margin-bottom: 16px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  `,
  badgesRow: css`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 16px;
  `,
  badgeItem: css`
    padding: 3px 10px;
    border-radius: 12px;
    font-size: 11px;
    font-weight: 600;
    border: 1px solid #E2E8F0;
    color: #475569;
    background: #F8FAFC;
  `,
  progressTrack: css`
    height: 6px;
    border-radius: 3px;
    background: #F1F5F9;
    overflow: hidden;
    margin-bottom: 16px;
  `,
  progressBar: (accentKey, percent) => {
    const a = ACCENT_STYLES[accentKey];
    return css`
      height: 100%;
      width: ${percent}%;
      background: ${percent === 100 ? '#10B981' : a.barBg};
      border-radius: 3px;
      transition: width 1s ease;
    `;
  },
  ctaBtn: (accentKey, completed) => {
    const a = ACCENT_STYLES[accentKey];
    return css`
      width: 100%;
      padding: 12px;
      border-radius: 12px;
      border: none;
      font-weight: 800;
      font-size: 13.5px;
      color: #FFFFFF;
      background: ${completed ? '#10B981' : a.btnBg};
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      transition: all 0.25s ease;

      &:hover {
        opacity: 0.92;
        transform: translateY(-1px);
      }
    `;
  },
  fadeLeft: css`
    pointer-events: none;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(to right, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 2;
  `,
  fadeRight: css`
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100px;
    background: linear-gradient(to left, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
    z-index: 2;
  `
};

function FeatureCard({ f }) {
  const IconComp = f.icon;
  const completed = f.progress === 100;

  return (
    <div css={styles.card}>
      <div>
        <div css={styles.cardTop}>
          <div css={styles.iconBox(f.accent)}>
            <IconComp size={24} />
          </div>
          <span css={styles.tagBadge(f.accent)}>{f.tag.toUpperCase()}</span>
        </div>

        <h3 css={styles.cardTitle}>{f.title}</h3>
        <p css={styles.cardDesc}>{f.desc}</p>

        <div css={styles.badgesRow}>
          {f.badges.map((b) => (
            <span key={b} css={styles.badgeItem}>{b}</span>
          ))}
        </div>
      </div>

      <div>
        <div css={styles.progressTrack}>
          <div css={styles.progressBar(f.accent, f.progress)} />
        </div>

        <button css={styles.ctaBtn(f.accent, completed)}>
          {completed ? <CheckCircle2 size={16} /> : <Clock size={16} />}
          {f.cta}
        </button>
      </div>
    </div>
  );
}

export default function FeatureOdyssey() {
  const row1 = FEATURES.slice(0, 5);
  const row2 = FEATURES.slice(4).concat(FEATURES.slice(0, 4));

  return (
    <section css={styles.section} id="features-odyssey">
      <div css={styles.header}>
        <div css={styles.badgeTag}>
          <Rocket size={14} color="#F55825" />
          THE FEATURE ODYSSEY
        </div>
        <h2 css={styles.title}>
          One Platform. <span>Nine Superpowers.</span>
        </h2>
        <p css={styles.subtitle}>
          Every tool a student or jobseeker needs — from AI learning paths to application tracking — woven into a single, kinetic experience.
        </p>
      </div>

      {/* Marquee Row 1 */}
      <div css={styles.trackRow}>
        <div css={styles.marqueeTrack(false)}>
          {row1.concat(row1).concat(row1).map((f, i) => (
            <FeatureCard key={`${f.id}-row1-${i}`} f={f} />
          ))}
        </div>
      </div>

      {/* Marquee Row 2 (Reverse) */}
      <div css={styles.trackRow}>
        <div css={styles.marqueeTrack(true)}>
          {row2.concat(row2).concat(row2).map((f, i) => (
            <FeatureCard key={`${f.id}-row2-${i}`} f={f} />
          ))}
        </div>
      </div>

      {/* Gradient Edge Masks */}
      <div css={styles.fadeLeft} />
      <div css={styles.fadeRight} />
    </section>
  );
}
