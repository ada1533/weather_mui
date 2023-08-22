import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    data: null,
  error: null,
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      state.error = null;
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.data = null;
    },
  },
});

export const { setData, setError } = weatherSlice.actions;

export const fetchWeather = city => async dispatch => {
  try {
    const response = await axios.get(`http://api.weatherapi.com/v1/forecast.json?key=0c7edaee851a4bb2b65143314232907&q=${city}&lang=ru`);
    dispatch(setData(response.data));
  } catch (error) {
    dispatch(setError(
    <Alert variant="filled" severity="error">
    <AlertTitle>Error</AlertTitle>
    City not found!
  </Alert>));
  }
};

export default weatherSlice.reducer;
