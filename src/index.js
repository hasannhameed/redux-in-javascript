import store from './store/iindex';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';

// Create a root for rendering
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
