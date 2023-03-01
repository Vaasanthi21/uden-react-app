import React from 'react'
import { Avatar, Box, Button, Chip, Grid, Paper, Typography } from '@mui/material'
import { AppColors } from '../../../../../utils/consts/app_colors'

const SliderItems = (props) => {
  return (
    <Paper {...props} style={{alignItems:'center'}} >
      <Grid className='main-grid' container direction={{xs:"column-reverse",sm:"column-reverse",md:"row-reverse",lg:"row"}} height={{xs:'600px',md:'400px'}}>
        <Grid container item xs={1}/>
        <Grid className='text-grid' container item xs={3} md={5} style={{}}>
          <Box className='text-boxs'>
            <Typography variant='h5' className='title'>{props.title}</Typography>
            <Typography   variant='h6' className='sub-title'>{props.subtitle}</Typography>
            <Box height="16px"/>
            <Box>
              {props.points.map((item,i)=>
              <Chip 
              className='chip'
              key={i}
              avatar={<Avatar className='avatar' key={i}> </Avatar>} 
              label={<Typography className='points' key={i}   variant='subtitle2'>{item}</Typography>} />)}
            </Box>
            <Box height="16px"/>
            <Button variant='contained' className='button' href={props.action.href}>{props.action.name}</Button>
            </Box>
        </Grid>
        <Grid className='image-grid' container item xs={4} md={5}>
          <Box className='image-box'>
            <img src={props.image} alt={props.image.split("/")[0]} />
          </Box>
        </Grid>
        <Grid container item xs={1}/>
      </Grid>
    </Paper>
  )
}

export default SliderItems