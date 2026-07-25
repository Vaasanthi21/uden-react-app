import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import { JobSeekersStyles as styles } from './styles/JobSeekers.Styles';
import JobSeekerBanner from './components/Banner';
import JobSeekerTrustedBrand from './components/TrustedBrand';
import JobSeekerWorkFlow from './components/WorkFlow';
import JobSeekersFeature from './components/Features';
import JobSeekersTestimonial from './components/Testimonial';
import JobSeekersKnowMore from './components/KnowMore';

const JobSeekers = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* 1. Hero Candidate Career Banner */}
      <JobSeekerBanner />

      {/* 2. Hiring Partner Brands Bar */}
      <div style={{ padding: '36px 0', borderBottom: '1px solid #E2E8F0', background: '#FFFFFF' }}>
        <JobSeekerTrustedBrand />
      </div>

      {/* 3. 4-Step Interactive Candidate Career Journey */}
      <div style={{ padding: '70px 0', background: '#F8FAFC' }}>
        <JobSeekerWorkFlow css={styles.workFlow} />
      </div>

      {/* 4. Candidate Features (Global Companies, Upskill, Support) */}
      <div style={{ padding: '70px 0' }}>
        <JobSeekersFeature css={styles.features} />
      </div>

      {/* 5. Placed Candidate Alumni Testimonials */}
      <div style={{ padding: '70px 0', background: '#FEF5D8' }}>
        <JobSeekersTestimonial />
      </div>

      {/* 6. Candidate Career Registration CTA */}
      <JobSeekersKnowMore />
    </div>
  );
};

export default JobSeekers;