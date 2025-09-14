import React, { useState } from "react";
import axios from "axios";

import "./weather.css";

export default function FormDisplayCity() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ ready: false });

  function handleSetCity(event) {
    setCity(event.target.value);
  }

  function displayWeather(response) {
    setWeather({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: Math.round(response.data.wind.speed * 2.23694),
      description: response.data.weather[0].description,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "be745f8927e2f0a47f01275b3b2e3e0a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <form onSubmit={handleSubmit}>
      <input
        className="userCity"
        name="city"
        value={city}
        type="text"
        placeholder="enter city here"
        onChange={handleSetCity}
      />
      <input className="btn" type="submit" value="Search" />
    </form>
  );

  if (weather.ready) {
    return (
      <div>
        {form}
        <h2>{weather.city}</h2>
        <ul>
          <li>Temperature: {weather.temperature}°F</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} mph</li>
          <li className="description">{weather.description}</li>
          <li>
            <img src={weather.iconUrl} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return <div>{form}</div>;
  }
}
