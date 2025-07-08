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
  const [showChat, setShowChat] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userPath, setUserPath] = useState<string[]>([]);
  const [questionHistory, setQuestionHistory] = useState<number[]>([]);
  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Hi! I'm here to help with any questions about HOMEase. How can I assist you today?", sender: 'bot', timestamp: new Date() }
  ]);

  // Question tree structure
  interface QuestionOption {
    text: string;
    path: string;
  }

  interface QuestionNode {
    question: string;
    options: QuestionOption[];
    condition?: string;
  }

  const questionTree: Record<number, QuestionNode> = {
    0: {
      question: "Hello! I'm here to help. Who are you?",
      options: [
        { text: "I need home safety services", path: "service-needer" },
        { text: "I'm a healthcare provider", path: "provider" },
        { text: "I'm a contractor", path: "contractor" }
      ]
    },
    1: {
      question: "Great! What type of home safety service are you looking for?",
      options: [
        { text: "Complete home safety assessment", path: "complete-assessment" },
        { text: "Bathroom safety modifications", path: "bathroom-safety" },
        { text: "Kitchen accessibility improvements", path: "kitchen-accessibility" },
        { text: "Fall prevention and mobility", path: "fall-prevention" },
        { text: "Emergency monitoring systems", path: "emergency-monitoring" }
      ],
      condition: "service-needer"
    },
    2: {
      question: "What type of healthcare provider are you?",
      options: [
        { text: "Home health nurse", path: "home-health" },
        { text: "Physical therapist", path: "physical-therapist" },
        { text: "Occupational therapist", path: "occupational-therapist" },
        { text: "Case manager", path: "case-manager" },
        { text: "Other healthcare professional", path: "other-provider" }
      ],
      condition: "provider"
    },
    10: {
      question: "How can we help you serve your clients better?",
      options: [
        { text: "Home safety assessments for clients", path: "client-assessments" },
        { text: "Connect clients with qualified contractors", path: "contractor-connections" },
        { text: "Track client home modification progress", path: "progress-tracking" },
        { text: "Educational resources for clients", path: "educational-resources" }
      ],
      condition: "provider"
    },
    3: {
      question: "What type of contracting work do you do?",
      options: [
        { text: "Home modifications", path: "home-modifications" },
        { text: "General contractor", path: "general-contractor" },
        { text: "Handyman services", path: "handyman" },
        { text: "Accessibility specialist", path: "accessibility" },
        { text: "Other", path: "other-contractor" }
      ],
      condition: "contractor"
    },
    4: {
      question: "What would you like to know about our contractor program?",
      options: [
        { text: "How to join our network", path: "join-network" },
        { text: "How lead generation works", path: "lead-generation" },
        { text: "What services we offer contractors", path: "contractor-services" },
        { text: "Pricing and lead costs", path: "pricing" },
        { text: "Contact us directly", path: "contact" }
      ],
      condition: "contractor"
    },
    5: {
      question: "Who is this assessment for?",
      options: [
        { text: "Myself (I'm over 65)", path: "self-65-plus" },
        { text: "My parent(s) or grandparent(s)", path: "parent-grandparent" },
        { text: "My spouse or partner", path: "spouse-partner" },
        { text: "A family member with mobility needs", path: "family-mobility" },
        { text: "I'm planning ahead for the future", path: "planning-ahead" }
      ],
      condition: "complete-assessment"
    },
    6: {
      question: "What bathroom safety concerns do you have?",
      options: [
        { text: "Shower safety and accessibility", path: "shower-safety" },
        { text: "Toilet accessibility", path: "toilet-accessibility" },
        { text: "Grab bars and support", path: "grab-bars" },
        { text: "Slippery surfaces", path: "slippery-surfaces" }
      ],
      condition: "bathroom-safety"
    },
    7: {
      question: "What kitchen accessibility issues are you experiencing?",
      options: [
        { text: "Counter height adjustments", path: "counter-height" },
        { text: "Cabinet accessibility", path: "cabinet-accessibility" },
        { text: "Appliance modifications", path: "appliance-modifications" },
        { text: "Lighting improvements", path: "kitchen-lighting" }
      ],
      condition: "kitchen-accessibility"
    },
    8: {
      question: "What fall prevention or mobility concerns do you have?",
      options: [
        { text: "Tripping hazards and loose rugs", path: "tripping-hazards" },
        { text: "Poor lighting throughout home", path: "poor-lighting" },
        { text: "Stairs and entryway access", path: "stairs-access" },
        { text: "Need handrails and support", path: "handrails-support" }
      ],
      condition: "fall-prevention"
    },
    9: {
      question: "What type of emergency monitoring are you considering?",
      options: [
        { text: "Medical alert system", path: "medical-alert" },
        { text: "Smart home monitoring", path: "smart-monitoring" },
        { text: "Fall detection technology", path: "fall-detection" },
        { text: "Complete safety monitoring", path: "complete-monitoring" }
      ],
      condition: "emergency-monitoring"
    }
  };

  useEffect(() => {
    // Component mounted
  }, []);

  const handleOptionSelect = (option: QuestionOption) => {
    const newPath = [...userPath, option.path];
    setUserPath(newPath);
    
    // Add current question to history
    setQuestionHistory([...questionHistory, currentQuestion]);
    
    // Find next question based on path
    const nextQuestion = findNextQuestion(newPath);
    if (nextQuestion !== null) {
      setCurrentQuestion(nextQuestion);
    } else {
      // End of questionnaire - show appropriate response
      showFinalResponse(newPath);
    }
  };

  const handleBack = () => {
    if (questionHistory.length > 0) {
      const previousQuestion = questionHistory[questionHistory.length - 1];
      const newHistory = questionHistory.slice(0, -1);
      const newPath = userPath.slice(0, -1);
      
      setCurrentQuestion(previousQuestion);
      setQuestionHistory(newHistory);
      setUserPath(newPath);
    }
  };

  const findNextQuestion = (path: string[]): number | null => {
    // Simple logic to determine next question based on path
    if (path.length === 1) {
      if (path[0] === "service-needer") return 1;
      if (path[0] === "provider") return 2;
      if (path[0] === "contractor") return 4; // Skip to FAQ options
    }
    if (path.length === 2) {
      if (path[0] === "contractor") {
        return null; // End of questionnaire for contractors
      }
      if (path[0] === "service-needer") {
        // Route to specific follow-up questions based on service type
        if (path[1] === "complete-assessment") return 5;
        if (path[1] === "bathroom-safety") return 6;
        if (path[1] === "kitchen-accessibility") return 7;
        if (path[1] === "fall-prevention") return 8;
        if (path[1] === "emergency-monitoring") return 9;
      }
      if (path[0] === "provider") {
        // Route to provider follow-up questions
        if (path[1] === "home-health" || path[1] === "physical-therapist" || 
            path[1] === "occupational-therapist" || path[1] === "case-manager" || 
            path[1] === "other-provider") return 10;
      }
    }
    return null; // End of questionnaire
  };

  const showFinalResponse = (path: string[]) => {
    let response = "";
    
    if (path.includes("service-needer")) {
      // Complete Assessment responses
      if (path.includes("complete-assessment")) {
        if (path.includes("self-65-plus")) {
          response = "Perfect! Our AI-powered AR assessment app will help you scan your home and identify safety improvements. When we launch, you'll be able to use your smartphone to create detailed measurements and get personalized recommendations for modifications. Sign up for early access at info@yourhomease.com to be notified when we launch.";
        } else if (path.includes("parent-grandparent")) {
          response = "Great! Our platform will help families ensure their loved ones can age safely at home. Our AR app will scan the home and identify specific modifications needed, then connect you with qualified contractors. Sign up for early access at info@yourhomease.com to be notified when we launch.";
        } else if (path.includes("spouse-partner")) {
          response = "Excellent! Our comprehensive assessment will help you both maintain independence and safety at home. Our AR technology will scan your entire home and provide personalized recommendations. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("family-mobility")) {
          response = "Our AR assessment is perfect for identifying accessibility needs. We'll scan your home and provide specific recommendations for mobility improvements. Sign up for early access at info@yourhomease.com to be notified when we launch.";
        } else if (path.includes("planning-ahead")) {
          response = "Smart planning! Our assessment will help you identify potential safety issues before they become problems. Our AR technology provides detailed measurements and recommendations for future modifications. Sign up for early access at info@yourhomease.com.";
        }
      }
      // Bathroom Safety responses
      else if (path.includes("bathroom-safety")) {
        if (path.includes("shower-safety")) {
          response = "Bathroom safety is crucial! Our AR app will identify specific shower modifications needed, from grab bars to walk-in tubs. We'll provide detailed measurements and connect you with qualified contractors. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("toilet-accessibility")) {
          response = "Toilet accessibility is essential for independence. Our assessment will recommend comfort-height toilets, grab bars, and other modifications. Sign up for early access at info@yourhomease.com to be notified when we launch.";
        } else if (path.includes("grab-bars")) {
          response = "Grab bars can prevent falls and provide essential support. Our AR assessment will identify optimal placement and recommend the right type for your needs. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("slippery-surfaces")) {
          response = "Slippery surfaces are a major fall risk. Our assessment will recommend non-slip flooring, shower modifications, and other safety improvements. Sign up for early access at info@yourhomease.com.";
        }
      }
      // Kitchen Accessibility responses
      else if (path.includes("kitchen-accessibility")) {
        if (path.includes("counter-height")) {
          response = "Counter height adjustments can make cooking much safer and easier. Our AR assessment will measure your current setup and recommend optimal heights for your needs. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("cabinet-accessibility")) {
          response = "Accessible cabinets improve independence in the kitchen. Our assessment will recommend pull-down shelves, lazy susans, and other modifications. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("appliance-modifications")) {
          response = "Appliance modifications can make cooking safer and more accessible. Our AR assessment will identify needed changes to ranges, refrigerators, and other appliances. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("kitchen-lighting")) {
          response = "Proper lighting is essential for kitchen safety. Our assessment will identify dark areas and recommend lighting improvements. Sign up for early access at info@yourhomease.com.";
        }
      }
      // Fall Prevention responses
      else if (path.includes("fall-prevention")) {
        if (path.includes("tripping-hazards")) {
          response = "Tripping hazards are a leading cause of falls. Our AR assessment will identify loose rugs, cords, and other hazards throughout your home. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("poor-lighting")) {
          response = "Poor lighting significantly increases fall risk. Our assessment will identify dark areas and recommend lighting improvements throughout your home. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("stairs-access")) {
          response = "Stairs and entryways can become major barriers. Our AR assessment will recommend solutions like stairlifts, ramps, or home elevators based on your specific needs. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("handrails-support")) {
          response = "Handrails provide essential support and prevent falls. Our assessment will identify optimal placement for handrails throughout your home. Sign up for early access at info@yourhomease.com.";
        }
      }
      // Emergency Monitoring responses
      else if (path.includes("emergency-monitoring")) {
        if (path.includes("medical-alert")) {
          response = "Medical alert systems provide peace of mind and quick emergency response. Our assessment will recommend the right system for your needs and lifestyle. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("smart-monitoring")) {
          response = "Smart home monitoring can detect falls and provide 24/7 safety monitoring. Our assessment will recommend smart devices and monitoring systems. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("fall-detection")) {
          response = "Fall detection technology can automatically alert emergency services. Our assessment will recommend the best fall detection system for your home. Sign up for early access at info@yourhomease.com.";
        } else if (path.includes("complete-monitoring")) {
          response = "Complete safety monitoring provides comprehensive protection. Our assessment will recommend a full monitoring system for maximum safety and peace of mind. Sign up for early access at info@yourhomease.com.";
        }
      }
    } else if (path.includes("provider")) {
      if (path.includes("client-assessments")) {
        response = "Our AR assessment tool will help you provide comprehensive home safety evaluations for your clients. You'll be able to scan their homes and get detailed recommendations for modifications that improve their safety and independence. Sign up for early access at info@yourhomease.com to be notified when we launch.";
      } else if (path.includes("contractor-connections")) {
        response = "We'll connect you with a network of highly-rated, CAPS-certified contractors who specialize in aging-in-place modifications. Our contractors are vetted for quality and reliability, ensuring your clients get the best care. Sign up for early access at info@yourhomease.com.";
      } else if (path.includes("progress-tracking")) {
        response = "Track your clients' home modification progress in real-time. Our platform will help you monitor project completion and ensure modifications meet your clients' needs. Sign up for early access at info@yourhomease.com.";
      } else if (path.includes("educational-resources")) {
        response = "Access educational materials to help your clients understand the importance of home modifications and how they improve safety and independence. Sign up for early access at info@yourhomease.com.";
      } else {
        response = "Thank you for your interest in HOMEase! We're developing tools specifically for healthcare providers to help assess and recommend home modifications for your patients. Our platform will connect you with highly-rated, CAPS-certified contractors. Sign up for early access at info@yourhomease.com.";
      }
    } else if (path.includes("contractor")) {
      if (path.includes("join-network")) {
        response = "It's completely free to create an account and join our contractor network! Our platform will connect qualified professionals with homeowners who need modifications. You'll be able to browse available leads and purchase only the ones that match your expertise and location. Contact us at info@yourhomease.com to join our waitlist and be notified when we launch.";
      } else if (path.includes("lead-generation")) {
        response = "Our lead generation system provides qualified, pre-screened homeowners who are ready to invest in safety modifications. Each lead includes detailed AR measurements, project scope, and homeowner information so you can decide if it's a good fit before purchasing. Contact us at info@yourhomease.com for more details.";
      } else if (path.includes("contractor-services")) {
        response = "We offer contractors detailed project measurements from AR scans, lead qualification data, and project management tools. Our platform is designed to streamline the home modification process and help you deliver accurate quotes. Contact us at info@yourhomease.com to learn more.";
      } else if (path.includes("pricing")) {
        response = "Account creation is completely free! You only pay for leads you want to purchase. Each lead includes detailed information so you can make informed decisions about which projects to pursue. Contact us at info@yourhomease.com for early access and pricing information.";
      } else if (path.includes("contact")) {
        response = "We'd love to hear from you! Contact us directly at info@yourhomease.com or call us at (555) 123-4567. Our team is available to answer any questions about our upcoming contractor platform.";
      }
    }

    // Add response to chat and reset
    const finalMessage = {
      id: Date.now(),
      text: response,
      sender: 'bot',
      timestamp: new Date(),
      isFinal: true
    };
    
    setChatMessages([finalMessage]);
    setCurrentQuestion(-1); // Special state for final message
  };

  const resetChat = () => {
    setCurrentQuestion(0);
    setUserPath([]);
    setQuestionHistory([]);
    setChatMessages([
      { id: 1, text: "Hi! I'm here to help with any questions about HOMEase. How can I assist you today?", sender: 'bot', timestamp: new Date() }
    ]);
  };

  // Removed unused handleKeyPress function

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
                  <h3 className="font-semibold">HOMEase Guide</h3>
                  <p className="text-xs opacity-90">Let me help you</p>
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
              {/* Show current question or final message */}
              {currentQuestion >= 0 && questionTree[currentQuestion] && (
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="max-w-xs px-4 py-2 rounded-2xl bg-gray-100 text-gray-900">
                      <p className="text-sm font-medium">{questionTree[currentQuestion].question}</p>
                    </div>
                  </div>
                  
                  {/* Question Options */}
                  <div className="space-y-2">
                    {questionTree[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionSelect(option)}
                        className="w-full text-left px-4 py-2 rounded-lg border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-colors text-sm"
                      >
                        {option.text}
                      </button>
                    ))}
                  </div>
                  
                  {/* Back Button */}
                  {questionHistory.length > 0 && (
                    <div className="pt-2">
                      <button
                        onClick={handleBack}
                        className="text-blue-600 hover:text-blue-700 text-xs font-medium flex items-center"
                      >
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Back
                      </button>
                    </div>
                  )}
                </div>
              )}

              {/* Show final response */}
              {currentQuestion === -1 && chatMessages.map((message) => (
                <div key={message.id} className="flex justify-start">
                  <div className="max-w-xs px-4 py-2 rounded-2xl bg-gray-100 text-gray-900">
                    <p className="text-sm">{message.text}</p>
                    <div className="mt-3">
                      <button
                        onClick={resetChat}
                        className="text-blue-600 hover:text-blue-700 text-xs font-medium"
                      >
                        Start over
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input - Hidden for question tree */}
            <div className="p-4 border-t border-gray-200">
              <div className="text-center text-xs text-gray-500">
                Select an option above to continue
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