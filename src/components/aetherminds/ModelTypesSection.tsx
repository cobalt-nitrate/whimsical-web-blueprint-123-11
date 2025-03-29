
import React from 'react';
import SectionHeader from '@/components/ui/section-header';
import GradientCard from '@/components/ui/gradient-card';
import { Check } from 'lucide-react';

const ModelTypesSection = () => {
  const modelTypes = [
    {
      title: "Predictive Models",
      description: "Forecast future trends, risks, and opportunities with high accuracy."
    },
    {
      title: "Prescriptive Models",
      description: "Optimize decision-making by analyzing multiple possible outcomes."
    },
    {
      title: "Generative Models",
      description: "Create structured and unstructured data tailored to specific use cases."
    },
    {
      title: "Causal Models",
      description: "Identify cause-and-effect relationships to improve decision logic."
    },
    {
      title: "Autonomous Agents",
      description: "AI-driven systems with memory and reasoning for automation."
    },
    {
      title: "Hybrid AI Models",
      description: "Combining multiple AI paradigms for superior performance."
    }
  ];

  const validations = [
    "Scientifically validated",
    "Rigorously benchmarked",
    "Fine-tuned for real-world deployment"
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Model Portfolio"
          title="Types of Models We Build"
          description="Aetherminds develops models across multiple AI and ML categories, tailored to specific industry challenges."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {modelTypes.map((model, index) => (
            <GradientCard key={index} hover>
              <h3 className="text-xl font-semibold mb-3 text-white">{model.title}</h3>
              <p className="text-gray-400">{model.description}</p>
            </GradientCard>
          ))}
        </div>
        
        <div className="mt-16 glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-semibold text-center mb-8 text-white">Each Model Is</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {validations.map((validation, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 bg-dark-700/50 rounded-lg">
                <Check className="h-5 w-5 text-teal-400 flex-shrink-0" />
                <span className="text-white">{validation}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ModelTypesSection;
