/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react'

import { PrivacyPolicyStyles as styles } from './styles/PrivacyPolicy.Styles';
import PrivacyPolicyComponent from './components/Component';
import Spacer from '../../components/Spacer';


const PrivacyPolicy = () => {
  return (
    <>
      <Spacer height/>
      <PrivacyPolicyComponent css={styles.privacy}/>
      <Spacer height/>
    </>
  )
}

export default PrivacyPolicy