
import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  badge,
  title,
  description,
  align = 'center',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={`mb-12 ${alignmentClasses[align]}`}>
      {badge && (
        <div className="inline-block px-3 py-1 rounded-full bg-dark-700 text-teal-500 text-xs font-medium mb-4">
          {badge}
        </div>
      )}
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-gray-400 max-w-3xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
