
import React, { useEffect, useRef } from 'react';
import PageLayout from '@/components/PageLayout';
import { ArrowRight, Zap, Cpu, BarChart, BrainCircuit, LineChart, Code2, CheckCircle, Layers, Package, Workflow } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';

const Percepta = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-dark-800 to-dark-900 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-6">
              Advanced Vision Intelligence
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Percepta
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 leading-relaxed">
              An adaptive vision intelligence stack designed to deliver precise results across various domains with minimal training and low computational overhead.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="px-6 py-6 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium text-base">
                Schedule a Demo
              </Button>
              <Button variant="outline" className="px-6 py-6 rounded-full border-white/20 hover:bg-dark-700 text-white font-medium text-base">
                Explore Use Cases
              </Button>
            </div>
          </div>
        </div>
        
        {/* Abstract background pattern */}
        <div className="absolute inset-0 opacity-10 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,200,150,0.1),transparent_70%)]"></div>
        </div>
      </section>

      {/* Overview Section */}
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

      {/* Core Capabilities Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
              Core Capabilities
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Advanced Vision Intelligence <span className="text-gradient">Capabilities</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Percepta integrates cutting-edge AI architectures and learning paradigms to deliver exceptional results across domains.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CapabilityCard 
              icon={<BrainCircuit className="w-10 h-10 text-teal-500" />}
              title="Hybrid Vision-Language Models"
              description="Enable context-aware scene interpretation and event-driven intelligence by merging deep learning techniques with neuro-symbolic reasoning."
            />
            <CapabilityCard 
              icon={<Layers className="w-10 h-10 text-teal-500" />}
              title="Multimodal Architecture"
              description="Supports diverse inputs, including images, videos, text, and audio clips, facilitating comprehensive analysis."
            />
            <CapabilityCard 
              icon={<LineChart className="w-10 h-10 text-teal-500" />}
              title="Self-Improving System"
              description="Utilizes reinforcement learning to optimize model routing and performance continually."
            />
            <CapabilityCard 
              icon={<Cpu className="w-10 h-10 text-teal-500" />}
              title="Task-Specific Computer Vision"
              description="Delivers high-precision outcomes in segmentation, detection, tracking, and 3D reconstruction tasks."
            />
            <CapabilityCard 
              icon={<Workflow className="w-10 h-10 text-teal-500" />}
              title="Dynamic Scene Understanding"
              description="Combines high-level contextual awareness with pixel-precise vision to perform tasks like segmentation, detection, and depth estimation."
            />
            <CapabilityCard 
              icon={<Package className="w-10 h-10 text-teal-500" />}
              title="Cross-Modal Reasoning"
              description="Aligns vision, language, and structured data to facilitate deeper contextual learning and decision-making across diverse tasks."
            />
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-dark-800">
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
              <p className="text-gray-400 mb-6 leading-relaxed">
                Percepta reduces development costs by enabling high-precision AI performance with reduced training data. Leveraging few-shot learning, continuous adaptation, and self-supervised techniques, Percepta optimizes training pipelines, diminishing reliance on large labeled datasets while preserving domain-specific expertise.
              </p>
              
              <Link to="#contact">
                <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            
            <div className="grid grid-cols-1 gap-6">
              <SolutionCard 
                title="Few-Shot & Self-Supervised Learning"
                description="Achieves high accuracy with minimal labeled data, thereby reducing annotation expenses."
              />
              <SolutionCard 
                title="Adaptive Fine-Tuning"
                description="Facilitates dynamic model evolution through continuous learning, minimizing the need for frequent retraining cycles."
              />
              <SolutionCard 
                title="Efficient Model Compression"
                description="Decreases computational overhead, leading to lower infrastructure costs."
              />
              <SolutionCard 
                title="Automated Model Optimization"
                description="Employs intelligent data selection for training, reducing redundant processing and enhancing efficiency."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Adaptability Section */}
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

      {/* Technical Highlights */}
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

      {/* Use Cases */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
              Applications
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Use <span className="text-gradient">Cases</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto">
              Discover how Percepta can transform various industries with its advanced vision intelligence capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard 
              title="Object Detection"
              description="Detect and localize multiple objects in real-time using transformer-based detection models like YOLO and DETR. Ideal for autonomous vehicles, smart surveillance, and retail analytics."
            />
            <UseCaseCard 
              title="AI Classification"
              description="Categorize images with high-dimensional feature representations using vision transformers (ViTs) and contrastive learning. Enables medical diagnostics, quality inspection, and content moderation."
            />
            <UseCaseCard 
              title="Instance Segmentation"
              description="Identify individual object instances in cluttered environments with Mask R-CNN and Swin Transformers. Used in medical imaging, robotics, and augmented reality."
            />
            <UseCaseCard 
              title="Semantic Segmentation"
              description="Perform pixel-wise classification for scene parsing and navigation with DeepLabV3+ and U-Net. Essential for autonomous driving, urban planning, and satellite imagery."
            />
            <UseCaseCard 
              title="Keypoint Detection"
              description="Detect anatomical landmarks for pose estimation, biometrics, and AR applications using HRNet and OpenPose. Enhances sports analytics and virtual reality experiences."
            />
            <UseCaseCard 
              title="Optical Character Recognition"
              description="Extract text from scanned documents and images with TrOCR and Google Cloud Vision OCR. Powers automated document processing and digital archiving."
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="#contact">
              <Button className="rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium">
                Explore All Use Cases <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-800 to-dark-900">
        <div className="container mx-auto px-6">
          <div className="glass-card p-10 rounded-xl text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Vision AI Capabilities?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Partner with us to leverage Percepta's advanced vision intelligence stack for your business needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="#contact">
                <Button className="px-6 py-6 rounded-full bg-teal-500 hover:bg-teal-600 text-black font-medium">
                  Schedule a Demo
                </Button>
              </Link>
              <Link to="/case-studies">
                <Button variant="outline" className="px-6 py-6 rounded-full border-white/20 hover:bg-dark-700 text-white font-medium">
                  View Case Studies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Component for capability cards
const CapabilityCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => {
  return (
    <div className="glass-card glass-card-hover p-6 rounded-lg h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

// Component for solution cards
const SolutionCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="glass-card p-5 rounded-lg">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <CheckCircle className="h-5 w-5 text-teal-500" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

// Component for technical highlight cards
const TechHighlightCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="glass-card p-6 rounded-lg h-full flex flex-col">
      <div className="flex items-center mb-4">
        <Code2 className="h-5 w-5 text-teal-500 mr-2" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

// Component for use case cards
const UseCaseCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className="glass-card glass-card-hover p-6 rounded-lg h-full flex flex-col">
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <Link to="#contact" className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group mt-auto">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </div>
  );
};

export default Percepta;
