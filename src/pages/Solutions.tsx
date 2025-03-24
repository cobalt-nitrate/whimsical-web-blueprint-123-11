
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">
            Enterprise AI <span className="text-gradient">Solutions</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Discover our comprehensive suite of AI solutions designed to transform your business operations and drive innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="glass-card p-8 rounded-xl">
            <div className="aspect-video bg-dark-800 rounded-lg mb-6"></div>
            <h3 className="text-2xl font-medium mb-4">Computer Vision Suite</h3>
            <p className="text-gray-400 mb-4">Advanced vision AI solutions for complex industrial applications.</p>
            <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>

          <div className="glass-card p-8 rounded-xl">
            <div className="aspect-video bg-dark-800 rounded-lg mb-6"></div>
            <h3 className="text-2xl font-medium mb-4">NLP Systems</h3>
            <p className="text-gray-400 mb-4">State-of-the-art language processing for enterprise needs.</p>
            <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
