import React from 'react';
import { Heart } from 'lucide-react';

export function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
      {/* Post Header */}
      <div className="post-header">
        <div className="avatar">
          {username.charAt(0).toUpperCase()}
        </div>
        <span className="username">{username}</span>
      </div>

      {/* Post Image */}
      <img src={imageUrl} alt="Post" className="post-image" />

      {/* Post Actions */}
      <div className="post-actions">
        <button
          className={`like-button ${likes > 0 ? 'liked' : ''}`}
          onClick={onLike}
        >
          <Heart />
        </button>
        <div className="likes-count">{likes} {likes === 1 ? 'like' : 'likes'}</div>
      </div>

      {/* Post Caption */}
      <div className="post-caption">
        <span className="username">{username}</span>
        <span>{caption}</span>
      </div>
    </div>
  );
}
