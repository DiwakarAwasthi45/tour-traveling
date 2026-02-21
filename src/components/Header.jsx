
  import React from 'react'
import { Link } from 'react-router-dom'
  
  function Header() {
    return (
     <>
    <header className="bg-white shadow-md  w-full sticky top-0 z-50 ">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo */}
    <div className="text-2xl font-bold text-blue-600">
      🌍 TravelGo
    </div>
    {/* Desktop Menu */}
    <nav className="hidden md:flex space-x-8 text-gray-700 font-medium">
      <Link to={'/'} className="hover:text-blue-600 transition duration-300">Home</Link>
      <Link to={'/destinations'} className="hover:text-blue-600 transition duration-300">Destinations</Link>
      <Link to={'/packages'} className="hover:text-blue-600 transition duration-300">Packages</Link>
      <Link to={'/about'} className="hover:text-blue-600 transition duration-300">About</Link>
      <Link to={'/contact'} className="hover:text-blue-600 transition duration-300">Contact</Link>
    </nav>
    {/* Buttons */}
    <div className="hidden md:flex space-x-4">
      <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
        Login
      </button>
      <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
        Sign Up
      </button>
    </div>
    {/* Mobile Menu Button */}
    <div className="md:hidden">
      <button id="menu-btn" className="text-gray-700 focus:outline-none">
        ☰
      </button>
    </div>
  </div>
  {/* Mobile Menu */}
  <div id="mobile-menu" className="hidden md:hidden bg-white px-6 pb-4">
    <Link to={'/'} className="hover:text-blue-600 transition duration-300">Home</Link>
      <Link to={'/destinations'} className="hover:text-blue-600 transition duration-300">Destinations</Link>
      <Link to={'/packages'} className="hover:text-blue-600 transition duration-300">Packages</Link>
      <Link to={'/about'} className="hover:text-blue-600 transition duration-300">About</Link>
      <Link to={'/contact'} className="hover:text-blue-600 transition duration-300">Contact</Link>
    <div className="mt-3 flex space-x-3">
      <button className="w-full px-4 py-2 border border-blue-600 text-blue-600 rounded-lg">
        Login
      </button>
      <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg">
        Sign Up
      </button>
    </div>
  </div>
</header>

     </>
    )
  }
  
  export default Header
  

