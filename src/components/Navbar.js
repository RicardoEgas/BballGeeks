import { NavLink } from 'react-router-dom';
import './styles.css';
import imageName from './—Pngtree—cartoon blue flame basketball_4261896.png';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <img
        src={imageName}
        alt="logo"
        className="logo"
      />
      <h1 className="BballGeeks">BballGeeks</h1>
      <NavLink to="/BballGeeks">
        <button type="button" className="home-btn">
          Home
        </button>
      </NavLink>
    </nav>
  </header>
);

export default Navbar;
