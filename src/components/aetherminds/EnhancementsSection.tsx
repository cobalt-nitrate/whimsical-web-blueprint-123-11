
import React from 'react';
import SectionHeader from '@/components/ui/section-header';

const EnhancementsSection = () => {
  const enhancements = [
    {
      limitation: "Memory Limitations (Forgetting long-term context)",
      solution: "Memory-augmented AI architectures",
      performance: "Enables context persistence beyond 100k tokens"
    },
    {
      limitation: "Weak Reasoning (Fails at multi-step logic)",
      solution: "Hybrid models combining rule-based logic with deep learning",
      performance: "Improves multi-step reasoning accuracy by 40%"
    },
    {
      limitation: "Low Reliability in Decision-Making",
      solution: "Reinforcement learning & constraint-based decision systems",
      performance: "Reduces incorrect decisions by >30%"
    },
    {
      limitation: "Inability to Handle Real-Time Data",
      solution: "Specialized real-time inference models",
      performance: "< 100ms latency in decision-making tasks"
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
        
        <div className="overflow-x-auto mt-12">
          <table className="min-w-full bg-dark-700/50 rounded-xl overflow-hidden">
            <thead>
              <tr className="border-b border-white/10">
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-300">Limitation in Standard AI Agents</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-purple-400">Aetherminds' Solution</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-teal-500">Expected Performance Boost</th>
              </tr>
            </thead>
            <tbody>
              {enhancements.map((item, index) => (
                <tr key={index} className={index < enhancements.length - 1 ? "border-b border-white/5" : ""}>
                  <td className="px-6 py-4 text-sm text-gray-300">{item.limitation}</td>
                  <td className="px-6 py-4 text-sm text-purple-400">{item.solution}</td>
                  <td className="px-6 py-4 text-sm text-teal-500">{item.performance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default EnhancementsSection;
