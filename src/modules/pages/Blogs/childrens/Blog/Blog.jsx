/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react'
import { Box, Divider, Grid, } from '@mui/material'

import Spacer from '../../../../components/Spacer'
import BlogBody from './components/BlogBody'
import BlogTitle from './components/BlogTitle'
import MoreBlogs from './components/MoreBlogs'
import BlogStyles from './styles/Blog.Styles'
import { BlogHooks } from './hooks/Blog.Hooks';

export const Blog = () => {
  const hooks = BlogHooks.useBlog();
  const {id,data} = hooks;
  return (
    <Box css={BlogStyles.main} >
      <Spacer height />
      <Grid container className='blog-main-grid'>
        <Grid item xs={11} sm={10} md={8} lg={7} xl={6} className='blog-sub-grid1'>
          <BlogTitle css={BlogStyles.blogTitle} data={data} />
          <BlogBody css={BlogStyles.blogBody} data={data}/>
        </Grid>
        <Grid container item pl={2} display={{xs:'none',md:'block'}}  xs={11} sm={10} rowGap={4}  md={3} lg={4} xl={4} ml={2} className='blog-sub-grid2' >
            <MoreBlogs css={BlogStyles.moreBlogs} id={id}/>
        </Grid>
      </Grid>
      <Divider/>
      <MoreBlogs css={BlogStyles.moreBlogs} id={id} fixed={+true} width={{xs:'90%'}}/>
      <Spacer height />
    </Box>
  )
}
