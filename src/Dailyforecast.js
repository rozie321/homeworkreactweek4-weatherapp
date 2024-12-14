import React, { useState } from "react";
import axios from "axios"
import Weathersearchengine from "./Weathersearchengine"

export  default function Dailyforecast(props){
   const [Forecasthtml, setForecasthtml] = useState("");
   const [Displayforecast, setDisplayforecast] = useState("");

function formatDay(timestamp){
    let date=new Date(timestamp * 1000);
    let days = ['Sun','Mon','Tue','Wed','Thur','Fri','Sat'];
    return days[date.getDay()];
}
    return(
        const DisplayForecast = ({ response }) => {
            // Ensure response and data exist before rendering
            if (!response || !response.data || !response.data.daily) {
              return null;
            }
          
            const formatDay = (timestamp) => {
              const date = new Date(timestamp * 1000); // Convert Unix timestamp to milliseconds
              const options = { weekday: "short" };
              return date.toLocaleDateString(undefined, options);
            };
          
            return (
              <div className="weather-forecast">
                {response.data.daily.slice(0, 5).map((day, index) => (
                  <div className="weather-forecast-day" key={index}>
                    <div className="weather-forecast-date">{formatDay(day.time)}</div>
                    <img
                      src={day.condition.icon_url}
                      alt="Weather icon"
                      className="weather-forecast-icon"
                    />
                    <div className="weather-forecast-temperatures">
                      <div className="weather-forecast-temperature">
                        <strong>{Math.round(day.temperature.maximum)}º</strong>
                      </div>
                      <div className="weather-forecast-temperature">
                        {Math.round(day.temperature.minimum)}º
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            );
          };

          function formatDate(date) {
            let minutes = date.getMinutes();
            let hours = date.getHours();
            let day = date.getDay();
          
            if (minutes < 10) {
              minutes = `0${minutes}`;
            }
          
            if (hours < 10) {
              hours = `0${hours}`;
            }
          
            let days = [
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ];
          
            let formattedDay = days[day];
            return `${formattedDay} ${hours}:${minutes}`;
          }
}
