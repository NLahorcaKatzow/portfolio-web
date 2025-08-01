import React, { useState } from "react";
import "./FlipCard.css";

const FlipCard = ({ frontContent, backContent, className = "" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card w-full h-64 bg-theme-surface/80 backdrop-blur-md border border-theme-border rounded-lg overflow-hidden ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card-inner ${isFlipped ? 'rotate-y-180' : ''}`}>
        {/* Front */}
        <div className="flip-card-front">
          {frontContent}
        </div>
        
        {/* Back */}
        <div className="flip-card-back">
          {backContent}
        </div>
      </div>
    </div>
  );
};

export default FlipCard; 