import {  Box, Button, CircularProgress, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'

import Spacer from '../../../components/Spacer'
import ContactUsConst from '../ContactUs.Const'
import { ContactUsHooks } from '../hooks/ContactUs.Hooks'

const ContactUsForm = (props) => {
  const data = ContactUsConst.ContactForm;
  const hooks = ContactUsHooks.useFormHooks({data: data});
  const {fields,handleInputChange,validate} = hooks

    return (
      <Grid {...props} container direction={{xs:'column',md:'row'}} height={{xs:550,md:500}} justifyContent='center'>
        <Grid container item  xs={4} md={6} justifyContent='center' alignContent='center'>
          <Box textAlign='start'>
            <Typography className='form-title' variant='h4'>{data?.title}</Typography>
            <Spacer height/>
            <Typography className='form-subtitle' variant='subtitle1'>{data?.subtitle}</Typography>
            {data?.actions?.map((value,i)=>
              <Box key={i} display='flex' pt={1}>
                <Typography className='form-subtitle' variant='subtitle1'>{value?.title}</Typography>
                <Link  className='form-link' href={value?.link} target='_blank' variant='subtitle1' >{value?.action}</Link>
              </Box>
              )}
          </Box>
        </Grid>
        <Grid container item  xs={8} md={6} justifyContent='center' alignContent='center'>
            <Grid component='form' onSubmit={validate} container item xs={10} sm={9} lg={8} xl={7} height='100%' direction='column' justifyContent='space-evenly' >
              <Grid container item xs={10} height='100%' direction='column' justifyContent='space-evenly' >
                {fields?.map((value,i)=><TextField key={i} {...value} onChange={handleInputChange} />)}
              </Grid>
              <Button disabled={data.loading} variant='contained' fullWidth type='submit'>{data?.form?.action}{data.loading && <CircularProgress size={20} thickness={6} sx={{ml:1,color:'gray'}} />}</Button>
            </Grid>
        </Grid>
      </Grid>
    )
}

export default ContactUsForm