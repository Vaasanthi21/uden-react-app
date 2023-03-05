/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Box, Card, Grid, Typography } from '@mui/material'

import { FeatureStyles as styles} from './Feature.Styles';

const FeatureCard = (props) => {
    const data = props.data;
    const stacked = props?.stacked==='true'?true:false
    const visible = props?.visible==='false'?false:true
    const expanded = props?.expanded==='true'?null:{xs:8,sm:7,md:5,lg:4,xl:4}
  return (
    <Grid {...props} css={styles.featureCard({stacked})} className='feature-main-grid' item  {...expanded}>
        <Box display={visible?'block':'none'} sx={{height:'550px',position:'relative'}}>
            {stacked && <Box className='stack-image' component='img'  src={data?.image}/>}
            <Card className='card' sx={{height:'100%'}} >
                <Grid  container direction='column' height={"100%"}  justifyContent='center'>
                    {!stacked && <Grid item xs={3}  >
                        <Box component='img' src={data?.image}/>
                        </Grid>
                    }
                    <Grid item xs={2} >
                        <Typography className='title' variant='h6'>{data?.title}</Typography>
                    </Grid>
                    <Grid item xs={6} >
                        <Box className='description-container'>
                            <Typography className='description' variant='subtitle1'>{data?.description}</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    </Grid >
  )
}

export default FeatureCard