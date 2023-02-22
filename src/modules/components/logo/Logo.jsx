
import { Link } from '@mui/material'
import React from 'react'
import LOGO from '../../../assets/images/header-logo.png'
import { AppRoutes } from '../../../utils/consts/routes'



const Logo = (props) => {
  return (
    <Link href={AppRoutes.HOME} {...props}>
        <img src={LOGO} alt="logo" />
    </Link>
    
  )
}

export default Logo