import React from "react";
import { Heart } from "lucide-react";

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
   
    <div className="post">
      <div className="post-header">
        <div className="avatar">{username}</div>
        <span className="username">{username}</span>
      </div>
      
      <img className="post-image" src={imageUrl} alt="post" />
      
      <div className="post-actions">
        <button className="like-button" onClick={onLike}>
          <Heart />
        </button>
        <div className="likes-count">{likes} likes</div>
      </div>
      
      <div className="post-caption">
        <span className="username">{username}</span> {caption}
      </div>
      
    </div>
  );
}

export default PostCard;
