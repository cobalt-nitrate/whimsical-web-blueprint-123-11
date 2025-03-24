
import React from 'react';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const Enterprises = () => {
  return (
    <PageLayout>
      <div className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-medium mb-6">
              Enterprise <span className="text-gradient">Solutions</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-8">
              Tailored AI solutions for enterprise-scale implementations and transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="glass-card p-6 rounded-xl">
                <div className="h-40 bg-dark-800 rounded-lg mb-4"></div>
                <h3 className="text-xl font-medium mb-2">Enterprise Solution {item}</h3>
                <p className="text-gray-400 mb-4">Custom AI solutions for your specific business needs.</p>
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

export default Enterprises;
