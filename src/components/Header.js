import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>NBA stats</h1>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="PlayerSearch" className="link">
              Search Player
            </NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}
export default Header;
