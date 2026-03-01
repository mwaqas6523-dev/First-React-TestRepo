import { FaFacebookF, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>سیاسی خبر</h3>
          <p>پاکستان اور دنیا بھر سے مستند اردو سیاسی خبریں، تجزیے اور بریکنگ اپ ڈیٹس۔</p>
        </div>
        <div>
          <h4>اہم روابط</h4>
          <ul>
            <li>
              <Link to="#">About</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>سوشل میڈیا</h4>
          <div className="social-links" aria-label="سوشل میڈیا روابط">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
              <FaYoutube />
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X Twitter">
              <FaXTwitter />
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">© 2026 سیاسی خبر - جملہ حقوق محفوظ ہیں</p>
    </footer>
  );
}

export default Footer;
