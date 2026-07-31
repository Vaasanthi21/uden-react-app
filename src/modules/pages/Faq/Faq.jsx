import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ChevronDown, ChevronUp, Search, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/consts/routes';

let FaqSupportDeskImage;
try {
  FaqSupportDeskImage = require('../../../utils/consts/uploaded_illustrations').FaqSupportDeskImage;
} catch (e) {
  FaqSupportDeskImage = null;
}

const faqItems = [
  {
    id: 'q1',
    question: 'What is UDEN.tech?',
    answer: 'UDEN (Unified Development and Employment Network) is an AI-powered career readiness and placement platform that helps Tier 2 and Tier 3 college students in India get job-ready, upskill, and get placed — while helping colleges, employers, and government bodies build placement pipelines.'
  },
  {
    id: 'q2',
    question: 'Is UDEN.tech free for students?',
    answer: 'Creating a candidate profile, searching 100,000+ aggregated jobs, and attempting company round prep is 100% free for all students.'
  },
  {
    id: 'q3',
    question: 'Which colleges does UDEN work with?',
    answer: 'UDEN partners with 60+ universities and Tier 2/3 engineering and degree institutes across India to digitize placement drives and skill readiness.'
  },
  {
    id: 'q4',
    question: 'Does UDEN work with state governments?',
    answer: 'Yes. UDEN partners with State Departments of Higher Education on placement-readiness initiatives, including a partnership with the Jharkhand Department of Higher Education and JSFDA.'
  },
  {
    id: 'q5',
    question: 'Is UDEN a registered company?',
    answer: 'Yes. UDEN operates under Digverve Solutions Pvt. Ltd., CIN U72900KA2017PTC104027, registered in HSR Layout, Bengaluru, Karnataka, and recognized under DPIIT Startup India, Microsoft for Startups, NVIDIA Inception, and AWS EdStart.'
  }
];

const styles = {
  sectionOuter: css`
    background: linear-gradient(135deg, #FFFDF7 0%, #FEF5D8 100%);
    padding: 80px 20px;
    width: 100%;
    overflow-x: hidden;
  `,
  container: css`
    max-width: 1140px;
    margin: 0 auto;
  `,

  /* TOP CENTERED HEADER BLOCK */
  headerBlock: css`
    text-align: center;
    max-width: 760px;
    margin: 0 auto 52px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: #FEF5D8;
    color: #DA532C;
    padding: 8px 18px;
    border-radius: 24px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 16px;
    border: 1px solid rgba(255, 176, 32, 0.5);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  `,
  title: css`
    font-size: 46px;
    font-weight: 900;
    color: #1E293B;
    line-height: 1.15;
    margin: 0 0 16px 0;
    letter-spacing: -1px;
    text-align: center;

    span {
      color: #DA532C;
    }

    @media (max-width: 768px) {
      font-size: 34px;
    }
  `,
  subtitle: css`
    font-size: 16.5px;
    color: #64748B;
    line-height: 1.65;
    margin: 0 0 28px 0;
    font-weight: 500;
    text-align: center;
  `,
  searchBox: css`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 1.5px solid rgba(218, 83, 44, 0.4);
    border-radius: 28px;
    padding: 14px 24px;
    box-shadow: 0 8px 24px rgba(75, 99, 140, 0.06);
    width: 100%;
    max-width: 540px;
    gap: 12px;

    input {
      border: none;
      outline: none;
      width: 100%;
      font-size: 15px;
      font-weight: 600;
      color: #1E293B;
      background: transparent;

      &::placeholder {
        color: #94A3B8;
      }
    }
  `,

  /* BOTTOM 2-COLUMN GRID (LEFT: IMAGE CARD, RIGHT: ACCORDIONS) */
  gridBody: css`
    display: grid;
    grid-template-columns: 0.95fr 1.05fr;
    gap: 48px;
    align-items: flex-start;

    @media (max-width: 900px) {
      grid-template-columns: 1fr;
      gap: 36px;
    }
  `,
  ctaCard: css`
    background: #FEF5D8;
    border: 2px solid #DA532C;
    border-radius: 24px;
    padding: 28px;
    box-shadow: 0 10px 28px rgba(218, 83, 44, 0.1);
    text-align: left;
    height: 100%;
    box-sizing: border-box;

    h3 {
      font-size: 22px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 8px;
      text-align: left;
    }

    p {
      font-size: 14.5px;
      color: #64748B;
      margin-bottom: 20px;
      line-height: 1.5;
      text-align: left;
    }
  `,
  supportImg: css`
    width: 100%;
    max-height: 220px;
    object-fit: contain;
    border-radius: 16px;
    background: #FFFFFF;
    padding: 12px;
    margin-bottom: 20px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.04);
  `,
  ctaBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 14px 28px;
    border-radius: 24px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.25s ease;
    box-shadow: 0 6px 18px rgba(218, 83, 44, 0.25);
    width: 100%;
    justify-content: center;

    &:hover {
      background: #B83D1B;
      transform: translateY(-2px);
      box-shadow: 0 10px 24px rgba(218, 83, 44, 0.35);
    }
  `,

  /* RIGHT COLUMN - ACCORDION CARDS */
  rightCol: css`
    display: flex;
    flex-direction: column;
    gap: 18px;
    text-align: left;
  `,
  accordionCard: (isOpen) => css`
    background: #FFFFFF;
    border: ${isOpen ? '2px solid rgba(218, 83, 44, 0.5)' : '1.5px solid #E2E8F0'};
    border-radius: 20px;
    padding: ${isOpen ? '24px' : '20px 24px'};
    box-shadow: ${isOpen ? '0 12px 28px rgba(218, 83, 44, 0.1)' : '0 4px 16px rgba(0, 0, 0, 0.02)'};
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;

    &:hover {
      border-color: #DA532C;
      box-shadow: 0 8px 24px rgba(218, 83, 44, 0.12);
    }
  `,
  cardHeader: (isOpen) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: transparent;
    border: none;
    padding: 0;
    text-align: left;
    cursor: pointer;
    font-size: 18px;
    font-weight: 800;
    color: ${isOpen ? '#DA532C' : '#1E293B'};
    gap: 16px;
  `,
  cardBody: css`
    margin-top: 16px;
    font-size: 15px;
    color: #475569;
    line-height: 1.65;
    font-weight: 500;
    text-align: left !important;
  `
};

