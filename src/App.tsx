import React, { useState } from 'react';
import LocationSearch from './components/LocationSearch';
import CurrentWeatherCard from './components/CurrentWeatherCard';
import ForecastList from './components/ForecastList';
import LoadingState from './components/LoadingState';
import useWeather from './hooks/useWeather';

function App() {
  const [city, setCity] = useState('');
  const { weather, forecast, loading, error, fetchWeather } = useWeather();

  const handleSearch = () => {
    fetchWeather(city);
  };

  return (
    <div>
      <h1>Weather Dashboard</h1>
      <LocationSearch city={city} setCity={setCity} onSearch={handleSearch} />
      {loading && <LoadingState />}
      {error && <p>{error}</p>}
      {weather && <CurrentWeatherCard weather={weather} />}
      {forecast && <ForecastList forecast={forecast} />}
    </div>
  );
}

export default App;