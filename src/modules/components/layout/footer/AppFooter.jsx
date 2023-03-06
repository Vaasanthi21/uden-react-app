/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import { Box, Button, ButtonGroup, Container, Divider, Grid, Typography } from '@mui/material'
import GPlayLogo from '../../logo/GPlayLogo'

import Logo from '../../logo/Logo'
import SocialLogo from '../../logo/SocialLogo';
import FooterContentWrapper from './components/FooterContentWrapper';
import FooterLogoContainer from './components/FooterLogoContainer';
import FooterMenuContaier from './components/FooterMenuContainer';
import FooterMenu from './components/FooterMenu';
import { FooterStyles as styles} from './styles/footer.styles'
import FooterMenuItems from './components/FooterMenuItems';
import { AppStrigs } from '../../../../utils/consts/strings';

const AppFooter = () => {
  const route =  window.location.href.split(window.location.host)[1].split("/")[1];
  const FooterStrings = {...AppStrigs.FooterStrings};
  return (
    <Container maxWidth='auto' css={styles.mainContainer}>
      <Box height={{xs:'10px',sm:"20px",md:"30px",lg:"40px",xl:"50px"}} />
      <FooterContentWrapper >

        <FooterLogoContainer css={styles.logoContainer} >
          <Logo css={styles.logo} />
          <GPlayLogo css={styles.logoGP}></GPlayLogo>
          <SocialLogo css={styles.socialButtons} />
        </FooterLogoContainer>

        <Box height='2vw' display={{lg:"none",xs:"block"}} />

        <FooterMenuContaier>
          {FooterStrings.LINKS.map((items,itemIndex)=>
              <FooterMenu css={styles.footerMenu} key={`footerMenu${itemIndex}`}> 
                {items?.map((item,itemIndex)=><FooterMenuItems key={item.NAME} css={styles.footerMenuItems({isCurrent:(route==="/"||route==="")?false:item.LINK.includes(`/${route}`)})} title={item.NAME} href={item.LINK} disabled={item.isDisabled}/>)}
              </FooterMenu>)}
        </FooterMenuContaier>
        
      </FooterContentWrapper>


      <Box height='10px' />
      <Divider style={{backgroundColor:"white",margin:'0'}} />
      <Box height='30px' />
        <Grid container  direction="row" justifyContent="space-between">
          <Typography css={styles.copyrightText} color="textSecondary" variant="subtitle1" style={{color:'white'}}>
            {FooterStrings.FOOTER_COPYRIGHT}
          </Typography>
          <Grid item style={{borderBlockColor:'white',borderColor:"white"}}>
            <ButtonGroup  css={styles.bottomLink} variant="text" aria-label="text button group" >
              {FooterStrings.BOTTOM_LINKS.map((item)=> <Button key={`${item.NAME}`} disableFocusRipple disableRipple  className='button' href={item.LINK}>{item.NAME}</Button>)}
            </ButtonGroup>
          </Grid>
         
        </Grid>
        <Box height='20px' />
        
    </Container>
  )
}

export default AppFooter
