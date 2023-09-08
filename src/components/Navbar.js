import { NavLink } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <h1 className="BballGeeks">BballGeeks</h1>
      <NavLink className="link-books" to="/">
        <img
          src="https://logowik.com/content/uploads/images/582_basketball.jpg"
          alt="logo"
          className="logo"
        />
      </NavLink>
    </nav>
  </header>
);

export default Navbar;
