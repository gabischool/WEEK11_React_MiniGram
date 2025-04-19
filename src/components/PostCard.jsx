import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
      <div className="post-header">
        
      <div className='avatar'>{username.charAt(0).toUpperCase()}</div>
      <div className='username'>{username}</div>
      </div>
      <div className='post-image'>
      <img src={imageUrl} alt="username" className="post-image"/>
      </div>
     
      
      <div className="post-actions">
        <button  className="like-button" onClick={onLike}>
          <Heart/> {likes} likes
        </button>

      </div>
      <div className="post-captions"> <strong>{username}</strong>{caption}</div>
    </div>
  );
}

export default PostCard;
