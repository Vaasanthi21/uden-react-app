/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import React from 'react'
import MUIDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';



import Logo from '../../../Logo';
import { HeaderStyles } from './Header.Style';
import { HeaderConst } from './header.const';
import { Button, ListItemIcon } from '@mui/material';
import { AppStrigs } from '../../../../../utils/consts/strings';

const tabs = HeaderConst.Tabs;

const Drawer = ({props}) => {
    const container = window !== undefined ? () => window.document.body : undefined;
    var route = window.location.href.split(window.location.host)[1];
    route = route.split("/")[1];
  return (
    <Box component="nav">
        <MUIDrawer
          container={container}
          variant="temporary"
          open={props.isDrawer}
          onClose={props.handleDrawerToggle}
          css={HeaderStyles.drawer} 
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{display: { xs: 'block', md: 'none'  },width:'400px'}}
        >
            <Box onClick={props.handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Box display="flex" justifyContent="space-between">
                    <Logo css={HeaderStyles.logoDrawer} sx={{py:'8px',px:'5%'}} />
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={props.closeDrawer}
                        color="black"
                    >
                        <CloseIcon />
                    </IconButton>
                </Box>

                <Divider />
                <List>
                    {tabs.Names.map((name,index) => (
                        <ListItem 
                            key={name} 
                            disablePadding>
                            <ListItemButton 
                                css={HeaderStyles.tabsMobile({isCurrent:(!route&&index===0)?true:((!route&&index!==0)?false:tabs.Routes[index].includes(route))})}
                                href={tabs.Routes[index]} 
                                alignItems='center'
                                sx={{ textAlign: 'center' }}>
                                <ListItemIcon>
                                    {tabs.Icons[index]}
                                </ListItemIcon>
                                <ListItemText primary={name} css={HeaderStyles.tabsMobileText} />
                            </ListItemButton>
                        </ListItem>
                    ))},
                </List>
                <Button variant="contained" css={HeaderStyles.signupButtonMobile} size="large">{AppStrigs.ButtonStrings.SIGNUP_SIGNIN}</Button>
            </Box>
        </MUIDrawer>
    </Box>
  )
}

export default Drawer