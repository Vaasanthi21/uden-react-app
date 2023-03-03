import { Paper, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../components/Spacer'
import WorkFlow from '../../../components/workFlow/WorkFlow'
import CompaniesConst from '../Companies.Const'

const CompaniesWorkFlow = (props) => {
    const data = CompaniesConst.WorkFlow
  return (
    <Paper {...props} elevation={0} >
          <Typography className='title' variant='h4' >{data.title}</Typography>
          <Spacer height/>
          <WorkFlow {...props} data={data.images} />
    </Paper>
    
  )
}

export default CompaniesWorkFlow