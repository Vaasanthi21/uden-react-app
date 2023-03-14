import { Divider, Grid, List, ListItem } from "@mui/material"


const FooterMenu = props => {
    return (
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4}  {...props}  >
        <List className="list"  >
          <Divider className="divider" />
          <ListItem disablePadding  className="menu-list">
            {props.children}
          </ListItem>
        </List>
      </Grid>
    )
  }

  export default FooterMenu;