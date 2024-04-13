import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#72a624] text-[#ffffff] fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold mr-4">dhankaab</h1>
          {/* Use the image path here */}
          <img src="/path/to/your/image.jpg" alt="Logo" className="h-10" />
        </div>
        <button className="lg:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <svg
              className="w-6 h-6 relative right-0 "
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
                className="bg-[#78AB4E]"
              />
            </svg>
          ) : (
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                className="bg-[#78AB4E]"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          )}
        </button>
        <div className={`lg:flex items-center ${isOpen ? 'block' : 'hidden'}`}>
          <ul className={`lg:flex gap-2 lg:gap-4`}>
            <li>
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/cimilada" className="nav-link">
                Weather
              </Link>
            </li>
            <li>
              <Link to="/new" className="nav-link">
                New
              </Link>
            </li>
            <li>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
          {/* Conditional rendering to hide buttons on mobile */}
          <div className="lg:flex items-center ml-4">
            <Link
              to="/login"
              className="px-2 sm:px-6 py-1  mt-3  rounded bg-transparent border-2 border-[#006400] text-white"
            >
              Sign Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
