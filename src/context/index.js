import { createContext, useState } from 'react';

export const ThemeContext = createContext();

export const ThemeProviderContext = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
