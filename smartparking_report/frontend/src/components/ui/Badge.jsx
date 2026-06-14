import React from 'react';

const Badge = ({ children, variant = 'default' }) => {
  const variants = {
    default: "bg-gray-100 text-gray-800",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-rose-100 text-rose-700",
    info: "bg-blue-100 text-blue-700"
  };

  return (
    <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${variants[variant]}`}>
      {children}
    </span>
  );
};

export default Badge;
