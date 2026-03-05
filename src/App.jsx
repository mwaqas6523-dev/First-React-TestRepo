import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import NavMenu from './components/NavMenu';
import ArticlePage from './pages/ArticlePage';
import CategoryPage from './pages/CategoryPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">
        مرکزی مواد پر جائیں
      </a>
      <Header />
      <NavMenu />
      <div id="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
          <Route path="/article/:articleId" element={<ArticlePage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
