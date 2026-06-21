import React, { useState } from "react";
import { Heart } from "lucide-react";

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(!liked); 

    if (onLike) {
      onLike(); 
    }
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar">
          {username.charAt(0).toUpperCase()}
        </div>

        <h3>{username}</h3>
      </div>

      <img
        src={imageUrl}
        alt={caption}
        className="post-image"
      />

      <div className="post-actions">
        <button
          onClick={handleLike}
          className={`like-button ${liked ? "liked" : ""}`}
        >
          <Heart
            fill={liked ? "#ed4956" : "none"}
            color={liked ? "#ed4956" : "#555"}
          />
        </button>

        <p>{likes} likes</p>

        <p>
          <strong>{username}</strong> {caption}
        </p>
      </div>
    </div>
  );
}

export default PostCard;