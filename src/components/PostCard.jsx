import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

const App = () => {
  return (
    <div>
      <Heart color="#df2a2a" absoluteStrokeWidth />
    </div>
  );
};


function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
     {/* Build your post card here */}
      <img src={imageUrl} alt={caption} className="post-image" />
      <div className="post-info">
        <h2 className="post-username">{username}</h2>
        <p className="post-caption">{caption}</p>
        <button onClick={onLike} className="like-button">
          <Heart /> {likes}
        </button>
      </div>
    </div>
  );
}

export default PostCard
