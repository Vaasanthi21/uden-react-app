/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Grid, Typography } from '@mui/material';
import { Box } from '@mui/system'

import { FeatureStyles as styles } from './Feature.Styles';

const FeatureAlternatingImage = (props) => {
    const data = props.data;
    const reverse = props.reverse==='true'?true:false;
  return (
    <Box {...props} css={styles.alternatingImage({reverse})}  style={{alignItems:'center'}} elevation={0} >
      <Grid className='main-grid' container direction={{xs:'column-reverse',md:reverse===true?'row-reverse':'row'}} height={{xs:'650px',md:'400px'}}>
        <Grid container item xs={0} md={1}/>
        <Grid  container direction='row' item xs={5} alignContent='center' justifyContent='center'>
            <Grid className='text-grid' container item xs={10} md={12} alignContent='center'>
                <Box className='text-box'>
                    {data.title && <Typography variant='h5' className='title'>{data.title}</Typography>}
                    {data.description && <Typography   variant={data.description?'subtitle1':'h6'} className={'description'}>{data?.description}</Typography>}
                </Box>
            </Grid>
        </Grid>
        {data?.image && <Grid className='image-grid' direction='row' container item xs={7} sm={5} alignContent='center'>
            <Grid item xs={10} md={12}>
                <Box  height='100%' component='img' src={data.image} className='image-box' />
            </Grid>
        </Grid>}
        <Grid container item xs={0} md={1}/>
      </Grid>
    </Box>
  )
}

export default FeatureAlternatingImage