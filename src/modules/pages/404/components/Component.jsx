import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

import PrivacyPolicyConst from '../404.Const'

const Error404Component = (props) => {
    const data = PrivacyPolicyConst
  return (
    <Grid {...props} container>
      <Grid item xs={11} md={10} lg={8}>
        <Typography variant='h4' className='error-title' >{data.title}</Typography>
      </Grid>
      <Grid container direction='row' alignContent='center' justifyContent='center' width='100%'>
            <Grid container item xs={11} direction='row' alignContent='center' justifyContent='center' height='100%' width="100%">
                <Box width={{xs:'100%',md:'auto'} } maxHeight='100%' weight='100%' component='img' src={data?.image}/>
            </Grid>
      </Grid>
      <Grid item xs={11} md={10} lg={8}>
        <Typography variant='caption' className='error-subtitle' >{data.subtitle}</Typography>
      </Grid>
    </Grid>
    
  )
}

export default Error404Component