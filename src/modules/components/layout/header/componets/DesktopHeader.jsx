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
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        {data.Tabs.Names.map((names, index) => {
          const route = data.Tabs.Routes[index];
          const isCurrent = Boolean(hooks?.route && route && route.includes(hooks.route));
          const hasBadge = Boolean(data?.Tabs?.Badge[index]);

          return names === HeaderConst.Tabs.Names[4] ? ( // Campus Placements dropdown
            <div key={index}>
              <Button
                startIcon={data.Tabs.Icons[index]}
                onClick={handleCampusPlacementsClick}
                css={styles.tabsDesktop({ isCurrent })}
              >
                <span style={{ textAlign: 'center', lineHeight: 1.2 }}>{names}</span>
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
              invisible={!hasBadge}
              badgeContent={data?.Tabs?.Badge[index]}
              sx={{
                '& .MuiBadge-badge': {
                  backgroundColor: '#DA532C',
                  color: '#FFFFFF',
                  fontSize: '9.5px',
                  fontWeight: '900',
                  height: '16px',
                  minWidth: '28px',
                  borderRadius: '8px',
                  top: 0,
                  right: 12,
                  boxShadow: '0 2px 6px rgba(218, 83, 44, 0.4)'
                }
              }}
            >
              <Button
                startIcon={data.Tabs.Icons[index]}
                css={styles.tabsDesktop({ isCurrent })}
                href={route}
              >
                <span style={{ textAlign: 'center', lineHeight: 1.2 }}>{names}</span>
              </Button>
            </Badge>
          );
        })}
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