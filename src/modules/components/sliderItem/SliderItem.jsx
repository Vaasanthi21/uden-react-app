import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const styles = {
  cardOuter: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FEF5D8 100%);
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 44px 48px;
    box-shadow: 0 12px 32px rgba(218, 83, 44, 0.1);
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 40px;
    align-items: center;
    margin: 20px auto;
    max-width: 1140px;
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
    background: #FEF5D8;
    color: #DA532C;
    padding: 5px 16px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 16px;
    border: 1px solid rgba(255, 176, 32, 0.6);
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
    font-size: 20px;
    font-weight: 800;
    color: #DA532C;
    margin-bottom: 24px;
    line-height: 1.3;
  `,
  darkSubtitle: css`
    font-size: 16px;
    font-weight: 600;
    color: #475569;
    margin-bottom: 24px;
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
    border: 1.5px solid rgba(218, 83, 44, 0.3);
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
    padding: 14px 30px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 6px 18px rgba(218, 83, 44, 0.25);
    text-decoration: none;

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(218, 83, 44, 0.35);
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
    border-radius: 20px;
    background: #FFFFFF;
    padding: 12px;
    border: 1.5px solid #FEF5D8;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
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

      {/* Right Column: Original Image in Sleek Frame */}
      {props?.image && (
        <div css={styles.imageWrapper}>
          <img 
            src={props.image} 
            alt={props?.title || 'UDEN Feature'} 
            css={styles.imgBox}
            className="uden-card-hover"
          />
        </div>
      )}
    </div>
  );
};

export default SliderItem;