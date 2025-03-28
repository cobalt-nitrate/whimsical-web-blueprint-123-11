
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import UseCaseCard from './UseCaseCard';

const UseCasesSection = () => {
  return (
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
  );
};

export default UseCasesSection;
