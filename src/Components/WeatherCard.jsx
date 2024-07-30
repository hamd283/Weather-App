import React from "react";

const WeatherCard = ({ weather }) => (
  <div className="weather">
    <img src={weather.icon} className="weather-icon" alt="Weather Icon" />
    <h3 className="description">{weather.description}</h3>
    <h1 className="temp">{weather.temp}</h1>
    <h2 className="place">{weather.place}</h2>
  </div>
);

export default WeatherCard;
