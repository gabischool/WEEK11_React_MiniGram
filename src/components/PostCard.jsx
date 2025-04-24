import React from 'react';
import {Heart} from `lucide-react`;

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">

     /* Build your post card here */

     <h3> {username}</h3>
      <img src={imageUrl} alt="Post" className="post-image" />
      <p>{caption}</p>
      <div className="post-footer">
        <button onClick={onLike} className="like-button">
          <Heart /> {likes}
        </button>
      </div>
    </div>
  );
}

export default PostCard
