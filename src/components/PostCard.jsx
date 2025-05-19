

// Use this heart icon to create the like button
import React, { useState } from 'react';
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {

 const [liked, setLiked] = useState(false);
 const handleClick = () => {
 onLike();
 
 };

  return (
    <div className="post">
     {/* Build your post card here */}
     <h3>@{username}</h3>
     <img src={imageUrl} alt="Post" />
    <p>{caption}</p>
    <button onClick={handleClick}>
      <Heart/> Like
    </button>
    <span> ({likes}) </span>
    

    </div>
  );
}

export default PostCard;
