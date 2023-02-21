/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Logo from '../../../Logo';
import {HeaderStyles} from './Header.Style';
import Drawer from './Drawer';


const MobileHeader = (props) => {
  const [isDrawer, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = ()=>{
        setMobileOpen((prevState) => !prevState);
  };

  const closeDrawer = ()=>{
    setMobileOpen(true);
};        
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
          <Logo css={HeaderStyles.logoMobile} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flex:1 }} />
          <Drawer props={{handleDrawerToggle,isDrawer,closeDrawer}} />
      </>
  )
}

export default MobileHeader