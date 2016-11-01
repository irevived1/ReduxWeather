import { combineReducers } from 'redux';
import weatherReducer from './reducer_weather.js';

const rootReducer = combineReducers({
  weather: weatherReducer,
});

export default rootReducer;
