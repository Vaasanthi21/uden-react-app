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
  const [jobSeekersAnchorEl, setJobSeekersAnchorEl] = useState(null);
  const hooks = props?.hooks ?? null;
  const data = HeaderConst;

  const handleJobSeekersClick = (event) => {
    setJobSeekersAnchorEl(event.currentTarget);
  };

  const handleJobSeekersClose = () => {
    setJobSeekersAnchorEl(null);
  };

  const handleJobSeekersNavigate = (targetRoute) => {
    navigate(targetRoute);
    handleJobSeekersClose();
  };

  return (
    <>
      <Logo css={styles.logoDesktop} sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }} />
      <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center', gap: 1 }}>
        {data.Tabs.Names.map((names, index) => {
          const route = data.Tabs.Routes[index];
          const isCurrent = Boolean(hooks?.route && route && route.includes(hooks.route));
          const hasBadge = Boolean(data?.Tabs?.Badge[index]);
          const isJobSeekers = route === AppRoutes.JOB_SEEKERS;

          return (
            <React.Fragment key={index}>
              <Badge
                invisible={!hasBadge}
                badgeContent={data?.Tabs?.Badge[index]}
                sx={{
                  '& .MuiBadge-badge': {
                    backgroundColor: '#F55825',
                    color: '#FFFFFF',
                    fontSize: '9.5px',
                    fontWeight: '900',
                    height: '16px',
                    minWidth: '28px',
                    borderRadius: '8px',
                    top: 0,
                    right: 12,
                    boxShadow: '0 2px 6px rgba(245, 88, 37, 0.4)'
                  }
                }}
              >
                {isJobSeekers ? (
                  <Button
                    startIcon={data.Tabs.Icons[index]}
                    css={styles.tabsDesktop({ isCurrent })}
                    onClick={handleJobSeekersClick}
                    aria-controls={Boolean(jobSeekersAnchorEl) ? 'job-seekers-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={Boolean(jobSeekersAnchorEl) ? 'true' : undefined}
                  >
                    <span style={{ textAlign: 'center', lineHeight: 1.2 }}>{names} ▼</span>
                  </Button>
                ) : (
                  <Button
                    startIcon={data.Tabs.Icons[index]}
                    css={styles.tabsDesktop({ isCurrent })}
                    href={route === AppRoutes.CAMPUS_PLACEMENTS ? AppRoutes.FOR_CAMPUS : route}
                  >
                    <span style={{ textAlign: 'center', lineHeight: 1.2 }}>{names}</span>
                  </Button>
                )}
              </Badge>

              {/* Job Seekers Dropdown Menu */}
              {isJobSeekers && (
                <Menu
                  id="job-seekers-menu"
                  anchorEl={jobSeekersAnchorEl}
                  open={Boolean(jobSeekersAnchorEl)}
                  onClose={handleJobSeekersClose}
                  MenuListProps={{ 'aria-labelledby': 'job-seekers-button' }}
                  PaperProps={{
                    sx: {
                      borderRadius: '16px',
                      mt: 1,
                      boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)',
                      border: '1px solid #E2E8F0',
                      p: 0.5
                    }
                  }}
                >
                  <MenuItem 
                    onClick={() => handleJobSeekersNavigate('/job-seekers?tab=student')}
                    sx={{ borderRadius: '10px', py: 1.2, px: 2, fontWeight: 700, fontSize: '13.5px', color: '#1E293B' }}
                  >
                    🎓 For Students (3rd Year Onwards)
                  </MenuItem>
                  <MenuItem 
                    onClick={() => handleJobSeekersNavigate('/job-seekers?tab=experienced')}
                    sx={{ borderRadius: '10px', py: 1.2, px: 2, fontWeight: 700, fontSize: '13.5px', color: '#1E293B' }}
                  >
                    💼 For Experienced Candidates
                  </MenuItem>
                </Menu>
              )}
            </React.Fragment>
          );
        })}
      </Box>

      <Button
        sx={{ display: { xs: 'none', md: 'flex' } }}
        onClick={() => { window.location.href = 'https://cps.uden.tech/log_in'; }}
        variant="contained"
        css={styles.signupButtonDesktop}
      >
        {data.ButtonStrings.SIGNUP_SIGNIN}
      </Button>
    </>
  );
};

export default DesktopHeader;