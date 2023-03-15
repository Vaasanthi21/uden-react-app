import {  Grid } from "@mui/material"


const FooterMenuContaier = props => {
    return (
        <Grid container item {...props} spacing={4} xs={12} md={8} >
          {props.children}
      </Grid>
    )
  }

export default FooterMenuContaier;