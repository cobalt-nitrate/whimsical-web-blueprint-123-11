
import React from 'react';
import SolutionItem from '@/components/ui/solution-item';

interface SolutionCardProps {
  title: string;
  description: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ title, description }) => {
  return (
    <SolutionItem title={title} description={description} />
  );
};

export default SolutionCard;
