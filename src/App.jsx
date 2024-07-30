// App.js
import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import WeatherCard from './Components/WeatherCard';
import WeatherDetails from './Components/WeatherDetails';
import './App.css';

const App = () => {
  const [weather, setWeather] = useState(null);

  return (
    <div className="card">
      <SearchBar setWeather={setWeather} />
      {weather && (
        <>
          <WeatherCard weather={weather} />
          <WeatherDetails weather={weather} />
        </>
      )}
    </div>
  );
};

export default App;
