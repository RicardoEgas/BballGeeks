import { NavLink } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <section>
      <h1>NBA stats from the past 10 years</h1>
      <ul className="seasonsList">
        <li>
          <NavLink to="/player-search/2022" className="link">
            Season 2022/2023
          </NavLink>
        </li>
        <li>
          <NavLink to="/player-search/2021" className="link">
            Season 2021/2022
          </NavLink>
        </li>
        <li>
          <NavLink to="/player-search/2020" className="link">
            Season 2020/2021
          </NavLink>
        </li>
        <li>
          <NavLink to="/player-search/2019" className="link">
            Season 2019/2020
          </NavLink>
        </li>
        <li>
          <NavLink to="/player-search/2018" className="link">
            Season 2018/2019
          </NavLink>
        </li>
        <li>
          <NavLink to="/player-search/2017" className="link">
            Season 2017/2018
          </NavLink>
        </li>
        <li>
          <NavLink to="/player-search/2016" className="link">
            Season 2016/2017
          </NavLink>
        </li>
        <li>
          <NavLink to="/player-search/2015" className="link">
            Season 2015/2016
          </NavLink>
        </li>
        <li>
          <NavLink to="/player-search/2014" className="link">
            Season 2014/2015
          </NavLink>
        </li>
        <li>
          <NavLink to="/player-search/2013" className="link">
            Season 2013/2014
          </NavLink>
        </li>

      </ul>
    </section>
  );
}
export default Home;
