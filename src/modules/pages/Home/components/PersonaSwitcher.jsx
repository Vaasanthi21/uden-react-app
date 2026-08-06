import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { CheckCircle2, ArrowRight, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { HomeConst } from '../Home.Const';

const styles = {
  container: css`
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 16px;
  `,
  titleHeader: css`
    text-align: center;
    margin-bottom: 32px;
    
    h2 {
      font-size: 30px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 8px;
    }
    
    p {
      color: #64748B;
      font-size: 15px;
      font-weight: 500;
    }
  `,
  switcherNav: css`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  `,
  switchBtn: (active) => css`
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 800;
    font-size: 14.5px;
    border: 2px solid ${active ? '#DA532C' : '#E2E8F0'};
    background: ${active ? '#DA532C' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#334155'};
    cursor: pointer;
    transition: all 0.25s ease;
    box-shadow: ${active ? '0 8px 20px -6px rgba(218, 83, 44, 0.35)' : 'none'};

    &:hover {
      border-color: #DA532C;
      color: ${active ? '#FFFFFF' : '#DA532C'};
    }
  `,
  card: css`
    max-width: 840px;
    margin: 0 auto;
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 16px 36px rgba(218, 83, 44, 0.12);
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 32px;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      padding: 28px;
    }
  `,
  cardBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 16px;
    border: 1px solid rgba(218, 83, 44, 0.25);
  `,
  cardTitle: css`
    font-size: 26px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.3;
    margin-bottom: 12px;
  `,
  cardDesc: css`
    font-size: 15px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 24px;
    font-weight: 500;
  `,
  bulletsList: css`
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;

    li {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
      color: #334155;
      font-weight: 600;
      margin-bottom: 10px;
    }
  `,
  actionBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px 24px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 8px 20px rgba(218, 83, 44, 0.25);

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(218, 83, 44, 0.35);
    }
  `
};

const PersonaSwitcher = () => {
  const [activePersonaId, setActivePersonaId] = useState('student');
  const navigate = useNavigate();
  const data = HomeConst.PersonaSwitcher;
  const personas = data.personas || [];

  const currentPersona = personas.find(p => p.id === activePersonaId) || personas[0];

  return (
    <div css={styles.container}>
      <div css={styles.titleHeader}>
        <h2>{data.title}</h2>
        <p>{data.subtitle}</p>
      </div>

      <div css={styles.switcherNav}>
        {personas.map((p) => (
          <button 
            key={p.id}
            css={styles.switchBtn(activePersonaId === p.id)}
            onClick={() => setActivePersonaId(p.id)}
          >
            {p.tabLabel}
          </button>
        ))}
      </div>

      <div css={styles.card}>
        <div>
          <div css={styles.cardBadge}>
            <Zap size={14} />
            {currentPersona.badge}
          </div>
          <h3 css={styles.cardTitle}>{currentPersona.title}</h3>
          <p css={styles.cardDesc}>{currentPersona.desc}</p>
        </div>

        <div>
          <ul css={styles.bulletsList}>
            {currentPersona.bullets.map((b, i) => (
              <li key={i}>
                <CheckCircle2 size={16} color="#DA532C" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          <button 
            css={styles.actionBtn}
            onClick={() => navigate(currentPersona.route)}
          >
            {currentPersona.actionText}
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonaSwitcher;
