import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Award, ShieldCheck, CheckCircle2, Zap } from 'lucide-react';
import { HomeConst } from '../Home.Const';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 40px;
  `,
  pillBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(218, 83, 44, 0.1);
    color: #DA532C;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 700;
    margin-bottom: 12px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  heading: css`
    font-size: 32px;
    font-weight: 800;
    color: #DA532C;
    margin: 0 0 8px 0;
  `,
  subtitle: css`
    font-size: 15px;
    color: #64748B;
    margin: 0;
  `,
  grid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  `,
  card: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 20px;
    padding: 32px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(218, 83, 44, 0.18);
      border-color: #DA532C;
    }
  `,
  cardBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FFF5F5;
    color: #DA532C;
    padding: 4px 12px;
    border-radius: 16px;
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 16px;
    align-self: flex-start;
    border: 1px solid #FECDD3;
  `,
  cardTitle: css`
    font-size: 22px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 8px;
  `,
  cardSub: css`
    font-size: 13.5px;
    color: #64748B;
    line-height: 1.5;
    margin-bottom: 24px;
  `,
  imagePreviewBox: css`
    background: #F8FAFC;
    border: 1px solid #E2E8F0;
    border-radius: 14px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    height: 220px;
    overflow: hidden;

    img {
      max-height: 190px;
      max-width: 100%;
      object-fit: contain;
      border-radius: 8px;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }
  `,
  highlightsRow: css`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  `,
  highlightChip: css`
    display: flex;
    align-items: center;
    gap: 6px;
    background: #FFF5F5;
    color: #DA532C;
    padding: 6px 12px;
    border-radius: 8px;
    font-size: 12.5px;
    font-weight: 700;
  `
};

const HomeTrustedBy = () => {
  const data = HomeConst.TrustedBy;

  return (
    <div css={styles.section}>
      <div css={styles.header}>
        <div css={styles.pillBadge}>
          <Award size={14} />
          Official Accreditation & Partner
        </div>
        <h2 css={styles.heading}>{data.title || "Recognized & Backed By Industry Leaders"}</h2>
        <p css={styles.subtitle}>
          Officially recognized by the Govt. of India Startup Initiative & powered by AWS EdStart Cloud Infrastructure.
        </p>
      </div>

      <div css={styles.grid}>
        {/* Startup India Certificate Card */}
        <div css={styles.card}>
          <div>
            <div css={styles.cardBadge}>
              <ShieldCheck size={14} color="#DA532C" />
              Startup India Recognized
            </div>
            <h3 css={styles.cardTitle}>Govt. of India Startup Recognition</h3>
            <p css={styles.cardSub}>
              Certified by the Department of Industrial Policy & Promotion (DIPP), Ministry of Commerce & Industry (Certificate No. DIPP10153).
            </p>

            <div css={styles.imagePreviewBox}>
              <img src={data.certificate} alt="Startup India Certificate" />
            </div>
          </div>

          <div css={styles.highlightsRow}>
            <div css={styles.highlightChip}>
              <CheckCircle2 size={15} color="#DA532C" />
              DIPP Certificate No. DIPP10153
            </div>
            <div css={styles.highlightChip}>
              <CheckCircle2 size={15} color="#DA532C" />
              Govt-Accredited Innovation
            </div>
          </div>
        </div>

        {/* AWS EdStart Partner Card */}
        <div css={styles.card}>
          <div>
            <div css={styles.cardBadge}>
              <Zap size={14} />
              Global EdTech Accelerator
            </div>
            <h3 css={styles.cardTitle}>AWS EdStart Cloud Partner</h3>
            <p css={styles.cardSub}>
              Backed by Amazon Web Services to deliver enterprise-grade cloud scalability, AI assessment engines, and secure candidate matching.
            </p>

            <div css={styles.imagePreviewBox} style={{ background: '#FFFFFF' }}>
              <img src={data.aws} alt="AWS EdStart Partner Logo" style={{ maxHeight: '120px' }} />
            </div>
          </div>

          <div css={styles.highlightsRow}>
            <div css={styles.highlightChip}>
              <CheckCircle2 size={15} color="#DA532C" />
              99.9% Cloud Platform Uptime
            </div>
            <div css={styles.highlightChip}>
              <CheckCircle2 size={15} color="#DA532C" />
              Enterprise AI Assessment Engine
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTrustedBy;