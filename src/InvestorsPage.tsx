import React from 'react';
import Header from './Header';
import Footer from './Footer';

const InvestorsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Investors
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Join us in revolutionizing home safety and accessibility through AI technology
            </p>
          </div>
        </div>
      </section>

      {/* Investment Opportunity */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Investment Opportunity
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              HOMEase is seeking strategic investors to accelerate our mission of making home safety accessible to everyone.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Opportunity</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• $50B+ aging-in-place market</li>
                <li>• 10,000+ Americans turn 65 daily</li>
                <li>• Growing demand for home safety solutions</li>
                <li>• Underserved market with high growth potential</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Technology</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• AI-powered home safety assessments</li>
                <li>• AR scanning technology</li>
                <li>• ADA-compliant recommendations</li>
                <li>• Contractor matching platform</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Invest?
            </h3>
            <p className="text-gray-600 mb-6">
              Contact us to learn more about investment opportunities and our growth strategy.
            </p>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Email:</strong> investors@yourhomease.com
              </p>
              <p className="text-gray-700">
                <strong>Phone:</strong> (555) 123-4567
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InvestorsPage; 