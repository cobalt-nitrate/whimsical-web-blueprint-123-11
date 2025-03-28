
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import SolutionCard from './SolutionCard';

const AdaptabilitySection = () => {
  return (
    <section className="py-20 bg-dark-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Scalability
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Adaptability and <span className="text-gradient">Scalability</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="order-2 lg:order-1 grid grid-cols-1 gap-6">
            <SolutionCard 
              title="Dynamic Scene Understanding"
              description="Combines high-level contextual awareness with pixel-precise vision to perform tasks like segmentation, detection, and depth estimation."
            />
            <SolutionCard 
              title="Federated & Self-Learning AI"
              description="Adapts to new environments by learning from distributed data sources without centralization, thereby improving accuracy over time."
            />
            <SolutionCard 
              title="Efficient Domain Adaptation"
              description="Utilizes Low-Rank Adaptation (LoRA) and adapter tuning to fine-tune models with minimal computational resources, enabling rapid deployment in new use cases."
            />
            <SolutionCard 
              title="Cross-Modal Reasoning"
              description="Aligns vision, language, and structured data to facilitate deeper contextual learning and decision-making across diverse tasks."
            />
          </div>
          
          <div className="order-1 lg:order-2">
            <h3 className="text-2xl font-bold mb-4 text-white">Problem Overview</h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Specialized models are often confined to specific tasks, necessitating new models for additional features. Industries such as retail, healthcare, and security require AI solutions that can evolve in response to changing demands.
            </p>
            
            <h3 className="text-2xl font-bold mb-4 text-white">Our Solution</h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Percepta is engineered for continuous adaptation and scalability, leveraging real-world data dynamics to autonomously enhance performance. It supports seamless feature expansion, cross-domain generalization, and scalable deployment without the need for frequent retraining.
            </p>
            
            <Link to="#contact">
              <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium">
                Explore Scalability <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdaptabilitySection;
