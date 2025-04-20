
import React from 'react';
import './index.css';
export default function Displaycities()
{
    return (
        <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <div>Lisbon</div>
            <div>Paris</div>
            <div>Sydney</div>
            <div>San Francisco</div>
        </div>
    );
}