import { Card, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const FeatureItems = (props) => {
    const data = props.data;
    const display = props.display;
  return (
    <Grid container className='feature-main-grid' direction={display===false?"row":"row-reverse"}>
        <Grid {...props}  item  xs={8} sm={7} md={5} sx={{height:"450px",}}>
        <Card className='feature-card' sx={{height:'100%'}}>
            <Grid  container direction='column' height={"100%"}  justifyContent='center'>
                <Grid item xs={3} >
                    <Box component='img' src={data?.image}/>
                </Grid>
                <Grid item xs={2} >
                    <Typography className='feature-title' variant='h6'>{data?.title}</Typography>
                </Grid>
                <Grid item xs={6} >
                    <Box className='feature-description-container'>
                        <Typography className='feature-description' fontSize={{xs:'10px'}} variant='caption'>{data?.description}</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Card>
    </Grid >
        <Grid item xs={10} md={5} sx={props.display===true?{display:{xs:"none",md:"block"}}:null}>
          </Grid>
    </Grid>
  )
}

export default FeatureItems
