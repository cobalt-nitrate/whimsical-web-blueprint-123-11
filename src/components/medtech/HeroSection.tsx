import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
interface HeroSectionProps {
  scrollToContact: () => void;
}
const HeroSection: React.FC<HeroSectionProps> = ({
  scrollToContact
}) => {
  return <section className="relative py-20 md:py-32 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900 overflow-hidden">
      {/* Background Animation Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Neural network animation */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <radialGradient id="nodeGradient" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#14b8a6" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#14b8a6" stopOpacity="0" />
              </radialGradient>
            </defs>
            
            {/* Animated connections */}
            <g className="animate-pulse">
              <line x1="100" y1="200" x2="300" y2="150" stroke="#14b8a6" strokeWidth="1" opacity="0.6" />
              <line x1="300" y1="150" x2="500" y2="200" stroke="#14b8a6" strokeWidth="1" opacity="0.6" />
              <line x1="500" y1="200" x2="700" y2="180" stroke="#14b8a6" strokeWidth="1" opacity="0.6" />
              <line x1="200" y1="400" x2="400" y2="350" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
              <line x1="400" y1="350" x2="600" y2="400" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
            </g>
            
            {/* Nodes */}
            <circle cx="100" cy="200" r="4" fill="url(#nodeGradient)" className="animate-pulse" />
            <circle cx="300" cy="150" r="4" fill="url(#nodeGradient)" className="animate-pulse delay-500" />
            <circle cx="500" cy="200" r="4" fill="url(#nodeGradient)" className="animate-pulse delay-1000" />
            <circle cx="700" cy="180" r="4" fill="url(#nodeGradient)" className="animate-pulse delay-1500" />
            <circle cx="200" cy="400" r="4" fill="url(#nodeGradient)" className="animate-pulse delay-700" />
            <circle cx="400" cy="350" r="4" fill="url(#nodeGradient)" className="animate-pulse delay-300" />
            <circle cx="600" cy="400" r="4" fill="url(#nodeGradient)" className="animate-pulse delay-1200" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-in">
                Calibrated AI for{' '}
            <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Life Sciences
            </span>
          </h1>

          {/* Subheadline */}
          <h2 className="text-sm md:text-lg lg:text-2xl text-gray-300 mb-4 animate-fade-in delay-300 font-light">
            Applied AI systems for diagnostics, devices, and medical applications
          </h2>

          {/* Support Line */}
          

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-700">
            <Button onClick={scrollToContact} size="lg" className="px-8 py-4 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium text-lg transition-all duration-300 hover:scale-105">
              Let's Collaborate <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button variant="outline" size="lg" className="px-8 py-4 rounded-full border-2 border-teal-500/50 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:scale-105">
              <Play className="mr-2 h-5 w-5" />
              See Our Work
            </Button>
          </div>

          {/* Medical scan animation overlay */}
          <div className="mt-16 relative animate-fade-in delay-1000">
            <div className="glass-card p-8 max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-500">Medical AI Models & Data-Ops Solutions for</span>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-4 bg-dark-700/50 rounded-lg">
                  <div className="w-8 h-8 bg-teal-500/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-teal-400 rounded animate-pulse"></div>
                  </div>
                  <p className="text-xs text-gray-400">Hospitals & Universities</p>
                </div>
                
                <div className="p-4 bg-dark-700/50 rounded-lg">
                  <div className="w-8 h-8 bg-blue-500/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-400 rounded animate-pulse delay-500"></div>
                  </div>
                  <p className="text-xs text-gray-400">Equipment Manufacturers</p>
                </div>
                
                <div className="p-4 bg-dark-700/50 rounded-lg">
                  <div className="w-8 h-8 bg-purple-500/20 rounded-lg mx-auto mb-2 flex items-center justify-center">
                    <div className="w-4 h-4 bg-purple-400 rounded animate-pulse delay-1000"></div>
                  </div>
                  <p className="text-xs text-gray-400">Med-Tech Enterprises</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;