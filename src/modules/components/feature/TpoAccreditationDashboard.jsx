import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { 
  Building2, Sparkles, ShieldCheck, CheckCircle2, ArrowRight, 
  Users, Award, Download, FileText, Filter, Search, Briefcase, 
  Clock, TrendingUp, CheckSquare, Zap 
} from 'lucide-react';
import { AppRoutes } from '../../../utils/consts/routes';

const styles = {
  wrapper: css`
    width: 100%;
    background: #F8FAFC;
    padding: 60px 20px;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
  `,
  container: css`
    max-width: 1240px;
    margin: 0 auto;
  `,
  header: css`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 32px;
    flex-wrap: wrap;
    gap: 20px;
  `,
  titleGroup: css`
    h2 {
      font-size: 32px;
      font-weight: 800;
      color: #1E293B;
      margin: 8px 0;
      letter-spacing: -0.5px;
      span {
        color: #F55825;
      }
    }
    p {
      color: #64748B;
      font-size: 15px;
    }
  `,
  badgeTag: css`
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    background: rgba(245, 88, 37, 0.1);
    border: 1px solid rgba(245, 88, 37, 0.25);
    border-radius: 99px;
    color: #F55825;
    font-size: 12px;
    font-weight: 800;
    text-transform: uppercase;
  `,
  exportBtnGroup: css`
    display: flex;
    gap: 12px;
    flex-wrap: wrap;
  `,
  btnSecondary: css`
    padding: 10px 18px;
    border-radius: 10px;
    background: #FFFFFF;
    border: 1.5px solid #CBD5E1;
    color: #334155;
    font-size: 13.5px;
    font-weight: 700;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
    &:hover {
      background: #F1F5F9;
      border-color: #94A3B8;
    }
  `,
  btnPrimary: css`
    padding: 10px 20px;
    border-radius: 10px;
    background: linear-gradient(135deg, #DA532C 0%, #F55825 100%);
    border: none;
    color: #FFFFFF;
    font-size: 13.5px;
    font-weight: 800;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    box-shadow: 0 4px 14px rgba(245, 88, 37, 0.35);
    transition: all 0.2s ease;
    &:hover {
      transform: translateY(-1px);
      box-shadow: 0 6px 20px rgba(245, 88, 37, 0.45);
    }
  `,

  /* TOP STAT CARDS */
  statsGrid: css`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 36px;
    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (max-width: 500px) {
      grid-template-columns: 1fr;
    }
  `,
  statCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 16px;
    padding: 20px 24px;
    box-shadow: 0 4px 12px rgba(15, 23, 42, 0.03);
    position: relative;
    overflow: hidden;
  `,
  statLabel: css`
    font-size: 13px;
    font-weight: 700;
    color: #64748B;
    text-transform: uppercase;
  `,
  statValue: css`
    font-size: 32px;
    font-weight: 900;
    color: #F55825;
    margin: 6px 0 4px 0;
  `,
  statSub: css`
    font-size: 12px;
    color: #10B981;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 4px;
  `,

  /* TAB CONTROLS */
  tabBar: css`
    display: flex;
    gap: 12px;
    margin-bottom: 24px;
    border-bottom: 2px solid #E2E8F0;
    padding-bottom: 12px;
  `,
  tabBtn: (active) => css`
    padding: 10px 22px;
    border-radius: 10px;
    font-size: 14px;
    font-weight: 800;
    border: none;
    background: ${active ? '#FEF5D8' : 'transparent'};
    color: ${active ? '#F55825' : '#64748B'};
    cursor: pointer;
    transition: all 0.2s ease;
    &:hover {
      color: #F55825;
    }
  `,

  /* JOB LISTINGS VIEW */
  jobFeedGrid: css`
    display: flex;
    flex-direction: column;
    gap: 18px;
  `,
  jobCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 16px;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    transition: all 0.2s ease;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
    }
    &:hover {
      border-color: rgba(245, 88, 37, 0.4);
      box-shadow: 0 8px 24px rgba(245, 88, 37, 0.08);
    }
  `,
  jobInfo: css`
    display: flex;
    gap: 16px;
    align-items: center;
  `,
  companyLogo: css`
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: #FEF5D8;
    color: #F55825;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
    font-size: 20px;
    border: 1px solid rgba(245, 88, 37, 0.2);
  `,
  jobMeta: css`
    h4 {
      font-size: 17px;
      font-weight: 800;
      color: #1E293B;
      margin-bottom: 4px;
    }
    p {
      font-size: 13.5px;
      color: #64748B;
      display: flex;
      gap: 12px;
      align-items: center;
    }
  `,
  shortlistBanner: css`
    background: #ECFDF5;
    border: 1px solid #A7F3D0;
    border-radius: 10px;
    padding: 10px 16px;
    color: #047857;
    font-size: 13px;
    font-weight: 800;
    display: flex;
    align-items: center;
    gap: 8px;
  `,

  /* STUDENT ROSTER TABLE */
  tableCard: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 16px rgba(15, 23, 42, 0.04);
  `,
  table: css`
    width: 100%;
    border-collapse: collapse;
    text-align: left;
    th {
      background: #F8FAFC;
      padding: 14px 20px;
      font-size: 12px;
      font-weight: 800;
      color: #475569;
      text-transform: uppercase;
      border-bottom: 1.5px solid #E2E8F0;
    }
    td {
      padding: 16px 20px;
      font-size: 14px;
      color: #1E293B;
      border-bottom: 1px solid #F1F5F9;
      vertical-align: middle;
    }
  `,
  studentAvatarGroup: css`
    display: flex;
    align-items: center;
    gap: 12px;
  `,
  avatarCircle: css`
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: #E2E8F0;
    color: #334155;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 13px;
  `,
  badgeSuccess: css`
    padding: 4px 10px;
    border-radius: 99px;
    background: #ECFDF5;
    color: #047857;
    font-size: 12px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  `,
  badgeWarning: css`
    padding: 4px 10px;
    border-radius: 99px;
    background: #FFFBEB;
    color: #B45309;
    font-size: 12px;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    gap: 4px;
  `
};

const mockJobListings = [
  {
    id: 1,
    title: 'React Native Dev',
    company: 'Google Inc.',
    location: 'Bangalore (Hybrid)',
    ctc: '₹14.5 LPA',
    eligibleCount: 42,
    shortlisted: true,
  },
  {
    id: 2,
    title: 'Frontend Developer',
    company: 'Google Inc.',
    location: 'Hyderabad',
    ctc: '₹12.0 LPA',
    eligibleCount: 38,
    shortlisted: false,
  },
  {
    id: 3,
    title: 'Fullstack Engineer',
    company: 'Deloitte Digital',
    location: 'Gurgaon / Remote',
    ctc: '₹10.8 LPA',
    eligibleCount: 56,
    shortlisted: true,
  }
];

const mockStudents = [
  {
    id: 1,
    name: 'Aarav Sharma',
    rollNo: '2021-CS-041',
    cgpa: '8.9 / 10',
    skills: 'React, Node, Python',
    atsScore: '94%',
    status: 'Shortlisted @ Google',
    naacReady: true
  },
  {
    id: 2,
    name: 'Ananya Verma',
    rollNo: '2021-CS-088',
    cgpa: '9.2 / 10',
    skills: 'Java, AWS, Docker',
    atsScore: '98%',
    status: '100% NAAC Verified',
    naacReady: true
  },
  {
    id: 3,
    name: 'Rohan Gupta',
    rollNo: '2021-ECE-012',
    cgpa: '8.4 / 10',
    skills: 'Fullstack, SQL',
    atsScore: '89%',
    status: 'Shortlisted @ Deloitte',
    naacReady: true
  }
];

const TpoAccreditationDashboard = () => {
  const [activeTab, setActiveTab] = useState('jobs'); // 'jobs' | 'students'
  const [assignedJobs, setAssignedJobs] = useState({});

  const handle1ClickAssign = (jobId) => {
    setAssignedJobs({ ...assignedJobs, [jobId]: true });
  };

  const handleExportNAAC = () => {
    alert('Exporting NAAC Accreditation Audit Data (.PDF). Permanently archived in UDEN Cloud Storage.');
  };

  const handleExportNBA = () => {
    alert('Exporting NBA Accreditation Student Snapshot (.CSV). Ready for audit submission.');
  };

  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        
        {/* HEADER */}
        <div css={styles.header}>
          <div css={styles.titleGroup}>
            <div css={styles.badgeTag}>
              <Building2 size={14} /> IIT KANPUR — INSTITUTIONAL TPO CONSOLE
            </div>
            <h2>Placement &amp; Accreditation <span>Intelligence</span></h2>
            <p>Automated NAAC/NBA student data archiving &amp; 1-click corporate job shortlisting.</p>
          </div>

          <div css={styles.exportBtnGroup}>
            <button css={styles.btnSecondary} onClick={handleExportNBA}>
              <FileText size={15} /> Export NBA Snapshot (.CSV)
            </button>
            <button css={styles.btnPrimary} onClick={handleExportNAAC}>
              <Download size={15} /> Export NAAC Audit (.PDF)
            </button>
          </div>
        </div>

        {/* 4 SUMMARY STAT CARDS */}
        <div css={styles.statsGrid}>
          <div css={styles.statCard}>
            <div css={styles.statLabel}>Total Corporate Listings</div>
            <div css={styles.statValue}>30</div>
            <div css={styles.statSub}><TrendingUp size={13} /> +8 New Drives This Week</div>
          </div>
          <div css={styles.statCard}>
            <div css={styles.statLabel}>Accepted Student Offers</div>
            <div css={styles.statValue}>124</div>
            <div css={styles.statSub}><CheckCircle2 size={13} /> 89% Overall Placement Rate</div>
          </div>
          <div css={styles.statCard}>
            <div css={styles.statLabel}>Shortlisted Candidates</div>
            <div css={styles.statValue}>210</div>
            <div css={styles.statSub}><Zap size={13} /> Saved 100+ Shortlisting Hrs</div>
          </div>
          <div css={styles.statCard}>
            <div css={styles.statLabel}>Total Active Applicants</div>
            <div css={styles.statValue}>450</div>
            <div css={styles.statSub}><Users size={13} /> 100% Recruiter Verified</div>
          </div>
        </div>

        {/* TAB NAVIGATION */}
        <div css={styles.tabBar}>
          <button 
            css={styles.tabBtn(activeTab === 'jobs')} 
            onClick={() => setActiveTab('jobs')}
          >
            📋 Your Active Job Listings ({mockJobListings.length})
          </button>
          <button 
            css={styles.tabBtn(activeTab === 'students')} 
            onClick={() => setActiveTab('students')}
          >
            🎓 Student Readiness Roster &amp; NAAC Data ({mockStudents.length})
          </button>
        </div>

        {/* TAB 1: JOB LISTINGS & 1-CLICK SHORTLIST */}
        {activeTab === 'jobs' && (
          <div css={styles.jobFeedGrid}>
            {mockJobListings.map((job) => (
              <div key={job.id} css={styles.jobCard}>
                <div css={styles.jobInfo}>
                  <div css={styles.companyLogo}>{job.company[0]}</div>
                  <div css={styles.jobMeta}>
                    <h4>{job.title} — {job.company}</h4>
                    <p>
                      <span>📍 {job.location}</span>
                      <span>💰 {job.ctc}</span>
                      <span>👥 {job.eligibleCount} Eligible Students</span>
                    </p>
                  </div>
                </div>

                <div>
                  {assignedJobs[job.id] ? (
                    <div css={styles.shortlistBanner}>
                      <CheckCircle2 size={16} color="#059669" /> Shortlisted &amp; Pushed to {job.eligibleCount} Students! (100+ Hrs Saved)
                    </div>
                  ) : (
                    <button 
                      css={styles.btnPrimary}
                      onClick={() => handle1ClickAssign(job.id)}
                    >
                      <Zap size={15} /> 1-Click Shortlist ({job.eligibleCount} Eligible Students)
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 2: STUDENT READINESS ROSTER */}
        {activeTab === 'students' && (
          <div css={styles.tableCard}>
            <table css={styles.table}>
              <thead>
                <tr>
                  <th>Student Name &amp; Roll No.</th>
                  <th>CGPA Marks</th>
                  <th>Verified Skillset</th>
                  <th>ATS Fitment</th>
                  <th>NAAC / Placement Status</th>
                </tr>
              </thead>
              <tbody>
                {mockStudents.map((st) => (
                  <tr key={st.id}>
                    <td>
                      <div css={styles.studentAvatarGroup}>
                        <div css={styles.avatarCircle}>{st.name[0]}</div>
                        <div>
                          <strong style={{ color: '#0F172A' }}>{st.name}</strong>
                          <div style={{ fontSize: '12px', color: '#64748B' }}>{st.rollNo}</div>
                        </div>
                      </div>
                    </td>
                    <td><strong style={{ color: '#F55825' }}>{st.cgpa}</strong></td>
                    <td>{st.skills}</td>
                    <td><span css={styles.badgeSuccess}>{st.atsScore} ATS Match</span></td>
                    <td>
                      <span css={styles.badgeSuccess}>
                        <ShieldCheck size={13} /> {st.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
};

export default TpoAccreditationDashboard;
