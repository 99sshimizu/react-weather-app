import React, { Component } from 'react';
import Weather from './Weather'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid App-header">
          <h1>React App Weather Widget</h1>
        </div>
        <div className="container">
          <Weather/>
        </div>
        <div className="footer">
          Powered by<br />
          <a href="https://www.wunderground.com" target="_blank" rel="noopener noreferrer">
            <img src="http://icons.wxug.com/graphics/wu2/logo_130x80.png" width="100" alt="Weatherunderground" />
          </a>
        </div>
      </div>
    );
  }
}

export default App;
