import { NavLink } from 'react-router-dom';
import './styles.css';

function Home() {
  return (
    <section>
      <h1>NBA stats from the past 10 years</h1>
      <div className="seasonsList">
        <div>
          <NavLink to="/player-search/2022" className="link">
            <div>Season 2022/2023</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/player-search/2021" className="link">
            <div>Season 2021/2022</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/player-search/2020" className="link">
            <div>Season 2020/2021</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/player-search/2019" className="link">
            <div>Season 2019/2020</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/player-search/2018" className="link">
            <div>Season 2018/2019</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/player-search/2017" className="link">
            <div>Season 2017/2018</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/player-search/2016" className="link">
            <div>Season 2016/2017</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/player-search/2015" className="link">
            <div>Season 2015/2016</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/player-search/2014" className="link">
            <div>Season 2014/2015</div>
          </NavLink>
        </div>
        <div>
          <NavLink to="/player-search/2013" className="link">
            <div>Season 2013/2014</div>
          </NavLink>
        </div>

      </div>
    </section>
  );
}
export default Home;
