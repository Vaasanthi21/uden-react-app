import { Box, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../../components/Spacer'
import { BlogsConst } from '../../Blogs.Const'
import BlogBody from './components/BlogBody'
import BlogTitle from './components/BlogTitle'
import MoreBlogs from './components/MoreBlogs'

export const Blog = () => {
  const id = window.location.pathname.split("/")[2]
    const data = BlogsConst.Blogs.filter((blog)=>blog.id===id)[0]
  return (
    <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
      <Spacer height />
      <Grid container justifyContent='center' overflow='auto' sx={{float:'left',height:'100%',}}>
        <Grid item xs={11} sm={10} md={8} lg={7} xl={6}>
          <BlogTitle data={data} />
          <Spacer height/>
          <Divider/>
          <BlogBody data={data}/>
        </Grid>
        <Grid container item pl={2} display={{xs:'none',md:'block'}}  xs={11} sm={10} rowGap={4}  md={3} lg={4} xl={4} ml={2} justifyContent='center' alignContent='start'  overflow='auto' sx={{float:'left',height:'100%'}} >
            <MoreBlogs id={id}/>
        </Grid>
      </Grid>
      <Divider/>
      <MoreBlogs id={id} fixed={+true} width={{xs:'90%'}}/>
      <Spacer height />
    </Box>
  )
}
