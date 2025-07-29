import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, id, isLiked,  onLike  }) {
  const handleLikeClick =()=>{
    onLike(id);
  }
  return (
    <div className="post">
     {/* Build your post card here */}
     <div className='post-header'>
      <div className='avatar'>
       {username.charAt(0).toUpperCase()}
      </div>
      <span className='username'>{username}</span>
     </div>
     <img src={imageUrl} alt={caption} className='post-image' />
     <div className='post-actions'>
     <button
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLikeClick}
        >
          <Heart fill={isLiked ? '#ed4956' : 'none'} stroke={isLiked ? '#ed4956' : 'currentColor'} />
        </button>
          
        
      <div className='likes-count'>
      {likes}likes
      </div>
      </div>
    <p className='post-caption'>
      <span className='username'>{username}</span>{caption}
    </p>
     </div>
    
  
  );
}

export default PostCard
