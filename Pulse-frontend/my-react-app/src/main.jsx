import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter as Router} from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './assets/redux/app/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Router>
    <React.StrictMode>
     <App />
  </React.StrictMode>
  </Router>
  </Provider>

 
)
