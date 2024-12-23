import './Settings.css';
import Dropdown from '../functions/dropdown.jsx';
import { useAppContext } from '../AppContext';
import { useNavigate } from 'react-router-dom';

export function Settings() {
  const { selectedOption, setSelectedOption } = useAppContext();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };


  return (
    <div>
      <div className="title-container">
        <button className="button-back" onClick={goToHome}>Back</button>
        <p className="disclaimer">Here you can configure your preferences.</p>
        <h1>Settings Page</h1>
      </div>
      <div className='setting-container'>
        <p>Change unit</p>
        <Dropdown selectedOption={selectedOption}
                  onOptionChange={setSelectedOption}/>
      </div>
    </div>
  );
}
