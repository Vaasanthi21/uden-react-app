import {  ListItemButton, ListItemText } from "@mui/material"

const FooterMenuItems = props => {
  return (
    <ListItemButton {...props} disableRipple >
        <ListItemText disableTypography={true} className="title" primary={props.title}  />
    </ListItemButton>
  )
}

export default FooterMenuItems