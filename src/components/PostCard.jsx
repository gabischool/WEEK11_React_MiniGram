import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {

  const firstLetter = username.charAt(0).toUpperCase();
  return (
    <div className="post">
      {/* Build your post card here */}
      <div className="post-header">
        <div className="avatar">{firstLetter}</div>
        <h3 className="post-username">{username}</h3>
    </div>
      <img src={imageUrl} alt={caption} className="post-image" />
      <div className="post-actions">
        <button className="like-button" onClick={onLike}>
          <Heart />
          <span>{likes}</span>

          <p className="like-count"> <strong>{likes} {likes === 1 ? 'like' : 'likes'}</strong></p>
        </button>
      </div>
      <p className="post-caption">
        <strong>{username}</strong> {caption}
        </p>
    </div>
  );
}

export default PostCard
