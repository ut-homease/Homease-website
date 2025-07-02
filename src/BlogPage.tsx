import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-2 text-center">OUR BLOG</h1>
          <div className="flex items-center justify-between mb-8">
            <span className="text-blue-600 font-semibold uppercase tracking-wider">All Posts</span>
          </div>

          <article className="bg-gray-50 rounded-2xl shadow p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Aging in Place Requires More Than Good Intentions</h2>
            <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
              <span>April 4, 2025</span>
              <span>|</span>
              <span>Modifications</span>
            </div>
            <p className="mb-4 text-lg text-gray-700">
              Aging-in-Place requires home modifications to be done properly and timely to ensure safety and compliance.
            </p>
            <p className="mb-4 text-gray-700">
              Most people don't realize that the average home is full of hidden hazards that can increase the risk of falls, injuries, or even hospital readmissions. This blog breaks down the most common home safety risks (poor lighting, loose rugs, uneven surfaces), how aging changes a person's ability to navigate their space, and why professional, AI-guided assessments like those provided by HOMEase are essential for long-term safety and independence.
            </p>
            <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-2">The Hidden Dangers in Your Home: Why Aging in Place Requires More Than Good Intentions</h3>
            <p className="mb-4 text-gray-700">
              For many older adults, the idea of aging in place — staying in the comfort of their own home as they grow older — feels safer, more personal, and emotionally grounding than moving to an assisted living facility. And while the intention is right, the reality is that most homes were never designed with aging or disability in mind. Without thoughtful adaptation, a typical home can become one of the most dangerous environments for a person as they grow older.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Small Hazards, Big Risks</h4>
            <p className="mb-4 text-gray-700">
              Slippery bathroom floors. Narrow doorways. Poor lighting. Stairs without railings. Throw rugs. These seem like minor details in a home — until you consider that falls are the leading cause of injury-related death among adults aged 65 and older in the United States. According to the CDC, one in four older adults falls each year, and many of these incidents happen at home.
            </p>
            <p className="mb-4 text-gray-700">
              And yet, most homes go unassessed. Families often assume that just "clearing a path" or adding a grab bar is enough. The truth is, home safety for aging individuals requires a comprehensive, expert-backed evaluation of how a person moves, lives, and interacts with their space.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Smarter Tools for Safer Homes</h4>
            <p className="mb-4 text-gray-700">
              This is where HOMEase Solutions steps in.
            </p>
            <p className="mb-4 text-gray-700">
              Our platform uses augmented reality (AR) and artificial intelligence (AI) to conduct a full scan of your home, identifying risks and recommending ADA-compliant modifications tailored to the specific needs of the resident. From widening doorways for wheelchair access to installing non-slip surfaces or optimizing lighting, HOMEase turns an everyday space into a safer, smarter environment — without relying on guesswork.
            </p>
            <p className="mb-4 text-gray-700">
              Better yet, we coordinate with licensed contractors and your insurance provider, making the process seamless, stress-free, and more affordable.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">Safe Doesn't Mean Institutional</h4>
            <p className="mb-4 text-gray-700">
              Many people worry that making a home safer means it has to look like a hospital. Not with HOMEase. We believe a home should be both beautiful and accessible. Our recommendations consider the user's mobility, lifestyle, and design preferences — so that safety doesn't come at the expense of dignity or comfort.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mt-6 mb-2">What's Next?</h4>
            <p className="mb-4 text-gray-700">
              Download the HOMEase app today and take the first step toward aging safely in place. Whether you're planning ahead, helping a loved one, or preparing for post-discharge recovery, our tools are built to make your home a place of confidence — not concern.
            </p>
            <div className="mt-8 text-right">
              <span className="text-gray-500 text-sm">Share this post:</span>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPage; 