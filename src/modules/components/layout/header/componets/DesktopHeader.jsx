/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React, { useState } from 'react'; // Add useState
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu'; // Add Menu
import MenuItem from '@mui/material/MenuItem'; // Add MenuItem

import Logo from '../../../logo/Logo';
import {HeaderStyles as styles} from '../styles/Header.Style';
import { HeaderConst } from '../header.const';
import { AppRoutes } from '../../../../../utils/consts/routes';
import { Badge } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Add useNavigate

const DesktopHeader = ({...props}) => {
  const navigate = useNavigate(); // Add navigation
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown
  const hooks = props?.hooks??null;
  const data = HeaderConst;

  // Dropdown handling functions
  const handleCampusPlacementsClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCampusPlacementsClose = () => {
    setAnchorEl(null);
  };

  const handleCampusPlacementsNavigate = (route) => {
    navigate(route);
    handleCampusPlacementsClose();
  };

  return (
    <>
      <Logo css={styles.logoDesktop} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}/>
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {data.Tabs.Names.map((names, index) => (
              names === HeaderConst.Tabs.Names[4] ? ( // Campus Placements index
                <div key={index}>
                  <Button
                    startIcon={data.Tabs.Icons[index]}
                    onClick={handleCampusPlacementsClick}
                    css={styles.tabsDesktop({isCurrent:false})}
                  >
                    {names}
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleCampusPlacementsClose}
                  >
                    <MenuItem onClick={() => handleCampusPlacementsNavigate(AppRoutes.FOR_CAMPUS)}>
                      For Campus
                    </MenuItem>
                    <MenuItem onClick={() => handleCampusPlacementsNavigate(AppRoutes.FOR_STUDENTS)}>
                      For Students
                    </MenuItem>
                  </Menu>
                </div>
              ) : (
                <Badge key={index} invisible={data?.Tabs?.Badge[index]?false:true} badgeContent={data?.Tabs?.Badge[index]} color="primary">
                  <Button
                    startIcon={data.Tabs.Icons[index]}
                    css={styles.tabsDesktop({isCurrent:((!hooks.route)?false:data.Tabs.Routes[index].includes(hooks.route))})}
                    href={data.Tabs.Routes[index]}
                  >
                    {names}
                  </Button>
                </Badge>
              )
          ))}
      </Box>
      <Button sx={{ display: { xs: 'none', md: 'flex' } }} href={AppRoutes.APP} variant="contained" css={styles.signupButtonDesktop} size='small'>{data.ButtonStrings.SIGNUP_SIGNIN}</Button>
    </>
  )
}

export default DesktopHeader