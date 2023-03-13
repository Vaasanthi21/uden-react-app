import { Box, Grid, Paper, Typography } from '@mui/material'
import Spacer from '../../../components/Spacer';
import { BlogsConst } from '../Blogs.Const';

const StudentPlaced = (props) => {
  const data = BlogsConst.StudentPlaced
  return (
    <Paper {...props}>
    <Paper className='dark-bg'></Paper>
      <Grid container className='student-placed-content' justifyContent='center' alignContent='center'>
            <Grid item xs={10} md={8} lg={6}>
                <Box flex>
                  <Typography variant='h4'>{data.title}</Typography>
                  <Spacer height/>
                  <Grid container justifyContent='center' alignContent='center'>
                    <Grid item container justifyContent='space-evenly' xs={8}>
                      {data.count.split('').map((count,i)=><Number key={i} count={count}/>)}
                    </Grid>
                  </Grid>
                </Box>
            </Grid>
        </Grid>
    </Paper>
  )
}

export default StudentPlaced

const Number = (props) => {
  const count = props.count;
  return (
    <Grid {...props} item>
      <Box className='student-placed-number-box' sx={{ }}>
        <Typography className='student-placed-number'  variant='h5'>{count}</Typography>
      </Box>
    </Grid>
  )
}