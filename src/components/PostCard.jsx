import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
     {/* Build your post card here */}
      <div className="post-header">
        <h2 className="post-username">{username}</h2>
      </div>
      <img src={imageUrl} alt={caption} className="post-image" />
      <div className="post-caption">
        <p>{caption}</p>
      </div>
      <button onClick={onLike} className="like-button">
        <Heart size={24} /> {likes}
      </button>
    </div>
  );
}

export default PostCard
