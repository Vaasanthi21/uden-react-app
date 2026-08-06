import React from 'react';
import { Box, Link } from '@mui/material';
import LOGO from 'assets/images/header-logo.png';
import { AppRoutes } from '../../../utils/consts/routes';

const Logo = props => {
  return (
    <Box {...props}>
      <Link href={AppRoutes.HOME} aria-label="UDEN Home Page">
          <Box width="auto" height="100%" component='img' className='child' src={LOGO} alt="UDEN Official Platform Logo" sx={{ objectFit: 'contain', aspectRatio: '131/48' }} />
      </Link>
    </Box>
  );
};

export default Logo;