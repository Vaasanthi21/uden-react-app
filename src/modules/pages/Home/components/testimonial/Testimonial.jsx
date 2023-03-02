import { Box, Grid, Paper} from '@mui/material'
import React from 'react'
import Carousel from '../../../../components/carousel/Carousel'
import { HomeConst } from '../../Home.Const'
import TestimonialItems from './TestimonialItems'

const Testimonial = (props) => {
    const data = HomeConst.Testimonial;
  return (
    <Paper {...props}>
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