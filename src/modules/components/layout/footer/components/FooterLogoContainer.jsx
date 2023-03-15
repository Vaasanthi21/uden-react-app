import { Box, Grid } from "@mui/material"



const FooterLogoContainer = props => {
    return (
          <Grid container item  {...props}  xs={4} justifyContent="center" justifyItems="center">
            <Box className={"logo-container"} >  
              {props.children}
            </Box>
          </Grid>
    )
  }

export default FooterLogoContainer;