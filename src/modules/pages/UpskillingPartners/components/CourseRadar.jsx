import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Award, Clock, ArrowRight, CheckCircle2, Zap, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 40px;

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
  grid: css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 24px;
  `,
  card: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 20px;
    padding: 28px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 32px rgba(218, 83, 44, 0.15);
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
    border-radius: 14px;
    font-size: 12px;
    font-weight: 800;
    margin-bottom: 14px;
    align-self: flex-start;
    border: 1px solid #FECDD3;
  `,
  courseTitle: css`
    font-size: 19px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 8px;
    line-height: 1.3;
  `,
  metaRow: css`
    display: flex;
    align-items: center;
    gap: 16px;
    font-size: 13px;
    color: #64748B;
    margin-bottom: 18px;

    span {
      display: flex;
      align-items: center;
      gap: 4px;
    }
  `,
  skillsTags: css`
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 24px;
  `,
  chip: css`
    background: #F8FAFC;
    color: #334155;
    font-size: 11.5px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid #E2E8F0;
  `,
  actionBtn: css`
    width: 100%;
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 12px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    transition: background 0.2s ease;

    &:hover {
      background: #C0392B;
    }
  `
};

const courses = [
  {
    badge: '🔥 HIGH RECRUITER DEMAND',
    title: 'Fullstack React 18, Next.js & Microservices',
    duration: '12 Weeks',
    partner: 'UDEN Code Academy',
    skills: ['React 18', 'Next.js', 'Node.js', 'PostgreSQL', 'Docker'],
    guarantee: 'Placement Guarantee'
  },
  {
    badge: '⚡ FAST TRACK',
    title: 'AWS Cloud Architecture & DevOps Masterclass',
    duration: '10 Weeks',
    partner: 'Cloud Guild Partner',
    skills: ['AWS EC2/S3', 'Kubernetes', 'Terraform', 'CI/CD Pipelines'],
    guarantee: 'Direct Recruiter Interviews'
  },
  {
    badge: '🚀 HOT TECH STACK',
    title: 'Python AI Engineering, PyTorch & LLM Tuning',
    duration: '14 Weeks',
    partner: 'AI Data Institute',
    skills: ['Python', 'PyTorch', 'LangChain', 'FastAPI', 'Vector DBs'],
    guarantee: 'Placement Guarantee'
  }
];

const CourseRadar = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.section}>
      <div css={styles.header}>
        <h2>Featured Accredited Upskilling Tracks</h2>
        <p>Curated programs designed to close skill gaps and guarantee direct interview shortlists.</p>
      </div>

      <div css={styles.grid}>
        {courses.map((c, idx) => (
          <div key={idx} css={styles.card}>
            <div>
              <div css={styles.cardBadge}>
                <Zap size={13} />
                {c.badge}
              </div>
              <h3 css={styles.courseTitle}>{c.title}</h3>
              <div css={styles.metaRow}>
                <span><Clock size={14} /> {c.duration}</span>
                <span><BookOpen size={14} /> {c.partner}</span>
              </div>

              <div css={styles.skillsTags}>
                {c.skills.map((s, i) => (
                  <span key={i} css={styles.chip}>{s}</span>
                ))}
              </div>
            </div>

            <button 
              css={styles.actionBtn}
              onClick={() => navigate(AppRoutes.FIND_OPPORTUNITY)}
            >
              Enroll in Track
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseRadar;
