import { Link } from 'react-router-dom';
import { categories } from '../data/newsData';

function NewsCard({ article }) {
  return (
    <article className="news-card">
      <img src={article.image} alt={article.title} loading="lazy" />
      <div className="news-card-content">
        <span className="category-label">{categories[article.category]}</span>
        <h3>{article.title}</h3>
        <p>{article.summary}</p>
        <div className="meta">
          <span>{article.author}</span>
          <time dateTime={article.date}>{article.date}</time>
        </div>
        <Link className="read-more" to={`/article/${article.id}`}>
          مزید پڑھیں
        </Link>
      </div>
    </article>
  );
}

export default NewsCard;
