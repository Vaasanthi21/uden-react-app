import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, keyframes } from '@emotion/react';
import { 
  Users, PieChart, ShieldCheck, CheckCircle2, TrendingUp, 
  Bot, BarChart3, Rocket, Shield, Award, BookOpen, Brain, 
  Sparkles, Check, Building2, ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const popIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.96) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
`;

const styles = {
  sectionOuter: css`
    width: 100%;
    background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
    padding: 70px 20px 90px 20px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1080px;
    margin: 0 auto;
  `,
  
  /* MAIN CARD */
  cardWrapper: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 32px;
    overflow: hidden;
    box-shadow: 0 20px 50px -12px rgba(75, 99, 140, 0.12);
    animation: ${popIn} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
  `,

  /* HEADER BANNER */
  headerBanner: css`
    background: linear-gradient(135deg, #1E293B 0%, #4B638C 100%);
    padding: 36px 40px;
    color: #FFFFFF;
    text-align: center;
    position: relative;
    overflow: hidden;
  `,
  headerBadge: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 18px;
    border-radius: 99px;
    background: rgba(245, 88, 37, 0.25);
    border: 1px solid rgba(245, 88, 37, 0.4);
    color: #FFEDD5;
    font-size: 12px;
    font-weight: 800;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 12px;
  `,
  headerTitle: css`
    font-size: 32px;
    font-weight: 900;
    margin: 6px 0 8px 0;
    color: #FFFFFF;
    letter-spacing: -0.5px;
    @media (max-width: 640px) {
      font-size: 24px;
    }
  `,
  headerSub: css`
    font-size: 15px;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
    font-weight: 600;
  `,

  /* BODY CONTENT */
  bodyContent: css`
    padding: 36px 40px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 640px) {
      padding: 24px 20px;
    }
  `,

  /* STEP ITEM */
  stepRow: css`
    display: grid;
    grid-template-columns: 48px 1fr 52px;
    gap: 20px;
    align-items: center;
    background: #F8FAFC;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 20px 24px;
    transition: all 0.25s ease;
    &:hover {
      border-color: #4B638C;
      box-shadow: 0 8px 24px rgba(75, 99, 140, 0.08);
      transform: translateY(-2px);
    }
    @media (max-width: 640px) {
      grid-template-columns: 36px 1fr;
    }
  `,
  stepNum: css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: #4B638C;
    color: #FFFFFF;
    font-size: 18px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 4px 12px rgba(75, 99, 140, 0.25);
  `,
  stepText: css`
    h4 {
      font-size: 18px;
      font-weight: 800;
      color: #1E293B;
      margin: 0 0 6px 0;
    }
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }
    li {
      font-size: 13.5px;
      color: #475569;
      display: flex;
      align-items: center;
      gap: 8px;
      line-height: 1.4;
      &::before {
        content: '▸';
        color: #F55825;
        font-weight: bold;
      }
    }
  `,
  stepIcon: css`
    width: 52px;
    height: 52px;
    border-radius: 16px;
    background: rgba(75, 99, 140, 0.1);
    color: #4B638C;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 640px) {
      display: none;
    }
  `,

  /* STEP 4 HIGHLIGHT CARD (FREE UPSKILLING) */
  freeUpskillingCard: css`
    background: linear-gradient(135deg, #1E293B 0%, #334155 100%);
    border: 2px solid #4B638C;
    border-radius: 24px;
    padding: 28px 32px;
    color: #FFFFFF;
    position: relative;
    overflow: hidden;
    box-shadow: 0 12px 32px rgba(30, 41, 59, 0.2);
  `,
  freeBadge: css`
    position: absolute;
    top: 24px;
    right: 28px;
    background: linear-gradient(135deg, #DA532C 0%, #F55825 100%);
    color: #FFFFFF;
    padding: 8px 18px;
    border-radius: 99px;
    font-size: 13px;
    font-weight: 900;
    letter-spacing: 0.5px;
    box-shadow: 0 4px 14px rgba(245, 88, 37, 0.4);
    display: flex;
    align-items: center;
    gap: 6px;
    @media (max-width: 640px) {
      position: static;
      display: inline-flex;
      margin-bottom: 16px;
    }
  `,
  freeTitle: css`
    font-size: 20px;
    font-weight: 800;
    color: #FFFFFF;
    margin: 0 0 6px 0;
  `,
  freeSub: css`
    font-size: 13px;
    color: #94A3B8;
    margin: 0 0 16px 0;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    font-weight: 700;
  `,
  freeGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,
  freeItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 13.5px;
    font-weight: 700;
    color: #F8FAFC;
    background: rgba(255, 255, 255, 0.06);
    padding: 10px 14px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    svg {
      color: #10B981;
      flex-shrink: 0;
    }
  `,

  /* WE HELP YOU BUILD THE BEST BANNER */
  buildBanner: css`
    background: linear-gradient(135deg, #DA532C 0%, #F55825 100%);
    border-radius: 24px;
    padding: 28px 32px;
    color: #FFFFFF;
    text-align: center;
    box-shadow: 0 12px 32px rgba(245, 88, 37, 0.25);
    margin-top: 10px;
    h4 {
      font-size: 20px;
      font-weight: 900;
      margin: 0 0 20px 0;
      letter-spacing: 0.3px;
      text-transform: uppercase;
    }
  `,
  pillarsGrid: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    @media (max-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  pillarItem: css`
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    border-radius: 16px;
    padding: 14px 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    span {
      font-size: 12.5px;
      font-weight: 800;
      color: #FFFFFF;
    }
  `,

  /* BOTTOM TICKER METRICS */
  tickerGrid: css`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    padding: 24px 40px;
    background: #F1F5F9;
    border-top: 1.5px solid #E2E8F0;
    text-align: center;
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
      padding: 20px;
    }
  `,
  tickerBox: css`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    h5 {
      font-size: 20px;
      font-weight: 900;
      color: #1E293B;
      margin: 0;
    }
    p {
      font-size: 12px;
      color: #64748B;
      margin: 0;
      font-weight: 700;
    }
  `,

  /* CTA FOOTER */
  ctaBox: css`
    text-align: center;
    margin-top: 36px;
  `,
  ctaBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 10px;
    padding: 16px 36px;
    background: linear-gradient(135deg, #DA532C 0%, #F55825 100%);
    color: #FFFFFF;
    font-size: 16px;
    font-weight: 800;
    border-radius: 16px;
    text-decoration: none;
    box-shadow: 0 10px 28px rgba(245, 88, 37, 0.35);
    transition: all 0.25s ease;
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 36px rgba(245, 88, 37, 0.45);
      color: #FFFFFF;
    }
  `
};

