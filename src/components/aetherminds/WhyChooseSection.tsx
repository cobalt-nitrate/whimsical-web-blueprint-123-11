
import React from 'react';
import SectionHeader from '@/components/ui/section-header';
import { CheckCircle } from 'lucide-react';
import SolutionItem from '@/components/ui/solution-item';

interface WhyChooseSectionProps {
  scrollToContact: () => void;
}

const WhyChooseSection: React.FC<WhyChooseSectionProps> = ({
  scrollToContact
}) => {
  const reasons = [
    "Deals with high-dimensional & domain-specific data", 
    "Requires real-time decision-making", 
    "Needs vertical-specific AI models", 
    "Have complex workflows to be accommodated by general agentic solutions"
  ];

  return (
    <section className="py-20 bg-dark-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 -right-20 w-96 h-96 rounded-full bg-teal-500/5 blur-[100px]" />
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <SectionHeader 
          badge="Ideal For" 
          title="Choose Aetherminds If Your Organization" 
          description="Aetherminds is designed for organizations that need AI to go beyond generic solutions and drive business value through custom intelligence." 
          align="center" 
        />
        
        <div className="mt-12 glass-card p-8 rounded-xl backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reasons.map((reason, index) => (
              <div key={index} className="h-full flex">
                <SolutionItem 
                  title={reason}
                  description=""
                  icon={CheckCircle}
                  className="w-full flex-1 h-full"
                />
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <button 
              onClick={scrollToContact} 
              className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
