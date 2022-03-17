import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { render } from 'react-dom';


import Appetizers from '.routes/Appetizers';
import Desserts from '.routes/Desserts';
import Mains from '.routes/Mains';


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Appetizers />
    <Desserts />
    <Mains />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
