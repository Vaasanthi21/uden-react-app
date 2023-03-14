/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react'

import { PrivacyPolicyStyles as styles } from './styles/KnowMoreForm.Styles';
import KnowMoreFormComponent from './components/Form';


const KnowMoreForm = () => {
  return (
    <>
      <KnowMoreFormComponent css={styles.form} />
    </>
  )
}

export default KnowMoreForm