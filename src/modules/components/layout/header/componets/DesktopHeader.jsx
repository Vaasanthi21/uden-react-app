/** @jsxRuntime classic */
/** @jsx jsx */

// eslint-disable-next-line
import React from 'react';

import {jsx} from '@emotion/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Logo from '../../../logo/Logo';
import {HeaderStyles as styles} from '../styles/Header.Style';
import { AppStrigs } from '../../../../../utils/consts/strings';
import { HeaderConst } from '../header.const';
import { AppRoutes } from '../../../../../utils/consts/routes';


const DesktopHeader = ({...props}) => {
  const hooks = props?.hooks??null;
  const tabs = HeaderConst.Tabs;
  return (
    <>
          <Logo css={styles.logoDesktop} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {tabs.Names.map((names,index) => (
                <Button
                  startIcon={tabs.Icons[index]}
                  css={styles.tabsDesktop({isCurrent:(!hooks.route&&index===0)?true:((!hooks.route&&index!==0)?false:tabs.Routes[index].includes(hooks.route))})}
                  key={names}
                  href={tabs.Routes[index]}
                >
                  {names}
                </Button>
              ))}
            </Box>
            <Button sx={{ display: { xs: 'none', md: 'flex' } }} href={AppRoutes.APP} variant="contained" css={styles.signupButtonDesktop} size="large">{AppStrigs.ButtonStrings.SIGNUP_SIGNIN}</Button>
    </>
  )
}

export default DesktopHeader