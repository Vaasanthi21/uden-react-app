import { Divider, Grid } from '@mui/material'
import React from 'react'
import Spacer from '../../../../components/Spacer'
import BlogBody from './components/BlogBody'
import BlogTitle from './components/BlogTitle'

export const Blog = () => {
  return (
    <>
      <Grid container justifyContent='center'>
        <Grid item xs={11} md={10} lg={8}>
          <BlogTitle/>
          <Spacer height/>
          <Divider/>
          <BlogBody/>
        </Grid>
      </Grid>
    </>
  )
}
