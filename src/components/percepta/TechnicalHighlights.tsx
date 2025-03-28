
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import TechHighlightCard from './TechHighlightCard';

const TechnicalHighlights = () => {
  return (
    <section className="py-20 bg-dark-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
            Technical Excellence
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Technical <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Percepta leverages cutting-edge AI technologies to deliver exceptional performance across domains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TechHighlightCard 
            title="Cross-Attention Vision Models"
            description="Optimized hybrids of Perceiver IO, Swin Transformer, and CoAtNet for capturing long-range dependencies and multi-resolution feature fusion."
          />
          <TechHighlightCard 
            title="Object-Centric Perception"
            description="Employs Slot Attention Mechanisms and Set Transformers for instance-aware feature extraction and structured visual understanding."
          />
          <TechHighlightCard 
            title="Graph-Based Representation Learning"
            description="Implements Graph Neural Networks (GNNs) and Scene Graphs for relational reasoning in structured vision problems."
          />
          <TechHighlightCard 
            title="Uncertainty-Aware Predictions"
            description="Integrates Bayesian Neural Networks (BNNs) and Variational Inference (VI) for uncertainty estimation in vision tasks."
          />
          <TechHighlightCard 
            title="Self-Supervised Pretraining (SSL)"
            description="Leverages techniques like Masked Image Modeling (MIM) and DINO for robust feature extraction without labeled data."
          />
          <TechHighlightCard 
            title="Neural Implicit Representations"
            description="Utilizes Neural Radiance Fields (NeRF) and Signed Distance Functions (SDF) for scene reconstruction and depth estimation through implicit function learning."
          />
          <TechHighlightCard 
            title="High-Throughput Vision Processing"
            description="Implements Sparse Mixture-of-Experts (MoE) Transformers and dynamic token sparsification for accelerated inference."
          />
          <TechHighlightCard 
            title="Low-Rank Adaptation (LoRA)"
            description="Facilitates efficient parameter-efficient fine-tuning (PEFT) for real-world domain adaptation with minimal computational requirements."
          />
          <TechHighlightCard 
            title="Composable Vision AI Pipelines"
            description="Supports end-to-end differentiable processing for multi-task learning across detection, segmentation, tracking, and 3D vision."
          />
        </div>
        
        <div className="text-center mt-12">
          <Link to="#contact">
            <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium">
              Request Technical Documentation <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TechnicalHighlights;
