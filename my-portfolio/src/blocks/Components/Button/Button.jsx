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
    primary: "bg-theme-accent text-white hover:bg-theme-accent/90 focus:ring-theme-accent",
    secondary: "bg-theme-surface text-theme-text hover:bg-theme-surface/80 focus:ring-theme-border border border-theme-border",
    ghost: "bg-transparent text-theme-text hover:bg-theme-surface focus:ring-theme-border border border-theme-border"
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