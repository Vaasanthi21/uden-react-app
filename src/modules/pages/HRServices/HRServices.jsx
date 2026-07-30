/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React from 'react';

import Spacer from '../../components/Spacer';
import HRServicesBanner from './components/Banner';
import HRServicesFeature from './components/Feature';
import HRServicesKnowMore from './components/KnowMore';
import HRServicesTestimonial from './components/Testimonial';
import HRServicesTrustedBrand from './components/TrustedBrand';
import HRServicesWorkFlow from './components/WorkFlow';
import HROfferingsHub from './components/HROfferingsHub';
import { HRServicesStyles as styles } from './styles/Companies.Styles';

const HRServices = () => {
  return (
    <>
      <HRServicesBanner />
      <HROfferingsHub />
      <HRServicesTrustedBrand />
      <Spacer height />
      <HRServicesWorkFlow css={styles.workFlow} />
      <Spacer height />
      <HRServicesFeature css={styles.features} />
      <Spacer height />
      <HRServicesTestimonial />
      <HRServicesKnowMore />
    </>
  );
};

export default HRServices;