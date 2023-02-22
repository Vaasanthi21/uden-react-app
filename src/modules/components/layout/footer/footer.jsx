
import { Box, Button, ButtonGroup, Container, Divider, Grid, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { AppColors } from '../../../../utils/consts/app_colors'
import GPlayLogo from '../../logo/GPlayLogo'

import Logo from '../../logo/Logo'

const Footer = () => {
  return (
    <Box
    sx={{
      width: "100%",
      height: "auto",
      backgroundColor: AppColors.FOOTER_COLOR,
      paddingTop: "1rem",
      paddingBottom: "1rem",
    }}
  >
    <Container maxWidth="xl">

      {/* <Grid container  direction={{xs:"column",sm:"column",md:"row"}} justifyContent="space-between" columns={{ xs: 4, sm: 8, md: 12 }}>
        <FooterLogoContainer>
        <Divider />
        <List >
          <ListItem disablePadding  >
            <ListItemButton  sx={{ bgcolor: 'none' , ":hover":{bgcolor:'none'}}}>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
        </List>
        </FooterLogoContainer>

        <FooterMenuContaier>
          <FooterMenu>
          <ListItem disablePadding  >
            <ListItemButton  sx={{ bgcolor: 'none' , ":hover":{bgcolor:'none'}}}>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
           
          </FooterMenu>
          <FooterMenu>
          <ListItem disablePadding  >
            <ListItemButton  sx={{ bgcolor: 'none' , ":hover":{bgcolor:'none'}}}>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
           
          </FooterMenu>
        </FooterMenuContaier>
          
      </Grid> */}

      <FooterContentWrapper >
        <FooterLogoContainer>
        <FooterLogo></FooterLogo>
        <GPlayLogo></GPlayLogo>

        </FooterLogoContainer>
        <FooterMenuContaier>
        <FooterMenu>
          <ListItem disablePadding  >
            <ListItemButton  sx={{ bgcolor: 'none' , ":hover":{bgcolor:'none'}}}>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
           
          </FooterMenu>
          
          <FooterMenu>
          <ListItem disablePadding  >
            <ListItemButton  sx={{ bgcolor: 'none' , ":hover":{bgcolor:'none'}}}>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
           
          </FooterMenu>

          <FooterMenu>
          <ListItem disablePadding  >
            <ListItemButton  sx={{ bgcolor: 'none' , ":hover":{bgcolor:'none'}}}>
              <ListItemText primary="Trash" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#simple-list">
              <ListItemText primary="Spam" />
            </ListItemButton>
          </ListItem>
           
          </FooterMenu>

        </FooterMenuContaier>
        
      </FooterContentWrapper>


        <Grid item xs={12}>
          <Typography color="black" variant="h5">
            React Starter App
          </Typography>
        </Grid>
      <Divider style={{backgroundColor:"white",margin:'0'}} />
      <Box height='30px' />
        <Grid container  direction="row" justifyContent="space-between">
          <Typography color="textSecondary" variant="subtitle1" style={{color:'white'}}>
            {` © ${new Date().getFullYear()} | Digverve Solutions Pvt. Ltd. All Rights Reserved.`}
          </Typography>
          <Grid item >
            <ButtonGroup variant="text" aria-label="text button group" style={{borderColor:'white'}}>
              <Button style={{color:'white'}}>Terms</Button>
              <Button style={{color:'white'}}>Privacy</Button>
              <Button style={{color:'white'}}>Site Map</Button>
            </ButtonGroup>
          </Grid>
         
        </Grid>
        <Box height='20px' />
    </Container>
  </Box>
  )
}

export default Footer


const FooterContentWrapper = props =>{
  return (
    <Grid container {...props} direction={{xs:"column",sm:"column",md:"row",}} justifyContent="space-between">
      {props.children}
    </Grid>
  )
}

const FooterLogoContainer = props => {
  return (
    <Grid items  {...props} direction="column" justifyContent="space-between" justifyItems="center"  xs={12} sm={12} md={4}>{props.children}</Grid>
  )
}

const FooterLogo = props => {
  return (
    <Logo></Logo>
  )
}

const FooterMenuContaier = props => {
  return (
    <Grid container {...props} spacing={{ xs: 2, md: 3,lg:4 }} direction={{xs:"column",sm:"row",md:"row",}} justifyContent="space-evenly" width="auto"  xs={12} sm={12} md={8}>
      {props.children}
    </Grid>
  )
}

const FooterMenu = props => {
  return (
    <Grid item  md={4}>
      <List {...props} >
        <Divider />
        {props.children}
      </List>
    </Grid>
  )
}