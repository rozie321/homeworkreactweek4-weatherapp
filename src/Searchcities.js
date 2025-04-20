import React from 'react';
import './searchcities.css';
export default function Searchcities() {
    return (
        <div className='searchcitiesdiv'>
            <input type="text" placeholder="Enter city name"/>
            <button className= 'greenbutton'>Search</button>
            <button className='bluebutton'>Current</button>
        </div>
    );
}