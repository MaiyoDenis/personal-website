import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // Updated import
import { AppProvider } from './context/AppContext'
import './styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
)
