import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ post, onLike }) {
  const { id, username, imageUrl, caption, likes } = post;
  return (
    <div className="post">
     {/* Build your post card here */}
     <div className="post-header">
      <div className="avatar">
         <h1>{username.charAt(0).toUpperCase()}</h1>
      </div>
      <div className="username">
        <h2>{username}</h2>
      </div>
     </div>

     <div className="post-image">
      <img src= {imageUrl} alt='post-image'/>
     </div>

     <div className="post-actions">


      <button className={`like-button ${likes ? 'liked' : ''}`}
        onClick ={()=> onLike(id)}
      >
          <Heart/>
        </button>

        <div className="likes-count">
          {likes} {likes === 1 ? 'like' : 'likes'}
        </div>

        <div className="post-caption">
          <span className='username'>{username}</span> {caption}
        </div>


     
     </div>

    </div>
  );
}

export default PostCard
