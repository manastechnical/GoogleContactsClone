import React from 'react';
import { AppBar, Toolbar, Typography, Box, Button,IconButton} from '@material-ui/core';
import { useStyles } from './HeaderStyles';
import MenuOpenRoundedIcon from '@material-ui/icons/MenuOpenRounded';
import SearchBar from './SearchBar';

export default function Navbar({navlinks, handleDrawer}) {
    const classes = useStyles();
    return (
        <AppBar position="fixed" className={classes.navbar}>
            <Toolbar className={classes.toolbar}>
                <Box>
                    <IconButton color="inherit" onClick={handleDrawer}>
                        <MenuOpenRoundedIcon/>
                    </IconButton>
                </Box>
                <Typography variant="h5" container="h6" className={classes.navbarTitle}>
                    {"Google Contacts"}
                </Typography>
                <Box>
                    <SearchBar/>
                </Box>
                <Box>
                    <Box>
                        {navlinks.map((item,i) => (
                            <Button key={i} className={classes.navlink} color="inherit">
                                {item.url}
                            </Button>
                        ))}
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    );
}
