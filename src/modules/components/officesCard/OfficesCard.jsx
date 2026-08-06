import React from 'react';
/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';

import { Phone } from '@mui/icons-material';
import { Card, CardActions, CardHeader, CardMedia, Typography } from '@mui/material';

import OfficesCardStyles from './OfficesCard.Styles';

const OfficesCard = (props) => {
    const {data} = props;
  return (
    <Card css={OfficesCardStyles}>
        <CardMedia component="img" height="300px" image={data.image} alt={`office in ${data.country}, ${data.city}`} />
        <CardHeader title={data.city} subheader={data.address} />
        <CardActions className='office-card-content'>
                <Phone className='office-card-phone-icon'  />
                <Typography className='office-card-phone-text' variant='h6'>{data.contact}</Typography>
         
        </CardActions>
    </Card>
  )
}

export default OfficesCard