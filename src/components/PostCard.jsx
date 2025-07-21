import React, { useReducer } from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';
import { SendIcon } from 'lucide-react';




function PostCard({ username, imageUrl, caption, likes, onLike, onComment, commentInput, setCommentInput }) {
   
  
  return (
    <div className="post">
     {/* Build your post card here */}
     <div className="post-header">
        <span className="avatar">
          {username.at(0).toUpperCase()}
        </span>
        <h3 className="username">{username}</h3>
      </div>
      <div className="post-action">
        <img className="post-image" src={imageUrl} alt="post-image" />
        <button onClick={onLike} 
        className='like-button'>
        <span className='like-button liked svg'>
          <Heart /> 
          </span>
          </button>
          <div className='likes-count'>
           <span>{likes}</span>
           <span>likes</span>
          </div>
           <p className="post-caption">
           <span className="post-caption username">{username}</span> {caption}
           </p>

           

      {/* Add Comment */}
      <div className="add-comment">
        <input
          type="text"
          value={commentInput}
          onChange={(e) => setCommentInput(e.target.value)}
          placeholder="Add a comment..."
          className="comment-input"
        />
         <button onClick={onComment}>
         SEND{<SendIcon />}
        </button> 
      </div>

        </div>
      </div>
  );
}

export default PostCard;


