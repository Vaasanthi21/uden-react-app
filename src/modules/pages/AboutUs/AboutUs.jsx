/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react'

import { AboutUsStyles as styles } from './styles/AboutUs.Styles';
import AboutUsBanner from './components/Banner';
import AboutUsLeadershipTeam from './components/LeadershipTeam';
import AboutUsAdvisoryBoard from './components/AdvisoryBoard';
import AboutUsTrustedBrand from './components/TrustedBy';
import Spacer from '../../components/Spacer';


const AboutUs = () => {
  return (
    <>
      <AboutUsBanner css={styles.banner}/>
      <Spacer height/>
      <AboutUsTrustedBrand />
      <Spacer height/>
      <AboutUsLeadershipTeam css={styles.leadershipTeam}/>
      <AboutUsAdvisoryBoard css={styles.advisoryBoard}/>
    </>
  )
}

export default AboutUs