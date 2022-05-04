import React, {useState, useEffect, useRef, useCallback} from 'react';
import {Box, Grid, Container, Typography, TextField, Button, Snackbar} from '@mui/material';
import {Redirect, useParams} from 'react-router-dom';


function TranslateBox() {
	const {chatUuid} = useParams();
	const dispatch = useCallback(useDispatch(), []);

    const ws = useRef(null);
    const [newMsg, setNewMsg] = useState('');

    useEffect(() => {
		ws.current = new WebSocket(`ws://localhost:8000/ws/translate/`);
		// ws.current.onopen = e => console.log('Chat socket opened');
		ws.current.onerror = e => dispatch(setError('Web socket error!'));
		ws.current.onmessage = e => {
			const msg = JSON.parse(e.data);

			if (msg.type === 'error') dispatch(setError(msg.data.message));
			else if (msg.type === 'chat_message') dispatch(loadMessage(msg.data));
		};

		// load previous chat messages
		dispatch(fetchMessages(chatUuid));

		return () => ws.current.close();
	}, [chatUuid, dispatch]);

	const sendNewMsg = e => {
		e.preventDefault();

		// check if newMsg is valid
		if (newMsg && newMsg.replace(/\s+/g, '') !== '') {
			const messageData = {uuid: uuid(), message: newMsg, recieved: false};
			ws.current.send(JSON.stringify(messageData));
			dispatch(loadMessage(messageData));
			setNewMsg('');
		}
	};

    // submit form when enter pressed in text area
	const onKeyDown = e => {
		if (e.keyCode === 13 && e.shiftKey === false && newMsg) sendNewMsg(e);
	};

    return (
    <Grid container>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'warning.main',
                py: 8,
                px: 3,
                }}
            >
                <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
                <Typography variant="h2" component="h2" gutterBottom>
                    Amazigh
                </Typography>
                <TextField
                    noBorder
                    placeholder="Type a text"
                    variant="standard"
                    multiline
                    rows={4}
                    sx={{ width: '100%', mt: 5, mb: 5 }}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ width: '100%' }}
                >
                    Translate
                </Button>
                </Box>
            </Box>
        </Grid>
        <Grid item xs={12} md={6} sx={{ zIndex: 1 }}>
            <Box
                sx={{
                display: 'flex',
                justifyContent: 'center',
                bgcolor: 'warning.main',
                py: 8,
                px: 3,
                }}
            >
                <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400 }}>
                <Typography variant="h2" component="h2" gutterBottom>
                    English
                </Typography>
                <TextField
                    noBorder
                    placeholder="Type a text"
                    variant="standard"
                    multiline
                    rows={4}
                    sx={{ width: '100%', mt: 5, mb: 5 }}
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                    sx={{ width: '100%' }}
                >
                    Translate
                </Button>
                </Box>
            </Box>
        </Grid>
    </Grid>
    );
}
  
export default TranslateBox;
