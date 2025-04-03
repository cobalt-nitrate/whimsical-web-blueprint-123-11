import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientCard from '@/components/ui/gradient-card';
interface UseCaseCardProps {
  title: string;
  description: string;
}
const UseCaseCard: React.FC<UseCaseCardProps> = ({
  title,
  description
}) => {
  return <GradientCard hover>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-gray-400 mb-4 flex-grow">{description}</p>
      <Link to="#contact" className="inline-flex items-center text-teal-500 hover:text-teal-400 transition-colors duration-300 text-sm font-medium group mt-auto hidden">
        Learn More
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
      </Link>
    </GradientCard>;
};
export default UseCaseCard;