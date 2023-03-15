import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

import Share from '../../../../../components/Share'
import Spacer from '../../../../../components/Spacer'

const BlogTitle = (props) => {
    const data = props.data
  return (
    <Box {...props}>
      <Grid container item xs={12} className='blogtitle-image-container'>
        <Box maxHeight='400px'  maxWidth='100%'  component='img' src={data.image} alt={data.image} />
      </Grid>
        <Spacer height/>
        <Typography className='blogtitle-title' variant='h3' >{data.title}</Typography>
        <Spacer height/>
        <Divider/>
        <Box m={2} display='flex' justifyContent='space-between'>
          <Box textAlign='start'>
            <Typography className='blogtitle-publish' variant='h6' >Published: {data.published}</Typography>
            <Typography className='blogtitle-publish' variant='subtitle2' >By:{data.publisher}</Typography>
          </Box>
          <Box>
            <Share data={{title:data.title,url:window.location.href,text:`Check out this awesome blog post on "${data.title}"`}}/>
          </Box>
        </Box>
        <Divider/>
    </Box>
  )
}

export default BlogTitle