import { Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import Spacer from '../../../../components/Spacer';
import { HomeConst } from '../../Home.Const';
import FeatureItems from './FeatureItems';
import IndemandSkills from './IndemandSkills';

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
        <IndemandSkills data={data.bottom}/>
      </Paper>
    )
}

export default Features





