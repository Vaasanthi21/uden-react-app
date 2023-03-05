/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Divider } from '@mui/material';
import React from 'react'
import UpskillingPartnersBanner from './components/Banner';
import UpskillingPartnersFeatures from './components/Features';
import UpskillingPartnersTrustedBrand from './components/TrustedBrand';

const UpskillingPartners = () => {
  return (
    <>
      <UpskillingPartnersBanner/>
      <Divider/>
      <UpskillingPartnersTrustedBrand />
      <UpskillingPartnersFeatures/>
    </>
  )
}

export default UpskillingPartners