import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';

const ContractorsPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    capsCertified: '',
    experience: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      // Create form data for URL-encoded submission
      const formDataToSend = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch('https://script.google.com/macros/s/AKfycbwHIrOHVGaHhcx9v5Tx8NQTQ6Wrx3buxbUrXHTpjGQKHr0PvA_gscKTkUWC5V8UtCRDKA/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      const responseText = await response.text();
      console.log('Response text:', responseText);
      
      let result;
      
      // Check if the response contains form data (indicating success)
      if (responseText.includes('name=') || responseText.includes('success') || responseText.includes('Thank you')) {
        result = { success: true, message: 'Application submitted successfully! We will contact you within 24-48 hours.' };
      } else {
        try {
          result = JSON.parse(responseText);
        } catch (error) {
          // If we can't parse JSON and it doesn't contain form data, assume error
          result = { success: false, message: 'There was an error submitting your application. Please try again.' };
        }
      }

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage('Thank you! Your application has been submitted successfully. We will contact you within 24-48 hours.');
        
        // Reset form
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          capsCertified: '',
          experience: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || 'There was an error submitting your application. Please try again.');
      }
    } catch (error) {
      setSubmitStatus('error');
      setSubmitMessage('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="w-full bg-black flex items-center justify-center p-0 m-0 md:min-h-[320px]">
        <img 
          src="/logo card.webp" 
          alt="HOMEase Solutions Logo" 
          className="w-full h-auto object-contain"
          style={{ display: 'block' }}
        />
      </section>

      {/* Unified Hero + App Preview Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4">
        <div className="container mx-auto max-w-6xl lg:max-w-7xl xl:max-w-8xl 2xl:max-w-9xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Headline, Subheadline, Download Badges */}
            <div className="space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Grow Your <span className="text-blue-600">Business</span> with Qualified Home Safety Leads
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Connect with homeowners who are ready to invest in their safety. Our AI-powered platform provides detailed measurements and project scopes, making it easier to deliver accurate quotes and win more projects.
              </p>
              
              {/* Available Soon Badge */}
              <div className="bg-blue-600 text-white rounded-full px-6 py-2 mb-4 inline-block">
                <span className="font-semibold text-sm">AVAILABLE SOON</span>
              </div>
              
              {/* Download Buttons */}
              <div className="flex flex-row gap-4">
                <a href="#">
                  <img src="/download apple.png" alt="Download on the App Store" className="h-12 w-auto bg-transparent" />
                </a>
                <a href="#">
                  <img src="/google download.png" alt="Get it on Google Play" className="h-12 w-auto bg-transparent object-cover" />
                </a>
              </div>
            </div>
            {/* Right: iPhone Mockup */}
            <div className="flex justify-center">
              {/* iPhone Frame */}
              <div className="w-64 md:w-72 h-[500px] md:h-[600px] bg-black rounded-[2rem] md:rounded-[3rem] p-2 border border-gray-300">
                {/* Screen */}
                <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden">
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
                  {/* App Content */}
                  <div className="bg-blue-600 h-full flex flex-col items-center justify-center p-6">
                    {/* App Logo */}
                    <div className="w-20 h-20 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mb-6">
                      <span className="text-white font-bold text-lg">HE | AI</span>
                    </div>
                    
                    {/* App Name */}
                    <h3 className="text-2xl font-bold text-white mb-2">HOMEase</h3>
                    <p className="text-sm text-white opacity-90 mb-8">Contractor Dashboard</p>
                    
                    {/* Coming Soon Badge */}
                    <div className="bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                      <span className="text-white font-semibold text-sm">COMING SOON</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white text-center text-sm opacity-90 leading-relaxed max-w-48">
                      Connect with qualified leads and get detailed project measurements
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Desktop Monitor Mockup */}
          <div className="mt-16 flex justify-center">
            <div className="flex flex-col items-center">
              {/* Monitor Frame */}
              <div className="relative w-full max-w-4xl mx-auto">
                {/* Monitor Screen */}
                <div className="bg-gray-900 rounded-lg border-8 border-gray-700 overflow-hidden relative h-80 md:h-96 lg:h-[480px] shadow-2xl">
                  {/* Monitor Bezel */}
                  <div className="absolute inset-0 border-4 border-gray-600 rounded-lg pointer-events-none"></div>
                  
                  {/* Fake Dashboard Content */}
                  <div className="flex h-full">
                    {/* Sidebar */}
                    <div className="w-16 bg-blue-800 flex flex-col items-center py-6 space-y-8">
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
                    <div className="flex-1 bg-blue-600 flex flex-col items-center justify-center p-12">
                      {/* App Logo */}
                      <div className="w-32 h-32 bg-white bg-opacity-20 rounded-3xl flex items-center justify-center mb-8">
                        <span className="text-white font-bold text-2xl">HE | AI</span>
                      </div>
                      
                      {/* App Name */}
                      <h3 className="text-4xl font-bold text-white mb-4">HOMEase</h3>
                      <p className="text-lg text-white opacity-90 mb-12">Contractor Dashboard</p>
                      
                      {/* Coming Soon Badge */}
                      <div className="bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
                        <span className="text-white font-semibold text-lg">COMING SOON</span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Monitor Stand */}
                <div className="flex justify-center">
                  <div className="w-32 h-8 bg-gray-700 rounded-t-lg"></div>
              </div>
                {/* Monitor Base */}
                <div className="flex justify-center">
                  <div className="w-48 h-4 bg-gray-700 rounded-lg shadow-lg"></div>
                </div>
              </div>
              <p className="mt-4 text-gray-600 text-center text-sm">Full-featured desktop dashboard for managing leads, projects, and communication. Access from any browser on your computer.</p>
            </div>
          </div>
        </div>
      </section>





      {/* How It Works for Contractors Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-16">How It Works for Contractors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* STEP ONE */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                <img src="/step 1.webp" alt="Step 1 - Upload Room Photo" className="w-full h-full object-cover" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">1</div>
              <h3 className="font-bold text-lg mb-2">STEP ONE</h3>
              <p className="font-semibold mb-1">UPLOAD ROOM PHOTO</p>
              <p className="text-gray-600 leading-relaxed">User uploads room photo using app.</p>
            </div>
            {/* STEP TWO */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                <img src="/step 2.webp" alt="Step 2 - AI Analysis" className="w-full h-full object-cover" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">2</div>
              <h3 className="font-bold text-lg mb-2">STEP TWO</h3>
              <p className="font-semibold mb-1">AI ANALYSIS</p>
              <p className="text-gray-600 leading-relaxed">AI + AR analyze photo and provide ADA recommendations.</p>
            </div>
            {/* STEP THREE */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                <img src="/step 3.webp" alt="Step 3 - Lead Qualification" className="w-full h-full object-cover" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">3</div>
              <h3 className="font-bold text-lg mb-2">STEP THREE</h3>
              <p className="font-semibold mb-1">LEAD QUALIFICATION</p>
              <p className="text-gray-600 leading-relaxed">Capture user info, scope of work and preferences.</p>
            </div>
            {/* STEP FOUR */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                <img src="/step 4.webp" alt="Step 4 - Contractor Matching" className="w-full h-full object-cover" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">4</div>
              <h3 className="font-bold text-lg mb-2">STEP FOUR</h3>
              <p className="font-semibold mb-1">CONTRACTOR MATCHING</p>
              <p className="text-gray-600 leading-relaxed">User sends report to qualified local contractor for bid.</p>
            </div>
            {/* STEP FIVE */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                <img src="/step 5.webp" alt="Step 5 - Lead Purchase" className="w-full h-full object-cover" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">5</div>
              <h3 className="font-bold text-lg mb-2">STEP FIVE</h3>
              <p className="font-semibold mb-1">LEAD PURCHASE</p>
              <p className="text-gray-600 leading-relaxed">Contractor purchases lead.</p>
            </div>
            {/* STEP SIX */}
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                <img src="/step 6.webp" alt="Step 6 - Customer Contact" className="w-full h-full object-cover" />
              </div>
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">6</div>
              <h3 className="font-bold text-lg mb-2">STEP SIX</h3>
              <p className="font-semibold mb-1">CUSTOMER CONTACT</p>
              <p className="text-gray-600 leading-relaxed">Contractor contacts customer to schedule home modification.</p>
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

      {/* Full-width Contractor Image Section */}
      <section className="w-full">
        <img 
          src="/contractor.webp" 
          alt="Contractor working on home modification" 
          className="w-full h-auto object-cover block md:h-[500px] lg:h-[800px]"
          style={{ maxHeight: '800px' }}
        />
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
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center border border-gray-200">
              {/* Hand Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11V5a2 2 0 114 0v6m0 0V5a2 2 0 114 0v6m-8 4h12a2 2 0 002-2v-2a2 2 0 00-2-2H5a2 2 0 00-2 2v2a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-700 font-medium">Grab Bar Installation</p>
            </div>
            {/* Service: Ramp Construction */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center border border-gray-200">
              {/* Trending Up Icon (Ramp) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 17l6-6 4 4 8-8" />
              </svg>
              <p className="text-gray-700 font-medium">Ramp Construction</p>
            </div>
            {/* Service: Door Widening */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center border border-gray-200">
              {/* Door Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v18m0 0H6a2 2 0 01-2-2V5a2 2 0 012-2h6zm0 0h6a2 2 0 012 2v14a2 2 0 01-2 2h-6z" />
              </svg>
              <p className="text-gray-700 font-medium">Door Widening</p>
            </div>
            {/* Service: Bathroom Remodeling */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center border border-gray-200">
              {/* Sparkles Icon (Remodel) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <p className="text-gray-700 font-medium">Bathroom Remodeling</p>
            </div>
            {/* Service: Stair Modifications */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center border border-gray-200">
              {/* Stairs Icon (Chevron Up) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              <p className="text-gray-700 font-medium">Stair Modifications</p>
            </div>
            {/* Service: Kitchen Accessibility */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center border border-gray-200">
              {/* Kitchen Icon (Cube) */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 21V7a2 2 0 00-2-2H6a2 2 0 00-2 2v14m16 0H4m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2" />
              </svg>
              <p className="text-gray-700 font-medium">Kitchen Accessibility</p>
            </div>
            {/* Service: Lighting Improvements */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center border border-gray-200">
              {/* Light Bulb Icon */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m8-9a8 8 0 11-16 0 8 8 0 0116 0z" />
              </svg>
              <p className="text-gray-700 font-medium">Lighting Improvements</p>
            </div>
            {/* Service: Flooring & Safety */}
            <div className="bg-white rounded-lg p-4 flex items-center gap-3 text-center border border-gray-200">
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
                Are you CAPS certified? *
              </label>
              <select
                name="capsCertified"
                value={formData.capsCertified}
                onChange={handleInputChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select your CAPS certification status</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="No but willing to apply">No but willing to apply</option>
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
            
            {/* Submit Status Messages */}
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-green-800 font-medium">{submitMessage}</p>
                </div>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-800 font-medium">{submitMessage}</p>
                </div>
              </div>
            )}
            
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`font-semibold py-3 px-8 rounded-lg transition-all duration-300 ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-blue-600 hover:bg-blue-700'
                } text-white`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </div>
                ) : (
                  'Submit Application'
                )}
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
              <div key={index} className="bg-white rounded-xl border border-gray-200">
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => {
                    const element = document.getElementById(`contractor-faq-${index}`);
                    if (element) {
                      element.classList.toggle('hidden');
                    }
                  }}
                >
                  <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                  <span className="text-blue-600 text-2xl">+</span>
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