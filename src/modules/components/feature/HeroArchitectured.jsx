import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { Sparkles, ArrowRight, Zap, CheckCircle2, ShieldCheck, Trophy, Layers } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/consts/routes';

const floatAnim = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const pulseDot = keyframes`
  0% { opacity: 0.3; transform: scale(0.9); }
  50% { opacity: 1; transform: scale(1.1); }
  100% { opacity: 0.3; transform: scale(0.9); }
`;

const styles = {
  heroOuter: css`
    position: relative;
    padding: 70px 20px 60px 20px;
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFDF0 100%);
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    border-bottom: 1px solid #FEF5D8;
    overflow: hidden;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 48px;
    align-items: center;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(16, 185, 129, 0.1);
    color: #047857;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 20px;
    border: 1px solid rgba(16, 185, 129, 0.25);
    letter-spacing: 0.5px;
  `,
  greenPulseDot: css`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #10B981;
    animation: ${pulseDot} 1.5s infinite ease-in-out;
  `,
  title: css`
    font-size: 52px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.12;
    margin: 0 0 20px 0;
    letter-spacing: -1.2px;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 36px;
    }
  `,
  subtitle: css`
    font-size: 17.5px;
    color: #475569;
    line-height: 1.65;
    margin-bottom: 36px;
    font-weight: 500;
  `,
  ctaRow: css`
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 40px;
    flex-wrap: wrap;

    @media (max-width: 960px) {
      justify-content: center;
    }
  `,
  primaryBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 16px 36px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 10px 24px rgba(245, 88, 37, 0.3);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 14px 32px rgba(245, 88, 37, 0.4);
    }
  `,
  secondaryBtn: css`
    background: #FFFFFF;
    color: #4B638C;
    border: 1.5px solid #CBD5E1;
    padding: 16px 28px;
    border-radius: 30px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;

    &:hover {
      border-color: #4B638C;
      color: #1E293B;
      transform: translateY(-2px);
    }
  `,
  highlightsRow: css`
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 13px;
    font-weight: 700;
    color: #475569;
    flex-wrap: wrap;

    @media (max-width: 960px) {
      justify-content: center;
    }
  `,
  highlightItem: css`
    display: flex;
    align-items: center;
    gap: 6px;
  `,

  /* RIGHT HAND INTERACTIVE WIDGET */
  widgetCard: css`
    position: relative;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 28px;
    padding: 28px;
    box-shadow: 0 20px 40px rgba(75, 99, 140, 0.12);
    animation: ${floatAnim} 5s ease-in-out infinite;
  `,
  matchScoreBadge: css`
    position: absolute;
    top: -16px;
    right: 20px;
    background: #FFFFFF;
    border: 1.5px solid #FEF5D8;
    box-shadow: 0 8px 20px rgba(247, 188, 8, 0.25);
    border-radius: 20px;
    padding: 8px 18px;
    text-align: center;

    .score-lbl {
      font-size: 9.5px;
      font-weight: 800;
      color: #D97706;
      letter-spacing: 0.5px;
    }
    .score-val {
      font-size: 20px;
      font-weight: 900;
      color: #F7BC08;
      line-height: 1;
    }
  `,
  cardHeader: css`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 20px;
  `,
  cardIconBox: css`
    width: 44px;
    height: 44px;
    border-radius: 14px;
    background: #F0F4FF;
    color: #4B638C;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  cardTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin: 0;
  `,
  gaugeFlex: css`
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;
  `,
  gaugeContainer: css`
    position: relative;
    width: 100px;
    height: 100px;
    flex-shrink: 0;
  `,
  gaugeCenterText: css`
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .num {
      font-size: 24px;
      font-weight: 900;
      color: #1E293B;
      line-height: 1;
    }
    .lbl {
      font-size: 9px;
      font-weight: 800;
      color: #64748B;
    }
  `,
  gaugeDetails: css`
    flex: 1;
  `,
  strongFitBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #ECFDF5;
    color: #047857;
    padding: 4px 12px;
    border-radius: 14px;
    font-size: 11px;
    font-weight: 800;
    margin-bottom: 6px;
  `,
  skillCoverage: css`
    font-size: 12px;
    color: #64748B;
    font-weight: 600;
  `,
  sectionLabel: css`
    font-size: 11px;
    font-weight: 800;
    color: #1E293B;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
  `,
  skillsWrap: css`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
  `,
  skillChipReq: css`
    padding: 4px 12px;
    border-radius: 16px;
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    color: #475569;
    font-size: 11.5px;
    font-weight: 600;
  `,
  skillChipMatch: css`
    padding: 4px 12px;
    border-radius: 16px;
    background: #ECFDF5;
    border: 1px solid #A7F3D0;
    color: #047857;
    font-size: 11.5px;
    font-weight: 700;
  `,
  actionRow: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  `,
  applyBtn: css`
    background: #4B638C;
    color: #FFFFFF;
    border: none;
    padding: 12px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 13.5px;
    cursor: pointer;
    transition: background 0.2s ease;

    &:hover {
      background: #3B4F70;
    }
  `,
  buildBtn: css`
    background: #FFFFFF;
    color: #1E293B;
    border: 1.5px solid #CBD5E1;
    padding: 12px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 13.5px;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
      border-color: #F55825;
      color: #F55825;
    }
  `
};

export default function HeroArchitectured() {
  const [score, setScore] = useState(54);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setScore(92);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div css={styles.heroOuter}>
      <div css={styles.container}>
        {/* Left Column Text & CTAs */}
        <div>
          <div css={styles.badgeTag}>
            <div css={styles.greenPulseDot} />
            AVAILABLE — 3,670 journeys live
          </div>
          <h1 css={styles.title}>
            Your Potential, <span>Architectured.</span>
          </h1>
          <p css={styles.subtitle}>
            UDEN turns the friction of job seeking into a streamlined narrative of professional evolution — AI-matched paths, skill snapshots, interview intel, and a tracker that moves with you.
          </p>

          <div css={styles.ctaRow}>
            <button 
              css={styles.primaryBtn}
              onClick={() => navigate(AppRoutes.JOB_SEARCH)}
            >
              Get Started Now
              <ArrowRight size={18} />
            </button>

            <button 
              css={styles.secondaryBtn}
              onClick={() => {
                const el = document.getElementById('matching-engine');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Sparkles size={16} color="#F55825" />
              See the Matching Engine
            </button>
          </div>

          <div css={styles.highlightsRow}>
            <div css={styles.highlightItem}>
              <CheckCircle2 size={15} color="#10B981" />
              <span>92% avg. AI fit</span>
            </div>
            <div css={styles.highlightItem}>
              <CheckCircle2 size={15} color="#10B981" />
              <span>Skill-paced paths</span>
            </div>
            <div css={styles.highlightItem}>
              <CheckCircle2 size={15} color="#10B981" />
              <span>Live application tracking</span>
            </div>
          </div>
        </div>

        {/* Right Column Interactive Skills Snapshot Card */}
        <div css={styles.widgetCard}>
          <div css={styles.matchScoreBadge}>
            <div className="score-lbl">MATCH SCORE</div>
            <div className="score-val">96%</div>
          </div>

          <div css={styles.cardHeader}>
            <div css={styles.cardIconBox}>
              <Zap size={22} />
            </div>
            <h3 css={styles.cardTitle}>Skills Snapshot</h3>
          </div>

          <div css={styles.gaugeFlex}>
            <div css={styles.gaugeContainer}>
              <svg viewBox="0 0 120 120" style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                <circle cx="60" cy="60" r="52" stroke="#E2E8F0" strokeWidth="8" fill="none" />
                <circle
                  cx="60"
                  cy="60"
                  r="52"
                  stroke="#10B981"
                  strokeWidth="8"
                  fill="none"
                  strokeLinecap="round"
                  strokeDasharray={2 * Math.PI * 52}
                  strokeDashoffset={2 * Math.PI * 52 * (1 - score / 100)}
                  style={{ transition: 'stroke-dashoffset 1.5s cubic-bezier(0.4, 0, 0.2, 1)' }}
                />
              </svg>
              <div css={styles.gaugeCenterText}>
                <span className="num">{score}%</span>
                <span className="lbl">AI Fit Score</span>
              </div>
            </div>

            <div css={styles.gaugeDetails}>
              <div css={styles.strongFitBadge}>
                <CheckCircle2 size={13} />
                STRONG FIT
              </div>
              <div css={styles.skillCoverage}>• 80% skill coverage</div>
            </div>
          </div>

          <div css={styles.sectionLabel}>REQUIRED SKILLS *</div>
          <div css={styles.skillsWrap}>
            <span css={styles.skillChipReq}>React</span>
            <span css={styles.skillChipReq}>TypeScript</span>
            <span css={styles.skillChipReq}>Next.js</span>
            <span css={styles.skillChipReq}>Tailwind CSS</span>
          </div>

          <div css={styles.sectionLabel} style={{ color: '#10B981' }}>MATCHED SKILLS</div>
          <div css={styles.skillsWrap}>
            <span css={styles.skillChipMatch}>TypeScript</span>
            <span css={styles.skillChipMatch}>Next.js</span>
            <span css={styles.skillChipMatch}>Tailwind CSS</span>
          </div>

          <div css={styles.actionRow}>
            <button 
              css={styles.applyBtn}
              onClick={() => navigate(AppRoutes.JOB_SEARCH)}
            >
              Apply
            </button>
            <button 
              css={styles.buildBtn}
              onClick={() => navigate(AppRoutes.LEARN)}
            >
              Build skills
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
