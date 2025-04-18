import React from "react";

// Use this heart icon to create the like button
import { Heart } from "lucide-react";

function PostCard(props) {
  return (
    <div className="post">
      {/* Build your post card here */}
      <div className="post-header">
        <div className="avatar"> {props.username.charAt(0).toUpperCase()} </div>
        <div className="username ">{props.username}</div>
      </div>

      <div className="post-image">
        <img
          src={props.imageUrl}
          alt={props.username}
          className="post-image"
        ></img>
      </div>
      <div className="post-actions">
        <button className="like-button" onClick={props.onLike}>
          <Heart /> {props.likes} Like </button>
      </div>

    <div className="post-caption">
      <strong>{props.username}</strong> {props.caption}
    </div>
  </div>
 );
}

export default PostCard;
