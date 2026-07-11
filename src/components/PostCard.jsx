import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
      <div className="post-header">
        <h3>{username}</h3>
      </div>

      <img src={imageUrl} alt={caption} className="post-image" />
      <div className="post-footer">
        <button className="like-button" onClick={onLike}>
          <Heart size={18} />
          <span>{likes}</span>
        </button>
      </div>
    </div>
  );
}

export default PostCard
