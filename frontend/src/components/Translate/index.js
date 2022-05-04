import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Box, Grid, Container, Typography, TextField, Button, Snackbar} from '@mui/material';
import {Redirect, useParams} from 'react-router-dom';
import TranslateBox from './TranslateBox';


function Translate() {
  const [open, setOpen] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Container component="section" sx={{ mt: 10, display: 'flex' }}>
        <TranslateBox />
    </Container>
  );
}

export default Translate;
