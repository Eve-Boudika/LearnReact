import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelloWorldApp } from './HelloWorldApp.jsx';
import { CounterApp } from './CounterApp.jsx';
import { GifExpertApp } from './GifExpertApp.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <GifExpertApp/>


  </React.StrictMode>
);
