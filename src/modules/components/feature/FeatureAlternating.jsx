import { Grid } from '@mui/material';
import React from 'react'
import FeatureCard from './FeatureCard';

const FeatureAlternating = (props) => {
    const data = props.data;
    const visible = props.right==='true'?true:false;
    const stacked = props.stacked==='true'?true:false;
    const expanded = props.expanded==='true'?true:false;
  return (
    <Grid {...props} container className='feature-main-grid' direction={"row"} >
        <FeatureCard data={data} visible={visible?'true':'false'} stacked={stacked?'true':'false'} expanded={expanded?'true':'false'} />
        <FeatureCard data={data} visible={visible?'false':'true'} stacked={stacked?'true':'false'} expanded={expanded?'true':'false'} />
    </Grid>
  )
}

export default FeatureAlternating