import './Home.css';

import search_icon from '/images/search.svg'
import { useEffect, useState, useRef } from 'react';

export function Home() {
  const inputRef = useRef()
  const [weatherData, setWeatherData] = useState(false);
  async function search(city){
    try {
      const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + import.meta.env.VITE_APP_ID + '&units=metric';
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: '/images/'+ data.weather[0].icon + '.png',
      })
      if (data.name != '') {
        const activatecontent = document.querySelector('.content');
        const deactivatedisclaimer = document.querySelector('.disclaimer');
        activatecontent.classList.add('active');
        deactivatedisclaimer.classList.add('inactive');
      }
    }catch (error) {
      const activeerrmes = document.querySelector('.errormes');
      activeerrmes.classList.toggle('active');
      setTimeout(function()
      {
        activeerrmes.classList.toggle('active');
      }, 3000);
    }

  }

  //Date calculation
  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today. getDate();
  const currentDate = month + "/" + date + "/" + year;

  return (
    <div>
      <div className="header-container">
        <div className='search-bar'>
          <input ref={inputRef} type='text' placeholder='Search'/>
          <img src={search_icon} className='search-icon'
               onClick={() => search(inputRef.current.value)}/>
        </div>
        <h2 className='disclaimer'>Please type name of the city</h2>
        <h2 className='errormes'>Error while getting city name. Please try again</h2>
      </div>
        <div className='content'>
        <h1 className="header">Wrocław</h1>
      <div className='icon-container'>
        <img className='icon' src={weatherData.icon}/>
      </div>
      <div className='details-container'>
        <h2 className='details-date'>{currentDate}</h2>
        <h2 className='details-temp'>{weatherData.temperature}<span>°C</span>
        </h2>
        <div className='text-container'>
          <h3 className='wind-text'>
            Wind
          </h3>
          <h3 className='wind-number'>
            9km/h
          </h3>
        </div>
        <div className='text-container'>
          <h3 className='rain-text'>
            Rain
          </h3>
          <h3 className='rain-number'>
            52% | 10mm
          </h3>
        </div>
        <div className='text-container'>
          <h3 className='clouds-text'>
            Clouds
          </h3>
          <h3 className='clouds-number'>
            20%
          </h3>
        </div>
      </div>
      <div className='prognosis-container'>
        <div className='day-container'>
          <h2 className='day-text'>
            Tomorow
          </h2>
          <img src='' className='prognosis icon'/>
          <h2 className='day-temp'>
            32
          </h2>
        </div>
        <div className='day-container'>
          <h2 className='day-text'>
            2 days
          </h2>
          <img src='' className='prognosis icon'/>
          <h2 className='day-temp'>
            25
          </h2>
        </div>
        <div className='day-container'>
          <h2 className='day-text'>
            3 days
          </h2>
          <img src='' className='prognosis icon'/>
          <h2 className='day-temp'>
            22
          </h2>
        </div>
        <div className='day-container'>
          <h2 className='day-text'>
            4 days
          </h2>
          <img src='' className='prognosis icon'/>
          <h2 className='day-temp'>
            15
          </h2>
        </div>
        <div className='day-container'>
          <h2 className='day-text'>
            5 days
          </h2>
          <img src='' className='prognosis icon'/>
          <h2 className='day-temp'>
            30
          </h2>
        </div>
      </div>
        </div>
    </div>)
}


