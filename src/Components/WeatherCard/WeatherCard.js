import React from 'react';
import PropTypes from 'prop-types';
import classes from './WeatherCard.module.scss';

const WeatherCard = ({ weather }) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const windDirection = (degree) => {
    let direction = '';
    if (degree === 0 || degree === 360) {
      direction = 'N';
    } else if (degree > 0 && degree < 45) {
      direction = 'NNE';
    } else if (degree === 45) {
      direction = 'NE';
    } else if (degree > 45 && degree < 90) {
      direction = 'ENE';
    } else if (degree === 90) {
      direction = 'E';
    } else if (degree > 90 && degree < 135) {
      direction = 'ESE';
    } else if (degree === 135) {
      direction = 'SE';
    } else if (degree > 135 && degree < 180) {
      direction = 'SSE';
    } else if (degree === 180) {
      direction = 'S';
    } else if (degree > 180 && degree < 225) {
      direction = 'SSW';
    } else if (degree === 225) {
      direction = 'SW';
    } else if (degree > 225 && degree < 270) {
      direction = 'WSW';
    } else if (degree === 270) {
      direction = 'W';
    } else if (degree > 270 && degree < 315) {
      direction = 'WNW';
    } else if (degree === 315) {
      direction = 'NW';
    } else if (degree > 315 && degree < 360) {
      direction = 'NNW';
    }
    return direction;
  };

  return (
    <div className={`card ${classes.card}`}>
      <div className={classes.cardHeading}>
        <h3>
          {weather.name}, {weather.sys.country}
        </h3>
        <img
          src={`${process.env.REACT_APP_IMG_URL}${weather.weather[0].icon}@2x.png`}
          alt={`${weather.weather[0].description}`}
        />
      </div>
      <h4>
        Feels like {weather.main.feels_like.toFixed(1)} &deg;C.{' '}
        {capitalizeFirstLetter(weather.weather[0].description)}
      </h4>
      <div className={classes.cardItem}>
        <p>Max {weather.main.temp_max.toFixed(1)} &deg;C</p>
        <p>Min {weather.main.temp_min.toFixed(1)} &deg;C</p>
        <p>
          Wind {windDirection(weather.wind.deg)} {weather.wind.speed} m/s
        </p>
        <p>Pressure {weather.main.pressure} hPa</p>
        <p>Humidity {weather.main.humidity}%</p>
        <p>Visibility {(weather.visibility / 1000).toFixed(1)} km</p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  weather: PropTypes.object,
};

export default WeatherCard;
