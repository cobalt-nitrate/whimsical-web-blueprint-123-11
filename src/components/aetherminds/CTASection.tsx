
import React from 'react';

interface CTASectionProps {
  scrollToContact: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ scrollToContact }) => {
  return (
    <section className="py-24 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-teal-500/10 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-10 rounded-xl text-center max-w-4xl mx-auto backdrop-blur-md">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your AI Capabilities?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Partner with Aetherminds to develop custom AI solutions that drive measurable results for your high-stakes applications.
          </p>
          <button 
            onClick={scrollToContact}
            className="px-10 py-4 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300 text-lg"
          >
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
