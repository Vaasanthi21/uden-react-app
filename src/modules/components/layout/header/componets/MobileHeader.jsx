/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState } from 'react';
import { jsx } from '@emotion/react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Collapse from '@mui/material/Collapse';

import Logo from '../../../logo/Logo';
import { HeaderStyles as styles } from '../styles/Header.Style';
import Drawer from './Drawer';

const MobileHeader = ({ ...props }) => {
  const hooks = props.hooks;
  const { handleDrawerToggle, closeDrawer, isDrawer } = hooks.useDrawer();

  // State to handle dropdown toggle
  const [campusOpen, setCampusOpen] = useState(false);

  return (
    <>
      <Box sx={{ display: { xs: 'flex', md: 'none' }, flex: 1 }}>
        <IconButton
          size="large"
          aria-label="menu"
          onClick={handleDrawerToggle}
          color="black"
        >
          <MenuIcon />
        </IconButton>
      </Box>
      <Logo css={styles.logoMobile} sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flex: 1 }} />
      <Drawer props={{ handleDrawerToggle, isDrawer, closeDrawer, hooks }}>
        <ul>
          <li>
            <button onClick={() => setCampusOpen(!campusOpen)} style={{ width: '100%', textAlign: 'left' }}>
              Campus Placements {campusOpen ? '▲' : '▼'}
            </button>
            <Collapse in={campusOpen}>
              <ul style={{ paddingLeft: '20px' }}>
                <li><a href="/for-campus">For Campus</a></li>
                <li><a href="/for-students">For Students</a></li>
              </ul>
            </Collapse>
          </li>
        </ul>
      </Drawer>
    </>
  );
}

export default MobileHeader;
