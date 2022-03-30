import React from 'react';
import {AppBar, Toolbar, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function Header() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
  };

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/'}>Home</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/hooks'}>Hooks</Link>
        </Typography>
        <Typography m={2} color="inherit" component="div">
          <Link style={linkStyle} to={'/hookform'}>Hookform</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
