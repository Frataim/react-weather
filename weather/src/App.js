import React, {useState, useEffect} from 'react'
import './App.css';
import {getWeatherData} from './data/weather'
import {ScaleLoader} from 'react-spinners'

function App() {
  // Объявляем переменные состояния weatherdata,city,loading.
  const [weatherdata, setWeatherData] = useState(null)
  const [city, setCity] = useState('Moscow')
  const [loading, setLoading] = useState(false)
// получаем данные
  const getData = async () => {
    try {
      setLoading(true)
      const data = await getWeatherData(city)
      setWeatherData(data)
      setLoading(false)
    } catch (error) {
      console.log(error.message)
      setLoading(false)
    }
  }
  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="App">
      <div className="card">
        <h2 className="title"><i className="fa fa-cloud"></i>Погода</h2>
        <div className="search-form">
          <input type="text" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Выберите город"/>
          <button type="button" onClick={() => getData()}>Поиск</button> 
        </div>
        {loading ? (
          <div className="loader-container">
          <ScaleLoader
          css={override}
          size={200}
          color={"#fff"}
          loading={loading}
          />
          </div>

        ) : (
          <>
        {weatherdata !== null ?(
        <div className="main-container">
          <h4>Погода онлайн</h4>
          <div className="weather-icon">
            <img src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`} alt="imgicon"/>
          </div>
          <h3>{weatherdata.weather[0].main}</h3>
          <div className="temprature">
            <h1>{Math.round(weatherdata.main.temp - 273.15)}&deg;C</h1>
          </div>
          <div className="location">
            <h3><i className="fa fa-street-view"></i>{weatherdata.name} | {weatherdata.sys.country}</h3>
          </div>
          <div className="temprature-range">
            <h6>Мин: {Math.round(weatherdata.main.temp_min - 273.15)}&deg;C || Макс: {Math.round(weatherdata.main.temp_max - 273.15)} &deg;C || Влажность: {weatherdata.main.humidity}%</h6>
          </div>
        </div>
        ) : null}
          </>
        ) }


      </div>
    </div>
  );
}

export default App;
