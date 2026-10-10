import React from 'react';

function ForecastList({ forecast }) {
  return (
    <div>
      <h2>5-Day Forecast</h2>
      <ul>
        {forecast.map((day, index) => (
          <li key={index}>
            <p>{day.date}</p>
            <p>High: {day.tempHigh}°C</p>
            <p>Low: {day.tempLow}°C</p>
            <p>{day.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ForecastList;