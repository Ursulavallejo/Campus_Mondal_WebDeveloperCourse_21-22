import React from 'react';
import ReactDOM from 'react-dom';
import './utils/styles/global.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'tachyons'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
