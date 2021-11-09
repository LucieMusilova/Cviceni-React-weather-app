import React, {useState, useEffect} from 'react';
import "./App.css";
import Current from './components/Current';
import Forecast from './components/Forecast';

const App = () => {

  const id = process.env.REACT_APP_MY_API_ID;

  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Prague");
  const [forecast, setForecast] = useState(null);
  

  const fetchWeather = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${id}`)
			.then(response => response.json())
			.then(data => {
				setWeather(data)
			});
  };

  const fetchForecast = () => {
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${id}`)
			.then(response => response.json())
			.then(data => {
				setForecast(data.list.filter((_, index) => index % 8 === 0))
			});
  };
  
  useEffect(() => {
    fetchWeather();
    fetchForecast();
  }, [city]);
  console.log(weather);
  console.log(forecast);


  return (
    <div className="App">
      <div className="container">
        <h1>My Weather App</h1>
        <div className="button-group">
          <button className="button" onClick={() => setCity("Brno")}>Brno</button>
          <button className="button" onClick={() => setCity("Vancouver")}>Vancouver</button>
          <button className="button" onClick={() => setCity("Edinburgh")}>Edinburgh</button>
        </div>
        {(weather !== null || undefined) && (forecast !== null || undefined) ? 
        <div className="weather">
          <Current weather={weather}/> 
          {forecast.map(
              (fore, index) => <Forecast key={index} forecast={fore}/>)}
        </div> : null} 
     </div>
    </div>
    
  );
};

export default App;
