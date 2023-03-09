import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../components/Spacer'

import TermsAndConditionsConst from '../TermsAndConditions.Const'

const TermsAndConditionsComponent = (props) => {
    const data = TermsAndConditionsConst
  return (
    <Grid {...props} container>
      <Grid item xs={11} md={10} lg={8}>
        <Typography variant='h4' className='terms-title' >{data.title}</Typography>
        <Spacer height/>
        {data.items.map((item, titleIndex) =>
        <Box>
          <Typography key={titleIndex} variant='h5' className='terms-paragraph-title' >{item.title}</Typography>
          {item.paragraphs.map((para, paraIndex) =><Typography key={paraIndex} variant='body1' className='terms-paragraph' >{typeof para==='string'?para:""}</Typography>)}
          <Spacer height/>
        </Box>
        )}
      </Grid>
    </Grid>
    
  )
}

export default TermsAndConditionsComponent