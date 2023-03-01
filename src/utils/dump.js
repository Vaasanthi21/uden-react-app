
<Grid  item  xs={8} sm={7} md={5} sx={
            isLeft===false
            ?{display:{xs:"none",md:"flex"},flexDirection:'column'}
            :{height:"400px",}}>
            <Card className='card' sx={{height:'100%'}}>
              <Grid  container direction='column' display={'flex'} height={"100%"}  justifyContent='center'>
              
                <Grid item xs={3} >
                  {/* <Grid container direction='row' justifyContent='center' height='100%'> */}
                    {/* <Grid item xs={4}> */}
                      <Box component='img' src={AppAssets.HomeAssets.HOME_FEATURES.TALENT_DEVELOPMENT}/>
                    {/* </Grid> */}
                  {/* </Grid> */}
                
  
                </Grid>
  
                <Grid item xs={2} >
                <Typography className='feature-title' variant='h6'>{data.features[0].title}</Typography>
                  
                </Grid>
                <Grid item xs={6} >
                  <Box className='feature-description-container'>
                  <Typography className='feature-description' fontSize={{xs:'10px',md:'12px',lg:'14px'}} variant='caption'>{data.features[0].description}</Typography>
                  </Box>
                  
                </Grid>
               
  
              </Grid>
              </Card>
              
          </Grid >
          <Grid item xs={10} md={5} sx={isLeft===true?{display:{xs:"none",md:"block"}}:null}>
          <Box height={"400px"}  sx={{}}>
  
          </Box>
          </Grid>