import {createSlice} from '@reduxjs/toolkit';

import {instance} from '../globals';

export const translateSlice = createSlice({
	name: ' translate',
	initialState: {
		messages: [],
		loading: false,
		error: null,
		translates: []
	},
	reducers: {
		loadMessages: (state, action) => {
			state.messages = [...action.payload, ...state.messages];
			state.loading = false;
		},
		loadMessage: (state, action) => {
			state.messages = [action.payload, ...state.messages];
			state.loading = false;
		},
		clearMessages: state => {
			state.messages = [];
			state.error = null;
		},
		loadTranslates: (state, action) => {
			state.translates = action.payload;
			state.loading = false;
		},
		filterTranslate: (state, action) => {
			state.translates = state.translates.filter(translate => translate.uuid !== action.payload);
		},
		setLoading: (state, action) => {
			state.loading = action.payload;
			state.error = null;
		},
		setError: (state, action) => {
			state.error = action.payload;
			state.loading = false;
		}
	}
});

// ACTIONS
export const {
	loadMessages,
	loadMessage,
	clearMessages,
	loadTranslates,
	setError,
	setLoading,
	filterTranslate
} = translateSlice.actions;

// SELECTORS
export const selectMessages = state => state.translate.messages;
export const selectTranslateLoading = state => state.translate.loading;
export const selectTranslateError = state => state.translate.error;
export const selectTranslates = state => state.translate.translates;

export const fetchMessages = translate_uuid => dispatch => {
	dispatch(setLoading(true));
	instance
		.get(`/translate/${translate_uuid}/`)
		.then(res => dispatch(loadMessages(res.data)))
		.catch(err => dispatch(setError(err.response.data.detail)));
};

export const getTranslates = () => dispatch => {
	dispatch(setLoading(true));
	instance
		.get('/translate/')
		.then(res => dispatch(loadTranslates(res.data)))
		.catch(err => {
			if (err.response) {
				dispatch(setError(err.response.data.detail));
			} else {
				dispatch(setError('Error fetching translates'));
			}
		});
};

export const createTranslate = (recipient, history) => dispatch => {
	dispatch(setLoading(true));
	instance
		.post('/translate/', {recipient})
		.then(res => {
			const translate_uuid = res.data.uuid;
			dispatch(setLoading(false));
			history.push(`/translate/${translate_uuid}`);
		})
		.catch(err => {
			if (err.response.data.recipient && err.response.data.recipient.length) {
				dispatch(setError(err.response.data.recipient[0]));
			} else {
				dispatch(setError('Error creating new translate'));
			}
		});
};

export const deleteTranslate = translateUuid => dispatch => {
	instance
		.delete(`/translate/${translateUuid}/delete/`)
		.then(res => dispatch(filterTranslate(translateUuid)))
		.catch(err => dispatch(setError(err.response.data.detail || 'Could not delete translate')));
};

export default translateSlice.reducer;
