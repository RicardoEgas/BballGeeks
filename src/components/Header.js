import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header>
      <h1>NBA stats leaders</h1>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink
              to="points"
              className={({ isActive }) => (isActive ? 'active link' : 'pending link')}
            >
              Points
            </NavLink>
          </li>
          <li>
            <NavLink to="rebounds" className="link">
              Rebounds
            </NavLink>
          </li>
          <li>
            <NavLink to="assists" className="link">
              Assists
            </NavLink>
          </li>
          <li>
            <NavLink to="blocks" className="link">
              Blocks
            </NavLink>
          </li>
          <li>
            <NavLink to="steals" className="link">
              Steals
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
