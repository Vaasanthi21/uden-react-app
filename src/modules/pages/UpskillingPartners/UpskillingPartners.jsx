import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';

import Spacer from '../../components/Spacer';
import UpskillingBanner from './components/Banner';
import CourseRadar from './components/CourseRadar';
import UpskillingFeatures from './components/Features';
import UpskillingKnowMore from './components/KnowMore';
import UpskillingTrustedBrand from './components/TrustedBrand';

const UpskillingPartners = () => {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      {/* 1. Split Diagonal Dark Charcoal Hero with Course Search */}
      <UpskillingBanner />

      {/* 2. Accredited Partner Brands */}
      <UpskillingTrustedBrand />
      <Spacer height />

      {/* 3. Interactive Accredited Course Radar */}
      <CourseRadar />
      <Spacer height />

      {/* 4. Partner Value Propositions */}
      <UpskillingFeatures />
      <Spacer height />

      {/* 5. Partner Onboarding CTA Banner */}
      <UpskillingKnowMore />
    </div>
  );
};

export default UpskillingPartners;