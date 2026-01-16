import React from 'react';
import { Heart } from 'lucide-react';

export function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar">{username.charAt(0).toUpperCase()}</div>
        <div className="username">{username}</div>
      </div>

      <img src={imageUrl} alt={caption} className="post-image" />

      <div className="post-actions">
        <button className="like-button liked" onClick={onLike}>
          <Heart />
        </button>
        <div className="likes-count">{likes} likes</div>
      </div>

      <div className="post-caption">
        <span className="username">{username}</span>
        {caption}
      </div>
    </div>
  );
}

export default PostCard;
