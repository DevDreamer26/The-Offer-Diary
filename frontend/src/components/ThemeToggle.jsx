import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark' || 
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-yellow-400 transition-all duration-300 hover:ring-2 ring-blue-400"
      aria-label="Toggle Dark Mode"
    >
      {darkMode ? (
        <Sun size={20} className="rotate-0 transition-transform duration-500" />
      ) : (
        <Moon size={20} className="rotate-0 transition-transform duration-500" />
      )}
    </button>
  );
}