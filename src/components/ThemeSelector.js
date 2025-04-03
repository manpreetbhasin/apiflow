import React, { useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ThemeSelector.css';

const ThemeSelector = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.className = savedTheme;
    setIsDarkTheme(savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const currentTheme = document.documentElement.className;
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);
    setIsDarkTheme(newTheme === 'dark');
  };

  return (
    <div className="theme-switch">
      <FaSun className="theme-icon" />
      <label className="switch">
        <input 
          type="checkbox" 
          onChange={toggleTheme} 
          checked={isDarkTheme}
        />
        <span className="slider round"></span>
      </label>
      <FaMoon className="theme-icon" />
    </div>
  );
};

export default ThemeSelector;