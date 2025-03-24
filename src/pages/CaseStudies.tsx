
import React from 'react';
import { ArrowRight, Search } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const CaseStudies = () => {
  return (
    <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Research & Industry <span className="text-gradient">Whitepapers</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Explore our research and industry analysis in different sectors.
            </p>
            
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search by industry or technology..." 
                className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Healthcare', 'Finance', 'Legal', 'Education', 'Manufacturing', 'Retail'].map((industry) => (
              <div key={industry} className="glass-card p-6 rounded-xl">
                <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
                  {industry}
                </div>
                <div className="aspect-video bg-dark-800 rounded-lg mb-4"></div>
                <h3 className="text-xl font-medium mb-2">AI Applications in {industry}</h3>
                <p className="text-gray-400 mb-4">
                  Exploring the transformative potential of AI technologies in the {industry.toLowerCase()} sector.
                </p>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  Read Whitepaper <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CaseStudies;
