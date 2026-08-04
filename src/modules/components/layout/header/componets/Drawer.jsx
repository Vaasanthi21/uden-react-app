/** @jsxRuntime classic */
/** @jsx jsx */

// eslint-disable-next-line
import React, { useState } from 'react';

import { jsx } from '@emotion/react';
import MUIDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import Logo from '../../../logo/Logo';
import { HeaderConst } from '../header.const';
import { HeaderStyles as styles } from '../styles/Header.Style';
import { Button, ListItemIcon, Collapse } from '@mui/material';
import { AppRoutes } from '../../../../../utils/consts/routes';
import Spacer from '../../../Spacer';

const Drawer = ({ props }) => {
    const container = window !== undefined ? () => window.document.body : undefined;
    var route = props.hooks.route;
    const data = HeaderConst;

    // Dropdown state
    const [campusOpen, setCampusOpen] = useState(false);

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
                sx={{ display: { xs: 'block', md: 'none' }, width: '400px' }}
            >
                <Box sx={{ textAlign: 'center' }}>
                    <Box display="flex" justifyContent="space-between">
                        <Logo css={styles.logoDrawer} sx={{ py: '8px', px: '5%' }} />
                        <IconButton
                            size="large"
                            aria-label="close menu"
                            onClick={props.closeDrawer}
                            color="black"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>

                    <Divider />
                    <List>
                        {data.Tabs.Names.map((name, index) => {
                            const linkRoute = data.Tabs.Routes[index] === AppRoutes.CAMPUS_PLACEMENTS ? AppRoutes.FOR_CAMPUS : data.Tabs.Routes[index];
                            return (
                                <ListItem key={index} disablePadding>
                                    <ListItemButton
                                        css={styles.tabsMobile({ isCurrent: ((!route) ? false : linkRoute.includes(route)) })}
                                        href={linkRoute}
                                        onClick={props.closeDrawer} // Close menu on normal clicks
                                        sx={{ textAlign: 'center' }}
                                    >
                                        <ListItemIcon>
                                            {data.Tabs.Icons[index]}
                                        </ListItemIcon>
                                        <ListItemText primary={name} css={styles.tabsMobileText} />
                                    </ListItemButton>
                                </ListItem>
                            );
                        })}
                    </List>

                    <Spacer height />
                    <Button href={AppRoutes.FIND_TALENT} onClick={props.closeDrawer} variant="contained" css={styles.signupButtonMobile} size="large">
                        {data.ButtonStrings.SIGNUP_SIGNIN}
                    </Button>

                </Box>
            </MUIDrawer>
        </Box>
    );
};

export default Drawer;
