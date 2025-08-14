// ThemeContext.tsx
import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme, AppTheme } from '.';

type ThemeContextType = {
  theme: AppTheme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  theme: lightTheme,
  toggleTheme: () => { },
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<AppTheme>(lightTheme);

  const toggleTheme = () => {
    setTheme((prev) => (prev.dark ? lightTheme : darkTheme));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
