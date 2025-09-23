import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, ChevronRight, Server, Database, Layers, Headphones, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

const InfrastructureSection = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  const infrastructureServices = [
    {
      icon: <Server className="h-6 w-6" />,
      title: "Foundational Compute",
      description: "GPU/CPU clusters, hybrid & edge options",
      details: [
        "High-performance GPU clusters for AI training and inference",
        "Hybrid cloud-edge architecture for latency-sensitive applications",
        "Scalable CPU resources for data preprocessing and analysis",
        "Custom hardware configurations for specific medical workflows"
      ]
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data & Storage Layer",
      description: "High-speed training storage, archival vaults",
      details: [
        "DICOM-compliant storage systems with automated indexing",
        "High-speed NVMe storage for real-time AI training",
        "Long-term archival systems with instant retrieval capabilities",
        "Secure patient data management with audit trails"
      ]
    },
    {
      icon: <Layers className="h-6 w-6" />,
      title: "Software & Platform",
      description: "Pre-installed ML stacks, MLOps pipelines",
      details: [
        "Complete MLOps pipeline with automated model deployment",
        "Pre-configured deep learning frameworks (TensorFlow, PyTorch)",
        "Custom model versioning and experiment tracking",
        "Integrated development environments for medical AI"
      ]
    },
    {
      icon: <Headphones className="h-6 w-6" />,
      title: "Professional Services",
      description: "Planning, deployment, 24/7 managed ops",
      details: [
        "Strategic consultation for AI infrastructure planning",
        "Dedicated deployment teams with healthcare expertise",
        "24/7 monitoring and support for critical medical systems",
        "Training and knowledge transfer for internal teams"
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Security & Compliance",
      description: "HIPAA, FERPA, GDPR pre-certified",
      details: [
        "HIPAA-compliant infrastructure with BAA agreements",
        "GDPR-ready data processing and storage systems",
        "SOC 2 Type II certified security controls",
        "Regular security audits and penetration testing"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Infrastructure Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Infrastructure & <span className="text-gradient bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">Compute Solutions</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            For universities and hospitals needing internal AI labs with enterprise-grade infrastructure.
          </p>
        </div>

        {/* Desktop: Tabbed Interface */}
        <div className="hidden md:block max-w-6xl mx-auto">
          <div className="glass-card rounded-lg overflow-hidden">
            {/* Tab Headers */}
            <div className="flex border-b border-gray-700/50">
              {infrastructureServices.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex-1 p-4 text-left transition-all duration-300 ${
                    activeTab === index 
                      ? 'bg-teal-500/10 border-b-2 border-teal-500 text-teal-400' 
                      : 'text-gray-400 hover:text-gray-300 hover:bg-dark-700/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`transition-colors duration-300 ${
                      activeTab === index ? 'text-teal-400' : 'text-gray-500'
                    }`}>
                      {service.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-sm">{service.title}</div>
                      <div className="text-xs opacity-80">{service.description}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="p-8">
              <div className="animate-fade-in">
                <h3 className="text-xl font-semibold text-white mb-4">
                  {infrastructureServices[activeTab].title}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {infrastructureServices[activeTab].details.map((detail, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-dark-700/30 rounded-lg">
                      <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                      <p className="text-gray-300 text-sm">{detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile: Accordion Interface */}
        <div className="md:hidden space-y-4">
          {infrastructureServices.map((service, index) => (
            <div key={index} className="glass-card rounded-lg overflow-hidden">
              <button
                onClick={() => setActiveTab(activeTab === index ? -1 : index)}
                className="w-full p-4 text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="text-teal-400">
                    {service.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{service.title}</div>
                    <div className="text-sm text-gray-400">{service.description}</div>
                  </div>
                </div>
                <div className={`transition-transform duration-300 ${
                  activeTab === index ? 'rotate-180' : ''
                }`}>
                  <ChevronDown className="h-5 w-5 text-gray-400" />
                </div>
              </button>

              {activeTab === index && (
                <div className="px-4 pb-4 animate-fade-in">
                  <div className="space-y-3">
                    {service.details.map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-3 p-3 bg-dark-700/30 rounded-lg">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm">{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="px-6 py-3 rounded-full border-teal-500/50 text-teal-400 hover:bg-teal-500/10 hover:border-teal-400 transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="mr-2 h-4 w-4" />
            Explore Infrastructure Solutions
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureSection;