import React, { useState } from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { Users, FileCheck, ShieldCheck, UserCheck, CheckCircle2, ArrowRight } from 'lucide-react';
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
    margin-bottom: 36px;

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
  tabsNav: css`
    display: flex;
    justify-content: center;
    gap: 12px;
    margin-bottom: 36px;
    flex-wrap: wrap;
  `,
  tabBtn: (active) => css`
    padding: 12px 24px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
    border: 1.5px solid ${active ? '#DA532C' : '#E2E8F0'};
    background: ${active ? '#DA532C' : '#FFFFFF'};
    color: ${active ? '#FFFFFF' : '#334155'};
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.2s ease;
    box-shadow: ${active ? '0 6px 18px rgba(218, 83, 44, 0.3)' : 'none'};

    &:hover {
      border-color: #DA532C;
      color: ${active ? '#FFFFFF' : '#DA532C'};
    }
  `,
  contentBox: css`
    background: #FFFFFF;
    border: 1.5px solid #E2E8F0;
    border-radius: 24px;
    padding: 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;

    @media (max-width: 860px) {
      grid-template-columns: 1fr;
      padding: 28px;
    }
  `,
  serviceTitle: css`
    font-size: 26px;
    font-weight: 800;
    color: #1E293B;
    margin-bottom: 12px;
  `,
  serviceDesc: css`
    font-size: 15px;
    color: #64748B;
    line-height: 1.65;
    margin-bottom: 24px;
  `,
  featureList: css`
    display: flex;
    flex-direction: column;
    gap: 12px;
    margin-bottom: 28px;
  `,
  featureItem: css`
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 14px;
    font-weight: 600;
    color: #334155;
  `,
  cardRight: css`
    background: linear-gradient(135deg, #2D2221 0%, #1A1A1A 100%);
    border-radius: 20px;
    padding: 36px;
    color: #FFFFFF;
    border: 1px solid rgba(255, 255, 255, 0.1);
  `,
  statNum: css`
    font-size: 38px;
    font-weight: 900;
    color: #FFB020;
    margin-bottom: 4px;
  `,
  statLabel: css`
    font-size: 14px;
    color: #CBD5E1;
    margin-bottom: 24px;
    font-weight: 600;
  `,
  actionBtn: css`
    background: #DA532C;
    color: #FFFFFF;
    border: none;
    padding: 12px 24px;
    border-radius: 10px;
    font-weight: 700;
    font-size: 14px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    transition: background 0.2s;

    &:hover {
      background: #C0392B;
    }
  `
};

const serviceTabsData = [
  {
    id: 'staffing',
    label: 'Staff Augmentation',
    icon: <Users size={18} />,
    title: 'On-Demand Technical Staff Augmentation',
    desc: 'Scale your engineering team rapidly with pre-vetted contractual developers, DevOps specialists, and QA engineers on monthly or project bases.',
    features: ['48-Hour Developer Onboarding', 'Flexible Monthly Billing', 'Zero Termination Penalties', 'Dedicated Technical Lead'],
    stat: '48 Hrs',
    statDesc: 'Average SLA for Contract Candidate Onboarding'
  },
  {
    id: 'payroll',
    label: 'Payroll & Compliance',
    icon: <FileCheck size={18} />,
    title: 'Comprehensive Payroll BPO & Statutory Compliance',
    desc: 'Outsource complex payroll management, PF/ESI filing, tax withholding, and labor compliance to UDEN’s certified HR experts.',
    features: ['100% On-Time Payroll Processing', 'PF / ESI / Tax Compliance Guarantee', 'Automated Employee Self-Service Portal', 'Zero Non-Compliance Audit Risks'],
    stat: '99.9%',
    statDesc: 'Payroll Accuracy & Statutory Audit Compliance'
  },
  {
    id: 'executive',
    label: 'Executive Search',
    icon: <UserCheck size={18} />,
    title: 'Leadership & Executive Search Intake',
    desc: 'Headhunting senior engineering leads, VP of Technology, and C-level executives with deep industry vetting and confidentiality.',
    features: ['Targeted Competitor Headhunting', 'Comprehensive Executive Assessments', 'Strict NDA & Confidential Sourcing', '90-Day Executive Placement Guarantee'],
    stat: '98%',
    statDesc: 'Executive Leadership Retention Over 2+ Years'
  },
  {
    id: 'bgv',
    label: 'Background Verification',
    icon: <ShieldCheck size={18} />,
    title: 'Background Verification & Skill Vetting Audit',
    desc: 'Thorough background checks including employment verification, criminal record checks, education validation, and technical skill audits.',
    features: ['Employment History Cross-Checking', 'Educational Credential Verification', 'Criminal Record & Court Check', 'Technical Assessment Audits'],
    stat: '24 Hrs',
    statDesc: 'Rapid Background Verification Turnaround Time'
  }
];

const HRServiceTabs = () => {
  const [activeTab, setActiveTab] = useState('staffing');
  const navigate = useNavigate();
  const currentService = serviceTabsData.find((t) => t.id === activeTab) || serviceTabsData[0];

  return (
    <div css={styles.section}>
      <div css={styles.header}>
        <h2>Corporate HR Services Suite</h2>
        <p>Select a service module to explore tailored corporate solutions.</p>
      </div>

      <div css={styles.tabsNav}>
        {serviceTabsData.map((tab) => (
          <button 
            key={tab.id}
            css={styles.tabBtn(tab.id === activeTab)}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div css={styles.contentBox}>
        <div>
          <h3 css={styles.serviceTitle}>{currentService.title}</h3>
          <p css={styles.serviceDesc}>{currentService.desc}</p>

          <div css={styles.featureList}>
            {currentService.features.map((f, i) => (
              <div key={i} css={styles.featureItem}>
                <CheckCircle2 size={16} color="#DA532C" />
                <span>{f}</span>
              </div>
            ))}
          </div>

          <button 
            css={styles.actionBtn}
            onClick={() => openModal('contact')}
          >
            Request HR Consultation
            <ArrowRight size={16} />
          </button>
        </div>

        <div css={styles.cardRight}>
          <div css={styles.statNum}>{currentService.stat}</div>
          <div css={styles.statLabel}>{currentService.statDesc}</div>
          <p style={{ fontSize: '13px', color: '#94A3B8', lineHeight: '1.6' }}>
            Trusted by 150+ companies to streamline HR operations, lower overhead costs, and eliminate legal non-compliance risks.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HRServiceTabs;
