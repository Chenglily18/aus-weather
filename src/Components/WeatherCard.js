import React from 'react';
import PropTypes from 'prop-types';
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

const Heading = styled.div`
  > h3,
  img {
    display: inline-block;
    vertical-align: bottom;
  }
`;

const WeatherCard = ({ weather }) => {
  console.log('weather', weather);
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <Card className="card">
      <Heading>
        <h3>{weather.name}</h3>
        <img
          src={`${process.env.REACT_APP_IMG_URL}${weather.weather[0].icon}@2x.png`}
          alt={`${weather.weather[0].description}`}
        />
      </Heading>
      <h4>
        Feels like {weather.main.feels_like.toFixed(1)} &deg;C.{' '}
        {capitalizeFirstLetter(weather.weather[0].description)}
      </h4>
      <Item>
        <p>Max {weather.main.temp_max} &deg;C</p>
        <p>Min {weather.main.temp_min} &deg;C</p>
        <p>Wind {weather.wind.speed} m/s</p>
        <p>Pressure {weather.main.pressure} hPa</p>
        <p>Humidity {weather.main.humidity}%</p>
        <p>Visibility {(weather.visibility / 1000).toFixed(1)} km</p>
      </Item>
    </Card>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.object,
};

export default WeatherCard;
