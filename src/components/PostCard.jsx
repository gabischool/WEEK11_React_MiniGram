import React from "react";
import { Heart } from "lucide-react";

function PostCard({ post, onLike }) {
  const { username, imageUrl, caption, likes } = post;

  return (
    <div className="post">
      <div className="">
        <div className="username">{username}</div>

        <img src={imageUrl} className="post-image" />

        <div className="post-caption">
          {username} {caption}
        </div>

        <div className="post-actions ">
          <button className="like-button" onClick={() => onLike(post.id)}>
            <Heart className="like-button svg" />
          </button>

          <div className="likes-count"> {likes} likes </div>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
