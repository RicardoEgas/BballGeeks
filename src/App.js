import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import PlayerSearch from './components/PlayerSearch';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/BballGeeks" element={<Home />} />
        <Route path="/player-search/:season" element={<PlayerSearch />} />
      </Routes>
    </div>
  );
}

export default App;
