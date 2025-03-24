
import React from 'react';
import { ArrowRight, Search, Code, BarChart, Image, FileText } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const AIToolkit = () => {
  const tools = [
    {
      name: "Neural Text Analyzer",
      description: "Advanced text analysis for sentiment, entities, and relationships",
      icon: <FileText className="h-8 w-8 text-teal-500" />,
      tags: ["NLP", "Text Analytics"]
    },
    {
      name: "Vision Recognition Suite",
      description: "Object detection and scene understanding for images and video",
      icon: <Image className="h-8 w-8 text-teal-500" />,
      tags: ["Computer Vision", "Object Detection"]
    },
    {
      name: "Code Assistant",
      description: "AI-powered code generation and refactoring tools",
      icon: <Code className="h-8 w-8 text-teal-500" />,
      tags: ["Code Generation", "Developer Tools"]
    },
    {
      name: "Predictive Analytics Engine",
      description: "Time-series analysis and predictive modeling for business data",
      icon: <BarChart className="h-8 w-8 text-teal-500" />,
      tags: ["Forecasting", "Data Science"]
    },
    {
      name: "Document Intelligence",
      description: "Extract, organize, and analyze information from documents",
      icon: <FileText className="h-8 w-8 text-teal-500" />,
      tags: ["OCR", "Document Processing"]
    },
    {
      name: "Image Generation Studio",
      description: "Create custom images from text descriptions",
      icon: <Image className="h-8 w-8 text-teal-500" />,
      tags: ["Generative AI", "Graphics"]
    }
  ];
  
  return (
    <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Enterprise-Grade <span className="text-gradient">AI Solutions</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Discover our comprehensive suite of AI tools and frameworks designed for enterprise deployment
            </p>
            
            <div className="relative max-w-2xl mx-auto mb-12">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search for AI tools..." 
                className="w-full pl-10 pr-4 py-3 bg-dark-800 border border-white/10 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal-500/50 transition-all"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="glass-card p-6 rounded-xl">
                <div className="mb-4">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-medium mb-2">{tool.name}</h3>
                <p className="text-gray-400 mb-4">{tool.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {tool.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-dark-700 text-teal-500 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default AIToolkit;
