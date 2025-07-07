// Google Analytics service with consent management
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

class AnalyticsService {
  private isInitialized = false;
  private measurementId = 'G-0ELCE8XRDD';

  // Initialize Google Analytics only if consent is given
  initialize(consent: { analytics: boolean; marketing: boolean; necessary: boolean }) {
    if (this.isInitialized) {
      console.log('Analytics already initialized');
      return;
    }

    if (!consent.analytics) {
      console.log('Analytics consent not given, skipping initialization');
      return;
    }

    // Load Google Analytics script
    this.loadGoogleAnalytics();
    this.isInitialized = true;
  }

  private loadGoogleAnalytics() {
    // Create script elements
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${this.measurementId}`;
    
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${this.measurementId}', {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=None;Secure'
      });
    `;

    // Add scripts to head
    document.head.appendChild(script1);
    document.head.appendChild(script2);

    console.log('Google Analytics loaded with consent');
  }

  // Track page views
  trackPageView(page: string) {
    if (!this.isInitialized || !window.gtag) {
      console.log('Analytics not initialized, skipping page view');
      return;
    }

    window.gtag('config', this.measurementId, {
      page_path: page,
      page_title: document.title
    });
  }

  // Track custom events
  trackEvent(eventName: string, parameters?: Record<string, any>) {
    if (!this.isInitialized || !window.gtag) {
      console.log('Analytics not initialized, skipping event');
      return;
    }

    window.gtag('event', eventName, parameters);
  }

  // Track button clicks
  trackButtonClick(buttonName: string, location?: string) {
    this.trackEvent('button_click', {
      button_name: buttonName,
      page_location: location || window.location.pathname
    });
  }

  // Track form submissions
  trackFormSubmission(formName: string) {
    this.trackEvent('form_submit', {
      form_name: formName,
      page_location: window.location.pathname
    });
  }

  // Track downloads
  trackDownload(fileName: string) {
    this.trackEvent('file_download', {
      file_name: fileName,
      page_location: window.location.pathname
    });
  }

  // Track external links
  trackExternalLink(url: string) {
    this.trackEvent('external_link_click', {
      link_url: url,
      page_location: window.location.pathname
    });
  }

  // Update consent settings
  updateConsent(consent: { analytics: boolean; marketing: boolean; necessary: boolean }) {
    if (window.gtag) {
      window.gtag('consent', 'update', {
        analytics_storage: consent.analytics ? 'granted' : 'denied',
        ad_storage: consent.marketing ? 'granted' : 'denied'
      });
    }

    if (consent.analytics && !this.isInitialized) {
      this.initialize(consent);
    }
  }

  // Get current consent status
  getConsentStatus() {
    const saved = localStorage.getItem('homease-cookie-consent');
    if (saved) {
      return JSON.parse(saved);
    }
    return null;
  }

  // Clear all analytics data (for user privacy)
  clearData() {
    if (window.gtag) {
      window.gtag('config', this.measurementId, {
        'anonymize_ip': true,
        'cookie_flags': 'SameSite=None;Secure'
      });
    }
  }
}

// Create singleton instance
const analyticsService = new AnalyticsService();
export default analyticsService; 