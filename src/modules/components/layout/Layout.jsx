import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from "react-router-dom";

import AppHeader from './header/Header';
import AppFooter from './footer/AppFooter';
import KidiChatbot from '../KidiChatbot';
import { FormModalProvider } from '../modal/FormModalContext';
import FormModal from '../modal/FormModal';

const Layout = () => {
  return (
    <FormModalProvider>
      <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between" sx={{ overflowY: 'visible' }}>
        <AppHeader/>
        <main id="main-content" style={{ width: '100%', flex: '1 0 auto' }}>
          <Outlet/>
        </main>
        <AppFooter/>
        <KidiChatbot/>
        <FormModal />
      </Box>
    </FormModalProvider>
  );
};

export default Layout;