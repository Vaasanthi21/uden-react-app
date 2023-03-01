import { Box, Card, Grid, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../../components/Spacer'

const IndemandSkills = (props) => {
    const data = props.data;
  return (
    <Grid  container direction='row' height={"100%"}  justifyContent='center' justifyItems='center'>
        <Grid container item xs={10} justifyContent='center' justifyItems='center'>
            <Card className='indemand-card' >
                <Spacer height multiplier={0.5}/>
                    <Grid container item direction='row' xs={12} justifyContent='center' >
                        <Typography className='indemand-title' variant='h5'>{data?.title}</Typography>
                    </Grid>
                    <Spacer height multiplier={0.5}/>
                    <Grid container item direction='row' xs={12} justifyContent='center' >
                        <Box className='indemand-description-container'>
                            <Typography className='indemand-description' variant='caption'>{data?.description}</Typography>
                        </Box>
                    </Grid>
                    <Spacer height multiplier={0.5}/>
                    <Grid container item direction='row'  justifyContent='center' >
                        <Grid item xs={10}>
                            <Box width='100%' component='img' src={data?.image}/>
                        </Grid>
                    </Grid>
                <Spacer height multiplier={0.5}/>
            </Card>
        </Grid>
    </Grid>
  )
}

export default IndemandSkills