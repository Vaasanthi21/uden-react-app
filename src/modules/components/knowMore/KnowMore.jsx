/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Button, Grid, Paper, Typography } from '@mui/material'
import { KnowMoreStyles as styles} from './KnowMore.Styles'

const KnowMore = (props) => {
  const data = props.data;
  return (
    <Paper {...props} css={styles}>
      <Grid container className='main-grid' direction='column'>
        <Grid container item xs={4} direction='row'  justifyContent='center'>
          <Grid item xs={10} md={6}>
            <Typography className='title'  variant='h5'>{data.title}</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={3} direction='row'  justifyContent='center'>
          <Grid item>
            <Button className='button' size='large' variant='contained' href={data.href}  endIcon={data.icon}>{data.buttonText}</Button>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default KnowMore