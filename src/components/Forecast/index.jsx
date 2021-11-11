import React from 'react';
import "./style.css";
import {getDayfromUnix} from "../../utils/index.js";

const Forecast= ({forecast}) => {
  return (
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
        
    )
  }
  
export default Forecast;
  