import {Grid, Typography } from '@mui/material'
import React from 'react'
import Paragraph from '../../../components/paragraph/Paragraph'
import Spacer from '../../../components/Spacer'

import TermsAndConditionsConst from '../TermsAndConditions.Const'

const TermsAndConditionsComponent = (props) => {
    const data = TermsAndConditionsConst
  return (
    <Grid {...props} container>
      <Grid item xs={11} md={10} lg={8}>
        <Typography variant='h4' className='terms-title' >{data.title}</Typography>
        <Spacer height/>
        <Paragraph {...props} data={data.items}/>
        
      </Grid>
    </Grid>
    
  )
}

export default TermsAndConditionsComponent



