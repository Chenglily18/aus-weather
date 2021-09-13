import { combineReducers } from 'redux';
import CityWeatherReducer from './CityWeather';

export default combineReducers({
  CityWeather: CityWeatherReducer,
});
