import React from "react";

const H1 = ({ children, className = "", ...props }) => (
  <h1 className={`text-4xl md:text-5xl font-bold ${className}`} {...props}>
    {children}
  </h1>
);

const H2 = ({ children, className = "", ...props }) => (
  <h2 className={`text-3xl md:text-4xl font-bold ${className}`} {...props}>
    {children}
  </h2>
);

const H3 = ({ children, className = "", ...props }) => (
  <h3 className={`text-2xl md:text-3xl font-semibold ${className}`} {...props}>
    {children}
  </h3>
);

const H4 = ({ children, className = "", ...props }) => (
  <h4 className={`text-xl md:text-2xl font-semibold ${className}`} {...props}>
    {children}
  </h4>
);

const P = ({ children, className = "", ...props }) => (
  <p className={`text-base leading-relaxed ${className}`} {...props}>
    {children}
  </p>
);

const Span = ({ children, className = "", ...props }) => (
  <span className={`text-base ${className}`} {...props}>
    {children}
  </span>
);

const Typography = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  p: P,
  span: Span
};

export default Typography; 