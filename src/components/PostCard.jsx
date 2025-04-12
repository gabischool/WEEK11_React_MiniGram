import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

// export function 
 const PostCard = ({ username, imageUrl, caption, likes, onLike })=> {
  return (
    <div className="post">
      <div className='post-header'>
        <div className='avatar'>
        {username.charAt(0).toUpperCase()} 
          
        </div>
        <div className='username'>
        {username}
        </div>
        </div> 

        <div className='post-img'>
       <img src={imageUrl} alt={username} className="post-image"/>
      </div>
      
      
      
      <div className='post-actions'>
        <button className='like-button'onClick={onLike}>
          <Heart />{likes} likes 
        </button>

      </div>
      
      <div className='post-captions'>
        <strong>{username}</strong>
        {caption}
      </div>
    </div>
  );
}
 {/* Build your post card here */}
     
 


export default PostCard;
