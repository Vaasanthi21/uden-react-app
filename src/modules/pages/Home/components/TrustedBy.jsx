import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import { HomeConst } from '../Home.Const'

const TrustedBy = (props) => {
    const data = HomeConst.TrustedBy
  return (
    <Paper {...props}>
        <Typography variant='h5'>Trusted By</Typography>
        <Grid container>
            <Grid item xs={5}>
                <Box width='100%' component='img' src={data?.certificate}/>
            </Grid>
            <Grid item xs={5}>
                <Box width='100%' component='img' src={data?.aws}/>
            </Grid>
        </Grid>

    </Paper>
  )
}

export default TrustedBy