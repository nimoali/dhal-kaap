import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './assets/component/Home.jsx'
import News from './assets/pages/New.jsx'
import Contact from './assets/pages/Contact.jsx'
import Register from './assets/pages/Register.jsx'
import './assets/Style/Register.css'
import './assets/Style/Login.css'
import Login from './assets/pages/Login.jsx'
import Header from './assets/component/Header.jsx'

import { BrowserRouter } from 'react-router-dom'
import Cimlilada from './assets/pages/Cilada.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  // <Cimlilada />

 <BrowserRouter>
<App/>
</BrowserRouter> 
  // <App/>
  //<Home/>
  // <News/>
  // <Contact/>
  // <Register/>
  // // <Login/>
  // <Header/>
  
)
