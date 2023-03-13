import {  Box, Button, Checkbox, CircularProgress, FormControlLabel, Grid, TextField, Typography } from '@mui/material'

import Spacer from '../../../components/Spacer'
import KnowMoreFormConst from '../KnowMoreForm.Const'
import { KnowMoreFormHooks } from '../hooks/KnowMoreForm.Hooks'
import { AppRoutes } from '../../../../utils/consts/routes'


const KnowMoreFormComponent = (props) => {
  const data = KnowMoreFormConst.KnowMoreForm;
  // const currentRoute =  window.location.href.split(window.location.host)[1].split("/")[1];
  // const type = currentRoute.includes(AppRoutes.FIND_TALENT.split('/')[1])?"company":currentRoute.includes(AppRoutes.BECOME_PARTNER.split('/')[1])?"educator":"student"
  const hooks = KnowMoreFormHooks.useFormHooks({data: data});
  const {fields,type,handleInputChange,validate} = hooks
  const {checkbox,handleCheckboxChange} = hooks

    return (
      <Grid {...props} container direction={{xs:'column',md:'row'}} height={{xs:'auto'}} justifyContent='center'>
        <Grid container item  xs={4} md={6} justifyContent='center' alignContent='center'>
          <Grid container item xs={11} justifyContent='center'>
            <Box textAlign='start' px={5}>
              <Typography className='form-title' variant='h4'>{data?.title[type.description]}</Typography>
              <Spacer height/>
              <Typography className='form-subtitle' variant='subtitle1'>{data?.subtitle[type.description]}</Typography>
              <Box maxWidth='100%' display='flex' flexDirection='row' justifyContent='center'>
                <Box component='img' width='100%' src={data?.image[type.description]}/>
              </Box>
              
            </Box>
            </Grid>
        </Grid>
        <Grid container item  xs={9} md={6} justifyContent='center' alignContent='center'>
            <Grid component='form' onSubmit={validate} container item xs={10} sm={9} lg={8} xl={7} height='100%' direction='column' justifyContent='space-evenly' >
              <Grid container item xs={10} height='100%' direction='column' justifyContent='space-evenly' >
                {fields?.map((value,i)=><TextField key={i} {...value} onChange={handleInputChange} sx={{pb:2}} />)}
                  {checkbox?.map((value,i)=>
                    <FormControlLabel key={i} label={value.label} control={<Checkbox  onChange={handleCheckboxChange} id={value.id} sx={{pb:2}} />}/>
                  )}
              </Grid>
              <Button sx={{mt:2}}  disabled={data.loading} variant='contained' fullWidth type='submit'>{data?.form?.action}{data.loading && <CircularProgress size={20} thickness={6} sx={{ml:1,color:'gray'}} />}</Button>
            </Grid>
        </Grid>
      </Grid>
    )
}

export default KnowMoreFormComponent