import { Container, Paper } from '@mui/material'
import React from 'react'
import { HomeConst } from '../Home.Const'

const TrustedBrand = (props) => {
  return (
    <Paper {...props}>    
        <Container className='desktop' sx={{ display: { sm: 'block', xs: 'none' } }} src={HomeConst.TrustedBrand.TrustedBrand} alt={HomeConst.TrustedBrand.TrustedBrand.split("/")[0]}  component="img"/>
        <Container className='mobile' sx={{ display: { sm: 'none', xs: 'block' } }}  src={HomeConst.TrustedBrand.TrustedBrandMobile} alt={HomeConst.TrustedBrand.TrustedBrandMobile.split("/")[0]}  component="img"/>    
    </Paper>
  )
}

export default TrustedBrand