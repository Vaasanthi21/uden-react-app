import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Users, Building2, BookOpen, Award } from 'lucide-react';
import { HomeConst } from '../Home.Const';

const styles = {
  container: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    padding: 32px 24px;
    border-radius: 20px;
    margin: 32px 0;
    box-shadow: 0 8px 24px rgba(218, 83, 44, 0.08);
    border: 1.5px solid rgba(255, 176, 32, 0.3);
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    max-width: 1200px;
    margin: 0 auto;
  `,
  card: css`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 20px;
    background: #FFFFFF;
    border-radius: 16px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #E2E8F0;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(218, 83, 44, 0.15);
      border-color: #DA532C;
    }
  `,
  iconBox: css`
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: #DA532C;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 14px rgba(218, 83, 44, 0.3);
  `,
  statNumber: css`
    font-size: 28px;
    font-weight: 900;
    color: #DA532C;
    line-height: 1.2;
  `,
  statLabel: css`
    font-size: 13.5px;
    color: #475569;
    font-weight: 600;
  `
};

const icons = [<Users size={24} />, <Building2 size={24} />, <BookOpen size={24} />, <Award size={24} />];

const MetricsTicker = () => {
  const metricsData = HomeConst.MetricsTicker;

  return (
    <div css={styles.container}>
      <div css={styles.grid}>
        {metricsData.map((metric, idx) => (
          <div key={idx} css={styles.card}>
            <div css={styles.iconBox}>
              {icons[idx % icons.length]}
            </div>
            <div>
              <div css={styles.statNumber}>{metric.number}</div>
              <div css={styles.statLabel}>{metric.label}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsTicker;
