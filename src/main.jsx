import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HelloWorldApp } from './HelloWorldApp.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <HelloWorldApp/>
  </React.StrictMode>,
)
