import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mains from './routes/Mains';
import Appetizers from './routes/Appetizers';
import Desserts from './routes/Desserts';
import Location from './routes/Location';
// import { render } from 'react-dom';


// import Appetizers from '.routes/Appetizers';
// import Desserts from '.routes/Desserts';
// import Mains from '.routes/Mains';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="appetizers" element={<Appetizers />} />
      <Route path="desserts" element={<Desserts />} />
      <Route path="mains" element={<Mains />} />
      <Route path="location" element={<Location />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
  );


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
