import React from 'react';
import ReactDOM from 'react-dom';
import './utils/global/css/global.css';
import App from './App';
import 'tachyons'
import { StoreContextProvider } from './store/storeContext';


ReactDOM.render(
    <StoreContextProvider>
    <App />
    </StoreContextProvider>,
  document.getElementById('root')
);

