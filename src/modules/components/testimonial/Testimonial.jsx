import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'
import TestimonialItems from '../../pages/Home/components/testimonial/TestimonialItems';
import Carousel from '../carousel/Carousel'

const Testimonial = (props) => {
    const data = props?.data;
  return (
    <Paper {...props} elevation={0}>
        <Typography className='title' variant='h4'>{data.title}</Typography>
        <Grid container justifyContent='center' height='300px' alignContent='center'>
            <Grid item xs={10} md={8} lg={6}>
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