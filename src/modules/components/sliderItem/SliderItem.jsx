import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const styles = {
  cardOuter: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FEF5D8 100%);
    border-radius: 32px;
    padding: 44px 52px;
    box-shadow: 0 20px 50px rgba(218, 83, 44, 0.07);
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 40px;
    align-items: center;
    margin: 16px auto 28px auto;
    max-width: 1140px;
    border: 1px solid rgba(255, 176, 32, 0.35);
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      padding: 32px 24px;
      gap: 28px;
      text-align: center;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 16px;
    border: 1px solid rgba(218, 83, 44, 0.2);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 34px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.2;
    margin: 0 0 10px 0;
    letter-spacing: -0.5px;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 26px;
    }
  `,
  subtitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #DA532C;
    margin-bottom: 22px;
    line-height: 1.3;
  `,
  darkSubtitle: css`
    font-size: 15.5px;
    font-weight: 600;
    color: #475569;
    margin-bottom: 22px;
    line-height: 1.5;
  `,
  pointsRow: css`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-wrap: wrap;
    margin-bottom: 28px;

    @media (max-width: 900px) {
      justify-content: center;
    }
  `,
  pointChip: css`
    display: flex;
    align-items: center;
    gap: 6px;
    background: #FFFFFF;
    color: #DA532C;
    border: 1px solid rgba(255, 176, 32, 0.5);
    padding: 6px 14px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  `,
  ctaBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px 32px;
    border-radius: 28px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 8px 20px rgba(218, 83, 44, 0.25);
    text-decoration: none;

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 12px 24px rgba(218, 83, 44, 0.35);
    }
  `,
  imageWrapper: css`
    display: flex;
    justify-content: center;
    align-items: center;
  `,
  imgBox: css`
    width: 100%;
    max-height: 280px;
    object-fit: contain;
    filter: drop-shadow(0 12px 24px rgba(0, 0, 0, 0.06));
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.02);
    }
  `
};

const SliderItem = (props) => {
  const navigate = useNavigate();
  const darksubtitle = props?.darksubtitle;

  const handleActionClick = (e) => {
    if (props?.action?.href) {
      e.preventDefault();
      navigate(props.action.href);
    }
  };

  return (
    <div css={styles.cardOuter} className="uden-fade-in">
      {/* Left Column: Title, Subtitle, Point Pills & Action Button */}
      <div>
        <div css={styles.badgeTag} className="uden-float-anim">
          <Sparkles size={14} />
          UNIFIED EMPLOYMENT NETWORK
        </div>

        {props?.title && (
          <h2 css={styles.title}>
            {props.title}
          </h2>
        )}

        {props?.subtitle && (
          <div css={darksubtitle ? styles.darkSubtitle : styles.subtitle}>
            {props.subtitle}
          </div>
        )}

        {props?.points && props.points.length > 0 && (
          <div css={styles.pointsRow}>
            {props.points.map((pt, idx) => (
              <div key={idx} css={styles.pointChip}>
                <CheckCircle2 size={15} color="#DA532C" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        )}

        {props?.action && (
          <button 
            css={styles.ctaBtn} 
            className="uden-pulse-btn"
            onClick={handleActionClick}
          >
            {props.action.name}
            <ArrowRight size={16} />
          </button>
        )}
      </div>

      {/* Right Column: Floating Illustration (No Inner Box Border) */}
      {props?.image && (
        <div css={styles.imageWrapper}>
          <img 
            src={props.image} 
            alt={props?.title || 'UDEN Feature'} 
            css={styles.imgBox}
          />
        </div>
      )}
    </div>
  );
};

export default SliderItem;