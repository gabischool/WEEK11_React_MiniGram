import React from 'react';
import { Heart } from 'lucide-react';


export  function PostCard({ username, imageUrl, caption, likes, liked, onLike }) {

  return (

    <div className="post">
      <h3 className="post-username">{username}</h3>

      <img
        src={imageUrl}
        alt={caption}
        className="post-image"
      />

      <div className="post-actions">

        <button 

   
        
        className="like-button" onClick={onLike}>

          <Heart />
        </button>
        <span>{likes} likes</span>
      </div>

      <p className="post-caption">{caption}</p>
    </div>
  );
}




















export default PostCard;
