import './Favourites.css';
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

export function Favourites() {
  const navigate = useNavigate();
  const { globalFav, setGlobalFav } = useAppContext();
  const goToHome = () => {
    navigate('/');
  };
  const goToHomeWithSearch = (city) => {
    navigate('/', { state: { city } });
  };


  return (
    <div>
      <div className="title-container">
        <button className="button-back" onClick={goToHome}>Back</button>
        <p className="disclaimer">Here you can manage your favourites
          cities.</p>
        <h1>Favourites Page</h1>
      </div>
      <ul className={'list'}>
        {globalFav.map((item, index) => (
          <li onClick={() => goToHomeWithSearch(item)} className={'list-item'} key={index}>{item}

          </li>
        ))}
      </ul>
    </div>
  );
}
