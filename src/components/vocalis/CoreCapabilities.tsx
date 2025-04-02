
import React from 'react';
import { Mic, Volume, Headphones, Volume2 } from 'lucide-react';
import SectionHeader from '@/components/ui/section-header';

const CoreCapabilities = () => {
  const capabilities = [
    {
      title: "Real-Time Speech Recognition",
      description: "High-precision, low-latency ASR models with multilingual support. Adaptive learning for speaker variation and background noise resilience.",
      icon: <Mic className="h-8 w-8 text-teal-500" />
    },
    {
      title: "Audio Classification",
      description: "AI-driven models for sound event detection and contextual understanding. Scalable processing for media monitoring, security, and industrial applications.",
      icon: <Volume className="h-8 w-8 text-teal-500" />
    },
    {
      title: "Voice Authentication & Security",
      description: "Secure, biometric-based speaker verification with fraud detection. Advanced deep learning models for robust authentication systems.",
      icon: <Headphones className="h-8 w-8 text-teal-500" />
    },
    {
      title: "AI-Powered Noise Reduction",
      description: "Adaptive filtering for dynamic background noise suppression. Optimized for call centers, healthcare dictation, and live communication.",
      icon: <Volume2 className="h-8 w-8 text-teal-500" />
    }
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-dark-800">
      <div className="container mx-auto">
        <SectionHeader 
          badge="Core Capabilities"
          title={<>Advanced <span className="text-gradient">AI-Powered Audio Intelligence</span></>}
          description="Our state-of-the-art speech and audio processing technologies optimise real-time communication, security, and accessibility across diverse environments."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl transition-transform duration-300 hover:translate-y-[-5px]"
            >
              <div className="mb-6">{capability.icon}</div>
              <h3 className="text-xl font-semibold mb-4">{capability.title}</h3>
              <p className="text-gray-400">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreCapabilities;
