import React from 'react';

// Use this heart icon to create the like button
import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import './PostCard.css';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLikeClick = () => {
    const newLikedState = !isLiked;
    setIsLiked(newLikedState);
    
    // Call the external onLike function
    if (onLike) {
      onLike();
    }
    
    // Optimistically update the like count
    setLikeCount(newLikedState ? likeCount + 1 : likeCount - 1);
  };
  return (
         <div className="post-card">
      <div className="post-header">
        <span className="username">{username}</span>
      </div>
      <div className="post-image-container">
        <img src={imageUrl} alt={caption} className="post-image" />
      </div>
      <div className="post-actions">
        <button className="like-button" onClick={handleLikeClick}>
          <Heart 
            className={`heart-icon ${isLiked ? 'liked' : ''}`} 
            fill={isLiked ? '#ff0000' : 'none'}
            stroke={isLiked ? '#ff0000' : 'currentColor'}
          />
        </button>
      </div>
      <div className="post-likes">
        {likeCount} {likeCount === 1 ? 'like' : 'likes'}
      </div>
      <div className="post-caption">
        <p>
          <span className="username">{username}</span> {caption}
        </p>
      </div>
    </div>
  );
}

export default PostCard;
