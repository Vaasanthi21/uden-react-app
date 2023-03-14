import { Box } from '@mui/material';
import React from 'react'
import {Outlet } from "react-router-dom";

import AppHeader from './header/Header';
import AppFooter from './footer/AppFooter';


const Layout = () => {
  return (
    <div>
        <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between">
            <AppHeader/>
            <Outlet/>
            <AppFooter/>
        </Box>
    </div>
  )
}

export default Layout