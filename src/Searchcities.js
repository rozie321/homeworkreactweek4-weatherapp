import React from 'react';

export default function Searchcities() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px 0' }}>
            <input type="text" placeholder="Enter city name" style={{ margin: '10px 0', width: '100%' }} />
            <button style={{ color: 'green', margin: '10px 0', width: '100%' }}>Search</button>
            <button style={{ color: 'blue', margin: '10px 0', width: '100%' }}>Current</button>
        </div>
    );
}