import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContractorsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    experience: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission - will be implemented later
    console.log('Contractor signup:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-black flex items-center justify-center p-0 m-0" style={{ minHeight: '320px' }}>
        <img 
          src="/logo card.webp" 
          alt="HOMEase Solutions Logo" 
          className="w-full h-auto object-contain p-0 m-0"
          style={{ display: 'block' }}
        />
      </section>

      {/* Dashboard Mockups Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Your Contractor Dashboard, Anywhere</h2>
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Desktop Mockup */}
            <div className="flex flex-col items-center w-full md:w-1/2">
              {/* Laptop Frame */}
              <div className="relative w-full max-w-xl mx-auto">
                {/* Laptop Bezel */}
                <div className="bg-gray-900 rounded-t-3xl rounded-b-xl shadow-2xl border-4 border-gray-800 overflow-hidden relative" style={{ height: '340px' }}>
                  {/* Camera */}
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-gray-700 rounded-full z-10"></div>
                  {/* Fake Dashboard Content */}
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-16 bg-gradient-to-b from-blue-700 to-blue-900 flex flex-col items-center py-6 space-y-8">
                      <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center">
                        {/* Leads Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a2 2 0 012-2h2a2 2 0 012 2v1m10 0V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v1m-6 0h16m-2 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7m2 0v10m10-10v10" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                        {/* Earnings Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8" />
                        </svg>
                      </div>
                      <div className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center">
                        {/* Profile Icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                    </div>
                    {/* Main Content */}
                    <div className="flex-1 bg-gradient-to-br from-blue-50 to-blue-200 p-6 flex flex-col">
                      {/* Header */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">HE</div>
                          <span className="font-bold text-lg text-gray-800">HOMEase Contractor</span>
                        </div>
                        <span className="text-sm text-gray-500">Dashboard</span>
                      </div>
                      {/* Leads Table */}
                      <div className="bg-white rounded-xl shadow p-4 mb-4 flex-1 overflow-auto">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-semibold text-gray-800 flex items-center gap-2">
                            {/* Leads Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a2 2 0 012-2h2a2 2 0 012 2v1m10 0V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v1m-6 0h16m-2 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7m2 0v10m10-10v10" />
                            </svg>
                            Leads
                          </span>
                          <span className="text-xs bg-green-500/80 text-white rounded px-2 py-0.5">2 New</span>
                        </div>
                        <table className="w-full text-sm text-left">
                          <thead>
                            <tr className="text-gray-500">
                              <th className="py-1 pr-2">Name</th>
                              <th className="py-1 pr-2">Project</th>
                              <th className="py-1 pr-2">Status</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="bg-blue-50">
                              <td className="py-1 pr-2 font-bold text-gray-800">Jane Smith</td>
                              <td className="py-1 pr-2">Bathroom Remodel</td>
                              <td className="py-1 pr-2 text-green-600">Ready to Start</td>
                            </tr>
                            <tr>
                              <td className="py-1 pr-2 font-bold text-gray-800">Mike Lee</td>
                              <td className="py-1 pr-2">Ramp Installation</td>
                              <td className="py-1 pr-2 text-yellow-600">Awaiting Reply</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      {/* Earnings Summary */}
                      <div className="bg-blue-600 rounded-xl text-white p-4 flex items-center justify-between">
                        <div>
                          <span className="block text-xs opacity-80 flex items-center gap-1">
                            {/* Earnings Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8" />
                            </svg>
                            Earnings This Month
                          </span>
                          <span className="text-2xl font-bold">$2,450</span>
                        </div>
                        <span className="bg-white/20 rounded px-2 py-1 text-sm">View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="w-full h-4 bg-gray-800 rounded-b-3xl mx-auto -mt-2 shadow-inner"></div>
              </div>
              <p className="mt-4 text-gray-600 text-center text-sm">Full-featured dashboard for managing leads, projects, and communication.</p>
            </div>
            {/* Mobile Mockup */}
            <div className="flex flex-col items-center w-full md:w-1/3">
              <div className="relative flex justify-center">
                {/* iPhone Frame - exact match to homepage */}
                <div className="relative w-64 md:w-72 h-[500px] md:h-[600px] bg-black rounded-[2rem] md:rounded-[3rem] p-2 shadow-2xl">
                  {/* Screen */}
                  <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="bg-black text-white px-6 py-2 flex justify-between items-center text-xs font-medium">
                      <span>9:41</span>
                      <div className="flex items-center space-x-1">
                        <div className="w-4 h-2 bg-white rounded-sm"></div>
                        <div className="w-1 h-2 bg-white rounded-sm"></div>
                        <div className="w-1 h-2 bg-white rounded-sm"></div>
                        <div className="w-1 h-2 bg-white rounded-sm"></div>
                      </div>
                    </div>
                    {/* App Content: Fake Contractor Dashboard */}
                    <div className="h-full flex flex-col bg-gradient-to-br from-blue-500 to-blue-700">
                      {/* App Header */}
                      <div className="text-center text-white mb-4 mt-2">
                        <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                          <span className="text-white font-bold text-lg">HE</span>
                        </div>
                        <h3 className="text-lg font-bold mb-1">HOMEase Contractor</h3>
                        <p className="text-xs opacity-90">Dashboard</p>
                      </div>
                      {/* Leads Section */}
                      <div className="flex-1 px-3 space-y-2 overflow-y-auto">
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 text-white flex flex-col">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold">Leads</span>
                            <span className="text-xs bg-green-500/80 rounded px-2 py-0.5">2 New</span>
                          </div>
                          <div className="space-y-1">
                            <div className="bg-white/30 rounded p-2 flex flex-col text-xs">
                              <span className="font-bold">Jane Smith</span>
                              <span>Bathroom Remodel</span>
                              <span className="text-green-200">Ready to Start</span>
                            </div>
                            <div className="bg-white/30 rounded p-2 flex flex-col text-xs">
                              <span className="font-bold">Mike Lee</span>
                              <span>Ramp Installation</span>
                              <span className="text-yellow-200">Awaiting Reply</span>
                            </div>
                          </div>
                        </div>
                        {/* Earnings Section */}
                        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-2 text-white flex flex-col mt-2">
                          <span className="font-semibold mb-1">Earnings</span>
                          <span className="text-2xl font-bold">$2,450</span>
                          <span className="text-xs opacity-80">This Month</span>
                        </div>
                      </div>
                      {/* Bottom Navigation */}
                      <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-2 flex justify-around mt-2">
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 bg-white/30 rounded-lg mb-1 flex items-center justify-center">
                            {/* Leads Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M3 7V6a2 2 0 012-2h2a2 2 0 012 2v1m10 0V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v1m-6 0h16m-2 0v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7m2 0v10m10-10v10" />
                            </svg>
                          </div>
                          <span className="text-[10px] text-white">Leads</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 bg-white/30 rounded-lg mb-1 flex items-center justify-center">
                            {/* Earnings Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 0V4m0 7v7m0 0h4m-4 0H8" />
                            </svg>
                          </div>
                          <span className="text-[10px] text-white">Earnings</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-6 h-6 bg-white/30 rounded-lg mb-1 flex items-center justify-center">
                            {/* Profile Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A9 9 0 1112 21a9 9 0 01-6.879-3.196z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <span className="text-[10px] text-white">Profile</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Home Button */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-400 rounded-full"></div>
                </div>
                {/* Subtle Shadow */}
                <div className="absolute -bottom-4 w-72 h-4 bg-black/20 rounded-full blur-xl"></div>
              </div>
              <p className="mt-4 text-gray-600 text-center text-sm">Manage your business on the go with our mobile app.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-8 bg-gray-50">
        <div className="flex justify-center">
          <div className="flex flex-row gap-4">
            <a href="#" className="transition-all duration-300 transform hover:scale-105">
              <img src="/download apple.png" alt="Download on the App Store" className="h-12 w-auto bg-transparent" />
            </a>
            <a href="#" className="transition-all duration-300 transform hover:scale-105">
              <img src="/google download.png" alt="Get it on Google Play" className="h-12 w-auto bg-transparent object-cover" />
            </a>
          </div>
        </div>
      </section>

      {/* Full-width Contractor Image Section */}
      <section className="w-full">
        <img 
          src="/contractor.webp" 
          alt="Contractor at work" 
          className="w-full h-auto object-cover block"
          style={{ maxHeight: '480px' }}
        />
      </section>

      {/* How It Works for Contractors Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How It Works for Contractors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* STEP ONE */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-40 mb-4 rounded-xl border-2 border-blue-200 shadow overflow-hidden">
                <img src="/step 1.webp" alt="Step 1 - Upload Room Photo" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-2">STEP ONE</h3>
              <p className="font-semibold mb-1">UPLOAD ROOM PHOTO</p>
              <p className="text-gray-600">User uploads room photo using app.</p>
            </div>
            {/* STEP TWO */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-40 mb-4 rounded-xl border-2 border-blue-200 shadow overflow-hidden">
                <img src="/step 2.webp" alt="Step 2 - AI Analysis" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-2">STEP TWO</h3>
              <p className="font-semibold mb-1">AI ANALYSIS</p>
              <p className="text-gray-600">AI + AR analyze photo and provide ADA recommendations.</p>
            </div>
            {/* STEP THREE */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-40 mb-4 rounded-xl border-2 border-blue-200 shadow overflow-hidden">
                <img src="/step 3.webp" alt="Step 3 - Lead Qualification" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-2">STEP THREE</h3>
              <p className="font-semibold mb-1">LEAD QUALIFICATION</p>
              <p className="text-gray-600">Capture user info, scope of work and preferences.</p>
            </div>
            {/* STEP FOUR */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-40 mb-4 rounded-xl border-2 border-blue-200 shadow overflow-hidden">
                <img src="/step 4.webp" alt="Step 4 - Contractor Matching" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-2">STEP FOUR</h3>
              <p className="font-semibold mb-1">CONTRACTOR MATCHING</p>
              <p className="text-gray-600">User sends report to qualified local contractor for bid.</p>
            </div>
            {/* STEP FIVE */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-40 mb-4 rounded-xl border-2 border-blue-200 shadow overflow-hidden">
                <img src="/step 5.webp" alt="Step 5 - Lead Purchase" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-2">STEP FIVE</h3>
              <p className="font-semibold mb-1">LEAD PURCHASE</p>
              <p className="text-gray-600">Contractor purchases lead.</p>
            </div>
            {/* STEP SIX */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-40 mb-4 rounded-xl border-2 border-blue-200 shadow overflow-hidden">
                <img src="/step 6.webp" alt="Step 6 - Customer Contact" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-bold text-lg mb-2">STEP SIX</h3>
              <p className="font-semibold mb-1">CUSTOMER CONTACT</p>
              <p className="text-gray-600">Contractor contacts customer to schedule home modification.</p>
            </div>
          </div>
          {/* AI Measurement Note */}
          <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl text-blue-900 text-center text-lg font-semibold max-w-2xl mx-auto">
            Our AI can provide accurate, tried-and-tested measurements.
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Partner with HOMEase?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We connect you with qualified homeowners who have completed AI-powered safety assessments and are ready to hire.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Target Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">High-Intent Leads</h3>
              <p className="text-gray-600">
                Homeowners who have completed assessments and are ready to start projects within 30 days.
              </p>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Device/Mobile Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <rect x="7" y="4" width="10" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                  <circle cx="12" cy="18" r="1" fill="currentColor" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">Mobile Dashboard</h3>
              <p className="text-gray-600">
                Manage leads, view project details, and communicate with clients from your phone or tablet.
              </p>
            </div>
            
            <div className="text-center flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                {/* Chart/Report Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6a2 2 0 114 0v6m-7 4h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-2">Detailed Reports</h3>
              <p className="text-gray-600">
                Get comprehensive safety assessments with specific recommendations and project scopes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services We Work With */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Home Service Professionals We Work With
            </h2>
            <p className="text-lg text-gray-600">
              Specialized contractors in the home assistance and accessibility field
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Service: Grab Bar Installation */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Hand Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V5a2 2 0 114 0v6m0 0V5a2 2 0 114 0v6m-8 4h12a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-700 font-medium">Grab Bar Installation</p>
            </div>
            {/* Service: Ramp Construction */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Trending Up Icon (Ramp) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
              </svg>
              <p className="text-gray-700 font-medium">Ramp Construction</p>
            </div>
            {/* Service: Door Widening */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Door Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0H6a2 2 0 01-2-2V5a2 2 0 012-2h6zm0 0h6a2 2 0 012 2v14a2 2 0 01-2 2h-6z" />
              </svg>
              <p className="text-gray-700 font-medium">Door Widening</p>
            </div>
            {/* Service: Bathroom Remodeling */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Sparkles Icon (Remodel) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700 font-medium">Bathroom Remodeling</p>
            </div>
            {/* Service: Stair Modifications */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Stairs Icon (Chevron Up) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              <p className="text-gray-700 font-medium">Stair Modifications</p>
            </div>
            {/* Service: Kitchen Accessibility */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Kitchen Icon (Cube) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21V7a2 2 0 00-2-2H6a2 2 0 00-2 2v14m16 0H4m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2" />
              </svg>
              <p className="text-gray-700 font-medium">Kitchen Accessibility</p>
            </div>
            {/* Service: Lighting Improvements */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Light Bulb Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8-9a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
              <p className="text-gray-700 font-medium">Lighting Improvements</p>
            </div>
            {/* Service: Flooring & Safety */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center shadow-sm hover:shadow-md transition-shadow">
              {/* Shield Check Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m1-5.618a2 2 0 00-2.632-1.18l-6.857 2.857A2 2 0 004 6.382V17.618a2 2 0 002.632 1.18l6.857-2.857A2 2 0 0020 17.618V6.382a2 2 0 00-1.18-1.816z" />
              </svg>
              <p className="text-gray-700 font-medium">Flooring & Safety</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign Up Form */}
      <section className="py-16 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Network
            </h2>
            <p className="text-lg text-gray-600">
              Tell us about your business and we'll reach out to discuss partnership opportunities.
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Primary Service *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your primary service</option>
                <option value="grab-bars">Grab Bar Installation</option>
                <option value="ramps">Ramp Construction</option>
                <option value="doors">Door Widening</option>
                <option value="bathroom">Bathroom Remodeling</option>
                <option value="stairs">Stair Modifications</option>
                <option value="kitchen">Kitchen Accessibility</option>
                <option value="lighting">Lighting Improvements</option>
                <option value="flooring">Flooring & Safety</option>
                <option value="other">Other</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Years of Experience *
              </label>
              <select
                name="experience"
                value={formData.experience}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select years of experience</option>
                <option value="1-2">1-2 years</option>
                <option value="3-5">3-5 years</option>
                <option value="6-10">6-10 years</option>
                <option value="10+">10+ years</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tell us about your business
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Describe your services, specialties, and why you'd like to partner with HOMEase..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Submit Application
          </button>
            </div>
          </form>
        </div>
      </section>
      
      {/* Contractor FAQ Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contractor FAQ
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know about HOMEase as a contractor
            </p>
          </div>
          <div className="space-y-4">
            {[
              {
                question: "What is HOMEase | AI?",
                answer: "HOMEase AI is an intelligent home assessment tool that uses AR scanning and ADA-compliant rules to instantly identify safety risks—like narrow doorways or missing grab bars—and generate customized modification recommendations. It streamlines the path from inspection to project-ready lead by producing contractor-friendly reports and optional insurance-ready summaries."
              },
              {
                question: "Who is HOMEase for?",
                answer: "HOMEase AI is built for licensed contractors, occupational therapists, and home service providers who want fast, qualified leads in the aging-in-place and home accessibility market."
              },
              {
                question: "How do I get leads from HOMEase?",
                answer: "Once you join the platform, you'll receive homeowner referrals that include an AR scan, AI-generated recommendations, and a scope of work. You can submit a bid instantly for each project and, if selected, contact the homeowner directly. No cold calls, no wasted visits—just real, actionable opportunities."
              },
              {
                question: "What types of projects are these leads for?",
                answer: "Most projects involve aging-in-place modifications like grab bars, widened doorways, ramps, roll-in showers, and general ADA upgrades. Every lead is backed by a specific safety assessment, and contractors are required to submit a bid to win the project."
              },
              {
                question: "How much does it cost to join HOMEase?",
                answer: "It's free to join. Contractors only pay a small referral fee per accepted project or can choose a premium subscription for exclusive leads and enhanced visibility."
              },
              {
                question: "What makes HOMEase different from other apps or services?",
                answer: "Unlike generic lead platforms, HOMEase delivers pre-qualified, high-conversion projects backed by AI-driven assessments and AR scans. We don't just list jobs—we generate them. Our system translates home safety risks into ADA-compliant recommendations, then matches homeowners with local contractors ready to do the work. With built-in insurance documentation and real-time project scopes, HOMEase removes guesswork and lets pros close faster, with less overhead."
              },
              {
                question: "How does the home scanning feature work?",
                answer: "Using our app, users can scan rooms with their smartphone to create a 3D model. Our AI then analyzes it to recommend safety and accessibility improvements. You'll receive a detailed report and scope of work for every qualified lead."
              },
              {
                question: "How do you choose the contractors?",
                answer: "All contractors on HOMEase must be licensed, insured, and pass a thorough vetting process before joining the platform. Once you're approved, you can bid on projects. Homeowners review bids and select the contractor they feel is the best fit based on your experience, pricing, timeline, and reviews."
              },
              {
                question: "How do I get started with HOMEase?",
                answer: "Simply download the app, create a contractor account, and follow the onboarding steps. Once approved, you'll start receiving qualified leads and can begin bidding on projects right away."
              },
              {
                question: "Who do I contact if I need help?",
                answer: "You can reach our support team directly through the app or visit our 'Contact Us' page for phone and email support options."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => {
                    const element = document.getElementById(`contractor-faq-${index}`);
                    if (element) {
                      element.classList.toggle('hidden');
                    }
                  }}
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  <span className="text-blue-600 text-2xl transform transition-transform duration-200">+</span>
                </button>
                <div id={`contractor-faq-${index}`} className="hidden px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ContractorsPage; 