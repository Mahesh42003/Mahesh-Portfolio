// main.jsx — React Entry Point
// This is the first file React runs.
// It finds the <div id="root"> in index.html and renders <App /> inside it.

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  // StrictMode helps catch bugs during development (no effect in production)
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
