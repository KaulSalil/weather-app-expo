import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Load theme preference
    const loadThemePreference = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem('darkMode');
        if (savedTheme !== null) {
          setIsDarkMode(JSON.parse(savedTheme));
        }
      } catch (e) {
        console.error('Failed to load theme preference', e);
      }
    };

    loadThemePreference();
  }, []);

  const toggleTheme = async () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    
    // Save theme preference
    try {
      await AsyncStorage.setItem('darkMode', JSON.stringify(newTheme));
    } catch (e) {
      console.error('Failed to save theme preference', e);
    }
  };

  const theme = {
    backgroundColor: isDarkMode ? '#121212' : '#f8f8f8',
    textColor: isDarkMode ? '#ffffff' : '#000000',
    cardColor: isDarkMode ? '#1e1e1e' : '#ffffff',
    isDarkMode,
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};