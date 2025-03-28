
import React from 'react';
import { CheckCircle, LucideIcon } from 'lucide-react';

interface SolutionItemProps {
  title: string;
  description: string;
  icon?: LucideIcon;
}

const SolutionItem: React.FC<SolutionItemProps> = ({ 
  title, 
  description, 
  icon: Icon = CheckCircle 
}) => {
  return (
    <div className="glass-card p-5 rounded-lg">
      <div className="flex items-start gap-4">
        <div className="mt-1">
          <Icon className="h-5 w-5 text-teal-500" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
          <p className="text-gray-400 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default SolutionItem;
