import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { Trophy, Star, ArrowRight, Send, CheckCircle2 } from 'lucide-react';

const marqueeY = keyframes`
  0% { transform: translateY(0%); }
  100% { transform: translateY(-50%); }
`;

const matchPulse = keyframes`
  0% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.05); opacity: 0.85; }
  100% { transform: scale(1); opacity: 1; }
`;

const HIRES = [
  { name: 'Aarav Mehta', role: 'Frontend Engineer @ Deloitte Digital', badge: '96% Match', color: 'linear-gradient(135deg, #0EA5E9 0%, #14B8A6 100%)' },
  { name: 'Priya Nair', role: 'Lead Software Engineer @ Capital One', badge: '92% Match', color: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)' },
  { name: 'Rohan Gupta', role: 'Full Stack Developer @ Goodway Group', badge: '88% Match', color: 'linear-gradient(135deg, #F59E0B 0%, #F97316 100%)' },
  { name: 'Sara Khan', role: 'AI Engineer @ Juniper Square', badge: '94% Match', color: 'linear-gradient(135deg, #10B981 0%, #0D9488 100%)' },
  { name: 'Dev Patel', role: 'React Technical Lead @ HCLTech', badge: '90% Match', color: 'linear-gradient(135deg, #F97316 0%, #F59E0B 100%)' },
  { name: 'Ananya Rao', role: 'Product Manager @ Nationwide', badge: '85% Match', color: 'linear-gradient(135deg, #EC4899 0%, #F43F5E 100%)' },
];

