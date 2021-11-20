import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';

export default class Route extends Component,
ReactDOM.render(
  <React.StrictMode>
    <Router />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
),

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();