import React from "react";

const MeshyCard = ({ title, subtitle, children, className = "" }) => {
  return (
    <div className={`meshy-card bg-theme-surface/80 backdrop-blur-md border border-theme-border rounded-lg p-6 hover:bg-theme-surface/90 transition-all duration-300 ${className}`}>
      <div className="mb-4">
        <h3 className="text-xl font-bold text-theme-title mb-1">{title}</h3>
        {subtitle && (
          <p className="text-theme-text-secondary text-sm">{subtitle}</p>
        )}
      </div>
      <div className="text-theme-text">
        {children}
      </div>
    </div>
  );
};

export default MeshyCard; 