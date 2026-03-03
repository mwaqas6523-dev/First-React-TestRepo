import { useState } from 'react';
import { signInWithPopup, signOut } from 'firebase/auth';
import { auth, facebookProvider, firebaseReady, googleProvider } from '../firebase';

function CommentSection() {
  const [user, setUser] = useState(null);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);
  const [status, setStatus] = useState('');

  const login = async (provider) => {
    if (!firebaseReady || !auth) {
      setStatus('لاگ اِن فعال کرنے کے لیے Firebase ENV متغیرات شامل کریں۔');
      return;
    }

    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      setStatus('کامیابی سے لاگ اِن ہو گیا۔');
    } catch {
      setStatus('لاگ اِن میں مسئلہ پیش آیا، دوبارہ کوشش کریں۔');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!comment.trim()) return;

    setComments((prev) => [
      {
        id: crypto.randomUUID(),
        author: user?.displayName || 'گمنام قاری',
        text: comment.trim(),
      },
      ...prev,
    ]);
    setComment('');
  };

  const logout = async () => {
    if (!auth) {
      setUser(null);
      return;
    }

    await signOut(auth);
    setUser(null);
    setStatus('لاگ آؤٹ ہو گیا۔');
  };

  return (
    <section className="comment-section" aria-label="تبصرہ سیکشن">
      <h2>تبصرے</h2>
      <p className="login-hint">تبصرہ کرنے کے لیے Google یا Facebook سے لاگ اِن کریں۔</p>

      <div className="comment-auth-actions">
        {!user ? (
          <>
            <button type="button" className="auth-btn" onClick={() => login(googleProvider)}>
              Google سے لاگ اِن
            </button>
            <button type="button" className="auth-btn" onClick={() => login(facebookProvider)}>
              Facebook سے لاگ اِن
            </button>
          </>
        ) : (
          <div className="logged-user">
            <span>{user.displayName || user.email}</span>
            <button type="button" className="auth-btn" onClick={logout}>
              لاگ آؤٹ
            </button>
          </div>
        )}
      </div>

      {status && <p className="status-text">{status}</p>}

      <form className="comment-form" onSubmit={handleSubmit}>
        <label htmlFor="comment">اپنا تبصرہ لکھیں</label>
        <textarea
          id="comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="اپنی رائے یہاں درج کریں..."
          rows={4}
          required
        />
        <button type="submit" className="read-more">
          تبصرہ بھیجیں
        </button>
      </form>

      <div className="comments-list">
        {comments.map((item) => (
          <article key={item.id} className="comment-item">
            <h4>{item.author}</h4>
            <p>{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CommentSection;
