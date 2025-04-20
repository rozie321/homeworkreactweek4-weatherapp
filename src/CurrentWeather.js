import React from 'react';
import './currentweather.css';
// import { WiDaySunny, WiDayCloudy, WiDayRain, WiDaySnow } from 'react-icons/wi';
export default function CurrentWeather() {
    return (
        <div className="currentweatherdiv">
            <div>
                <h1>Lisbon</h1>
                <p>Thur</p>
                <p>Cloudy</p>
                <p>15°C 🌥 </p>
            </div>
            <div>
                <br />
                <br />
                <p>Precipitation: 82%</p>
                <p>Wind: 4km/h</p>
            </div>
        </div>
    );
}
