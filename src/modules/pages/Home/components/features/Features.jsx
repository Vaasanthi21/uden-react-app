import { Box, Card, Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import { AppAssets } from '../../../../../utils/consts/app_assets';
import Spacer from '../../../../components/Spacer';
import { HomeConst } from '../../Home.Const';
import FeatureItems from './FeatureItems';

const Features = (props) => {
    const data = HomeConst.Features;
    return (
      <Paper {...props} elevation={0}>
        <Spacer height multiplier={2}/>
        <Typography className='title' variant='h5'>{data.title}</Typography>
        <Spacer height multiplier={2}/>
        <Grid container direction='row' justifyContent='center'>
            <Grid item xs={4}>
                <Divider className='divider'/>
            </Grid>
        </Grid>
        {data.features.map((feature,i)=><FeatureItems key={i} {...props} data={feature} display={(i%2).toString()==="1"} />)}
        <Paper>
        <Grid  container direction='column' height={"100%"}  justifyContent='center'>
                <Grid item xs={2} >
                    <Typography className='feature-title' variant='h6'>{data?.bottom.title}</Typography>
                </Grid>
                <Grid item xs={6} >
                    <Box className='feature-description-container'>
                        <Typography className='feature-description' fontSize={{xs:'10px'}} variant='caption'>{data?.bottom.description}</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3} >
                    <Box component='img' src={data?.bottom.image}/>
                </Grid>
            </Grid>
        </Paper>
      </Paper>
    )
}

export default Features





