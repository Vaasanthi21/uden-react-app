import { Divider, Grid, Paper, Typography } from '@mui/material';
import React from 'react'
import FeatureAlternating from '../../../../components/feature/FeatureAlternating';
import Spacer from '../../../../components/Spacer'
import { BlogsConst }from '../../Blogs.Const'
import IndemandSkills from './IndemandSkills';

const HomeFeatures = (props) => {
    const data = BlogsConst.Features;
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
        {data.features.map((feature,i)=><FeatureAlternating key={i} {...props} data={feature} right={(i%2).toString()==="1"?'false':'true'} />)}
        <IndemandSkills data={data.bottom}/>
      </Paper>
    )
}

export default HomeFeatures





