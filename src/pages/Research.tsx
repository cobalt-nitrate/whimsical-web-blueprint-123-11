
import React from 'react';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
import SectionHeader from '@/components/ui/section-header';
import { Link } from 'react-router-dom';

const Research = () => {
  return (
    <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Our <span className="text-gradient">Research</span> Initiatives
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mb-8">
              Exploring the frontiers of artificial intelligence through groundbreaking research and innovation.
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl mb-12">
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

          {/* Case Studies Section */}
          <div className="mb-16">
            <SectionHeader 
              badge="Industry Applications"
              title="Case Studies"
              description="Real-world applications of our research and technology"
              align="left"
            />

            <div className="glass-card p-8 rounded-xl mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="col-span-1">
                  <img 
                    src="/lovable-uploads/df1e37af-fd75-456f-a0d1-f8aafa731046.png" 
                    alt="Satva Trust Logo" 
                    className="w-full max-w-[240px] mb-4"
                  />
                </div>
                <div className="col-span-2">
                  <h3 className="text-2xl font-bold mb-3">
                    Revolutionizing Maritime Parametric Insurance
                  </h3>
                  <p className="text-gray-400 mb-4">
                    How NovaForge's Analytics Solution Delivered Rapid Trigger Verification for Satva Trust's parametric insurance products, resulting in faster payouts and more reliable insurance offerings.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-300">Maritime Insurance</span>
                    <span className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-300">Analytics</span>
                    <span className="px-3 py-1 bg-dark-700 rounded-full text-sm text-gray-300">Machine Learning</span>
                  </div>
                  <Link 
                    to="/case-study-satva" 
                    className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300"
                  >
                    Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/34d6a729-eba9-4164-9919-6d2762721bf5.png"
                      alt="MSK Logo" 
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="text-sm text-gray-400">Healthcare • Medical Imaging</span>
                </div>
                <h3 className="text-xl font-bold mb-2">AI-Powered Medical Imaging Analysis</h3>
                <p className="text-gray-400 mb-4">How NovaForge helped MSK Cancer Center improve diagnostic accuracy</p>
                <Link 
                  to="/case-study-msk" 
                  className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group"
                >
                  Read Case Study 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center">
                    <img 
                      src="/lovable-uploads/2a8a9acd-d9f5-4c0e-8db6-a55ae5c0ac76.png"
                      alt="LiveLaw Logo" 
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="text-sm text-gray-400">Legal Tech • Document Processing</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Automated Legal Document Processing</h3>
                <p className="text-gray-400 mb-4">Intelligent document analysis for legal professionals at Live Law</p>
                <Link 
                  to="/case-study-livelaw" 
                  className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group"
                >
                  Read Case Study 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>

          {/* More research sections could be added here */}
        </div>
      </div>
    </PageLayout>
  );
};

export default Research;
