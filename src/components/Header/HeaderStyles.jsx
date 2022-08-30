import { makeStyles } from "@material-ui/core";


export const useStyles = makeStyles((theme) => ({
    HeaderWraper: {
        height: "auto",
        minHeight: "90vh",
        width: "100%",
    },
    drawer: {
        width: "250px",
        height: "100vh",

    },
    drawerContainer: {
        width: "250px",
        height: "100vh",
    },
    toolbar: {
        display: "flex",
        flexFlow: "row wrap",
        justifyContent: "space-between"
    },
    navbarTitle:{
        [theme.breakpoints.down('sm')]: {
                
        }
    }
}))