import React, { useState } from 'react';
import './App.scss';
import Weather from './Components/Weather';

function App() {
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());

  const refresh = () => {
    setCurrentTime(new Date().toLocaleString());
  };

  return (
    <div role="main" className="App">
      <h1>Weather</h1>
      <h2>
        Last update at {currentTime}{' '}
        <button
          className="refresh-button"
          aria-label="Refresh"
          onClick={() => refresh()}
        >
          Refresh
        </button>
      </h2>
      <Weather currentTime={currentTime} />
    </div>
  );
}

export default App;
