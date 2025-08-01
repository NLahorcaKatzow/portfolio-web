import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    // Verificar si hay un tema guardado en localStorage
    const saved = localStorage.getItem('theme');
    if (saved) {
      return saved === 'dark';
    }
    // Por defecto usar tema oscuro
    return true;
  });

  useEffect(() => {
    // Guardar el tema en localStorage
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    
    // Aplicar el tema al documento
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }

    // Actualizar variables CSS activas
    const root = document.documentElement;
    if (isDark) {
      // Tema oscuro
      root.style.setProperty('--color-background', 'var(--color-background-dark)');
      root.style.setProperty('--color-surface', 'var(--color-surface-dark)');
      root.style.setProperty('--color-text', 'var(--color-text-dark)');
      root.style.setProperty('--color-text-secondary', 'var(--color-text-secondary-dark)');
      root.style.setProperty('--color-title', 'var(--color-title-dark)');
      root.style.setProperty('--color-accent', 'var(--color-accent-dark)');
      root.style.setProperty('--color-border', 'var(--color-border-dark)');
    } else {
      // Tema claro
      root.style.setProperty('--color-background', 'var(--color-background-light)');
      root.style.setProperty('--color-surface', 'var(--color-surface-light)');
      root.style.setProperty('--color-text', 'var(--color-text-light)');
      root.style.setProperty('--color-text-secondary', 'var(--color-text-secondary-light)');
      root.style.setProperty('--color-title', 'var(--color-title-light)');
      root.style.setProperty('--color-accent', 'var(--color-accent-light)');
      root.style.setProperty('--color-border', 'var(--color-border-light)');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  const theme = {
    isDark,
    toggleTheme,
    colors: isDark ? {
      // Tema oscuro
      background: "rgb(6,0,16)",
      surface: "rgba(255,255,255,0.05)",
      text: "#ffffff",
      textSecondary: "rgba(255,255,255,0.7)",
      title: "#ffffff",
      accent: "rgb(125,93,253)",
      border: "rgba(255,255,255,0.1)"
    } : {
      // Tema claro
      background: "#ffffff",
      surface: "rgba(0,0,0,0.05)",
      text: "#1a1a1a",
      textSecondary: "rgba(0,0,0,0.7)",
      title: "#1a1a1a",
      accent: "rgb(125,93,253)",
      border: "rgba(0,0,0,0.1)"
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
}; 