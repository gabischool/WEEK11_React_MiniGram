import React from "react";

// Use this heart icon to create the like button
import { Heart } from "lucide-react";

function PostCard({
  username,
  imageUrl,
  caption,
  likes,
  onLike,
  onProfileClick,
}) {
  const avatarLatter = username.slice(0, 1).toUpperCase();
  return (
    <div className="post">
      {/* Build your post card here */}
      <div className="post-header">
        <div className="avatar" onClick={onProfileClick}>
          {avatarLatter}
        </div>
        <h3 className="username">{username}</h3>
      </div>
      <img src={imageUrl} alt={caption} className="post-image" />
      <div className="post-actions">
        <button
          className={`like-button  ${likes ? "liked" : ""}`}
          onClick={onLike}
        >
          <Heart />
        </button>
        <p className="likes-count">{likes} Likes</p>
      </div>
      <div className="post-caption">
        <strong>{username}</strong> {caption}
      </div>
    </div>
  );
}

export default PostCard;
