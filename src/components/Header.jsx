import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div>
          <p className="brand-tag">Urdu News Network</p>
          <Link className="logo" to="/">
            سیاسی خبر
          </Link>
        </div>
        <form className="search-form" role="search" aria-label="خبروں میں تلاش کریں">
          <input type="search" placeholder="خبریں تلاش کریں..." aria-label="خبریں تلاش کریں" />
          <button type="submit">تلاش</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
