import { Paper, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../components/Spacer'
import WorkFlow from '../../../components/workFlow/WorkFlow'
import HRServicesConst from '../HRServices.Const'

const HRServicesWorkFlow = (props) => {
    const data = HRServicesConst.WorkFlow
  return (
    <Paper {...props} elevation={0} >
          <Typography className='title' variant='h4' >{data.title}</Typography>
          <Spacer height/>
          <WorkFlow {...props} data={data.images} single='true' />
    </Paper>
    
  )
}

export default HRServicesWorkFlow