import { Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../components/Spacer'
import WorkFlow from '../../../components/workFlow/WorkFlow'
import { HomeConst } from '../Home.Const'
import { HomeHooks } from '../hooks/Home.Hooks'

const HomeWorkFlow = (props) => {
    const hooks = HomeHooks.WorkFlow;
    const data = HomeConst.WorkFlow;
    const {displayCompany,displayJobSeeker,isCompany} = hooks.useToogleWorkFlow();
  return (
    <Paper {...props} elevation={0} >
          <Typography className='title' variant='h4' >{data.title}</Typography>
          <Spacer height/>
          <Container className='button-row'>
            <Button variant='contained' className={isCompany===false?'button button-selected':'button'} onClick={displayJobSeeker}>{data.JobSeekersButtonText}</Button>
            <Button variant='contained' className={isCompany===true?'button button-selected':'button'} onClick={displayCompany}>{data.CompanyButtonText}</Button>
          </Container>
          <Spacer height multiplier={2}/>
          <WorkFlow {...props} data={isCompany===true?data.Company:data.JobSeeker} />
    </Paper>
  )
}

export default HomeWorkFlow