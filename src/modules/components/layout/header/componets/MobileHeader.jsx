/** @jsxRuntime classic */
/** @jsx jsx */

// eslint-disable-next-line
import React from 'react';

import {jsx} from '@emotion/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../../logo/Logo';
import {HeaderStyles as styles} from '../styles/Header.Style';
import Drawer from './Drawer';


const MobileHeader = ({...props}) => {
  const hooks = props.hooks;
  const {handleDrawerToggle,closeDrawer,isDrawer} = hooks.useDrawer();   
  return (
      <>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flex:1 }} >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            // onClick={handleOpenNavMenu}
            onClick={handleDrawerToggle}
            color="black"
          >
            <MenuIcon />
          </IconButton>
          </Box>
          <Logo css={styles.logoMobile} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flex:1 }} />
          <Drawer props={{handleDrawerToggle,isDrawer,closeDrawer,hooks}} />
      </>
  )
}

export default MobileHeader