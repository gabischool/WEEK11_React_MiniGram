import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post-card">
      <img src={imageUrl} alt={caption} className="post-image" />
      <div className="post-info">
        <h2 className="post-title">{username}</h2>
        <p className="post-caption">{caption}</p>
        <div className="post-likes">
          <span>{likes} likes</span>
          <button onClick={onLike} aria-label="Like post">
            <Heart />
          </button>
        </div>
      </div>
    </div>
  );
}
export default PostCard;