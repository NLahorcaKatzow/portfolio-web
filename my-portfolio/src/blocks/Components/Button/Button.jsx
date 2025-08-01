import React from "react";

const BaseButton = ({ 
  children, 
  variant = "primary", 
  as = "button",
  className = "",
  ...props 
}) => {
  const baseClasses = "px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variantClasses = {
    primary: "bg-theme-accent/80 backdrop-blur-md text-white hover:bg-theme-accent/90 focus:ring-theme-accent border border-theme-accent/20",
    secondary: "bg-theme-surface/80 backdrop-blur-md text-theme-text hover:bg-theme-surface/90 focus:ring-theme-border border border-theme-border",
    ghost: "bg-theme-surface/60 backdrop-blur-md text-theme-text hover:bg-theme-surface/80 focus:ring-theme-border border border-theme-border"
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (as === "a") {
    return (
      <a className={classes} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};

const Button = {
  Primary: (props) => <BaseButton variant="primary" {...props} />,
  Secondary: (props) => <BaseButton variant="secondary" {...props} />,
  Ghost: (props) => <BaseButton variant="ghost" {...props} />
};

export default Button; 