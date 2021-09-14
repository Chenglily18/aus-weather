import React, { useEffect, useState } from 'react';
import WeatherCard from './WeatherCard/WeatherCard';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { ACTIONS } from '../Actions/Types';
import PropTypes from 'prop-types';

//City code available in http://bulk.openweathermap.org/sample/ city.list.json.gz
const cities = [
  {
    id: 7839805,
    name: 'Melbourne',
    state: '',
    country: 'AU',
    coord: {
      lon: 144.944214,
      lat: -37.813061,
    },
  },

  {
    id: 2147714,
    name: 'Sydney',
    state: '',
    country: 'AU',
    coord: {
      lon: 151.207321,
      lat: -33.867851,
    },
  },

  {
    id: 7839562,
    name: 'Brisbane',
    state: '',
    country: 'AU',
    coord: {
      lon: 153.029938,
      lat: -27.44573,
    },
  },
  {
    id: 7839644,
    name: 'Adelaide',
    state: '',
    country: 'AU',
    coord: {
      lon: 138.600586,
      lat: -34.920502,
    },
  },
  {
    id: 2063523,
    name: 'Perth',
    state: '',
    country: 'AU',
    coord: {
      lon: 115.833328,
      lat: -31.933331,
    },
  },
  {
    id: 2163355,
    name: 'Hobart',
    state: '',
    country: 'AU',
    coord: {
      lon: 147.329407,
      lat: -42.87936,
    },
  },
  {
    id: 2172517,
    name: 'Canberra',
    state: '',
    country: 'AU',
    coord: {
      lon: 149.128067,
      lat: -35.283459,
    },
  },
  {
    id: 7839402,
    name: 'Darwin',
    state: '',
    country: 'AU',
    coord: {
      lon: 130.876846,
      lat: -12.40189,
    },
  },
];

const Weather = ({ currentTime }) => {
  const dispatch = useDispatch();
  const { data: cityWeather } = useSelector((state) => state.CityWeather);
  const [cityCodes] = useState(
    cities.map((city) => {
      return city.id;
    })
  );

  // API to run on mounted to get data
  // Once data is retrieved, store in state
  // Update then time changed
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_BASE_URL}/group?id=${cityCodes}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`
      )
      .then((res) => {
        const data = res.data;
        dispatch({
          type: ACTIONS.CITY_WEATHER.FETCH,
          payload: { data: data },
        });
      });
  }, [currentTime]);

  return (
    <div className="container">
      {cityWeather.list && cityWeather.list.length > 0 ? (
        cityWeather.list.map((cw) => {
          return <WeatherCard key={cw.id} weather={cw} />;
        })
      ) : (
        <p>There is no cities in our system </p>
      )}
    </div>
  );
};

Weather.propTypes = {
  currentTime: PropTypes.string,
};

export default Weather;
