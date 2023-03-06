import { Box } from '@mui/material';
import React from 'react'
import {Outlet } from "react-router-dom";


import Header from './header/Header';
import { Footer } from './footer/Footer';


const Layout = () => {
  return (
    <div>
        <Box minHeight="100vh" display="flex" flexDirection="column" justifyContent="space-between">
            <Header/>
                <Outlet/>
                <Footer/>
            
        </Box>
    </div>
  )
}

export default Layout