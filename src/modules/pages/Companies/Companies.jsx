/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Divider } from '@mui/material';
// eslint-disable-next-line 
import React from 'react';


import Spacer from '../../components/Spacer';
import CompaniesBanner from './components/Banner';
import CompaniesFeature from './components/Feature';
import CompaniesKnowMore from './components/KnowMore';
import CompaniesTestimonial from './components/Testimonial';
import CompaniesTrustedBrand from './components/TrustedBrand';
import CompaniesWorkFlow from './components/WorkFlow';
import {CompaniesStyles as styles} from './styles/Companies.Styles'; 


const Companies = () => {
  return (
    <>
        <CompaniesBanner/>
        <Divider/>
        <CompaniesTrustedBrand/>
        <Divider/>
        <Spacer height/>
        <CompaniesWorkFlow css={styles.workFlow}/>
        <Spacer height/>
        <CompaniesFeature css={styles.features}/>
        <Spacer height/>
        <CompaniesTestimonial/>
        <CompaniesKnowMore/>
    </>
  )
}

export default Companies