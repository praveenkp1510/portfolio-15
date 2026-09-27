import React from 'react';
import * as Icons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';

const iconMap = {
  ...Icons,
  ...SiIcons
};

export const TechBadge = ({ tech, className = "" }) => {
  const IconComponent = iconMap[tech.icon] || Icons.FaCode;

  return (
    <span
      className={`inline-flex items-center gap-2 bg-[#222] border border-[#343434] text-sm px-3 py-1.5 rounded-full font-medium comic-font text-gray-200 hover:border-primary-500 hover:text-white transition-colors duration-200 ${className}`}
    >
      {IconComponent && <IconComponent className="w-4 h-4 text-primary-600" />}
      <span>{tech.name}</span>
    </span>
  );
};
