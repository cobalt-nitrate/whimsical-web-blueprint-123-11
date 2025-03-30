
import React from 'react';
import { ArrowRight, Layers, Shield, Cpu, Brain, Settings, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CapabilityCard from './CapabilityCard';

interface KeyCapabilitiesProps {
  scrollToContact?: () => void;
}

const KeyCapabilities: React.FC<KeyCapabilitiesProps> = ({ scrollToContact }) => {
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
    <section id="keycapabilities" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Enterprise-Grade
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Key <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Lexora provides a comprehensive suite of language model capabilities tailored for enterprise needs, with a focus on security, efficiency, and customization.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <CapabilityCard 
            title="Domain-Specific Models"
            description="Pre-trained models optimized for specific industries like healthcare, finance, legal, and technical domains."
            Icon={Layers}
          />
          
          <CapabilityCard 
            title="Secure On-Premise Deployment"
            description="Deploy models within your infrastructure, ensuring data never leaves your environment."
            Icon={Shield}
          />
          
          <CapabilityCard 
            title="Low Computational Overhead"
            description="Efficient architecture requiring minimal hardware resources while maintaining high performance."
            Icon={Cpu}
          />
          
          <CapabilityCard 
            title="Advanced Reasoning"
            description="Enhanced logical reasoning capabilities for complex problem-solving and decision support."
            Icon={Brain}
          />
          
          <CapabilityCard 
            title="Customization Framework"
            description="Tools for fine-tuning and adapting models to your specific organizational needs and terminology."
            Icon={Settings}
          />
          
          <CapabilityCard 
            title="Enterprise Integration"
            description="Seamless integration with existing workflows, databases, and enterprise systems."
            Icon={Link}
          />
        </div>
        
        <div className="text-center">
          <Button 
            onClick={handleContactClick}
            className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium"
          >
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default KeyCapabilities;
