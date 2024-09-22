import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Navbar = () => {
  return (
    <nav className="bg-purple-200 p-4 fixed top-0 left-0 w-full z-10">
      <ul className="flex justify-between items-center text-purple-700">
        <li className="flex items-center">
          <img
            src={`${process.env.PUBLIC_URL}/navbarlogo.png`} // Referencing the logo from public directory
            alt="logo"
            className="h-50 w-10 mr-2" // Adjust height, width, and margin as needed
          />
          <span className="text-xl font-bold">JOHNSON JEREMIAH</span>
        </li>

        {/* Use Link components for internal navigation */}
        <li className="flex space-x-12">
          <Link to="/" className="hover:text-purple-400 font-semibold">Home</Link>
          <Link to="/about" className="hover:text-purple-400 font-semibold">About</Link>
          <Link to="/contact" className="hover:text-purple-400 font-semibold">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
