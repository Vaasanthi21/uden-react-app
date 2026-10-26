import React, { useState, useEffect } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { 
  FileText, 
  Sparkles, 
  Bot, 
  Briefcase, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  Clock, 
  Zap, 
  Target, 
  Award,
  Layers,
  MessageSquare
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../../components/logo/Logo';
import { AppRoutes } from '../../../utils/consts/routes';

const styles = {
  pageWrapper: css`
    min-height: 100vh;
    background: #FAFAFA;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    color: #1E293B;
    overflow-x: hidden;
    padding-bottom: 70px; /* Space for sticky mobile CTA */
  `,
  topBanner: css`
    background: linear-gradient(90deg, #F55825 0%, #D94616 100%);
    color: #FFFFFF;
    text-align: center;
    padding: 10px 16px;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.3px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
  `,
  header: css`
    background: #FFFFFF;
    border-bottom: 1px solid #E2E8F0;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);
  `,
  signInBtn: css`
    background: transparent;
    color: #F55825;
    border: 1.5px solid #F55825;
    padding: 8px 18px;
    border-radius: 20px;
    font-size: 13px;
    font-weight: 800;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.2s ease;

    &:hover {
      background: #FFF5F0;
    }
  `,
  heroSection: css`
    max-width: 1100px;
    margin: 0 auto;
    padding: 48px 20px 40px;
    text-align: center;

    @media (max-width: 640px) {
      padding: 32px 16px 28px;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: #FFF5F0;
    border: 1px solid #FFDECB;
    color: #F55825;
    padding: 7px 16px;
    border-radius: 20px;
    font-size: 12.5px;
    font-weight: 800;
    margin-bottom: 20px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  heroTitle: css`
    font-size: 44px;
    font-weight: 900;
    line-height: 1.18;
    color: #0F172A;
    letter-spacing: -1px;
    margin: 0 auto 18px;
    max-width: 860px;

    span {
      color: #F55825;
    }

    @media (max-width: 640px) {
      font-size: 30px;
      line-height: 1.25;
    }
  `,
  heroSubtitle: css`
    font-size: 17px;
    line-height: 1.6;
    color: #475569;
    max-width: 720px;
    margin: 0 auto 30px;
    font-weight: 500;

    @media (max-width: 640px) {
      font-size: 15px;
    }
  `,
  ctaContainer: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
  `,
  primaryBtn: css`
    background: #F55825;
    color: #FFFFFF;
    border: none;
    padding: 16px 36px;
    border-radius: 32px;
    font-size: 16px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    transition: all 0.25s ease;
    box-shadow: 0 10px 24px rgba(245, 88, 37, 0.35);

    &:hover {
      background: #D94616;
      transform: translateY(-2px);
      box-shadow: 0 14px 28px rgba(245, 88, 37, 0.45);
    }
  `,
  btnSubtext: css`
    font-size: 13px;
    color: #64748B;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 6px;
  `,
  contrastCard: css`
    max-width: 1000px;
    margin: 0 auto 50px;
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 32px;
    box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.06);

    @media (max-width: 640px) {
      padding: 24px 18px;
    }
  `,
  contrastGrid: css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-top: 20px;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      gap: 16px;
    }
  `,
  contrastColOld: css`
    background: #FEF2F2;
    border: 1px solid #FECACA;
    border-radius: 16px;
    padding: 20px;
    text-align: left;
  `,
  contrastColNew: css`
    background: #F0FDF4;
    border: 1px solid #BBF7D0;
    border-radius: 16px;
    padding: 20px;
    text-align: left;
  `,
  featuresSection: css`
    max-width: 1100px;
    margin: 0 auto 60px;
    padding: 0 20px;
  `,
  sectionHeading: css`
    text-align: center;
    margin-bottom: 36px;

    h2 {
      font-size: 32px;
      font-weight: 900;
      color: #0F172A;
      margin: 0 0 10px;
      letter-spacing: -0.5px;
    }

    p {
      font-size: 16px;
      color: #64748B;
      margin: 0;
    }

    @media (max-width: 640px) {
      h2 { font-size: 26px; }
      p { font-size: 14.5px; }
    }
  `,
  featureCardsGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 20px;
  `,
  featureCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px 22px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 0.25s ease;

    &:hover {
      border-color: #F55825;
      transform: translateY(-3px);
      box-shadow: 0 12px 24px rgba(245, 88, 37, 0.1);
    }
  `,
  iconBadge: (bg, color) => css`
    width: 48px;
    height: 48px;
    border-radius: 14px;
    background: ${bg};
    color: ${color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 18px;
  `,
  cardTitle: css`
    font-size: 18px;
    font-weight: 800;
    color: #1E293B;
    margin: 0 0 8px;
  `,
  cardHook: css`
    font-size: 12.5px;
    font-weight: 800;
    color: #F55825;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin-bottom: 8px;
    display: block;
  `,
  cardDesc: css`
    font-size: 14px;
    color: #64748B;
    line-height: 1.55;
    margin: 0 0 16px;
    flex-grow: 1;
  `,
  costTag: css`
    font-size: 12px;
    font-weight: 800;
    background: #F1F5F9;
    color: #334155;
    padding: 4px 10px;
    border-radius: 12px;
    display: inline-block;
    align-self: flex-start;
  `,
  howItWorksBox: css`
    max-width: 1000px;
    margin: 0 auto 60px;
    background: linear-gradient(135deg, #FFFDF7 0%, #FFFFFF 100%);
    border: 1.5px solid #FEF5D8;
    border-radius: 24px;
    padding: 36px 28px;
    text-align: center;
  `,
  stepsGrid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 20px;
    margin-top: 28px;
  `,
  stepCard: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 18px;
    padding: 24px 18px;
    text-align: left;
  `,
  stepNum: css`
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: #F55825;
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 900;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
  `,
  pricingSection: css`
    max-width: 960px;
    margin: 0 auto 60px;
    padding: 0 20px;
  `,
  pricingCardsGrid: css`
    display: grid;
    grid-template-columns: 1fr 1.1fr;
    gap: 24px;
    align-items: center;

    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  `,
  pricingCard: (featured) => css`
    background: #FFFFFF;
    border: ${featured ? '2.5px solid #F55825' : '1.5px solid #E2E8F0'};
    border-radius: 24px;
    padding: ${featured ? '36px 30px' : '30px 24px'};
    box-shadow: ${featured ? '0 16px 40px rgba(245, 88, 37, 0.16)' : 'none'};
    position: relative;
    text-align: left;
  `,
  popularRibbon: css`
    position: absolute;
    top: -14px;
    right: 24px;
    background: #F55825;
    color: #FFFFFF;
    font-size: 11px;
    font-weight: 900;
    padding: 5px 14px;
    border-radius: 20px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
  `,
  faqSection: css`
    max-width: 800px;
    margin: 0 auto 60px;
    padding: 0 20px;
  `,
  faqItem: css`
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 16px;
    margin-bottom: 12px;
    overflow: hidden;
  `,
  faqQuestion: css`
    padding: 18px 22px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    font-size: 15.5px;
    font-weight: 800;
    color: #1E293B;
  `,
  faqAnswer: css`
    padding: 0 22px 18px;
    font-size: 14.5px;
    color: #64748B;
    line-height: 1.6;
  `,
  stickyMobileCta: css`
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #FFFFFF;
    border-top: 1px solid #E2E8F0;
    padding: 12px 20px;
    display: none;
    align-items: center;
    justify-content: space-between;
    z-index: 1000;
    box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.08);

    @media (max-width: 768px) {
      display: flex;
    }
  `,
  footer: css`
    background: #0F172A;
    color: #94A3B8;
    padding: 36px 20px;
    text-align: center;
    font-size: 13.5px;

    a {
      color: #94A3B8;
      text-decoration: none;
      margin: 0 10px;
      font-weight: 600;

      &:hover {
        color: #FFFFFF;
        text-decoration: underline;
      }
    }
  `
};

export default function StudentStart() {
  const [openFaq, setOpenFaq] = useState(null);

  // Set noindex until UDEN officially launches ads per brief
  useEffect(() => {
    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement('meta');
      meta.name = 'robots';
      document.head.appendChild(meta);
    }
    meta.content = 'noindex, nofollow';

    // Page title
    document.title = 'Will Your Resume Pass the ATS Check? Free ATS Score & AI Career Prep | UDEN';

    return () => {
      meta.content = 'index, follow';
    };
  }, []);

  const handleCTAClick = (location) => {
    // 1. Push event to GTM for ad & conversion tracking
    try {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'cta_click',
          button_location: location
        });
      }
    } catch (e) {
      console.log('GTM track error:', e);
    }

    // 2. Redirect to Bubble login carrying all incoming UTMs and fbclid
    const search = window.location.search;
    window.location.href = `https://cps.uden.tech/log_in${search}`;
  };

  const faqs = [
    {
      q: 'Is it really free to start?',
      a: 'Yes, 100%! When you sign in with Google or LinkedIn, your account immediately receives 70 free starter points. You can use these to run multiple ATS resume checks and consult the 24x7 AI career assistant without entering any credit card.'
    },
    {
      q: 'What happens when my free points finish?',
      a: 'Free points give you full access to diagnose your resume and explore features. When they finish, you can upgrade to the ₹200/month launch plan for full AI mock interviews, unlimited resume template exports, and Job Agent Pro matching.'
    },
    {
      q: 'What makes UDEN’s Resume Builder & Templates different?',
      a: 'Unlike generic online templates that confuse ATS parsers with tables and graphics, UDEN’s templates are built strictly according to modern corporate ATS standards. You can customize them as you wish, and our AI will suggest bullet point improvements using the STAR method.'
    },
    {
      q: 'What is Job Agent Pro?',
      a: 'Job Agent Pro is your autonomous AI placement assistant. Instead of manually searching through dozens of job boards, it monitors verified corporate drives, matches your skill radar with role requirements, and fast-tracks you to recruiters with 48-hour shortlist SLAs.'
    },
    {
      q: 'Can I try an AI Mock Interview?',
      a: 'AI mock interviews simulate real-world technical and HR rounds with instant voice and response analytics. AI mock interviews are unlocked as part of the ₹200 launch plan.'
    },
    {
      q: 'Is my resume and personal data safe?',
      a: 'Absolutely. Your resume and personal information are strictly encrypted and used solely to generate your career insights. We do not sell student data to third parties.'
    }
  ];

  return (
    <div css={styles.pageWrapper}>
      {/* Top Launch Offer Banner */}
      <div css={styles.topBanner}>
        <Sparkles size={16} />
        Special Student Launch Offer: Get 70 Free Credits on Sign-Up! ₹200/mo plan ends 14 Nov.
      </div>

      {/* Minimalist Header (Logo + Direct Sign-In Only) */}
      <header css={styles.header}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Logo style={{ height: '36px' }} />
        </div>
        <button css={styles.signInBtn} onClick={() => handleCTAClick('header_signin')}>
          Sign In to Portal
        </button>
      </header>

      {/* Main Hero Section */}
      <section css={styles.heroSection}>
        <div css={styles.badgeTag}>
          <Zap size={14} /> 70 Free Credits Added on Sign Up • No Card Needed
        </div>

        <h1 css={styles.heroTitle}>
          Will Your Resume Pass the <span>ATS Filter</span>?
        </h1>

        <p css={styles.heroSubtitle}>
          75% of student resumes are rejected by automated company software before a recruiter ever reads them. 
          Upload your resume, discover where it falls short, and unlock AI tools engineered to help you crack placement drives.
        </p>

        <div css={styles.ctaContainer}>
          <button css={styles.primaryBtn} onClick={() => handleCTAClick('hero')}>
            Check My Resume Free
            <ArrowRight size={18} />
          </button>
          <div css={styles.btnSubtext}>
            <ShieldCheck size={14} color="#10B981" />
            Sign in with Google • Takes 5 seconds • 100% Free to Start
          </div>
        </div>

        <div style={{ fontSize: '12.5px', color: '#64748B', fontWeight: 700 }}>
          ⭐ Made specifically for college students, freshers, and jobseekers in India
        </div>
      </section>

      {/* The Story & Contrast: Traditional Way vs. UDEN AI */}
      <div css={styles.contrastCard}>
        <h3 style={{ fontSize: '20px', fontWeight: 900, textAlign: 'center', margin: '0 0 8px' }}>
          Stop Sending Resumes Into A Black Hole
        </h3>
        <p style={{ textAlign: 'center', color: '#64748B', fontSize: '14.5px', margin: 0 }}>
          Campus placement competition is brutal. Here is how UDEN levels the playing field for you:
        </p>

        <div css={styles.contrastGrid}>
          <div css={styles.contrastColOld}>
            <div style={{ color: '#DC2626', fontWeight: 800, fontSize: '14px', marginBottom: '8px' }}>
              ❌ The Old, Stressful Way
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#7F1D1D', fontSize: '13.5px', lineHeight: 1.7 }}>
              <li>Applying to 50+ companies with the same generic PDF.</li>
              <li>Filtered out by automated ATS bots within seconds.</li>
              <li>Stuck on interview prep with no feedback or real practice.</li>
              <li>Zero visibility into why recruiters rejected your profile.</li>
            </ul>
          </div>

          <div css={styles.contrastColNew}>
            <div style={{ color: '#16A34A', fontWeight: 800, fontSize: '14px', marginBottom: '8px' }}>
              ✅ The UDEN AI Advantage
            </div>
            <ul style={{ margin: 0, paddingLeft: '18px', color: '#14532D', fontSize: '13.5px', lineHeight: 1.7 }}>
              <li><strong>Instant ATS Score:</strong> Know exactly where your resume lacks before applying.</li>
              <li><strong>Custom Templates:</strong> Build clean, recruiter-approved resumes effortlessly.</li>
              <li><strong>Job Agent Pro:</strong> Automated job discovery matching your exact skills.</li>
              <li><strong>24x7 AI Assistant:</strong> A personal placement mentor available round the clock.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* The 4 Power Pillars (Highlighted Features) */}
      <section css={styles.featuresSection}>
        <div css={styles.sectionHeading}>
          <h2>Everything You Need To Secure Your Offer</h2>
          <p>Four integrated AI modules built to turn your preparation into confirmed shortlists.</p>
        </div>

        <div css={styles.featureCardsGrid}>
          {/* Card 1: ATS Resume Analysis */}
          <div css={styles.featureCard}>
            <div>
              <div css={styles.iconBadge('#FFF5F0', '#F55825')}>
                <FileText size={24} />
              </div>
              <span css={styles.cardHook}>Instant Diagnostic</span>
              <h4 css={styles.cardTitle}>ATS Resume Analysis</h4>
              <p css={styles.cardDesc}>
                Upload your resume and get an instant score (0–100). Identify missing keywords, formatting errors, and weak bullet points tailored to target job roles.
              </p>
            </div>
            <div css={styles.costTag}>Uses 5 Free Points / Scan</div>
          </div>

          {/* Card 2: AI Resume Builder & Templates */}
          <div css={styles.featureCard}>
            <div>
              <div css={styles.iconBadge('#EFF6FF', '#2563EB')}>
                <Layers size={24} />
              </div>
              <span css={styles.cardHook}>Build As You Wish</span>
              <h4 css={styles.cardTitle}>Pro Resume Templates</h4>
              <p css={styles.cardDesc}>
                Choose from modern, ATS-proof resume templates. Customize sections, let AI rewrite your achievements with high-impact action verbs, and export in 1 click.
              </p>
            </div>
            <div css={styles.costTag}>Included with Plan</div>
          </div>

          {/* Card 3: Job Agent Pro */}
          <div css={styles.featureCard}>
            <div>
              <div css={styles.iconBadge('#F5F3FF', '#7C3AED')}>
                <Briefcase size={24} />
              </div>
              <span css={styles.cardHook}>Automated Placement</span>
              <h4 css={styles.cardTitle}>Job Agent Pro</h4>
              <p css={styles.cardDesc}>
                Your autonomous AI scout that scans 100k+ active tech and corporate openings, connects with 150+ hiring partners, and matches roles directly to your skill radar.
              </p>
            </div>
            <div css={styles.costTag}>Placement Automation</div>
          </div>

          {/* Card 4: 24x7 AI Career Assistant */}
          <div css={styles.featureCard}>
            <div>
              <div css={styles.iconBadge('#ECFDF5', '#059669')}>
                <MessageSquare size={24} />
              </div>
              <span css={styles.cardHook}>Like ChatGPT For Careers</span>
              <h4 css={styles.cardTitle}>24x7 AI Assistant</h4>
              <p css={styles.cardDesc}>
                Ask anything! Get tailored coding interview questions, project explanation scripts, company-specific preparation guides, and real-time placement mentorship.
              </p>
            </div>
            <div css={styles.costTag}>Uses 1 Free Point / Question</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <div css={styles.howItWorksBox}>
        <h3 style={{ fontSize: '24px', fontWeight: 900, margin: '0 0 8px' }}>
          How It Works in 3 Simple Steps
        </h3>
        <p style={{ color: '#64748B', fontSize: '15px', margin: 0 }}>
          Go from zero to interview-ready in under 5 minutes.
        </p>

        <div css={styles.stepsGrid}>
          <div css={styles.stepCard}>
            <div css={styles.stepNum}>1</div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 6px' }}>Sign in with Google</h4>
            <p style={{ fontSize: '13.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
              Your account instantly starts with <strong>70 free credits</strong>. No payment details required.
            </p>
          </div>

          <div css={styles.stepCard}>
            <div css={styles.stepNum}>2</div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 6px' }}>Scan or Build Resume</h4>
            <p style={{ fontSize: '13.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
              Upload your existing resume for an ATS score, or build a new one with our pro templates.
            </p>
          </div>

          <div css={styles.stepCard}>
            <div css={styles.stepNum}>3</div>
            <h4 style={{ fontSize: '16px', fontWeight: 800, margin: '0 0 6px' }}>Practice &amp; Get Hired</h4>
            <p style={{ fontSize: '13.5px', color: '#64748B', margin: 0, lineHeight: 1.5 }}>
              Ask the AI assistant interview questions, take an AI mock interview, and let Job Agent Pro find verified openings.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing & 14 Nov Countdown */}
      <section css={styles.pricingSection}>
        <div css={styles.sectionHeading}>
          <h2>Simple, Transparent Student Pricing</h2>
          <p>Start free today. Upgrade when you are ready for real mock interviews.</p>
        </div>

        <div css={styles.pricingCardsGrid}>
          {/* Free Tier */}
          <div css={styles.pricingCard(false)}>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#64748B', textTransform: 'uppercase' }}>
              Free Starter
            </div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: '#0F172A', margin: '8px 0 16px' }}>
              ₹0 <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>/ forever</span>
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', fontSize: '14px', lineHeight: 2.2 }}>
              <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> 70 Free Starter Points</li>
              <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Up to 14 ATS Resume Scans</li>
              <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> 70 AI Career Assistant Queries</li>
              <li><CheckCircle2 size={16} color="#10B981" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Valid for 30 Days</li>
            </ul>
            <button 
              css={styles.primaryBtn} 
              style={{ width: '100%', background: '#F1F5F9', color: '#0F172A', boxShadow: 'none' }}
              onClick={() => handleCTAClick('pricing_free')}
            >
              Get 70 Free Points
            </button>
          </div>

          {/* Launch Offer Tier */}
          <div css={styles.pricingCard(true)}>
            <div css={styles.popularRibbon}>Launch Offer: 60% OFF</div>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#F55825', textTransform: 'uppercase' }}>
              Student Placement Pass
            </div>
            <div style={{ fontSize: '36px', fontWeight: 900, color: '#0F172A', margin: '8px 0 4px' }}>
              ₹200 <span style={{ fontSize: '14px', color: '#64748B', fontWeight: 600 }}>/ month</span>
            </div>
            <div style={{ fontSize: '12px', color: '#DC2626', fontWeight: 800, marginBottom: '16px' }}>
              ⏰ Offer ends 14 Nov. Switches to ₹500 on 15 Nov!
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', fontSize: '14px', lineHeight: 2.2 }}>
              <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <strong>1 Full AI Mock Interview</strong> + Report</li>
              <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> <strong>500 Bonus Points</strong></li>
              <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> AI Resume Builder &amp; Cover Letter Creator</li>
              <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Job Agent Pro Automated Matching</li>
              <li><CheckCircle2 size={16} color="#F55825" style={{ verticalAlign: 'middle', marginRight: '8px' }} /> Personalized Learning Path Generator</li>
            </ul>
            <button 
              css={styles.primaryBtn} 
              style={{ width: '100%' }}
              onClick={() => handleCTAClick('pricing_paid')}
            >
              Start for ₹200 Today
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Placement FAQ */}
      <section css={styles.faqSection}>
        <div css={styles.sectionHeading}>
          <h2>Frequently Asked Questions</h2>
          <p>Everything you need to know about points, plans, and ATS checks.</p>
        </div>

        {faqs.map((faq, idx) => (
          <div key={idx} css={styles.faqItem}>
            <div 
              css={styles.faqQuestion} 
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <span>{faq.q}</span>
              {openFaq === idx ? <ChevronUp size={18} color="#F55825" /> : <ChevronDown size={18} color="#94A3B8" />}
            </div>
            {openFaq === idx && (
              <div css={styles.faqAnswer}>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Sticky Bottom Bar on Mobile */}
      <div css={styles.stickyMobileCta}>
        <div>
          <div style={{ fontSize: '13px', fontWeight: 900, color: '#0F172A' }}>70 Free Credits</div>
          <div style={{ fontSize: '11px', color: '#16A34A', fontWeight: 700 }}>No card needed</div>
        </div>
        <button 
          css={styles.primaryBtn} 
          style={{ padding: '10px 20px', fontSize: '13.5px' }}
          onClick={() => handleCTAClick('sticky_mobile')}
        >
          Check My Resume
          <ArrowRight size={15} />
        </button>
      </div>

      {/* Compliant Footer */}
      <footer css={styles.footer}>
        <p style={{ margin: '0 0 12px', fontWeight: 700, color: '#E2E8F0' }}>
          UDEN — Unified Development and Employment Network
        </p>
        <p style={{ margin: '0 0 16px', fontSize: '12.5px' }}>
          Operated by Digverve Solutions Pvt. Ltd. &copy; 2026. All rights reserved.
        </p>
        <div>
          <Link to={AppRoutes.PRIVACY}>Privacy Policy</Link>
          <span>•</span>
          <Link to={AppRoutes.TERMS}>Terms &amp; Conditions</Link>
          <span>•</span>
          <Link to="/contact-us">Contact Support</Link>
        </div>
      </footer>
    </div>
  );
}
