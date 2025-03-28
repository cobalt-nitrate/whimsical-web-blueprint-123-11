
import React from 'react';
import GradientCard from '@/components/ui/gradient-card';

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ icon, title, description }) => {
  return (
    <GradientCard hover>
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </GradientCard>
  );
};

export default CapabilityCard;