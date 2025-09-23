import React, { useRef, useEffect } from 'react';
import { Zap, Layers, Settings, Cpu, Shield } from 'lucide-react';
const HowWeBuildSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  const differentiators = [{
    icon: <Zap className="h-6 w-6" />,
    title: "Research-Backed, Deployed Fast",
    description: "Transform lab breakthroughs into production-ready systems in months, not years."
  }, {
    icon: <Layers className="h-6 w-6" />,
    title: "Multimodal by Default",
    description: "Seamlessly integrate vision, language, and sensor data for comprehensive healthcare AI."
  }, {
    icon: <Settings className="h-6 w-6" />,
    title: "Custom Workflows, No-Code Setups",
    description: "Adapt to existing clinical processes without requiring technical expertise from staff."
  }, {
    icon: <Cpu className="h-6 w-6" />,
    title: "Edge-Ready & Hardware-Agnostic",
    description: "Deploy on existing hospital infrastructure or dedicated edge computing systems."
  }, {
    icon: <Shield className="h-6 w-6" />,
    title: "Privacy-First, HIPAA/GDPR Compliant",
    description: "Built-in compliance framework ensuring patient data protection and regulatory adherence."
  }];
  return <section ref={sectionRef} className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Our Methodology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            How We <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Build</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our methodology and trust factors that differentiate us in the healthcare AI landscape.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {differentiators.map((item, index) => {})}
          </div>

          {/* Process Flow Visualization */}
          <div className="mt-16 glass-card p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-center mb-8 text-white">
              From Concept to Clinical Deployment
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[{
              step: "01",
              title: "Research Integration",
              desc: "Identify breakthrough research"
            }, {
              step: "02",
              title: "Clinical Validation",
              desc: "Partner with healthcare institutions"
            }, {
              step: "03",
              title: "Compliance Engineering",
              desc: "Build regulatory framework"
            }, {
              step: "04",
              title: "Production Deployment",
              desc: "Scale to clinical workflows"
            }].map((phase, index) => <div key={index} className="text-center relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-sm">
                    {phase.step}
                  </div>
                  <h4 className="text-sm font-semibold text-white mb-2">{phase.title}</h4>
                  <p className="text-xs text-gray-400">{phase.desc}</p>
                  
                  {/* Connecting arrow */}
                  {index < 3 && <div className="hidden md:block absolute top-6 left-full w-full">
                      <div className="h-0.5 bg-gradient-to-r from-teal-500/50 to-blue-500/50 transform -translate-x-6">
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                          <div className="w-0 h-0 border-l-4 border-l-blue-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                        </div>
                      </div>
                    </div>}
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default HowWeBuildSection;