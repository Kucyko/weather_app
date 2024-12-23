import './Home.css';

import search_icon from '/images/search.svg'
import { useEffect, useState, useRef } from 'react';
import Dropdown from '../functions/dropdown.jsx';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../AppContext';

export function Home() {
  const inputRef = useRef()
  const { selectedOption } = useAppContext();
  const [weatherData, setWeatherData] = useState(false);
  const [windText, setWindText] = useState('');
  const [tempText, setTempText] = useState('');
  let [dailyForecast, setDailyForecast] = useState([]);

  async function search(city){
    try {
      let url
      if (selectedOption === 'metric') {
        url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + import.meta.env.VITE_APP_ID + '&units=metric';
        setWindText('km/h')
        setTempText('°C')
      }else {
        url= 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + import.meta.env.VITE_APP_ID + '&units=imperial';
        setWindText('mil/h')
        setTempText('°F')
      }
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        clouds: data.clouds.all,
        rain: data.rain ? data.rain['1h'] : '0',
        icon: '/images/'+ data.weather[0].icon + '.png',
      })

      let url2 = ''
      if (selectedOption === 'metric') {
        url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + import.meta.env.VITE_APP_ID + '&units=metric';
      }else {
        url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + import.meta.env.VITE_APP_ID + '&units=imperial';
      }
      const response2 = await fetch(url2);
      const data2 = await response2.json();
      setDailyForecast(dailyForecast = []);
      for (var i = 0; i < data2.list.length; i += 8) {
        const entry = data2.list[i];
        dailyForecast.push({
          date: entry.dt_txt.split(' ')[0],
          temperature: Math.floor(entry.main.temp),
          humidity: entry.main.humidity,
          windSpeed: entry.wind.speed,
          clouds: entry.clouds.all,
          rain: entry.rain ? entry.rain["3h"] : 0,
          icon: '/images/' + entry.weather[0].icon + '.png',
          description: entry.weather[0].description,
        });
      }

      setDailyForecast(dailyForecast);


      console.log(dailyForecast);
      if (data.name !== '') {
        const activatecontent = document.querySelector('.content');
        const deactivatedisclaimer = document.querySelector('.disclaimer');
        activatecontent.classList.add('active');
        deactivatedisclaimer.classList.add('inactive');
      }
    } catch (error) {
      const activeerrmes = document.querySelector('.errormes');
      activeerrmes.classList.toggle('active');
      setTimeout(function () {
        activeerrmes.classList.toggle('active');
      }, 3000);
    }
  }

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  const navigate = useNavigate();

  const goToSettings = () => {
    navigate('/settings');
  };


  //Date calculation
  const today = new Date();
  const month = today.getMonth()+1;
  const year = today.getFullYear();
  const date = today. getDate();
  const currentDate = month + "/" + date + "/" + year;

  return (
    <div>
      <div className="header-container">
        <div className="pages-conteiner">
          <button className="button-pages" onClick={goToSettings}>Settings
          </button>
        </div>
        <div className="search-bar">
          <input ref={inputRef} type="text" placeholder="Search"/>
          <img src={search_icon} className="search-icon"
               onClick={() => search(inputRef.current.value)}/>
        </div>
        <h2 className="disclaimer">Please type name of the city</h2>
        <h2 className="errormes">Error while getting city name. Please try
          again</h2>
      </div>
      <div className="content">
        <h1 className="header">{weatherData.location}</h1>
        <div className="icon-container">
        <img className='icon' src={weatherData.icon}/>
      </div>
      <div className='details-container'>
        <h2 className='details-date'>{currentDate}</h2>
        <h2 className='details-temp'>{weatherData.temperature}<span>{tempText}</span>
        </h2>
        <div className='text-container'>
          <h3 className='wind-text'>
            Wind
          </h3>
          <h3 className='wind-number'>
            {weatherData.windSpeed} {windText}
          </h3>
        </div>
        <div className='text-container'>
          <h3 className='rain-text'>
            Rain
          </h3>
          <h3 className='rain-number'>
            {weatherData.humidity}% || {weatherData.rain} mm/h
          </h3>
        </div>
        <div className='text-container'>
          <h3 className='clouds-text'>
            Clouds
          </h3>
          <h3 className='clouds-number'>
            {weatherData.clouds}%
          </h3>
        </div>
      </div>
      <div className='prognosis-container'>
        <div className="day-container">
          <h2 className="day-text">
            Tomorrow
          </h2>
          {dailyForecast[1] ? (
            <>
              <img src={dailyForecast[1].icon} alt="Weather icon" className="prognosis-icon" />
              <h2 className="day-temp">{dailyForecast[1].temperature}{tempText}</h2>
            </>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div className="day-container">
          <h2 className='day-text'>
            2 days
          </h2>
          {dailyForecast[2] ? (
            <>
              <img src={dailyForecast[2].icon} alt="Weather icon" className="prognosis-icon" />
              <h2 className="day-temp">{dailyForecast[2].temperature}{tempText}</h2>
            </>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div className='day-container'>
          <h2 className='day-text'>
            3 days
          </h2>
          {dailyForecast[3] ? (
            <>
              <img src={dailyForecast[3].icon} alt="Weather icon" className="prognosis-icon" />
              <h2 className="day-temp">{dailyForecast[3].temperature}{tempText}</h2>
            </>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
        <div className='day-container'>
          <h2 className='day-text'>
            4 days
          </h2>
          {dailyForecast[4] ? (
            <>
              <img src={dailyForecast[4].icon} alt="Weather icon" className="prognosis-icon" />
              <h2 className="day-temp">{dailyForecast[4].temperature}{tempText}</h2>
            </>
          ) : (
            <h2>Loading...</h2>
          )}
        </div>
      </div>
        </div>
    </div>)
}


