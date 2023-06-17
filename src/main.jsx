import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <div>
      <div className='pinggiran z-0 fixed m-[-100px]'></div>
    <div className='p-5 z-20 fixed right-0 left-0'>
    <App />
    </div>
      <div className='pinggiran-kanan z-10 fixed bottom-1 right-2 '></div>
    </div>
  </React.StrictMode>
  </BrowserRouter>
)
