
import React from 'react';
import { CheckCircle, LucideIcon } from 'lucide-react';

interface SolutionItemProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  className?: string;
}

const SolutionItem: React.FC<SolutionItemProps> = ({ 
  title, 
  description, 
  icon: Icon = CheckCircle,
  className
}) => {
  return (
    <div className={`glass-card p-5 rounded-lg h-full ${className}`}>
      <div className="flex items-start gap-4 h-full">
        <div className="mt-1">
          <Icon className="h-5 w-5 text-teal-500" />
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2 text-white">{title}</h4>
          {description && <p className="text-gray-400 text-sm">{description}</p>}
        </div>
      </div>
    </div>
  );
};

export default SolutionItem;
