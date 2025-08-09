import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
      {/* Post Header */}
      <div className="post-header">
        <div className="avatar">{username.charAt(0).toUpperCase()}</div>
        <span className="username">{username}</span>
      </div>

      {/* Post Image */}
      <img
        src={imageUrl}
        alt={caption}
        className="post-image"
      />

      {/* Post Actions */}
      <div className="post-actions">
        <button
          className={`like-button ${likes > 0 ? 'liked' : ''}`}
          onClick={onLike}
        >
          <Heart />
        </button>
        <div className="likes-count">{likes} likes</div>
      </div>

      {/* Post Caption */}
      <div className="post-caption">
        <span className="username">{username}</span> {caption}
      </div>
    </div>
  );
}

export default PostCard;
