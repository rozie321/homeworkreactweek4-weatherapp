import React from 'react';

export default function Searchcities() {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '10px 0' }}>
            <input type="text" placeholder="Enter city name" style={{ width: '60%' }} />
            <button style={{ color: 'green',width: '20%' }}>Search</button>
            <button style={{ color: 'blue', width: '20%' }}>Current</button>
        </div>
    );
}