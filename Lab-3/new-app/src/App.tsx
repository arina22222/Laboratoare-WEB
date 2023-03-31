import React from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar, Toolbar, Container, Box, Typography } from '@material-ui/core';


function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <Typography variant="h6">My App</Typography>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
      <Typography variant="body1">Welcome to my app!</Typography>
      </Container>
    </Box>
  
  );
}


export default App;
