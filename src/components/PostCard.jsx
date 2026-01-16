import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

export function   PostCard({ username, imageUrl, caption, likes, onLike, id }) {
  return (
    <div className="post">
     {/* Build your post card here */}
     <h1 className="username"> {username} </h1>
     <img src={imageUrl} alt="image" className="post-image"/>
     <p className="post-caption"> {caption} </p>
     <div className="likes"> 
<button onClick={() => onLike(id)}>
<Heart 
size={24}
color = {likes >= 1 ? "red" : "black"}
fill = {likes >= 1 ?  "red" : "f5f5f5"}
/>
</button>
</div>
<p className="likes-count"> {likes} likes </p>
</div>
);
}



export default PostCard;
