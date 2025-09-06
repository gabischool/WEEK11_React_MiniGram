import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
<div className="post">
  <div className = "post-header">
      <div className="avatar">{username.split(" ").map(n => n[0]).join("").toUpperCase()}
      </div>
       <h3 className='username'>@{username}</h3>
 </div>

  <img className = "post-image" src={imageUrl} alt={caption}/>
     
 
<div className = "post-actions">
       
  <button className = {`like-button ${likes > 0 ? "liked" : ""}`} onClick={onLike}>
        <Heart/>
  </button>
      <div className = "likes-count">
          {likes} {likes === 1 ? "like" : "likes"}
      </div>
 
<div className = "post-caption">
      <span className = "username">{username} </span>
      {caption}
</div>
     
</div>
</div>

  );
};


export default PostCard;
