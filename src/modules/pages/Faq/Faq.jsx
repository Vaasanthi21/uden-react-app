import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ChevronDown, ChevronUp, Search, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

let FaqSupportDeskImage;
try {
  FaqSupportDeskImage = require('utils/consts/uploaded_illustrations').FaqSupportDeskImage;
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
    question: 'Is UDEN.tech 100% free or subsidised as it has won highest technical grant of Microsoft?',
    answer: 'Yes! UDEN.tech offers free account registration for students and subsidized access for institutions through the prestigious highest technical grant awarded by Microsoft for Startups, providing enterprise AI tools, learning roadmaps, and campus placement tracking.'
  },
  {
    id: 'q3',
    question: 'Which colleges does UDEN work with?',
    answer: 'UDEN has worked with 60+ partner colleges, universities, and Tier 2/3 engineering and degree institutes across India to digitize placement drives and skill readiness.'
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
    padding: 45px 20px;
    width: 100%;
    overflow-x: hidden;
  `,
  container: css`
    max-width: 1060px;
    margin: 0 auto;
  `,

  /* TOP CENTERED HEADER BLOCK */
  headerBlock: css`
    text-align: center;
    margin-bottom: 40px;
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 16px;
    border-radius: 20px;
    background: #FEF5D8;
    color: #DA532C;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 14px;
    text-transform: uppercase;
  `,
  title: css`
    font-size: 38px;
    font-weight: 900;
    color: #1E293B;
    margin-bottom: 12px;
    span {
      color: #DA532C;
    }
  `,
  subtitle: css`
    font-size: 16px;
    color: #64748B;
    max-width: 680px;
    margin: 0 auto 28px auto;
  `,
  searchBox: css`
    display: flex;
    align-items: center;
    gap: 12px;
    background: #FFFFFF;
    border: 1.5px solid rgba(255, 176, 32, 0.35);
    border-radius: 30px;
    padding: 12px 24px;
    max-width: 500px;
    margin: 0 auto;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);

    input {
      border: none;
      outline: none;
      width: 100%;
      font-size: 15px;
      color: #1E293B;
    }
  `,

  /* BOTTOM 2-COLUMN GRID (LEFT: IMAGE CARD, RIGHT: ACCORDIONS) */
  gridBody: css`
    display: flex;
    flex-direction: column;
    gap: 32px;
  `,
  ctaCard: css`
    background: #FFFFFF;
    border: 1.5px solid rgba(255, 176, 32, 0.35);
    border-radius: 24px;
    padding: 32px;
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;

    h3 {
      font-size: 22px;
      font-weight: 800;
      color: #1E293B;
      margin: 0;
    }
    p {
      font-size: 14.5px;
      color: #64748B;
      margin: 0;
      max-width: 500px;
    }
  `,
  supportImg: css`
    max-height: 120px;
    width: auto;
  `,
  ctaBtn: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #DA532C 0%, #F55825 100%);
    color: #FFFFFF;
    border: none;
    border-radius: 30px;
    padding: 14px 28px;
    font-size: 15px;
    font-weight: 800;
    cursor: pointer;
    box-shadow: 0 10px 24px rgba(218, 83, 44, 0.35);
    transition: all 0.25s ease;
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
    font-size: 17px;
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

        {/* FAQ ACCORDION LIST FIRST */}
        <div css={styles.gridBody}>
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

          {/* STILL HAVE QUESTIONS BUTTON BELOW ALL FAQ QUESTIONS */}
          <div css={styles.ctaCard} className="uden-card-hover">
            <h3>Still have questions?</h3>
            <p>Talk to our career onboarding team or explore our dedicated stakeholder guidelines.</p>
            <button css={styles.ctaBtn} className="uden-pulse-btn" onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}>
              Get in Touch with UDEN
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
