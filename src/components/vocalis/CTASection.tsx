
import React from 'react';

interface CTASectionProps {
  scrollToContact: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ scrollToContact }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-dark-800 to-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Audio Intelligence?
          </h2>
          <p className="text-gray-300 mb-8">
            Join leading organizations that have revolutionized their speech and audio processing capabilities with Vocalis.
          </p>
          <button onClick={scrollToContact} className="px-8 py-4 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium text-lg transition-all duration-300">
            Get Started with Vocalis Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
