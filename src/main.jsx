import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { HashRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
      <div className='relative'>
        <div id='shape-top' className='pinggiran z-0 fixed m-[-100px]'></div>
        <div className='p-5 z-20 right-0 left-0 relative'>
          <App />
        </div>
        <div id='shape-bottom' className='pinggiran-kanan z-10 fixed bottom-1 right-2 '></div>
      </div>
  </HashRouter>
)
