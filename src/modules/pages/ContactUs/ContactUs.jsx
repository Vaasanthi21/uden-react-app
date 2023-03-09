/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react'

import { AboutUsStyles as styles } from './styles/ContactUs.Styles';
import ContactUsBanner from './components/Banner';
import Spacer from '../../components/Spacer';
import ContactUsForm from './components/Form';
import ContactUsGlobalOffices from './components/GlobalOffices';


const ContactUs = () => {
  return (
    <>
      <ContactUsBanner/>
      <ContactUsForm css={styles.form} />
      <Spacer height/>
      <ContactUsGlobalOffices css={styles.globalOffices}/>
    </>
  )
}

export default ContactUs