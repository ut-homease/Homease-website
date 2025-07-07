import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CookiePreferences from './components/CookiePreferences';

const Footer: React.FC = () => {
  const [showCookiePreferences, setShowCookiePreferences] = useState(false);

  const handleConsentChange = (preferences: {
    analytics: boolean;
    marketing: boolean;
    necessary: boolean;
  }) => {
    // This will be handled by the parent App component
    window.location.reload(); // Reload to apply new consent settings
  };

  return (
          <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info & Social */}
          <div className="col-span-1 text-center md:text-left">
                          <div className="flex items-center justify-center md:justify-start mb-4">
                <img src="/logo_transparent.png" alt="HOMEase" className="h-8 w-auto mr-3" />
                <h3 className="text-xl font-bold">HOMEase</h3>
              </div>

            <p className="text-gray-400 text-sm mb-6">
              Please start a chat or reach us at info@yourhomease.com with additional questions that are not addressed above.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center md:justify-start space-x-6">
              {/* Facebook */}
              <a 
                href="https://www.facebook.com/people/HOMEase-Solutions/61575267390743/#" 
                className="text-gray-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              {/* Instagram */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-pink-600 transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              
              {/* Twitter/X */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on Twitter"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              
              {/* TikTok */}
              <a 
                href="#" 
                className="text-gray-400 hover:text-black transition-all duration-300 transform hover:scale-110"
                aria-label="Follow us on TikTok"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contractors" className="text-gray-300 hover:text-white transition-colors duration-300">
                  For Contractors
                </Link>
              </li>
              <li>
                <Link to="/investors" className="text-gray-300 hover:text-white transition-colors duration-300">
                  Investors
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact & Hours */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contact & Hours</h3>
            <div className="space-y-4 text-gray-300">
              <div>
                <p className="font-medium">info@yourhomease.com</p>
                <p className="text-sm mt-2">
                  17350 State Hwy 249 STE 220<br />
                  Houston, TX 77064, USA
                </p>
              </div>
              
              <div>
                <p className="font-medium mb-3">Business Hours</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center md:justify-start py-1">
                    <span className="font-medium w-16">Mon-Fri</span>
                    <span>09:00 am – 05:00 pm</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start py-1">
                    <span className="font-medium w-16">Sat-Sun</span>
                    <span className="text-gray-500">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between">
            <div className="grid grid-cols-3 gap-4 justify-items-center">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <button 
                onClick={() => setShowCookiePreferences(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
              >
                Cookie Preferences
              </button>
            </div>
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2025 HOMEase SOLUTIONS, Inc. - All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
      <CookiePreferences 
        isOpen={showCookiePreferences}
        onClose={() => setShowCookiePreferences(false)}
        onConsentChange={handleConsentChange}
      />
    </footer>
  );
};

export default Footer; 