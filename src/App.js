import React, {useState, useEffect} from 'react';
import "./App.css";
import Current from './components/Current';
import Forecast from './components/Forecast';
import {cities} from "./utils/cities.js";

const App = () => {

  const id = process.env.REACT_APP_MY_API_ID;

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Prague");
  const [forecast, setForecast] = useState(null);
  

  const fetchWeather = () => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${id}`)
			.then(response => response.json())
			.then(data => {
				setWeather(data)
			});
  };

  const fetchForecast = () => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${id}`)
			.then(response => response.json())
			.then(data => {
				setForecast(data.list.filter((_, index) => index % 8 === 0))
			});
  };
  
  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, [city]);// eslint-disable-line react-hooks/exhaustive-deps

  console.log(weather);
  console.log(forecast);


  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="select-wrapper">
          <select
            className="select"
            name="cityselect"
            id="cityselect"
            value={city}
            onChange={(event) => setCity(event.target.value)}
          >
            {cities.map((town, index) => <option key={index} value={town}>{town}</option>)}
          </select>
        </div>
        {(weather !== null || undefined) && (forecast !== null || undefined) ? 
        <div className="weather">
          <Current weather={weather}/> 
          <div className="weather__forecast" id="predpoved">
            {forecast.map(
                (fore, index) => <Forecast key={index} forecast={fore}/>)}
          </div>
        </div> : null} 
        
     </div>
    </div>
    
  );
};

export default App;
