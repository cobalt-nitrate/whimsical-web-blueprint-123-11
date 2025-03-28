
import React from 'react';
import { BrainCircuit, Layers, LineChart, Cpu, Workflow, Package } from 'lucide-react';
import CapabilityCard from './CapabilityCard';

const CoreCapabilities = () => {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Core Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Advanced Vision Intelligence <span className="text-gradient">Capabilities</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Percepta integrates cutting-edge AI architectures and learning paradigms to deliver exceptional results across domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <CapabilityCard 
            icon={<BrainCircuit className="w-10 h-10 text-teal-500" />}
            title="Hybrid Vision-Language Models"
            description="Enable context-aware scene interpretation and event-driven intelligence by merging deep learning techniques with neuro-symbolic reasoning."
          />
          <CapabilityCard 
            icon={<Layers className="w-10 h-10 text-teal-500" />}
            title="Multimodal Architecture"
            description="Supports diverse inputs, including images, videos, text, and audio clips, facilitating comprehensive analysis."
          />
          <CapabilityCard 
            icon={<LineChart className="w-10 h-10 text-teal-500" />}
            title="Self-Improving System"
            description="Utilizes reinforcement learning to optimize model routing and performance continually."
          />
          <CapabilityCard 
            icon={<Cpu className="w-10 h-10 text-teal-500" />}
            title="Task-Specific Computer Vision"
            description="Delivers high-precision outcomes in segmentation, detection, tracking, and 3D reconstruction tasks."
          />
          <CapabilityCard 
            icon={<Workflow className="w-10 h-10 text-teal-500" />}
            title="Dynamic Scene Understanding"
            description="Combines high-level contextual awareness with pixel-precise vision to perform tasks like segmentation, detection, and depth estimation."
          />
          <CapabilityCard 
            icon={<Package className="w-10 h-10 text-teal-500" />}
            title="Cross-Modal Reasoning"
            description="Aligns vision, language, and structured data to facilitate deeper contextual learning and decision-making across diverse tasks."
          />
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
