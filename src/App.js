
    import React, { useState, useEffect } from 'react';
    //import store from './store';

    const App = () => {
      const [planets, setPlanets] = useState({});
      const [cityName, setCityName] = useState('London');
      useEffect(() => {
        const res = async () => {
          const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName},us&units=metric&cnt=5&appid=1fe7e76da16ba7ae9935e4eaf38fd631`);
          res
            .json()
            .then(res => setPlanets(res))
        }
        res();
      }, [cityName]);
      if(!planets) {
        return <div />
      }
      return (
        <div>
          <form>
          <label>
            Name:
            <input name="cityName" type="text" placeholder="please input your cityname" onChange={ 
              e =>  setCityName(e.target.value)
            }
               />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div className='information'>
            <ul>
              <li>time</li>
              <li>min temperature</li>
              <li>max temperature</li>
              <li>conditions</li>
              <li>wind</li>
            </ul>
          {planets.list && planets.list.map((day, i) => (
            <ul key={i}>
              <li>{day.dt_txt}</li>
              <li>{day.main.temp_min} °C</li>
              <li>{day.main.temp_max} °C</li>
              <li>{day.weather[0].description}</li>
              <li>{day.wind.speed} m/s</li>
            </ul>
          ))}
        </div>
        </div>
      );
    };
export default App;
