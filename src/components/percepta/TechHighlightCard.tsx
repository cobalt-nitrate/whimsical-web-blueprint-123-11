
import React from 'react';
import { Code2 } from 'lucide-react';
import GradientCard from '@/components/ui/gradient-card';

interface TechHighlightCardProps {
  title: string;
  description: string;
}

const TechHighlightCard: React.FC<TechHighlightCardProps> = ({ title, description }) => {
  return (
    <GradientCard>
      <div className="flex items-center mb-4">
        <Code2 className="h-5 w-5 text-teal-500 mr-2" />
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-gray-400 text-sm">{description}</p>
    </GradientCard>
  );
};

export default TechHighlightCard;
