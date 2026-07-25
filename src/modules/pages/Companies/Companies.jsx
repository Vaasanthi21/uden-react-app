import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import CompaniesBanner from './components/Banner';
import CompaniesFeature from './components/Feature';
import CompaniesKnowMore from './components/KnowMore';
import CompaniesTestimonial from './components/Testimonial';
import CompaniesTrustedBrand from './components/TrustedBrand';
import CompaniesWorkFlow from './components/WorkFlow';
import TalentPoolPreview from './components/TalentPoolPreview';
import { CompaniesStyles as styles } from './styles/Companies.Styles';

const Companies = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* 1. Hero Employer Talent Request Banner */}
      <CompaniesBanner />

      {/* 2. Corporate Hiring Partner Brands */}
      <div style={{ padding: '36px 0', borderBottom: '1px solid #E2E8F0', background: '#F8FAFC' }}>
        <CompaniesTrustedBrand />
      </div>

      {/* 3. 4-Step Interactive Hiring Workflow */}
      <div style={{ padding: '70px 0' }}>
        <CompaniesWorkFlow css={styles.workFlow} />
      </div>

      {/* 4. Enterprise Hiring Guarantees & Features */}
      <div style={{ padding: '70px 0', background: '#F8FAFC' }}>
        <CompaniesFeature css={styles.features} />
      </div>

      {/* 5. Pre-Assessed Candidate Talent Spotlight */}
      <div style={{ padding: '70px 0' }}>
        <TalentPoolPreview />
      </div>

      {/* 6. HR & Recruiter Testimonials */}
      <div style={{ padding: '70px 0', background: '#FEF5D8' }}>
        <CompaniesTestimonial />
      </div>

      {/* 7. Fast-Track Talent Hiring CTA */}
      <CompaniesKnowMore />
    </div>
  );
};

export default Companies;