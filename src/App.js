import React from 'react';
import { Container, CssBaseline, Typography } from '@mui/material';
import { Provider } from 'react-redux';
import store from './store/store';
import WeatherInput from './components/WeatherInp';
import WeatherCard from './components/WeatherCard';


const App = () => {
  return (
    <Provider store={store}>
        <CssBaseline />
        <Container>
          <Typography variant="h4" align="center" gutterBottom>
            Weather App
          </Typography>
          <WeatherInput />
          <WeatherCard />
        </Container>
    </Provider>
  );
};

export default App;
