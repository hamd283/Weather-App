import React from 'react';

const WeatherDetails = ({ weather }) => (
  <div className="weather-details">
    <div className="Humidity">
      <i className="fa-solid fa-droplet"></i>
      <div className="text">
        <span>{weather.humidity}</span>
        <p>Humidity</p>
      </div>
    </div>
    <div className="wind">
      <i className="fa-solid fa-wind"></i>
      <div className="text">
        <span>{weather.wind}</span>
        <p>Wind Speed</p>
      </div>
    </div>
    <div className="clouds">
      <i className="fa-solid fa-cloud"></i>
      <div className="text">
        <span>{weather.clouds}</span>
        <p>Clouds</p>
      </div>
    </div>
  </div>
);

export default WeatherDetails;
