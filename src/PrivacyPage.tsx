import React from 'react';
import Header from './Header';
import Footer from './Footer';

const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> January 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
                <p className="text-gray-700 mb-4">
                  HOMEase|AI ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our AR-driven lead generation platform, mobile application, and website for aging-in-place home modifications.
                </p>
                <p className="text-gray-700 mb-4">
                  Our platform connects homeowners seeking aging-in-place modifications with qualified local contractors through AR-powered assessments and AI-driven lead validation. This Privacy Policy covers both homeowner and contractor users of our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.1 Personal Information</h3>
                <p className="text-gray-700 mb-4">We may collect the following personal information:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Name and contact information (email, phone number)</li>
                  <li>Home address and property details</li>
                  <li>Age and accessibility needs</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.2 AR Scans and Home Data</h3>
                <p className="text-gray-700 mb-4">When you use our AR assessment service, we collect:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>LiDAR-based 3D scans of your home rooms and areas</li>
                  <li>Precise measurements and dimensions (height, angles, distances)</li>
                  <li>2D and 3D floor plans generated from AR scans</li>
                  <li>AI-generated accessibility assessments and modification recommendations</li>
                  <li>Project scope, requirements, and budget estimations</li>
                  <li>Real-time detection of accessibility challenges and safety issues</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">2.3 Technical Information</h3>
                <p className="text-gray-700 mb-4">We automatically collect:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Device information and IP addresses</li>
                  <li>Usage data and app interactions</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Location data (with your consent)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
                <p className="text-gray-700 mb-4">We use your information to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide AI-powered home safety assessments</li>
                  <li>Generate accessibility recommendations</li>
                  <li>Match you with qualified contractors</li>
                  <li>Process payments and transactions</li>
                  <li>Improve our AI algorithms and services</li>
                  <li>Send important service updates and notifications</li>
                  <li>Provide customer support</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. AR/AI Processing and Data Analysis</h2>
                <p className="text-gray-700 mb-4">
                  Our AR and AI systems process your home scans to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Generate precise measurements and 2D/3D floor plans</li>
                  <li>Identify accessibility challenges and safety hazards</li>
                  <li>Recommend specific aging-in-place modifications</li>
                  <li>Create detailed assessment reports with budget estimations</li>
                  <li>Validate homeowner intent and project requirements</li>
                  <li>Improve our AR and AI models for better accuracy</li>
                  <li>Provide contractors with pre-qualified, detailed leads</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  <strong>Note:</strong> Your AR scans may be used to train and improve our AI systems, but we ensure no personally identifiable information is retained in training data. All data used for model improvement is anonymized and aggregated.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Information Sharing</h2>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.1 Contractor Lead Sharing</h3>
                <p className="text-gray-700 mb-4">
                  With your consent, we share your information with qualified contractors to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide project quotes and estimates based on AR assessment data</li>
                  <li>Schedule home visits and consultations with precise project scope</li>
                  <li>Complete requested aging-in-place modifications</li>
                  <li>Access detailed measurements and floor plans for accurate bidding</li>
                  <li>Understand your specific accessibility needs and budget range</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  <strong>Lead Quality:</strong> Our AR-validated leads include confirmed homeowner intent, specific modification requirements, budget estimations, and urgency indicators to improve contractor conversion rates.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.2 Service Providers</h3>
                <p className="text-gray-700 mb-4">
                  We may share data with trusted third-party service providers who assist us in:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Payment processing for lead purchases</li>
                  <li>Cloud storage and hosting for AR scan data</li>
                  <li>AR and AI model training and optimization</li>
                  <li>Customer support services for homeowners and contractors</li>
                  <li>Lead management and contractor onboarding</li>
                  <li>Performance analytics and conversion tracking</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mb-3">5.3 Legal Requirements</h3>
                <p className="text-gray-700 mb-4">
                  We may disclose your information if required by law or to protect our rights, safety, or the rights of others.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Security</h2>
                <p className="text-gray-700 mb-4">
                  We implement appropriate security measures to protect your information, including:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Secure cloud storage with industry-standard protection</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication</li>
                  <li>Employee training on data protection</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Data Retention</h2>
                <p className="text-gray-700 mb-4">
                  We retain your information for as long as necessary to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide our services</li>
                  <li>Comply with legal obligations</li>
                  <li>Resolve disputes</li>
                  <li>Enforce our agreements</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  You may request deletion of your data at any time, subject to legal requirements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Your Rights</h2>
                <p className="text-gray-700 mb-4">You have the right to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Access your personal information</li>
                  <li>Correct inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Request data portability</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Cookies and Tracking</h2>
                <p className="text-gray-700 mb-4">
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Remember your preferences</li>
                  <li>Analyze website usage</li>
                  <li>Improve user experience</li>
                  <li>Provide personalized content</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  You can control cookie settings through your browser preferences.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Children's Privacy</h2>
                <p className="text-gray-700 mb-4">
                  Our service is not intended for children under 13. We do not knowingly collect personal information from children under 13. If we become aware of such collection, we will take steps to delete the information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. International Data Transfers</h2>
                <p className="text-gray-700 mb-4">
                  Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data during such transfers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Changes to This Policy</h2>
                <p className="text-gray-700 mb-4">
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on our website and updating the "Last updated" date.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Contact Us</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> info@yourhomease.com<br />
                    <strong>Address:</strong> 17350 State Hwy 249 STE 220, Houston, TX 77064, USA<br />
                    <strong>Privacy Officer:</strong> privacy@yourhomease.com
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPage; 