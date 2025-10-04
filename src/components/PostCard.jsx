import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
     {/* Build your post card here */}
           <div className="post-header">
        <div className="avatar">{username.charAt(0).toUpperCase()}</div>
        <div className="username">{username}</div>
      </div>

      <img src={imageUrl} alt="post" className="post-image" />

      <div className="post-actions">
        <button className="like-button" onClick={onLike}>
          <Heart />
        </button>
        <div className="likes-count">{likes} {likes === 1 ? 'like' : 'likes'}</div>
      </div>

      <div className="post-caption">
        <span className="username">{username}</span> {caption}
      </div>
    </div>
  );
}

export default PostCard
