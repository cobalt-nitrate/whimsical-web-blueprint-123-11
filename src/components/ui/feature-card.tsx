
import React from 'react';
import { LucideIcon } from 'lucide-react';
import GradientCard from './gradient-card';

interface FeatureCardProps {
  icon: React.ReactNode | LucideIcon;
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
  // If the icon is a Lucide icon component
  const IconComponent = icon as LucideIcon;
  const isLucideIcon = typeof IconComponent === 'function';

  return (
    <GradientCard className={className} hover>
      <div className="mb-4">
        {isLucideIcon ? (
          <IconComponent className="h-10 w-10 text-teal-500" />
        ) : (
          icon
        )}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </GradientCard>
  );
};

export default FeatureCard;
