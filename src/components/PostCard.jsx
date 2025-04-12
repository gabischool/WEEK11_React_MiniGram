import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

const PostCard = ({id, username, imageUrl, caption, likes, onLike }) => {
  return (
    <div className="post">
     {/* Build your post card here */}
     <div className="post-header">
       <div className='avatar'>
        {username.charAt(0).toUpperCase()}
       </div>
        <div className='username'>
          {username}
        </div>
      </div>

      <div className='post-img'>
      <img src={imageUrl} alt={username} className="post-image" />
      </div>
      <div className="post-actions">
      <button  className="like-button" onClick={ onLike}>
      <Heart  />{likes}Like
  
     </button>
   </div>
      <div className="post-captions">
        <strong>{username}</strong>
        <p>{caption}</p>
      </div> 
    </div>
  );
}
export default PostCard;