import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import Spacer from '../../components/Spacer';
import AboutBanner from './components/Banner';
import AboutTimeline from './components/AboutTimeline';
import LeadershipTeam from './components/LeadershipTeam';
import AdvisorBoard from './components/AdvisorBoard';
import AboutKnowMore from './components/KnowMore';

const AboutUs = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. Typographic Mission Statement Banner */}
      <AboutBanner />

      {/* 2. Interactive Milestone Timeline */}
      <AboutTimeline />
      <Spacer height />

      {/* 3. Leadership Team */}
      <LeadershipTeam />
      <Spacer height />

      {/* 4. Advisor & Angel Investor Section */}
      <AdvisorBoard />
      <Spacer height />

      {/* 5. About Us CTA Banner */}
      <AboutKnowMore />
    </div>
  );
};

export default AboutUs;