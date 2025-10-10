import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './store/store'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>  
    </HashRouter>
  </React.StrictMode>
);

