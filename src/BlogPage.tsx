import React from 'react';
import Header from './Header';
import Footer from './Footer';

const BlogPage: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "5 Essential Home Safety Tips for Aging in Place",
      excerpt: "Discover the most important modifications you can make to keep your home safe and accessible as you age.",
      date: "March 15, 2025",
      readTime: "3 min read",
      category: "Safety Tips"
    },
    {
      id: 2,
      title: "How AI is Revolutionizing Home Safety Assessments",
      excerpt: "Learn how artificial intelligence is making home safety evaluations faster, more accurate, and more accessible than ever before.",
      date: "March 10, 2025",
      readTime: "5 min read",
      category: "Technology"
    },
    {
      id: 3,
      title: "The Hidden Dangers in Your Home: What to Look For",
      excerpt: "Common household hazards that often go unnoticed but can pose serious risks to seniors and those with mobility challenges.",
      date: "March 5, 2025",
      readTime: "4 min read",
      category: "Safety Tips"
    },
    {
      id: 4,
      title: "Working with Contractors: A Complete Guide",
      excerpt: "Everything you need to know about finding, hiring, and working with qualified contractors for home modifications.",
      date: "February 28, 2025",
      readTime: "6 min read",
      category: "Guides"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              HOMEase Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Expert insights on home safety, aging in place, and making your home more accessible
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors">
                      Read More →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
          
          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Load More Articles
            </button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage; 