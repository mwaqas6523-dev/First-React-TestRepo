import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';

function HomePage() {
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();
  const buildTag = typeof __APP_BUILD__ !== 'undefined' ? __APP_BUILD__ : 'local';

  const handleSearch = (event) => {
    event.preventDefault();
    const query = searchText.trim();
    navigate(query ? `/search?q=${encodeURIComponent(query)}` : '/');
  };

  return (
    <div className="sb-page">
      <div className="sb-top-strip">
        <div className="sb-container">
          <span>آج کی اہم خبریں، تجزیے اور سیاسی اپڈیٹس</span>
          <span>ہفتہ، 1 مارچ 2026</span>
          <span className="build-badge">Build: {buildTag}</span>
        </div>
      </div>

      <header className="sb-header">
        <div className="sb-container sb-brand">
          <div>
            <h1>سیاست بازی</h1>
            <small>Siyasat Bazi — اردو خبری ویب سائٹ</small>
          </div>
          <div className="sb-brand-right">
            <small>سچ، تجزیہ اور بروقت رپورٹنگ</small>
            <form className="sb-search" onSubmit={handleSearch}>
              <input
                type="search"
                placeholder="خبریں تلاش کریں..."
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
                aria-label="خبریں تلاش کریں"
              />
              <button type="submit">تلاش</button>
            </form>
          </div>
        </div>

        <nav className="sb-container sb-nav" aria-label="اہم سیکشنز">
          <ul>
            <li>
              <Link to="/">تازہ ترین</Link>
            </li>
            <li>
              <Link to="/category/national">پاکستان</Link>
            </li>
            <li>
              <Link to="/category/international">دنیا</Link>
            </li>
            <li>
              <Link to="/category/national">معیشت</Link>
            </li>
            <li>
              <Link to="/category/national">انتخابات</Link>
            </li>
            <li>
              <Link to="/category/social">رائے</Link>
            </li>
          </ul>
        </nav>
      </header>

      <section className="sb-container sb-hero">
        <article className="sb-lead">
          <span className="sb-tag">سرِفہرست</span>
          <h2>پارلیمنٹ میں اہم قانون سازی پر گرما گرم بحث، حکومتی اور اپوزیشن مؤقف سامنے آ گیا</h2>
          <p>
            قومی اسمبلی کے اجلاس میں انتخابی اصلاحات اور معیشت سے متعلق بلوں پر تفصیلی بحث ہوئی۔ ماہرین کے مطابق
            آئندہ چند ہفتوں میں سیاسی منظرنامے میں نمایاں تبدیلیاں متوقع ہیں۔
          </p>
          <p className="sb-meta">رپورٹر: عائشہ فاروق | وقت: 10:45 صبح</p>
        </article>

        <aside className="sb-side-card">
          <h3 className="sb-section-title">بریکنگ نیوز</h3>
          <ul>
            <li>وزیراعظم کا توانائی پیکج متعارف کرانے کا اعلان</li>
            <li>صوبائی اسمبلی میں بجٹ تجاویز پیش</li>
            <li>الیکشن کمیشن کا نئی حلقہ بندیوں پر اجلاس</li>
            <li>ڈالر کی قدر میں معمولی کمی</li>
          </ul>
        </aside>
      </section>

      <main className="sb-container sb-main">
        <section className="sb-section-card">
          <h3 className="sb-section-title">اہم مضامین</h3>
          <div className="sb-news-grid">
            <article className="sb-section-card">
              <span className="sb-tag">تجزیہ</span>
              <h3>حکومت اور اپوزیشن کے درمیان مذاکرات: کیا کوئی درمیانی راستہ نکلے گا؟</h3>
              <p className="sb-meta">تحریر: کامران افضل</p>
            </article>
            <article className="sb-section-card">
              <span className="sb-tag">معیشت</span>
              <h3>نئی مالیاتی پالیسی کے اثرات: عوام کو کیا ریلیف ملے گا؟</h3>
              <p className="sb-meta">تحریر: سارہ نقوی</p>
            </article>
            <article className="sb-section-card">
              <span className="sb-tag">انتخابات</span>
              <h3>بلدیاتی الیکشن کی تیاری: بڑے شہروں میں سیاسی جوڑ توڑ تیز</h3>
              <p className="sb-meta">تحریر: بلال احمد</p>
            </article>
            <article className="sb-section-card">
              <span className="sb-tag">اداریہ</span>
              <h3>جمہوری اقدار اور میڈیا کی ذمہ داری</h3>
              <p className="sb-meta">ادارتی ٹیم</p>
            </article>
          </div>
        </section>

        <aside>
          <section className="sb-side-card">
            <h3 className="sb-section-title">زیادہ پڑھی جانے والی خبریں</h3>
            <ul>
              <li>سینیٹ انتخابات میں سیاسی جماعتوں کی حکمتِ عملی</li>
              <li>مہنگائی کے خلاف ملک بھر میں احتجاج</li>
              <li>خارجہ پالیسی پر پارلیمانی کمیٹی کا اجلاس</li>
              <li>نوجوان ووٹرز کا بڑھتا ہوا سیاسی کردار</li>
            </ul>
          </section>

          <section className="sb-newsletter">
            <h3 className="sb-section-title">نیوز لیٹر</h3>
            <p>تازہ ترین سیاسی اپڈیٹس ای میل پر حاصل کریں۔</p>
            <input type="email" placeholder="اپنا ای میل درج کریں" aria-label="اپنا ای میل درج کریں" />
            <button type="button">سبسکرائب کریں</button>
          </section>
        </aside>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
