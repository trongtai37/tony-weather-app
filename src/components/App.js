import React, {Component, useContext} from 'react';
import Navigation from './Navigation';
import CurrentWeather from './CurrentWeather';
import DailyForecast from './DailyForecast';
import Footer from './Footer';
import AppContext from '../context/AppContext'

const App = () => {
  const appContext = useContext(AppContext);

  return (
    <>
      <Navigation />
      <CurrentWeather location={appContext.location} />
      <DailyForecast location={appContext.location} />
      <Footer />
    </>
  );
}

export default App;
