import React from 'react';

function LocationSearch({ city, setCity, onSearch }) {
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
      />
      <button onClick={onSearch}>Search</button>
    </div>
  );
}

export default LocationSearch;