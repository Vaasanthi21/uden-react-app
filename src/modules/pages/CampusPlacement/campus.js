import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Building2, Sparkles, Award, ArrowRight, CheckCircle2, Star, Quote } from 'lucide-react';
import Dimensions from "../../../assets/images/flowcharts/Dimensions.png";
import Amazon from "../../../assets/images/flowcharts/Amazon.webp";
import Microsoft from "../../../assets/images/flowcharts/Microsoft.webp";
import NVLogo_2D from "../../../assets/images/flowcharts/NVLogo_2D.jpg";
import placementAlgoImage from "../../../assets/images/flowcharts/placementAlgoImage.png";
import FeatureOdyssey from '../../components/feature/FeatureOdyssey';
import MatchingEngine from '../../components/feature/MatchingEngine';
import SuccessTerminal from '../../components/feature/SuccessTerminal';

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    padding: 64px 16px 50px 16px;
    color: #1E293B;
    border-bottom: 4px solid #DA532C;
  `,
  container: css`
    max-width: 1200px;
    margin: 0 auto;
  `,
  heroGrid: css`
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
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
    background: rgba(218, 83, 44, 0.12);
    color: #DA532C;
    padding: 6px 16px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    margin-bottom: 18px;
    border: 1px solid rgba(218, 83, 44, 0.25);
    text-transform: uppercase;
  `,
  heroTitle: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.2;
    margin: 0 0 16px 0;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 32px;
    }
  `,
  heroSub: css`
    font-size: 16.5px;
    color: #475569;
    line-height: 1.6;
    margin-bottom: 32px;
    font-weight: 500;
  `,
  formCard: css`
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 20px;
    padding: 32px;
    color: #1E293B;
    box-shadow: 0 16px 36px rgba(218, 83, 44, 0.15);
  `,
  formTitle: css`
    font-size: 20px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 6px;
    display: flex;
    align-items: center;
    gap: 8px;
  `,
  formSub: css`
    font-size: 13px;
    color: #64748B;
    margin-bottom: 24px;
  `,
  input: css`
    width: 100%;
    padding: 12px 14px;
    margin-bottom: 14px;
    border-radius: 10px;
    border: 1.5px solid #CBD5E1;
    font-size: 14px;
    color: #1E293B;
    outline: none;
    box-sizing: border-box;
    font-weight: 600;

    &:focus {
      border-color: #DA532C;
    }
  `,
  submitBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px;
    border-radius: 12px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: #B83D1B;
    }
  `,

  /* OUR SPONSORS SECTION */
  sponsorsSection: css`
    background: #FEF5D8;
    padding: 50px 16px;
    text-align: center;
    border-top: 1px solid rgba(255, 176, 32, 0.3);
    border-bottom: 1px solid rgba(255, 176, 32, 0.3);
  `,
  sponsorsHeading: css`
    font-size: 34px;
    font-weight: 900;
    color: #DA532C;
    margin-bottom: 36px;
  `,
  sponsorsCardsGrid: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 32px;
    flex-wrap: wrap;
    max-width: 1000px;
    margin: 0 auto;
  `,
  sponsorCard: css`
    background: #FFFFFF;
    border-radius: 14px;
    padding: 24px 36px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E2E8F0;
    height: 90px;
    min-width: 160px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 24px rgba(218, 83, 44, 0.15);
      border-color: #DA532C;
    }

    img {
      max-height: 54px;
      max-width: 160px;
      object-fit: contain;
    }
  `,

  /* TESTIMONIALS SECTION */
  testimonialsSection: css`
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 16px;
  `,
  testimonialsHeading: css`
    font-size: 34px;
    font-weight: 900;
    color: #DA532C;
    text-align: center;
    margin-bottom: 40px;
  `,
  testimonialsGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 600px) {
      grid-template-columns: 1fr;
    }
  `,
  testimonialCard: css`
    background: #FFFDF7;
    border: 1.5px solid rgba(255, 176, 32, 0.35);
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 28px rgba(218, 83, 44, 0.12);
      border-color: #DA532C;
    }
  `,
  quoteMsg: css`
    font-size: 14.5px;
    color: #334155;
    line-height: 1.6;
    font-style: italic;
    margin-bottom: 24px;
    font-weight: 500;
  `,
  profileRow: css`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  avatar: css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid #DA532C;
    object-fit: cover;
    background: #F1F5F9;
  `,
  candidateName: css`
    font-size: 15px;
    font-weight: 800;
    color: #DA532C;
    margin: 0;
  `,
  candidateRole: css`
    font-size: 12.5px;
    color: #64748B;
    margin: 2px 0 0 0;
    font-weight: 600;
  `,

  tableSection: css`
    max-width: 1200px;
    margin: 60px auto;
    padding: 0 16px;
  `,
  sectionHeader: css`
    text-align: center;
    margin-bottom: 36px;

    h2 {
      font-size: 32px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 8px;
    }

    p {
      color: #64748B;
      font-size: 15px;
    }
  `,
  table: css`
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    border-radius: 16px;
    overflow: hidden;
    border: 1.5px solid #E2E8F0;
    box-shadow: 0 4px 14px rgba(0,0,0,0.03);

    th {
      background: #DA532C;
      color: #FFFFFF;
      padding: 16px;
      text-align: left;
      font-size: 15px;
      font-weight: 800;
    }

    td {
      padding: 16px;
      border-bottom: 1px solid #E2E8F0;
      color: #334155;
      font-size: 14.5px;
      font-weight: 600;
      background: #FFFFFF;
    }

    tr:last-child td {
      border-bottom: none;
    }
  `,
  highlightCol: css`
    color: #DA532C !important;
    font-weight: 800 !important;
  `,
  gridSection: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 28px;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
    }
  `,
  featureCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 4px 14px rgba(0,0,0,0.04);

    h3 {
      font-size: 20px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 14px;
    }

    img {
      width: 100%;
      height: auto;
      border-radius: 12px;
      margin-bottom: 14px;
      transition: transform 0.3s ease;

      &:hover {
        transform: scale(1.03);
      }
    }

    p {
      font-size: 14px;
      color: #64748B;
      line-height: 1.6;
      margin: 0;
    }
  `
};

const testimonialsList = [
  {
    id: 1,
    quote: '"UDEN helped me with the interview preparation and mock interviews which helped build my confidence to tackle the interviewer’s questions. Thanks to their team I cracked Deloitte’s interview."',
    name: 'Palak Jain',
    role: 'Audit Senior, Deloitte',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 2,
    quote: '"As a fresher, it was difficult to find jobs. But the team at UDEN guided me to understand industry expectations and secured my placement fast."',
    name: 'Pankaj Sharma',
    role: 'Assistant Manager - Antlia',
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80'
  },
  {
    id: 3,
    quote: '"I got a job at a prestigious organization like AON through UDEN after completing their upskilling curriculum."',
    name: 'Alekhya',
    role: 'Analyst, AON',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80'
  }
];

const Campus = () => {
  const [formData, setFormData] = useState({ institution: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you! Our Institutional Partnerships lead will get in touch shortly.');
    setFormData({ institution: '', email: '' });
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. Hero Institutional Banner & Registration Form */}
      <div css={styles.heroOuter}>
        <div css={styles.container}>
          <div css={styles.heroGrid}>
            <div>
              <div css={styles.badgeTag}>
                <Sparkles size={14} />
                INSTITUTIONAL PLACEMENT AUTOMATION
              </div>
              <h1 css={styles.heroTitle}>
                Revolutionizing Campus Placements <span>with UDEN</span>
              </h1>
              <p css={styles.heroSub}>
                AI-driven recruitment automation, predictive placement analytics, and direct corporate drive connections for modern universities.
              </p>
            </div>

            <div css={styles.formCard}>
              <div css={styles.formTitle}>
                <Building2 size={20} color="#DA532C" />
                Partner College Portal
              </div>
              <p css={styles.formSub}>Register your university to activate UDEN's Campus Placement Drive software.</p>

              <form onSubmit={handleSubmit}>
                <input 
                  type="text"
                  placeholder="Institution / College Name"
                  value={formData.institution}
                  onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
                  css={styles.input}
                  required
                />
                <input 
                  type="email"
                  placeholder="Official University Email ID"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  css={styles.input}
                  required
                />
                <button type="submit" css={styles.submitBtn}>
                  Activate Campus Portal
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* 2. OUR SPONSORS SECTION */}
      <div css={styles.sponsorsSection}>
        <h2 css={styles.sponsorsHeading}>Our Sponsors</h2>
        <div css={styles.sponsorsCardsGrid}>
          <div css={styles.sponsorCard}>
            <img src={Amazon} alt="powered by AWS" />
          </div>
          <div css={styles.sponsorCard}>
            <img src={Microsoft} alt="Microsoft for Startups" />
          </div>
          <div css={styles.sponsorCard}>
            <img src={NVLogo_2D} alt="NVIDIA" />
          </div>
        </div>
      </div>

      {/* 2.5 Student Feature Odyssey: Learning Path & Superpowers */}
      <FeatureOdyssey />

      {/* 2.8 Student AI Matching Engine */}
      <MatchingEngine />

      {/* 2.9 Student Success Terminal & Ticker */}
      <SuccessTerminal />

      {/* 3. TESTIMONIALS SECTION */}
      <div css={styles.testimonialsSection}>
        <h2 css={styles.testimonialsHeading}>Testimonials</h2>
        <div css={styles.testimonialsGrid}>
          {testimonialsList.map((t) => (
            <div key={t.id} css={styles.testimonialCard}>
              <div css={styles.quoteMsg}>{t.quote}</div>
              <div css={styles.profileRow}>
                <img src={t.avatar} alt={t.name} css={styles.avatar} />
                <div>
                  <h4 css={styles.candidateName}>- {t.name}</h4>
                  <p css={styles.candidateRole}>- {t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. Transformative Benefits Comparison Table */}
      <div css={styles.tableSection}>
        <div css={styles.sectionHeader}>
          <h2>Transformative Campus Placement Metrics</h2>
          <p>See how partnering with UDEN elevates student placement offers and average CTCs.</p>
        </div>

        <table css={styles.table}>
          <thead>
            <tr>
              <th>Key Placement Metric</th>
              <th>Pre-UDEN Average</th>
              <th>Post-UDEN Partnership</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Avg. Corporate Drives / Student</td>
              <td>2.1 Drives</td>
              <td css={styles.highlightCol}>5.7 Drives (+170%)</td>
            </tr>
            <tr>
              <td>On-Campus Placement Conversion Rate</td>
              <td>68% Conversion</td>
              <td css={styles.highlightCol}>89% Conversion (+21%)</td>
            </tr>
            <tr>
              <td>Average Student CTC Package</td>
              <td>₹4.5L / yr</td>
              <td css={styles.highlightCol}>₹8.2L / yr (+82%)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. Neural Network & Algorithm Feature Grid */}
      <div css={styles.gridSection}>
        <div css={styles.featureCard}>
          <h3>AI-Curated Company Profiles</h3>
          <img src={Dimensions} alt="12 Dimensions of Company Analysis" />
          <p>Our neural networks analyze 12 distinct corporate recruitment dimensions to match student skill profiles with hiring requirements.</p>
        </div>

        <div css={styles.featureCard}>
          <h3>Predictive Placement Analytics Engine</h3>
          <img src={placementAlgoImage} alt="Placement Prediction Algorithm" />
          <p>Predictive algorithms track candidate skill acquisition, mock interview readiness, and shortlist probabilities in real-time.</p>
        </div>
      </div>
    </div>
  );
};

export default Campus;