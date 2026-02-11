import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
      <h3> {username}</h3>
      <img src={imageUrl} alt="post"/>
      <p> {caption}</p>
      <div>
        <button onClick={onLike}>
          <Heart size={20}/>
        </button>
      </div>
     <span>{likes} likes </span>
    </div>
  );
}

export default PostCard
