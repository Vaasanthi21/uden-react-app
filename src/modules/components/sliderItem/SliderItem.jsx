/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Avatar, Box, Button, Chip, Grid, Paper, Typography } from '@mui/material'
import { SliderItemStyles as styles } from './SliderItem.Styles'

const SliderItem = (props) => {
  const darksubtitle = props.darksubtitle;
  const iscarousel = props?.iscarousel==='true'?true:false;
  return (
    <Paper {...props} css={styles}  style={{alignItems:'center'}} elevation={0} >
      <Grid className='main-grid' container direction={{xs:"column-reverse",sm:"column-reverse",md:"row-reverse",lg:"row"}} height={{xs:'500px',md:'400px'}}>
        <Grid container item xs={0} md={1}/>
        <Grid  container direction='row' item xs={iscarousel?4:3} md={5} alignContent='center' justifyContent='center'>
        <Grid className='text-grid' container item xs={10}  md={12} alignContent='center'>
          <Box className='text-boxs'>
            {props.title && <Typography variant='h5' className='title'>{props?.title}</Typography>}
            {props.subtitle && <Typography   variant={darksubtitle?'subtitle1':'h6'} className={darksubtitle?'sub-title-dark':'sub-title'}>{props?.subtitle}</Typography>}
            <Box height="16px" display={props?.points?true:false} />
            <Box>
              {props?.points?.map((item,i)=>
              <Chip 
              className='chip'
              key={i}
              avatar={<Avatar className='avatar' key={i}> </Avatar>} 
              label={<Typography className='points' key={i}   variant='subtitle2'>{item}</Typography>} />)}
            </Box>
            <Box height="16px"/>
            {props?.action && <Button variant='contained' className='button' href={props?.action?.href}>{props?.action?.name}</Button>}
            </Box>
        </Grid>
        </Grid>
        {props?.image && <Grid className='image-grid' direction='row' container item xs={iscarousel?7:9} md={5} alignContent='center'>
            <Grid item xs={10} md={12}>
                <Box  height='100%' component='img' src={props?.image} className='image-box' />
            </Grid>
        </Grid>}
        <Grid container item xs={0} md={1}/>
      </Grid>
    </Paper>
  )
}

export default SliderItem