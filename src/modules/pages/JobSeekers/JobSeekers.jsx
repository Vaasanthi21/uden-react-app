/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react';

import {JobSeekersStyles as styles} from './styles/JobSeekers.Styles'
import JobSeekerBanner from './components/Banner'
import JobSeekerTrustedBrand from './components/TrustedBrand'
import JobSeekerWorkFlow from './components/WorkFlow'
import Spacer from '../../components/Spacer';
import JobSeekersFeature from './components/Features';
import JobSeekersTestimonial from './components/Testimonial';
import JobSeekersKnowMore from './components/KnowMore';

const JobSeekers = () => {
  return (
    <>
      <JobSeekerBanner/>
      <JobSeekerTrustedBrand/>
      <Spacer height/>
      <JobSeekerWorkFlow css={styles.workFlow}/>
      <Spacer height/>
      <JobSeekersFeature css={styles.features}/>
      <Spacer height/>
      <JobSeekersTestimonial/>
      <JobSeekersKnowMore/>
    </>
  )
}

export default JobSeekers