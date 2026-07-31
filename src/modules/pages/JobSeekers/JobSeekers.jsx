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
import MultiJobSearch from '../Home/components/MultiJobSearch';
import CompanyPrepExplorer from '../Home/components/CompanyPrepExplorer';
import FeatureOdyssey from '../../components/feature/FeatureOdyssey';
import MatchingEngine from '../../components/feature/MatchingEngine';
import SuccessTerminal from '../../components/feature/SuccessTerminal';
import HeroArchitectured from '../../components/feature/HeroArchitectured';

import ScrollReveal from '../../components/layout/ScrollReveal';

const JobSeekers = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', background: '#FFFFFF' }}>
      {/* 1. Hero Potential Architectured & Interactive Skills Snapshot */}
      <HeroArchitectured />

      {/* 2. Hero Candidate Career Banner */}
      <JobSeekerBanner />

      {/* 2. Hiring Partner Brands Bar */}
      <div style={{ padding: '36px 0', borderBottom: '1px solid #E2E8F0', background: '#FFFFFF' }}>
        <JobSeekerTrustedBrand />
      </div>

      {/* 3. Multi-Job Board Search Engine (100,000+ Jobs Aggregated) */}
      <div style={{ padding: '60px 0', background: '#FFFDF7' }}>
        <MultiJobSearch />
      </div>

      {/* 4. Company-Specific Round-by-Round Prep, PYQs & AI Video Interview Simulator */}
      <div style={{ padding: '60px 0', background: '#FFFFFF' }}>
        <CompanyPrepExplorer />
      </div>

      {/* 4.5 The Feature Odyssey: Learning Path & Superpowers */}
      <ScrollReveal threshold={0.1}>
        <FeatureOdyssey />
      </ScrollReveal>

      {/* 4.8 AI Matching Engine */}
      <ScrollReveal threshold={0.1}>
        <MatchingEngine />
      </ScrollReveal>

      {/* 4.9 The Success Terminal */}
      <ScrollReveal threshold={0.1}>
        <SuccessTerminal />
      </ScrollReveal>

      {/* 5. 4-Step Interactive Candidate Career Journey */}
      <div style={{ padding: '70px 0', background: '#F8FAFC' }}>
        <JobSeekerWorkFlow css={styles.workFlow} />
      </div>

      {/* 6. Candidate Features (Global Companies, Upskill, Support) */}
      <div style={{ padding: '70px 0' }}>
        <JobSeekersFeature css={styles.features} />
      </div>

      {/* 7. Placed Candidate Alumni Testimonials */}
      <div style={{ padding: '70px 0', background: '#FEF5D8' }}>
        <JobSeekersTestimonial />
      </div>

      {/* 8. Candidate Career Registration CTA */}
      <JobSeekersKnowMore />
    </div>
  );
};

export default JobSeekers;