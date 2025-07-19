import React, { useState } from 'react'; 
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike, id, isLiked, comments, onAddComment }) {
  const [newCommentText, setNewCommentText] = useState('');

  const handleLikeClick = () => {
    onLike(id);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault(); 
    onAddComment(id, newCommentText); 
    setNewCommentText(''); 
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="avatar">
          {username.charAt(0).toUpperCase()}
        </div>
        <span className="username">{username}</span>
      </div>
      <img src={imageUrl} alt={caption} className="post-image" />
      <div className="post-actions">
        <button
          className={`like-button ${isLiked ? 'liked' : ''}`}
          onClick={handleLikeClick}
        >
          <Heart fill={isLiked ? '#ed4956' : 'none'} stroke={isLiked ? '#ed4956' : 'currentColor'} />
        </button>
        <div className="likes-count">{likes} likes</div>
      </div>
      <p className="post-caption">
        <span className="username">{username}</span> {caption}
      </p>

      {/* Comment Section */}
      <div className="comments-section">
        {comments.map((comment) => (
          <p key={comment.id} className="comment">
            <span className="comment-username">{comment.username}:</span> {comment.text}
          </p>
        ))}
      </div>

      {/* Add Comment Input */}
      <form className="add-comment-form" onSubmit={handleCommentSubmit}>
        <input
          type="text"
          placeholder="Add a comment..."
          value={newCommentText}
          onChange={(e) => setNewCommentText(e.target.value)}
          className="comment-input"
        />
        <button type="submit" className="post-comment-button">Post</button>
      </form>
    </div>
  );
}

export default PostCard;