import { Box, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import React from 'react';
import { useStyles } from './HeaderStyles';

export default function DrawerComponent(initialState,handleDrawer) {
    const classes = useStyles();

  return (
    <Drawer anchor='left' open={false} onClose={handleDrawer} className={classes.drawer}>
        <Box className={classes.drawerContainer}>
                <List style={{paddingTop:"30px"}}>
                    <ListItem>
                        <ListItemText>
                            Joey: How u doin'?
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                            Rachel: I'm doing fine baby. How u doing?
                        </ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemText>
                        Joey: Ross! Don't let her drink any more!
                        </ListItemText>
                    </ListItem> 
                </List>
            </Box>    
    </Drawer>
  );
}
