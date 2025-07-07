import React from 'react';
import Header from './Header';
import Footer from './Footer';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              About HOMEase
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Making independence possible through AI-powered home safety
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Mission
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              HOMEase was created to help seniors live safely and independently in their own homes. We believe everyone deserves to age with dignity in familiar surroundings.
            </p>
            <p>
              Using AI and AR technology, we make home safety assessments simple and connect families with qualified professionals who can help make their homes safer.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Seniors & Families</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Home safety assessments using smartphone technology</li>
                <li>• Personalized recommendations for safety improvements</li>
                <li>• Connection to qualified contractors and professionals</li>
                <li>• Support throughout the home modification process</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">For Contractors</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Access to families seeking home safety services</li>
                <li>• Detailed project information and requirements</li>
                <li>• Professional tools and support resources</li>
                <li>• Community of like-minded professionals</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Technology
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              HOMEase uses artificial intelligence and augmented reality to make home safety assessments accessible to everyone. Our technology works with standard smartphones to scan homes and identify potential safety concerns.
            </p>
            <p>
              The system provides clear, actionable recommendations and connects families with qualified professionals who can help implement the necessary modifications.
            </p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Our Team
          </h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cliff Franco - Founder & CEO</h3>
              <p className="text-gray-700 mb-2">
                Cliff has over 10 years of experience in the home services industry. He founded HOMEase with the goal of making home safety accessible to seniors and their families.
              </p>
              <a 
                href="https://www.linkedin.com/in/clifffrancolinkup/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-semibold"
              >
                View LinkedIn Profile →
              </a>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Development Team</h3>
              <p className="text-gray-700">
                Our team of engineers and designers work to create technology that's both powerful and easy to use, ensuring that home safety assessments are accessible to everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-gray-700 mb-4">
            For more information about HOMEase, contact us at:
          </p>
          <p className="text-blue-600 font-semibold">
            info@yourhomease.com
          </p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default AboutPage; 