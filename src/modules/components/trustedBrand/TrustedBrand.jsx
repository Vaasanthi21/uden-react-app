/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Paper } from '@mui/material'
import { Container } from '@mui/system'

import TrustedBrandStyles from './TrustedBrand.Styles'

const TrustedBrand = (props) => {
  return (
    <Paper {...props} css={TrustedBrandStyles} elevation={0}>    
        <Container className='desktop' sx={{ display: { sm: 'block', xs: 'none' } }} src={props.desktop} alt={props.desktop.split("/")[0]}  component="img"/>
        <Container className='mobile' sx={{ display: { sm: 'none', xs: 'block' } }}  src={props.mobile} alt={props.mobile.split("/")[0]}  component="img"/>    
    </Paper>
  )
}

export default TrustedBrand