import React from 'react';

// Use this heart icon to create the like button
import { Heart } from 'lucide-react';

function PostCard({ username, imageUrl, caption, likes, onLike }) {
  return (
    <div className="post">
  <h3 className='title'>{username} </h3>
  <img src={imageUrl} alt = {caption} />
    <p className='description'>{caption}  </p>
    <div className='postlike'>
<button onClick={onLike} className='like button'>
<Heart color='red'/>
</button>
<span>{likes} likes</span>
    </div>
    </div>
  );
}

export default PostCard