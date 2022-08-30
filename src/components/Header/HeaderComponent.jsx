import { Box } from '@material-ui/core';
import React,{useState} from 'react';
import { useStyles } from './HeaderStyles';
import DrawerComponent from './DrawerComponent';
import HelpOutlineRoundedIcon from '@material-ui/icons/HelpOutlineRounded';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import AppsRoundedIcon from '@material-ui/icons/AppsRounded';
import Navbar from './Navbar';

export default function HeaderComponent() {
  const classes = useStyles();
  const [initialState, setInitialState] = useState(false);
  
  const handleDrawer = () => {
    setInitialState(!initialState);
  }
  
  const navlinks = [
    // { label: "Search", Id: "Search" ,url: <SearchRoundedIcon/>},
    { label: "Help", Id: "Help",url: <HelpOutlineRoundedIcon/>},
    { label: "Settings", Id: "Settings",url: <SettingsRoundedIcon/> },
    { label: "Google Apps", Id: "Google Apps" ,url: <AppsRoundedIcon/>},
]

  return (
    <Box className={classes.HeaderWrapper} id="Header">
      <Navbar navlinks={navlinks} handleDrawer={handleDrawer}/>
      <DrawerComponent initialState={initialState} handleDrawer={handleDrawer}/>
    </Box>
  );
}
