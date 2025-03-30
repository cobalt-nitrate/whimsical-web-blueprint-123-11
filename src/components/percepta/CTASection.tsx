
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

interface CTASectionProps {
  scrollToContact?: () => void;
}

const CTASection: React.FC<CTASectionProps> = ({ scrollToContact }) => {
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

  return (
    <section className="py-16 bg-gradient-to-r from-dark-800 to-dark-900">
      <div className="container mx-auto px-6">
        <div className="glass-card p-10 rounded-xl text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Vision AI Capabilities?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with us to leverage Percepta's advanced vision intelligence stack for your business needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              onClick={handleContactClick}
              className="px-6 py-6 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium"
            >
              Schedule a Demo
            </Button>
            <Link to="/case-studies">
              <Button variant="outline" className="px-6 py-6 rounded-full border-white/20 hover:bg-dark-700 text-white font-medium">
                View Case Studies
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
