
import React from 'react';
import SectionHeader from '@/components/ui/section-header';
import { Database, Layers, Rocket, Activity } from 'lucide-react';
import FeatureCard from '@/components/ui/feature-card';

const CapabilitiesSection = () => {
  const capabilities = [
    {
      icon: <Database className="h-10 w-10 text-purple-400" />,
      title: "Custom AI Models",
      description: "From predictive to prescriptive AI tailored for your specific industry challenges and data."
    },
    {
      icon: <Activity className="h-10 w-10 text-purple-400" />,
      title: "Real-Time Decision AI",
      description: "Adaptive, high-stakes automation systems that operate with millisecond latency for critical applications."
    },
    {
      icon: <Rocket className="h-10 w-10 text-purple-400" />,
      title: "AI Agents",
      description: "Enhanced memory, reasoning & decision-making capabilities beyond what generic models can provide."
    },
    {
      icon: <Layers className="h-10 w-10 text-purple-400" />,
      title: "Research-Driven AI",
      description: "Domain-specific models with measurable impact, backed by rigorous scientific validation."
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Offerings & Capabilities"
          title="What We Build"
          description="Aetherminds engineers precision AI solutions for organizations where standard AI approaches fall short."
          align="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {capabilities.map((capability, index) => (
            <FeatureCard
              key={index}
              icon={capability.icon}
              title={capability.title}
              description={capability.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
