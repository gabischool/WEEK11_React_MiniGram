import React from "react";
import { Heart } from "lucide-react";

function PostCard({  post,  onLike }) {
  console.log(post)
  return (
    <div className="post">
     {/* Build your post card here */}
     <h2 className="post-username">{post.username}</h2>
     <img className="post-image" src={post.imageUrl}/>
     <p className="post-caption">{post.caption}</p>
     <p className="post-likes">{post.likes}</p>
     <button className="like-button" onClick={()=> onLike(post.id)}>
      <Heart size={20}/> 
     </button>
      </div>
  );
}

export default PostCard