const styles = {
  section: css`
    position: relative;
    padding: 90px 0;
    background: #FFFDF4;
    overflow: hidden;
    color: #1E293B;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  glowOrb1: css`
    position: absolute;
    top: 0;
    left: 25%;
    width: 320px;
    height: 320px;
    background: rgba(247, 188, 8, 0.15);
    border-radius: 50%;
    filter: blur(90px);
    pointer-events: none;
  `,
  glowOrb2: css`
    position: absolute;
    bottom: 0;
    right: 25%;
    width: 400px;
    height: 400px;
    background: rgba(245, 88, 37, 0.12);
    border-radius: 50%;
    filter: blur(100px);
    pointer-events: none;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    z-index: 2;
  `,
  header: css`
    text-align: center;
    max-width: 800px;
    margin: 0 auto 56px auto;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 18px;
    border-radius: 20px;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    color: #4B638C;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 0.5px;
    margin-bottom: 20px;
  `,
  title: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    margin: 0 0 16px 0;
    line-height: 1.2;

    span {
      color: #F55825;
    }

    @media (max-width: 768px) {
      font-size: 30px;
    }
  `,
  subtitle: css`
    font-size: 17px;
    color: #64748B;
    line-height: 1.6;
    margin: 0;
  `,
  mainGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: flex-start;

    @media (max-width: 960px) {
      grid-template-columns: 1fr;
    }
  `,
  leftCol: css`
    display: flex;
    flex-direction: column;
  `,
  hiresHeader: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 18px;
    height: 32px;
  `,
  marqueeWrapper: css`
    position: relative;
    overflow: hidden;
    height: 440px;
    border-radius: 24px;
    padding: 4px;
  `,
  marqueeTrack: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    animation: ${marqueeY} 20s linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  `,
  hireCard: css`
    background: #FFFFFF;
    border-radius: 20px;
    border: 1.5px solid #E2E8F0;
    box-shadow: 0 6px 18px rgba(75, 99, 140, 0.06);
    padding: 18px 22px;
    display: flex;
    align-items: center;
    gap: 16px;
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    transition: all 0.25s ease;

    &:hover {
      border-color: #F55825;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(245, 88, 37, 0.12);
    }

    @media (max-width: 640px) {
      padding: 14px 12px;
      gap: 10px;
    }
  `,
  avatarInitial: (colorGrad) => css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: ${colorGrad};
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  hireInfo: css`
    flex: 1;
    min-width: 0;
    overflow: hidden;
  `,
  hireName: css`
    font-size: 15px;
    font-weight: 800;
    color: #1E293B;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  hireRole: css`
    font-size: 12.5px;
    color: #64748B;
    margin-top: 2px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `,
  matchBadge: css`
    padding: 4px 10px;
    border-radius: 20px;
    background: #F7BC08;
    color: #1E293B;
    font-size: 11px;
    font-weight: 900;
    animation: ${matchPulse} 2s infinite ease-in-out;
    white-space: nowrap;
    flex-shrink: 0;

    @media (max-width: 480px) {
      padding: 3px 8px;
      font-size: 10px;
    }
  `,
  chatCard: css`
    background: #FFFFFF;
    border-radius: 28px;
    border: 1.5px solid #E2E8F0;
    box-shadow: 0 20px 40px rgba(75, 99, 140, 0.1);
    padding: 32px;
    box-sizing: border-box;
    width: 100%;
    max-width: 100%;
    overflow: hidden;

    @media (max-width: 640px) {
      padding: 20px 14px;
    }
  `,
  chatHeader: css`
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 24px;
    height: 32px;
  `,
  sendIconBox: css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: linear-gradient(135deg, #F55825 0%, #F7BC08 100%);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  chatTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin: 0;
  `,
  chatSub: css`
    font-size: 12px;
    color: #64748B;
    margin-top: 1px;
  `,
  chatMessages: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 24px;
  `,
  msgBot: css`
    background: #FFFDF0;
    border: 1px solid #FEF5D8;
    border-radius: 18px;
    border-top-left-radius: 4px;
    padding: 14px 18px;
    max-width: 90%;
    align-self: flex-start;
    font-size: 13.5px;
    color: #1E293B;
    line-height: 1.5;

    @media (max-width: 640px) {
      max-width: 100%;
      padding: 12px 14px;
    }
  `,
  msgUser: css`
    background: #4B638C;
    color: #FFFFFF;
    border-radius: 18px;
    border-top-right-radius: 4px;
    padding: 14px 18px;
    max-width: 90%;
    align-self: flex-end;
    font-size: 13.5px;
    line-height: 1.5;

    @media (max-width: 640px) {
      max-width: 100%;
      padding: 12px 14px;
    }
  `,
  inputRow: css`
    display: flex;
    gap: 10px;
    margin-bottom: 24px;

    @media (max-width: 640px) {
      flex-direction: column;
    }
  `,
  inputEmail: css`
    flex: 1;
    padding: 14px 20px;
    border-radius: 30px;
    border: 1.5px solid #CBD5E1;
    font-size: 14px;
    outline: none;
    font-weight: 600;

    &:focus {
      border-color: #F55825;
    }
  `,
  unlockBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #F55825;
    color: #FFFFFF;
    padding: 14px 24px;
    border-radius: 30px;
    font-size: 14px;
    font-weight: 800;
    border: none;
    cursor: pointer;
    transition: all 0.25s ease;

    &:hover {
      background: #D94616;
      transform: translateY(-1px);
    }
  `,
  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  `,
  statBox: css`
    background: #FFFDF0;
    border: 1px solid #FEF5D8;
    border-radius: 16px;
    padding: 14px;
    text-align: center;
  `,
  statNum: css`
    font-size: 22px;
    font-weight: 900;
    color: #F55825;
    margin: 0;
  `,
  statLbl: css`
    font-size: 11px;
    font-weight: 700;
    color: #64748B;
    margin-top: 2px;
  `
};

export default function SuccessTerminal() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleUnlock = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section css={styles.section} id="success-terminal">
      <div css={styles.glowOrb1} />
      <div css={styles.glowOrb2} />

      <div css={styles.container}>
        <div css={styles.header}>
          <div css={styles.badgeTag}>
            <Trophy size={14} color="#F7BC08" />
            THE SUCCESS TERMINAL
          </div>
          <h1 css={styles.title}>
            From learning to <span>doing.</span>
          </h1>
          <p css={styles.subtitle}>
            Real people, real matches, real offers. Join the narrative of professional evolution.
          </p>
        </div>

        <div css={styles.mainGrid}>
          {/* Left Column: Clean Floating Marquee */}
          <div css={styles.leftCol}>
            <div css={styles.hiresHeader}>
              <Star size={18} fill="#F7BC08" color="#F7BC08" />
              Recent Hires &amp; Top Scholars
            </div>

            <div css={styles.marqueeWrapper}>
              <div css={styles.marqueeTrack}>
                {HIRES.concat(HIRES).map((h, i) => (
                  <div key={i} css={styles.hireCard}>
                    <div css={styles.avatarInitial(h.color)}>{h.name[0]}</div>
                    <div css={styles.hireInfo}>
                      <h4 css={styles.hireName}>{h.name}</h4>
                      <p css={styles.hireRole}>{h.role}</p>
                    </div>
                    <span css={styles.matchBadge}>{h.badge}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Unlock Card */}
          <div css={styles.chatCard}>
            <div css={styles.chatHeader}>
              <div css={styles.sendIconBox}>
                <Send size={18} />
              </div>
              <div>
                <h3 css={styles.chatTitle}>Start your story</h3>
                <p css={styles.chatSub}>Frictionless. Fast. Free.</p>
              </div>
            </div>

            <div css={styles.chatMessages}>
              <div css={styles.msgBot}>What role are you aiming for?</div>
              <div css={styles.msgUser}>Lead Front End Engineer — I want AI-matched paths and interview intel.</div>
              <div css={styles.msgBot}>Great — I've found 12 active matches. Enter your email to unlock them.</div>
            </div>

            {submitted ? (
              <div style={{ background: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '20px', padding: '16px', color: '#047857', fontWeight: 800, textAlign: 'center', marginBottom: '24px' }}>
                <CheckCircle2 size={20} style={{ verticalAlign: 'middle', marginRight: '6px' }} />
                Matches unlocked! We've sent 12 personalized roles to {email}.
              </div>
            ) : (
              <form onSubmit={handleUnlock} css={styles.inputRow}>
                <input
                  type="email"
                  placeholder="you@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  css={styles.inputEmail}
                  required
                />
                <button type="submit" css={styles.unlockBtn}>
                  Unlock <ArrowRight size={16} />
                </button>
              </form>
            )}

            <div css={styles.statsGrid}>
              <div css={styles.statBox}>
                <p css={styles.statNum}>3,670</p>
                <p css={styles.statLbl}>Live journeys</p>
              </div>
              <div css={styles.statBox}>
                <p css={styles.statNum}>2,907</p>
                <p css={styles.statLbl}>Consumed</p>
              </div>
              <div css={styles.statBox}>
                <p css={styles.statNum}>92%</p>
                <p css={styles.statLbl}>Avg. fit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
