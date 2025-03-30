
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  scrollToContact?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollToContact }) => {
  const handleContactClick = () => {
    if (scrollToContact) {
      scrollToContact();
    } else {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToUseCases = () => {
    const useCasesElement = document.getElementById('usecases');
    if (useCasesElement) {
      useCasesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-6">
            Advanced Vision Intelligence
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
            Percepta
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
            An adaptive vision intelligence stack designed to deliver precise results across various domains with minimal training and low computational overhead.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={handleContactClick}
              className="px-6 py-6 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium text-base"
            >
              Schedule a Demo
            </Button>
            <Button 
              onClick={scrollToUseCases}
              variant="outline" 
              className="px-6 py-6 rounded-full border-white/20 hover:bg-dark-700 text-white font-medium text-base"
            >
              Explore Use Cases
            </Button>
          </div>
        </div>
      </div>
      
      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,150,0.1),transparent_70%)]"></div>
      </div>
    </section>
  );
};

export default HeroSection;
