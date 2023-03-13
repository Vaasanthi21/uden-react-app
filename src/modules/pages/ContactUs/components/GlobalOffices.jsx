import { Box,Grid, Paper, Tab, Tabs, Typography } from '@mui/material'

import Spacer from '../../../components/Spacer'
import ContactUsConst from '../ContactUs.Const'
import TabPanel from '../../../components/tabPanel/TabPanel'
import OfficesCard from '../../../components/officesCard/OfficesCard';
import { ContactUsHooks } from '../hooks/ContactUs.Hooks';

const ContactUsGlobalOffices = (props) => {
    const data = ContactUsConst.GlobalOffices
    const hooks = ContactUsHooks.useGlobalOfficesHooks()
    const {value,handleChange} = hooks;

  return (
    <Paper {...props} elevation={0}>
      <Spacer height multiplier={2}/>
      <Typography className='global-offices-title' variant='h3'>{data.title}</Typography>
      <Spacer height multiplier={2}/>
      <Box sx={{ width: '100%' }} justifyContent='center'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'}} justifyContent='center' >
          <Tabs value={value} onChange={handleChange} sx={{justifyContent:'center' }} >
            {data.offices.map((office,i) => <Tab key={i} label={office.country} />)}
          </Tabs>
        </Box>
        <Spacer height multiplier={2}/>
        {data.offices.map((office,i) => 
          <TabPanel key={i} value={value} index={i}>
            <Grid container  spacing={2} justifyContent='center' >
                <Grid item xs={11}>
                  <Grid container justifyContent="center" spacing={2}>
                      <Grid key={i} item xs={10} sm={6} md={4.5} lg={4} xl={3} >
                        <OfficesCard data={office}/>
                      </Grid>
                  </Grid>
                </Grid>
            </Grid>
          </TabPanel>
        )}
      </Box>
      <Spacer height multiplier={2}/>
    </Paper>
  )
}



export default ContactUsGlobalOffices





// {/* <Grid container  spacing={2} justifyContent='center' >
//           <Grid item xs={11}>
//             <Grid container justifyContent="center" spacing={2}>
//               {/* {data?.leaders.map((value) => (
//                 <Grid key={value} item xs={11} sm={6} md={4} lg={3} >
//                   <FounderCard data={value}/>
//                 </Grid>
//               ))} */}
//               </Grid>
//               </Grid>
//             </Grid> */}