import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
//make sure that in main.jsx index.css is imported
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
