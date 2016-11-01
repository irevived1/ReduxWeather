import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/charts.js';
import GoogleMap from '../components/google_map.js';

class WeatherList extends Component {

  constructor(props) {
    super(props);
  }

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(weather => weather.main.temp);
    const prez = cityData.list.map(weather => weather.main.pressure);
    const humid = cityData.list.map(weather => weather.main.humidity);
    const { lon, lat }  = cityData.city.coord;

    return (
      <tr key={name} >
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td><Chart data={temps} color='orange' units="K" /></td>
        <td><Chart data={prez} color='green' units="hPa" /></td>
        <td><Chart data={humid} color='black' units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>&nbsp;Pressure (hPa)&nbsp;&nbsp;</th>
            <th>&nbsp;&nbsp;&nbsp;Humidity (%)&nbsp;&nbsp;&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);
