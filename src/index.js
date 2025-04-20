import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Weeklyweather from './Weeklyweather';
import Displaycities from './Displaycities';
import Searchcities from './Searchcities';
import CurrentWeather from './CurrentWeather';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
        <Displaycities />
        <Searchcities />
        <CurrentWeather />
        <Weeklyweather />
    </div>
  </React.StrictMode>
);


