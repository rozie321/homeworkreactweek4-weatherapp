
import React from 'react';
import './index.css';
export default function Displaycities()
{
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly', paddingBottom: '20px' }}>
            <a href="https://en.wikipedia.org/wiki/Lisbon" target="_blank" rel="noopener noreferrer">Lisbon</a>
            <a href="https://en.wikipedia.org/wiki/Paris" target="_blank" rel="noopener noreferrer">Paris</a>
            <a href="https://en.wikipedia.org/wiki/Sydney" target="_blank" rel="noopener noreferrer">Sydney</a>
            <a href="https://en.wikipedia.org/wiki/San_Francisco" target="_blank" rel="noopener noreferrer">San Francisco</a>
        </div>
        );
}