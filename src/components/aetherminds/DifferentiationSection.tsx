
import React from 'react';
import SectionHeader from '@/components/ui/section-header';
import { Check, X } from 'lucide-react';

const DifferentiationSection = () => {
  const differentiators = [
    {
      aspect: "Custom-Built AI Models",
      aetherminds: true,
      generic: false
    },
    {
      aspect: "Focus on High-Stakes AI Applications",
      aetherminds: true,
      generic: false
    },
    {
      aspect: "Scientific & Research-Driven Approach",
      aetherminds: true,
      generic: false
    },
    {
      aspect: "Advanced AI for Agents & Decision-Making",
      aetherminds: true,
      generic: false
    },
    {
      aspect: "Performance Benchmarking & Validation",
      aetherminds: true,
      generic: false
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Clear Differentiation"
          title="Why Aetherminds?"
          description="See how our approach to AI differs from generic solutions available in the market."
          align="center"
        />
        
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="glass-card p-6 rounded-xl overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left text-sm font-medium text-gray-300">Aspect</th>
                  <th className="py-4 px-6 text-left text-sm font-medium text-purple-400">Aetherminds</th>
                  <th className="py-4 px-6 text-left text-sm font-medium text-gray-400">Generic AI Solutions</th>
                </tr>
              </thead>
              <tbody>
                {differentiators.map((item, index) => (
                  <tr key={index} className={index < differentiators.length - 1 ? "border-b border-white/5" : ""}>
                    <td className="py-4 px-6 text-sm text-white">{item.aspect}</td>
                    <td className="py-4 px-6">
                      {item.aetherminds ? (
                        <Check className="h-5 w-5 text-purple-400" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500" />
                      )}
                    </td>
                    <td className="py-4 px-6">
                      {item.generic ? (
                        <Check className="h-5 w-5 text-gray-400" />
                      ) : (
                        <X className="h-5 w-5 text-gray-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
