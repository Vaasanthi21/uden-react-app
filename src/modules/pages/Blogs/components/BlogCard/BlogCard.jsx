/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
// eslint-disable-next-line
import React from 'react'

import { Box, Card, CardMedia, Grid, Link, Typography } from '@mui/material'


import { AppRoutes } from 'utils/consts/routes';
import BlogCardStyles from './BlogCard.Styles';


const BlogCard = (props) => {
    const data = props?.data;
  return (
    <Card {...props} css={BlogCardStyles} sx={{height:props.height??'100%',width:props.width??'auto',m:1}} >
        <CardMedia
            component='img'
            className='founder-card-image'
            height='60%'
            width='100%'
            image={data?.image}
            title={data?.title}
        />
            <Grid p='10px 10px 10px 10px' container direction='column' justifyContent='space-evenly' alignContent='space-evenly'height='40%' width='100%' >
                <Box width='100%' >
                    <Typography className='blog-card-title' variant='h6' ><Link className='hide-lines'  href={AppRoutes.BLOG(data?.id)}>{data?.title}</Link></Typography>
                    {!props?.hidepara && <Typography  className='blog-card-subtitle hide-lines' variant='caption' >{data?.body[0].paragraphs[0]}...</Typography>}
                </Box>
                <Box display='flex' width='100%' flexDirection='column' textAlign='start' pt={1}>
                    <Typography className='founder-card-designation' variant='subtitle2'>Published: {data?.published}</Typography>
                    <Typography className='founder-card-designation' variant='caption'>By: {data?.publisher}</Typography>
                </Box>
            </Grid>
    </Card>
  )
}

export default BlogCard