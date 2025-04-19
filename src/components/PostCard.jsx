import React from 'react';


// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({username,imageUrl,caption,likes,onLike }) {
  return (
    <div className="post">
     {/* Build your post card here */}
    

     <div className="post-username">
      <h3>{username}</h3> 

      </div>

      <div className="postcard-image">
        <img src={imageUrl} alt={caption}/>

        </div>


        <div className="post-likes">
        <h3>{likes}</h3>
      </div>

        <div className="button-like" >
      </div>

         </div>

  );
};

export default PostCard;
