
import React from 'react';
import { ArrowRight, BarChart } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const Evaluations = () => {
  const benchmarks = [
    {
      name: "NovaReason",
      description: "Multi-step reasoning and problem-solving benchmark",
      metrics: ["Logical consistency", "Step-by-step reasoning", "Solution accuracy"]
    },
    {
      name: "NovaFact",
      description: "Factual accuracy and knowledge retrieval evaluation",
      metrics: ["Factual correctness", "Citation quality", "Knowledge breadth"]
    },
    {
      name: "NovaMultimodal",
      description: "Cross-modal understanding and reasoning benchmark",
      metrics: ["Vision-language alignment", "Audio-text comprehension", "Multimodal reasoning"]
    },
    {
      name: "NovaAdapt",
      description: "Domain adaptation and transfer learning evaluation",
      metrics: ["Domain transfer efficiency", "Few-shot learning", "Adaptation stability"]
    }
  ];
  
  return (
    <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Research Backed <span className="text-gradient">Model Evaluations</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Rigorous model evaluation with research-backed and configurable benchmarks, across custom datasets and modalities
            </p>
          </div>

          <div className="glass-card p-8 rounded-xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-medium mb-4">Evaluation Framework</h2>
                <p className="text-gray-400 mb-6">
                  Our comprehensive evaluation framework ensures that models meet the highest standards of performance, reliability, and safety
                </p>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  Framework Documentation <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="bg-dark-800 rounded-lg aspect-video"></div>
            </div>
          </div>

          <h2 className="text-2xl font-medium mb-6">Benchmark Suites</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {benchmarks.map((benchmark, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="mb-4">
                  <BarChart className="h-8 w-8 text-teal-500" />
                </div>
                <h3 className="text-xl font-medium mb-2">{benchmark.name}</h3>
                <p className="text-gray-400 mb-4">{benchmark.description}</p>
                <h4 className="text-white text-sm font-medium mb-2">Key Metrics</h4>
                <ul className="list-disc list-inside text-gray-400 mb-4">
                  {benchmark.metrics.map((metric, idx) => (
                    <li key={idx} className="mb-1">{metric}</li>
                  ))}
                </ul>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  View Results <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-medium mb-4">Custom Evaluations</h2>
            <p className="text-gray-400 mb-6">
              Need specific evaluations for your use case? We offer custom evaluation services tailored to your requirements
            </p>
            <button className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300">
              Request Custom Evaluation
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Evaluations;
