// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from 'react';

const api = {
  key: "ab79ead9053f46be5efaf3bb2f65e3ae",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  
  const [weather, setWeather] = useState('');

  const dateBuilder = (d) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[d.getDay()];

    return `${day}`
  }
  useEffect(() => { 
    fetch(`${api.base}weather?q=london&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => setWeather(result));
    
  })
  

  
  return (
    <div className="App">
      <main>
        <div className='location-box'>  
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>  
        <div className='weather-box'>
          <div className='temp'>{Math.round(weather.main.temp)}</div>
        </div>  

        
      </main>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
