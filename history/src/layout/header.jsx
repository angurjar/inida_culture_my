// src/components/Layout/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { Link } from '@mui/material';

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Family Portal
        </Typography>
        <Link component={RouterLink} to="/" color="inherit" style={{ margin: '0 10px' }}>
          Home
        </Link>
        <Link component={RouterLink} to="/services" color="inherit" style={{ margin: '0 10px' }}>
          Services
        </Link>
        <Link component={RouterLink} to="/dashboard" color="inherit" style={{ margin: '0 10px' }}>
          Dashboard
        </Link>
        <Link component={RouterLink} to="/profile" color="inherit" style={{ margin: '0 10px' }}>
          Profile
        </Link>
        <Link component={RouterLink} to="/login" color="inherit" style={{ margin: '0 10px' }}>
          Login
        </Link>
        <Link component={RouterLink} to="/register" color="inherit" style={{ margin: '0 10px' }}>
          Register
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
