import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2 className="title"><i className="fa fa-cloud"></i>Погода</h2>
        <div className="search-form">
          <input type="text" placeholder="Выберите город"/>
          <button type="button">Поиск</button> 
        </div>
        <div className="main-container">
          <h4>Погода онлайн</h4>
          <div className="weather-icon">
            <i className="fa fa-sun"></i>
          </div>
          <h3>Солнечно</h3>
          <div className="temprature">
            <h1>-4&deg;C</h1>
          </div>
          <div className="location">
            <h3><i className="fa fa-street-view"></i>Москва | Россия</h3>
          </div>
          <div className="temprature-range">
            <h6>Мин: -4&deg;C || Макс: -2&deg;C || Влажность: 50% </h6> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
