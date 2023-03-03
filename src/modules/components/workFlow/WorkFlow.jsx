/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Grid, Paper } from '@mui/material'
import { Container } from '@mui/system'

import WorkFlowStyles from './WorkFlow.Styles'

const WorkFlow = (props) => {
    const data = props?.data;
  return (
    <Paper {...props} css={WorkFlowStyles} elevation={0}>    
        <Grid container className='main-grid' >
        <Grid item xs={10} className='item-grid'>
            <Container sx={{ display: { xs: 'block', sm: 'none' } }} src={data?.mobile} alt={data?.mobile?.split("/")[0]}  component="img"/>  
            <Container sx={{ display: { xs: 'none', sm: 'block' ,md:'none' } }} src={data?.tablet} alt={data?.mobile?.split("/")[0]}  component="img"/>  
            <Container sx={{ display: { xs:'none', md: 'block'} }} src={data?.desktop} alt={data?.mobile?.split("/")[0]}  component="img"/>  
        </Grid>
        </Grid>
    </Paper>
  )
}

export default WorkFlow