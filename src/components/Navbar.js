import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <img
        src="https://logowik.com/content/uploads/images/582_basketball.jpg"
        alt="logo"
        className="logo"
      />
      <h1 className="BballGeeks">BballGeeks</h1>
      <NavLink className="link-books" to="/BballGeeks">
        <button type="button" className="home-btn">Home</button>
      </NavLink>
    </nav>
  </header>
);

export default Navbar;
