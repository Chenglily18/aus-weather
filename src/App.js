import React from 'react';
import './App.scss';
import Weather from './Components/Weather';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 8rem;
  background: transparent;
  color: #115293;
  border: 2px solid #115293;
  :hover {
    cursor: pointer;
    background-color: #64b5f6;
  }
`;

function App() {
  return (
    <div className="App">
      <h1>Weather</h1>
      <h2>
        {new Date().toLocaleString()}{' '}
        <Button onClick={() => window.location.reload(false)}>Refresh</Button>
      </h2>
      <Weather />
    </div>
  );
}

export default App;
