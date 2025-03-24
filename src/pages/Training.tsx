
import React from 'react';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const Training = () => {
  return (
    <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Production-Grade <span className="text-gradient">Training & Deployment</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Optimized training pipelines and seamless deployment with scalability, low latency inference, and secure integration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            <div>
              <div className="glass-card p-8 rounded-xl h-full">
                <h2 className="text-2xl font-medium mb-4">Training Infrastructure</h2>
                <p className="text-gray-400 mb-6">
                  Our optimized training architecture enables efficient model development with reduced computational requirements
                </p>
                <div className="aspect-video bg-dark-800 rounded-lg mb-6"></div>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                  <li className="mb-2">Distributed training across heterogeneous hardware</li>
                  <li className="mb-2">Automated hyperparameter optimization</li>
                  <li className="mb-2">Data pipeline management and preprocessing</li>
                  <li className="mb-2">Training progress monitoring and visualization</li>
                </ul>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div>
              <div className="glass-card p-8 rounded-xl h-full">
                <h2 className="text-2xl font-medium mb-4">Deployment Solutions</h2>
                <p className="text-gray-400 mb-6">
                  Deploy models anywhere with our flexible and secure deployment framework
                </p>
                <div className="aspect-video bg-dark-800 rounded-lg mb-6"></div>
                <ul className="list-disc list-inside text-gray-400 mb-6">
                  <li className="mb-2">On-premise, cloud, and edge deployments</li>
                  <li className="mb-2">Low-latency inference optimization</li>
                  <li className="mb-2">Horizontal scaling for high-throughput applications</li>
                  <li className="mb-2">Containerized deployment with Kubernetes integration</li>
                </ul>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="glass-card p-8 rounded-xl mb-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1">
                <h2 className="text-2xl font-medium mb-4">Integration & APIs</h2>
                <p className="text-gray-400 mb-6">
                  Seamlessly integrate our models into your existing systems with our comprehensive API suite
                </p>
                <button className="inline-flex items-center text-teal-500 hover:text-teal-400">
                  API Documentation <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
              <div className="col-span-2 bg-dark-800 rounded-lg aspect-video"></div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="px-8 py-3 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium transition-all duration-300">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Training;
