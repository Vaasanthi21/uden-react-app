import {  Grid } from '@mui/material'
import React from 'react'


import { BlogsConst } from '../Blogs.Const'
import BlogCard from './BlogCard/BlogCard'

const BlogList = (props) => {
  const data = BlogsConst.Blogs
  return (
    <Grid container  spacing={2} justifyContent='center' >
          <Grid item xs={11}>
            <Grid container justifyContent="center" spacing={2} >
              {data.map((value,i) => (
                <Grid key={i} item xs={11} sm={6} md={4} lg={3} height={450}>
                  <BlogCard data={value}/>
                  {/* <Card sx={{height:'100%'}} >
                    <CardMedia
                      component='img'
                      className='founder-card-image'
                      height={300}
                      width='100%'
                      image={value?.image}
                      title={value?.title}
                    />
                    <CardContent className='founder-card-content'>
                      <Grid container justifyContent='center' alignItems='center'>
                        <Grid item>
                          <Typography className='founder-card-name' variant='subtitle1' ><Link underline='none' href={AppRoutes.BLOG(value?.id)}>{value?.title}</Link></Typography>
                          <Typography className='founder-card-name' variant='caption' >{value?.body[0].paragraphs[0].substring(0,100)}...</Typography>
                        </Grid>
                        <Grid item>
                        </Grid>
                      </Grid>
                      <Typography className='founder-card-designation' variant='subtitle1' component="p">{value?.designation}</Typography>
                      {data.message && <Typography className='founder-card-message' variant="caption" component="p">{value?.message}</Typography>}
                    </CardContent>
                  </Card> */}
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
  )
}

export default BlogList