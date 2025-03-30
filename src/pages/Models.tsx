
import React from 'react';
import PageLayout from '@/components/PageLayout';

const Models = () => {
  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const models = [
    {
      name: "NovaCognition-1",
      description: "Lightweight foundational model with advanced reasoning capabilities",
      capabilities: ["Multi-turn reasoning", "Low computational requirements", "Minimal hallucinations"],
      size: "1.5B parameters"
    },
    {
      name: "NovaVision-2",
      description: "Vision-language model with contextual understanding and reasoning",
      capabilities: ["Image understanding", "Visual reasoning", "Cross-modal integration"],
      size: "2.7B parameters"
    },
    {
      name: "NovaText-3",
      description: "Specialized text processing model for domain-specific applications",
      capabilities: ["Domain adaptation", "Contextual understanding", "Fact verification"],
      size: "3.2B parameters"
    },
    {
      name: "NovaMulti-1",
      description: "Multimodal foundation model with integrated reasoning across modalities",
      capabilities: ["Text, image, audio processing", "Cross-modal reasoning", "Unified representation"],
      size: "4.8B parameters"
    }
  ];
  
  return (
    <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Our Foundation <span className="text-gradient">Models</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Powerful yet lightweight self-learning models with advanced reasoning, multimodal intelligence, and minimal hallucinations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {models.map((model, index) => (
              <div key={index} className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-medium mb-3">{model.name}</h3>
                <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
                  {model.size}
                </div>
                <p className="text-gray-400 mb-4">{model.description}</p>
                
                <h4 className="text-white font-medium mb-3">Key Capabilities</h4>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                  {model.capabilities.map((capability, idx) => (
                    <li key={idx} className="mb-1">{capability}</li>
                  ))}
                </ul>
                
                <div className="aspect-video bg-dark-800 rounded-lg mb-6"></div>
              </div>
            ))}
          </div>
          
          <div className="glass-card p-8 rounded-xl">
            <h2 className="text-2xl font-medium mb-4">Try Our Models</h2>
            <p className="text-gray-400 mb-6">
              Experience the capabilities of our foundation models through our interactive demos and API access
            </p>
            <button 
              onClick={scrollToContact}
              className="px-6 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300"
            >
              Request Access
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Models;
