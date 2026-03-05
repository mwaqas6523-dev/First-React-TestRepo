import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import NewsCard from '../components/NewsCard';
import { newsArticles } from '../data/newsData';

function SearchPage() {
  const { search } = useLocation();
  const query = useMemo(() => new URLSearchParams(search).get('q')?.trim() || '', [search]);

  const searchResults = useMemo(() => {
    if (!query) return [];

    const normalizedQuery = query.toLowerCase();

    return newsArticles.filter((article) => {
      const haystack = `${article.title} ${article.summary} ${article.content} ${article.author}`.toLowerCase();
      return haystack.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <main className="container page-content">
      <section>
        <h1>تلاش کے نتائج</h1>
        {query ? <p>تلاش: "{query}"</p> : <p>براہِ کرم کوئی لفظ تلاش کریں۔</p>}

        {query && searchResults.length === 0 ? (
          <p className="empty-state">آپ کی تلاش کے مطابق کوئی خبر نہیں ملی۔</p>
        ) : (
          <div className="news-grid">
            {searchResults.map((article) => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        )}
      </section>
    </main>
  );
}

export default SearchPage;
