import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, comments, onLike, onComment  }) {
  const [commentText, setCommentText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (commentText.trim() !== '') {
      onComment(commentText);
      setCommentText('');
    }
  };
  return (
    <div className="post">
     {/* Build your post card here */}
     <div className="post-header">
        <div className="avatar">{username.charAt(0).toUpperCase()}</div>
        <div className="username">{username}</div>
      </div>
      <img className="post-image" src={imageUrl} alt="Post" />
      <div className="post-actions">
        <button className="like-button" onClick={onLike}  aria-label="Like Post">
          <Heart />
        </button>
        <div className="likes-count">{likes} likes</div>
      </div>
      <div className="post-caption">
        <span className="username">{username}</span>
        {caption}
      </div>

      <div className="post-comments" style={{ padding: '0 14px 14px' }}>
        {comments.map((comment, index) => (
          <div key={index} style={{ marginTop: '4px' }}>
            💬 {comment}
          </div>
        ))}
    </div>
    </div>
  );
}

export default PostCard
