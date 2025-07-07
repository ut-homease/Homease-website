import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const InvestorsPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const handleDownloadDeck = () => {
    // Create a link element to trigger the download
    const link = document.createElement('a');
    link.href = '/HOMEase AI Investor Deck MAY25.pdf';
    link.download = 'HOMEase AI Investor Deck MAY25.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Join us in revolutionizing the $105.8B home modification market through AR-powered lead generation
            </p>
            <button 
              onClick={handleDownloadDeck}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center mx-auto"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Investor Deck
            </button>
          </div>
        </div>
      </section>

      {/* Quick Stats Banner */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600">$105.8B</div>
              <div className="text-sm text-gray-600">TAM (2024)</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600">$500K</div>
              <div className="text-sm text-gray-600">Seed Target</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600">LOIs</div>
              <div className="text-sm text-gray-600">Contractor Interest</div>
            </div>
            <div className="p-4">
              <div className="text-2xl font-bold text-blue-600">CAPS</div>
              <div className="text-sm text-gray-600">Certified Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="py-8 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'market', label: 'Market' },
              { id: 'product', label: 'Product' },
              { id: 'financials', label: 'Financials' },
              { id: 'team', label: 'Team' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Overview Tab */}
      {activeTab === 'overview' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Investment Opportunity</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                HOMEase|AI is seeking $500K in seed funding to accelerate our AR-powered lead generation platform for the $105.8B home modification market.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Pivot</h3>
                <p className="text-gray-600">Pure-play lead generation model for speed-to-market and capital efficiency</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">AR Technology</h3>
                <p className="text-gray-600">Scan-to-lead technology delivering high-intent, pre-qualified homeowners</p>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-200">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Scalable Model</h3>
                <p className="text-gray-600">National expansion with data-driven leverage for future partnerships</p>
              </div>
            </div>

            {/* Contractor Network Section */}
            <div className="bg-white rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contractor Network Development</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3">Letters of Intent</h4>
                  <p className="text-gray-700 mb-4">
                    We have secured Letters of Intent from qualified contractors interested in our platform, demonstrating strong market demand and validation of our business model.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Multiple contractor LOIs secured</li>
                    <li>• Strong interest in lead generation platform</li>
                    <li>• Validation of market need</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">CAPS Certification Program</h4>
                  <p className="text-gray-700 mb-4">
                    We are actively sponsoring contractors to become CAPS (Certified Aging-in-Place Specialist) certified, ensuring quality and expertise in our network.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sponsoring CAPS certification for contractors</li>
                    <li>• Building qualified specialist network</li>
                    <li>• Ensuring high-quality service delivery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Market Tab */}
      {activeTab === 'market' && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Market Opportunity</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Size & Growth</h3>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                    <h4 className="font-bold text-lg mb-2">TAM: $105.8B → $161B (2030)</h4>
                    <p className="text-gray-600">Total home modification market</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                    <h4 className="font-bold text-lg mb-2">SAM: $1.61B → $2.41B (2030)</h4>
                    <p className="text-gray-600">Texas + Florida market</p>
                  </div>
                  <div className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-200">
                    <h4 className="font-bold text-lg mb-2">SOM: $19.7M → $72.2M (2030)</h4>
                    <p className="text-gray-600">AR-based lead generation revenue</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Market Drivers</h3>
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors duration-200">
                    <h4 className="font-bold text-lg mb-2">Demographics</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• 10,000+ Americans turn 65 daily</li>
                      <li>• 9 in 10 prefer to age in place</li>
                      <li>• 4M+ households over 65 face safety risks</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 rounded-xl p-6 hover:bg-blue-100 transition-colors duration-200">
                    <h4 className="font-bold text-lg mb-2">Market Trends</h4>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Medicare Advantage supports AIP</li>
                      <li>• Contractors lack AIP-focused leads</li>
                      <li>• Seniors comfortable with digital tools</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Product Tab */}
      {activeTab === 'product' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Product & Value Proposition</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">AR-Based Assessments</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Fast, simple scans</li>
                  <li>• ADA-compliant improvements</li>
                  <li>• Visual identification</li>
                  <li>• Pre-qualified leads</li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contractor Tools</h3>
                <ul className="space-y-3 text-gray-700">
                  <li>• Performance dashboards</li>
                  <li>• Lead conversion data</li>
                  <li>• Dynamic scope-builder</li>
                  <li>• Automated matching</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Value Proposition</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-3">For Homeowners</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Clear recommendations</li>
                    <li>• Fast contractor access</li>
                    <li>• Trusted network</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3">For Contractors</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• High-quality leads</li>
                    <li>• Reduced marketing cost</li>
                    <li>• Higher ROI per job</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Financials Tab */}
      {activeTab === 'financials' && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Financial Model</h2>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Status</h3>
              <p className="text-gray-700 mb-6">
                We are currently in pre-revenue stage, focusing on product development and contractor network building. Our financial projections are based on market research and validated assumptions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2025</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">$40</p>
                <p className="text-gray-600">Target Lead Price</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2026</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">57</p>
                <p className="text-gray-600">Target Contractors</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2027</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">571</p>
                <p className="text-gray-600">Target Contractors</p>
              </div>
              <div className="bg-gray-50 rounded-2xl p-6 text-center hover:bg-gray-100 transition-colors duration-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">2030</h3>
                <p className="text-3xl font-bold text-blue-600 mb-2">$72.2M</p>
                <p className="text-gray-600">Projected Revenue</p>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Lead Pricing Strategy</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">$40</p>
                  <p className="text-gray-700">Entry Pricing (2025)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">$85-120</p>
                  <p className="text-gray-700">Scaled Pricing</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">50</p>
                  <p className="text-gray-700">Target Leads/Month/Contractor</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Team Tab */}
      {activeTab === 'team' && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cliff Franco - Founder & CEO</h3>
                <p className="text-gray-700 mb-4">
                  Experienced entrepreneur with deep understanding of the aging-in-place market and technology development.
                </p>
                <ul className="space-y-2 text-gray-600 mb-4">
                  <li>• 10+ years in home services industry</li>
                  <li>• Previous successful startup experience</li>
                  <li>• Strong network in contractor community</li>
                </ul>
                <a 
                  href="https://www.linkedin.com/in/clifffrancolinkup/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  View LinkedIn Profile
                </a>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Leadership</h3>
                <p className="text-gray-700 mb-4">
                  Expert team in AR/VR technology, AI/ML, and mobile application development.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li>• AR/VR development expertise</li>
                  <li>• AI/ML algorithm development</li>
                  <li>• Mobile app development experience</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Invest in the Future of Home Modification?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join us in revolutionizing the $105.8B aging-in-place market with AR-powered lead generation technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleDownloadDeck}
              className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Investor Deck
            </button>
            <a 
              href="mailto:info@yourhomease.com?subject=Investment Interest - HOMEase"
              className="bg-transparent hover:bg-blue-700 text-white border-2 border-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Get in Touch
            </a>
          </div>
          <div className="mt-8 text-blue-100">
            <p className="text-sm mb-2">
              Contact us at <strong>info@yourhomease.com</strong> for more information
            </p>
            <p className="text-sm">
              <a 
                href="https://calendly.com/cliff-yourhomease"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-blue-200 underline"
              >
                Schedule a call with Cliff Franco →
              </a>
            </p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InvestorsPage; 