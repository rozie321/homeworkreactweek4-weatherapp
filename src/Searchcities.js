import React from 'react';

export default function Searchcities() {
    return (
        <div style={{margin: '10px 0' }}>
            <input type="text" placeholder="Enter city name" style={{ width: '30%' }} />
            <button style={{ color: 'green',width: '10%' }}>Search</button>
            <button style={{ color: 'blue', width: '10%' }}>Current</button>
        </div>
    );
}