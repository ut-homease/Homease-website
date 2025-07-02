import React from 'react';
import Header from './Header';
import Footer from './Footer';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our team. We're here to help you create a safer, more accessible home.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We're here to help you with any questions about HOMEase.
          </p>
          <div className="space-y-4">
            <p className="text-gray-700">Email: info@yourhomease.com</p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContactPage; 