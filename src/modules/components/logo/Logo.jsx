import React from 'react';
import { Box, Link } from '@mui/material';
import LOGO from '../../../assets/images/header-logo.png';
import { AppRoutes } from '../../../utils/consts/routes';

const Logo = props => {
  return (
    <Box  {...props}>
      <Link href={AppRoutes.HOME}>
          <Box width="100%" height="100%"  component='img' className='child' src={LOGO} alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;