import React from 'react'
import { render } from "react-dom";

// third party
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

// project imports
import App from "./components/App";
import {store} from 'store';

// redux
import {AuthProvider} from "context/AuthContext"

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <AuthProvider>
                <App/>
            </AuthProvider>
        </BrowserRouter>
    </Provider>
)


const container = document.getElementById("app");
render(<App />, container);