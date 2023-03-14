import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../../../components/Spacer'
import { BlogsConst } from '../../../Blogs.Const'

const BlogTitle = () => {
    const id = window.location.pathname.split("/")[2]
    const data = BlogsConst.Blogs.filter((blog)=>blog.id===id)[0]
  return (
    <div>
        <Grid container justifyContent='center' >
            <Grid item xs={12} justifyContent='center'>
                <Box height='400px'  width='100%'  component='img' src={data.image} alt={data.image} />
            </Grid>
        </Grid>
        <Spacer height/>
        <Typography variant='h3' >{data.title}</Typography>
        
    </div>
  )
}

export default BlogTitle