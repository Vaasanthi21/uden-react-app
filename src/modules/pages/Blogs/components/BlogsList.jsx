import {  Grid } from '@mui/material'
import React from 'react'


import { BlogsConst } from '../Blogs.Const'
import BlogCard from './BlogCard/BlogCard'

const BlogList = (props) => {
  const data = BlogsConst.Blogs
  return (
    <Grid {...props} container  spacing={2}  >
          <Grid item xs={11}>
            <Grid container justifyContent="center" gap={4}  spacing={2} >
              {data.map((value,i) => (
                <Grid key={i} item xs={11} sm={9} md={6} lg={4} xl={3} height={460}>
                  <BlogCard data={value}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
  )
}

export default BlogList