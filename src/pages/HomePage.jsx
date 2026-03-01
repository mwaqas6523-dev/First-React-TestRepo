import NewsCard from '../components/NewsCard';
import { categories, newsArticles } from '../data/newsData';

function HomePage() {
  return (
    <main className="container page-content">
      <section className="headline-section" aria-labelledby="latest-news-heading">
        <h1 id="latest-news-heading">آج کی اہم سرخیاں</h1>
        <div className="news-grid">
          {newsArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      <section className="category-summary" aria-label="مرکزی شعبہ جات">
        {Object.entries(categories).map(([key, label]) => (
          <article key={key}>
            <h2>{label}</h2>
            <p>اس شعبے کی تازہ ترین خبریں، فوری اپ ڈیٹس اور مستند تجزیے ایک جگہ۔</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default HomePage;
