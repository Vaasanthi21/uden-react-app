/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../logo/Logo';
import { HeaderStyles as styles } from '../styles/Header.Style';
import { HeaderConst } from '../header.const';
import { AppRoutes } from '../../../../../utils/consts/routes';

const DesktopHeader = ({ ...props }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const hooks = props?.hooks ?? null;
  const data = HeaderConst;

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
      <Logo css={styles.logoDesktop} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
        {data.Tabs.Names.map((names, index) => (
          names === HeaderConst.Tabs.Names[4] ? ( // Campus Placements dropdown
            <div key={index}>
              <Button
                startIcon={data.Tabs.Icons[index]}
                onClick={handleCampusPlacementsClick}
                css={styles.tabsDesktop({ isCurrent: false })}
              >
                {names}
              </Button>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleCampusPlacementsClose}
                PaperProps={{
                  elevation: 3,
                  sx: {
                    borderRadius: '12px',
                    mt: 1,
                    minWidth: 160,
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                    '& .MuiMenuItem-root': {
                      fontSize: '14px',
                      fontWeight: '600',
                      color: '#1E293B',
                      py: 1.2,
                      px: 2,
                      '&:hover': {
                        backgroundColor: 'rgba(218, 83, 44, 0.08)',
                        color: '#DA532C',
                      },
                    },
                  },
                }}
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
            <Badge
              key={index}
              invisible={!data?.Tabs?.Badge[index]}
              badgeContent={data?.Tabs?.Badge[index]}
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#DA532C',
                  color: '#FFFFFF',
                  fontSize: '10px',
                  fontWeight: '800',
                  height: '18px',
                  minWidth: '18px',
                  borderRadius: '10px',
                  top: 6,
                  right: 6
                }
              }}
            >
              <Button
                startIcon={data.Tabs.Icons[index]}
                css={styles.tabsDesktop({ isCurrent: ((!hooks.route) ? false : data.Tabs.Routes[index].includes(hooks.route)) })}
                href={data.Tabs.Routes[index]}
              >
                {names}
              </Button>
            </Badge>
          )
        ))}
      </Box>

      <Button
        sx={{ display: { xs: 'none', md: 'flex' } }}
        onClick={() => navigate(AppRoutes.FIND_TALENT)}
        variant="contained"
        css={styles.signupButtonDesktop}
      >
        {data.ButtonStrings.SIGNUP_SIGNIN}
      </Button>
    </>
  );
};

export default DesktopHeader;