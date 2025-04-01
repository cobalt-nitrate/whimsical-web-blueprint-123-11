
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '@/components/ui/section-header';

const Research = () => {
  return (
    <section id="research" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Maritime Case Study"
          title={<>Revolutionizing <span className="text-gradient">Maritime</span> Parametric Insurance</>}
          description="How NovaForge's Analytics Solution Delivered Rapid Trigger Verification for Satva Trust"
          align="center"
        />

        <div className="glass-card p-8 rounded-xl mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-medium mb-4">Case Study: Satva Trust</h3>
              <p className="text-gray-400 mb-6">
                Satva Trust, operating in the maritime insurance sector, faced critical challenges 
                in selecting optimal trigger parameters for their parametric insurance products. 
                NovaForge Innovations developed an adaptive analytics framework that transformed 
                Satva's ability to estimate and verify parametric triggers.
              </p>
              <Link to="/case-study-satva" className="inline-flex items-center text-teal-500 hover:text-teal-400">
                Read Full Case Study <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="bg-dark-700 rounded-lg p-6 flex items-center justify-center">
              <img 
                src="/lovable-uploads/df1e37af-fd75-456f-a0d1-f8aafa731046.png" 
                alt="Satva Trust Logo" 
                className="max-h-32 mx-auto"
              />
            </div>
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-xl font-medium mb-4">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-lg">
              <h4 className="text-teal-500 text-xl font-medium mb-2">Streamlined Data Acquisition</h4>
              <p className="text-gray-400 text-sm">
                Created efficient pipelines for bulk data acquisition with quality assurance checks
                for data integrity.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h4 className="text-teal-500 text-xl font-medium mb-2">Scalable Analytics</h4>
              <p className="text-gray-400 text-sm">
                Developed state-managed data processing with optimized storage schema for efficient 
                real-time decision support.
              </p>
            </div>
            <div className="glass-card p-6 rounded-lg">
              <h4 className="text-teal-500 text-xl font-medium mb-2">Machine Learning</h4>
              <p className="text-gray-400 text-sm">
                Implemented predictive models with domain adaptation capabilities for maritime contexts
                and continuous learning pipelines.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl font-medium mb-6">Explore More Case Studies</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link to="/case-study-msk" className="glass-card p-6 rounded-lg hover:border-teal-500/30 transition-all duration-300 border border-transparent">
              <h4 className="text-lg font-medium mb-2">AI-Powered Medical Imaging</h4>
              <p className="text-gray-400 text-sm mb-4">How NovaForge helped a leading hospital improve diagnostic accuracy</p>
              <div className="flex justify-end">
                <ArrowRight className="h-5 w-5 text-teal-500" />
              </div>
            </Link>
            <Link to="/case-study-livelaw" className="glass-card p-6 rounded-lg hover:border-teal-500/30 transition-all duration-300 border border-transparent">
              <h4 className="text-lg font-medium mb-2">Automated Legal Analysis</h4>
              <p className="text-gray-400 text-sm mb-4">Intelligent document processing and analysis for legal professionals</p>
              <div className="flex justify-end">
                <ArrowRight className="h-5 w-5 text-teal-500" />
              </div>
            </Link>
            <Link to="/research" className="glass-card p-6 rounded-lg hover:border-teal-500/30 transition-all duration-300 border border-transparent">
              <h4 className="text-lg font-medium mb-2">View All Research</h4>
              <p className="text-gray-400 text-sm mb-4">Explore our complete portfolio of research initiatives and case studies</p>
              <div className="flex justify-end">
                <ArrowRight className="h-5 w-5 text-teal-500" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
