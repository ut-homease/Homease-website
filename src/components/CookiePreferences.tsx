import React, { useState, useEffect } from 'react';
import analyticsService from '../services/analytics';

interface CookiePreferencesProps {
  isOpen: boolean;
  onClose: () => void;
  onConsentChange: (preferences: {
    analytics: boolean;
    marketing: boolean;
    necessary: boolean;
  }) => void;
}

const CookiePreferences: React.FC<CookiePreferencesProps> = ({ 
  isOpen, 
  onClose, 
  onConsentChange 
}) => {
  const [preferences, setPreferences] = useState({
    analytics: false,
    marketing: false,
    necessary: true
  });

  useEffect(() => {
    if (isOpen) {
      const savedConsent = analyticsService.getConsentStatus();
      if (savedConsent) {
        setPreferences(savedConsent);
      }
    }
  }, [isOpen]);

  const handlePreferenceChange = (type: keyof typeof preferences) => {
    if (type === 'necessary') return; // Necessary cookies can't be disabled
    setPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSave = () => {
    localStorage.setItem('homease-cookie-consent', JSON.stringify(preferences));
    onConsentChange(preferences);
    onClose();
  };

  const handleAcceptAll = () => {
    const newPreferences = {
      analytics: true,
      marketing: true,
      necessary: true
    };
    setPreferences(newPreferences);
    localStorage.setItem('homease-cookie-consent', JSON.stringify(newPreferences));
    onConsentChange(newPreferences);
    onClose();
  };

  const handleDeclineAll = () => {
    const newPreferences = {
      analytics: false,
      marketing: false,
      necessary: true
    };
    setPreferences(newPreferences);
    localStorage.setItem('homease-cookie-consent', JSON.stringify(newPreferences));
    onConsentChange(newPreferences);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Cookie Preferences</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="space-y-6">
            <p className="text-gray-600">
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. 
              You can choose which types of cookies to allow below.
            </p>

            {/* Necessary Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Necessary Cookies</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.necessary}
                    disabled
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600">
                These cookies are essential for the website to function properly. They enable basic functions like page navigation, 
                access to secure areas, and form submissions. The website cannot function properly without these cookies.
              </p>
            </div>

            {/* Analytics Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Analytics Cookies</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={() => handlePreferenceChange('analytics')}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600">
                These cookies help us understand how visitors interact with our website by collecting and reporting information 
                anonymously. This helps us improve our website and provide better user experiences.
              </p>
            </div>

            {/* Marketing Cookies */}
            <div className="border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-semibold text-gray-900">Marketing Cookies</h3>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    checked={preferences.marketing}
                    onChange={() => handlePreferenceChange('marketing')}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
                  />
                </div>
              </div>
              <p className="text-sm text-gray-600">
                These cookies are used to track visitors across websites to display relevant advertisements. 
                They help us deliver personalized content and measure the effectiveness of our marketing campaigns.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={handleDeclineAll}
              className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              Decline All
            </button>
            <button
              onClick={handleAcceptAll}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Save Preferences
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePreferences; 