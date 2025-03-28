
import React from 'react';

interface WhyChooseLexoraProps {
  scrollToContact: () => void;
}

const WhyChooseLexora: React.FC<WhyChooseLexoraProps> = ({ scrollToContact }) => {
  const stats = [
    {
      metric: '3X',
      description: 'Faster AI Deployment: Pre-trained models reduce engineering overhead.'
    },
    {
      metric: '70%',
      description: 'Cost Reduction: Optimized AI architecture lowers operational expenses.'
    },
    {
      metric: '100%',
      description: 'Enterprise-Grade Security: Built-in compliance for regulated industries.'
    },
    {
      metric: '10X',
      description: 'Greater Context Utilization: Surpasses traditional AI models in memory retention.'
    },
    {
      metric: '85%',
      description: 'Reduced Error Rates: Step-by-step validation ensures accuracy.'
    }
  ];

  const hallucinations = [
    {
      title: 'Multi-Step Validation',
      description: 'AI cross-checks responses before output.'
    },
    {
      title: 'Live Knowledge Retrieval',
      description: 'Combines real-time data with static memory.'
    },
    {
      title: 'Adaptive AI Tuning',
      description: 'Context dynamically refines responses.'
    },
    {
      title: 'Confidence-Based Outputs',
      description: 'Uncertain responses flagged for human oversight.'
    }
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Why Choose Lexora?
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Transformative AI for Business Efficiency
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="glass-card p-6 rounded-xl text-center">
              <div className="text-3xl font-bold text-teal-500 mb-2">{stat.metric}</div>
              <p className="text-gray-400 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
        
        <div className="glass-card p-8 rounded-xl mb-16">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">
              Tackling AI Hallucinations - A Core Lexora Advantage
            </h3>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Ensuring AI Reliability with Advanced Hallucination Prevention
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {hallucinations.map((feature, index) => (
              <div key={index} className="p-5 rounded-lg bg-dark-600">
                <h4 className="font-medium text-white mb-2">{feature.title}</h4>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="glass-card p-8 rounded-xl">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold mb-4">
              Our Proprietary LLM: Built for Real-World Impact
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <ul className="space-y-4">
                {['Fine-Tuned for Industry-Specific Precision', 'Curated Datasets for Maximum Accuracy', 'High Performance at a Fraction of the Cost', 'Enterprise-Ready Security & Compliance'].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-teal-500 mr-2">✔</span>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">
                Why Lightweight LLMs Over Generalized LLMs?
              </h4>
              <p className="text-gray-400 mb-4">
                "Faster, Cheaper, and More Accurate for Business Needs"
              </p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="py-2 text-left text-gray-400">Feature</th>
                      <th className="py-2 text-left text-teal-500">Lexora's Lightweight LLM</th>
                      <th className="py-2 text-left text-gray-400">Generalized LLMs</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="py-3 text-left text-gray-300">Speed</td>
                      <td className="py-3 text-left text-teal-500">5-10X Faster</td>
                      <td className="py-3 text-left text-gray-400">Slower due to high compute requirements</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left text-gray-300">Cost Efficiency</td>
                      <td className="py-3 text-left text-teal-500">Lower infrastructure costs</td>
                      <td className="py-3 text-left text-gray-400">Expensive to deploy & maintain</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left text-gray-300">Precision</td>
                      <td className="py-3 text-left text-teal-500">Tailored for specific industries</td>
                      <td className="py-3 text-left text-gray-400">General-purpose, lacks depth</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left text-gray-300">Context Awareness</td>
                      <td className="py-3 text-left text-teal-500">Long-form contextual memory</td>
                      <td className="py-3 text-left text-gray-400">Shorter context limits</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-left text-gray-300">Customization</td>
                      <td className="py-3 text-left text-teal-500">Fine-tuned for specific business needs</td>
                      <td className="py-3 text-left text-gray-400">Requires significant adaptation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <p className="text-gray-300 mt-4">
                Lexora gives enterprises a clear AI advantage: faster deployment, lower costs, and higher domain-specific precision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLexora;
