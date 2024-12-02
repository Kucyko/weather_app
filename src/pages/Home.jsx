import './Home.css';
import wheater_icon from '../assets/images/clear-day.png'
import prognosis_icon from '../assets/images/clear-day.png'

export function Home() {
    return (
      <div>
        <div className="header-container">
          <h1 className="header">Wrocław</h1>
        </div>
        <div className='icon-container'>
          <img className='icon' src={wheater_icon}/>
        </div>
        <div className='details-container'>
          <h2 className='details-date'>Thursday, 12 November 2025</h2>
          <h2 className='details-temp'>24</h2>
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
            <img src={prognosis_icon} className='prognosis icon'/>
            <h2 className='day-temp'>
              32
            </h2>
          </div>
          <div className='day-container'>
            <h2 className='day-text'>
              2 days
            </h2>
            <img src={prognosis_icon} className='prognosis icon'/>
            <h2 className='day-temp'>
              25
            </h2>
          </div>
          <div className='day-container'>
            <h2 className='day-text'>
              3 days
            </h2>
            <img src={prognosis_icon} className='prognosis icon'/>
            <h2 className='day-temp'>
              22
            </h2>
          </div>
          <div className='day-container'>
            <h2 className='day-text'>
              4 days
            </h2>
            <img src={prognosis_icon} className='prognosis icon'/>
            <h2 className='day-temp'>
              15
            </h2>
          </div>
          <div className='day-container'>
            <h2 className='day-text'>
              5 days
            </h2>
            <img src={prognosis_icon} className='prognosis icon'/>
            <h2 className='day-temp'>
              30
            </h2>
          </div>
        </div>
      </div>)

}

