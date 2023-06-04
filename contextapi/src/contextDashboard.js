// Dashboard.js
import React, { useContext } from 'react';
import { ThemeContext } from './themeContext';

const Dashboard = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`dashboard ${theme}`}>
      <h1>Dashboard</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Dashboard;
