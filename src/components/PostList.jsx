import React from 'react';

// Import the PostCard here
import PostCard  from './PostCard';


export function PostList({ post, onLike }) {
  

  return (
    <div className="post-list">
     {post.map ((post, index) => (
     
    <PostCard 
    key={index}
    username={post.username}
    imageUrl={post.imageUrl}
    caption={post.caption}
    likes={post.likes}
    onLike={() =>onLike(index)}
    />
    ))}
    
    </div>
    )
  }
     {/* Loop through the posts here and pass to the PostCard */
      
     }

export default PostList;