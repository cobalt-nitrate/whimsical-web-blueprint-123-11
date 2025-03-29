
import React from 'react';
import SectionHeader from '@/components/ui/section-header';
import { Brain, BarChart3, ClockIcon, FastForward } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

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
        
        <div className="mt-12 glass-card p-6 rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-dark-700 border-b border-dark-600">
                <TableHead className="text-white font-semibold">Limitation in Standard AI Agents</TableHead>
                <TableHead className="text-white font-semibold">Aetherminds' Solution</TableHead>
                <TableHead className="text-white font-semibold">Expected Performance Boost</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {enhancements.map((item, index) => (
                <TableRow key={index} className="border-b border-dark-600">
                  <TableCell className="text-white">{item.limitation}</TableCell>
                  <TableCell className="text-teal-400 font-medium">{item.solution}</TableCell>
                  <TableCell className="text-gray-300">{item.performance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default EnhancementsSection;
