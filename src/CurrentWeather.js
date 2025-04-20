import React from 'react';
export default function CurrentWeather() {
    return (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            <div>
                <h1>Lisbon</h1>
                <p>Thur</p>
                <p>Cloudy</p>
            </div>
            <div>
                <p>Precipitation: 82%</p>
                <p>Wind: 4km/h</p>
            </div>
        </div>
    );
}
