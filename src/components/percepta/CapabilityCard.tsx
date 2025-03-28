
import React from 'react';

interface CapabilityCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ icon, title, description }) => {
  return (
    <div className="glass-card glass-card-hover p-6 rounded-lg h-full flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default CapabilityCard;
