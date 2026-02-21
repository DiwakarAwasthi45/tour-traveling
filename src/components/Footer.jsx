import React from "react"
import {
  FaInstagram,
  FaFacebookSquare,
  FaYoutube, 
} from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-10">
      <div className="container mx-auto px-6 grid md:grid-cols-4 gap-8">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">
            🌍 TravelGo
          </h2>
          <p className="text-sm leading-6">
            Explore the world with us. Discover amazing destinations,
            affordable packages, and unforgettable experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-blue-400 transition">Home</Link></li>
            <li><Link to="/destinations" className="hover:text-blue-400 transition">Destinations</Link></li>
            <li><Link to="/packages" className="hover:text-blue-400 transition">Packages</Link></li>
            <li><Link to="/about" className="hover:text-blue-400 transition">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>📍 Kathmandu, Nepal</li>
            <li>📞 +977 98XXXXXXXX</li>
            <li>📧 info@travelgo.com</li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 text-2xl">
            <a href="#" className="hover:text-pink-500 text-3xl transition duration-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-600 text-3xl transition duration-300">
              <FaFacebookSquare />
            </a>
            <a href="#" className="hover:text-red-500 text-3xl transition duration-300">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-gray-400 text-3xl transition duration-300">
             <FaXTwitter />

            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm">
        © {new Date().getFullYear()} TravelGo. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;