const CompanyHiringInfographic = () => {
  return (
    <div css={styles.sectionOuter}>
      <div css={styles.container}>
        
        <div css={styles.cardWrapper}>
          
          {/* Header Banner */}
          <div css={styles.headerBanner}>
            <div css={styles.headerBadge}>
              <Building2 size={14} /> FOR COMPANIES
            </div>
            <h3 css={styles.headerTitle}>SMARTER HIRING &amp; FREE UPSKILLING</h3>
            <p css={styles.headerSub}>Hire Better. Grow Together — Powered by AI &amp; UDEN Platform.</p>
          </div>

          {/* 5 Hiring Steps Body */}
          <div css={styles.bodyContent}>
            
            {/* STEP 1 */}
            <div css={styles.stepRow}>
              <div css={styles.stepNum}>1</div>
              <div css={styles.stepText}>
                <h4>AI Talent Discovery</h4>
                <ul>
                  <li>Access Pre-assessed &amp; Job-ready Talent</li>
                  <li>AI Fitment Analysis for Every Role</li>
                </ul>
              </div>
              <div css={styles.stepIcon}>
                <Users size={26} />
              </div>
            </div>

            {/* STEP 2 */}
            <div css={styles.stepRow}>
              <div css={styles.stepNum}>2</div>
              <div css={styles.stepText}>
                <h4>AI Fitment Analysis</h4>
                <ul>
                  <li>JD Match, Skill Gap &amp; Potential Score</li>
                  <li>Find the Best Fit in Less Time</li>
                </ul>
              </div>
              <div css={styles.stepIcon}>
                <PieChart size={26} />
              </div>
            </div>

            {/* STEP 3 */}
            <div css={styles.stepRow}>
              <div css={styles.stepNum}>3</div>
              <div css={styles.stepText}>
                <h4>Hire with Confidence</h4>
                <ul>
                  <li>Shortlist, Interview &amp; Hire</li>
                  <li>Onboard Top Talent Faster</li>
                </ul>
              </div>
              <div css={styles.stepIcon}>
                <ShieldCheck size={26} />
              </div>
            </div>

            {/* STEP 4: HIGHLIGHTED FREE UPSKILLING BOX */}
            <div css={styles.freeUpskillingCard}>
              <div css={styles.freeBadge}>
                <Sparkles size={14} /> 100% FREE
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '8px' }}>
                <div css={styles.stepNum} style={{ background: '#F55825' }}>4</div>
                <div>
                  <h4 css={styles.freeTitle}>FREE Upskilling for Your Hired Talent</h4>
                  <p css={styles.freeSub}>Unlimited Access to Upgrade Your Workforce</p>
                </div>
              </div>

              <div css={styles.freeGrid}>
                <div css={styles.freeItem}>
                  <CheckCircle2 size={18} /> In-demand Skills Courses
                </div>
                <div css={styles.freeItem}>
                  <CheckCircle2 size={18} /> Certifications
                </div>
                <div css={styles.freeItem}>
                  <CheckCircle2 size={18} /> AI Mentorship &amp; Projects
                </div>
                <div css={styles.freeItem}>
                  <CheckCircle2 size={18} /> Continuous Learning Paths
                </div>
              </div>
            </div>

            {/* STEP 5 */}
            <div css={styles.stepRow}>
              <div css={styles.stepNum}>5</div>
              <div css={styles.stepText}>
                <h4>Grow High-Performing Teams</h4>
                <ul>
                  <li>Future-ready Workforce</li>
                  <li>Higher Retention &amp; Productivity</li>
                </ul>
              </div>
              <div css={styles.stepIcon}>
                <TrendingUp size={26} />
              </div>
            </div>

            {/* BUILD THE BEST HIGHLIGHT BANNER */}
            <div css={styles.buildBanner}>
              <h4>WE DON'T JUST HELP YOU HIRE, WE HELP YOU BUILD THE BEST.</h4>
              <div css={styles.pillarsGrid}>
                <div css={styles.pillarItem}>
                  <Bot size={22} />
                  <span>AI Powered</span>
                </div>
                <div css={styles.pillarItem}>
                  <BarChart3 size={22} />
                  <span>Data Driven</span>
                </div>
                <div css={styles.pillarItem}>
                  <Rocket size={22} />
                  <span>Scalable</span>
                </div>
                <div css={styles.pillarItem}>
                  <Shield size={22} />
                  <span>Future Ready</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Ticker Metrics */}
          <div css={styles.tickerGrid}>
            <div css={styles.tickerBox}>
              <Users size={22} color="#F55825" />
              <div>
                <h5>Lakh+</h5>
                <p>Jobs Analyzed</p>
              </div>
            </div>
            <div css={styles.tickerBox}>
              <Brain size={22} color="#4B638C" />
              <div>
                <h5>10,000+</h5>
                <p>Skills Mapped</p>
              </div>
            </div>
            <div css={styles.tickerBox}>
              <Building2 size={22} color="#10B981" />
              <div>
                <h5>100+</h5>
                <p>Hiring Partners</p>
              </div>
            </div>
          </div>

        </div>

        {/* Action Button */}
        <div css={styles.ctaBox}>
          <Link to={AppRoutes.FIND_TALENT} css={styles.ctaBtn}>
            Start Hiring Pre-Assessed Talent Now <ArrowRight size={18} />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default CompanyHiringInfographic;
