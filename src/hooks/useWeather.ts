import { useState } from 'react';
import axios from 'axios';

function useWeather() {
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeather = async (city) => {
    setLoading(true);
    setError(null);
    try {
      const weatherResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.VITE_WEATHER_API_KEY}`
      );
      const forecastResponse = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${process.env.VITE_WEATHER_API_KEY}`
      );

      setWeather({
        city: weatherResponse.data.name,
        description: weatherResponse.data.weather[0].description,
        temperature: weatherResponse.data.main.temp,
        feelsLike: weatherResponse.data.main.feels_like,
        humidity: weatherResponse.data.main.humidity,
        windSpeed: weatherResponse.data.wind.speed,
      });

      setForecast(
        forecastResponse.data.list.slice(0, 5).map((item) => ({
          date: item.dt_txt.split(' ')[0],
          tempHigh: item.main.temp_max,
          tempLow: item.main.temp_min,
          description: item.weather[0].description,
        }))
      );
    } catch (err) {
      setError('Failed to fetch weather data. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { weather, forecast, loading, error, fetchWeather };
}

export default useWeather;