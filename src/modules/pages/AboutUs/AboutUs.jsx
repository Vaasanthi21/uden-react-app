/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Divider } from '@mui/material';
// eslint-disable-next-line
import React from 'react'

import { AboutUsStyles as styles } from './styles/AboutUs.Styles';
import AboutUsBanner from './components/Banner';
import AboutUsLeadershipTeam from './components/LeadershipTeam';
import AboutUsAdvisoryBoard from './components/AdvisoryBoard';
import UpskillingPartnersTrustedBrand from './components/TrustedBy';
// import UpskillingPartnersKnowMore from './components/KnowMore';
import Spacer from '../../components/Spacer';


const AboutUs = () => {
  return (
    <>
      <AboutUsBanner css={styles.banner}/>
      <Divider/>
      <Spacer height/>
      <UpskillingPartnersTrustedBrand />
      <Divider/>
      <Spacer height/>
      <AboutUsLeadershipTeam css={styles.leadershipTeam}/>
      <AboutUsAdvisoryBoard css={styles.advisoryBoard}/>
      {/* <UpskillingPartnersKnowMore/> */}
    </>
  )
}

export default AboutUs