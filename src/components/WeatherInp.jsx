import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { TextField, Button } from '@mui/material';
import { fetchWeather } from '../store/weatherSlice';

const WeatherInp = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch();

  const Submit = () => {
    dispatch(fetchWeather(city));
  };

  return (
    <div className='input'>
      <TextField
        label="City"
        variant="outlined"
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <Button variant="contained" onClick={Submit}>
        Show Weather
      </Button>
    </div>
  );
};

export default WeatherInp;
