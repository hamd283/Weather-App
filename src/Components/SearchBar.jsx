import React, { useState } from "react";
import axios from "axios";

const SearchBar = ({ setWeather }) => {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };

  const checkWeather = () => {
    const api_key = "456fbf13ebbc65dc48b9fe21b900a6f2";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${api_key}`;

    axios.get(url).then((response) => {
      const data = response.data;
      const tempInCelsius = (data.main.temp - 273.15).toFixed(1);
      setWeather({
        temp: `${tempInCelsius}°C`,
        place: data.name,
        humidity: `${data.main.humidity}%`,
        wind: `${data.wind.speed} km/h`,
        clouds: `${data.clouds.all}%`,
        icon: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        description: data.weather[0].description,
      });
    });
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Enter city name"
        className="inputBox"
        value={input}
        onChange={handleInput}
      />
      <button className="image" onClick={checkWeather}>
        <i class="fa-solid fa-magnifying-glass"></i>
      </button>
    </div>
  );
};

export default SearchBar;
