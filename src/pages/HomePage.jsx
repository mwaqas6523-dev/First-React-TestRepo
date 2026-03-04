import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { categories, newsArticles } from '../data/newsData';

function HomePage() {
  const [liveDate, setLiveDate] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const date = now.toLocaleDateString('ur-PK', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'Asia/Karachi',
      });
      const time = now.toLocaleTimeString('ur-PK', { timeZone: 'Asia/Karachi' });
      setLiveDate(`${date} | ${time}`);
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const leadArticle = newsArticles[0];
  const breakingNews = newsArticles.slice(0, 4);
  const featuredArticles = useMemo(() => newsArticles.slice(0, 4), []);

  return (
    <main className="page-content home-modern">
      <section className="top-strip" aria-label="اہم اپڈیٹس">
        <div className="container">
          <span>آج کی اہم خبریں، تجزیے اور سیاسی اپڈیٹس</span>
          <span>{liveDate}</span>
        </div>
      </section>

      <section className="container hero" aria-label="سرِفہرست خبروں کا حصہ">
        <article className="lead">
          <span className="tag">سرِفہرست</span>
          <h2>{leadArticle.title}</h2>
          <p>{leadArticle.summary}</p>
          <p className="meta">رپورٹر: {leadArticle.author} | وقت: {liveDate.split('|')[1]?.trim() || ''}</p>
          <Link className="read-more" to={`/article/${leadArticle.id}`}>
            مکمل خبر پڑھیں
          </Link>
        </article>

        <aside className="side-card">
          <h3 className="section-title">بریکنگ نیوز</h3>
          <ul>
            {breakingNews.map((item) => (
              <li key={item.id}>
                <Link to={`/article/${item.id}`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      <section className="container home-main-layout">
        <section className="section-card">
          <h3 className="section-title">اہم مضامین</h3>
          <div className="modern-news-grid">
            {featuredArticles.map((article) => (
              <article key={article.id} className="section-card nested-card">
                <span className="tag">{categories[article.category]}</span>
                <h3>{article.title}</h3>
                <p className="meta">تحریر: {article.author}</p>
                <Link className="read-more" to={`/article/${article.id}`}>
                  مزید پڑھیں
                </Link>
              </article>
            ))}
          </div>
        </section>

        <aside>
          <section className="side-card">
            <h3 className="section-title">زیادہ پڑھی جانے والی خبریں</h3>
            <ul>
              {newsArticles.slice(0, 4).map((item) => (
                <li key={`popular-${item.id}`}>
                  <Link to={`/article/${item.id}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="newsletter" style={{ marginTop: '1rem' }}>
            <h3 className="section-title">نیوز لیٹر</h3>
            <p>تازہ ترین سیاسی اپڈیٹس ای میل پر حاصل کریں۔</p>
            <input type="email" placeholder="اپنا ای میل درج کریں" aria-label="اپنا ای میل درج کریں" />
            <button type="button">سبسکرائب کریں</button>
          </section>
        </aside>
      </section>
    </main>
  );
}

export default HomePage;
