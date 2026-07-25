import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Box, Grid, Paper, Typography } from '@mui/material'
import TrustedByStyles from './TrustedBy.Styles.js'

const TrustedBy = (props) => {
    const data = props?.data;
  return (
    <Paper {...props} css={TrustedByStyles} elevation={0}>
        <Typography className='trustedby-title' variant='h3'>{data?.title}</Typography>
        <Grid container justifyContent='space-evenly' alignItems='center'>
            <Grid item xs={5}  >
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