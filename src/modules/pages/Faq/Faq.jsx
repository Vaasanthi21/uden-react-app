import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { HelpCircle, ChevronDown, ChevronUp, Search, Sparkles, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../utils/consts/routes';

const faqList = [
  {
    id: 1,
    category: 'general',
    question: 'What is UDEN.tech?',
    answer: 'UDEN (Unified Development and Employment Network) is an AI-powered career readiness and placement platform that helps Tier 2 and Tier 3 college students in India get job-ready, upskill, and get placed — while helping colleges, employers, and government bodies build placement pipelines.'
  },
  {
    id: 2,
    category: 'students',
    question: 'Is UDEN.tech free for students?',
    answer: 'Creating a profile and getting matched is 100% free to start. Some advanced upskilling tracks may carry a fee — see Upskilling Partners for current pricing.'
  },
  {
    id: 3,
    category: 'colleges',
    question: 'Which colleges does UDEN work with?',
    answer: 'UDEN partners with colleges and universities across India, with a particular focus on Tier 2 and Tier 3 institutions that are typically underserved by traditional placement infrastructure.'
  },
  {
    id: 4,
    category: 'government',
    question: 'Does UDEN work with state governments?',
    answer: 'Yes. UDEN has partnered with state Departments of Higher Education on placement-readiness initiatives, including a partnership with the Jharkhand Department of Higher Education and JSFDA.'
  },
  {
    id: 5,
    category: 'company',
    question: 'Is UDEN a registered company?',
    answer: 'Yes. UDEN operates under Digverve Solutions Pvt. Ltd., CIN U72900KA2017PTC104027, registered in HSR Layout, Bengaluru, Karnataka, and recognized under DPIIT Startup India, Microsoft for Startups, NVIDIA Inception, and AWS EdStart.'
  },
  {
    id: 6,
    category: 'employers',
    question: 'How can an employer hire through UDEN?',
    answer: 'Employers can access pre-screened, placement-ready candidates from UDEN\'s partner institutes through UDEN\'s HR Services — covering sourcing, screening, and campus drives.'
  }
];

const styles = {
  heroOuter: css`
    background: linear-gradient(135deg, #FEF5D8 0%, #FFFDF7 100%);
    padding: 64px 16px 48px 16px;
    text-align: center;
    border-bottom: 4px solid #DA532C;
  `,
  container: css`
    max-width: 900px;
    margin: 0 auto;
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
  title: css`
    font-size: 42px;
    font-weight: 900;
    color: #1E293B;
    margin-bottom: 16px;

    span {
      color: #DA532C;
    }
  `,
  subtitle: css`
    font-size: 16.5px;
    color: #475569;
    max-width: 650px;
    margin: 0 auto 32px auto;
    font-weight: 500;
    line-height: 1.6;
  `,
  searchBox: css`
    display: flex;
    align-items: center;
    background: #FFFFFF;
    border: 2px solid #DA532C;
    border-radius: 28px;
    padding: 8px 18px;
    box-shadow: 0 8px 24px rgba(218, 83, 44, 0.12);
    max-width: 600px;
    margin: 0 auto;
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

  /* FAQ SECTION */
  faqSection: css`
    max-width: 900px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  faqList: css`
    display: flex;
    flex-direction: column;
    gap: 16px;
  `,
  faqItem: (open) => css`
    background: #FFFFFF;
    border: 1.5px solid ${open ? '#DA532C' : '#E2E8F0'};
    border-radius: 18px;
    overflow: hidden;
    transition: all 0.25s ease;
    box-shadow: ${open ? '0 8px 20px rgba(218, 83, 44, 0.12)' : '0 4px 12px rgba(0,0,0,0.02)'};
  `,
  faqHeader: css`
    width: 100%;
    background: transparent;
    border: none;
    padding: 22px 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    cursor: pointer;
    font-size: 17px;
    font-weight: 800;
    color: #1E293B;
    gap: 16px;

    &:hover {
      color: #DA532C;
    }
  `,
  faqBody: css`
    padding: 0 24px 22px 24px;
    font-size: 15px;
    color: #475569;
    line-height: 1.65;
    font-weight: 500;
  `,

  /* CTA BANNER */
  ctaBox: css`
    background: #FEF5D8;
    border: 1.5px solid rgba(255, 176, 32, 0.4);
    border-radius: 24px;
    padding: 40px;
    text-align: center;
    margin-top: 50px;

    h3 {
      font-size: 24px;
      font-weight: 900;
      color: #1E293B;
      margin-bottom: 8px;
    }

    p {
      font-size: 14.5px;
      color: #64748B;
      margin-bottom: 24px;
    }
  `,
  ctaBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 13px 28px;
    border-radius: 28px;
    font-weight: 800;
    font-size: 15px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: #B83D1B;
    }
  `
};

const FaqPage = () => {
  const [openId, setOpenId] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const filteredFaqs = faqList.filter(
    (item) =>
      item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* Hero Header */}
      <div css={styles.heroOuter}>
        <div css={styles.container}>
          <div css={styles.badgeTag}>
            <Sparkles size={14} />
            QUESTIONS, ANSWERED DIRECTLY
          </div>
          <h1 css={styles.title}>
            Frequently Asked <span>Questions</span>
          </h1>
          <p css={styles.subtitle}>
            Everything you need to know about UDEN's AI career readiness model, college placement drives, and employer hiring pipelines.
          </p>

          <div css={styles.searchBox}>
            <Search size={20} color="#DA532C" />
            <input 
              type="text"
              placeholder="Search questions (e.g. free for students, hiring, colleges)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      {/* Accordion List */}
      <div css={styles.faqSection}>
        <div css={styles.faqList}>
          {filteredFaqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} css={styles.faqItem(isOpen)}>
                <button 
                  css={styles.faqHeader} 
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{item.question}</span>
                  {isOpen ? <ChevronUp size={20} color="#DA532C" /> : <ChevronDown size={20} color="#64748B" />}
                </button>
                {isOpen && <div css={styles.faqBody}>{item.answer}</div>}
              </div>
            );
          })}
        </div>

        {/* CTA Contact Box */}
        <div css={styles.ctaBox}>
          <h3>Still have questions?</h3>
          <p>Talk to our team or explore our dedicated stakeholder portals.</p>
          <button css={styles.ctaBtn} onClick={() => navigate(AppRoutes.FIND_TALENT)}>
            Get Started with UDEN
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
