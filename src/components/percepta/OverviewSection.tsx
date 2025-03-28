
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const OverviewSection = () => {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
              Architecture
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Hybrid Vision Architecture with <span className="text-gradient">Intelligent Reasoning</span>
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Percepta introduces a hybrid vision architecture that seamlessly combines deep learning with reasoning capabilities. By integrating large vision-language models with specialized vision models, Percepta intelligently activates specific model components based on task requirements through dynamic routing mechanisms.
            </p>
            <Link to="#contact">
              <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium">
                Partner With Us <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          <div className="glass-card p-6 rounded-lg aspect-video bg-dark-700 flex items-center justify-center overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">Percepta Architecture</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
