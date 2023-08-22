import React from 'react';
import { useSelector } from 'react-redux';

const WeatherCard = () => {
  const { data, error } = useSelector(state => state.weather);

  if (error) {
    return <div>{error}</div>;
  }

  if (!data) {
    return null;
  }

  const { location, current } = data;

  return (
    <div>
      <h2>{location.name}, {location.country}</h2>
      <p>Temperature: {current.temp_c}°C</p>
      <p>Condition: {current.condition.text}</p>
    </div>
  );
};

export default WeatherCard;
