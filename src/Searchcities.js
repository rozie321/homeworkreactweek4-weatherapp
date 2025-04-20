import React from 'react';
import './searchcities.css';
export default function Searchcities() {
    return (
        <div className='searchcitiesdiv'>
            <input type="text" placeholder="Enter city name"/>
            <button classname= 'greenbutton'>Search</button>
            <button classname='bluebutton'>Current</button>
        </div>
    );
}