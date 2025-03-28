
import React from 'react';
import { Shield, Zap, BarChart } from 'lucide-react';

interface OnPremiseDeploymentProps {
  scrollToContact: () => void;
}

const OnPremiseDeployment: React.FC<OnPremiseDeploymentProps> = ({ scrollToContact }) => {
  const benefits = [
    {
      title: 'Enterprise Data Control',
      description: 'Keep sensitive data within your infrastructure.',
      icon: Shield
    },
    {
      title: 'Lower Latency',
      description: 'AI processing happens on-site, reducing response times.',
      icon: Zap
    },
    {
      title: 'Cost-Efficient Scaling',
      description: 'No reliance on expensive cloud computing.',
      icon: BarChart
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            On-Premise Deployment & Edge AI
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Deploy AI Anywhere – From Cloud to Edge
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Lexora is designed for seamless on-premise deployment, ensuring data security and performance optimization. 
            Its lightweight architecture allows deployment even on edge devices with just 32GB RAM, making it ideal for 
            environments with limited computing resources.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <div key={index} className="glass-card glass-card-hover p-6 rounded-xl">
                <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                  <BenefitIcon className="h-6 w-6 text-teal-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <button onClick={scrollToContact} className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300">
            Learn About Offline Deployment
          </button>
        </div>
      </div>
    </section>
  );
};

export default OnPremiseDeployment;
