import { AppBar, Toolbar,IconButton,makeStyles,  Typography } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import veraltoLogo from "./workseat.png"; // Import the image

const useStyles = makeStyles({
  logo: {
    width:32, // Adjust the width as needed
    height: 32,
    marginRight:0, // Add margin if necessary
    position:"relative",
    top:-1,
  },

  barcolor:{
    backgroundColor:"#000000",
  }
});

function TopBar() {
  const classes = useStyles();
  return (
    <AppBar  color="primary">
      <Toolbar>
      <IconButton color="inherit" component={Link} to="/">
          <img src={veraltoLogo} alt="Veralto Logo" className={classes.logo} /> {/* Add the image */}
        </IconButton>
        <Typography
          variant="h5"
          color="inherit"
          style={{ paddingLeft: "10px" }}
        >
        Seat booking application for hybrid work culture
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
