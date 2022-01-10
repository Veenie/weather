// import logo from './logo.svg';
import './App.css';
import React from 'react';

function App() {
  const dateBuilder = (d) => {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[d.getDay()];

    return `${day}`
  }
  
  return (
    <div className="App">
      <main>
        <div className='location-box'>
          <div className='location'></div>
          <div className='date'>{dateBuilder(new Date())}</div>

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
