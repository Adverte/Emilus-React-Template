import React, {StrictMode} from 'react';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createRoot} from "react-dom/client";
import HomePage from "./pages/HomePage";

const root = createRoot(document.getElementById('root'))
root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
