import React from 'react';
import Header from './Header';
import Footer from './Footer';

const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                <strong>Last updated:</strong> January 2025
              </p>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-gray-700 mb-4">
                  By accessing and using HOMEase ("we," "our," or "us"), including our mobile application and website, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
                <p className="text-gray-700 mb-4">
                  HOMEase|AI is an AR-driven lead generation platform that connects homeowners seeking aging-in-place modifications with qualified local contractors. Our service includes:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>AR-based home assessments using LiDAR technology for precise measurements</li>
                  <li>AI-powered identification of accessibility and safety issues</li>
                  <li>Generation of 2D and 3D floor plans with modification recommendations</li>
                  <li>Pre-qualified lead generation and contractor matching services</li>
                  <li>Mobile and web applications for home safety evaluations</li>
                  <li>Performance dashboards and lead conversion tools for contractors</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Our platform specializes in aging-in-place home modifications, including grab bar installation, ramp construction, door widening, bathroom remodeling, stair modifications, kitchen accessibility, lighting improvements, and flooring & safety enhancements.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. User Responsibilities</h2>
                <p className="text-gray-700 mb-4">As a user of HOMEase, you agree to:</p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Provide accurate and complete information</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Not attempt to reverse engineer or hack our systems</li>
                  <li>Respect the privacy and rights of other users</li>
                  <li>Not upload harmful or inappropriate content</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. AR/AI Assessment Limitations</h2>
                <p className="text-gray-700 mb-4">
                  Our AR-powered assessments using LiDAR technology are designed to provide general recommendations and should not be considered as:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Professional medical advice or healthcare recommendations</li>
                  <li>Substitute for professional home inspections or structural assessments</li>
                  <li>Guarantee of safety or compliance with building codes or ADA standards</li>
                  <li>Complete assessment of all potential hazards or accessibility issues</li>
                  <li>Professional architectural or engineering services</li>
                  <li>Warranty of measurement accuracy or project feasibility</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  While our AR technology provides precise measurements and identifies potential issues, users should consult with qualified professionals (contractors, architects, healthcare providers) for comprehensive safety evaluations, structural assessments, and medical recommendations.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Lead Generation & Contractor Services</h2>
                <p className="text-gray-700 mb-4">
                  HOMEase|AI operates as a lead generation platform that facilitates connections between homeowners and contractors. We provide pre-qualified, validated customers but do not:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Guarantee the quality of contractor work or services</li>
                  <li>Provide warranties for contractor services or project outcomes</li>
                  <li>Handle payments between homeowners and contractors</li>
                  <li>Assume liability for contractor actions, work quality, or project completion</li>
                  <li>Manage or oversee construction projects</li>
                  <li>Provide project management or coordination services</li>
                </ul>
                <p className="text-gray-700 mb-4">
                  Homeowners are responsible for vetting contractors, entering into separate agreements, and managing their own projects. Contractors are responsible for their own business operations, licensing, insurance, and compliance with local regulations.
                </p>
                <p className="text-gray-700 mb-4">
                  Our lead generation service includes AR-validated assessments, pre-qualified homeowner intent, specific modification requirements, and budget range estimations to improve contractor conversion rates.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Privacy and Data</h2>
                <p className="text-gray-700 mb-4">
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Intellectual Property</h2>
                <p className="text-gray-700 mb-4">
                  All content, features, and functionality of HOMEase are owned by us and are protected by copyright, trademark, and other intellectual property laws.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimers</h2>
                <p className="text-gray-700 mb-4">
                  HOMEase is provided "as is" without warranties of any kind. We disclaim all warranties, express or implied, including but not limited to:
                </p>
                <ul className="list-disc pl-6 text-gray-700 mb-4">
                  <li>Warranties of merchantability</li>
                  <li>Fitness for a particular purpose</li>
                  <li>Non-infringement</li>
                  <li>Accuracy of AI assessments</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-700 mb-4">
                  In no event shall HOMEase be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Termination</h2>
                <p className="text-gray-700 mb-4">
                  We may terminate or suspend your access to HOMEase at any time, with or without cause, with or without notice.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to Terms</h2>
                <p className="text-gray-700 mb-4">
                  We reserve the right to modify these terms at any time. Continued use of HOMEase after changes constitutes acceptance of the new terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  If you have questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Email:</strong> info@yourhomease.com<br />
                    <strong>Address:</strong> 17350 State Hwy 249 STE 220, Houston, TX 77064, USA
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

export default TermsPage; 