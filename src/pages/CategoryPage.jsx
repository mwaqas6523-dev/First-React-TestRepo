import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { categories, newsArticles } from '../data/newsData';

function CategoryPage() {
  const { categoryId } = useParams();

  const categoryNews = useMemo(
    () => newsArticles.filter((article) => article.category === categoryId),
    [categoryId]
  );

  return (
    <main className="container page-content">
      <section>
        <h1>{categories[categoryId] || 'زمرہ دستیاب نہیں'}</h1>
        <p>تازہ ترین اپ ڈیٹس اور گہرائی سے تجزیاتی رپورٹنگ۔</p>
        <div className="news-grid">
          {categoryNews.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default CategoryPage;
