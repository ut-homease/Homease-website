import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              About HOMEase
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Making independence possible through AI-powered home safety
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              HOMEase was created out of frustration — and a vision for something better. Too often, we've seen loved ones discharged from hospitals into homes that aren't safe or supportive.
            </p>
            <p>
              We believe everyone deserves to live safely and independently in their own home. Our mission is to bridge the gap between healthcare and home modification.
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 