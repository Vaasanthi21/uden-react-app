/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Logo from '../../../Logo';
import {HeaderStyles} from './Header.Style';
import { HeaderConst } from './header.const';
import { AppStrigs } from '../../../../../utils/consts/strings';


const tabs = HeaderConst.Tabs;

const DesktopHeader = () => {
  var route = window.location.href.split(window.location.host)[1];
  route = route.split("/")[1];
  console.log(route.toString())

  return (
    <>
          <Logo css={HeaderStyles.logoDesktop} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}/>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {tabs.Names.map((names,index) => (
                <Button
                  startIcon={tabs.Icons[index]}
                  css={HeaderStyles.tabsDesktop({isCurrent:(!route&&index===0)?true:((!route&&index!==0)?false:tabs.Routes[index].includes(route))})}
                  key={names}
                  href={tabs.Routes[index]}
                >
                  {names}
                </Button>
              ))}
            </Box>
            <Button sx={{ display: { xs: 'none', md: 'flex' } }} variant="contained" css={HeaderStyles.signupButtonDesktop} size="large">{AppStrigs.ButtonStrings.SIGNUP_SIGNIN}</Button>
    </>
  )
}

export default DesktopHeader