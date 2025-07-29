import React from 'react';
import { Heart } from 'lucide-react';
import './PostCard.css';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  const isLiked = likes > 0;
  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar">
          <img src={`https://ui-avatars.com/api/?name=${username}&background=random`} alt={username} />
        </div>
        <div className="username">{username}</div>
      </div>
      <img className="post-image" src={imageUrl} alt={caption} />
      <div className="post-actions">
        <button className={`like-button${isLiked ? ' liked' : ''}`} onClick={onLike} aria-label="Like">
          <Heart />
        </button>
      </div>
      <div className="likes-count">{likes} likes</div>
      <div className="post-caption">
        <span className="username">{username}</span> {caption}
      </div>
    </div>
  );
}

export default PostCard;