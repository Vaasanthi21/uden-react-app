import { Avatar, Box, Button, Paper, Typography } from '@mui/material'
import { Container } from '@mui/system'

const TestimonialItems = (props) => {
    const data = props?.data;
  return (
    <Paper {...props} className='testimonial-item' sx={{height:{xs:'320px',md:"290px"}}} elevation={0}>
        <Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
                <Avatar className='testimonial-item-image' src={data.image} sx={{ width: 56, height: 56 }}></Avatar>
            </Box>
            <Box  display='flex' justifyContent='center' alignItems='center'>
                <Typography className='name' variant='subtitle1'>{data.name}</Typography>
                {data.designation && <Typography className='name' variant='subtitle1'>,</Typography>}
                {data.designation && <Typography className='designation' variant='subtitle1'>{data.designation}</Typography>}
            </Box>
            <Box display='flex' justifyContent='center' alignItems='center'>
                {/* {data.company && !data.link && <Typography className='company' variant='subtitle2'>{data.company}</Typography>} */}
                {data.company && data.link
                    ?<Button disableFocusRipple disableRipple  className='company' variant='text' href={data.link} target='_blank' >{data.company}</Button>
                    :data.company && <Typography className='company' variant='subtitle2'>{data.company}</Typography>
                }

            </Box>
        </Box>
            <Box width='80%' display='flex' justifyContent='center' alignItems='center' marginTop='16px'>
                <Container className='message-container' >
                    <Typography className='message' variant='caption'>{data.message}</Typography>
                </Container>
            </Box>
    </Paper>
  )
}

export default TestimonialItems