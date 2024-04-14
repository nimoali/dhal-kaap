import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './assets/component/Header';
import Contact from './assets/pages/Contact';
import News from './assets/pages/New';
import Login from './assets/pages/Login';
import Register from './assets/pages/Register';
import Home from './assets/component/Home';
import Cimlilada from './assets/pages/Cilada';
import SearchBar from './assets/pages/Weather';

const App = () => {
  return (
    <div>
      <Routes>
      
        {/* <div className="pt-20"> Add padding-top to accommodate the fixed header */}
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/new' element={<News />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cimilada' element={<SearchBar/>} />
        {/* </div> */}
      </Routes>
    </div>
  );
};

export default App;
