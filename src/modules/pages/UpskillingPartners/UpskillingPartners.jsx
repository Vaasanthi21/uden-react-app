/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Divider } from '@mui/material';
// eslint-disable-next-line
import React from 'react'

import { UpskillingPartnersStyles as styles } from './styles/UpskillingPartners.Styles';
import UpskillingPartnersBanner from './components/Banner';
import UpskillingPartnersFeatures from './components/Features';
import UpskillingPartnersTestimonial from './components/Testimonial';
import UpskillingPartnersTrustedBrand from './components/TrustedBrand';
import UpskillingPartnersKnowMore from './components/KnowMore';
import Spacer from '../../components/Spacer';


const UpskillingPartners = () => {
  return (
    <>
      <UpskillingPartnersBanner/>
      <Divider/>
      <UpskillingPartnersTrustedBrand />
      <Divider/>
      <UpskillingPartnersFeatures css={styles.features}/>
      <Spacer height/>
      <UpskillingPartnersTestimonial/>
      <UpskillingPartnersKnowMore/>
    </>
  )
}

export default UpskillingPartners