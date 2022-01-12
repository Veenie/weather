// import logo from './logo.svg';
import './App.css';
import React, { useState} from 'react';

const api = {
  key: "ab79ead9053f46be5efaf3bb2f65e3ae",
  base: "https://api.openweathermap.org/data/2.5/"
}


function App() {
  
  // useEffect(() => { 
  //   fetch(`${api.base}weather?q=London,uk&units=metric&APPID=${api.key}`)
  //   .then(res => res.json())
  //   .then(result => setWeather(result));
  // })
  
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  const dateBuilder = (d) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[d.getDay()];

    return `${day}`
  }

  

  
  return (
    <div className="App">
      <main>
      <div className="search-box">
          <input 
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
        <div className='location-box'>  
          <div className='date'>{dateBuilder(new Date())}</div>
        </div>  
        <div className='weather-box'>
          <div className='tempmax'>{Math.round(weather.main.temp_max)}</div>
          <div className='tempmin'>{Math.round(weather.main.temp_min)}</div>
         </div>
         </div>
         ) : ('')}

        
      </main>
    </div>
  );
}

export default App;
