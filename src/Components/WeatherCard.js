import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  text-align: left;
  margin: 16px;
  padding: 16px 32px;
  border-radius: 10px;
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 16px;
`;

const WeatherCard = () => {
  return (
    <Card className="card">
      <h3>Melbourne</h3>
      <h4>Feels like 10</h4>
      <Item>
        <p>Max</p>
        <p>Min</p>
        <p>Wind</p>
        <p>Pressure</p>
        <p>Humidity</p>
      </Item>
    </Card>
  );
};

export default WeatherCard;
