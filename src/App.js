import { Routes, Route } from 'react-router';
import Header from './components/Header';
import './App.css';
import PlayerSearch from './components/PlayerSearch';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Header />} />
      <Route path="/player-search/:season" element={<PlayerSearch />} />
    </Routes>
  );
}

export default App;
