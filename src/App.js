import { Outlet, Routes, Route } from 'react-router';
import Header from './components/Header';
import './App.css';
import Points from './components/Points';
import Assists from './components/Assists';
import Rebounds from './components/Rebounds';
import Blocks from './components/Blocks';
import Steals from './components/Steals';

const Home = () => (
  <>
    <Header />
    <Outlet />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/points" element={<Points />} />
        <Route path="/rebounds" element={<Rebounds />} />
        <Route path="/assists" element={<Assists />} />
        <Route path="/blocks" element={<Blocks />} />
        <Route path="/steals" element={<Steals />} />
      </Route>
    </Routes>
  );
}

export default App;
