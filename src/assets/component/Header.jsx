import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#72a624] text-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center gap-7">
        <div>
          <h1>dhankaab</h1>
          {/* Use the image path here */}
          <img src="C:\Users\HP\Desktop\Dhul-kaab\src\assets\component\dhulkaap2.jpeg" alt="" />
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
                className='bg-[#78AB4E]'
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" className='bg-[#78AB4E]' strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
        <div className='flex gap-7 '>
          
          <ul className={`lg:flex ${isOpen ? 'block' : 'hidden'}` }>
          <ul className='flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/cimilada">Weather</Link>
            <Link to="/new">New</Link>
            <Link to="/contact">Contact</Link>
          </ul>
          </ul>
          {/* Conditional rendering to hide buttons on mobile */}
          <div className="lg:flex items-center">
            <Link to="/login" className="px-4 sm:px-8 py-1 rounded bg-transparent border-2 border-[#006400] text-white">Sign Out</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
