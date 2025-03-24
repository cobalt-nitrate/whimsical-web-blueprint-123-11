
import React from 'react';
import { Search, ArrowRight } from 'lucide-react';

const CaseStudies = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">
            Case <span className="text-gradient">Studies</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Real-world implementations and success stories of our AI solutions.
          </p>
          
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search case studies by industry or technology..."
                className="w-full pl-12 pr-4 py-3 bg-dark-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-teal-500"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="glass-card p-6 rounded-xl">
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-dark-800 text-teal-500 rounded-full text-sm mr-2">
                  Healthcare
                </span>
                <span className="inline-block px-3 py-1 bg-dark-800 text-teal-500 rounded-full text-sm">
                  Computer Vision
                </span>
              </div>
              <h3 className="text-xl font-medium mb-2">Case Study {item}</h3>
              <p className="text-gray-400 mb-4">Implementation details and results achieved.</p>
              <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
