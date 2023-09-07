import { Outlet, Routes, Route } from 'react-router';
import Header from './components/Header';
import './App.css';
import PlayerSearch from './components/PlayerSearch';

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
        <Route path="/playersearch" element={<PlayerSearch />} />
      </Route>
    </Routes>
  );
}

export default App;
