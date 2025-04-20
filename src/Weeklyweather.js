import React from 'react';
import './weeklyweather.css';
export default function Weeklyweather() {
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Monday<br />0°C <br />❄️</td>
                        <td>Tuesday<br />10°C <br /> 🌧</td>
                        <td>Wednesday<br />9°C <br /> 🌥</td>
                        <td>Thursday<br />11°C <br /> 🌥</td>
                        <td>Friday<br />20°C <br /> ☀️</td>
                        
                    </tr>
                </tbody>
            </table>
            <footer>
                <a href="https://github.com/rozie321/homeworkreactweek4-weatherapp" rel="noreferrer" target='_blank'>Open-Source</a>code by<a href="https://homeworkreactweek4-weatherapp.netlify.app/" rel="noreferrer" target='_blank'>Roselyn manegene</a>from<a href ="https://www.shecodes.io/" rel="noreferrer" target='_blank' >shecodes</a>
            </footer>
        </div>
        
    );
}
