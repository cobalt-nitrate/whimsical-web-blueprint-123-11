import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SolutionCard from './SolutionCard';
const SolutionsSection = () => {
  return <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Problem Solving
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Optimizing AI Development, Training, and <span className="text-gradient">Deployment Costs</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Problem Overview</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Developing specialized AI models typically requires extensive fine-tuning for each use case, leading to significant expenditures in data collection, annotation, and retraining. Additionally, limited data availability and the absence of in-house AI expertise can hinder progress.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Our Solution</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">Percepta reduces development costs by enabling high-precision AI performance with reduced training data. </p>
            
            <Link to="#contact">
              <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 gap-6">
            <SolutionCard title="Few-Shot & Self-Supervised Learning" description="Achieves high accuracy with minimal labeled data, thereby reducing annotation expenses." />
            <SolutionCard title="Adaptive Fine-Tuning" description="Facilitates dynamic model evolution through continuous learning, minimizing the need for frequent retraining cycles." />
            <SolutionCard title="Efficient Model Compression" description="Decreases computational overhead, leading to lower infrastructure costs." />
            <SolutionCard title="Automated Model Optimization" description="Employs intelligent data selection for training, reducing redundant processing and enhancing efficiency." />
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionsSection;