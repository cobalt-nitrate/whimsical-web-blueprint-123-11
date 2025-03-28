
import React from 'react';
import { Brain, Search, Zap, Bot } from 'lucide-react';

const AIToolkit = () => {
  const tools = [
    {
      title: 'RAG',
      subtitle: 'Retrieval-Augmented Generation',
      description: 'Fact-based responses with real-time knowledge retrieval.',
      icon: Brain
    },
    {
      title: 'NER',
      subtitle: 'Named Entity Recognition',
      description: 'Identify and categorize key entities in your data.',
      icon: Search
    },
    {
      title: 'Search',
      subtitle: 'AI-powered search',
      description: 'Advanced search with semantic understanding.',
      icon: Zap
    },
    {
      title: 'Agents',
      subtitle: 'Intelligent automation',
      description: 'Automated workflows and decision-making.',
      icon: Bot
    }
  ];

  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Our Core AI ToolKit
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Modular AI for Seamless Integration
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lexora provides powerful AI-driven microservices for your enterprise needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <div key={index} className="glass-card glass-card-hover p-6 rounded-xl">
              <div className="bg-teal-500/10 w-12 h-12 flex items-center justify-center rounded-lg mb-4">
                <tool.icon className="h-6 w-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{tool.title}</h3>
              <p className="text-gray-400 text-sm mb-1">{tool.subtitle}</p>
              <p className="text-gray-500 text-sm">{tool.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolkit;
