import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <h2 className="title"><i className="fa fa--cloud"></i>Погода</h2>
        <div className="search-form">
          <input type="text" placeholder="Выберите город"/>
          <button type="button">Поиск</button> 
        </div>
        <div className="main-container">
          <h4>weather Live</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
