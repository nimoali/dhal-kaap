import React from 'react';
import { Route , Routes, defer } from "react-router-dom";
import Contact from './assets/pages/Contact';
import News from './assets/pages/New';
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import Home from './assets/component/Home';
import Cimlilada from './assets/pages/Cilada';

const App = () => {
  return <div>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/contact' element={<Contact/>} />
  <Route path='/new' element={<News/>} />
  <Route path='/login' element={<Login/>}/>
  <Route path='/register' element={<Register/>}/>
  <Route path='/cimilada' element={<Cimlilada/>}/>
 
</Routes>
   </div>
  
}

export default App;
