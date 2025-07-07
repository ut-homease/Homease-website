import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import AboutPage from './AboutPage';
import ContactPage from './ContactPage';
import BlogPage from './BlogPage';
import InvestorsPage from './InvestorsPage';
import ContractorsPage from './ContractorsPage';
import TermsPage from './TermsPage';
import PrivacyPage from './PrivacyPage';
import Header from './Header';
import Footer from './Footer';
import CookieConsent from './components/CookieConsent';
import ScrollToTop from './components/ScrollToTop';
import analyticsService from './services/analytics';
import './index.css';

function App() {
  const [cookieConsent, setCookieConsent] = useState<{
    analytics: boolean;
    marketing: boolean;
    necessary: boolean;
  } | null>(null);

  useEffect(() => {
    // Check for existing consent on app load
    const savedConsent = analyticsService.getConsentStatus();
    if (savedConsent) {
      setCookieConsent(savedConsent);
      analyticsService.updateConsent(savedConsent);
    }
  }, []);

  const handleConsentChange = (preferences: {
    analytics: boolean;
    marketing: boolean;
    necessary: boolean;
  }) => {
    setCookieConsent(preferences);
    analyticsService.updateConsent(preferences);
  };

  return (
    <Router>
      <ScrollToTop />
      <PageTracker />
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/investors" element={<InvestorsPage />} />
          <Route path="/contractors" element={<ContractorsPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
        <CookieConsent onConsentChange={handleConsentChange} />
      </div>
    </Router>
  );
}

// Component to track page views
function PageTracker() {
  const location = useLocation();

  useEffect(() => {
    // Track page view when location changes
    analyticsService.trackPageView(location.pathname);
  }, [location]);

  return null;
}

function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! I'm here to help with any questions about HOMEase. How can I assist you today?", sender: 'bot', timestamp: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const userMessage = {
        id: chatMessages.length + 1,
        text: newMessage,
        sender: 'user',
        timestamp: new Date()
      };
      
      setChatMessages([...chatMessages, userMessage]);
      setNewMessage('');
      
      // Mock bot response
      setTimeout(() => {
        const botMessage = {
          id: chatMessages.length + 2,
          text: "Thanks for your message! Our team will get back to you soon. In the meantime, you can download our app to get started with your home safety assessment.",
          sender: 'bot',
          timestamp: new Date()
        };
        setChatMessages(prev => [...prev, botMessage]);
      }, 1000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">

      {/* Chat Feature */}
      <div className="fixed bottom-6 right-6 z-40">
        {/* Chat Toggle Button */}
        {!showChat && (
          <button
            onClick={() => setShowChat(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>
        )}

        {/* Chat Interface */}
        {showChat && (
          <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col">
            {/* Chat Header */}
            <div className="bg-blue-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">H</span>
                </div>
                <div>
                  <h3 className="font-semibold">HOMEase Support</h3>
                  <p className="text-xs opacity-90">Online now</p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="text-white hover:text-gray-200 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Chat Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3">
              {chatMessages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <p className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your message..."
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Header />
      
      <main className="flex-grow">
        {/* Unified Hero + App Preview Section */}
        <section className="bg-gray-900 py-20 px-6 sm:px-8 lg:px-4">
          <div className="container mx-auto max-w-6xl">
            {/* Site Title */}
            <div className="text-center mb-12 md:mb-16">
              <div className="flex justify-center mb-4">
                <img 
                  src="/logo_transparent.png" 
                  alt="HOMEase" 
                  className="h-16 md:h-20 lg:h-24 xl:h-28 w-auto"
                />
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
                Effortless, AI-Guided Home Modification
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Headline, Subheadline, Download Badges */}
              <div className="space-y-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                  Stay <span className="text-blue-400">Safe, Secure,</span> and Independent in Your Own Home
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Don't let fear keep you from living fully. Our AI-powered home safety assessments help you maintain your independence and dignity while giving your family peace of mind.
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
                <div className="w-64 md:w-72 h-[500px] md:h-[600px] bg-black rounded-[2rem] md:rounded-[3rem] p-2 border border-gray-300 shadow-2xl">
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
                        <span className="text-white font-bold text-3xl">H</span>
                      </div>
                      
                      {/* App Name */}
                      <h3 className="text-2xl font-bold text-white mb-2">HOMEase</h3>
                      <p className="text-sm text-white opacity-90 mb-8">Safety Assessment</p>
                      
                      {/* Coming Soon Badge */}
                      <div className="bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
                        <span className="text-white font-semibold text-sm">COMING SOON</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white text-center text-sm opacity-90 leading-relaxed max-w-48">
                        AI-powered home safety assessments to keep you independent and secure
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why We Built HOMEase Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  WHY WE BUILT HOMEASE
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    HOMEase was created out of frustration — and a vision for something better. Too often, we've seen loved ones discharged from hospitals into homes that aren't safe or supportive. Families are left scrambling to find contractors, wait on insurance approvals, and manage care alone — all while the person at the center remains at risk. Which too often results in inaction and preventable injuries resulting in readmission and sometimes death.
                  </p>
                  <p>
                    The Founder & CEO, Cliff Franco, asked: What if a patient could scan their home and instantly receive ADA-compliant recommendations? What if everything — in just a few clicks — could be handled in one place?
                  </p>
                  <p>
                    That's exactly what we built. HOMEase empowers aging adults and those with disabilities to stay safe, connected, and independent. With a team rooted in healthcare, technology, therapy, and construction, we've created a platform that uses AI, AR, to fix a system that was never designed to support aging in place.
                  </p>
                  <p className="font-semibold text-gray-900">
                    This isn't just business.... we're going to make a real difference. We're here to save lives and make independence possible — one home at a time.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img src="/grandma.webp" alt="Senior woman in her home" className="w-72 h-auto rounded-lg shadow-lg" />
              </div>
            </div>
          </div>
        </section>


        {/* How It Works Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                How It Works
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Get your complete home safety assessment in just a few simple steps
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* STEP ONE */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                  <img src="/step 1.webp" alt="Step 1 - Upload Room Photo" className="w-full h-full object-cover" />
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">1</div>
                <h3 className="font-bold text-lg mb-2">Scan Your Home</h3>
                <p className="text-gray-600 leading-relaxed">
                  Use your smartphone to scan rooms and upload photos of areas you want to assess for safety.
                </p>
              </div>
              
              {/* STEP TWO */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                  <img src="/step 2.webp" alt="Step 2 - AI Analysis" className="w-full h-full object-cover" />
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">2</div>
                <h3 className="font-bold text-lg mb-2">AI Safety Analysis</h3>
                <p className="text-gray-600 leading-relaxed">
                  Our AI and AR technology analyze your photos and provide ADA-compliant safety recommendations.
                </p>
              </div>
              
              {/* STEP THREE */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                  <img src="/step 3.webp" alt="Step 3 - Lead Qualification" className="w-full h-full object-cover" />
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">3</div>
                <h3 className="font-bold text-lg mb-2">Get Your Report</h3>
                <p className="text-gray-600 leading-relaxed">
                  Receive a detailed safety assessment with specific recommendations and project scope.
                </p>
              </div>
              
              {/* STEP FOUR */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                  <img src="/step 4.webp" alt="Step 4 - Contractor Matching" className="w-full h-full object-cover" />
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">4</div>
                <h3 className="font-bold text-lg mb-2">Connect with Contractors</h3>
                <p className="text-gray-600 leading-relaxed">
                  We'll match you with qualified local contractors who specialize in home safety modifications.
                </p>
              </div>
              
              {/* STEP FIVE */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                  <img src="/step 5.webp" alt="Step 5 - Lead Purchase" className="w-full h-full object-cover" />
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">5</div>
                <h3 className="font-bold text-lg mb-2">Get Multiple Quotes</h3>
                <p className="text-gray-600 leading-relaxed">
                  Compare quotes from different contractors and choose the best option for your needs and budget.
                </p>
              </div>
              
              {/* STEP SIX */}
              <div className="flex flex-col items-center text-center">
                <div className="w-full max-w-xs h-48 mb-6 rounded-xl border-2 border-blue-200 overflow-hidden shadow-lg">
                  <img src="/step 6.webp" alt="Step 6 - Customer Contact" className="w-full h-full object-cover" />
                </div>
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mb-3">6</div>
                <h3 className="font-bold text-lg mb-2">Start Your Project</h3>
                <p className="text-gray-600 leading-relaxed">
                  Work with your chosen contractor to implement the safety modifications and enjoy a safer home.
                </p>
              </div>
            </div>
            
            {/* AI Measurement Note */}
            <div className="mt-12 bg-blue-50 border-l-4 border-blue-600 p-6 rounded-xl text-blue-900 text-center text-lg font-semibold max-w-2xl mx-auto">
              Our AI provides accurate measurements and detailed project scopes to help you get the right modifications for your home.
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                What Our Users Say
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Real stories from families who found safety and peace of mind
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-600 mb-4 italic">
                  "I can finally sleep at night knowing my mom is safe. The assessment found issues we never would have noticed."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold text-blue-600">S</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Sarah Johnson</p>
                    <p className="text-gray-500 text-sm">Daughter & Caregiver</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <p className="text-gray-600 mb-4 italic">
                  "After my fall, I was afraid to stay home alone. HOMEase helped me feel confident and independent again."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-lg font-semibold text-green-600">M</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Margaret Davis</p>
                    <p className="text-gray-500 text-sm">HOMEase User</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Everything you need to know about HOMEase
              </p>
            </div>
            
            <div className="space-y-4">
              {[
                {
                  question: "What is HOMEase AI?",
                  answer: "HOMEase AI is an intelligent home assessment tool that uses AR scanning and ADA-compliant rules to instantly identify safety risks—like narrow doorways or missing grab bars—and generate customized modification recommendations. It streamlines the path from inspection to project-ready lead by producing contractor-friendly reports and optional insurance-ready summaries."
                },
                {
                  question: "Who is HOMEase for?",
                  answer: "HOMEase AI is built for seniors, families, caregivers, and anyone who wants to make their home safer and more accessible. Whether you're aging in place, have mobility challenges, or want to prevent accidents, our tool helps you identify safety risks and connect with qualified local contractors to make the necessary modifications."
                },
                {
                  question: "What makes HOMEase different from other apps or services?",
                  answer: "Unlike generic home improvement apps, HOMEase uses AI-powered AR scanning to identify specific safety risks in your home and provides personalized recommendations. We don't just suggest random improvements—we analyze your actual home layout and connect you with qualified local contractors who specialize in aging-in-place modifications. Our system generates detailed reports that help contractors understand exactly what needs to be done, making the process faster and more reliable."
                },
                {
                  question: "How does the home scanning feature work?",
                  answer: "Using our app, users can scan rooms with their smartphone to create a 3D model. Our AI then analyzes it to recommend safety and accessibility improvements."
                },
                {
                  question: "How do I get started with HOMEase?",
                  answer: "Simply download the app, create an account, and follow the guided home scan walkthrough. Our AI will analyze your home and generate a personalized safety assessment. You'll then be connected with qualified local contractors who can help you implement the recommended modifications."
                },
                {
                  question: "Is there a cost to use HOMEase?",
                  answer: "The core app and home safety assessment are completely free. You only pay for the actual home modifications when you hire a contractor through our platform. We help you get multiple quotes from qualified professionals so you can choose the best option for your needs and budget."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
                  <button
                    className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                    onClick={() => {
                      const element = document.getElementById(`faq-${index}`);
                      if (element) {
                        element.classList.toggle('hidden');
                      }
                    }}
                  >
                    <span className="font-semibold text-gray-900 text-lg">{faq.question}</span>
                    <span className="text-blue-600 text-2xl transform transition-transform duration-200">+</span>
                  </button>
                  <div id={`faq-${index}`} className="hidden px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12 p-8 bg-blue-50 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6">
                Please start a chat or reach us at info@yourhomease.com with additional questions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button 
                  onClick={() => setShowChat(true)}
                  className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-6 rounded-lg border-2 border-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  Start Chat
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 animate-pulse"></div>
          <div className="container mx-auto max-w-4xl text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate-pulse">
              Ready to Feel Safe and Independent?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Download our app today and take the first step toward a safer, more comfortable home
            </p>
            
            {/* Available Soon Badge */}
            <div className="bg-white text-blue-600 rounded-full px-6 py-2 mb-6 inline-block">
              <span className="font-semibold text-sm">AVAILABLE SOON</span>
            </div>
            
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
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
); 