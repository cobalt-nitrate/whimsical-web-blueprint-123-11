
import React from 'react';
import { LucideIcon } from 'lucide-react';
import GradientCard from './gradient-card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  icon, 
  title, 
  description,
  className
}) => {
  return (
    <GradientCard className={className} hover>
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </GradientCard>
  );
};

export default FeatureCard;
