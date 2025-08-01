import React from "react";

const Flex = ({ 
  children, 
  direction = "row", 
  align = "start", 
  justify = "start", 
  gap = "0",
  className = "",
  ...props 
}) => {
  const flexClasses = [
    "flex",
    direction === "col" ? "flex-col" : "flex-row",
    `items-${align}`,
    `justify-${justify}`,
    gap !== "0" ? `gap-${gap}` : "",
    className
  ].filter(Boolean).join(" ");

  return (
    <div className={flexClasses} {...props}>
      {children}
    </div>
  );
};

const Layout = {
  Flex
};

export default Layout; 