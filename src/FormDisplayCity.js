import React, { useState } from "react";
import axios from "axios";

export default function FormDisplayCity() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);
  function handleSetCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }
  function displayWeather(response) {
    const windSpeedMps = response.data.wind.speed;
    const windSpeedMph = Math.round(windSpeedMps * 2.23694);

    const icon = response.data.weather[0].icon;
    iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;
    const weatherData = [
      { label: "Temperature", value: Math.round(response.data.main.temp) },
      { label: "Humidity", value: response.data.main.humidity },
      { label: "Wind", value: `${windSpeedMph} mph` },
      { label: "Description", value: response.data.weather[0].description },
      { label: "Icon", value: response.data.weather[0].description },
    ];
    setWeather(weatherData);
  }
  function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "be745f8927e2f0a47f01275b3b2e3e0a";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

    axios.get(apiUrl).then(displayWeather);
  }
  return (
    <div>
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
      {weather.length > 0 && (
        <ul>
          {weather.map((item, index) => (
            <li key={index}>
              {item.label === "Icon" ? (
                <img src={iconUrl} />
              ) : (
                `${item.label}: ${item.value}`
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
