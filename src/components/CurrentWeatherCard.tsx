import React from 'react';

function CurrentWeatherCard({ weather }) {
  return (
    <div>
      <h2>Current Weather in {weather.city}</h2>
      <p>{weather.description}</p>
      <p>Temperature: {weather.temperature}°C</p>
      <p>Feels Like: {weather.feelsLike}°C</p>
      <p>Humidity: {weather.humidity}%</p>
      <p>Wind Speed: {weather.windSpeed} km/h</p>
    </div>
  );
}

export default CurrentWeatherCard;