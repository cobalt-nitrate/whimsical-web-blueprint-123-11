
import React from 'react';
import { cn } from '@/lib/utils';

interface GradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const GradientCard: React.FC<GradientCardProps> = ({ 
  children, 
  className, 
  hover = false,
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "glass-card p-6 rounded-lg h-full flex flex-col",
        hover && "glass-card-hover",
        className
      )} 
      {...props}
    >
      {children}
    </div>
  );
};

export default GradientCard;
