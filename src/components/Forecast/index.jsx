import React from 'react';
import "./style.css";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];     
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];   

const getDayfromUnix = (unix) => {
  const date = new Date(unix * 1000);
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
};

const Forecast= ({forecast}) => {
  return (
    <div className="weather__forecast" id="predpoved">
      <div className="forecast">
          <div className="forecast__day">{getDayfromUnix(forecast.dt)}</div>
              <div className="forecast__icon">
                 <img
                  src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                  style={{ height: "100%" }}
                  alt="current weather icon"
                />
              </div>
          <div className="forecast__temp">{Math.round(forecast.main.temp)} °C</div>
      </div>
    </div>
    )
  }
  
export default Forecast;
  