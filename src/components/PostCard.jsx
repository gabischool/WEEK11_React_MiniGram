import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike, postid }) {
  return (
     
    <div  className="post">
            <p className='post-header'>{username}</p>
            <img className="post-image" src={imageUrl} />
            <p classname= 'post-header'>{caption}</p>
            <p classname='likes-count'>{likes}</p>
          


            <button onClick={() => onLike(postid)}>
              ❤️ like {likes}
            </button>
          </div>
        
   
  );
}

export default PostCard
