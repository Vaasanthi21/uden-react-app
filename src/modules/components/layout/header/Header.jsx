/** @jsxRuntime classic */
/** @jsx jsx */

import {jsx} from '@emotion/react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';


import {HeaderStyles} from './componets/Header.Style';
import DesktopHeader from './componets/DesktopHeader';
import MobileHeader from './componets/MobileHeader';



function Header(props) {
  
  return (
    <AppBar position="sticky"  css={HeaderStyles.appBar({isPrimary:true})} sx={{px:{ xs: '0', md: '0' }}} component="nav">
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <DesktopHeader/>
          <MobileHeader/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;



