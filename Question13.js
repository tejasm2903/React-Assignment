import { useState } from 'react';

export default function Question13() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div style={{
      padding: '20px',
      backgroundColor: isDarkMode ? '#333' : '#fff',
      color: isDarkMode ? '#fff' : '#333',
      minHeight: '100px'
    }}>
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}