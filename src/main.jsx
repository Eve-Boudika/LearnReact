import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelloWorldApp } from './HelloWorldApp.jsx';
import { CounterApp } from './CounterApp.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <HelloWorldApp titulo="pepepepe" subtitulo="subpepepe"/> */}
    <CounterApp value={10}/>
  </React.StrictMode>,
)
