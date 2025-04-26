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
                            if (name === "Campus Placements") {
                                return (
                                    <React.Fragment key={index}>
                                        <ListItem disablePadding>
                                            <ListItemButton
                                                css={styles.tabsMobile({ isCurrent: ((!route) ? false : data.Tabs.Routes[index].includes(route)) })}
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevents menu from closing
                                                    setCampusOpen(!campusOpen);
                                                }}
                                                sx={{ textAlign: 'center' }}
                                            >
                                                <ListItemIcon>
                                                    {data.Tabs.Icons[index]}
                                                </ListItemIcon>
                                                <ListItemText primary={name} css={styles.tabsMobileText} />
                                                {campusOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                                            </ListItemButton>
                                        </ListItem>

                                        <Collapse in={campusOpen} timeout="auto" unmountOnExit>
                                            <List component="div" disablePadding>
                                                <ListItem disablePadding>
                                                    <ListItemButton href="/campus" sx={{ pl: 4 }}>
                                                        <ListItemText primary="For Campus" />
                                                    </ListItemButton>
                                                </ListItem>
                                                <ListItem disablePadding>
                                                    <ListItemButton href="/benefits" sx={{ pl: 4 }}>
                                                        <ListItemText primary="For Students" />
                                                    </ListItemButton>
                                                </ListItem>
                                            </List>
                                        </Collapse>
                                    </React.Fragment>
                                );
                            } else {
                                return (
                                    <ListItem key={index} disablePadding>
                                        <ListItemButton
                                            css={styles.tabsMobile({ isCurrent: ((!route) ? false : data.Tabs.Routes[index].includes(route)) })}
                                            href={data.Tabs.Routes[index]}
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
                            }
                        })}
                    </List>

                    <Spacer height />
                    <Button href="https://cps.uden.tech/" variant="contained" css={styles.signupButtonMobile} size="large">
                        {data.ButtonStrings.SIGNUP_SIGNIN}
                    </Button>

                </Box>
            </MUIDrawer>
        </Box>
    );
};

export default Drawer;
