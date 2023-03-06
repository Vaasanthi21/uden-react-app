import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

import FounderCard from '../../../components/founderCard/FounderCard'
import Spacer from '../../../components/Spacer'
import AboutUsConst from '../AboutUs.Const'

const AboutUsAdvisoryBoard = (props) => {
    const data = AboutUsConst.AdvisoryBoard
  return (
    <Paper {...props} elevation={0}>
      <Spacer height multiplier={2}/>
        <Typography className='advisory-board-title' variant='h4'>{data.title}</Typography>
        <Typography className='advisory-board-subtitle' variant='subtitle1'>{data.subtitle}</Typography>
        <Spacer height multiplier={2}/>
        <Grid container  spacing={2} justifyContent='center' >
          <Grid item xs={11}>
            <Grid container justifyContent="center" spacing={2}>
              {data.advisor.map((value) => (
                <Grid key={value} item xs={10} sm={6} md={4} lg={3} >
                  <FounderCard data={value}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      <Spacer height multiplier={2}/>
    </Paper>
  )
}

export default AboutUsAdvisoryBoard