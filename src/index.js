import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './components/menu/Menu';
import "./index.css"
import {
  BrowserRouter as Router,
} from "react-router-dom";

import reportWebVitals from './reportWebVitals';
import  PhoneSignIn  from './components/auth/phoneAuth';






ReactDOM.render(
    <Router>
      <Menu /> 
      
    </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();