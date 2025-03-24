
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Research = () => {
  return (
    <div className="min-h-screen bg-dark-900 text-white pt-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-medium mb-6">
            Our <span className="text-gradient">Research</span> Initiatives
          </h1>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
            Exploring the frontiers of artificial intelligence through groundbreaking research and innovation.
          </p>
        </div>

        <div className="glass-card p-8 rounded-xl mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-medium mb-4">Latest Research</h2>
              <p className="text-gray-400 mb-6">
                Our latest breakthroughs in AI technology and methodologies.
              </p>
              <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                View Publications <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="bg-dark-800 rounded-lg aspect-video"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
