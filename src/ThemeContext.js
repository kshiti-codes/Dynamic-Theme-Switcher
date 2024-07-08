import React, { createContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const ThemeContext = createContext();

const themes = {
  light: {
    background: '#ffffff',
    color: '#000000',
    transition: 'background-color 0.3s, color 0.3s'
  },
  dark: {
    background: '#000000',
    color: '#ffffff',
    transition: 'background-color 0.3s, color 0.3s'
  },
  custom: {
    background: '#ACCFE7',
    color: '#000000',
    transition: 'background-color 0.3s, color 0.3s'
  }
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);
  const [customColor, setCustomColor] = useState('#ff6347');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const savedColor = localStorage.getItem('customColor');
    if (savedTheme) {
      setTheme(JSON.parse(savedTheme));
    }
    if (savedColor) {
      setCustomColor(savedColor);
      setTheme({ ...themes.custom, background: savedColor });
    }
  }, []);

  const switchTheme = (themeName) => {
    const newTheme = themes[themeName];
    setTheme(newTheme);
    localStorage.setItem('theme', JSON.stringify(newTheme));
    if (themeName === 'custom') {
      localStorage.setItem('customColor', customColor);
    } else {
      localStorage.removeItem('customColor');
    }
  };

  const handleColorChange = (color) => {
    setCustomColor(color.hex);
    setTheme({ ...themes.custom, background: color.hex });
    localStorage.setItem('customColor', color.hex);
  };

  return (
    <ThemeContext.Provider value={{ theme, switchTheme, handleColorChange, customColor }}>
      <StyledThemeProvider theme={theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
