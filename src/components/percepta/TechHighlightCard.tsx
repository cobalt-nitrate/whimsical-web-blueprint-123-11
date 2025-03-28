
import React from 'react';
import { Code2 } from 'lucide-react';

interface TechHighlightCardProps {
  title: string;
  description: string;
}

const TechHighlightCard: React.FC<TechHighlightCardProps> = ({ title, description }) => {
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

export default TechHighlightCard;
