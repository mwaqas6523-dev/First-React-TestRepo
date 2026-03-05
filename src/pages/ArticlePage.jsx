import { useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import CommentSection from '../components/CommentSection';
import { categories, newsArticles } from '../data/newsData';

function ArticlePage() {
  const { articleId } = useParams();
  const article = useMemo(() => newsArticles.find((entry) => entry.id === articleId), [articleId]);

  if (!article) {
    return (
      <main className="container page-content">
        <h1>خبر دستیاب نہیں</h1>
        <Link className="read-more" to="/">
          ہوم پیج پر واپس جائیں
        </Link>
      </main>
    );
  }

  return (
    <main className="container page-content">
      <article className="article-detail">
        <p className="category-label">{categories[article.category]}</p>
        <h1>{article.title}</h1>
        <div className="meta article-meta">
          <span>مصنف: {article.author}</span>
          <time dateTime={article.date}>{article.date}</time>
        </div>
        <img src={article.image} alt={article.title} className="article-image" />
        {article.content.split('\n\n').map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>

      <CommentSection />
    </main>
  );
}

export default ArticlePage;
