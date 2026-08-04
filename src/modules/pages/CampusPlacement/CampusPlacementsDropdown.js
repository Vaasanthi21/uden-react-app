import React, { useState } from 'react';
import { Menu, MenuItem, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from 'utils/consts/routes';

const CampusPlacementsDropdown = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (route) => {
        navigate(route);
        handleClose();
    };

    return (
        <>
        <div>
            <Button
            aria-controls={open ? 'campus-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            >
            Campus Placements
            </Button>
            <Menu
            id="campus-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            >
            <MenuItem onClick={() => handleMenuItemClick(AppRoutes.FOR_CAMPUS)}>
                For Campus
            </MenuItem>
            <MenuItem onClick={() => handleMenuItemClick(AppRoutes.FOR_STUDENTS)}>
                For Students
            </MenuItem>
            </Menu>
        </div>
        </>
    );
    };

export default CampusPlacementsDropdown;