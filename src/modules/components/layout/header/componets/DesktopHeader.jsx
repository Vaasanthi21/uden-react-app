/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Logo from '../../../logo/Logo';
import {HeaderStyles as styles} from '../styles/Header.Style';
import { HeaderConst } from '../header.const';
import { AppRoutes } from '../../../../../utils/consts/routes';
import { Badge } from '@mui/material';


const DesktopHeader = ({...props}) => {
  const hooks = props?.hooks??null;
  const data = HeaderConst;
  return (
    <>
      <Logo css={styles.logoDesktop} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}/>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {data.Tabs.Names.map((names,index) => (
              <Badge key={index}  invisible={data?.Tabs?.Badge[index]?false:true} badgeContent={data?.Tabs?.Badge[index]}  color="primary">
              <Button
                startIcon={data.Tabs.Icons[index]}
                css={styles.tabsDesktop({isCurrent:((!hooks.route)?false:data.Tabs.Routes[index].includes(hooks.route))})}
                href={data.Tabs.Routes[index]}
              >
                  {names}
              </Button>
              </Badge>
          ))}
      </Box>
      <Button sx={{ display: { xs: 'none', md: 'flex' } }} href={AppRoutes.APP} variant="contained" css={styles.signupButtonDesktop} size='small' >{data.ButtonStrings.SIGNUP_SIGNIN}</Button>
    </>
  )
}

export default DesktopHeader