import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchText.trim();

    if (!query) {
      navigate('/');
      return;
    }

    navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        <div>
          <p className="brand-tag">Urdu News Network</p>
          <Link className="logo" to="/">
            سیاسی خبر
          </Link>
        </div>
        <form className="search-form" role="search" aria-label="خبروں میں تلاش کریں" onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="خبریں تلاش کریں..."
            aria-label="خبریں تلاش کریں"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button type="submit">تلاش</button>
        </form>
      </div>
    </header>
  );
}

export default Header;
