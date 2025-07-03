import { useState } from 'react';

export default function Question11() {
  const [activeTab, setActiveTab] = useState('Home');

  const tabs = {
    Home: <p>Welcome to the Home page!</p>,
    About: <p>This is the About page.</p>,
    Contact: <p>Contact us at: email@example.com</p>
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px' }}>
        {Object.keys(tabs).map(tab => (
          <button 
            key={tab}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div style={{ marginTop: '20px' }}>
        {tabs[activeTab]}
      </div>
    </div>
  );
}