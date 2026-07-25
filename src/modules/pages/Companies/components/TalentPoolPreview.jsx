import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Award, Briefcase, MapPin, CheckCircle2, ArrowRight, UserCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../../../utils/consts/routes';

const styles = {
  section: css`
    max-width: 1200px;
    margin: 50px auto;
    padding: 0 16px;
  `,
  header: css`
    text-align: center;
    margin-bottom: 36px;

    h2 {
      font-size: 30px;
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
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 20px;
  `,
  card: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 18px;
    padding: 24px;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.03);
    transition: all 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 14px 28px rgba(218, 83, 44, 0.15);
      border-color: #DA532C;
    }
  `,
  candidateHeader: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 14px;
  `,
  avatarBadge: css`
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, #DA532C 0%, #FFB020 100%);
    color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    font-size: 16px;
  `,
  verifiedTag: css`
    background: #FFF5F5;
    color: #DA532C;
    font-size: 11.5px;
    font-weight: 800;
    padding: 3px 10px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 4px;
    border: 1px solid #FECDD3;
  `,
  roleTitle: css`
    font-size: 17px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 4px;
  `,
  experienceRow: css`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 13px;
    color: #64748B;
    margin-bottom: 16px;

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
    margin-bottom: 20px;
  `,
  skillChip: css`
    background: #F8FAFC;
    color: #334155;
    font-size: 11.5px;
    font-weight: 600;
    padding: 4px 10px;
    border-radius: 6px;
    border: 1px solid #E2E8F0;
  `,
  footerRow: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #E2E8F0;
    padding-top: 14px;
  `,
  noticeText: css`
    font-size: 12px;
    font-weight: 700;
    color: #10B981;
  `,
  requestLink: css`
    color: #DA532C;
    font-weight: 700;
    font-size: 13px;
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 4px;

    &:hover {
      text-decoration: underline;
    }
  `
};

const topCandidates = [
  {
    initials: 'SK',
    role: 'Senior React 18 & Next.js Lead',
    exp: '5.5 Years',
    location: 'Remote / India',
    score: '96% Assessment',
    skills: ['React 18', 'Next.js', 'TypeScript', 'Redux Toolkit', 'GraphQL'],
    notice: '⚡ Immediate Joiner'
  },
  {
    initials: 'AP',
    role: 'AWS Cloud & DevOps Architect',
    exp: '4.0 Years',
    location: 'Hybrid / APAC',
    score: '94% Assessment',
    skills: ['AWS EC2/S3', 'Docker', 'Kubernetes', 'Terraform', 'CI/CD'],
    notice: '⚡ 15 Days Notice'
  },
  {
    initials: 'VK',
    role: 'AI / Python Data Engineer',
    exp: '3.5 Years',
    location: 'Remote / Global',
    score: '95% Assessment',
    skills: ['Python', 'Django', 'PyTorch', 'LLM Fine-Tuning', 'PostgreSQL'],
    notice: '⚡ Immediate Joiner'
  },
  {
    initials: 'RD',
    role: 'Flutter Cross-Platform Specialist',
    exp: '3.0 Years',
    location: 'Remote / India',
    score: '91% Assessment',
    skills: ['Flutter', 'Dart', 'BLoC Pattern', 'Firebase', 'REST APIs'],
    notice: '⚡ Immediate Joiner'
  }
];

const TalentPoolPreview = () => {
  const navigate = useNavigate();

  return (
    <div css={styles.section}>
      <div css={styles.header}>
        <h2>Pre-Assessed Candidate Spotlight</h2>
        <p>Preview top-rated talent actively seeking opportunities across engineering teams.</p>
      </div>

      <div css={styles.grid}>
        {topCandidates.map((c, idx) => (
          <div key={idx} css={styles.card}>
            <div>
              <div css={styles.candidateHeader}>
                <div css={styles.avatarBadge}>{c.initials}</div>
                <div css={styles.verifiedTag}>
                  <Award size={13} color="#DA532C" />
                  {c.score}
                </div>
              </div>

              <div css={styles.roleTitle}>{c.role}</div>
              <div css={styles.experienceRow}>
                <span><Briefcase size={14} /> {c.exp}</span>
                <span><MapPin size={14} /> {c.location}</span>
              </div>

              <div css={styles.skillsTags}>
                {c.skills.map((s, i) => (
                  <span key={i} css={styles.skillChip}>{s}</span>
                ))}
              </div>
            </div>

            <div css={styles.footerRow}>
              <span css={styles.noticeText}>{c.notice}</span>
              <button 
                css={styles.requestLink}
                onClick={() => navigate(AppRoutes.FIND_TALENT)}
              >
                Request Profile
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TalentPoolPreview;
