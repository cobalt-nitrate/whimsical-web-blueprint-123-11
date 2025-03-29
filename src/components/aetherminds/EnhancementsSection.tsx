
import React from 'react';
import SectionHeader from '@/components/ui/section-header';
import { Brain, BarChart3, ClockIcon, FastForward } from 'lucide-react';

const EnhancementsSection = () => {
  const enhancements = [
    {
      limitation: "Memory Limitations (Forgetting long-term context)",
      solution: "Memory-augmented AI architectures",
      performance: "Enables context persistence beyond 100k tokens",
      icon: <Brain className="w-10 h-10 text-teal-500" />,
    },
    {
      limitation: "Weak Reasoning (Fails at multi-step logic)",
      solution: "Hybrid models combining rule-based logic with deep learning",
      performance: "Improves multi-step reasoning accuracy by 40%",
      icon: <BarChart3 className="w-10 h-10 text-teal-500" />,
    },
    {
      limitation: "Low Reliability in Decision-Making",
      solution: "Reinforcement learning & constraint-based decision systems",
      performance: "Reduces incorrect decisions by >30%",
      icon: <ClockIcon className="w-10 h-10 text-teal-500" />,
    },
    {
      limitation: "Inability to Handle Real-Time Data",
      solution: "Specialized real-time inference models",
      performance: "< 100ms latency in decision-making tasks",
      icon: <FastForward className="w-10 h-10 text-teal-500" />,
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Technical Advancements"
          title="Key Enhancements to AI Agents"
          description="How Aetherminds solves the limitations of standard AI solutions to deliver superior performance."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          {enhancements.map((item, index) => (
            <div key={index} className="glass-card p-6 rounded-lg">
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-teal-400">{item.solution}</h3>
                <p className="text-gray-400 mb-3">
                  <span className="text-white font-semibold">Problem:</span> {item.limitation}
                </p>
                <div className="mt-auto">
                  <div className="bg-dark-700 rounded-lg p-3">
                    <p className="text-teal-500 font-semibold">Performance Boost:</p>
                    <p className="text-white">{item.performance}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnhancementsSection;
