

import React from 'react';
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  
  return (
    <div className="post">
      <h3 className="username">{username}</h3>

      {/* Fixed typo: 'ima' => 'img' */}
      <img src={imageUrl} alt="Post" className="post-image" />

      <p className="caption">{caption}</p>

      <div className="like-section">
        <button onClick={onLike} className="like-button">
          <Heart />
        </button>
        <span>{likes} likes</span>
      </div>
    </div>
  );
}

export default PostCard;