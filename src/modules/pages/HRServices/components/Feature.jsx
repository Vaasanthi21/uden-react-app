import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { AppColors } from '../../../../utils/consts/app_colors'
import FeatureAlternatingImage from '../../../components/feature/FeatureAlternatingImage'

import Spacer from '../../../components/Spacer'
import HRServicesConst from '../HRServices.Const'

const HRServicesFeature = (props) => {
    const data = HRServicesConst.Features
  return (
    <Paper {...props} elevation={0} style={{backgroundColor:AppColors.SECONDARY_YELLOW}}>
        <Spacer height multiplier={2}/>
        <Typography className='title' variant='h4'>{data.title}</Typography>
        <Typography className='subtitle' variant='subtitle1' >{data.subtitle}</Typography>
        <Spacer height multiplier={2}/>
        <Grid container direction='row' alignContent='center' justifyContent='center' height={{xs:'400px',md:'600px'}}>
            <Grid container item xs={10} direction='row' alignContent='center' justifyContent='center' height='100%' width="100%">
                <Box width={{xs:'100%',md:'auto'} } maxHeight='100%' weight='100%' component='img' src={data?.image}/>
            </Grid>
        </Grid>
        <Spacer height/>
            {data.features.map((feature,i)=>
            <FeatureAlternatingImage key={i}  sx={{display:'felx'}} data={feature}  reverse={(i%2).toString()==="0"?'false':'true'} />
            )}
        <Spacer height multiplier={2}/>
      </Paper>
  )
}

export default HRServicesFeature