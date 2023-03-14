import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { AppColors } from '../../../../utils/consts/app_colors'
import FeatureCard from '../../../components/feature/FeatureCard'

import Spacer from '../../../components/Spacer'
import CompaniesConst from '../Companies.Const'

const CompaniesFeature = (props) => {
    const data = CompaniesConst.Features
  return (
    <Paper {...props} elevation={0} style={{backgroundColor:AppColors.SECONDARY_YELLOW}}>
        <Spacer height multiplier={2}/>
        <Typography className='title' variant='h4'>{data.title}</Typography>
        <Spacer height multiplier={2}/>
        <Grid container direction='row' alignContent='center' justifyContent='center'>
            <Grid container item xs={10} direction='row' alignContent='center' justifyContent='center'>
                <Box width={{xs:'100%',md:'auto'} } component='img' src={data?.image}/>
            </Grid>
        </Grid>
        <Spacer height multiplier={8}/>
        <Grid container  
        columnSpacing={{ lg: 16, xl:2 }} 
        rowSpacing={{ xs: 6 }}  
        columns={{ xs: 4, sm: 8, md: 12,}} 
        alignContent='center' 
        paddingX={{ xs: 4, sm: 12, md: 32, lg: 16,xl:4 }}>
            {data.features.map((feature,i)=>
                <Grid container key={i} item  xs={12} lg={6} xl={3} justifyContent='center'>
                    <FeatureCard   sx={{display:'felx'}} data={feature} stacked='true' expanded='true' />
                </Grid>
            )}
        </Grid>
        <Spacer height multiplier={2}/>
      </Paper>
  )
}

export default CompaniesFeature