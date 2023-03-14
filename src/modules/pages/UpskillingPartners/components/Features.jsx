import { Paper, Typography } from '@mui/material'
import React from 'react'
import { AppColors } from '../../../../utils/consts/app_colors'
import FeatureAlternatingImage from '../../../components/feature/FeatureAlternatingImage'
import Spacer from '../../../components/Spacer'
import UpskillingPartnersConst from '../UpskillingPartners.Const'

const UpskillingPartnersFeatures = (props) => {
    const data = UpskillingPartnersConst.Features
  return (
    <Paper {...props} elevation={0} style={{backgroundColor:AppColors.SECONDARY_YELLOW}}>
        <Spacer height multiplier={2}/>
        <Typography className='title' variant='h4'>{data.title}</Typography>
        <Spacer height multiplier={2}/>
            {data.features.map((feature,i)=>
            <FeatureAlternatingImage key={i}  sx={{display:'felx'}} data={feature}  reverse={(i%2).toString()==="0"?'false':'true'} />
            )}
        <Spacer height multiplier={2}/>
      </Paper>
  )
}

export default UpskillingPartnersFeatures