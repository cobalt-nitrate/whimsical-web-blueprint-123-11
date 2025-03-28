
import React from 'react';
import { CheckCircle } from 'lucide-react';

interface SolutionCardProps {
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description }) => {
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

export default SolutionCard;
