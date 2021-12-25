import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import Navbar from './Component/navbar';
import Footer from './Component/footer';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  ,document.getElementById('root')
);

