
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface CapabilityCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="glass-card p-6 rounded-lg glass-card-hover">
      <div className="w-12 h-12 bg-dark-700 rounded-full flex items-center justify-center mb-6">
        <Icon className="h-6 w-6 text-teal-500" />
      </div>
      <h3 className="text-xl font-medium mb-3">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default CapabilityCard;
