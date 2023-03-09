/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { LinkedIn } from '@mui/icons-material';
import { Card, CardContent, CardMedia, Grid, IconButton, Typography } from '@mui/material';

import AboutUsStyles from './FounderCard.Styles'

const FounderCard = (props) => {
    const data = props.data;
    return (
      <Card css={AboutUsStyles} elevation={0}>
        <CardMedia
          className='founder-card-image'
          image={data.image}
          title={data.name}
        />
        <CardContent className='founder-card-content'>
          <Grid container justifyContent='center' alignItems='center'>
            <Grid item>
              <Typography className='founder-card-name' variant="h5">{data.name}</Typography>
            </Grid>
            <Grid item>
              <IconButton aria-label="LinkedIn" className='founder-card-linkedin' children={<LinkedIn />} size='large' href={data.linkedinUrl} target="_blank"/>
            </Grid>
          </Grid>
          <Typography className='founder-card-designation' variant='subtitle1' component="p">{data.designation}</Typography>
          {data.message && <Typography className='founder-card-message' variant="caption" component="p">{data.message}</Typography>}
        </CardContent>
      </Card>
    );
}

export default FounderCard