import { Button, Container, Paper, Typography } from '@mui/material'
import React from 'react'
import Spacer from '../../../components/Spacer'
import { HomeConst } from '../Home.Const'
import { HomeHooks } from '../hooks/Home.Hooks'

const WorkFlow = (props) => {
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
          <Spacer height/>
          <Paper className='work-flow-image-holder' elevation={0}>    
            <Paper className='work-flow-image' sx={{ display:isCompany===true?'none':null }}>
              <Container sx={{ display: { xs: 'block', sm: 'none' } }} src={data.JobSeeker.Mobile} alt='work-flow'  component="img"/>  
              <Container sx={{ display: { xs: 'none', sm: 'block' ,md:'none' } }} src={data.JobSeeker.Tablet} alt='work-flow'  component="img"/>  
              <Container sx={{ display: { xs:'none', md: 'block'} }} src={data.JobSeeker.Desktop} alt='work-flow'  component="img"/>  
            </Paper>
            <Paper className='work-flow-image' sx={{ display:isCompany===false?'none':null }} elevation={0}>
              <Container sx={{ display: { xs: 'block', sm: 'none' } }} src={data.Company.Mobile} alt='work-flow'  component="img"/>  
              <Container sx={{ display: { xs: 'none', sm: 'block' ,md:'none' } }} src={data.Company.Tablet} alt='work-flow'  component="img"/>  
              <Container sx={{ display: { xs:'none', md: 'block'} }} src={data.Company.Desktop} alt='work-flow'  component="img"/>  
            </Paper>
          </Paper>
    </Paper>
  )
}

export default WorkFlow