import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Star, GraduationCap, Video } from 'lucide-react';

const styles = {
  section: css`
    padding: 70px 20px;
    background: #FFFFFF;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1240px;
    margin: 0 auto;
  `,
  header: css`
    text-align: center;
    margin-bottom: 40px;
  `,
  mainTitle: css`
    font-size: 42px;
    font-weight: 900;
    color: #F55825;
    margin: 0 0 24px 0;
    letter-spacing: -0.5px;
  `,
  tabRow: css`
    display: flex;
    justify-content: center;
    gap: 16px;
  `,
  tabBtn: (active) => css`
    padding: 10px 28px;
    border-radius: 24px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    border: none;
    background: ${active ? '#F55825' : '#A3A3A3'};
    color: #FFFFFF;
    box-shadow: ${active ? '0 6px 18px rgba(245, 88, 37, 0.35)' : 'none'};
    transition: all 0.25s ease;

    &:hover {
      opacity: 0.9;
      transform: translateY(-1px);
    }
  `,

  /* FLOWCHART DIAGRAM WRAPPER */
  diagramWrapper: css`
    display: grid;
    grid-template-columns: 280px 1fr;
    gap: 40px;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 80px;

    @media (max-width: 980px) {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  `,

  /* LEFT PHONE MOCKUP */
  phoneCol: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
  `,
  phoneFrame: css`
    width: 220px;
    height: 380px;
    background: #FFFFFF;
    border: 10px solid #1E293B;
    border-radius: 36px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 16px;
    position: relative;
    box-sizing: border-box;

    /* Top Speaker Notch */
    &::before {
      content: '';
      position: absolute;
      top: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 50px;
      height: 5px;
      background: #1E293B;
      border-radius: 4px;
    }
  `,
  phoneHeaderLogo: css`
    text-align: center;
    margin-top: 10px;

    .logoMain {
      font-size: 24px;
      font-weight: 900;
      color: #F55825;
      letter-spacing: -0.5px;
    }
    .logoSub {
      font-size: 9px;
      color: #64748B;
      font-weight: 700;
      letter-spacing: 0.5px;
    }
  `,
  phoneCardOption: css`
    background: #F8FAFC;
    border: 1.5px solid #E2E8F0;
    border-radius: 14px;
    padding: 10px 12px;
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 10px;

    .iconBox {
      width: 32px;
      height: 32px;
      border-radius: 8px;
      border: 1px solid #CBD5E1;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #475569;
    }
    span {
      font-size: 13px;
      font-weight: 800;
      color: #334155;
    }
  `,
  registerBtn: css`
    width: 100%;
    background: #F55825;
    color: #FFFFFF;
    border: none;
    border-radius: 16px;
    padding: 10px 0;
    font-weight: 800;
    font-size: 13px;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(245, 88, 37, 0.3);
    position: relative;
  `,
  mouseCursorOverlay: css`
    position: absolute;
    right: 12px;
    bottom: -6px;
    width: 22px;
    height: 22px;
    pointer-events: none;
  `,
  phoneFooterText: css`
    text-align: center;
    margin-top: 16px;

    h4 {
      font-size: 16px;
      font-weight: 900;
      color: #1E293B;
      margin: 0 0 6px 0;
      span {
        color: #F55825;
      }
    }
    .pillsRow {
      display: flex;
      gap: 6px;
      justify-content: center;
      font-size: 11px;
      font-weight: 700;
      color: #64748B;
    }
  `,
  arrowRightEntry: css`
    position: absolute;
    right: -36px;
    top: 50%;
    transform: translateY(-50%);
    color: #F59E0B;
    font-size: 28px;

    @media (max-width: 980px) {
      display: none;
    }
  `,

  /* LOOP TRACK CONTAINER & FLOATING CARDS */
  loopTrackContainer: css`
    position: relative;
    width: 100%;
    max-width: 780px;
    height: 420px;
    margin: 0 auto;

    @media (max-width: 980px) {
      height: auto;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  `,
  loopTrackBorder: css`
    position: absolute;
    top: 50px;
    left: 80px;
    right: 80px;
    bottom: 50px;
    border: 4px solid #F59E0B;
    border-radius: 40px;
    pointer-events: none;

    @media (max-width: 980px) {
      display: none;
    }
  `,
  floatingCardWrapper: (pos) => css`
    position: absolute;
    z-index: 2;
    ${pos}

    @media (max-width: 980px) {
      position: relative;
      top: auto !important;
      left: auto !important;
      right: auto !important;
      bottom: auto !important;
      transform: none !important;
      width: 100% !important;
    }
  `,
  trackCardBox: css`
    background: #F4F4F5;
    border-radius: 18px;
    padding: 16px 22px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
    max-width: 270px;
    text-align: center;
    box-sizing: border-box;

    h4 {
      font-size: 15px;
      font-weight: 800;
      color: #334155;
      margin: 0;
      line-height: 1.35;
    }
  `,
  trackSubtext: css`
    font-size: 12px;
    font-weight: 700;
    color: #94A3B8;
    margin-top: 6px;
    text-align: center;
  `,

  /* SECTION 2: SKILL GAP & INTERVIEW PREP DUAL CARDS */
  featureDualGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    margin-top: 50px;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
    }
  `,
  featureCard: css`
    background: #FFFFFF;
    border: 1.5px solid #F1F5F9;
    border-radius: 24px;
    padding: 32px 24px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    text-align: center;
  `,
  featureTitle: css`
    font-size: 32px;
    font-weight: 900;
    color: #F55825;
    margin: 0 0 28px 0;
  `,

  /* RADAR CHART STYLING */
  radarBox: css`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  radarLegend: css`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 16px;
    font-size: 13px;
    font-weight: 700;
    color: #475569;

    .legendItem {
      display: flex;
      align-items: center;
      gap: 6px;
    }
    .boxBlue {
      width: 14px;
      height: 14px;
      background: rgba(59, 130, 246, 0.4);
      border: 1.5px solid #3B82F6;
    }
    .boxOrange {
      width: 14px;
      height: 14px;
      background: rgba(249, 115, 22, 0.2);
      border: 1.5px solid #F97316;
    }
  `,

  /* INTERVIEW WIDGET STYLING */
  interviewBox: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
  `,
  questionBanner: css`
    background: #2563EB;
    color: #FFFFFF;
    border-radius: 12px;
    padding: 12px 20px;
    font-size: 13px;
    font-weight: 700;
    width: 100%;
    box-sizing: border-box;
    text-align: left;
  `,
  videoViewport: css`
    width: 100%;
    height: 200px;
    background: #1E293B;
    border-radius: 16px;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #FFFFFF;
  `,
  recBadge: css`
    position: absolute;
    top: 12px;
    right: 16px;
    display: flex;
    align-items: center;
    gap: 6px;
    font-size: 11px;
    font-weight: 800;
    color: #EF4444;

    .dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #EF4444;
    }
  `,
  avatarOutline: css`
    width: 90px;
    height: 90px;
    border-radius: 50%;
    background: #334155;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  endBtn: css`
    position: absolute;
    bottom: 12px;
    left: 16px;
    background: #2563EB;
    color: #FFFFFF;
    border: none;
    border-radius: 18px;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 800;
    cursor: pointer;
  `,
  aiFeedbackCard: css`
    width: 100%;
    background: #F8FAFC;
    border: 1.5px solid #E2E8F0;
    border-radius: 16px;
    padding: 16px 20px;
    text-align: left;
    box-sizing: border-box;

    .feedbackHeader {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 10px;
    }
    .aiBadge {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background: #2563EB;
      color: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      font-weight: 900;
    }
    ul {
      margin: 0 0 12px 0;
      padding-left: 16px;
      font-size: 12.5px;
      color: #475569;
      line-height: 1.6;
      font-weight: 600;
    }
    .progressRow {
      margin-top: 10px;
      font-size: 12px;
      font-weight: 700;
      color: #334155;
    }
    .barTrack {
      width: 100%;
      height: 8px;
      background: #E2E8F0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: 4px;
    }
    .barFill {
      width: 65%;
      height: 100%;
      background: #2563EB;
      border-radius: 4px;
    }
  `
};

export default function HowItWorks() {
  const [activeTab, setActiveTab] = useState('jobseekers');

  const jobseekersData = [
    {
      title: 'Technical & behavirol Assessment',
      sub: 'Holistic | Certified'
    },
    {
      title: 'Upskilling based on demand and assessed skill gap',
      sub: 'Live classes | Curated Programs'
    },
    {
      title: 'Profile improves with continuous upskilling',
      sub: 'Holistic | Certified'
    },
    {
      title: 'Mentorship & guidance for best fitment',
      sub: 'Live Classes | 1-on-1'
    },
    {
      title: 'Suggest & shortlist based on best-fit match',
      sub: 'AI Powered | Maximize Reach'
    },
    {
      title: 'Companies get right Talent at the right cost',
      sub: 'Best fit Match | Global Talent'
    }
  ];

  const companiesData = [
    {
      title: 'Post your job requirements',
      sub: 'Tech Stack | Experience Level'
    },
    {
      title: 'Platform identifies Best-fit and near fit profiles',
      sub: 'Best fit match | Global Talent'
    },
    {
      title: 'Shortlist Talent and initiate the hiring process',
      sub: 'Pool | Pre Assessed'
    },
    {
      title: 'Work with UDEN to design curated programs',
      sub: 'Customized | Visibility'
    },
    {
      title: 'Profiles are shortlisted and upskilled',
      sub: 'Live Classes | 1-on-1'
    },
    {
      title: 'Upskilled resources ready for hiring',
      sub: 'Holistic | Certified'
    }
  ];

  const activeData = activeTab === 'jobseekers' ? jobseekersData : companiesData;

  return (
    <section css={styles.section} id="how-it-works">
      <div css={styles.container}>
        {/* Header */}
        <div css={styles.header}>
          <h2 css={styles.mainTitle}>How it works</h2>
          <div css={styles.tabRow}>
            <button 
              css={styles.tabBtn(activeTab === 'jobseekers')}
              onClick={() => setActiveTab('jobseekers')}
            >
              Job Seekers
            </button>
            <button 
              css={styles.tabBtn(activeTab === 'companies')}
              onClick={() => setActiveTab('companies')}
            >
              Companies
            </button>
          </div>
        </div>

        {/* 1. SECTION: FLOWCHART DIAGRAM WITH PHONE & GOLDEN LOOP */}
        <div css={styles.diagramWrapper}>
          {/* Left Column: Phone Mockup */}
          <div css={styles.phoneCol}>
            <div css={styles.phoneFrame}>
              <div css={styles.phoneHeaderLogo}>
                <div className="logoMain">UDEn</div>
                <div className="logoSub">Assess • Upskill • Recruit</div>
              </div>

              {activeTab === 'jobseekers' ? (
                <div>
                  <div css={styles.phoneCardOption}>
                    <div className="iconBox"><Star size={16} /></div>
                    <span>Exp. Talent</span>
                  </div>
                  <div css={styles.phoneCardOption}>
                    <div className="iconBox"><GraduationCap size={16} /></div>
                    <span>Student</span>
                  </div>
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '32px', fontWeight: 900, color: '#F55825' }}>UDEn</div>
                </div>
              )}

              <div style={{ position: 'relative' }}>
                <button css={styles.registerBtn}>Register</button>
                {/* Pointer cursor icon */}
                <svg css={styles.mouseCursorOverlay} viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2">
                  <path d="M3 3l7 18 3-7 7-3L3 3z" fill="#000000" />
                </svg>
              </div>
            </div>

            <div css={styles.phoneFooterText}>
              <h4>Register on <span>UDEN</span></h4>
              <div className="pillsRow">
                <span>Profile</span> | <span>Interests</span> | <span>Aspirations</span>
              </div>
            </div>

            <div css={styles.arrowRightEntry}>►</div>
          </div>

          {/* Right Column: Golden Loop Track & Floating Cards */}
          <div css={styles.loopTrackContainer}>
            {/* The Golden Rounded Rectangular Loop Line */}
            <div css={styles.loopTrackBorder} />

            {/* 1. Middle Left: Step 1 (Entry Card from Arrow) */}
            <div css={styles.floatingCardWrapper("top: 50%; left: 0px; transform: translateY(-50%);")}>
              <div css={styles.trackCardBox}>
                <h4>{activeData[0].title}</h4>
              </div>
              <div css={styles.trackSubtext}>{activeData[0].sub}</div>
            </div>

            {/* 2. Top Left: Step 2 */}
            <div css={styles.floatingCardWrapper("top: 20px; left: 100px;")}>
              <div css={styles.trackCardBox}>
                <h4>{activeData[1].title}</h4>
              </div>
              <div css={styles.trackSubtext}>{activeData[1].sub}</div>
            </div>

            {/* 3. Top Right: Step 3 */}
            <div css={styles.floatingCardWrapper("top: 20px; right: 40px;")}>
              <div css={styles.trackCardBox}>
                <h4>{activeData[2].title}</h4>
              </div>
              <div css={styles.trackSubtext}>{activeData[2].sub}</div>
            </div>

            {/* 4. Middle Right: Step 4 */}
            <div css={styles.floatingCardWrapper("top: 50%; right: 0px; transform: translateY(-50%);")}>
              <div css={styles.trackCardBox}>
                <h4>{activeData[3].title}</h4>
              </div>
              <div css={styles.trackSubtext}>{activeData[3].sub}</div>
            </div>

            {/* 5. Bottom Right: Step 5 */}
            <div css={styles.floatingCardWrapper("bottom: 20px; right: 40px;")}>
              <div css={styles.trackCardBox}>
                <h4>{activeData[4].title}</h4>
              </div>
              <div css={styles.trackSubtext}>{activeData[4].sub}</div>
            </div>

            {/* 6. Bottom Left: Step 6 */}
            <div css={styles.floatingCardWrapper("bottom: 20px; left: 100px;")}>
              <div css={styles.trackCardBox}>
                <h4>{activeData[5].title}</h4>
              </div>
              <div css={styles.trackSubtext}>{activeData[5].sub}</div>
            </div>
          </div>
        </div>

        {/* 2. SECTION: SKILL GAP ANALYSIS & INTERVIEW PREP ASSISTANT */}
        <div css={styles.featureDualGrid}>
          {/* Card 1: Skill Gap Analysis */}
          <div css={styles.featureCard}>
            <h3 css={styles.featureTitle}>Skill Gap Analysis</h3>
            <div css={styles.radarBox}>
              <svg width="320" height="300" viewBox="0 0 400 380">
                {/* Background Radar Web Circles */}
                <polygon points="200,40 330,90 370,210 300,320 200,350 100,320 30,210 70,90" fill="#FEF9C3" stroke="#FDE047" strokeWidth="1" opacity="0.6" />
                <polygon points="200,80 290,120 320,200 270,280 200,300 130,280 80,200 110,120" fill="none" stroke="#CBD5E1" strokeWidth="1" />
                <polygon points="200,120 250,150 270,200 240,240 200,250 160,240 130,200 150,150" fill="none" stroke="#E2E8F0" strokeWidth="1" />

                {/* Radar Axis Lines */}
                <line x1="200" y1="200" x2="200" y2="40" stroke="#CBD5E1" strokeWidth="1" />
                <line x1="200" y1="200" x2="330" y2="90" stroke="#CBD5E1" strokeWidth="1" />
                <line x1="200" y1="200" x2="370" y2="210" stroke="#CBD5E1" strokeWidth="1" />
                <line x1="200" y1="200" x2="300" y2="320" stroke="#CBD5E1" strokeWidth="1" />
                <line x1="200" y1="200" x2="200" y2="350" stroke="#CBD5E1" strokeWidth="1" />
                <line x1="200" y1="200" x2="100" y2="320" stroke="#CBD5E1" strokeWidth="1" />
                <line x1="200" y1="200" x2="30" y2="210" stroke="#CBD5E1" strokeWidth="1" />
                <line x1="200" y1="200" x2="70" y2="90" stroke="#CBD5E1" strokeWidth="1" />

                {/* Orange/Required Skills Polygon */}
                <polygon points="200,65 315,105 340,210 280,295 200,315 110,295 55,210 85,105" fill="rgba(249, 115, 22, 0.25)" stroke="#F97316" strokeWidth="2.5" />

                {/* Blue/Current Skills Polygon */}
                <polygon points="200,105 270,135 300,210 240,265 200,275 140,265 95,210 125,135" fill="rgba(59, 130, 246, 0.45)" stroke="#3B82F6" strokeWidth="2.5" />

                {/* Axis Labels */}
                <text x="200" y="25" textAnchor="middle" fill="#334155" fontSize="13" fontWeight="800">Python</text>
                <text x="345" y="80" textAnchor="start" fill="#334155" fontSize="13" fontWeight="800">Data Analysis</text>
                <text x="380" y="215" textAnchor="start" fill="#334155" fontSize="13" fontWeight="800">React</text>
                <text x="315" y="340" textAnchor="start" fill="#334155" fontSize="13" fontWeight="800">Testing</text>
                <text x="200" y="370" textAnchor="middle" fill="#334155" fontSize="13" fontWeight="800">SQL</text>
                <text x="85" y="340" textAnchor="end" fill="#334155" fontSize="13" fontWeight="800">Cloud Services</text>
                <text x="20" y="215" textAnchor="end" fill="#334155" fontSize="13" fontWeight="800">JavaScript</text>
                <text x="55" y="80" textAnchor="end" fill="#334155" fontSize="13" fontWeight="800">Machine Learning</text>
              </svg>

              <div css={styles.radarLegend}>
                <div className="legendItem">
                  <div className="boxBlue" /> Current Skills
                </div>
                <div className="legendItem">
                  <div className="boxOrange" /> Required Skills
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Interview Prep Assistant */}
          <div css={styles.featureCard}>
            <h3 css={styles.featureTitle}>Interview Prep Assistant</h3>
            <div css={styles.interviewBox}>
              <div css={styles.questionBanner}>
                Q: Tell me about a time when you had to handle a difficult situation at work.
              </div>

              <div css={styles.videoViewport}>
                <div css={styles.recBadge}>
                  <div className="dot" /> REC 03:45
                </div>
                <div css={styles.avatarOutline}>
                  <Video size={40} color="#94A3B8" />
                </div>
                <button css={styles.endBtn}>End Interview &amp; Get Feedback</button>
              </div>

              <div css={styles.aiFeedbackCard}>
                <div className="feedbackHeader">
                  <div className="aiBadge">AI</div>
                  AI Feedback
                </div>
                <ul>
                  <li>• Speaking pace is good</li>
                  <li>• Maintain more eye contact</li>
                  <li>• Good explanation of skills</li>
                </ul>
                <div className="progressRow">
                  Confidence: 65%
                  <div className="barTrack">
                    <div className="barFill" />
                  </div>
                </div>
                <div style={{ marginTop: '12px', fontSize: '11.5px', color: '#64748B', fontStyle: 'italic' }}>
                  <strong>Interview Notes:</strong> Strong on communication • Could improve specific examples
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
