import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../components/Spacer'

import PrivacyPolicyConst from '../PrivacyPolicy.Const'

const PrivacyPolicyComponent = (props) => {
    const data = PrivacyPolicyConst
  return (
    <Grid {...props} container>
      <Grid item xs={11} md={10} lg={8}>
        <Typography variant='h4' className='privacy-title' >{data.title}</Typography>
        <Spacer height/>
        {data.items.map((item, itemIndex) =>
        <Box key={itemIndex}>
          <Typography variant='h6' className='privacy-paragraph-title' >{item.title}</Typography>
          {item.paragraphs.map((para, paraIndex) =>
          <Box key={paraIndex} mb={4}>
            <Typography variant='body1' className='privacy-paragraph' >{para}</Typography>
          </Box>
          )}
          <Spacer height/>
        </Box>
        )}
      </Grid>
    </Grid>
    
  )
}

export default PrivacyPolicyComponent