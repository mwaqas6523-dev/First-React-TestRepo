import { NavLink } from 'react-router-dom';
import { categories } from '../data/newsData';

function NavMenu() {
  return (
    <nav className="main-nav" aria-label="اہم نیویگیشن">
      <div className="container nav-items">
        <NavLink to="/" end>
          ہوم
        </NavLink>
        {Object.entries(categories).map(([key, label]) => (
          <NavLink key={key} to={`/category/${key}`}>
            {label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default NavMenu;
