import React from "react";
import { useState } from "react";
// Use this heart icon to create the like button
import { Heart } from "lucide-react";

function PostCard({ username, imageUrl, caption, likes, onLike, id }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const addComment = () => {
    if (newComment.trim() === "") return;
    setComments((prev) => [...prev, newComment]);
    setNewComment("");
  };

  return (
    <div className="post">
      {/* // Build your post card here // */}
      <h1 className="username">{username}</h1>

      <img src={imageUrl} alt="image" className="post-image" />
      <p className="post-caption">{caption}</p>
      <div className="likes">
        <button onClick={() => onLike(id)}>
          <Heart
            size={24}
            color={likes >= 1 ? "red" : "black"}
            fill={likes >= 1 ? "red" : "#f5f5f5"}
          />
        </button>
      </div>
      <p className="likes-count">{likes} Likes</p>
      <div className="comment">
        <input
          type="text"
          value={newComment}
          placeholder="add comment"
          onChange={(e) => setNewComment(e.target.value)}
        ></input>
        
      <button onClick={addComment}>Add</button>
      </div>


      <ul>
        {comments.map((comment, index) => (
          <li key={index}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostCard;
