/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react'

import { TermsAndConditionStyles as styles } from './styles/TermsAndConditions.Styles';
import TermsAndConditionsComponent from './components/Component';
import Spacer from '../../components/Spacer';


const TermsAndConditions = () => {
  return (
    <>
      <Spacer height/>
      <TermsAndConditionsComponent css={styles.terms}/>
      <Spacer height/>
    </>
  )
}

export default TermsAndConditions