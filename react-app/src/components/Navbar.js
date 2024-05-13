import React from 'react';
import { Button, AppBar, Toolbar, Typography, ThemeProvider, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import theme from '.././hooks/useTheme.js'
import style from '../styles/Navbar.module.css';

function Navbar() {
  const profilePage = localStorage.getItem("token") ? "Profile": "Login/Signup"
  return (
    <div>
    <ThemeProvider theme={theme}>
    <AppBar position="static" color = "primary" >
      <Toolbar>
        <Link className = {style.links} to="/">
        <Typography variant="h5">Rattigan's Reviews</Typography>
        </Link>
        <Link className = {style.links} to="/tv-shows">
        <Button color="inherit" style={{ marginLeft: '40px' }}>TV Shows </Button>
        </Link>
        <Link className = {style.links} to="/movies">
        <Button color="inherit" style={{ marginLeft: '40px' }}>Movies </Button>
        </Link>
        <Button color="inherit" style={{ marginLeft: '800px' }}> </Button>
        {localStorage.getItem("token")? 
          (<Link className = {style.login} to="/profile">
            <Button color="inherit" style={{marginLeft: '20px'}}>{profilePage} </Button>
          </Link>) :
          (<Link className = {style.login} to="/login">
            <Button color="inherit" style={{marginLeft: '20px'}}>{"Login/Signup"} </Button>
          </Link>) 
        }
      </Toolbar>
    </AppBar>
    </ThemeProvider>
  </div>
  );
}

export default Navbar;