const FaqPage = () => {
  const [openId, setOpenId] = useState('q1');
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredFaqs = faqItems.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div css={styles.sectionOuter} className="uden-fade-in">
      <div css={styles.container}>
        {/* TOP CENTERED HEADER & SEARCH BAR */}
        <div css={styles.headerBlock}>
          <div css={styles.badgeTag} className="uden-float-anim">
            <Sparkles size={14} />
            QUESTIONS, ANSWERED DIRECTLY
          </div>

          <h2 css={styles.title}>
            Frequently Asked <span>Questions</span>
          </h2>

          <p css={styles.subtitle}>
            Everything you need to know about UDEN's AI career readiness model, college placement drives, and employer hiring pipelines.
          </p>

          <div css={styles.searchBox}>
            <Search size={20} color="#DA532C" />
            <input 
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* BOTTOM GRID: LEFT IMAGE CARD & RIGHT ACCORDIONS */}
        <div css={styles.gridBody}>
          <div css={styles.ctaCard} className="uden-card-hover">
            {FaqSupportDeskImage && (
              <img src={FaqSupportDeskImage} alt="UDEN Support Desk & Guidelines" css={styles.supportImg} />
            )}
            <h3>Still have questions?</h3>
            <p>Talk to our career onboarding team or explore our dedicated stakeholder guidelines.</p>
            <button css={styles.ctaBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.FIND_TALENT)}>
              Get Started with UDEN
              <ArrowRight size={16} />
            </button>
          </div>

          <div css={styles.rightCol}>
            {filteredFaqs.map((item) => {
              const isOpen = openId === item.id;
              return (
                <div 
                  key={item.id} 
                  css={styles.accordionCard(isOpen)}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <button css={styles.cardHeader(isOpen)}>
                    <span>{item.question}</span>
                    {isOpen ? <ChevronUp size={20} color="#DA532C" /> : <ChevronDown size={20} color="#DA532C" />}
                  </button>
                  {isOpen && (
                    <div css={styles.cardBody}>
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
