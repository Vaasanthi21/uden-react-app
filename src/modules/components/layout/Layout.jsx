import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from "react-router-dom";

import AppHeader from './header/Header';
import AppFooter from './footer/AppFooter';
import KidiChatbot from '../KidiChatbot';

const Layout = () => {
  return (
    <div>
        <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between" sx={{ overflowY: 'visible' }}>
            <AppHeader/>
            <main id="main-content" style={{ width: '100%', flex: '1 0 auto' }}>
              <Outlet/>
            </main>
            <AppFooter/>
            <KidiChatbot/>
        </Box>
    </div>
  );
};

export default Layout;