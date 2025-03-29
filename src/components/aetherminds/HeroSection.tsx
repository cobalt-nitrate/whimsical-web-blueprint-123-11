
import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';

interface HeroSectionProps {
  scrollToContact: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContact }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center py-24 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Purple gradient backgrounds */}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-purple-500/10 blur-[100px]" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 rounded-full bg-purple-500/5 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 space-y-6">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-purple-400 text-xs font-medium mb-2">
              Custom AI Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Aetherminds</span>
            </h1>
            <p className="text-xl text-gray-300 font-light">
              Precise AI models for high-stakes industries—where off-the-shelf AI fails. From decision intelligence to real-time AI agents, we engineer custom solutions that drive measurable impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={scrollToContact} 
                className="px-8 py-3 rounded-full bg-purple-600 hover:bg-purple-700 text-white font-medium transition-all duration-300 flex items-center justify-center"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              
              <a 
                href="#capabilities" 
                className="px-8 py-3 rounded-full bg-dark-700 hover:bg-dark-600 text-white transition-all duration-300 flex items-center justify-center"
              >
                Explore Capabilities
              </a>
            </div>
          </div>
          
          <div className="w-full md:w-2/5 flex justify-center">
            <div className="relative w-full max-w-md aspect-square">
              {/* Decorative circular background */}
              <div className="absolute inset-0 rounded-full bg-dark-800 shadow-[0_0_50px_-12px_rgba(147,51,234,0.3)]"></div>
              
              {/* Brain icon in the center */}
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-1/2 h-1/2 text-purple-400" />
              </div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-pulse"></div>
              <div className="absolute inset-[15%] rounded-full border border-purple-500/30 animate-pulse" style={{animationDelay: '500ms'}}></div>
              <div className="absolute inset-[30%] rounded-full border border-purple-500/40 animate-pulse" style={{animationDelay: '1000ms'}}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
