import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Box, Grid, Paper, Typography } from '@mui/material'

import Carousel from '../carousel/Carousel'
import {TestimonialStyles as styles} from './Testimonial.Styles.'
import TestimonialItems from './TestimonialItems';

const Testimonial = (props) => {
    const data = props?.data;
  return (
    <Paper {...props}  css={styles} elevation={0}>
        <Typography className='title' variant='h4'>{data.title}</Typography>
        <Grid container justifyContent='center' height={{xs:'400px',md:"350px"}} alignContent='center'>
            <Grid item xs={11.5} md={10} lg={8}>
                <Box flex>
                <Carousel pagination={false} navigation>
                    {data.testimonials.map((testimonial,i)=><TestimonialItems key={i} {...props} data={testimonial}/>)}
                </Carousel>
                </Box>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default Testimonial