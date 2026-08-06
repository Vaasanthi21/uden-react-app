import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import {HeaderStyles as styles} from './styles/Header.Style';
import DesktopHeader from './componets/DesktopHeader';
import MobileHeader from './componets/MobileHeader';
import { useHeaderHooks } from './hooks/header.hooks';

function AppHeader(props) {
  const headerHooks = useHeaderHooks;
  return (
    <AppBar position="sticky"  css={styles.appBar({isPrimary:true})} sx={{px:{ xs: '0', md: '0' },height:{xs:"50px", md:"100px",}}} component="nav">
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <DesktopHeader hooks={headerHooks}/>
          <MobileHeader hooks={headerHooks}/>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default AppHeader;
