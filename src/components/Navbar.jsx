import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Button from '../layouts/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="fixed w-full z-10 py-4 bg-tertiary shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-slate-100">
        <nav className="container flex flex-row justify-between items-center">
          <div>
            <Link to="/" className="font-bold text-2xl text-secondary">CheesyBites.</Link>
          </div>
          {/* Desktop Menu */}
          <nav className="hidden lg:flex gap-10 text-secondary font-semibold text-xl">
            <Link to="/" className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">Home</Link>
            <Link to="/about" className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">About</Link>
            <Link to="/menu" className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">Menu</Link>
            <Link to="/contact" className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">Contact</Link>
            <Link to="/review" className="cursor-pointer hover:text-yellow-500 transition duration-300 ease-in-out">Reviews</Link>
          </nav>
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden flex items-center px-4 py-2 text-gray-700 hover:bg-gray-200 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-lg mt-2">
            <div className="flex flex-col">
              <Link
                to="/"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/menu"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Menu
              </Link>
              <Link
                to="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <Link
                to="/review"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Reviews
              </Link>
            </div>
          </div>
        )}
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
