import { Card, CardActionArea, CardContent, CardMedia, Grid, Link, Typography } from '@mui/material'
import React from 'react'
import { AppRoutes } from '../../../../../utils/consts/routes';

const BlogCard = (props) => {
    const data = props?.data;
  return (
    <Card {...props} sx={{height:props.height??'100%',width:props.width??'auto',m:1}} >
        <CardMedia
            component='img'
            className='founder-card-image'
            height={props.imageheight??'60%'}
            width='100%'
            image={data?.image}
            title={data?.title}
        />
            <Grid p='10px 10px 10px 10px' container direction='column' justifyContent='space-evenly' alignContent='space-evenly'height='40%'  >
                <Grid item >
                    <Typography sx={{overflow: 'hidden',textOverflow: 'ellipsis',display: '-webkit-box',WebkitLineClamp: '2',WebkitBoxOrient: 'vertical',}} overflow='hidden' textOverflow='ellipsis'  className='founder-card-name' variant='h6' ><Link underline='none' href={AppRoutes.BLOG(data?.id)}>{data?.title}</Link></Typography>
                    {!props?.hidepara && <Typography  sx={{overflow: 'hidden',textOverflow: 'ellipsis',display: '-webkit-box',WebkitLineClamp: '2',WebkitBoxOrient: 'vertical',}} className='founder-card-name' variant='caption' >{data?.body[0].paragraphs[0]}...</Typography>}
                </Grid>
                <Grid item>
                <Typography className='founder-card-designation' variant='subtitle1'>Published: {data?.published}</Typography>
                
                </Grid>
            </Grid>
        

    
        
    </Card>
  )
}

export default BlogCard