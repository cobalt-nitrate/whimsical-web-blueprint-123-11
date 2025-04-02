
import React from 'react';
import SectionHeader from '@/components/ui/section-header';

const TechnicalExcellence = () => {
  const features = [
    "Latency under 100ms for real-time applications",
    "Support for 50+ languages and dialects",
    "Edge-optimized models for low-power, on-device processing",
    "Superior accuracy in high-noise environments"
  ];

  return (
    <section className="py-20 px-6 md:px-12 lg:px-24 bg-dark-900">
      <div className="container mx-auto">
        <div className="glass-card p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
                Technical Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry-Leading <span className="text-gradient">Speech & Audio Processing</span>
              </h2>
              <p className="text-gray-400 mb-6">
                Our high-performance AI-driven architecture ensures real-time responsiveness, multilingual accuracy, and scalable deployment.
              </p>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="bg-teal-500/10 p-1 rounded-full mr-3 mt-1">
                      <div className="bg-teal-500 w-2 h-2 rounded-full"></div>
                    </div>
                    <p className="text-gray-300">{feature}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden lg:block">
              <div className="glass-card rounded-xl overflow-hidden aspect-square bg-dark-700 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-teal-500/20 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-teal-500/30 flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full bg-teal-500/50 flex items-center justify-center">
                          <div className="w-6 h-6 rounded-full bg-teal-500"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Sound wave animation */}
                  <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-around">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                      <div 
                        key={i} 
                        className="bg-teal-500/70 w-1 rounded-full"
                        style={{ 
                          height: `${10 + Math.sin(i * 0.8) * 20}px`,
                          animationDelay: `${i * 0.1}s`,
                          animation: 'pulse 1.5s infinite'
                        }}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { height: 10px; }
          50% { height: 30px; }
        }
      `}</style>
    </section>
  );
};

export default TechnicalExcellence;
