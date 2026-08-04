import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { 
  GraduationCap, Briefcase, Sparkles, CheckCircle2, ArrowRight, 
  Brain, BookOpen, TrendingUp, Target, MessageSquare, Award, 
  Rocket, Gift, ShieldCheck, Globe, Clock, Layers, Star, Zap, UserCheck
} from 'lucide-react';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  sectionOuter: css`
    width: 100%;
    background: linear-gradient(180deg, #F8FAFC 0%, #FFFFFF 100%);
    padding: 70px 20px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1280px;
    margin: 0 auto;
  `,
  mainGrid: css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 32px;
    @media (max-width: 1024px) {
      grid-template-columns: 1fr;
    }
  `,
  
  /* CARD WRAPPER */
  columnCard: (isPro) => css`
    background: ${isPro ? '#F8FAFC' : '#FFFDF7'};
    border: 1.5px solid ${isPro ? '#E2E8F0' : '#FEF5D8'};
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 16px 40px -10px ${isPro ? 'rgba(75, 99, 140, 0.1)' : 'rgba(245, 88, 37, 0.1)'};
    display: flex;
    flex-direction: column;
  `,
  
  /* HEADER BANNER */
  cardHeader: (isPro) => css`
    background: ${isPro ? 'linear-gradient(135deg, #1E293B 0%, #4B638C 100%)' : 'linear-gradient(135deg, #DA532C 0%, #F55825 100%)'};
    padding: 24px 32px;
    color: #FFFFFF;
    text-align: center;
    position: relative;
  `,
  headerBadge: css`
    display: inline-block;
    padding: 4px 16px;
    border-radius: 99px;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(4px);
    font-size: 11.5px;
    font-weight: 800;
    letter-spacing: 0.8px;
    text-transform: uppercase;
    margin-bottom: 10px;
  `,
  headerTitle: css`
    font-size: 26px;
    font-weight: 800;
    margin: 4px 0;
    color: #FFFFFF;
    letter-spacing: -0.3px;
  `,
  headerSub: css`
    font-size: 13.5px;
    color: rgba(255, 255, 255, 0.9);
    margin: 0;
  `,

  /* CARD BODY WITH 2 COLUMNS (STEPS LEFT + BENEFITS RIGHT) */
  cardBodyGrid: css`
    display: grid;
    grid-template-columns: 1.6fr 1fr;
    gap: 20px;
    padding: 28px;
    flex: 1;
    @media (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  `,

  /* STEPS COLUMN (LEFT) */
  stepsCol: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
  `,
  stepRow: (isPro) => css`
    display: flex;
    align-items: flex-start;
    gap: 12px;
    background: #FFFFFF;
    border: 1px solid ${isPro ? '#E2E8F0' : 'rgba(252, 211, 77, 0.4)'};
    border-radius: 12px;
    padding: 12px 14px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.02);
  `,
  stepNumber: (isPro) => css`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    background: ${isPro ? '#4B638C' : '#F55825'};
    color: #FFFFFF;
    font-size: 12.5px;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  `,
  stepContent: css`
    flex: 1;
    h5 {
      font-size: 14px;
      font-weight: 800;
      color: #0F172A;
      margin: 0 0 2px 0;
    }
    p {
      font-size: 12px;
      color: #64748B;
      margin: 0;
      line-height: 1.4;
    }
  `,

  /* BENEFITS PANEL (RIGHT) */
  benefitsCol: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  benefitsBox: (isPro) => css`
    background: ${isPro ? '#F1F5F9' : '#FEF3C7'};
    border-radius: 16px;
    padding: 18px 16px;
    h4 {
      font-size: 12px;
      font-weight: 800;
      color: ${isPro ? '#4B638C' : '#92400E'};
      text-transform: uppercase;
      margin-bottom: 14px;
      letter-spacing: 0.5px;
    }
  `,
  benefitItem: (isPro) => css`
    display: flex;
    gap: 10px;
    align-items: flex-start;
    margin-bottom: 12px;
    &:last-child {
      margin-bottom: 0;
    }
    svg {
      color: ${isPro ? '#4B638C' : '#D97706'};
      flex-shrink: 0;
      margin-top: 2px;
    }
    div {
      h6 {
        font-size: 13px;
        font-weight: 700;
        color: #1E293B;
        margin: 0 0 2px 0;
      }
      p {
        font-size: 11.5px;
        color: #475569;
        margin: 0;
        line-height: 1.35;
      }
    }
  `,

  /* SPECIAL CARD (GIFT OR ROCKET) */
  specialCard: (isPro) => css`
    background: ${isPro ? 'linear-gradient(135deg, #1E293B 0%, #4B638C 100%)' : 'linear-gradient(135deg, #FFF7ED 0%, #FFEDD5 100%)'};
    border: 1.5px solid ${isPro ? '#4B638C' : '#FDBA74'};
    border-radius: 16px;
    padding: 18px 16px;
    color: ${isPro ? '#FFFFFF' : '#9A3412'};
    text-align: center;
    h5 {
      font-size: 13.5px;
      font-weight: 800;
      text-transform: uppercase;
      margin: 8px 0 4px 0;
      color: ${isPro ? '#FFFFFF' : '#9A3412'};
    }
    p {
      font-size: 12px;
      color: ${isPro ? '#E2E8F0' : '#C2410C'};
      margin: 0;
      line-height: 1.4;
    }
  `,

  /* FOOTER TICKER BAR */
  tickerBar: css`
    background: #FFFFFF;
    border-top: 1.5px solid #E2E8F0;
    padding: 16px 24px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 12px;
    text-align: center;
    @media (max-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
    }
  `,
  tickerItem: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    span {
      font-size: 11.5px;
      font-weight: 700;
      color: #334155;
    }
  `
};

const JobSeekerDualInfographic = () => {
  return (
    <div css={styles.sectionOuter}>
      <div css={styles.container}>
        <div css={styles.mainGrid}>
          
          {/* ========================================================================= */}
          {/* LEFT: STUDENTS — 3RD YEAR ONWARDS                                         */}
          {/* ========================================================================= */}
          <div css={styles.columnCard(false)}>
            
            {/* Header Banner */}
            <div css={styles.cardHeader(false)}>
              <div css={styles.headerBadge}>STUDENTS — 3RD YEAR ONWARDS</div>
              <h3 css={styles.headerTitle}>AI CAREER PATH FOR STUDENTS</h3>
              <p css={styles.headerSub}>From 3rd Year to Dream Career — Planned. Personalized. AI-Powered.</p>
            </div>

            {/* Content Grid */}
            <div css={styles.cardBodyGrid}>
              
              {/* 8 Steps Column */}
              <div css={styles.stepsCol}>
                <div css={styles.stepRow(false)}>
                  <div css={styles.stepNumber(false)}>1</div>
                  <div css={styles.stepContent}>
                    <h5>AI Career Assessment</h5>
                    <p>Discover strengths &amp; interests • Get future role recommendations</p>
                  </div>
                </div>

                <div css={styles.stepRow(false)}>
                  <div css={styles.stepNumber(false)}>2</div>
                  <div css={styles.stepContent}>
                    <h5>AI Learning Path (3rd Year Onwards)</h5>
                    <p>Personalized roadmap till placement • Domain, Tech &amp; Soft Skills</p>
                  </div>
                </div>

                <div css={styles.stepRow(false)}>
                  <div css={styles.stepNumber(false)}>3</div>
                  <div css={styles.stepContent}>
                    <h5>Skill Building &amp; Projects</h5>
                    <p>AI curated courses &amp; labs • Build portfolio that gets noticed</p>
                  </div>
                </div>

                <div css={styles.stepRow(false)}>
                  <div css={styles.stepNumber(false)}>4</div>
                  <div css={styles.stepContent}>
                    <h5>Internship Finder (AI Powered)</h5>
                    <p>Lakhs of opportunities • Matched by skills &amp; preferences</p>
                  </div>
                </div>

                <div css={styles.stepRow(false)}>
                  <div css={styles.stepNumber(false)}>5</div>
                  <div css={styles.stepContent}>
                    <h5>AI Interview Preparation</h5>
                    <p>Company-wise interview rounds • Mock Interviews with AI feedback</p>
                  </div>
                </div>

                <div css={styles.stepRow(false)}>
                  <div css={styles.stepNumber(false)}>6</div>
                  <div css={styles.stepContent}>
                    <h5>Assessments &amp; Certifications</h5>
                    <p>Technical, Aptitude &amp; Domain Assessments • Earn credentials</p>
                  </div>
                </div>

                <div css={styles.stepRow(false)}>
                  <div css={styles.stepNumber(false)}>7</div>
                  <div css={styles.stepContent}>
                    <h5>Placement Ready with AI Fitment</h5>
                    <p>AI Fitment for companies • Know placement readiness score</p>
                  </div>
                </div>

                <div css={styles.stepRow(false)}>
                  <div css={styles.stepNumber(false)}>8</div>
                  <div css={styles.stepContent}>
                    <h5>Get Placed &amp; Grow</h5>
                    <p>Connect with top recruiters • Free upskilling after placement</p>
                  </div>
                </div>
              </div>

              {/* Right Panel: Benefits & Free Box */}
              <div css={styles.benefitsCol}>
                <div css={styles.benefitsBox(false)}>
                  <h4>KEY BENEFITS FOR YOU</h4>
                  
                  <div css={styles.benefitItem(false)}>
                    <Target size={16} />
                    <div>
                      <h6>Plan Early, Stay Ahead</h6>
                      <p>Start from 3rd year &amp; build ahead of others.</p>
                    </div>
                  </div>

                  <div css={styles.benefitItem(false)}>
                    <Brain size={16} />
                    <div>
                      <h6>AI Guidance 24x7</h6>
                      <p>Your AI Mentor for every career doubt.</p>
                    </div>
                  </div>

                  <div css={styles.benefitItem(false)}>
                    <Briefcase size={16} />
                    <div>
                      <h6>Real Opportunities</h6>
                      <p>Internships, Projects &amp; Jobs from lakhs of sources.</p>
                    </div>
                  </div>

                  <div css={styles.benefitItem(false)}>
                    <ShieldCheck size={16} />
                    <div>
                      <h6>Placement Confidence</h6>
                      <p>AI prepares you for every interview &amp; test.</p>
                    </div>
                  </div>

                  <div css={styles.benefitItem(false)}>
                    <TrendingUp size={16} />
                    <div>
                      <h6>Lifelong Learning</h6>
                      <p>Stay updated. Keep growing. Always.</p>
                    </div>
                  </div>
                </div>

                {/* Gift Box Highlight */}
                <div css={styles.specialCard(false)}>
                  <Gift size={28} style={{ color: '#EA580C', margin: '0 auto' }} />
                  <h5>FREE FOR ALL STUDENTS</h5>
                  <p>Access unlimited learning, tools &amp; resources — <strong>100% Free Till You Get Placed</strong>.</p>
                </div>
              </div>

            </div>

            {/* Bottom Ticker */}
            <div css={styles.tickerBar}>
              <div css={styles.tickerItem}>
                <Award size={18} color="#F55825" />
                <span>Lakh+ Internships</span>
              </div>
              <div css={styles.tickerItem}>
                <BookOpen size={18} color="#F55825" />
                <span>10,000+ Courses</span>
              </div>
              <div css={styles.tickerItem}>
                <Brain size={18} color="#F55825" />
                <span>AI Mentor 24x7</span>
              </div>
              <div css={styles.tickerItem}>
                <CheckCircle2 size={18} color="#10B981" />
                <span>100% Free Till Placed</span>
              </div>
            </div>

          </div>

          {/* ========================================================================= */}
          {/* RIGHT: EXPERIENCED PROFESSIONALS                                          */}
          {/* ========================================================================= */}
          <div css={styles.columnCard(true)}>
            
            {/* Header Banner */}
            <div css={styles.cardHeader(true)}>
              <div css={styles.headerBadge}>EXPERIENCED PROFESSIONALS</div>
              <h3 css={styles.headerTitle}>AI POWERED JOB SEARCH</h3>
              <p css={styles.headerSub}>Search Smarter. Match Better. Get Hired Faster — Anywhere in the World.</p>
            </div>

            {/* Content Grid */}
            <div css={styles.cardBodyGrid}>
              
              {/* 8 Steps Column */}
              <div css={styles.stepsCol}>
                <div css={styles.stepRow(true)}>
                  <div css={styles.stepNumber(true)}>1</div>
                  <div css={styles.stepContent}>
                    <h5>AI Profile &amp; Resume Analysis</h5>
                    <p>AI reviews resume &amp; profile • Optimization tips to stand out</p>
                  </div>
                </div>

                <div css={styles.stepRow(true)}>
                  <div css={styles.stepNumber(true)}>2</div>
                  <div css={styles.stepContent}>
                    <h5>AI Job Search from Lakh+ Portals</h5>
                    <p>Jobs from multiple countries • Filter by role, salary &amp; mode</p>
                  </div>
                </div>

                <div css={styles.stepRow(true)}>
                  <div css={styles.stepNumber(true)}>3</div>
                  <div css={styles.stepContent}>
                    <h5>Smart Job Match (AI)</h5>
                    <p>AI matches best jobs for skills • Daily personalized recommendations</p>
                  </div>
                </div>

                <div css={styles.stepRow(true)}>
                  <div css={styles.stepNumber(true)}>4</div>
                  <div css={styles.stepContent}>
                    <h5>AI Fitment &amp; Company Insights</h5>
                    <p>Company fitment &amp; culture • Match score before you apply</p>
                  </div>
                </div>

                <div css={styles.stepRow(true)}>
                  <div css={styles.stepNumber(true)}>5</div>
                  <div css={styles.stepContent}>
                    <h5>One-Click Apply &amp; Track</h5>
                    <p>Apply to multiple jobs in 1-click • Track applications &amp; status</p>
                  </div>
                </div>

                <div css={styles.stepRow(true)}>
                  <div css={styles.stepNumber(true)}>6</div>
                  <div css={styles.stepContent}>
                    <h5>AI Interview Preparation</h5>
                    <p>Role &amp; company specific mock interviews • AI feedback</p>
                  </div>
                </div>

                <div css={styles.stepRow(true)}>
                  <div css={styles.stepNumber(true)}>7</div>
                  <div css={styles.stepContent}>
                    <h5>Skill Upgrade (After You Get Hired)</h5>
                    <p>Free access to courses • Bridge skill gaps with AI learning path</p>
                  </div>
                </div>

                <div css={styles.stepRow(true)}>
                  <div css={styles.stepNumber(true)}>8</div>
                  <div css={styles.stepContent}>
                    <h5>Grow &amp; Advance</h5>
                    <p>Upskill continuously — For Free • Get promoted &amp; grow global</p>
                  </div>
                </div>
              </div>

              {/* Right Panel: Benefits & Rocket Box */}
              <div css={styles.benefitsCol}>
                <div css={styles.benefitsBox(true)}>
                  <h4>BENEFITS FOR YOU</h4>
                  
                  <div css={styles.benefitItem(true)}>
                    <Globe size={16} />
                    <div>
                      <h6>Global Opportunities</h6>
                      <p>Search &amp; apply to lakhs of jobs from any country.</p>
                    </div>
                  </div>

                  <div css={styles.benefitItem(true)}>
                    <Briefcase size={16} />
                    <div>
                      <h6>Work Your Way</h6>
                      <p>Choose Remote, Hybrid or On-site jobs.</p>
                    </div>
                  </div>

                  <div css={styles.benefitItem(true)}>
                    <Zap size={16} />
                    <div>
                      <h6>AI That Works for You</h6>
                      <p>From search to selection — AI at every step.</p>
                    </div>
                  </div>

                  <div css={styles.benefitItem(true)}>
                    <Clock size={16} />
                    <div>
                      <h6>Save Time &amp; Effort</h6>
                      <p>Smarter search, auto match &amp; easy apply.</p>
                    </div>
                  </div>

                  <div css={styles.benefitItem(true)}>
                    <Gift size={16} />
                    <div>
                      <h6>Free Upskilling After Hire</h6>
                      <p>Get trained in all skills you need — For Free.</p>
                    </div>
                  </div>
                </div>

                {/* Rocket Card Highlight */}
                <div css={styles.specialCard(true)}>
                  <Rocket size={28} style={{ color: '#F7BC08', margin: '0 auto' }} />
                  <h5>YOUR GROWTH, OUR MISSION</h5>
                  <p>We don't just help you find a job, <strong>we help you build your future.</strong></p>
                </div>
              </div>

            </div>

            {/* Bottom Ticker */}
            <div css={styles.tickerBar}>
              <div css={styles.tickerItem}>
                <Globe size={18} color="#4B638C" />
                <span>Jobs Worldwide</span>
              </div>
              <div css={styles.tickerItem}>
                <Layers size={18} color="#4B638C" />
                <span>Multiple Portals</span>
              </div>
              <div css={styles.tickerItem}>
                <Target size={18} color="#4B638C" />
                <span>Higher Success</span>
              </div>
              <div css={styles.tickerItem}>
                <CheckCircle2 size={18} color="#10B981" />
                <span>100% Free Upskilling</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default JobSeekerDualInfographic;
