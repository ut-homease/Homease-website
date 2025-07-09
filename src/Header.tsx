import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-gray-900 shadow-lg sticky top-0 z-50 transition-all duration-300 hover:shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/logo_transparent.png" 
              alt="HOMEase" 
              className="h-8 w-auto hover:opacity-80 transition-opacity duration-300 cursor-pointer" 
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`font-medium transition-colors duration-300 ${
                isActive('/') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`font-medium transition-colors duration-300 ${
                isActive('/about') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`font-medium transition-colors duration-300 ${
                isActive('/contact') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Contact
            </Link>
            <Link 
              to="/support" 
              className={`font-medium transition-colors duration-300 ${
                isActive('/support') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Support
            </Link>
            <Link 
              to="/blog" 
              className={`font-medium transition-colors duration-300 ${
                isActive('/blog') 
                  ? 'text-blue-400' 
                  : 'text-gray-300 hover:text-blue-400'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contractors" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
            >
              For Contractors
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="md:hidden text-gray-300 hover:text-blue-400 transition-colors duration-300 p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu - Slide Out Panel */}
        {showMobileMenu && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setShowMobileMenu(false)}
            />
            
            {/* Slide Out Panel */}
            <div className="fixed top-0 right-0 h-full w-80 bg-gray-900 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
              {/* Panel Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700">
                <div className="flex items-center space-x-3">
                  <img src="/logo_transparent.png" alt="HOMEase" className="h-8 w-auto" />
                </div>
                <button
                  onClick={() => setShowMobileMenu(false)}
                  className="text-gray-400 hover:text-white transition-colors p-2"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Navigation Links */}
              <div className="flex flex-col p-6 space-y-2">
              <Link 
                to="/" 
                  className={`font-medium py-4 px-4 rounded-xl transition-all duration-300 ${
                  isActive('/') 
                      ? 'text-blue-400 bg-gray-800 shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setShowMobileMenu(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                  className={`font-medium py-4 px-4 rounded-xl transition-all duration-300 ${
                  isActive('/about') 
                      ? 'text-blue-400 bg-gray-800 shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setShowMobileMenu(false)}
              >
                About
              </Link>
                <Link 
                  to="/contact" 
                  className={`font-medium py-4 px-4 rounded-xl transition-all duration-300 ${
                    isActive('/contact') 
                      ? 'text-blue-400 bg-gray-800 shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  Contact
                </Link>
                <Link 
                  to="/support" 
                  className={`font-medium py-4 px-4 rounded-xl transition-all duration-300 ${
                    isActive('/support') 
                      ? 'text-blue-400 bg-gray-800 shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                  }`}
                  onClick={() => setShowMobileMenu(false)}
                >
                  Support
                </Link>
              <Link 
                to="/blog" 
                  className={`font-medium py-4 px-4 rounded-xl transition-all duration-300 ${
                  isActive('/blog') 
                      ? 'text-blue-400 bg-gray-800 shadow-lg' 
                      : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
                onClick={() => setShowMobileMenu(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contractors" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium text-center block shadow-lg"
                onClick={() => setShowMobileMenu(false)}
              >
                For Contractors
              </Link>
            </div>
              
              {/* Contact Section */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-700">
                <div className="space-y-3">
                  <a 
                    href="mailto:info@yourhomease.com"
                    className="block text-gray-300 hover:text-white transition-colors text-center py-2"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    info@yourhomease.com
                  </a>
                  <a 
                    href="https://calendly.com/your-calendly-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-700 hover:bg-gray-600 text-white py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 font-medium text-center block shadow-lg"
                    onClick={() => setShowMobileMenu(false)}
                  >
                    Schedule a Call
                  </a>
                </div>
              </div>
          </div>
          </>
        )}
      </div>
    </header>
  );
};

export default Header; 