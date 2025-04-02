
import React from 'react';
import SectionHeader from '@/components/ui/section-header';
import { ChevronRight } from 'lucide-react';

const TechnicalExcellence = () => {
  const features = [
    {
      title: "Latency under 100ms",
      description: "for real-time applications"
    },
    {
      title: "Support for 50+ languages",
      description: "and dialects"
    },
    {
      title: "Edge-optimized models",
      description: "for low-power, on-device processing"
    },
    {
      title: "Superior accuracy",
      description: "in high-noise environments"
    }
  ];

  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <SectionHeader
          badge="Technical Excellence"
          title={<>Industry-Leading <span className="text-gradient">Speech & Audio Processing</span></>}
          description="Our high-performance AI-driven architecture ensures real-time responsiveness, multilingual accuracy, and scalable deployment."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Audio waveform animation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex items-end space-x-1 h-48 w-48">
                  {[...Array(20)].map((_, i) => (
                    <div 
                      key={i}
                      className="w-1.5 bg-teal-500/80 rounded-full transform-gpu"
                      style={{
                        height: `${Math.sin(i / 2) * 50 + 20}%`,
                        animation: `audio-wave 1.5s ease-in-out infinite ${i * 0.05}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>

              {/* Circular background */}
              <div className="absolute inset-[15%] rounded-full bg-dark-800/50 backdrop-blur-md"></div>
              
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-teal-500/20 animate-pulse"></div>
              <div className="absolute inset-[8%] rounded-full border border-teal-500/30 animate-pulse" style={{animationDelay: '500ms'}}></div>
              <div className="absolute inset-[16%] rounded-full border border-teal-500/40 animate-pulse" style={{animationDelay: '1000ms'}}></div>
            </div>

            <style>
              {`
              @keyframes audio-wave {
                0%, 100% {
                  height: 20%;
                }
                50% {
                  height: 80%;
                }
              }
              `}
            </style>
          </div>

          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-white">Key Technical Features</h3>
            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-teal-500/20 rounded-full p-1">
                    <ChevronRight className="w-4 h-4 text-teal-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white">{feature.title}</h4>
                    <p className="text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalExcellence;
