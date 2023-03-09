/** @jsxRuntime classic */
/** @jsx jsx */

// eslint-disable-next-line
import React from 'react'

import {jsx} from '@emotion/react';
import MUIDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';



import Logo from '../../../logo/Logo';
import { HeaderConst } from '../header.const';
import { HeaderStyles as styles } from '../styles/Header.Style';
import { Button, ListItemIcon } from '@mui/material';
import { AppStrigs } from '../../../../../utils/consts/strings';
import { AppRoutes } from '../../../../../utils/consts/routes';
import Spacer from '../../../Spacer';



const Drawer = ({props}) => {
    const container = window !== undefined ? () => window.document.body : undefined;
    var route = props.hooks.route;
    const tabs = HeaderConst.Tabs;
  return (
    <Box component="nav">
        <MUIDrawer
          container={container}
          variant="temporary"
          open={props.isDrawer}
          onClose={props.handleDrawerToggle}
          css={styles.drawer} 
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{display: { xs: 'block', md: 'none'  },width:'400px'}}
        >
            <Box onClick={props.handleDrawerToggle} sx={{ textAlign: 'center' }}>
                <Box display="flex" justifyContent="space-between">
                    <Logo css={styles.logoDrawer} sx={{py:'8px',px:'5%'}} />
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
                                css={styles.tabsMobile({isCurrent:(!route&&index===0)?true:((!route&&index!==0)?false:tabs.Routes[index].includes(route))})}
                                href={tabs.Routes[index]} 
                                alignItems='center'
                                sx={{ textAlign: 'center' }}>
                                <ListItemIcon>
                                    {tabs.Icons[index]}
                                </ListItemIcon>
                                <ListItemText primary={name} css={styles.tabsMobileText} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Spacer height/>
                <Button  href={AppRoutes.APP}  variant="contained" css={styles.signupButtonMobile} size="large">{AppStrigs.ButtonStrings.SIGNUP_SIGNIN}</Button>
            </Box>
        </MUIDrawer>
    </Box>
  )
}

export default Drawer