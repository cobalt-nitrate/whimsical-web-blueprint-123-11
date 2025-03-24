
import React from 'react';
import { ArrowRight, Code } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const FineTuning = () => {
  const domainCards = [
    {
      domain: "Healthcare",
      description: "Specialized AI for medical diagnosis, treatment recommendation, and healthcare operations",
      capabilities: ["Medical image analysis", "Clinical text processing", "Patient outcome prediction"]
    },
    {
      domain: "Finance",
      description: "Domain-specific intelligence for financial analysis, risk management, and fraud detection",
      capabilities: ["Market prediction", "Risk assessment", "Transaction monitoring"]
    },
    {
      domain: "Legal",
      description: "AI systems adapted to legal document analysis, case research, and compliance monitoring",
      capabilities: ["Contract analysis", "Legal research", "Compliance verification"]
    },
    {
      domain: "Manufacturing",
      description: "Tailored AI for production optimization, quality control, and predictive maintenance",
      capabilities: ["Defect detection", "Process optimization", "Equipment failure prediction"]
    }
  ];
  
  return (
    <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Adaptive Domain <span className="text-gradient">Intelligence & Fine-Tuning</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              AI that adapts to your specific domain use-cases, optimizing accuracy, efficiency, and contextual intelligence
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-medium mb-4">Fine-Tuning Technology</h2>
                <p className="text-gray-400 mb-6">
                  Our advanced fine-tuning approaches enable rapid adaptation of foundation models to specialized domains with minimal data
                </p>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                  <li className="mb-2">Parameter-efficient fine-tuning techniques</li>
                  <li className="mb-2">Few-shot and zero-shot learning capabilities</li>
                  <li className="mb-2">Domain-specific knowledge integration</li>
                  <li className="mb-2">Continuous learning with feedback loops</li>
                </ul>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  Technical Documentation <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="bg-dark-800 rounded-lg aspect-video"></div>
            </div>
          </div>

          <h2 className="text-2xl font-medium mb-6">Domain-Specific Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {domainCards.map((card, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-medium mb-2">{card.domain}</h3>
                <p className="text-gray-400 mb-4">{card.description}</p>
                <h4 className="text-white text-sm font-medium mb-2">Key Capabilities</h4>
                <ul className="list-disc list-inside text-gray-400 mb-4">
                  {card.capabilities.map((capability, idx) => (
                    <li key={idx} className="mb-1">{capability}</li>
                  ))}
                </ul>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  Case Studies <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <h2 className="text-2xl font-medium mb-4">Fine-Tuning API</h2>
                <p className="text-gray-400 mb-6">
                  Access our fine-tuning capabilities programmatically through our comprehensive API
                </p>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  <Code className="mr-2 h-5 w-5" />
                  API Reference
                </button>
              </div>
              <div className="col-span-2 bg-dark-800 rounded-lg aspect-video"></div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default FineTuning;
