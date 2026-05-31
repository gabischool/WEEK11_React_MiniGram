import React from "react";

// Use this heart icon to create the like button
import { Heart } from "lucide-react";

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
      {/* Build your post card here */}

      <div className="post-header">
        <div className="avatar">{username.charAt(0).toUpperCase()}</div>
        <span className="username">{username}</span>
      </div>
      <img src={imageUrl} alt={username} className="post-image" />
      <div className="post-actions">
        <button className="like-button" onClick={onLike}>
          <Heart />
        </button>
        <p className="likes-count">{likes} likes</p>
        <span className="username">{username}</span>
        <span className="post-caption">{caption}</span>
      </div>
    </div>
  );
}

export default PostCard;
