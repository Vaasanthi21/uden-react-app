/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react'

import { Error404Styles as styles } from './styles/404.Styles';
import Error404Component from './components/Component';
import Spacer from '../../components/Spacer';


const Error404 = () => {
  return (
    <>
      <Spacer height/>
      <Error404Component css={styles.error}/>
      <Spacer height/>
    </>
  )
}

export default Error404