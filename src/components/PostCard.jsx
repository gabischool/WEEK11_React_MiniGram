import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ id, username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
     {/* Build your post card here */}
     <div className="post-header">
        <h3>{username}</h3>
      </div>

      <div className="post-image-container">
        <img src={imageUrl} alt="User Post" className="post-image" />
      </div>

      <div className="post-caption">
        <p>{caption}</p>
      </div>

      <div className="post-actions">
        <button 
        className={`like-button ${likes ? 'liked' : ''}`} onClick={() => {onLike(id)

        }
      }
      >
          <Heart />
        </button>
        <span>{likes} {likes === 1 ? 'like' : 'likes'}</span>
      </div>

    </div>
  );
}

export default PostCard;
