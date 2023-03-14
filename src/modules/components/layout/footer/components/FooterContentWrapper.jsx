import { Grid } from "@mui/material"



const FooterContentWrapper = props =>{
    return (
      <Grid container {...props} direction={{xs:"column",sm:"column",md:"row",}} justifyContent="center" justifyItems="center" alignContent="center" alignItems="center">
        {props.children}
      </Grid>
    )
  }

export default FooterContentWrapper;