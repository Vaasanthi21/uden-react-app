import { Grid, Paper, Typography } from '@mui/material'

import FounderCard from '../../../components/founderCard/FounderCard';
import Spacer from '../../../components/Spacer'
import AboutUsConst from '../AboutUs.Const'

const AboutUsLeadershipTeam = (props) => {
    const data = AboutUsConst.LeadershipTeam
  return (
    <Paper {...props} elevation={0}>
      <Spacer height multiplier={2}/>
        <Typography className='leadership-team-title' variant='h3'>{data.title}</Typography>
        <Typography className='leadership-team-subtitle' variant='subtitle1'>{data.subtitle}</Typography>
        <Spacer height multiplier={2}/>
        <Grid container  spacing={2} justifyContent='center' >
          <Grid item xs={11}>
            <Grid container justifyContent="center" spacing={2}>
              {data.leaders.map((value,i) => (
                <Grid key={i} item xs={11} sm={6} md={4} lg={3} >
                  <FounderCard data={value}/>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      <Spacer height multiplier={2}/>
    </Paper>
  )
}

export default AboutUsLeadershipTeam
