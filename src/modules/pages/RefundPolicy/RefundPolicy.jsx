import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { ShieldCheck, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AppRoutes } from '../../../utils/consts/routes';

const styles = {
  wrapper: css`
    min-height: 80vh;
    padding: 60px 24px;
    background: #F8FAFC;
    font-family: 'Plus Jakarta Sans', 'Inter', sans-serif;
    color: #1E293B;
  `,
  container: css`
    max-width: 860px;
    margin: 0 auto;
    background: #FFFFFF;
    border: 1px solid #E2E8F0;
    border-radius: 24px;
    padding: 44px 40px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
    @media (max-width: 640px) {
      padding: 28px 20px;
    }
  `,
  backLink: css`
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-size: 13.5px;
    font-weight: 700;
    color: #F55825;
    text-decoration: none;
    margin-bottom: 24px;
    transition: transform 0.2s ease;
    &:hover {
      transform: translateX(-3px);
    }
  `,
  title: css`
    font-size: 32px;
    font-weight: 900;
    color: #0F172A;
    margin: 0 0 12px;
  `,
  subtitle: css`
    font-size: 14px;
    color: #64748B;
    margin: 0 0 32px;
    border-bottom: 1px solid #E2E8F0;
    padding-bottom: 16px;
  `,
  section: css`
    margin-bottom: 28px;
    h3 {
      font-size: 18px;
      font-weight: 800;
      color: #0F172A;
      margin: 0 0 10px;
    }
    p, li {
      font-size: 14.5px;
      line-height: 1.7;
      color: #475569;
    }
    ul {
      padding-left: 20px;
      margin: 10px 0;
    }
  `,
  contactBox: css`
    background: #FFF7ED;
    border: 1.5px solid #FFEDD5;
    border-radius: 16px;
    padding: 20px;
    margin-top: 32px;
    display: flex;
    align-items: flex-start;
    gap: 14px;
  `
};

const RefundPolicy = () => {
  return (
    <div css={styles.wrapper}>
      <div css={styles.container}>
        <Link to="/" css={styles.backLink}>
          <ArrowLeft size={16} />
          Back to Home
        </Link>
        
        <h1 css={styles.title}>Refund &amp; Cancellation Policy</h1>
        <div css={styles.subtitle}>
          Operated by Digverve Solutions Pvt. Ltd. &bull; Last Updated: 27 October 2026
        </div>

        <div css={styles.section}>
          <h3>1. Overview of Digital Services</h3>
          <p>
            UDEN (Unified Development and Employment Network), operated by Digverve Solutions Pvt. Ltd., offers digital career preparation services, including AI resume diagnostics, ATS resume builder templates, AI mock interviews, and Job Agent Pro role matching.
          </p>
        </div>

        <div css={styles.section}>
          <h3>2. Free Tier &amp; Starter Points</h3>
          <p>
            Every new student user receives 100 free starter points upon account creation (70 usable for AI resume diagnostics and mock interviews, and 30 for Job Agent Pro). No payment information is required to access these starter points, enabling users to thoroughly test and evaluate UDEN&apos;s ATS resume analysis and AI career tools before making any purchase.
          </p>
        </div>

        <div css={styles.section}>
          <h3>3. Paid Plans &amp; One-Time Purchases</h3>
          <p>
            For premium offerings and digital career tools:
          </p>
          <ul>
            <li>
              <strong>One-Time Plans:</strong> All paid packages and point top-ups are one-time purchases with nothing to cancel. They do not automatically renew, and there are no recurring subscription fees.
            </li>
            <li>
              <strong>Refund Eligibility:</strong> If you experience technical defects preventing the delivery of your AI mock interview report or purchased services, please contact us within 7 days of the transaction for a resolution or prorated refund.
            </li>
            <li>
              <strong>Used Points / Consumed Services:</strong> Points and mock interviews that have already been fully consumed or processed cannot be refunded.
            </li>
          </ul>
        </div>

        <div css={styles.section}>
          <h3>4. How to Request a Refund</h3>
          <p>
            To submit a refund inquiry, please reach out with your registered email address and transaction ID:
          </p>
          <div css={styles.contactBox}>
            <Mail size={22} color="#F55825" style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '15px', marginBottom: '4px' }}>
                UDEN Customer Support &amp; Billing
              </div>
              <div style={{ fontSize: '14px', color: '#64748B' }}>
                Email: <a href="mailto:support@uden.tech" style={{ color: '#F55825', fontWeight: 700 }}>support@uden.tech</a>
              </div>
              <div style={{ fontSize: '13px', color: '#64748B', marginTop: '4px' }}>
                Digverve Solutions Pvt. Ltd., India. Response turnaround within 24–48 business hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
