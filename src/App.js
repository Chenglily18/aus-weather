import React from 'react';
import './App.scss';
import Weather from './Components/Weather';

function App() {
  return (
    <div role="main" className="App">
      <h1>Weather</h1>
      <h2>
        Last update at {new Date().toLocaleString()}{' '}
        <button
          className="refresh-button"
          aria-label="Refresh"
          onClick={() => window.location.reload(false)}
        >
          Refresh
        </button>
      </h2>
      <Weather />
    </div>
  );
}

export default App;
