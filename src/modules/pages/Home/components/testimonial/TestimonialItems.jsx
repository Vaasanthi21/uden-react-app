

import { Avatar, Box, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../../components/Spacer';

const TestimonialItems = (props) => {
    const data = props.data;
  return (
    <Paper {...props} sx={{justifyContent:'center',alignItems:'center',display:'flex',flexDirection:'column'}}>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Avatar className='testimonial-item-image' src={data.image} sx={{ width: 56, height: 56 }}></Avatar>
            </Box>
            <Box  display='flex' justifyContent='center' alignItems='center'>
                <Typography className='testimonial-item-name' variant='subtitle2'>{data.name}</Typography>
            </Box>
            <Spacer height multiplier={1}/>
            <Box width='80%'  display='flex' justifyContent='center' alignItems='center'>
                <Container className='testimonial-item-message-container' >
                    <Typography className='testimonial-item-message' variant='caption'>{data.message}</Typography>
                </Container>
                
            </Box>
    </Paper>
  )
}

export default TestimonialItems