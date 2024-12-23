import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { Settings } from './pages/Settings';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppProvider } from './AppContext';

import './App.css';

const App = () => {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
    </AppProvider>
  );
};

export default App;
