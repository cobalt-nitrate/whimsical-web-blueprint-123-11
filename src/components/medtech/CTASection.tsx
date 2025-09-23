import React from 'react';
import { ArrowRight, MessageSquare, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CTASectionProps {
  scrollToContact: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ scrollToContact }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-dark-800 via-dark-900 to-dark-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#14b8a6" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main CTA Content */}
          <div className="glass-card p-12 rounded-2xl mb-8">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 animate-fade-in">
              Let's Build{' '}
              <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl mb-8 animate-fade-in delay-300 leading-relaxed">
              Have a challenge in mind? Let's calibrate a solution for your clinical workflow or research environment.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-500">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="px-8 py-4 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium text-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-teal-500/25"
              >
                <Calendar className="mr-2 h-5 w-5" />
                Schedule a Discovery Call
              </Button>
              
              <Button 
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="px-8 py-4 rounded-full border-2 border-teal-500/50 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:scale-105"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Share Your Use Case
              </Button>
            </div>
          </div>

          {/* Value Proposition Pills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-fade-in delay-700">
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-400 mb-2">90%</div>
              <div className="text-sm text-gray-400">Faster Time to Market</div>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400 mb-2">100%</div>
              <div className="text-sm text-gray-400">Compliance Ready</div>
            </div>
            
            <div className="glass-card p-6 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-sm text-gray-400">Expert Support</div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center animate-fade-in delay-1000">
            <p className="text-gray-400 mb-4">
              Ready to get started? Our healthcare AI experts are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Available for consultation</span>
              </div>
              <div className="hidden sm:block">•</div>
              <div>Response within 24 hours</div>
              <div className="hidden sm:block">•</div>
              <div>Free initial assessment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-10 right-10 opacity-20 animate-bounce delay-2000">
        <div className="w-4 h-4 bg-teal-400 rounded-full"></div>
      </div>
      <div className="absolute bottom-10 left-10 opacity-20 animate-bounce delay-3000">
        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
      </div>
    </section>
  );
};

export default CTASection;