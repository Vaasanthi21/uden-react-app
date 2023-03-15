import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../../../components/Spacer'

const BlogTitle = (props) => {
    const data = props.data
  return (
    <div>
        <Grid {...props} container justifyContent='center' >
            <Grid item xs={12} justifyContent='center'>
                <Box height='300px'  maxWidth='100%'  component='img' src={data.image} alt={data.image} />
            </Grid>
        </Grid>
        <Spacer height/>
        <Typography variant='h3' >{data.title}</Typography>
        
    </div>
  )
}

export default BlogTitle